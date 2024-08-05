import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavbarCustom from '../components/AyoMagang/header';
import Masuk from '../components/AyoMagang/Masuk';
import Footer from '../components/Footer/Footer';

const AyoMagang = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <NavbarCustom />
      <Masuk />
      <Footer />
    </>
  );
};

export default AyoMagang;