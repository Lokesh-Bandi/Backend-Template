import express, { Request, Response } from 'express';

import ROUTES from '../constants.js';
import loginRouter from '../login/loginRouter.js';
import signUpRouter from '../signup/signupRouter.js';
import { Fetcher } from '../../api/Fetcher.js';

const mainRouter = express.Router();

mainRouter.use(`/${ROUTES.login}`, loginRouter);
mainRouter.use(`/${ROUTES.signUp}`, signUpRouter);

mainRouter.get('/', (req: Request, res: Response) => {
  console.log('Main Router');
  Fetcher.get<Array<{}>>('https://jsonplaceholder.typicode.com/posts').then(result => {
    res.send(result[0]);
  })
});

export default mainRouter;
