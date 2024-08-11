import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation<
      POST.createPostResponse,
      POST.createPostRequest
    >({
      query: (postData) => ({
        url: "/post/create",
        method: "POST",
        body: postData,
      }),
      invalidatesTags: ["post"],
    }),
    getPost: builder.query<POST.getPostResponse, POST.getPostRequest>({
      query: () => ({
        url: "/post/get-my",
        method: "GET",
      }),
      providesTags: ["post"],
    }),
    getAllPost: builder.query<POST.getPostResponse, POST.getPostRequest>({
      query: () => ({
        url: "/post/get-all",
        method: "GET",
      }),
      providesTags: ["post"],
    }),
  }),
});

export const { useCreatePostMutation, useGetPostQuery, useGetAllPostQuery } =
  api;
