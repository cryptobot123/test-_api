import { Model, DataTypes, Optional } from 'sequelize';
import * as Sequelize from 'sequelize';

export interface GasCurrencyOptionAttributes {
  id: number;
  currency_id: string;
  options?: string;
}

export type GasCurrencyOptionCreationAttributes = Optional<
  GasCurrencyOptionAttributes,
  'id'
>;

export class GasCurrencyOptionModel
  extends Model<
    GasCurrencyOptionAttributes,
    GasCurrencyOptionCreationAttributes
  >
  implements GasCurrencyOptionAttributes {
  id!: number;
  currency_id!: string;
  options?: string;

  static initModel(
    sequelize: Sequelize.Sequelize,
  ): typeof GasCurrencyOptionModel {
    GasCurrencyOptionModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        currency_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        options: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        tableName: 'currency_option',
        sequelize,
        timestamps: false,
      },
    );

    return GasCurrencyOptionModel;
  }
}
