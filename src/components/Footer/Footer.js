import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo2} alt="" />
          <p>
            This is a food delivery website designed using ReactJs and made by
            Subhasish. Order food to satisfy your cravings!
          </p>
          <div className="footer-social-icons">
            <a
              className="instagram-icon"
              href="https://www.instagram.com/subhsie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              className="github-icon"
              href="https://github.com/subhsiecoded"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              className="linkedin-icon"
              href="https://www.linkedin.com/in/subhsie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Delivery</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH.</h2>
          <ul>
            <li>
              <a href="mailto:subhasish5702@gmail.com">contact@foodio.com</a>
            </li>
            <li>
              <a href="/">+91 782XXX XXX36</a>
            </li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        Copyright 2024 ©️ Foodio.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
