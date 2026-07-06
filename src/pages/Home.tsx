import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Shield, HeartHandshake, Tent, Dumbbell, BookOpen, Brain, Scale, Gift, MapPin, Mail } from 'lucide-react';

export default function Home() {

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(r => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="hero" id="inicio">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-label">
              <span className="label-dot"></span>
              ONG em Minas Gerais
            </div>
            <h1 className="hero-title">
              Cada passo <br />
              <em>transforma</em> <br />
              uma vida.
            </h1>
            <p className="hero-subtitle">
              Promovemos o desenvolvimento integral de crianças e adolescentes. Educação, natureza e dignidade, caminhando juntos para um futuro de oportunidades reais.
            </p>
            <div className="hero-actions">
              <Link to="/doar" className="btn btn-primary">Fazer Parte</Link>
              <a href="#sobre" className="btn btn-text">Conhecer História &rarr;</a>
            </div>

            <div className="hero-metrics">
              <div className="metric">
                <span className="metric-number">150<span style={{fontSize: '0.6em'}}>+</span></span>
                <span className="metric-text">Crianças<br/>Atendidas</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric">
                <span className="metric-number">30<span style={{fontSize: '0.6em'}}>+</span></span>
                <span className="metric-text">Voluntários<br/>Ativos</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img src="/image/crianças/Gemini_Generated_Image_4akx1a4akx1a4akx.png" alt="Trilha na natureza" className="main-img" />
            </div>
            <div className="floating-card">
              <div className="card-icon">
                <Leaf size={20} color="#155E2B" />
              </div>
              <div>
                <strong>Contato com a Natureza</strong>
                <span>Trilhas e Educação Ambiental</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES STRIP ===== */}
      <div className="values-strip">
        <div className="container strip-container">
          <span>Integração com a Natureza</span>
          <span>Esporte &amp; Lazer</span>
          <span>Incentivo Educacional</span>
          <span>Apoio Psicológico</span>
          <span>Assistência Social</span>
        </div>
      </div>

      {/* ===== SOBRE ===== */}
      <section className="section-padding" id="sobre">
        <div className="container">
          <div className="sobre-grid">
            <div className="sobre-images reveal">
              <div className="img-large-wrapper">
                <img src="/image/crianças/Capturar.JPG" alt="Sorriso" className="img-large" />
              </div>
              <div className="img-small-wrapper">
                <img src="/image/crianças/naescola.JPG" alt="Escola" className="img-small" />
              </div>
            </div>

            <div className="sobre-text reveal reveal-delay-2">
              <h2 className="section-title">Nossa essência e missão</h2>
              <p className="lead-text">
                O Instituto Passos Livres nasceu da esperança inquieta de ver cada criança e adolescente construindo um futuro digno. Mais do que um espaço, <strong>somos uma família estendida</strong>.
              </p>
              <p className="body-text">
                Sabemos que as dificuldades são enormes, mas acreditamos que, com amor, educação e contato com a natureza, podemos curar feridas e resgatar a alegria de sonhar. Cada abraço, cada aula e cada trilha são passos firmes na jornada de proteção e desenvolvimento daqueles que mais precisam de nós.
              </p>

              <ul className="feature-list">
                <li>
                  <div className="feature-icon">
                    <Shield size={20} color="#155E2B" />
                  </div>
                  <div className="feature-content">
                    <strong>Ambiente Seguro</strong>
                    <p>Proteção integral baseada no respeito.</p>
                  </div>
                </li>
                <li>
                  <div className="feature-icon">
                    <HeartHandshake size={20} color="#155E2B" />
                  </div>
                  <div className="feature-content">
                    <strong>Apoio às Famílias</strong>
                    <p>Orientação jurídica e social contínua.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROGRAMAS ===== */}
      <section className="section-padding" id="programas" style={{ background: 'var(--c-bg-off)' }}>
        <div className="container">
          <div className="text-center reveal">
            <h2 className="section-title">O que fazemos</h2>
            <p className="section-subtitle">Pilares fundamentais para o desenvolvimento integral.</p>
          </div>

          <div className="programas-grid">
            <div className="prog-card reveal reveal-delay-1">
              <div className="prog-icon"><Tent size={28} color="#155E2B" /></div>
              <h3>Natureza</h3>
              <p>Trilhas e acampamentos focados na educação ambiental e conscientização ecológica.</p>
            </div>
            <div className="prog-card reveal reveal-delay-2">
              <div className="prog-icon"><Dumbbell size={28} color="#155E2B" /></div>
              <h3>Esporte</h3>
              <p>Integração e disciplina por meio da prática contínua de atividades esportivas.</p>
            </div>
            <div className="prog-card reveal reveal-delay-3">
              <div className="prog-icon"><BookOpen size={28} color="#155E2B" /></div>
              <h3>Educação</h3>
              <p>Reforço escolar e qualificação profissionalizante para um futuro no mercado de trabalho.</p>
            </div>
            <div className="prog-card reveal reveal-delay-1">
              <div className="prog-icon"><Brain size={28} color="#155E2B" /></div>
              <h3>Psicologia</h3>
              <p>Acolhimento humanizado para suporte emocional e saúde mental dos assistidos.</p>
            </div>
            <div className="prog-card reveal reveal-delay-2">
              <div className="prog-icon"><Scale size={28} color="#155E2B" /></div>
              <h3>Jurídico</h3>
              <p>Orientação e assistência legal para defender os direitos fundamentais das famílias.</p>
            </div>
            <div className="prog-card reveal reveal-delay-3">
              <div className="prog-icon"><Gift size={28} color="#155E2B" /></div>
              <h3>Social</h3>
              <p>Distribuição de doações vitais, visando o amparo material em momentos críticos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMPACTO ===== */}
      <section className="impacto section-padding" id="impacto">
        <div className="container impacto-container">
          <div className="impacto-content reveal">
            <h2 className="section-title">Resultados de uma caminhada conjunta</h2>
            <p className="lead-text text-light-muted">
              Cada número reflete histórias reais de superação e esperança construídas por nossa equipe e voluntários.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">Crianças &amp; Adolescentes</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">80+</span>
                <span className="stat-label">Famílias Amparadas</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Programas Ativos</span>
              </div>
            </div>
          </div>
          <div className="impacto-image reveal reveal-delay-2">
            <img src="/image/crianças/istockphoto-2096480418-612x612.jpg" alt="Impacto e união" />
          </div>
        </div>
      </section>

      {/* ===== GALERIA ===== */}
      <section className="section-padding" id="galeria">
        <div className="container">
          <div className="text-center reveal">
            <h2 className="section-title">Momentos</h2>
          </div>
          <div className="masonry-grid">
            <div className="masonry-item reveal reveal-delay-1">
              <img src="/image/crianças/Gemini_Generated_Image_4akx1a4akx1a4akx.png" alt="Trilha" />
            </div>
            <div className="masonry-item reveal reveal-delay-2">
              <img src="/image/crianças/Gemini_Generated_Image_rw0okyrw0okyrw0o.png" alt="União" />
            </div>
            <div className="masonry-item reveal reveal-delay-3">
              <img src="/image/crianças/Capturar2.JPG" alt="Sorriso" />
            </div>
            <div className="masonry-item reveal reveal-delay-1">
              <img src="/image/crianças/naescola.JPG" alt="Escola" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== DOE / CONTATO ===== */}
      <section className="section-padding" id="doe">
        <div className="container">
          <div className="cta-wrapper reveal">
            <div className="cta-info">
              <h2 className="section-title">Seja um transformador</h2>
              <p className="body-text">
                Sua doação, seu tempo como voluntário ou o patrocínio da sua empresa permitem que a caminhada do Instituto Passos Livres não pare.
              </p>
              <div className="contact-methods">
                <div className="method">
                  <span className="method-icon"><MapPin size={20} /></span>
                  <span>Santa Luzia / Belo Horizonte - MG</span>
                </div>
                <div className="method">
                  <span className="method-icon"><Mail size={20} /></span>
                  <span>contato@institutopasoslivres.org.br</span>
                </div>
              </div>
            </div>

            <div className="cta-form-container" id="contato">
              <form className="clean-form" id="doe-form" onSubmit={(e) => { e.preventDefault(); alert('Formulário pronto para integração Supabase!'); }}>
                <h3 className="form-title">Fale Conosco</h3>
                <div className="form-row">
                  <input type="text" id="nome" placeholder="Seu Nome" required />
                </div>
                <div className="form-row">
                  <input type="email" id="email" placeholder="Seu E-mail" required />
                </div>
                <div className="form-row">
                  <select id="interesse" required defaultValue="">
                    <option value="" disabled>Como deseja apoiar?</option>
                    <option value="doacao">Fazer Doação</option>
                    <option value="voluntario">Ser Voluntário</option>
                    <option value="empresa">Parceria Empresarial</option>
                  </select>
                </div>
                <div className="form-row">
                  <textarea id="mensagem" placeholder="Sua Mensagem..." rows={3}></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Enviar Mensagem</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
