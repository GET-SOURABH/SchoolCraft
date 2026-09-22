import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RouteTransition from './components/RouteTransition';
import ScrollToLocation from './components/ScrollToLocation';
import Contact from './pages/Contact';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import Work from './pages/Work';

function App() {
  return (
    <>
      <ScrollToLocation />
      <Navbar />
      <RouteTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </RouteTransition>
      <Footer />
    </>
  );
}

export default App;
