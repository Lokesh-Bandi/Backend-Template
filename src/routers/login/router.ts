import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  console.log('login page');
  res.send('<h1>login Router</h1>')
});

export default router;
