import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ChildCurrenciesAttributes {
  id: number;
  child_id: string;
  parent_id: string;
}

export type ChildCurrenciesCreation = Optional<ChildCurrenciesAttributes, 'id'>;

export class ChildCurrenciesModel
  extends Model<ChildCurrenciesAttributes, ChildCurrenciesCreation>
  implements ChildCurrenciesAttributes {
  id!: number;
  child_id!: string;
  parent_id!: string;

  static initModel(
    sequelize: Sequelize.Sequelize
  ): typeof ChildCurrenciesModel {
    ChildCurrenciesModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        child_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        parent_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'child_currencies',
        timestamps: false,
      }
    );
    return ChildCurrenciesModel;
  }
}
