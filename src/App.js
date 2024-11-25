import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"
import Coins from "./components/Coins";
import CoinDetails from "./components/CoinDetails"
import Exchanges from "./components/Exchanges"
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function MatomoTracker() {
  const location = useLocation();
  console.log(location)

  useEffect(() => {
    if (window._paq) {
      window._paq.push(['setCustomUrl', window.location.href]);
      window._paq.push(['setDocumentTitle', document.title]);
      window._paq.push(['trackPageView']);
    }
  }, [location]);

  return null;
}

export default App;
