import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, User, Play } from 'lucide-react';

const courses = [
  { id: 'curso-1', name: 'Reforço de Matemática', instructor: 'Prof. Carlos Silva', lessons: 16, progress: 75, color: '#3B82F6' },
  { id: 'curso-2', name: 'Informática Básica', instructor: 'Profa. Ana Costa', lessons: 12, progress: 40, color: '#10B981' },
  { id: 'curso-3', name: 'Educação Ambiental', instructor: 'Prof. Lucas Rocha', lessons: 10, progress: 90, color: '#F59E0B' },
  { id: 'curso-4', name: 'Português e Redação', instructor: 'Profa. Beatriz Lima', lessons: 14, progress: 0, color: '#8B5CF6' },
  { id: 'curso-5', name: 'Inglês Básico', instructor: 'Prof. Daniel Souza', lessons: 20, progress: 0, color: '#EC4899' },
  { id: 'curso-6', name: 'Artes e Cultura', instructor: 'Profa. Mariana Alves', lessons: 8, progress: 0, color: '#F97316' },
];

const tabs = ['Todos', 'Em Andamento', 'Concluídos', 'Disponíveis'];

export default function SalaDeAula() {
  const [activeTab, setActiveTab] = useState('Todos');

  const filteredCourses = courses.filter((c) => {
    if (activeTab === 'Todos') return true;
    if (activeTab === 'Em Andamento') return c.progress > 0 && c.progress < 100;
    if (activeTab === 'Concluídos') return c.progress === 100;
    if (activeTab === 'Disponíveis') return c.progress === 0;
    return true;
  });

  return (
    <div>
      <div className="plat-page-header">
        <h1>Sala de Aula</h1>
        <p style={{ color: '#64748B', marginTop: '0.25rem' }}>Explore seus cursos e continue aprendendo</p>
      </div>

      <div className="plat-filter-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`plat-filter-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="plat-courses-grid" style={{ marginTop: '1.5rem' }}>
        {filteredCourses.map((course) => (
          <div key={course.id} className="plat-course-card">
            <div style={{
              height: '100px',
              background: `linear-gradient(135deg, ${course.color}, ${course.color}99)`,
              borderRadius: '12px 12px 0 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <BookOpen size={36} style={{ color: 'rgba(255,255,255,0.85)' }} />
            </div>
            <div style={{ padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1E293B', margin: '0 0 0.5rem 0' }}>
                {course.name}
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#64748B', marginBottom: '0.35rem' }}>
                <User size={14} />
                {course.instructor}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#64748B', marginBottom: '1rem' }}>
                <Play size={14} />
                {course.lessons} aulas
              </div>

              {course.progress > 0 && (
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Progresso</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: course.color }}>{course.progress}%</span>
                  </div>
                  <div className="plat-progress-bar">
                    <div className="plat-progress-fill" style={{ width: `${course.progress}%`, background: course.color }} />
                  </div>
                </div>
              )}

              <Link
                to={`/plataforma/sala-de-aula/${course.id}`}
                className="btn btn-primary btn-block"
                style={{ fontSize: '0.85rem', padding: '0.6rem', textDecoration: 'none', textAlign: 'center' }}
              >
                Acessar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
