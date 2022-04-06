import * as WalletRouter from '@zozitech/wallet';
import * as express from 'express';

const publicRouter = express.Router();

publicRouter.use('/wallet', WalletRouter.publicRouter);

export default publicRouter;
