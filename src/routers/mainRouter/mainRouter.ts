import express, { Request, Response } from 'express';

import ROUTES from '../constants.js';
import loginRouter from '../login/loginRouter.js';
import signUpRouter from '../signup/signupRouter.js';

const mainRouter = express.Router();

mainRouter.use(`/${ROUTES.login}`, loginRouter);
mainRouter.use(`/${ROUTES.signUp}`, signUpRouter);

mainRouter.get('/', (req: Request, res: Response) => {
  console.log('Main Router');
});

export default mainRouter;
