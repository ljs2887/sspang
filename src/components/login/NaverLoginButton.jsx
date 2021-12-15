import React from "react";
import NaverLogin from "react-naver-login";
import NaverLogo from "asset/img/naverLogo.png";

const NaverLoginButton = () => {
  return (
    <NaverLogin
      clientId={process.env.REACT_APP_NAVER_API_KEY}
      callBackUrl="http://localhost:3000"
      render={(renderProps) => (
        <button className="btn_login_naver" onClick={renderProps.onClick}>
          <img alt="login with naver" src={NaverLogo} />
        </button>
      )}
    />
  );
};

export default NaverLoginButton;