import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container container">
        <Link to="/" className="nav-logo" aria-label="Voltar ao Início" onClick={() => setMenuOpen(false)}>
          <img src="/image/logoSoope.png" alt="Símbolo do Instituto" className="logo-img" />
          <span className={`logo-title ${menuOpen ? 'logo-title-dark' : ''}`}>
            INSTITUTO <strong>PASSOS LIVRES</strong>
          </span>
        </Link>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Início</Link></li>
          <li><Link to="/#sobre" className="nav-link" onClick={() => setMenuOpen(false)}>Sobre</Link></li>
          <li><Link to="/#programas" className="nav-link" onClick={() => setMenuOpen(false)}>Programas</Link></li>
          <li><Link to="/apoiadores" className={`nav-link ${location.pathname.startsWith('/apoiadores') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Apoiadores</Link></li>
          <li><Link to="/estatuto" className={`nav-link ${location.pathname === '/estatuto' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Estatuto</Link></li>
          <li><Link to="/#contato" className="nav-link" onClick={() => setMenuOpen(false)}>Contato</Link></li>
          <li><Link to="/doar" className="btn btn-primary nav-cta" onClick={() => setMenuOpen(false)}>Apoiar Projeto</Link></li>
        </ul>

        <button
          className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>
    </nav>
  );
}
