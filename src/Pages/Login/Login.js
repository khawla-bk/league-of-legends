import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import FacebookLogin from "react-facebook-login";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import LoginForm from "../../Components/Form/Form";
import "./Login.scss";

function Login() {
  const clientId =
    "7219911641-2493u4u8ts991mea5phe98s5stuhj91o.apps.googleusercontent.com";

  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });
  const onSuccess = (res) => {
    console.log("success:", res);
  };
  const onFailure = (err) => {
    console.log("failed:", err);
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <>
      <div className="mainLogin">
        <Header />
        <div className="LoginPage">
          <p>Customer Area login</p>
          <div className="sm-buttons">
            <GoogleLogin
              clientId={clientId}
              buttonText="Login with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
            <FacebookLogin
              appId="185202659227880"
              fields="name,email,picture"
              onSuccess={responseFacebook}
              onFailure={responseFacebook}
              icon=<svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="24px"
                height="24px"
              >
                <path
                  fill="#039be5"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                />
                <path
                  fill="#fff"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                />
              </svg>
            />
          </div>
          <div className="login-form">
            <p>Or login with your credentials or register an account.</p>
            <LoginForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
