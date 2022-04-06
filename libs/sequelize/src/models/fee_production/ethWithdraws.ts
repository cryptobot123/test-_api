import { Model, DataTypes, Optional } from 'sequelize';
import * as Sequelize from 'sequelize';

export interface EthWithdrawHistoryAttributes {
  id: number;
  withdraw_id: number;
  member_id: number;
  currency_id: string;
  amount: number;
  eth_fee: number;
  state: number;
  created_at: Date;
}

export type EthWithdrawHistoryCreationAttributes = Optional<
  EthWithdrawHistoryAttributes,
  'id'
>;

export class EthWithdrawHistoryModel
  extends Model<
    EthWithdrawHistoryAttributes,
    EthWithdrawHistoryCreationAttributes
  >
  implements EthWithdrawHistoryAttributes {
  id!: number;
  withdraw_id!: number;
  member_id!: number;
  currency_id!: string;
  amount!: number;
  eth_fee!: number;
  state!: number;
  created_at!: Date;

  static initModel(
    sequelize: Sequelize.Sequelize
  ): typeof EthWithdrawHistoryModel {
    EthWithdrawHistoryModel.init(
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        withdraw_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        member_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        currency_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        amount: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        eth_fee: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        state: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        tableName: 'eth_withdraws',
        sequelize,
        timestamps: false,
      }
    );

    return EthWithdrawHistoryModel;
  }
}
