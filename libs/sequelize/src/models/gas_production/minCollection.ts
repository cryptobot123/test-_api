import { Model, DataTypes, Optional } from 'sequelize';
import * as Sequelize from 'sequelize';

export interface MinCollectionAttributes {
  id: number;
  currency_id: string;
  from: number;
  to: number;
  min_collection_amount: string;
}

export type MinCollectionCreationAttributes = Optional<
  MinCollectionAttributes,
  'id'
>;

export class MinCollectionModel
  extends Model<MinCollectionAttributes, MinCollectionCreationAttributes>
  implements MinCollectionAttributes {
  id!: number;
  currency_id!: string;
  from!: number;
  to!: number;
  min_collection_amount!: string;

  static initModel(sequelize: Sequelize.Sequelize): typeof MinCollectionModel {
    MinCollectionModel.init(
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
        from: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        to: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        min_collection_amount: {
          type: DataTypes.DECIMAL,
          allowNull: false,
          defaultValue: '0.000000000000000000',
        },
      },
      {
        tableName: 'min_collection',
        sequelize,
        timestamps: false,
      },
    );

    return MinCollectionModel;
  }
}
