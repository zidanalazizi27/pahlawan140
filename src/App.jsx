import { Route, Routes, useNavigate } from "react-router-dom";
import BackToTop from "./components/BackToTop";
import Beranda from "./pages/beranda";
import MyOffice from "./pages/myoffice";
import Berita from "./pages/berita";
import Profil from "./pages/profil";
import AyoMagang from "./pages/ayomagang";
import MasukAM from "./pages/masukam";
import DaftarAM from "./pages/daftaram";
import BerandaMasuk from "./pages/berandamasuk";
import BerhasilDaftar from "./pages/berhasildaftar";
import Formulir from "./pages/formmagang";
import Konfirmasi from "./pages/konfirmasimagang";
import RuangBaca from "./pages/ruangbaca";
import TemanLuki from "./pages/temanluki";
import Aduan from "./pages/aduan";
import Login from "./pages/login";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <div classname="flex flex-col w-full">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/myoffice" element={<MyOffice />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/ayomagang" element={<AyoMagang />} />
          <Route path="/masukam" element={<MasukAM />} />
          <Route path="/daftaram" element={<DaftarAM />} />
          <Route path="/berandamasuk" element={<BerandaMasuk />} />
          <Route path="/berhasildaftar" element={<BerhasilDaftar />} />
          <Route path="/formulir" element={<Formulir />} />
          <Route path="/konfirmasi" element={<Konfirmasi />} />
          <Route
            path="/ruangbaca"
            element={
              <>
                <RuangBaca />
                <BackToTop />
              </>
            }
          />
          <Route
            path="/temanluki"
            element={
              <>
                <TemanLuki />
                <BackToTop />
              </>
            }
          />
          <Route
            path="/aduan"
            element={
              <>
                <Aduan />
                <BackToTop />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
        </Routes>
        <BackToTop />
      </div>
    </NextUIProvider>
  );
}

export default App;
