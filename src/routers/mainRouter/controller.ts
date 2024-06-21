import { Request, Response } from "express";
import { Fetcher } from "../../api/Fetcher.js";
import modal from "./modal.js";

const controller = {
  fetchDataTest: async (req: Request, res: Response) => {
    console.log('Main Router');
    const data = await modal.getJsonData();
    res.send(data);
  }
}

export default controller;