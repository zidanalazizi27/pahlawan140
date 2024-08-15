import React, { useEffect } from "react";
import "aos/dist/aos.css";
import NavbarCustom from "../components/NavbarCustom";
import ProfilBPS from "../components/Profil";
import Footer from "../components/Footer/Footer";


const Berita = () => {
  return (
    <>
      <NavbarCustom />
      <div className="px-[10%]">
        <div data-aos="fade-up">
          <ProfilBPS />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Berita;
