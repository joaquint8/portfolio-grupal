import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <>
        <Navbar />
        <Hero/>
        <Services/>
        <Portfolio />
        <AboutUs />
        <Testimonials />
        <Contact />
    </>
  )
}
export default HomePage