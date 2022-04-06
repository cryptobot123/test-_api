import { Model, DataTypes, Optional } from 'sequelize';
import * as Sequelize from 'sequelize';

export interface CurrenciesAttributes {
  id: string;
  name?: string;
  description?: string;
  homepage?: string;
  type: string;
  min_collection_amount: string;
  position: number;
  precision: number;
  options?: string;
  icon_url?: string;
  price: string;
  created_at: Date;
  updated_at: Date;
  deposit_enabled: number;
  withdrawal_enabled: number;
  blockchain_key?: string;
}

export type CurrenciesCreationAttributes = Optional<CurrenciesAttributes, 'id'>;

export class CurrenciesModel
  extends Model<CurrenciesAttributes, CurrenciesCreationAttributes>
  implements CurrenciesAttributes {
  id!: string;
  name?: string;
  description?: string;
  homepage?: string;
  type!: string;
  min_collection_amount!: string;
  position!: number;
  precision!: number;
  options?: string;
  icon_url?: string;
  price!: string;
  created_at!: Date;
  updated_at!: Date;

  deposit_enabled!: number;
  withdrawal_enabled!: number;
  blockchain_key: string;

  static initModel(sequelize: Sequelize.Sequelize): typeof CurrenciesModel {
    CurrenciesModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        homepage: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: 'coin',
        },
        min_collection_amount: {
          type: DataTypes.DECIMAL,
          allowNull: false,
          defaultValue: '0.000000000000000000',
        },
        position: {
          type: DataTypes.NUMBER,
          allowNull: false,
        },
        precision: {
          type: DataTypes.NUMBER,
          allowNull: false,
          defaultValue: '8',
        },
        options: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        icon_url: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        price: {
          type: DataTypes.DECIMAL,
          allowNull: false,
          defaultValue: '1.0000000000000000',
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        deposit_enabled: {
          type: DataTypes.TINYINT,
          allowNull: false,
        },
        withdrawal_enabled: {
          type: DataTypes.TINYINT,
          allowNull: false,
        },
        blockchain_key: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        tableName: 'currencies',
        sequelize,
        timestamps: false,
        indexes: [
          {
            name: 'index_currencies_on_position',
            using: 'BTREE',
            fields: [{ name: 'position' }],
          },
        ],
      }
    );

    return CurrenciesModel;
  }
}
