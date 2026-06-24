import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          We're here to help you achieve a healthy and confident smile.
        </p>

        <div className="contact-grid">
          {/* Address */}
          <div className="contact-card">
            <h3>📍 Address</h3>

            <p>
              Halo Dental Care <br />
              2nd Floor, Srinivasa Plaza,
              <br />
              Vinayaknagar, 100 Ft Ring Road,
              <br />
              Above Punjab National Bank,
              <br />
              Bhagawan Nagar,
              <br />
              Vizianagaram, Andhra Pradesh - 535002
            </p>

            <a
              href="https://www.google.com/maps/dir//Halo+Dental+Care,+2nd+Floor,+Srinivasa+Plaza,+Vinayaknagar,+100+Ft+Ring+Rd,+above+Punjab+National+Bank,+Bhagawan+Nagar,+Vizianagaram,+Andhra+Pradesh+535002/"
              target="_blank"
              rel="noreferrer"
            >
              View on Google Maps →
            </a>
          </div>

          {/* Contact Details */}
          <div className="contact-card">
            <h3>📞 Contact Details</h3>

            <div className="contact-info">
              <strong>Phone</strong>
              <p>
                <a href="tel:06300744792">06300744792</a>
              </p>

              <strong>Email</strong>
              <p>
                <a href="mailto:ssssonu1011@gmail.com">ssssonu1011@gmail.com</a>
              </p>

              <strong>Instagram</strong>
              <p>
                <a
                  href="https://instagram.com/halo_dentalcare"
                  target="_blank"
                  rel="noreferrer"
                >
                  @halo_dentalcare
                </a>
              </p>
            </div>
          </div>

          {/* Timings */}
          <div className="contact-card">
            <h3>🕒 Clinic Timings</h3>

            <p>
              Monday – Sunday
              <br />
              10:00 AM – 1:30 PM
              <br />
              4:30 PM – 9:00 PM
            </p>
          </div>
        </div>
      </div>
      <div className="map-section">
        <h2>Find Us</h2>

        <iframe
          title="Halo Dental Care"
          src="https://www.google.com/maps?q=Halo+Dental+Care+Vizianagaram&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
