import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavbarCustom from "../components/NavbarCustom";
import Office from "../components/Office";
import Office2 from "../components/Office2";
import Office3 from "../components/Office3";
import Footer from "../components/Footer/Footer";

// const MyOffice = () => {
//     return (
//         <div>
//         MyOfffice
//         </div>
//         </>
//     );
// }

const MyOffice = () => {
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
          <Office />
        </div>
        <div data-aos="fade-up">
          <Office2 />
        </div>
        <div data-aos="fade-up">
          <Office3 />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyOffice;
