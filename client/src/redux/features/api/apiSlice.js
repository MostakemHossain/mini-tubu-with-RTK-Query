import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["videos"],
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => `/videos`,
      keepUnusedDataFor: 600,
      providesTags: ["Videos "],
    }),
  }),
});

export const {useGetVideosQuery}= apiSlice;
