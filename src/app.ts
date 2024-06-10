import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Home location');
});
app.listen(PORT, () => {
  console.log(`Server running on ${PORT} port`);
});