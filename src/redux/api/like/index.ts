import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    postLike: builder.mutation<LIKE.likePostResponse, LIKE.likePostRequest>({
      query: (likeData) => ({
        url: "/post/like",
        method: "POST",
        body: likeData,
      }),
      invalidatesTags: ["like"],
    }),
    deleteLike: builder.mutation<void, { postId: number }>({
      query: (data) => ({
        url: "/post/unlike",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["like"],
    }),
    getLike: builder.query<LIKE.getLikeResponse, { postId: number }>({
      query: ({ postId }) => ({
        url: `post/get-like/${postId}`,
        method: "GET",
      }),
      providesTags: ["like"],
    }),
  }),
});

export const { usePostLikeMutation, useDeleteLikeMutation, useGetLikeQuery } = api;
