import { Request, Response } from 'express';

import modal from './modal.js';

const controller = {
  fetchDataTest: async (req: Request, res: Response) => {
    console.log('Main Router');
    try {
      const data = await modal.getJsonData();
      res.send(data);
    } catch (error) {
      res.status(404);
    }
  },
};

export default controller;
