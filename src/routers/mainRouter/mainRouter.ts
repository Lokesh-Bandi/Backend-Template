import express, { Request, Response } from 'express';

import ROUTES from '../constants.ts';
import loginRouter from '../login/loginRouter.ts';
import signUpRouter from '../signup/signupRouter.ts';

const mainRouter = express.Router();

mainRouter.use(`/${ROUTES.login}`, loginRouter);
mainRouter.use(`/${ROUTES.signUp}`, signUpRouter);

mainRouter.get('/', (req: Request, res: Response) => {
  console.log('Main Router');
});

export default mainRouter;
