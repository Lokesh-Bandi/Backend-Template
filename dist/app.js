import express from 'express';
import mainRouter from './routers/mainRouter/mainRouter.js';
const app = express();
const PORT = 3000;
app.use(express.json());
app.use('/', mainRouter);
app.listen(PORT, () => {
    console.log(`Server running on ${PORT} port`);
});
