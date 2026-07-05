import { Link } from 'react-router-dom';
import { apoiadoresData } from '../data/apoiadores';

export default function Apoiadores() {
  return (
    <main style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--c-bg)' }}>
      <div className="container">
        <div className="section-header center reveal active">
          <h1 className="section-title">Nossos Apoiadores</h1>
          <p className="section-subtitle" style={{ maxWidth: '800px', marginBottom: '60px' }}>
            A missão do Instituto Passos Livres não seria possível sem a dedicação incrível desses profissionais e grupos que doam seu tempo, talento e amor para transformar vidas.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', paddingBottom: '100px' }}>
          {apoiadoresData.map((apoio) => (
            <Link 
              key={apoio.id} 
              to={`/apoiadores/${apoio.id}`}
              className="glass-panel" 
              style={{ 
                overflow: 'hidden', 
                padding: 0, 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                cursor: 'pointer',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(26,92,42,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 16px 40px -8px rgba(26, 92, 42, 0.05)';
              }}
            >
              <div style={{ height: '260px', backgroundColor: '#e2dfd8', overflow: 'hidden' }}>
                <img 
                  src={apoio.fotoCapa} 
                  alt={apoio.nome} 
                  style={{
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '30px' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--c-forest)', marginBottom: '10px' }}>{apoio.nome}</h3>
                <p style={{ color: 'var(--c-text-muted)', lineHeight: '1.6', marginBottom: '20px' }}>{apoio.descCurta}</p>
                <span style={{ color: 'var(--c-gold)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Conhecer a história &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
