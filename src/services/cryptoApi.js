import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import obj from './config';

const cryptoApiHeaders = {
  // 'x-rapidapi-host': obj.REACT_APP_CRYPTO_RAPIDAPI_HOST,
  // 'x-rapidapi-key': obj.REACT_APP_RAPIDAPI_KEY,
  'X-RapidAPI-Key': '08c8b2c6e6msh2dcb221fa1ced66p13b444jsna367c260b1b2',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};

// const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: obj.REACT_APP_CRYPTO_API_URL }),
  // baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),

    // Note: To access this endpoint you need premium plan
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
