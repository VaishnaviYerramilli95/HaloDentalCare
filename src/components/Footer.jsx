import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo/halo-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={logo} alt="Halo Dental Care" className="footer-logo" />

          <div>
            <h3>Halo Dental Care</h3>
            <p>
              Advanced & Gentle Dental Care for healthy and confident smiles.
            </p>
          </div>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>

          <p>📞 06300744792</p>

          <p>
            ✉️
            <a href="mailto:ssssonu1011@gmail.com">ssssonu1011@gmail.com</a>
          </p>

          <p>
            📸
            <a
              href="https://www.instagram.com/halo_dentalcare"
              target="_blank"
              rel="noreferrer"
            >
              @halo_dentalcare
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Halo Dental Care. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
