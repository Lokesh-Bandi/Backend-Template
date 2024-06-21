import Fetcher from '../../api/Fetcher.js';

const modal = {
  getJsonData: async (): Promise<Array<object> | null> => {
    try {
      const fetchedData = await Fetcher.get<Array<object>>(
        'https://jsonplaceholder.typicode.com/posts'
      );
      return fetchedData;
    } catch (err) {
      return null;
    }
  },
};

export default modal;
