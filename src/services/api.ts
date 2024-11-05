import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantType } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<RestaurantType[], void>({
      query: () => '/restaurantes'
    }),
    getRestaurant: builder.query<RestaurantType, string>({
      query: (id) => `/restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantesQuery, useGetRestaurantQuery } = api

export default api
