import "../styles/PatientJourney.css";

const steps = [
  {
    number: "01",
    title: "Book Appointment",
    desc: "Schedule your visit through phone, WhatsApp, Instagram, or directly at the clinic.",
  },
  {
    number: "02",
    title: "Consultation",
    desc: "Our dentist evaluates your oral health and discusses your concerns.",
  },
  {
    number: "03",
    title: "Diagnosis & Scan",
    desc: "Digital X-rays and OPG scans help create an accurate treatment plan.",
  },
  {
    number: "04",
    title: "Treatment",
    desc: "Personalized dental treatment is provided using modern equipment.",
  },
  {
    number: "05",
    title: "Follow-Up Care",
    desc: "Regular follow-ups ensure long-term oral health and treatment success.",
  },
];

function PatientJourney() {
  return (
    <section className="journey-section">
      <div className="journey-header">
        <h2>Your Treatment Journey</h2>
        <p>
          A simple and comfortable process designed to provide the best dental
          experience.
        </p>
      </div>

      <div className="journey-grid">
        {steps.map((step) => (
          <div key={step.number} className="journey-card">
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PatientJourney;
