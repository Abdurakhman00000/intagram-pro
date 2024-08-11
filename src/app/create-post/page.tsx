"use client";


import CreatePost from '@/components/insta-pages/CreatePost';
import SiteBar from '@/components/insta-pages/SiteBar';
import { useState } from 'react';

const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div>
              <SiteBar openModal={openModal} />
              <CreatePost isOpen={isModalOpen} closeModal={closeModal} />
        </div>
    );
};

export default Page;