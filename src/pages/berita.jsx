import React, { useEffect } from "react";
import "aos/dist/aos.css";
import NavbarCustom from "../components/NavbarCustom";
import Berita from "../components/Berita";
import Footer from "../components/Footer/Footer";


const News = () => {
  return (
    <>
      <NavbarCustom />
      <div className="px-[10%] mt-[15vh]">
        <div data-aos="fade-up">
          <Berita />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default News;
