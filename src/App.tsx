import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Apoiadores from './pages/Apoiadores';
import ApoiadorDetalhe from './pages/ApoiadorDetalhe';
import Doar from './pages/Doar';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apoiadores" element={<Apoiadores />} />
        <Route path="/apoiadores/:id" element={<ApoiadorDetalhe />} />
        <Route path="/doar" element={<Doar />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
