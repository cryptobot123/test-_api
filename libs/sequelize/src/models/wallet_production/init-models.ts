import type { Sequelize } from 'sequelize';
import { ChildCurrenciesModel } from './childCurrencies';
import { TransferTrackingModel } from './transferTracking';


export function initModels(sequelize: Sequelize) {
  ChildCurrenciesModel.initModel(sequelize);
  TransferTrackingModel.initModel(sequelize);

  return {
    childCurrencies: ChildCurrenciesModel,
    transferTracking: TransferTrackingModel,
  };
}
