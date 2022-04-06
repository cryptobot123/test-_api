import { Model, DataTypes, Optional } from 'sequelize';
import * as Sequelize from 'sequelize';

export interface GasCurrencyAttributes {
  currency_id: string;
  smart_contract_address?: string;
  gas_limit?: number;
  gas_price?: number;
}

export type GasCurrencyCreationAttributes = Optional<
  GasCurrencyAttributes,
  'currency_id'
>;

export class GasCurrencyModel
  extends Model<GasCurrencyAttributes, GasCurrencyCreationAttributes>
  implements GasCurrencyAttributes {
  currency_id!: string;
  smart_contract_address?: string;
  gas_limit?: number;
  gas_price?: number;

  static initModel(sequelize: Sequelize.Sequelize): typeof GasCurrencyModel {
    GasCurrencyModel.init(
      {
        currency_id: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false,
        },
        smart_contract_address: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        gas_limit: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
        gas_price: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
      },
      {
        tableName: 'currency',
        sequelize,
        timestamps: false,
      },
    );

    return GasCurrencyModel;
  }
}
