import { Model, DataTypes, Optional } from 'sequelize';
import * as Sequelize from 'sequelize';

export interface EthSubstractHistoryAttributes {
  id: number;
  member_id: number;
  eth_fee: number;
  type: string;
  balance: number;
  new_balance: number;
  created_at: Date;
}

export type EthSubstractHistoryCreationAttributes = Optional<
  EthSubstractHistoryAttributes,
  'id'
>;

export class EthSubstractHistoryModel
  extends Model<
    EthSubstractHistoryAttributes,
    EthSubstractHistoryCreationAttributes
  >
  implements EthSubstractHistoryAttributes {
  id!: number;
  member_id!: number;
  eth_fee!: number;
  type!: string;
  balance!: number;
  new_balance!: number;
  created_at!: Date;

  static initModel(
    sequelize: Sequelize.Sequelize
  ): typeof EthSubstractHistoryModel {
    EthSubstractHistoryModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        member_id: {
          type: DataTypes.BIGINT,
          allowNull: true,
        },
        eth_fee: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
        type: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        balance: {
          type: DataTypes.DECIMAL,
          allowNull: true,
        },
        new_balance: {
          type: DataTypes.DECIMAL,
          allowNull: true,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        tableName: 'history',
        sequelize,
        timestamps: false,
      }
    );

    return EthSubstractHistoryModel;
  }
}
