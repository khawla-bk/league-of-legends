import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-main">
          <p className="footer-logo">Logo</p>
          <div className="footer-list">
            <ul>
              <p>Boosting</p>
              <li>LoL Boosting</li>
            </ul>
            <ul>
              <p>Legal</p>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
            </ul>
            <ul>
              <p>Support</p>
              <li>Contact</li>
              <li>Career</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <p className="copyright">@ 2022 BestBoosts.com all rights reserved </p>
      </div>
    </>
  );
}

export default Footer;
