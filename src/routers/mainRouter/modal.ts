import { Fetcher } from "../../api/Fetcher.js";

const modal = {
  getJsonData: async (): Promise<Array<{}>> => {
   const fetchedData = await Fetcher.get<Array<{}>>('https://jsonplaceholder.typicode.com/posts');
   return fetchedData;
  }
}

export default modal;