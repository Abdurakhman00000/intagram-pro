"use client";

import { useGetAllPostQuery } from "@/redux/api/post";
import React from "react";
import scss from "./styles/GetAllPost.module.scss";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PostLike from "./PostLike";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import GetLike from "./GetLike";

const GetAllPost = () => {
  const { data: posts } = useGetAllPostQuery();

  return (
    <section>
      <div className={scss.imp_post_all}>
        <div className="container_for_posts">
          {posts && posts.length > 0 ? (
            <ul>
              {posts.map((post) => (
                <div key={post.id}>
                  <div className={scss.main_post_all}>
                    <div className={scss.active_post_all}>
                      <p style={{color: "white"}}>{new Date(post.createdAt).toLocaleString()}</p>
                      <MoreHorizIcon style={{color: "white"}} />
                    </div>
                    <img src={post.mediaUrl} alt={post.caption} width={200} />

                    <div className="active_buttons_in_post_all">
                      {/* Передача postId в PostLike */}
                     <div>
                     <PostLike postId={post.id} isLiked={post.isLiked} />
                     </div>
                    
                    <div>
                    <ChatBubbleOutlineIcon sx={{color: 'white'}}/>
                    </div>
                      
                      <div>
                      <SendIcon sx={{color: 'white', marginTop: '-2px', marginLeft: '8px'}}/> 
                      </div>

                    </div>

                    <div className="get-post-like">
                        <GetLike postId={post.id}/>
                    </div>

                    <p>{post.caption}</p>
                  </div>
                </div>
              ))}
            </ul>
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default GetAllPost;
