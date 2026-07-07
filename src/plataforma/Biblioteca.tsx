import { useState } from 'react';
import { Search, FileText, Video, BookOpen, Download } from 'lucide-react';

const categories = ['Todos', 'Matemática', 'Ciências', 'Português', 'Informática'];

const materials = [
  { title: 'Apostila de Matemática Básica', type: 'PDF', category: 'Matemática', icon: 'file', description: 'Material completo sobre operações fundamentais e introdução à álgebra.' },
  { title: 'Videoaula: Frações e Decimais', type: 'Vídeo', category: 'Matemática', icon: 'video', description: 'Aula gravada sobre frações, decimais e porcentagens com exercícios.' },
  { title: 'Gramática Essencial', type: 'PDF', category: 'Português', icon: 'file', description: 'Guia prático de gramática para estudos e redação.' },
  { title: 'Apostila de Ciências Naturais', type: 'Apostila', category: 'Ciências', icon: 'book', description: 'Conteúdo sobre ecossistemas, corpo humano e meio ambiente.' },
  { title: 'Introdução ao Computador', type: 'PDF', category: 'Informática', icon: 'file', description: 'Apostila introdutória sobre hardware, software e internet.' },
  { title: 'Videoaula: Redação Nota 10', type: 'Vídeo', category: 'Português', icon: 'video', description: 'Técnicas de redação para provas e concursos.' },
  { title: 'Planilhas e Documentos', type: 'Apostila', category: 'Informática', icon: 'book', description: 'Tutorial prático de Excel e Word para o dia a dia.' },
  { title: 'Videoaula: Experiências Científicas', type: 'Vídeo', category: 'Ciências', icon: 'video', description: 'Demonstrações de experiências simples para aprender ciências.' },
];

const iconMap: Record<string, React.ReactNode> = {
  file: <FileText size={24} />,
  video: <Video size={24} />,
  book: <BookOpen size={24} />,
};

const typeColorMap: Record<string, string> = {
  PDF: '#3B82F6',
  Vídeo: '#EC4899',
  Apostila: '#F59E0B',
};

export default function Biblioteca() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = materials.filter((m) => {
    const matchCategory = activeCategory === 'Todos' || m.category === activeCategory;
    const matchSearch = m.title.toLowerCase().includes(search.toLowerCase()) ||
      m.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div>
      <div className="plat-page-header">
        <h1>Biblioteca Digital</h1>
        <p style={{ color: '#64748B', marginTop: '0.25rem' }}>Acesse materiais de estudo, apostilas e videoaulas</p>
      </div>

      <div className="plat-search-bar" style={{ position: 'relative', marginBottom: '1rem' }}>
        <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
        <input
          type="text"
          placeholder="Buscar materiais..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: '100%',
            padding: '0.8rem 1rem 0.8rem 2.75rem',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            fontSize: '0.9rem',
            outline: 'none',
            background: '#fff',
            transition: 'border-color 0.2s',
          }}
        />
      </div>

      <div className="plat-filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`plat-filter-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="plat-library-grid" style={{ marginTop: '1.5rem' }}>
        {filtered.map((mat, i) => (
          <div key={i} className="plat-material-card">
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: `${typeColorMap[mat.type]}15`,
              color: typeColorMap[mat.type],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.85rem',
              flexShrink: 0,
            }}>
              {iconMap[mat.icon]}
            </div>

            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1E293B', margin: '0 0 0.4rem 0' }}>
              {mat.title}
            </h3>

            <span style={{
              display: 'inline-block',
              padding: '0.2rem 0.6rem',
              borderRadius: '6px',
              fontSize: '0.7rem',
              fontWeight: 700,
              background: `${typeColorMap[mat.type]}15`,
              color: typeColorMap[mat.type],
              marginBottom: '0.6rem',
            }}>
              {mat.type}
            </span>

            <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.6, margin: '0 0 1rem 0', flex: 1 }}>
              {mat.description}
            </p>

            <button style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              width: '100%',
              padding: '0.6rem',
              background: '#F0FDF4',
              color: '#10B981',
              border: '1px solid #BBF7D0',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.82rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}>
              <Download size={15} />
              Baixar material
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
