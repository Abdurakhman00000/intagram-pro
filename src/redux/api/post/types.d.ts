namespace POST {
  type createPostResponse = {
    id: number;
    userId: number;
    caption: string;
    mediaUrl: string;
    mediaType: "PHOTO" | "VIDEO";
    createdAt: string;
    updatedAt: string;
    isLiked: boolean;
  };

  type createPostRequest = {
    caption: string;
    mediaUrl: string;
    mediaType: "PHOTO" | "VIDEO";
  };

  type getPostResponse = {
    id: number;
    userId: number;
    caption: string;
    mediaUrl: string;
    mediaType: "PHOTO" | "VIDEO";
    createdAt: string;
    updatedAt: string;
    isLiked: boolean;
  }[];

  type getPostRequest = void;
}
