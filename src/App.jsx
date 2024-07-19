import BackToTop from "./components/BackToTop";
import Beranda from "./pages/beranda";

function App() {
  return (
    <div className="flex flex-col">
      <Beranda />
      <BackToTop />
    </div>
  );
}

export default App;
