import LayananSection from "../components/LayananSection";
import NavbarCustom from "../components/NavbarCustom";
import Berita from "../components/Berita";
import Profil from "../components/Profil";

const Beranda = () => {
  return (
    <>
      <NavbarCustom />
      <div className="px-[10%]">
        <LayananSection />
      </div>
      <div className="px-[10%]">
        <Berita />
      </div>
      <div className="px-[10%]">
        <Profil />
      </div> 
    </>
  );
};

export default Beranda;
