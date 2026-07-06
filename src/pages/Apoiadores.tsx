import { Link } from 'react-router-dom';
import { apoiadoresData } from '../data/apoiadores';

export default function Apoiadores() {
  return (
    <main style={{ paddingTop: 'calc(var(--nav-h, 70px) + 60px)', minHeight: '100vh' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '48px' }}>
          <h1 className="section-title">Nossos Apoiadores</h1>
          <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            A missão do Instituto Passos Livres não seria possível sem a dedicação incrível desses profissionais e grupos que doam seu tempo, talento e amor para transformar vidas.
          </p>
        </div>

        <div className="programas-grid" style={{ paddingBottom: '80px' }}>
          {apoiadoresData.map((apoio) => (
            <Link
              key={apoio.id}
              to={`/apoiadores/${apoio.id}`}
              className="prog-card"
              style={{ padding: 0, overflow: 'hidden', textDecoration: 'none' }}
            >
              <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
                <img
                  src={apoio.fotoCapa}
                  alt={apoio.nome}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--c-forest)', marginBottom: '8px' }}>{apoio.nome}</h3>
                <p style={{ color: 'var(--c-text-muted)', lineHeight: 1.6, marginBottom: '16px', fontSize: '0.95rem' }}>{apoio.descCurta}</p>
                <span style={{ color: 'var(--c-gold)', fontWeight: 600, fontSize: '0.875rem' }}>
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
