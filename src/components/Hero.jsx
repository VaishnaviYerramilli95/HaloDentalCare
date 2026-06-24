import "./../styles/Hero.css";
import heroImage from "../assets/clinic/clinic-front.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h1>
          Creating Beautiful
          <span> Smiles </span>
          Every Day
        </h1>

        <p>
          Halo Dental Care offers advanced dental treatments, cosmetic
          dentistry, implants and smile makeovers with modern technology.
        </p>

        <a
          href="https://forms.gle/JfhcJEfwgygkZq1a9"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn"
        >
          Book Appointment
        </a>
      </div>

      <div className="hero-right">
        <img src={heroImage} alt="" />
      </div>
    </section>
  );
}

export default Hero;
