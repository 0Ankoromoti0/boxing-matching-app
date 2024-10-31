// src/pages/Welcome.js
import React from "react";
import Auth from "../components/Auth";  // Google認証ボタンを利用
import "./Welcome.css";  // スタイルを適用するためのCSSファイル
import top_img from "../assets/top.webp";

const Welcome = () => {
  return (
    <div className="welcome-container">
      {/* 左半分：画像表示 */}
      <div className="welcome-image">
        <img 
          src={top_img}  // 適切な画像URLに置き換えてください
          alt="Boxing Match"
        />
      </div>
      
      {/* 右半分：タイトルと認証ボタン */}
      <div className="welcome-content">
        <h1>Boxing-App</h1>
        <p>Welcome to Boxing matching App</p>
        <Auth />  {/* Google認証ボタンの表示 */}
      </div>
    </div>
  );
};

export default Welcome;
