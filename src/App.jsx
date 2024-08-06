import { Route, Routes, useNavigate } from "react-router-dom";
import BackToTop from "./components/BackToTop";
import Beranda from "./pages/beranda";
import MyOffice from "./pages/myoffice";
import AyoMagang from "./pages/ayomagang";
import MasukAM from "./pages/masukam";
import DaftarAM from "./pages/daftaram";
import BerandaMasuk from "./pages/berandamasuk";
import BerhasilDaftar from "./pages/berhasildaftar";
import Formulir from "./pages/formmagang";
import Konfirmasi from "./pages/konfirmasimagang";
import RuangBaca from "./pages/ruangbaca";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
    <div classname="flex flex-col w-full">
      <Routes>
        <Route
          path="/"
          element={ <Beranda /> }
        />
        <Route
          path="/myoffice"
          element={ <MyOffice />}
        />
      <Route
          path="/ayomagang"
          element={ <AyoMagang />}
      />
      <Route
          path="/masukam"
          element={ <MasukAM />}
      />
      <Route
          path="/daftaram"
          element={ <DaftarAM />}
      />
      <Route
          path="/berandamasuk"
          element={ <BerandaMasuk />}
      />
      <Route
          path="/berhasildaftar"
          element={ <BerhasilDaftar />}
      />
      <Route
          path="/formulir"
          element={ <Formulir />}
      />
      <Route
          path="/konfirmasi"
          element={ <Konfirmasi />}
      />
      <Route
          path="/ruangbaca"
          element={<RuangBaca />}
      />
      </Routes>
      <BackToTop />
      </div>
    </NextUIProvider>
  );
}

export default App;
