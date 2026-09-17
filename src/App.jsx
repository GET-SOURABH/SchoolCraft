import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToLocation from './components/ScrollToLocation';
import Home from './pages/Home';
import Pricing from './pages/Pricing';

function App() {
  return (
    <>
      <ScrollToLocation />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;
