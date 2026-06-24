import "../styles/About.css";
import Reception from "../assets/clinic/reception.jpg";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <span className="about-tag">About Us</span>

          <h2>Halo Dental Care</h2>

          <p>
            Halo Dental Care is a modern, patient-focused dental clinic in
            Vizianagaram dedicated to ethical dentistry, comfort, and long-term
            oral health.
          </p>

          <p>
            Our clinic provides transparent and evidence-based dental care in a
            hygienic and welcoming environment. We combine advanced technology
            with experienced dental expertise to ensure accurate diagnosis and
            effective treatment planning.
          </p>

          <a
            href="https://forms.gle/JfhcJEfwgygkZq1a9"
            target="_blank"
            rel="noopener noreferrer"
            className="appointment-btn"
          >
            Book Appointment
          </a>
        </div>

        <div className="about-image">
          <img src={Reception} alt="Halo Dental Care Reception" />
        </div>
      </div>
    </section>
  );
}

export default About;
