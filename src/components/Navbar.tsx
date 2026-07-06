import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" aria-label="Voltar ao Início">
          <img src="/image/logoSoope.png" alt="Símbolo do Instituto" className="logo-img" />
          <div className="nav-logo-text">
            <span className={`logo-title ${menuOpen ? 'logo-title-dark' : ''}`}>INSTITUTO <strong style={{ fontWeight: 800 }}>PASSOS LIVRES</strong></span>
          </div>
        </Link>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="nav-links">
          <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Início</Link></li>
          <li><Link to="/#sobre" className="nav-link">Sobre</Link></li>
          <li><Link to="/#programas" className="nav-link">Programas</Link></li>
          <li><Link to="/apoiadores" className={`nav-link ${location.pathname === '/apoiadores' ? 'active' : ''}`}>Apoiadores</Link></li>
          <li><Link to="/estatuto" className={`nav-link ${location.pathname === '/estatuto' ? 'active' : ''}`}>Estatuto</Link></li>
          <li><Link to="/#contato" className="nav-link">Contato</Link></li>
          <li><Link to="/doar" className="btn btn-primary nav-cta">Apoiar Projeto</Link></li>
        </ul>
        <button 
          className={`nav-hamburger ${menuOpen ? 'open' : ''}`} 
          id="hamburger" 
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>
      </div>
    </nav>
  );
}
