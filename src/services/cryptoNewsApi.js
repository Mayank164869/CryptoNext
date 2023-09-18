import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import obj from './config';

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  // 'x-rapidapi-key': obj.REACT_APP_RAPIDAPI_KEY,
  // 'x-rapidapi-host': obj.REACT_APP_NEWS_RAPIDAPI_HOST,
  'x-rapidapi-key': '08c8b2c6e6msh2dcb221fa1ced66p13b444jsna367c260b1b2',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
};

// const obj = {
// REACT_APP_NEWS_API_URL: 'https://bing-news-search1.p.rapidapi.com/news',
// };

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  // baseQuery: fetchBaseQuery({ baseUrl }),
  baseQuery: fetchBaseQuery({ baseUrl: obj.REACT_APP_NEWS_API_URL }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
