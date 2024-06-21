import express, { Request, Response } from 'express';

const signUpRouter = express.Router();

signUpRouter.get('/', (req: Request, res: Response) => {
  console.log('sign up page');
});

export default signUpRouter;
