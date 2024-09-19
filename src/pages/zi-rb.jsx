import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavbarCustom from "../components/NavbarCustom";
import ZIRB from "../components/ZIRB";
import Footer from "../components/Footer/Footer";

const Adu = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <NavbarCustom />
      <div className="px-[10%]">
        <div data-aos="fade-up">
          <ZIRB />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Adu;
