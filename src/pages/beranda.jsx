import LayananSection from "../components/LayananSection";
import NavbarCustom from "../components/NavbarCustom";
import AplikasiLayanan from "../components/AplikasiLayanan";
import Carousel from "../components/CarouselCustom";
import Footer from "../components/Footer/Footer";
import Berita from "../components/Berita";
import Profil from "../components/Profil";

const Beranda = () => {
  return (
    <>
      <NavbarCustom />
      <Carousel />
      <div className="px-[10%]">
        <LayananSection />
        <AplikasiLayanan />
        <Berita />
        <Profil />
      </div>
      <Footer />
    </>
  );
};

export default Beranda;
