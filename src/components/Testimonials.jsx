import "../styles/Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Patient Reviews</h2>

      <div className="review-grid">
        <div className="review-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>

          <p>"Well maintained equipment and hygienic surroundings."</p>
        </div>

        <div className="review-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>

          <p>
            "It's rare to find such a good combination of expertise and friendly
            service."
          </p>
        </div>

        <div className="review-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>

          <p>"Clean environment and good patient management."</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
