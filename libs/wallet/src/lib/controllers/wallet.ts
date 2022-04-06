import { validateUid } from './../helpers/validateUserSession';
import { get, isEmpty, toLower, toNumber, toUpper } from 'lodash';
import { ErrorCustom, RequestCustom } from '@zozitech/shared';
import { Response } from 'express';
import {
  peatioModel,
  walletModel,
  ChildCurrenciesAttributes,
} from '@zozitech/sequelize';
import { generatePeatioAccount, getBalance } from '../helpers';
import {format} from 'date-fns';
class WalletController {
  async fetchAllChilds(req: RequestCustom, res: Response) {
    try {
      const childCurrencies = await walletModel.childCurrencies.findAndCountAll();

      const currencies = [];

      for (let i = 0; i < childCurrencies.count; i++) {
        const { parent_id, child_id } = childCurrencies.rows[
          i
        ].toJSON() as ChildCurrenciesAttributes;
        const { blockchain_key } = (await peatioModel.currencies.findOne({
          where: { id: child_id },
        })) || {
          blockchain_key: null,
          deposit_enabled: 0,
          withdrawal_enabled: 0,
          type: 'coin',
        };
        currencies.push({
          id: child_id,
          parent_id: parent_id,
          blockchain_key: blockchain_key,
        });
      }

      return res.status(200).json(currencies);
    } catch (error) {
      const status = get(error, 'status', 500);
      return res.status(status).send({
        error: error.message,
      });
    }
  }

  async fetchChildsOfCurrency(req: RequestCustom, res: Response) {
    try {
      const { currency } = req.query;
      const childCurrencies = await walletModel.childCurrencies.findAndCountAll(
        {
          where: {
            parent_id: toLower(String(currency)),
          },
        }
      );

      const currencies = [];

      for (let i = 0; i < childCurrencies.count; i++) {
        const { parent_id, child_id } = childCurrencies.rows[
          i
        ].toJSON() as ChildCurrenciesAttributes;
        const {
          blockchain_key,
          deposit_enabled,
          withdrawal_enabled,
          type,
        } = (await peatioModel.currencies.findOne({
          where: { id: child_id },
        })) || {
          blockchain_key: null,
          deposit_enabled: 0,
          withdrawal_enabled: 0,
          type: 'coin',
        };
        currencies.push({
          id: child_id,
          parent_id: parent_id,
          blockchain_key: blockchain_key,
          deposit_enabled: deposit_enabled,
          withdrawal_enabled: withdrawal_enabled,
          type: type,
        });
      }

      return res.status(200).json(currencies);
    } catch (error) {
      const status = get(error, 'status', 500);
      return res.status(status).send({
        error: error.message,
      });
    }
  }

