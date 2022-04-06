import * as express from 'express';
import walletController from '../controllers/wallet';
import withdrawController from '../controllers/withdraw';
import feeController from '../controllers/ethFee';
const privateRouter = express.Router();

privateRouter.post('/transfer/create', walletController.transferBalance);
privateRouter.post('/transfer/update', walletController.updateTranferWithdrawID);
privateRouter.post('/eth/withdraw', withdrawController.withdrawByEth);
privateRouter.get('/child/all', walletController.fetchAllChilds);
privateRouter.get('/child/one', walletController.fetchChildsOfCurrency);
privateRouter.get('/fee/eth', feeController.getETHFee);

export { privateRouter };
