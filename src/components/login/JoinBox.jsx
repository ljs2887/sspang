import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NaverLoginButton from "./NaverLoginButton";
import KakaoLoginButton from "./KakaoLoginButton";
import GoogleLoginButton from "./GoogleLoginButton";

const JoinBox = () => {
  return (
    <>
      <div className="login_box">
        <h1>회원가입</h1>
        <section className="social_login_box">
          <button className="color_btn">
            <Link to="/signup">이메일로 회원가입</Link>
          </button>
          <p>
            <font color="#e4e4e4">또는</font>
          </p>
          <ul>
            <li>
              <GoogleLoginButton />
            </li>
            <li>
              <NaverLoginButton />
            </li>
            <li>
              <KakaoLoginButton />
            </li>
          </ul>
          <p>소셜 네트워크로 회원가입 해보세요.</p>
        </section>
        <p>이미 Spang 계정이 있으신가요?</p>
        <p>
          <Link to="/login">기존 계정으로 로그인하기</Link>
        </p>
      </div>
    </>
  );
};

export default JoinBox;