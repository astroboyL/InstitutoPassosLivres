import { useParams, Link } from 'react-router-dom';
import { apoiadoresData } from '../data/apoiadores';
import { ArrowLeft, Instagram, Globe, MessageCircle } from 'lucide-react';

export default function ApoiadorDetalhe() {
  const { id } = useParams();
  const apoio = apoiadoresData.find(a => a.id === id);

  if (!apoio) {
    return (
      <main style={{ paddingTop: '160px', minHeight: '100vh', textAlign: 'center', backgroundColor: 'var(--c-bg)' }}>
        <div className="container">
          <h2>Apoiador não encontrado.</h2>
          <Link to="/apoiadores" className="btn btn-text" style={{ marginTop: '20px' }}>&larr; Voltar</Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ backgroundColor: 'var(--c-bg)', minHeight: '100vh', paddingBottom: '100px', paddingTop: '120px' }}>
      {/* Cinematic Hero */}
      <div style={{ position: 'relative', width: '100%', height: '50vh', minHeight: '400px', overflow: 'hidden', borderRadius: '0 0 40px 40px' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: `url('${apoio.fotoCapa}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '80px' }}>
          <Link to="/apoiadores" style={{ color: 'var(--c-white)', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '30px', textDecoration: 'none', opacity: 0.8, transition: 'opacity 0.3s' }} onMouseOver={e => e.currentTarget.style.opacity = '1'} onMouseOut={e => e.currentTarget.style.opacity = '0.8'}>
            <ArrowLeft size={20} /> Voltar para Apoiadores
          </Link>
          <h1 style={{ color: 'var(--c-white)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-serif)', lineHeight: 1.1, marginBottom: '16px' }}>{apoio.nome}</h1>
          <p style={{ color: 'var(--c-gold)', fontSize: '1.2rem', fontWeight: 500 }}>{apoio.descCurta}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container" style={{ marginTop: '-40px', position: 'relative', zIndex: 2 }}>
        <div className="glass-panel" style={{ padding: '60px', display: 'flex', flexDirection: 'column', gap: '60px' }}>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--c-forest)', marginBottom: '30px' }}>{apoio.detalhes.titulo}</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '2', color: 'var(--c-text-main)' }}>{apoio.detalhes.texto}</p>
          </div>

          {/* Membros Section */}
          {apoio.detalhes.membros && apoio.detalhes.membros.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', marginTop: '40px' }}>
              {apoio.detalhes.membros.map((membro: any, idx: number) => (
                <div key={idx} style={{ 
                  display: 'flex', 
                  flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
                  gap: '40px',
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ 
                    flex: '1 1 300px', 
                    borderRadius: 'var(--radius-lg)', 
                    overflow: 'hidden', 
                    boxShadow: 'var(--shadow-hover)' 
                  }}>
                    <img src={membro.foto} alt={membro.nome} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                  </div>
                  <div style={{ flex: '2 1 400px' }}>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--c-forest)', marginBottom: '8px' }}>{membro.nome}</h3>
                    <span style={{ display: 'inline-block', backgroundColor: 'rgba(232, 168, 32, 0.1)', color: 'var(--c-gold-dark)', padding: '6px 16px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '24px' }}>
                      {membro.papel}
                    </span>
                    <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--c-text-muted)', fontStyle: 'italic', borderLeft: '4px solid var(--c-renewal)', paddingLeft: '20px' }}>
                      "{membro.historia}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Social Links / Contact */}
          {apoio.redesSociais && (
            <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--c-forest)', marginBottom: '20px' }}>Conheça mais e acompanhe</h3>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                {apoio.redesSociais.whatsapp && (
                  <a href={apoio.redesSociais.whatsapp} target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: '#25D366', color: 'white', display: 'flex', gap: '10px' }}>
                    <MessageCircle size={20} /> Falar no WhatsApp
                  </a>
                )}
                {apoio.redesSociais.instagram && (
                  <a href={apoio.redesSociais.instagram} target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: '#E1306C', color: 'white', display: 'flex', gap: '10px' }}>
                    <Instagram size={20} /> Instagram
                  </a>
                )}
                {apoio.redesSociais.site && (
                  <a href={apoio.redesSociais.site} target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: 'var(--c-forest)', color: 'white', display: 'flex', gap: '10px' }}>
                    <Globe size={20} /> Visitar Site
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
