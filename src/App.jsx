import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToLocation from './components/ScrollToLocation';
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
      </Routes>
    </>
  );
}

export default App;
