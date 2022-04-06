import { Sequelize } from 'sequelize';
import { EthFeeModel } from './ethFee';
import { EthSubstractHistoryModel } from './history';
import { EthWithdrawHistoryModel } from './ethWithdraws';
import { FailedWithdrawsHistoryModel } from './failedWithdraws';

export * from './ethFee';

export function initModels(sequelize: Sequelize) {
  EthFeeModel.initModel(sequelize);
  EthSubstractHistoryModel.initModel(sequelize);
  EthWithdrawHistoryModel.initModel(sequelize);
  FailedWithdrawsHistoryModel.initModel(sequelize);

  return {
    ethFee: EthFeeModel,
    history: EthSubstractHistoryModel,
    ethWithdraws: EthWithdrawHistoryModel,
    failedWithdraws: FailedWithdrawsHistoryModel,
  };
}
