"use client";
import React from "react";
import scss from "./styles/Register.module.scss";
import { Roboto } from "next/font/google";
import { AiFillFacebook } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePostRegisterUserMutation } from "@/redux/api/auth";
import Link from "next/link";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase";
import { useRouter } from "next/navigation";

const roboto = Roboto({ subsets: ["latin"], weight: "100" });

const Register = () => {
  const provider = new FacebookAuthProvider();
  const { register, handleSubmit } = useForm<AUTH.PostRegisterRequest>();
  const [postRegisterUser] = usePostRegisterUserMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<AUTH.PostRegisterRequest> = async (data) => {
    console.log(data);
    try {
      const response = await postRegisterUser(data).unwrap();
      console.log("Registration successful");
      localStorage.setItem("tokens", JSON.stringify(response));
      router.push("/insta-home")
    } catch (error) {
      console.error("Failed to register", error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();

      await postRegisterUser({ token }).unwrap();
      console.log("Facebook login successful");
    } catch (error) {
      console.error("Failed to log in with Facebook", error);
    }
  };

  return (
    <div className={scss.Register}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.inst}>
            <h1 className={roboto.className}>Instagram</h1>
            <p>
              Зарегистрируйтесь, чтобы просматривать фотографии и видео ваших
              друзей.
            </p>
          </div>
          <button onClick={handleFacebookLogin} className={scss.facebook}>
            <AiFillFacebook style={{ fontSize: "27px" }} />
            Войти через Facebook
          </button>

          <div className={scss.or}>
            <div className={scss.line}></div>
            <p>ИЛИ</p>
            <div className={scss.line}></div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Моб.телефон или эл.адрес"
              type="text"
              {...register("email")}
            />
            <input
              {...register("surname")}
              placeholder="Имя и фамилия"
              type="text"
            />
            <input
              {...register("username")}
              placeholder="Имя пользователя"
              type="text"
            />
            <input
              placeholder="Пароль"
              type="password"
              {...register("password")}
            />
            <input placeholder="Photo" type="text" {...register("photo")} />
            <div className={scss.rules}>
              <span>
                Люди, которые пользуются нашим сервисом, могли загрузить вашу
                контактную информацию в Instagram.
              </span>
              <Link href="https://www.facebook.com/help/instagram/261704639352628">
                Подробнее
              </Link>
              <p>Регистрируясь, вы принимаете наши</p>
              <Link href="https://help.instagram.com/581066165581870/?locale=en_US">
                Условия
              </Link>
              ,
              <Link href="https://www.facebook.com/privacy/policy">
                Политику конфиденциальности
              </Link>
              <span>и</span>
              <Link href="https://privacycenter.instagram.com/policies/cookies/">
                Политику в отношении файлов cookie.
              </Link>
            </div>
            <button type="submit">Регистрация</button>
          </form>
        </div>
        <div className={scss.account}>
          <span>Есть аккаунт?</span>
          <a href="/auth/sign-in" style={{ color: "#2860fb" }}>
            Вход
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
