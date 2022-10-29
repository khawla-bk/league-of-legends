import React from "react";
import { Link } from "react-router-dom";
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
            <p className="notFoundSubtitle">We couldn't find that page.</p>
          </div>
          <div>
            <p className="notFoundTextBtn">
              Maybe you can find what you need here{" "}
            </p>
            <div className="notFoundButtons">
              <button id="btn1">
                <Link to="/" className="btn-link">
                  Homepage
                </Link>
              </button>
              <button id="btn2">
                <Link to="/boosting" className="btn-link">
                  Boosting page
                </Link>
              </button>
              <button id="btn3">
                <Link to="/" className="btn-link">
                  Customer Area
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
