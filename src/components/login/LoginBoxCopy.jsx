//이진수가 건드렸어요 새롭게 ㅠㅠ
import React, { Children, useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import { loginUser } from "api";
import "css/Login.css";
import JoinBox from "./JoinBox";
import LoginBox from "./LoginBox";
import UserContext from "store/modules/user";

const LoginBoxCopy = () => {
  const [mode, setMode] = useState("login");

  console.log("UserContext", UserContext);

  // const history = useHistory();
  // console.log(store.getState());

  return (
    <section className="login_body">
      <UserContext.Consumer>
        {(value) => {
          console.log("value", value);
        }}
      </UserContext.Consumer>
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
          <LoginBox />
        ) : (
          <JoinBox />
        )}
      </div>
    </section>
  );
};

export default LoginBoxCopy;