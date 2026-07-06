import { Link } from 'react-router-dom';

export default function Footer() {
  const sponsors = [
    '/image/Patrocinadores/logos/Gemini_Generated_Image_kt18oykt18oykt18.png',
    '/image/Patrocinadores/logos/Gemini_Generated_Image_ktzam5ktzam5ktza.png',
    '/image/Patrocinadores/logos/logo_1.png'
  ];

  return (
    <footer className="site-footer" id="contato">
      <div className="container">
        {/* Sponsors */}
        <div className="sponsors-section">
          <h4 className="footer-title" style={{ marginBottom: '32px' }}>Patrocinadores Oficiais</h4>
          <div className="sponsors-grid">
            {sponsors.map((src, idx) => (
              <div key={idx} className="sponsor-wrapper">
                <img src={src} alt={`Patrocinador ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Content */}
        <div className="footer-content">
          <div className="footer-brand">
            <div style={{ display: 'inline-block', backgroundColor: '#fff', padding: '12px 16px', borderRadius: 'var(--rad)' }}>
              <img src="/image/logo.png" alt="Logo" className="footer-logo" />
            </div>
            <p className="footer-slogan">Caminhando Juntos para um Futuro Melhor.</p>
          </div>
          <div className="footer-links">
            <h4 className="footer-title">Navegação</h4>
            <Link to="/">Início</Link>
            <Link to="/#sobre">Sobre Nós</Link>
            <Link to="/#programas">Programas</Link>
            <Link to="/apoiadores">Apoiadores</Link>
            <Link to="/estatuto">Estatuto Social</Link>
          </div>
          <div className="footer-social">
            <h4 className="footer-title">Acompanhe</h4>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2026 Instituto Passos Livres. Todos os direitos reservados. CNPJ em registro.</p>
        </div>
      </div>
    </footer>
  );
}
