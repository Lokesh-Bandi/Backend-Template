import { Fetcher } from '../../api/Fetcher.js';

const modal = {
  getJsonData: async (): Promise<Array<object>> => {
    const fetchedData = await Fetcher.get<Array<object>>(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return fetchedData;
  },
};

export default modal;
