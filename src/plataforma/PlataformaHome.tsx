import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Award, Users, ArrowLeft } from 'lucide-react';

export default function PlataformaHome() {
  return (
    <div className="plat-home">
      <Link to="/" className="plat-home-back">
        <ArrowLeft size={16} />
        Voltar ao site
      </Link>

      <section className="plat-home-hero">
        <div className="plat-home-hero-content">
          <GraduationCap size={56} strokeWidth={1.5} style={{ color: '#fff', marginBottom: '1rem' }} />
          <h1 className="plat-home-title">Plataforma Educacional</h1>
          <p className="plat-home-subtitle">
            Transformando vidas através da educação. Acesse cursos gratuitos, 
            materiais de estudo e acompanhe seu progresso em uma plataforma 
            pensada para você.
          </p>
          <div className="plat-home-actions">
            <Link to="/plataforma/cadastro" className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '0.85rem 2rem' }}>
              Inscreva-se na Seleção
            </Link>
            <Link to="/plataforma/login" className="btn" style={{
              fontSize: '1.05rem',
              padding: '0.85rem 2rem',
              background: 'rgba(255,255,255,0.15)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.3)',
              backdropFilter: 'blur(4px)'
            }}>
              Já tenho conta
            </Link>
          </div>
        </div>
      </section>

      <section className="plat-home-features">
        <div className="plat-feature-card">
          <div className="plat-feature-icon" style={{ background: 'rgba(16,185,129,0.12)', color: '#10B981' }}>
            <BookOpen size={28} />
          </div>
          <h3>Cursos Gratuitos</h3>
          <p>Acesse diversos cursos de reforço escolar e capacitação profissional sem nenhum custo.</p>
        </div>

        <div className="plat-feature-card">
          <div className="plat-feature-icon" style={{ background: 'rgba(59,130,246,0.12)', color: '#3B82F6' }}>
            <Users size={28} />
          </div>
          <h3>Professores Dedicados</h3>
          <p>Aprenda com professores voluntários comprometidos com a transformação social.</p>
        </div>

        <div className="plat-feature-card">
          <div className="plat-feature-icon" style={{ background: 'rgba(245,158,11,0.12)', color: '#F59E0B' }}>
            <Award size={28} />
          </div>
          <h3>Certificado Digital</h3>
          <p>Receba certificados digitais ao concluir os cursos e valorize seu currículo.</p>
        </div>
      </section>
    </div>
  );
}
