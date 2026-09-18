import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToLocation from './components/ScrollToLocation';
import Contact from './pages/Contact';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';

function App() {
  return (
    <>
      <ScrollToLocation />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
