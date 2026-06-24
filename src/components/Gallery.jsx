import React from "react";
import "../styles/Gallery.css";

import gallery1 from "../assets/gallery/gallery1.jpg";
import gallery2 from "../assets/gallery/gallery2.jpg";
import gallery3 from "../assets/gallery/gallery3.jpg";
import gallery4 from "../assets/gallery/gallery4.jpg";
import gallery5 from "../assets/gallery/gallery5.jpg";
import gallery6 from "../assets/gallery/gallery6.jpg";
import gallery7 from "../assets/gallery/gallery7.jpg";
import gallery8 from "../assets/gallery/gallery8.jpg";

const Gallery = () => {
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2 className="section-title">Our Clinic Gallery</h2>

        <p className="section-subtitle">
          Take a glimpse at our modern facilities and patient-friendly
          environment.
        </p>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div className="gallery-card" key={index}>
              <img src={image} alt={`Halo Dental Care Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
