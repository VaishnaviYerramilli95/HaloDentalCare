import "../styles/Services.css";

import generalDentistry from "../assets/services/general-dentistry.jpg";
import implants from "../assets/services/implants.jpg";
import rootCanal from "../assets/services/root-canal.jpg";
import braces from "../assets/services/braces.jpg";
import pediatric from "../assets/services/pediatric.jpg";
import gumTreatment from "../assets/services/gum-treatment.jpg";
import extraction from "../assets/services/extraction.jpg";
import dentures from "../assets/services/dentures.jpg";
import rehabilitation from "../assets/services/full-mouth-rehabilitation.jpg";

const services = [
  {
    image: generalDentistry,
    title: "Preventive Dentistry & Fillings",
    description:
      "Regular dental checkups, professional cleaning, oral health assessments, cavity detection, and tooth-colored fillings to maintain strong and healthy teeth.",
  },
  {
    image: implants,
    title: "Dental Implants, Crowns & Bridges",
    description:
      "Permanent solutions for missing or damaged teeth using implants, crowns, and bridges that restore appearance, comfort, and chewing function.",
  },
  {
    image: rootCanal,
    title: "Root Canal Treatment",
    description:
      "Advanced endodontic treatment that removes infection, relieves pain, and preserves natural teeth.",
  },
  {
    image: braces,
    title: "Orthodontics",
    description:
      "Braces and orthodontic treatments designed to align teeth, improve bite function, and create confident smiles.",
  },
  {
    image: pediatric,
    title: "Pediatric Dentistry",
    description:
      "Comprehensive dental care for children in a friendly and comfortable environment focused on lifelong oral health.",
  },
  {
    image: gumTreatment,
    title: "Gum Treatment",
    description:
      "Treatment for gum disease, bleeding gums, periodontal infections, and preventive gum care.",
  },
  {
    image: extraction,
    title: "Oral Surgery",
    description:
      "Safe tooth extractions, wisdom tooth removal, and minor oral surgical procedures performed with precision.",
  },
  {
    image: dentures,
    title: "Dentures",
    description:
      "Custom-made full and partial dentures that restore chewing ability, speech, and smile aesthetics.",
  },
  {
    image: rehabilitation,
    title: "Full Mouth Rehabilitation",
    description:
      "Comprehensive restoration combining multiple dental treatments to rebuild oral health, function, and smile appearance.",
  },
];

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>
          Comprehensive dental care solutions delivered with modern technology
          and patient-focused treatment.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
