import { get, toLower, toNumber } from 'lodash';
import { ErrorCustom, RequestCustom } from '@zozitech/shared';
import { Response } from 'express';
import { feeModel, gasModel, peatioModel } from '@zozitech/sequelize';
import { times, plus, divide } from 'number-precision';
import { generatePeatioAccount, getBalance } from '../helpers';

const DEFAULT_GAS_PRICE_TYPE = 3; // 1: low, 2: normal, 3: high
const GAS_NUMBER = 1000000000; // 10^9
const GAS_POINT = 0.008; // admin set number

class WithdrawController {
  async withdrawByEth(req: RequestCustom, res: Response) {
    console.log(`==========[ETH WITHDRAW] ${new Date()}==========`);
    const { uid } = req.session || {uid: undefined};
    const { currency, withdraw_id, amount } = req.body || { currency: undefined, withdraw_id: undefined, amount: undefined};
    try {

      console.log(`uid=${uid} currency=${currency} transferID=${withdraw_id} withdrawID=${withdraw_id} amount=${amount}`);
      // DO: GET ETH FEE
      const { price } = (await gasModel.gasPrice.findOne({
        where: {
          id: DEFAULT_GAS_PRICE_TYPE,
        },
      })) || { price: undefined };

      if (!price) {
        throw new ErrorCustom(403, 'ETH Fee is unavailable now');
      }

      const { gas_limit } = (await gasModel.currency.findOne({
        where: {
          currency_id: toLower(currency),
        },
        attributes: ['currency_id', 'gas_limit', 'gas_price'],
      })) || { gas_limit: undefined };

      if (!price) {
        throw new ErrorCustom(403, 'Gas limit is unavailable now');
      }

      const limit_price = times(gas_limit, price);
      const divided = divide(limit_price, GAS_NUMBER);
      const ETH_FEE = plus(divided, GAS_POINT);

      try {
        if (!currency) {
          throw new ErrorCustom(403, 'Currency must not be empty');
        }
        const { id: member_id } = await peatioModel.members.findOne({
          where: {
            uid: uid,
          },
        });

        // validate member_id
        if (!member_id) {
          throw new ErrorCustom(403, 'User is not exist');
        }

        // DO: GET ETH Balance
        const ethBalance = await getBalance(member_id, 'eth');
        if (!ethBalance) {
          await generatePeatioAccount(member_id, 'eth');
          throw new ErrorCustom(
            403,
            'ETH wallet is not exist. Generated a new eth wallet for user'
          );
        }
        if (toNumber(ethBalance) < toNumber(ETH_FEE)) {
          throw new ErrorCustom(403, 'Insufficient ETH balance');
        }

        // DO: Substract ETH balance
        await peatioModel.accounts.increment(
          {
            balance: -toNumber(ETH_FEE),
          },
          {
            where: {
              member_id: member_id,
              currency_id: 'eth',
            },
          }
        );

        // DO: Save eth withdraws history
        await feeModel.ethWithdraws.create({
          withdraw_id: toNumber(withdraw_id),
          member_id: member_id,
          currency_id: currency,
          amount: amount,
          eth_fee: ETH_FEE,
          state: 0,
          created_at: new Date(),
        });

        // DO: Save substract history
        const newEthBalance = await getBalance(member_id, 'eth');
        await feeModel.history.create({
          member_id: member_id,
          eth_fee: toNumber(ETH_FEE),
          type: '-',
          balance: ethBalance,
          new_balance: newEthBalance,
          created_at: new Date(),
        });

        return res.status(200).json('ETH Withdraw successfully');
      } catch (error) {
        await feeModel.failedWithdraws.create({
          uid: uid,
          withdraw_id: withdraw_id,
          amount: amount,
          eth_fee: ETH_FEE,
          currency_id: currency,
          reason: JSON.stringify(error.message),
          created_at: new Date(),
        });
        const status = get(error, 'status', 500);
        return res.status(status).send({
          error: error.message,
        });
      }
    } catch (error) {
      console.error(error.message);

      await feeModel.failedWithdraws.create({
        uid: uid,
        withdraw_id: withdraw_id,
        amount: amount,
        eth_fee: 0,
        currency_id: currency,
        reason: JSON.stringify(error.message),
        created_at: new Date(),
      });
      const status = get(error, 'status', 500);
      return res.status(status).send({
        error: error.message,
      });
    }
  }
}

export default new WithdrawController();
