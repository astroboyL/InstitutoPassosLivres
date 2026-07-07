import { BookOpen, CheckCircle, Clock, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  { name: 'Reforço de Matemática', progress: 75, color: '#3B82F6' },
  { name: 'Informática Básica', progress: 40, color: '#10B981' },
  { name: 'Educação Ambiental', progress: 90, color: '#F59E0B' },
];

const nextLessons = [
  { time: 'Hoje, 14:00', title: 'Equações do 2º grau — Matemática' },
  { time: 'Hoje, 16:00', title: 'Planilhas eletrônicas — Informática' },
  { time: 'Amanhã, 10:00', title: 'Reciclagem e coleta seletiva — Ed. Ambiental' },
];

export default function Dashboard() {
  const today = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      <div className="plat-page-header">
        <h1>Bem-vindo(a) de volta!</h1>
        <p style={{ color: '#64748B', marginTop: '0.25rem', textTransform: 'capitalize' }}>{today}</p>
      </div>

      <div className="plat-stats-grid">
        <div className="plat-stat-card">
          <div className="plat-stat-icon" style={{ background: 'rgba(59,130,246,0.12)', color: '#3B82F6' }}>
            <BookOpen size={22} />
          </div>
          <div className="plat-stat-number">3</div>
          <div className="plat-stat-label">Cursos Matriculados</div>
        </div>

        <div className="plat-stat-card">
          <div className="plat-stat-icon" style={{ background: 'rgba(16,185,129,0.12)', color: '#10B981' }}>
            <CheckCircle size={22} />
          </div>
          <div className="plat-stat-number">12</div>
          <div className="plat-stat-label">Aulas Concluídas</div>
        </div>

        <div className="plat-stat-card">
          <div className="plat-stat-icon" style={{ background: 'rgba(139,92,246,0.12)', color: '#8B5CF6' }}>
            <Clock size={22} />
          </div>
          <div className="plat-stat-number">24</div>
          <div className="plat-stat-label">Horas de Estudo</div>
        </div>

        <div className="plat-stat-card">
          <div className="plat-stat-icon" style={{ background: 'rgba(245,158,11,0.12)', color: '#F59E0B' }}>
            <Award size={22} />
          </div>
          <div className="plat-stat-number">1</div>
          <div className="plat-stat-label">Certificados</div>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1E293B', margin: 0 }}>Meus Cursos</h2>
          <Link to="/plataforma/sala-de-aula" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem', color: '#10B981', textDecoration: 'none', fontWeight: 600 }}>
            Ver todos <ArrowRight size={14} />
          </Link>
        </div>

        <div className="plat-courses-grid">
          {courses.map((course, i) => (
            <Link to={`/plataforma/sala-de-aula/curso-${i + 1}`} key={i} className="plat-course-card" style={{ textDecoration: 'none' }}>
              <div style={{ height: '8px', background: course.color, borderRadius: '8px 8px 0 0' }} />
              <div style={{ padding: '1.25rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1E293B', margin: '0 0 1rem 0' }}>
                  {course.name}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', color: '#64748B' }}>Progresso</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: course.color }}>{course.progress}%</span>
                </div>
                <div className="plat-progress-bar">
                  <div className="plat-progress-fill" style={{ width: `${course.progress}%`, background: course.color }} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1E293B', marginBottom: '1rem' }}>Próximas Aulas</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {nextLessons.map((lesson, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem 1.25rem',
              background: '#fff',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(16,185,129,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Clock size={18} style={{ color: '#10B981' }} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: 600, marginBottom: '0.15rem' }}>
                  {lesson.time}
                </div>
                <div style={{ fontSize: '0.95rem', color: '#1E293B', fontWeight: 500 }}>
                  {lesson.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
