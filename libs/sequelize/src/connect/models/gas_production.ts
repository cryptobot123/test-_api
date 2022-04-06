import { mysqlConfig } from '@zozitech/shared';
import { gasProd } from '../../models';
import { setUpSequelize } from './initial';

export const gasSequelize = setUpSequelize({
  database: mysqlConfig.gasDbName,
});

export const gasModel = gasProd.initModels(gasSequelize);

(async () => {
  try {
    await gasSequelize.authenticate();
    console.log(
      'Connection has been established successfully. - gas_production'
    );
    await gasSequelize.sync();
  } catch (error) {
    console.error(
      'Unable to connect to the database - gas_production:',
      error
    );
  }
})();
