import React from "react";
import KakaoLogin from "react-kakao-login";
import KakaoLogo from "asset/img/kakaoLogo.png";

const KakaoLoginButton = () => {
  const responseKakao = (response) => {
    console.log(response);
  };
  return (
    <KakaoLogin
      token={process.env.REACT_APP_KAKAO_API_KEY}
      onSuccess={responseKakao}
      onFail={responseKakao}
      onLogout={responseKakao}
      render={({ onClick }) => {
        return (
          <button className="btn_login_kakao" onClick={onClick}>
            <img alt="login with kakao" src={KakaoLogo} />
          </button>
        );
      }}
    />
  );
};

export default KakaoLoginButton;