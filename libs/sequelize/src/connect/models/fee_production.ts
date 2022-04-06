import { mysqlConfig } from '@zozitech/shared';
import { feeProd } from '../../models';
import { setUpSequelize } from './initial';

export const feeSequelize = setUpSequelize({
  database: mysqlConfig.feeDbName,
});

export const feeModel = feeProd.initModels(feeSequelize);

(async () => {
  try {
    await feeSequelize.authenticate();
    console.log(
      'Connection has been established successfully. - fee_production'
    );
    await feeSequelize.sync();
  } catch (error) {
    console.error('Unable to connect to the database - fee_production:', error);
  }
})();
