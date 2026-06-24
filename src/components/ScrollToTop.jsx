import { useState, useEffect } from "react";
import "../styles/ScrollToTop.css";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggle);

    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button className="scroll-top" onClick={scrollTop}>
        ↑
      </button>
    )
  );
}

export default ScrollToTop;
