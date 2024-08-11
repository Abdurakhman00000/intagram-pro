"use client"


import CreatePost from '@/components/insta-pages/CreatePost';
import GetAllPost from '@/components/insta-pages/GetAllPost';
import GetUser2 from '@/components/insta-pages/GetUser2';
import HomePage from '@/components/insta-pages/HomePage';
import SiteBar from '@/components/insta-pages/SiteBar';
import React, { useState } from 'react';

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <HomePage/>
      <GetUser2/>
      <GetAllPost/>
      <SiteBar openModal={openModal} />
      <CreatePost isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Page;
