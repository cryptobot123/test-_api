import { Model, DataTypes, Optional } from 'sequelize';
import * as Sequelize from 'sequelize';

export interface EthFeeAttributes {
  id: number;
  fee?: string;
  updated_at?: Date;
}

export type EthFeeCreationAttributes = Optional<EthFeeAttributes, 'id'>;

export class EthFeeModel
  extends Model<EthFeeAttributes, EthFeeCreationAttributes>
  implements EthFeeAttributes {
  id!: number;
  fee?: string;
  updated_at?: Date;

  static initModel(sequelize: Sequelize.Sequelize): typeof EthFeeModel {
    EthFeeModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        fee: {
          type: DataTypes.DECIMAL,
          allowNull: true,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        tableName: 'eth_fee',
        sequelize,
        timestamps: false,
      },
    );

    return EthFeeModel;
  }
}
