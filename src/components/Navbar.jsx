import "./../styles/Navbar.css";
import logo from "../assets/logo/halo-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={logo} alt="Halo Dental Care" />
        <div>
          <h2>HALO DENTAL CARE</h2>
          <p>Advanced Dental Clinic</p>
        </div>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#doctors">Doctors</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <a
        href="https://forms.gle/JfhcJEfwgygkZq1a9"
        target="_blank"
        rel="noopener noreferrer"
        className="appointment-btn"
      >
        Book Appointment
      </a>
    </nav>
  );
}

export default Navbar;
