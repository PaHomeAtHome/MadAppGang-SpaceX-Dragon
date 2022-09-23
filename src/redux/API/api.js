import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dragonsApi = createApi({
  reducerPath: 'dragonsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spacexdata.com/v4/',
  }),
  tagTypes: ['Dragons'],
  endpoints: builder => ({
    getDragons: builder.query({
      query: () => ({
        url: `dragons`,
      }),
      providesTags: [`Dragons`],
    }),
  }),
});

// export const authorizationApi = createApi({
//   reducerPath: 'authorisationApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com/',
//   }),
//   tagTypes: ['Token'],
//   endpoints: builder => ({
//     getUserInfo: builder.query({
//       query: token => ({
//         url: `users/current`,
//         headers: { Authorization: token },
//         providesTags: [`UserInfo`],
//       }),
//     }),
//     signUp: builder.mutation({
//       query: contact => ({
//         url: `users/signup`,
//         method: 'POST',
//         body: contact,
//       }),
//     }),
//     logIn: builder.mutation({
//       query: contact => ({
//         url: `users/login`,
//         method: 'POST',
//         body: contact,
//       }),
//       providesTags: [`Token`],
//       invalidatesTags: [`UserInfo`],
//     }),
//     logOut: builder.mutation({
//       query: token => ({
//         url: `users/logout`,
//         method: 'POST',
//         headers: { Authorization: token },
//       }),
//       invalidatesTags: [`UserInfo`, `Token`],
//     }),
//   }),
// });

export const { useGetDragonsQuery, middleware } = dragonsApi;
