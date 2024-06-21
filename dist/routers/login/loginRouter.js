import express from 'express';
const loginRouter = express.Router();
loginRouter.get('/', (req, res) => {
    console.log('login page');
});
export default loginRouter;
