import { useState } from 'react';
import { Send, Search, MoreVertical, Circle } from 'lucide-react';

interface Conversa {
  id: number;
  nome: string;
  ultimaMensagem: string;
  hora: string;
  naoLidas: number;
  iniciais: string;
  online: boolean;
}

interface Mensagem {
  id: number;
  texto: string;
  enviada: boolean;
  hora: string;
}

const conversas: Conversa[] = [
  { id: 1, nome: 'Suporte Geral', ultimaMensagem: 'Como posso ajudar?', hora: '10:32', naoLidas: 2, iniciais: 'SG', online: true },
  { id: 2, nome: 'Prof. Ana - Matemática', ultimaMensagem: 'A prova será na próxima semana.', hora: '09:15', naoLidas: 0, iniciais: 'AN', online: true },
  { id: 3, nome: 'Prof. Carlos - Português', ultimaMensagem: 'Enviei o material de leitura.', hora: 'Ontem', naoLidas: 1, iniciais: 'CA', online: false },
  { id: 4, nome: 'Grupo Turma A', ultimaMensagem: 'Alguém tem o link da aula?', hora: 'Ontem', naoLidas: 5, iniciais: 'TA', online: true },
];

const mensagensData: Record<number, Mensagem[]> = {
  1: [
    { id: 1, texto: 'Olá! Bem-vindo ao suporte do Instituto Passos Livres.', enviada: false, hora: '10:00' },
    { id: 2, texto: 'Olá! Preciso de ajuda para acessar meu boletim.', enviada: true, hora: '10:05' },
    { id: 3, texto: 'Claro! Você pode acessar pelo menu "Notas e Boletim" na plataforma.', enviada: false, hora: '10:10' },
    { id: 4, texto: 'Caso ainda tenha dificuldades, me envie seu nome completo e turma.', enviada: false, hora: '10:11' },
    { id: 5, texto: 'Consegui acessar! Muito obrigado pela ajuda.', enviada: true, hora: '10:30' },
    { id: 6, texto: 'De nada! Como posso ajudar?', enviada: false, hora: '10:32' },
  ],
};

export default function ChatPanel() {
  const [activeChat, setActiveChat] = useState<number>(1);
  const [messageInput, setMessageInput] = useState('');
  const [showChat, setShowChat] = useState(false);

  const conversaAtiva = conversas.find((c) => c.id === activeChat);
  const mensagens = mensagensData[activeChat] || [];

  function handleSelectChat(id: number) {
    setActiveChat(id);
    setShowChat(true);
  }

  function handleBack() {
    setShowChat(false);
  }

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!messageInput.trim()) return;
    setMessageInput('');
  }

  return (
    <div className="plat-chat-layout">
      {/* Lista de conversas */}
      <div className={`plat-chat-list${showChat ? ' mobile-hidden' : ''}`}>
        <div className="plat-chat-list-header">
          <h2>Conversas</h2>
          <button className="btn btn-sm" aria-label="Buscar">
            <Search size={16} />
          </button>
        </div>
        {conversas.map((c) => (
          <div
            key={c.id}
            className={`plat-chat-item${activeChat === c.id ? ' active' : ''}`}
            onClick={() => handleSelectChat(c.id)}
          >
            <div className="plat-avatar" style={{ width: 40, height: 40, fontSize: '0.85rem' }}>
              {c.iniciais}
            </div>
            <div className="plat-chat-item-info">
              <div className="plat-chat-item-top">
                <strong>{c.nome}</strong>
                <span className="plat-chat-item-time">{c.hora}</span>
              </div>
              <p className="plat-chat-item-preview">{c.ultimaMensagem}</p>
            </div>
            {c.naoLidas > 0 && (
              <span className="plat-chat-unread">{c.naoLidas}</span>
            )}
          </div>
        ))}
      </div>

      {/* Janela do chat */}
      <div className={`plat-chat-window${showChat ? ' mobile-visible' : ''}`}>
        {conversaAtiva ? (
          <>
            <div className="plat-chat-header">
              <button className="btn btn-sm plat-chat-back" onClick={handleBack} aria-label="Voltar">
                ←
              </button>
              <div className="plat-avatar" style={{ width: 36, height: 36, fontSize: '0.8rem' }}>
                {conversaAtiva.iniciais}
              </div>
              <div>
                <strong>{conversaAtiva.nome}</strong>
                <span className="plat-chat-header-status">
                  <Circle size={8} fill={conversaAtiva.online ? '#22c55e' : '#94a3b8'} stroke="none" />
                  {conversaAtiva.online ? 'Online' : 'Offline'}
                </span>
              </div>
              <button className="btn btn-sm" style={{ marginLeft: 'auto' }} aria-label="Mais opções">
                <MoreVertical size={16} />
              </button>
            </div>

            <div className="plat-chat-messages">
              {mensagens.map((msg) => (
                <div key={msg.id} className={`plat-message ${msg.enviada ? 'sent' : 'received'}`}>
                  <p>{msg.texto}</p>
                  <span className="plat-message-time">{msg.hora}</span>
                </div>
              ))}
            </div>

            <form className="plat-chat-input" onSubmit={handleSend}>
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
              <button type="submit" className="btn btn-primary" aria-label="Enviar">
                <Send size={18} />
              </button>
            </form>
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', opacity: 0.5 }}>
            Selecione uma conversa
          </div>
        )}
      </div>
    </div>
  );
}
