import React from "react";
import scss from "./styles/GetUser.module.scss";
import { useGetUserQuery } from "@/redux/api/auth";

const GetUser = () => {
  const { data } = useGetUserQuery();
  return (
    <div>
      <div className={scss.main_get_user_block}>
        <img src={data?.profile.photo} alt="" />
        <p>Profile</p>
      </div>
    </div>
  );
};

export default GetUser;
