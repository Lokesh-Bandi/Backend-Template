import express from 'express';

import ROUTES from '../constants.js';
import loginRouter from '../login/router.js';
import signUpRouter from '../signup/router.js';

import MainController from './controller.js';

const mainRouter = express.Router();

mainRouter.use(`/${ROUTES.login}`, loginRouter);
mainRouter.use(`/${ROUTES.signUp}`, signUpRouter);

mainRouter.get('/', MainController.fetchDataTest);

export default mainRouter;
