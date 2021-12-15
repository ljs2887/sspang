import React, { useState, useHistory, useEffect } from "react";
import { Link } from "react-router-dom";
import "css/Login.css";
import NaverLoginButton from "./NaverLoginButton";
import GoogleLoginButton from "./GoogleLoginButton";
import KakaoLoginButton from "./KakaoLoginButton";
// import axios from "axios";

function LoginBox() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   axios
  //     .post("/api", {
  //       id: "bla",
  //       pw: 1234,
  //     })
  //     .then(function (response) {
  //       console.log("response");
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log("error");
  //       console.log(error.response.data);
  //     });
  // }, []);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    console.log(value);
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = (event) => {
    // reload 막기
    event.preventDefault();
    // 넘겨줄 input 보관?
    const userInput = {
      email: email,
      password: password,
    };
    /* 로그인 처리, 페이지 이동 */
    console.log(userInput);
    // setEmail("");
    // setPassword("");
    // console.log(email, password);
  };

  return (
    <section className="login_body">
      <div className="login_box_container">
        {/* login mode bar */}
        <div className="login_mode_box">
          <button
            onClick={() => {
              setMode("login");
            }}
            style={{ borderRight: "solid 1px #707070" }}
          >
            Sign in
          </button>
          <button
            onClick={() => {
              setMode("join");
            }}
          >
            Sign up
          </button>
        </div>

        {/* 로그인 모드에 따라 다른 DOM 보여주기 */}
        {mode === "login" ? (
          // LOGIN
          <form onSubmit={onSubmit}>
            <div className="login_box">
              <h1>로그인</h1>
              <input
                type="email"
                placeholder="이메일 주소 입력"
                name="email"
                onChange={onChange}
              />
              <input
                type="password"
                placeholder="비밀번호 입력"
                name="password"
                onChange={onChange}
              />
              <section className="social_login_box">
                <font color="#e4e4e4">또는</font>
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
                <p>소셜 네트워크로 로그인하세요.</p>
              </section>
              <input className="color_btn" type="submit" value="로그인" />
              <p>
                아직 SPANG계정이 없으신가요?{" "}
                <Link
                  to="#"
                  onClick={() => {
                    setMode("join");
                  }}
                >
                  가입하기
                </Link>
              </p>
              <p>
                <Link to="/#">혹시 비밀번호를 잊으셨나요?</Link>
              </p>
            </div>
          </form>
        ) : (
          // JOIN
          <div className="login_box">
            <h1>회원가입</h1>
            <section className="social_login_box">
            <button className="color_btn">
              <Link  to="/#" onClick={console.log('dd')}>이메일로 회원가입하기</Link>

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
              <Link
                to="/login"
                onClick={() => {
                  setMode("login");
                }}
              >
                기존 계정으로 로그인하기
              </Link>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default LoginBox;
