"use client";

import React, { FC } from "react";
import { useCreatePostMutation } from "@/redux/api/post";
import { useForm, SubmitHandler } from "react-hook-form";
import "./styles/CreatePost.css";

interface ICreatePostForm {
  caption: string;
  mediaUrl: string;
  mediaType: "PHOTO" | "VIDEO";
}

interface CreatePostProps {
  isOpen: boolean;
  closeModal: () => void;
}

const CreatePost: FC<CreatePostProps> = ({ isOpen, closeModal }) => {
  const [createPost] = useCreatePostMutation();
  const { register, handleSubmit } = useForm<ICreatePostForm>();

  const onSubmit: SubmitHandler<ICreatePostForm> = async (data) => {
    try {
      const response = await createPost(data).unwrap();
      console.log("Post created successfully:", response);
      closeModal();
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="main_create_inputs">
            <input
              type="text"
              placeholder="Caption"
              {...register("caption", { required: true })}
            />
            <input
              type="text"
              placeholder="Media URL"
              {...register("mediaUrl", { required: true })}
            />
            <select {...register("mediaType", { required: true })}>
              <option value="PHOTO">Photo</option>
              <option value="VIDEO">Video</option>
            </select>
            <button type="submit">Create Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
