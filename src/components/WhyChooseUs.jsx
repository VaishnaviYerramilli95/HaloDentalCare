import "../styles/WhyChooseUs.css";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "🦷",
      title: "Digital Dental X-Ray",
      description:
        "Advanced digital imaging technology for accurate diagnosis and treatment planning.",
    },
    {
      icon: "📷",
      title: "OPG Scan Facility",
      description:
        "Comprehensive panoramic dental imaging available under one roof.",
    },
    {
      icon: "🩺",
      title: "Ethical Treatment",
      description:
        "Transparent, evidence-based dental care focused on patient well-being.",
    },
    {
      icon: "✨",
      title: "Hygienic Environment",
      description:
        "Strict sterilization protocols and a clean, comfortable clinic atmosphere.",
    },
    {
      icon: "♿",
      title: "Wheelchair Accessible",
      description:
        "Accessible facilities designed for the comfort of all patients.",
    },
    {
      icon: "🛗",
      title: "Elevator Facility",
      description: "Convenient elevator access for a hassle-free clinic visit.",
    },
    {
      icon: "🚗",
      title: "Ample Parking",
      description:
        "Easy and secure parking space available for patients and visitors.",
    },
    {
      icon: "😊",
      title: "Patient-Centered Care",
      description:
        "Friendly, personalized care focused on comfort and long-term oral health.",
    },
  ];

  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <h2 className="section-title">Why Choose Halo Dental Care?</h2>

        <p className="section-subtitle">
          Modern facilities, advanced technology, and patient-focused care under
          one roof.
        </p>

        <div className="why-grid">
          {features.map((feature, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
