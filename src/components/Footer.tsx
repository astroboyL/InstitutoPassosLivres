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
        
        {/* SPONSORS SECTION */}
        <div className="sponsors-section" style={{ marginBottom: '60px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '60px' }}>
          <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '40px' }}>Patrocinadores Oficiais</h4>
          <div className="sponsors-grid" style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', alignItems: 'center' }}>
            {sponsors.map((src, idx) => (
              <div 
                key={idx} 
                className="sponsor-wrapper"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.4), inset 0 -4px 8px rgba(0,0,0,0.2), inset 0 4px 8px rgba(255,255,255,0.8)',
                  border: '3px solid rgba(255,255,255,0.1)',
                  transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={e => { 
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.1)'; 
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.6), inset 0 -4px 8px rgba(0,0,0,0.1), inset 0 4px 10px rgba(255,255,255,1), 0 0 30px rgba(232, 168, 32, 0.4)';
                }}
                onMouseOut={e => { 
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'; 
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.4), inset 0 -4px 8px rgba(0,0,0,0.2), inset 0 4px 8px rgba(255,255,255,0.8)';
                }}
              >
                <img 
                  src={src} 
                  alt={`Patrocinador ${idx + 1}`} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    filter: 'grayscale(100%) opacity(0.8)', 
                    transition: 'all 0.4s ease' 
                  }} 
                  onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%) opacity(1)'}
                  onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%) opacity(0.8)'}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo-wrapper" style={{ display: 'inline-block', backgroundColor: 'var(--c-bg)', padding: '15px 20px', borderRadius: '16px', marginBottom: '20px' }}>
              <img src="/image/logo.png" alt="Logo" className="footer-logo" style={{ height: '70px', objectFit: 'contain' }} />
            </div>
            <p className="footer-slogan" style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.7)' }}>Caminhando Juntos para um Futuro Melhor.</p>
          </div>
          <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>Navegação</h4>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.9)' }}>Início</Link>
            <Link to="/#sobre" style={{ color: 'rgba(255,255,255,0.9)' }}>Sobre Nós</Link>
            <Link to="/#programas" style={{ color: 'rgba(255,255,255,0.9)' }}>Programas</Link>
            <Link to="/apoiadores" style={{ color: 'rgba(255,255,255,0.9)' }}>Apoiadores</Link>
            <Link to="/estatuto" style={{ color: 'rgba(255,255,255,0.9)' }}>Estatuto Social</Link>
          </div>
          <div className="footer-social" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>Acompanhe</h4>
            <a href="#" style={{ color: 'rgba(255,255,255,0.9)' }}>Instagram</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.9)' }}>LinkedIn</a>
          </div>
        </div>
        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px', textAlign: 'center', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginTop: '40px' }}>
          <p>&copy; 2026 Instituto Passos Livres. Todos os direitos reservados. CNPJ em registro.</p>
        </div>
      </div>
    </footer>
  );
}
