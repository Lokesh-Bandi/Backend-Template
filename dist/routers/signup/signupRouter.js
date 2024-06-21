import express from 'express';
const signUpRouter = express.Router();
signUpRouter.get('/', (req, res) => {
    console.log('sign up page');
});
export default signUpRouter;
