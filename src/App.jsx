import { Route, Routes, useNavigate } from "react-router-dom";
import BackToTop from "./components/BackToTop";
import Beranda from "./pages/beranda";
import MyOffice from "./pages/myoffice";
import AyoMagang from "./pages/ayomagang";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Beranda />
              <BackToTop />
            </>
          }
        />
        <Route
          path="/myoffice"
          element={
            <>
              <MyOffice />
              <BackToTop />
            </>
          }
        />
      <Route
          path="/ayomagang"
          element={
            <>
              <AyoMagang />
              <BackToTop />
            </>
          }
        />
      </Routes>
      {/* <div className="flex flex-col">
        <Beranda />
        <MyOffice />
        <BackToTop />
      </div> */}
    </NextUIProvider>
  );
}

export default App;
