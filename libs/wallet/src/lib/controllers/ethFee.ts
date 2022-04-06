import { gasModel } from '@zozitech/sequelize';
import { RequestCustom } from '@zozitech/shared';
import { Response } from 'express';
import { times, divide, plus } from 'number-precision';
const DEFAULT_GAS_PRICE_TYPE = 3; // 1: low, 2: normal, 3: high
const GAS_NUMBER = 1000000000; // 10^9
const GAS_POINT = 0.008; // admin set number

class ETHFeeController {
  async getETHFee(req: RequestCustom, res: Response) {
    const currencies = await gasModel.currency.findAll();
    const { price: gasPrice } = await gasModel.gasPrice.findOne({
      where: { id: DEFAULT_GAS_PRICE_TYPE },
    });

    const fees = [];
    for (let i = 0; i < currencies.length; i++) {
      const currency = currencies[i];
      const limit_price = times(currency.gas_limit, gasPrice);
      const divided = divide(limit_price, GAS_NUMBER);
      const fee = plus(divided, GAS_POINT);
      fees.push({
        currency_id: currency.currency_id,
        fee: fee,
      });
    }
    return res.status(200).json(fees);
  }
}

export default new ETHFeeController();
