import { MessageCircle, Bell, FileText, Circle } from 'lucide-react';

const professores = [
  { nome: 'Prof. Ana', materia: 'Matemática', iniciais: 'AN', online: true },
  { nome: 'Prof. Carlos', materia: 'Português', iniciais: 'CA', online: false },
  { nome: 'Prof. Maria', materia: 'Ciências', iniciais: 'MA', online: true },
  { nome: 'Prof. João', materia: 'Informática', iniciais: 'JO', online: false },
];

const avisos = [
  { data: '05/07/2026', texto: 'Reunião pedagógica marcada para sexta-feira às 14h na sala de reuniões.' },
  { data: '03/07/2026', texto: 'Novas apostilas de matemática disponíveis para download no sistema.' },
  { data: '01/07/2026', texto: 'Prazo para entrega das notas do 2° bimestre: até 10/07.' },
];

const materiais = [
  { nome: 'Apostila Matemática - Cap. 5', tipo: 'PDF', autor: 'Prof. Ana' },
  { nome: 'Lista de Exercícios - Português', tipo: 'DOCX', autor: 'Prof. Carlos' },
  { nome: 'Projeto Meio Ambiente - Slides', tipo: 'PPTX', autor: 'Prof. Maria' },
];

export default function SalaProfessores() {
  return (
    <div>
      <div className="plat-page-header">
        <h1>Sala dos Professores</h1>
      </div>

      <div className="plat-teachers-grid">
        {professores.map((prof, i) => (
          <div className="plat-teacher-card" key={i}>
            <div className="plat-avatar">{prof.iniciais}</div>
            <h3>{prof.nome}</h3>
            <p>{prof.materia}</p>
            <span className={`plat-status-dot ${prof.online ? 'online' : 'offline'}`}>
              <Circle size={8} fill={prof.online ? '#22c55e' : '#94a3b8'} stroke="none" />
              {prof.online ? 'Online' : 'Offline'}
            </span>
            <button className="btn btn-primary btn-sm" style={{ marginTop: '0.75rem' }}>
              <MessageCircle size={14} /> Enviar Mensagem
            </button>
          </div>
        ))}
      </div>

      <section className="plat-announcements" style={{ marginTop: '2rem' }}>
        <h2><Bell size={20} /> Avisos Recentes</h2>
        <div className="plat-announcements-list">
          {avisos.map((aviso, i) => (
            <div className="plat-announcement-card" key={i}>
              <span className="plat-announcement-date">{aviso.data}</span>
              <p>{aviso.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2><FileText size={20} /> Materiais Compartilhados</h2>
        <div className="plat-announcements-list">
          {materiais.map((mat, i) => (
            <div className="plat-announcement-card" key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong>{mat.nome}</strong>
                  <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.7 }}>{mat.autor} · {mat.tipo}</p>
                </div>
                <button className="btn btn-sm">
                  <FileText size={14} /> Baixar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
