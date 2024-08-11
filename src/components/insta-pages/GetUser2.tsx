"use client";

import React from "react";
import scss from "./styles/GetUser2.module.scss";
import { useGetUserQuery } from "@/redux/api/auth";

const GetUser2 = () => {
  const { data } = useGetUserQuery();
  return (
    <div>
      <div className={scss.main_get_user_block2}>
        <img src={data?.profile.photo} alt="" />
        <p>{data?.profile.username}</p>
      </div>
    </div>
  );
};

export default GetUser2;
