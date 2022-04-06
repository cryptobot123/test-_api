import { Model, DataTypes, Optional } from 'sequelize';
import * as Sequelize from 'sequelize';

export interface GasPriceAttributes {
  id: number;
  price?: number;
  updated_at?: Date;
}

export type GasPriceCreationAttributes = Optional<GasPriceAttributes, 'id'>;

export class GasPriceModel
  extends Model<GasPriceAttributes, GasPriceCreationAttributes>
  implements GasPriceAttributes {
  id!: number;
  price?: number;
  updated_at?: Date;

  static initModel(sequelize: Sequelize.Sequelize): typeof GasPriceModel {
    GasPriceModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        price: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        tableName: 'gas_price',
        sequelize,
        timestamps: false,
      },
    );

    return GasPriceModel;
  }
}
