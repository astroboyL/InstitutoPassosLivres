import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Apoiadores from './pages/Apoiadores';
import ApoiadorDetalhe from './pages/ApoiadorDetalhe';
import Doar from './pages/Doar';
import Estatuto from './pages/Estatuto';
import ScrollToTopButton from './components/ScrollToTop';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Platform imports
import PlataformaLayout from './plataforma/PlataformaLayout';
import PlataformaHome from './plataforma/PlataformaHome';
import CadastroSelecao from './plataforma/CadastroSelecao';
import LoginPage from './plataforma/LoginPage';
import Dashboard from './plataforma/Dashboard';
import SalaDeAula from './plataforma/SalaDeAula';
import AulaView from './plataforma/AulaView';
import Biblioteca from './plataforma/Biblioteca';
import Secretaria from './plataforma/Secretaria';
import SalaProfessores from './plataforma/SalaProfessores';
import ChatPanel from './plataforma/ChatPanel';
import { AuthProvider, ProtectedRoute } from './lib/auth';
import './plataforma/plataforma.css';

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
  const location = useLocation();
  const isPlataforma = location.pathname.startsWith('/plataforma');

  return (
    <AuthProvider>
      <ScrollToTop />
      {/* Hide main navbar/footer inside the platform */}
      {!isPlataforma && <Navbar />}
      <Routes>
        {/* Main Site Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/apoiadores" element={<Apoiadores />} />
        <Route path="/apoiadores/:id" element={<ApoiadorDetalhe />} />
        <Route path="/doar" element={<Doar />} />
        <Route path="/estatuto" element={<Estatuto />} />

        {/* Platform Standalone Pages */}
        <Route path="/plataforma" element={<PlataformaHome />} />
        <Route path="/plataforma/cadastro" element={<CadastroSelecao />} />
        <Route path="/plataforma/login" element={<LoginPage />} />

        {/* Platform App Pages (with sidebar - Protected) */}
        <Route element={<ProtectedRoute><PlataformaLayout /></ProtectedRoute>}>
          <Route path="/plataforma/dashboard" element={<Dashboard />} />
          <Route path="/plataforma/sala-de-aula" element={<SalaDeAula />} />
          <Route path="/plataforma/sala-de-aula/:cursoId" element={<AulaView />} />
          <Route path="/plataforma/biblioteca" element={<Biblioteca />} />
          <Route path="/plataforma/chat" element={<ChatPanel />} />
          
          {/* Admin / Teacher only routes */}
          <Route path="/plataforma/secretaria" element={<ProtectedRoute requiredRole="admin"><Secretaria /></ProtectedRoute>} />
          <Route path="/plataforma/professores" element={<ProtectedRoute requiredRole="professor"><SalaProfessores /></ProtectedRoute>} />
        </Route>
      </Routes>
      {!isPlataforma && <Footer />}
      {!isPlataforma && <ScrollToTopButton />}
    </AuthProvider>
  );
}

export default App;
