import { Sequelize } from 'sequelize';
import { GasPriceModel } from './gasPrice';
import { GasCurrencyModel } from './currency';
import { GasCurrencyOptionModel } from './currencyOptions';
import { MinCollectionModel } from './minCollection';

export * from './gasPrice';
export * from './currency';
export * from './currencyOptions';
export * from './minCollection';

export function initModels(sequelize: Sequelize) {
  GasPriceModel.initModel(sequelize);
  GasCurrencyModel.initModel(sequelize);
  GasCurrencyOptionModel.initModel(sequelize);
  MinCollectionModel.initModel(sequelize);

  return {
    gasPrice: GasPriceModel,
    currency: GasCurrencyModel,
    currencyOption: GasCurrencyOptionModel,
    minCollection: MinCollectionModel,
  };
}
