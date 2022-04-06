import type { Sequelize } from 'sequelize';
import type {
  accountsAttributes,
  accountsCreationAttributes,
} from './accounts';
import { accounts } from './accounts';
import type { membersAttributes, membersCreationAttributes } from './members';
import { members } from './members';
import {
  CurrenciesModel,
  CurrenciesAttributes,
  CurrenciesCreationAttributes,
} from './currencies';

export { accounts, members, CurrenciesModel as currencies };
export type {
  accountsAttributes,
  accountsCreationAttributes,
  membersAttributes,
  membersCreationAttributes,
  CurrenciesAttributes,
  CurrenciesCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  accounts.initModel(sequelize);
  members.initModel(sequelize);
  CurrenciesModel.initModel(sequelize);

  return {
    accounts: accounts,
    members: members,
    currencies: CurrenciesModel,
  };
}
