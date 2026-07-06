import { useParams, Link } from 'react-router-dom';
import { apoiadoresData } from '../data/apoiadores';
import { ArrowLeft, Camera, Globe, MessageCircle } from 'lucide-react';

export default function ApoiadorDetalhe() {
  const { id } = useParams();
  const apoio = apoiadoresData.find(a => a.id === id);

  if (!apoio) {
    return (
      <main style={{ paddingTop: '160px', minHeight: '100vh', textAlign: 'center' }}>
        <div className="container">
          <h2>Apoiador não encontrado.</h2>
          <Link to="/apoiadores" className="btn btn-text" style={{ marginTop: '20px' }}>&larr; Voltar</Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', paddingBottom: '100px' }}>
      {/* Hero Banner */}
      <div style={{
        position: 'relative', width: '100%', height: '50vh', minHeight: '350px',
        overflow: 'hidden', display: 'flex', alignItems: 'flex-end'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('${apoio.fotoCapa}')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.4)'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '60px' }}>
          <Link to="/apoiadores" style={{
            color: '#fff', display: 'inline-flex', alignItems: 'center', gap: '8px',
            marginBottom: '24px', opacity: 0.8, fontSize: '0.95rem'
          }}>
            <ArrowLeft size={18} /> Voltar para Apoiadores
          </Link>
          <h1 style={{
            color: '#fff', fontSize: 'clamp(1.75rem, 6vw, 3.5rem)',
            fontFamily: 'var(--font-display)', lineHeight: 1.1, marginBottom: '12px'
          }}>
            {apoio.nome}
          </h1>
          <p style={{ color: 'var(--c-gold)', fontSize: 'clamp(0.95rem, 3vw, 1.15rem)', fontWeight: 500 }}>
            {apoio.descCurta}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container" style={{ marginTop: '-30px', position: 'relative', zIndex: 2 }}>
        <div className="cta-wrapper" style={{ padding: '40px 24px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: 'var(--c-forest)', marginBottom: '24px' }}>
              {apoio.detalhes.titulo}
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 2, color: 'var(--c-text-muted)' }}>
              {apoio.detalhes.texto}
            </p>
          </div>

          {/* Membros */}
          {apoio.detalhes.membros && apoio.detalhes.membros.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginTop: '40px' }}>
              {apoio.detalhes.membros.map((membro: any, idx: number) => (
                <div key={idx} style={{
                  display: 'flex', flexDirection: idx % 2 === 0 ? 'column' : 'column',
                  gap: '24px', alignItems: 'center'
                }}>
                  <div style={{ width: '100%', maxWidth: '400px', borderRadius: 'var(--rad)', overflow: 'hidden' }}>
                    <img src={membro.foto} alt={membro.nome} style={{
                      width: '100%', height: '300px', objectFit: 'cover'
                    }} />
                  </div>
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--c-forest)', marginBottom: '6px' }}>{membro.nome}</h3>
                    <span style={{
                      display: 'inline-block', backgroundColor: 'rgba(245, 158, 11, 0.1)',
                      color: 'var(--c-gold)', padding: '4px 14px', borderRadius: '100px',
                      fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase',
                      letterSpacing: '0.05em', marginBottom: '16px'
                    }}>
                      {membro.papel}
                    </span>
                    <p style={{
                      fontSize: '1rem', lineHeight: 1.8, color: 'var(--c-text-muted)',
                      fontStyle: 'italic', borderLeft: '3px solid var(--c-primary)',
                      paddingLeft: '16px', textAlign: 'left', maxWidth: '600px', margin: '0 auto'
                    }}>
                      "{membro.historia}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Social Links */}
          {apoio.redesSociais && (
            <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(0,0,0,0.06)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--c-forest)', marginBottom: '16px' }}>Conheça mais e acompanhe</h3>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                {apoio.redesSociais.whatsapp && (
                  <a href={apoio.redesSociais.whatsapp} target="_blank" rel="noopener noreferrer"
                     className="btn" style={{ backgroundColor: '#25D366', color: '#fff', padding: '12px 20px', fontSize: '0.95rem' }}>
                    <MessageCircle size={18} /> WhatsApp
                  </a>
                )}
                {apoio.redesSociais.instagram && (
                  <a href={apoio.redesSociais.instagram} target="_blank" rel="noopener noreferrer"
                     className="btn" style={{ backgroundColor: '#E1306C', color: '#fff', padding: '12px 20px', fontSize: '0.95rem' }}>
                    <Camera size={18} /> Instagram
                  </a>
                )}
                {apoio.redesSociais.site && (
                  <a href={apoio.redesSociais.site} target="_blank" rel="noopener noreferrer"
                     className="btn" style={{ backgroundColor: 'var(--c-forest)', color: '#fff', padding: '12px 20px', fontSize: '0.95rem' }}>
                    <Globe size={18} /> Site
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
