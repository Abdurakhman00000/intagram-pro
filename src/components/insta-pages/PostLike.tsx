import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDeleteLikeMutation, usePostLikeMutation } from "@/redux/api/like";

interface PostLikeProps {
  postId: number;
  isLiked: boolean;
}

const PostLike: React.FC<PostLikeProps> = ({ postId, isLiked }) => {
  const [liked, setLiked] = useState(isLiked);
  const [postLike] = usePostLikeMutation();
  const [deleteLike] = useDeleteLikeMutation();

  const handleLike = async () => {
    try {
      if (liked) {
        const response = await deleteLike({ postId }).unwrap();
        console.log(response);
      } else {
        const response = await postLike({ postId }).unwrap();
        console.log(response);
      }
      setLiked(!liked);
    } catch (error) {
      console.error("Failed to like the post:", error);
    }
  };

  return (
    <button
      style={{ background: "transparent", border: "none", cursor: "pointer" }}
      onClick={handleLike}
    >
      {liked ? (
        <FavoriteIcon sx={{ color: "red" }} />
      ) : (
        <FavoriteBorderIcon sx={{ color: "white" }} />
      )}
    </button>
  );
};

export default PostLike;
