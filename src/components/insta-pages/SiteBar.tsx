"use client";

import React, { FC, useState } from "react";
import "./SiteBar.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import RadioIcon from "@mui/icons-material/Radio";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import GetUser from "./GetUser";
import { useRouter } from "next/navigation";

interface CreateButtonProps {
  openModal: () => void;
}

const SiteBar: FC<CreateButtonProps> = ({ openModal }) => {
  const router = useRouter();

  const handleRoutToHome = () => {
    router.push("/insta-home");
  };

  const handleRoutToProfile = () => {
    router.push("/profile");
  };

  return (
    <>
      <nav className="nav-menu">
        <h2>Instagram</h2>

        <div className="side_bar_nav1">
          <div className="nav">
            <HomeIcon
              sx={{ color: "rgba(255, 255, 255, 0.926)", fontSize: "29px" }}
            />
           
              <p onClick={handleRoutToHome}>Home</p>
            
          </div>

          <div className="nav">
            <SearchIcon
              sx={{ color: "rgba(255, 255, 255, 0.926)", fontSize: "29px" }}
            />
            <p>Search</p>
          </div>

          <div className="nav">
            <ExploreIcon
              sx={{ color: "rgba(255, 255, 255, 0.926)", fontSize: "29px" }}
            />
            <p>Explore</p>
          </div>

          <div className="nav">
            <RadioIcon
              sx={{ color: "rgba(255, 255, 255, 0.926)", fontSize: "29px" }}
            />
            <p>Reels</p>
          </div>

          <div className="nav">
            <ChatIcon
              sx={{ color: "rgba(255, 255, 255, 0.926)", fontSize: "29px" }}
            />
            <p>Messages</p>
          </div>

          <div className="nav">
            <FavoriteBorderIcon
              sx={{ color: "rgba(255, 255, 255, 0.926)", fontSize: "29px" }}
            />
            <p>Notifications</p>
          </div>

          <div className="nav" onClick={openModal}>
            <AddCircleOutlineIcon
              sx={{ color: "rgba(255, 255, 255, 0.926)", fontSize: "29px" }}
            />
            <p>Create</p>
          </div>

            <div onClick={handleRoutToProfile} className="nav">
              <GetUser />
            </div>
        </div>

        <div className="side_bar_nav2">
          <div className="nav2">
            <AlternateEmailIcon
              sx={{ color: "rgba(255, 255, 255, 0.926)", fontSize: "29px" }}
            />
            <p>Threads</p>
          </div>
          <div className="nav2">
            <MenuIcon
              sx={{ color: "rgba(255, 255, 255, 0.926)", fontSize: "29px" }}
            />
            <p>More</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SiteBar;
