"use client";

import React from "react";
import scss from "./styles/UserProfile.module.scss";
import SettingsIcon from "@mui/icons-material/Settings";
import { useGetUserQuery } from "@/redux/api/auth";

const UserProfile = () => {
  const { data } = useGetUserQuery();
  return (
    <section>
      <div className="container_for_user_profile">
        <div className={scss.main_profile}>
          <div className={scss.user_img}>
            <img src={data?.profile.photo} alt="" />
          </div>

          <div className={scss.users_information}>
            <div className={scss.information1}>
              <p>{data?.profile.username}</p>
              <button>Edit profile</button>
              <button>View profile</button>
              <SettingsIcon sx={{ color: "white" }} />
            </div>

            <div className={scss.information2}>
              <p>0 posts</p>
              <p>14 followers</p>
              <p>0 following</p>
            </div>
          </div>
        </div>

        <div className={scss.add_stories_button}>
          <button>+</button>
          <p>New</p>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
