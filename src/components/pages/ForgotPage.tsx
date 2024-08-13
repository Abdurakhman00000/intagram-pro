"use client";
import React from "react";
import scss from "./styles/ForgorPassword.module.scss"
import { SubmitHandler, useForm } from "react-hook-form";
import LockResetIcon from "@mui/icons-material/LockReset";
import { useForgotpasswordMutation } from "@/redux/api/auth";
import Link from "next/link";

const ForgotPassword = () => {
  const { register, handleSubmit } = useForm<AUTH.ForgotPasswordRequest>();
  const [forgotpassword] = useForgotpasswordMutation();

  const onSubmit: SubmitHandler<AUTH.ForgotPasswordRequest> = async (data) => {
    const newData = {
      email: data.email,
      frontEndUrl: window.location.href,
    };

    try {
      await forgotpassword(newData).unwrap();
      alert(`Мы отправили ссылку для восстановления доступа на адрес ${newData.email}`);
    } catch (error) {
      console.error("Error sending password reset link:", error);
    }
  };

  return (
    <div className={scss.Forgot}>
      <div className={scss.content}>
        <LockResetIcon className={scss.icon} />
        <div className={scss.text}>
          <h4>Не удается войти?</h4>
          <p>
            Введите свой электронный адрес, имя <br />
            пользователя или номер телефона, и мы <br />
            отправим вам ссылку для восстановления <br />
            доступа к аккаунту.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email")}
            placeholder="Телефон, имя пользователя или эл.адрес"
            type="text"
          />
          <button type="submit">Получить ссылку для входа</button>
        </form>
        <Link href="https://help.instagram.com/374546259294234" className={scss.link}>
          Не можете сбросить пароль?
        </Link>
        <div className={scss.or}>
          <div className={scss.line}></div>
          <p>ИЛИ</p>
          <div className={scss.line}></div>
        </div>
        <Link href="/auth/sign-up" className={scss.createAccount}>
          Создать новый аккаунт
        </Link>
        <div className={scss.account}>
          <Link href="/auth/sign-in">Вернуться к входу</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