  async transferBalance(req: RequestCustom, res: Response) {
    console.log(`===[TRANSFER BALANCE] ${format(new Date(), 'dd/MM/yyyy hh:mm:ss')}===`);
    try {
      const { uid } = req.session;
      const { currency, amount, fee } = req.body;

      const { id: member_id } = await peatioModel.members.findOne({
        where: {
          uid: uid,
        },
      });
      console.log(`uid=${uid} currency=${currency} amount=${amount} fee=${fee} ` );

      // validate member_id
      if (!member_id) {
        throw new ErrorCustom(403, 'User is not exist');
      }

      if (!currency) {
        throw new ErrorCustom(403, 'Currency must not be empty');
      }
      if (!amount) {
        throw new ErrorCustom(403, 'Withdraw amount must not be empty');
      }
      if (!fee) {
        throw new ErrorCustom(403, 'Fee must not be empty');
      }

      const {
        child_id: childCurrency,
        parent_id: parentCurrency,
      } = (await walletModel.childCurrencies.findOne({
        where: { child_id: toLower(currency) },
      })) || { id: undefined, child_id: undefined, parent_id: undefined };

      if (!parentCurrency) {
        return res.status(200).json({id: -1});
      }

      // DO: GET balance (child & parent)
      const OChildBalance = await getBalance(member_id, childCurrency);
      const OParentBalance = await getBalance(member_id, parentCurrency);

      if (!OChildBalance) {
        await generatePeatioAccount(member_id, childCurrency);
      }

      if (!OParentBalance) {
        await generatePeatioAccount(member_id, parentCurrency);
      }

      if (toNumber(OChildBalance) <= 0) {
        throw new ErrorCustom(
          403,
          `Having ${toUpper(childCurrency)} balance less than 0`
        );
      }

      if (toNumber(OParentBalance) <= 0) {
        throw new ErrorCustom(
          403,
          `Having ${toUpper(parentCurrency)} balance less than 0`
        );
      }

      if (toNumber(OParentBalance) < toNumber(amount)) {
        throw new ErrorCustom(
          403,
          `Insufficient ${toUpper(parentCurrency)} balance`
        );
      }

      // DO: Substract parent balance
      await peatioModel.accounts.increment(
        {
          balance: -toNumber(amount),
        },
        {
          where: {
            member_id: member_id,
            currency_id: parentCurrency,
          },
        }
      );

      // DO: Plus child balance
      await peatioModel.accounts.increment(
        {
          balance: +toNumber(amount),
        },
        {
          where: {
            member_id: member_id,
            currency_id: childCurrency,
          },
        }
      );

      // DO: GET new balance (child & parent)
      const NChildBalance = await getBalance(member_id, childCurrency);
      const NParentBalance = await getBalance(member_id, parentCurrency);

      // DO: Save history transfer money
      const {id} = await walletModel.transferTracking.create({
        member_id: member_id,
        withdraw_id: null,
        currency_id: childCurrency,
        amount: toNumber(amount),
        parent_currency: toLower(parentCurrency),
        child_currency: toLower(childCurrency),
        parent_balance: toNumber(OParentBalance),
        new_parent_balance: toNumber(NParentBalance),
        child_balance: toNumber(OChildBalance),
        new_child_balance: toNumber(NChildBalance),
        completed_at: new Date(),
        fee: toNumber(fee),
      });
      return res.status(200).json({id: id});
    } catch (error) {
      console.error(error.message);

      const status = get(error, 'status', 500);
      return res.status(status).send({
        error: error.message,
      });
    }
  }

  async updateTranferWithdrawID (req: RequestCustom, res: Response) {
    console.log(`===[UPDATE TRANSFER] ${format(new Date(), 'dd/MM/yyyy hh:mm:ss')}===`);

    try {
      const {uid} = req.session || {uid: undefined};
      const {transfer_id, withdraw_id} = req.body || {transfer_id: undefined, withdraw_id: undefined};
      console.log(`uid=${uid} transferID=${transfer_id} withdrawID=${withdraw_id}`);

      if(toNumber(transfer_id) === -1) {
        return res.status(200).json("Skip...");
      }

      if(isEmpty(uid)) {
        throw new Error("Uid is missing");
      }
      if(!transfer_id) {
        throw new Error("Transfer ID is missing");
      }
      if(!withdraw_id) {
        throw new Error("Withdraw ID is missing");
      }

      await validateUid(uid);

      const {withdraw_id: withdrawID} = await walletModel.transferTracking.findOne({where: {id: transfer_id}});
      if(!isEmpty(withdrawID)) {
        return res.status(200).json("Skip... Withdraw ID is exist! Not be updated");
      }
      await walletModel.transferTracking.update({withdraw_id: toNumber(withdraw_id)},{where: {id: toNumber(transfer_id)}});
      return res.status(200).json("Update withdraw id for tranfer balance history");
    } catch (error) {
      console.error(error.message);

      const status = get(error, 'status', 500);
      return res.status(status).send({
        error: error.message,
      });
    }
  }
}

export default new WalletController();
