import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  console.log('sign up page');
  res.send('<h1>signup Router</h1>');
});

export default router;
