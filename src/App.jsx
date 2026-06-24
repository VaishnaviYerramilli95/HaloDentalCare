import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PatientJourney from "./components/PatientJourney";
import FAQ from "./components/FAQ";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <PatientJourney />
      <Doctors />
      <Gallery />
      <Testimonials />

      <FAQ />
      <Contact />
      <WhatsAppButton />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
