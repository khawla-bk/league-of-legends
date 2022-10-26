import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <>
      <div className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <p className="Logo">Logo</p>
          <div className="Nav">
            <Link to="/boosting" className="nav-links">
              <p>Boosting</p>
            </Link>

            <p>Work with us</p>
            <p className="CustomerButton">Customer Area</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
