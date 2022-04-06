import { Model, DataTypes, Optional } from 'sequelize';
import * as Sequelize from 'sequelize';

export interface FailedWithdrawsHistoryAttributes {
  id: number;
  withdraw_id: number;
  uid: string;
  eth_fee: number;
  currency_id: string;
  amount: number;
  reason: string;
  created_at: Date;
}

export type FailedWithdrawsHistoryCreationAttributes = Optional<
  FailedWithdrawsHistoryAttributes,
  'id'
>;

export class FailedWithdrawsHistoryModel
  extends Model<
    FailedWithdrawsHistoryAttributes,
    FailedWithdrawsHistoryCreationAttributes
  >
  implements FailedWithdrawsHistoryAttributes {
  id!: number;
  withdraw_id!: number;
  uid!: string;
  eth_fee!: number;
  currency_id!: string;
  amount!: number;
  reason!: string;
  created_at!: Date;

  static initModel(
    sequelize: Sequelize.Sequelize
  ): typeof FailedWithdrawsHistoryModel {
    FailedWithdrawsHistoryModel.init(
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
        uid: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        eth_fee: {
          type: DataTypes.BIGINT,
          allowNull: true,
        },
        currency_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        amount: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        reason: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        tableName: 'failed',
        sequelize,
        timestamps: false,
      }
    );

    return FailedWithdrawsHistoryModel;
  }
}
