namespace LIKE {
  type likePostResponse = {
    userId: number;
    postId: number;
    createdAt: string;
    updatedAt: string;
  };

  type likePostRequest = {
    postId: number;
  };

  type getLikeResponse = {
    postId: number;
    likesCount: number;
    isLike: boolean;
    likedUsers: [
      {
        username: string;
        photo: string;
        likedAt: string;
      }
    ];
  };
}
