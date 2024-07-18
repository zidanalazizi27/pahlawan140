import LayananSection from "../components/LayananSection";
import NavbarCustom from "../components/NavbarCustom";
import AplikasiLayanan from "../components/AplikasiLayanan";

const Beranda = () => {
  return (
    <>
      <NavbarCustom />
      <div className="px-[10%]">
        <LayananSection />
        <AplikasiLayanan />
      </div>
    </>
  );
};

export default Beranda;
