import React from "react";
import GoogleLogin from "react-google-login";
import GoogleLogo from "asset/img/googleLogo.png";

const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_API_KEY}
      render={(renderProps) => (
        <button
          className="btn_login_google"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <img alt="login with google" src={GoogleLogo} />
        </button>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginButton;