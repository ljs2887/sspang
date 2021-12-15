import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { signUpUser } from "api";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const history = useHistory();

  const onSubmitForm = async (e) => {
    try {
      e.preventDefault();
      if (password === passwordCheck) {
        await signUpUser({ email, name, password });
        console.log(history);
        history.push("/login");
      }
      //오류메시지 넣기
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangepasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    margin: "20px",
  };

  return (
    <div>
      <form onSubmit={onSubmitForm} style={formStyle}>
        <input
          type="email"
          value={email}
          onChange={onChangeEmail}
          placeholder="email"
        />
        <input
          type="text"
          value={name}
          onChange={onChangeName}
          placeholder="name"
        />
        <input
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="password"
        />
        <input
          type="password"
          value={passwordCheck}
          onChange={onChangepasswordCheck}
          placeholder="passwordCheck"
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignupForm;