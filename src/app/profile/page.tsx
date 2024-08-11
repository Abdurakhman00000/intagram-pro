"use client";

import CreatePost from "@/components/insta-pages/CreatePost";
import GetPosts from "@/components/insta-pages/GetPost";
import SiteBar from "@/components/insta-pages/SiteBar";
import UserProfile from "@/components/insta-pages/UserProfile";
import React, { useState } from "react";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <UserProfile />
      <GetPosts />
      <SiteBar openModal={openModal} />
      <CreatePost isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Page;
