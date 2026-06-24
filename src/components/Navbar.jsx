import { useState } from "react";
import "./../styles/Navbar.css";
import logo from "../assets/logo/halo-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={logo} alt="Halo Dental Care" />

        <div>
          <h2>HALO DENTAL CARE</h2>
          <p>Advanced Dental Clinic</p>
        </div>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>

        <li>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
        </li>

        <li>
          <a href="#doctors" onClick={() => setMenuOpen(false)}>
            Doctors
          </a>
        </li>

        <li>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </a>
        </li>

        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>

        <li className="mobile-btn">
          <a
            href="https://forms.gle/JfhcJEfwgygkZq1a9"
            target="_blank"
            rel="noopener noreferrer"
            className="appointment-btn"
          >
            Book Appointment
          </a>
        </li>
      </ul>

      <a
        href="https://forms.gle/JfhcJEfwgygkZq1a9"
        target="_blank"
        rel="noopener noreferrer"
        className="appointment-btn desktop-btn"
      >
        Book Appointment
      </a>
    </nav>
  );
}

export default Navbar;
