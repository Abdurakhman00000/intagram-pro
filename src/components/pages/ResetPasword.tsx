"use client";

import React from "react";
import scss from "./styles/ResetPassword.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "100" });

const ResetPassword = () => {
  const { register, handleSubmit } = useForm<AUTH.ResetPasswordRequest>();

  const onSubmit: SubmitHandler<AUTH.ResetPasswordRequest> = (data) => {
    console.log(data);
  };

  return (
    <div className={scss.ResetPassword}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.header}>
            <h1 className={roboto.className}>Instagram</h1>
            <p>
              Пароль должен содержать не менее <br /> 6 символов, включая цифры,
              буквы и <br />
              специальные символы (!$@%)
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("newPassword")}
              placeholder="Новый пароль"
              type="text"
            />
            <button type="submit">Сбросить пароль</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
