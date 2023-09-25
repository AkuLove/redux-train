import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetCatalog } from '../types/interfaces';

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (build) => ({
    getProducts: build.query<IGetCatalog[], string>({
      query: (limit = '') => `/products?${limit && `limit=${limit}`}`,
    }),
  }),
});

export const { useGetProductsQuery } = catalogApi;
