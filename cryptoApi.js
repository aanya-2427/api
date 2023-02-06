import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

 const cryptoApiHeaders ={
  'x-RapidAPI-Key': '9f507cd62emsh5318c28aab64c0dp1cef83jsn432851ca06a0',
  'x-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

 }


 const baseUrl='https://coinranking1.p.rapidapi.com';
 const createRequest =(url)=>({url,headers: cryptoApiHeaders});


 export const cryptoApi =createApi({
  reducerPath :'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints:(builder)=>({
    getCryptos: builder.query({
      query: (count) =>createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId)=>createRequest(`/coin/${coinId}`),
    })
  })

 }); 

 export const {
  useGetCryptosQuery,useGetCryptoDetailsQuery
 } = cryptoApi;


// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges',
//   headers: {
//     'X-RapidAPI-Key': '9f507cd62emsh5318c28aab64c0dp1cef83jsn432851ca06a0',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };