"use client";

import React from "react";
import scss from "./styles/HomePage.module.scss";

const HomePage = () => {
  return (
    <header className={scss.main_home}>
      <div className="container_for_stories">
        <div className={scss.main_stories}>
          <div className={scss.stories}>
            <img
              src="https://yt3.googleusercontent.com/viNp17XpEF-AwWwOZSj_TvgobO1CGmUUgcTtQoAG40YaYctYMoUqaRup0rTxxxfQvWw3MvhXesw=s900-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <p>google</p>
          </div>

          <div className={scss.stories}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw94nzMEaBjMfEsMBcbfJsXeSb6c3tTp2t6Q&s"
              alt=""
            />
            <p>honda</p>
          </div>

          <div className={scss.stories}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
              alt=""
            />
            <p>instag...</p>
          </div>

          <div className={scss.stories}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjf3PdSIy8rasuNW6h0YAKjmkaTbLL_tmxBw&s"
              alt=""
            />
            <p>motion...</p>
          </div>

          <div className={scss.stories}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-kh64LxCjCYzTOaptpXE47fihNUMRpYsDsQ&s"
              alt=""
            />
            <p>motion...</p>
          </div>

          <div className={scss.stories}>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
              alt=""
            />
            <p>asy_de...</p>
          </div>

          <div className={scss.stories}>
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <p>dev_py...</p>
          </div>

          <div className={scss.stories}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png"
              alt=""
            />
            <p>facebo...</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomePage;
