import { Route, Routes, useNavigate } from "react-router-dom";
import BackToTop from "./components/BackToTop";
import Beranda from "./pages/beranda";
import MyOffice from "./pages/myoffice";
import RuangBaca from "./pages/ruangbaca";
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
          path="/ruangbaca"
          element={
            <>
              <RuangBaca />
              <BackToTop />
            </>
          }
        />
      </Routes>
    </NextUIProvider>
  );
}

export default App;
