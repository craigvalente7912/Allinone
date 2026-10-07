import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CyberBackground from '@/components/CyberBackground';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Solutions from '@/pages/Solutions';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Affiliates from '@/pages/Affiliates';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <CyberBackground />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/affiliates" element={<Affiliates />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
