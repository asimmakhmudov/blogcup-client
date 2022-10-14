import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <img
          className="footerLogo"
          src="https://i.pinimg.com/originals/19/46/37/19463736543a1a231b63bbdf8bf5196a.jpg"
          alt=""
        />
        <h2>LETS ANALYZE</h2>
      </div>
      <div className="footerWrapper">
        <ul className="footerLinks">
          <li className="footerLi">
            <Link to="/" className="links">
              ▶️ Home
            </Link>
          </li>
          <li className="footerLi">
            <Link to="/faq" className="links">
              ▶️ FAQ
            </Link>
          </li>
          <li className="footerLi">
            <Link to="/faq" className="links">
              ▶️ Contact
            </Link>
          </li>
          <li className="footerLi">
            <Link to="/about" className="links">
              ▶️ About
            </Link>
          </li>
        </ul>
      </div>
      <div className="footerWrapper">
        <h3>Follow Me ⬇️</h3>
        <div className="footerSocial">
          <a href="https://www.facebook.com/lyamansuleymanli" target="_blank" rel="noreferrer">
            <i className="footerIcon fab fa-facebook-square"></i>
          </a>
          <a href="https://instagram.com/laman.suleymanli?igshid=NmNmNjAwNzg=" target="_blank" rel="noreferrer">
            <i className="footerIcon fab fa-instagram-square"></i>
          </a>
          {/* <a href="/">
            <i className="footerIcon fab fa-twitter-square"></i>
          </a>
          <a href="/">
            <i className="footerIcon fab fa-pinterest-square"></i>
          </a> */}
        </div>
      </div>
    </div>
  );
};
