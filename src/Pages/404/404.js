import React from "react";
import Header from "../../Layout/Header/Header";
import "./404.scss";

function NotFound() {
  return (
    <>
      <Header />
      <div className="NotFound">
        <img className="notFoundPng" src="/assets/404.png" alt="404.png" />
        <div className="oopsContent">
          <div>
            <h3>OOPS!</h3>
            <p>We couldn't find that page.</p>
          </div>
          <div>
            <p>Maybe you can find what you need here </p>
            <div className="notFoundButtons">
              <button id="btn1">Homepage</button>
              <button id="btn2">Boosting page</button>
              <button id="btn3">Customer Area</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
