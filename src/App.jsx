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
import ZIRB from "./pages/zi-rb";
import Login from "./pages/login";
import DashboardAdmin from "./pages/admin/dashboard";
import MenuAdmin from "./pages/admin/menu";
import BerandaAdmin from "./pages/admin/beranda";
import TemanLukiAdmin from "./pages/admin/temanluki";
import RuangBacaAdmin from "./pages/admin/ruangbaca";
import MyOfficeAdmin from "./pages/admin/myoffice";
import AyoMagangAdmin from "./pages/admin/ayomagang";
import { NextUIProvider } from "@nextui-org/react";
import PrivateRoute from "./components/PrivateRoute";
import RoleBasedRoute from "./components/RoleBasedRoute";


function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <div className="flex flex-col w-full">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route
            path="/myoffice"
            element={
              <PrivateRoute>
                <MyOffice />
                <DashboardAdmin />
                <MenuAdmin />
                <BerandaAdmin />
                <TemanLukiAdmin />
                <RuangBacaAdmin />
                <MyOfficeAdmin />
                <AyoMagangAdmin />
              </PrivateRoute>
            }
          />
          <Route path="/profil" element={<Profil />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/ayomagang" element={<AyoMagang />} />
          <Route path="/masukam" element={<MasukAM />} />
          <Route path="/daftaram" element={<DaftarAM />} />
          <Route path="/berandamasuk" element={<BerandaMasuk />} />
          <Route path="/berhasildaftar" element={<BerhasilDaftar />} />
          <Route path="/formulir" element={<Formulir />} />
          <Route path="/konfirmasi" element={<Konfirmasi />} />

          <Route path="/dashboard" element={<DashboardAdmin />} />
          <Route path="/menu" element={<MenuAdmin />} />
          <Route path="/beranda_adm" element={<BerandaAdmin />} />
          <Route path="/temanluki_adm" element={<TemanLukiAdmin />} />
          <Route path="/ruangbaca_adm" element={<RuangBacaAdmin />} />
          <Route path="/myoffice_adm" element={<MyOfficeAdmin />} />
          <Route path="/ayomagang_adm" element={<AyoMagangAdmin />} />

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
            path="/zi-rb"
            element={
              <>
                <ZIRB />
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
