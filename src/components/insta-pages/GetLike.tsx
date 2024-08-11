"use client";

import { useGetLikeQuery } from "@/redux/api/like";
import React from "react";

interface GetLikeProps {
  postId: number; 
}

const GetLike: React.FC<GetLikeProps> = ({ postId }) => {
  const { data: likesData } = useGetLikeQuery({ postId });

  return (
    <div>
      <span style={{color: 'white'}}>{likesData?.likesCount || 0} Likes</span>
    </div>
  );
};

export default GetLike;
