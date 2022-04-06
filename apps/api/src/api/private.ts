import * as express from 'express';
import * as WalletRouter from '@zozitech/wallet';

const privateRouter = express.Router();

privateRouter.use('/wallet', WalletRouter.privateRouter);

export default privateRouter;
