import express, { Request, Response } from 'express';

const loginRouter = express.Router();

loginRouter.get('/', (req: Request, res: Response) => {
  console.log('login page');
});

export default loginRouter;
