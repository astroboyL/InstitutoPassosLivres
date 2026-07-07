import { Users, CheckCircle, Clock, BookOpen, Eye } from 'lucide-react';

const inscricoes = [
  { nome: 'Lucas Ferreira Silva', email: 'lucas.ferreira@email.com', curso: 'Informática Básica', status: 'Aprovado', data: '02/07/2026' },
  { nome: 'Mariana Oliveira Santos', email: 'mariana.oliveira@email.com', curso: 'Reforço de Matemática', status: 'Pendente', data: '01/07/2026' },
  { nome: 'Pedro Henrique Costa', email: 'pedro.costa@email.com', curso: 'Educação Ambiental', status: 'Em Análise', data: '30/06/2026' },
  { nome: 'Juliana Almeida Souza', email: 'juliana.almeida@email.com', curso: 'Português', status: 'Aprovado', data: '29/06/2026' },
  { nome: 'Rafael Barbosa Lima', email: 'rafael.barbosa@email.com', curso: 'Inglês Básico', status: 'Pendente', data: '28/06/2026' },
  { nome: 'Camila Rodrigues Pereira', email: 'camila.rodrigues@email.com', curso: 'Artes', status: 'Aprovado', data: '27/06/2026' },
];

function badgeClass(status: string) {
  if (status === 'Aprovado') return 'plat-badge plat-badge-success';
  if (status === 'Pendente') return 'plat-badge plat-badge-warning';
  return 'plat-badge plat-badge-info';
}

export default function Secretaria() {
  return (
    <div>
      <div className="plat-page-header">
        <h1>Secretaria</h1>
        <p>Painel Administrativo</p>
      </div>

      <div className="plat-stats-grid">
        <div className="plat-stat-card">
          <Users size={28} />
          <div className="plat-stat-number">47</div>
          <div className="plat-stat-label">Total de Inscrições</div>
        </div>
        <div className="plat-stat-card">
          <CheckCircle size={28} />
          <div className="plat-stat-number">32</div>
          <div className="plat-stat-label">Aprovados</div>
        </div>
        <div className="plat-stat-card">
          <Clock size={28} />
          <div className="plat-stat-number">15</div>
          <div className="plat-stat-label">Pendentes</div>
        </div>
        <div className="plat-stat-card">
          <BookOpen size={28} />
          <div className="plat-stat-number">6</div>
          <div className="plat-stat-label">Cursos Ativos</div>
        </div>
      </div>

      <div className="plat-table-wrapper">
        <h2 style={{ marginBottom: '1rem' }}>Inscrições Recentes</h2>
        <table className="plat-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Curso</th>
              <th>Status</th>
              <th>Data</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {inscricoes.map((row, i) => (
              <tr key={i}>
                <td>{row.nome}</td>
                <td>{row.email}</td>
                <td>{row.curso}</td>
                <td>
                  <span className={badgeClass(row.status)}>{row.status}</span>
                </td>
                <td>{row.data}</td>
                <td>
                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    <button className="btn btn-sm btn-success" title="Aprovar">
                      <CheckCircle size={14} /> Aprovar
                    </button>
                    <button className="btn btn-sm btn-danger" title="Rejeitar">
                      <Clock size={14} /> Rejeitar
                    </button>
                    <button className="btn btn-sm" title="Visualizar">
                      <Eye size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
