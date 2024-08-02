import { Route, Routes, useNavigate } from "react-router-dom";
import BackToTop from "./components/BackToTop";
import Beranda from "./pages/beranda";
import MyOffice from "./pages/myoffice";
import AyoMagang from "./pages/ayomagang";
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
          path="/ruangbaca"
          element={<RuangBaca />}
      />
      </Routes>
      <BackToTop />
      <div>
    </NextUIProvider>
  );
}

export default App;
