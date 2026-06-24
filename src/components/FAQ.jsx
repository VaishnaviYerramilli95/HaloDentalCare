import { useState } from "react";
import "../styles/FAQ.css";

const faqs = [
  {
    question: "Do I need an appointment before visiting?",
    answer:
      "Appointments are recommended for faster service, but walk-in patients are also welcome depending on availability.",
  },
  {
    question: "What dental services do you provide?",
    answer:
      "We provide preventive dentistry, fillings, root canal treatment, crowns & bridges, dental implants, orthodontics, pediatric dentistry, gum treatment, oral surgery, dentures, and full mouth rehabilitation.",
  },
  {
    question: "Do you have digital X-Ray and OPG facilities?",
    answer:
      "Yes. Halo Dental Care offers in-house Digital Dental X-Ray and OPG Scan facilities for accurate diagnosis and treatment planning.",
  },
  {
    question: "Are dental implants painful?",
    answer:
      "Dental implant procedures are performed under local anesthesia and are generally comfortable for patients.",
  },
  {
    question: "Do you provide treatment for children?",
    answer:
      "Yes. We offer pediatric dental care in a comfortable and child-friendly environment.",
  },
  {
    question: "Is parking available at the clinic?",
    answer:
      "Yes. Ample parking facilities are available for patients and visitors.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
        <p>
          Find answers to some of the most common questions about our clinic and
          treatments.
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() => setActive(active === index ? null : index)}
            >
              {faq.question}
              <span>{active === index ? "−" : "+"}</span>
            </button>

            {active === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
