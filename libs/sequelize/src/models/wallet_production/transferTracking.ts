import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TransferTrackingAttributes {
  id: number;
  withdraw_id?: number;
  currency_id: string;
  member_id: number;
  amount: number;
  parent_currency: string;
  child_currency: string;
  parent_balance: number;
  new_parent_balance: number;
  child_balance: number;
  new_child_balance: number;
  completed_at: Date;
  fee: number;
}
export type TransferTrackingCreation = Optional<
  TransferTrackingAttributes,
  'id'
>;

export class TransferTrackingModel
  extends Model<TransferTrackingAttributes, TransferTrackingCreation>
  implements TransferTrackingAttributes {
  id!: number;
  withdraw_id: number;
  currency_id!: string;
  member_id!: number;
  amount!: number;
  parent_currency!: string;
  child_currency!: string;
  parent_balance!: number;
  new_parent_balance!: number;
  child_balance!: number;
  new_child_balance!: number;
  completed_at!: Date;
  fee!: number;

  static initModel(
    sequelize: Sequelize.Sequelize
  ): typeof TransferTrackingModel {
    TransferTrackingModel.init(
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        withdraw_id: {
          type: DataTypes.BIGINT,
          allowNull: true,
        },
        currency_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        member_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        amount: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        parent_currency: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        child_currency: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        parent_balance: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        new_parent_balance: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        child_balance: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        new_child_balance: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        completed_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        fee: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'transfer_tracking',
        timestamps: false,
      }
    );
    return TransferTrackingModel;
  }
}
