import LayananSection from "../components/LayananSection";
import NavbarCustom from "../components/NavbarCustom";
import AplikasiLayanan from "../components/AplikasiLayanan";
import Carousel from "../components/CarouselCustom";
import Footer from "../components/Footer/Footer";

const Beranda = () => {
  return (
    <>
      <NavbarCustom />
      <div className="px-[10%]">
      <Carousel />
        <LayananSection />
        <AplikasiLayanan />
        <Footer />
      </div>
    </>
  );
};

export default Beranda;
