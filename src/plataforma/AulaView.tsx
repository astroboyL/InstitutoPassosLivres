import { Link, useParams } from 'react-router-dom';
import { Play, Download, Check, ArrowLeft, FileText } from 'lucide-react';

const lessons = [
  { id: 1, title: 'Introdução ao curso', completed: true },
  { id: 2, title: 'Conceitos fundamentais', completed: true },
  { id: 3, title: 'Exercícios práticos', completed: true },
  { id: 4, title: 'Revisão e aprofundamento', completed: false },
  { id: 5, title: 'Avaliação intermediária', completed: false },
  { id: 6, title: 'Projeto final', completed: false },
];

const materials = [
  { name: 'Apostila — Módulo 1.pdf', size: '2.4 MB' },
  { name: 'Lista de exercícios.pdf', size: '850 KB' },
  { name: 'Material complementar.pdf', size: '1.1 MB' },
];

export default function AulaView() {
  const { cursoId: _cursoId } = useParams();

  return (
    <div>
      <div style={{ marginBottom: '1.5rem' }}>
        <Link to="/plataforma/sala-de-aula" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#64748B', textDecoration: 'none', marginBottom: '0.75rem' }}>
          <ArrowLeft size={16} />
          Voltar para Sala de Aula
        </Link>
        <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
          <Link to="/plataforma/sala-de-aula" style={{ color: '#94A3B8', textDecoration: 'none' }}>Sala de Aula</Link>
          {' › '}
          <span style={{ color: '#64748B' }}>Curso</span>
          {' › '}
          <span style={{ color: '#10B981' }}>Aula 4 — Revisão e aprofundamento</span>
        </div>
      </div>

      <div className="plat-aula-layout">
        <div className="plat-aula-content">
          <div className="plat-video-placeholder">
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(16,185,129,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}>
              <Play size={28} style={{ color: '#10B981', marginLeft: '3px' }} />
            </div>
            <p style={{ color: '#94A3B8', fontSize: '0.85rem', marginTop: '0.75rem' }}>Clique para reproduzir a aula</p>
          </div>

          <div style={{ padding: '0.5rem 0' }}>
            <h1 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#1E293B', margin: '0 0 0.5rem 0' }}>
              Aula 4 — Revisão e aprofundamento
            </h1>
            <p style={{ color: '#64748B', lineHeight: 1.7, fontSize: '0.92rem' }}>
              Nesta aula, vamos revisar os conceitos abordados nos módulos anteriores e 
              aprofundar o entendimento com exemplos práticos e exercícios guiados. 
              Prepare seu caderno e acompanhe os exemplos no vídeo.
            </p>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.75rem' }}>
              Materiais da aula
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {materials.map((mat, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 1rem',
                  background: '#F8FAFC',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <FileText size={18} style={{ color: '#3B82F6' }} />
                    <div>
                      <div style={{ fontSize: '0.9rem', color: '#1E293B', fontWeight: 500 }}>{mat.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{mat.size}</div>
                    </div>
                  </div>
                  <button style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#10B981',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                  }}>
                    <Download size={16} />
                    Baixar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="plat-aula-sidebar">
          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.75rem' }}>
            Aulas do curso
          </h3>
          <div className="plat-lesson-list">
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                className={`plat-lesson-item ${lesson.id === 4 ? 'active' : ''}`}
              >
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: lesson.completed ? '#10B981' : lesson.id === 4 ? '#3B82F6' : '#E2E8F0',
                  color: lesson.completed || lesson.id === 4 ? '#fff' : '#94A3B8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  flexShrink: 0,
                }}>
                  {lesson.completed ? <Check size={14} /> : lesson.id}
                </div>
                <span style={{
                  fontSize: '0.85rem',
                  color: lesson.id === 4 ? '#1E293B' : '#64748B',
                  fontWeight: lesson.id === 4 ? 600 : 400,
                }}>
                  {lesson.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
