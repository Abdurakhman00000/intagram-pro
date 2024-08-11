"use client";

import { useGetPostQuery } from "@/redux/api/post";
import React from "react";
import scss from "./styles/GetPost.module.scss";

const GetPosts = () => {
  const { data: posts, error, isLoading } = useGetPostQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts.</p>;

  return (
    <section>
      <div className="container_for_users_post">
        <div className={scss.user_line}></div>
        <div className={scss.user_active_photo}>
          <p>POSTS</p>
          <p>SAVED</p>
          <p>TAGGED</p>
        </div>
        {posts && posts.length > 0 ? (
          <div className={scss.main_users_photo}>
            {posts.map((post) => (
              <div key={post.id}>
                <div className={scss.users_photos}>
                  <img src={post.mediaUrl} alt="" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="alternate_for_photo">
              <h1>Share Photos</h1>
              <h3>When you share photos, they will appear on your profile.</h3>
              <p>Share your first photo</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GetPosts;
