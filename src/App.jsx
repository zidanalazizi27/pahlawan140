import { Route, Routes, useNavigate } from "react-router-dom";
import BackToTop from "./components/BackToTop";
import Beranda from "./pages/beranda";
import MyOffice from "./pages/myoffice";
import RuangBaca from "./pages/ruangbaca";
import TemanLuki from "./pages/temanluki";
import Aduan from "./pages/aduan";
import Login from './pages/login';
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
    </NextUIProvider>
  );
}

export default App;
