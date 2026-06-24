import React from "react";
import "../styles/Doctors.css";

import doctor1 from "../assets/doctors/dr-aseash.jpg";
import doctor2 from "../assets/doctors/dr-srinivas.jpg";

const Doctors = () => {
  return (
    <section className="doctors" id="doctors">
      <div className="container">
        <h2 className="section-title">Meet Our Doctors</h2>
        <p className="section-subtitle">
          Skilled professionals committed to your dental health.
        </p>

        <div className="doctors-container">
          <div className="doctor-card">
            <div className="doctor-image">
              <img src={doctor2} alt="Dr. P. S. S. Srinivas" />
            </div>

            <div className="doctor-content">
              <h3>Dr. P. S. S. Srinivas</h3>

              <h4>Public Health Dentistry (MDS)</h4>

              <p>
                A dedicated Public Health Dentist focused on preventive dental
                care, oral health awareness, and community well-being. Committed
                to helping patients maintain healthy smiles through education,
                early intervention, and evidence-based dental practices.
              </p>
            </div>
          </div>

          <div className="doctor-card">
            <div className="doctor-image">
              <img src={doctor1} alt="Dr. Aseash Varma" />
            </div>

            <div className="doctor-content">
              <h3>Dr. Aseash Varma</h3>

              <h4>Dental Surgeon</h4>

              <p>
                Passionate about providing comfortable and effective dental
                treatments with a patient-first approach. Dedicated to restoring
                oral health, improving confidence, and creating positive dental
                experiences for every patient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
