import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavbarCustom from '../components/AyoMagang/header2';
import Form from '../components/AyoMagang/Form';
import Footer from '../components/Footer/Footer';

const FormMagang = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <NavbarCustom />
      <Form />
      <Footer />
    </>
  );
};

export default FormMagang;