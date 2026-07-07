import { useState, useEffect } from 'react';
import { Users, CheckCircle, Clock, BookOpen, Eye } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Secretaria() {
  const [cadastros, setCadastros] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCadastros();
  }, []);

  async function fetchCadastros() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('cadastros')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCadastros(data || []);
    } catch (err) {
      console.error('Erro ao buscar cadastros:', err);
    } finally {
      setLoading(false);
    }
  }

  async function handleStatusChange(id: string, novoStatus: string) {
    try {
      const { error } = await supabase
        .from('cadastros')
        .update({ status: novoStatus })
        .eq('id', id);

      if (error) throw error;
      
      // Atualiza o estado local
      setCadastros(prev => 
        prev.map(c => c.id === id ? { ...c, status: novoStatus } : c)
      );
    } catch (err) {
      console.error('Erro ao atualizar status:', err);
      alert('Erro ao atualizar status.');
    }
  }

  // Estatísticas calculadas com base nos dados reais
  const stats = {
    total: cadastros.length,
    aprovados: cadastros.filter(c => c.status === 'aprovado').length,
    pendentes: cadastros.filter(c => c.status === 'pendente').length,
    cursosAtivos: 6 // Fixo por enquanto
  };

  return (
    <div>
      <div className="plat-page-header">
        <h1>Secretaria</h1>
        <p>Painel Administrativo — Gerenciamento de Inscrições</p>
      </div>

      <div className="plat-stats-grid">
        <div className="plat-stat-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <Users size={20} color="#64748B" />
            <span className="plat-stat-label">Total de Inscrições</span>
          </div>
          <span className="plat-stat-number">{stats.total}</span>
        </div>
        <div className="plat-stat-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <CheckCircle size={20} color="#10B981" />
            <span className="plat-stat-label">Aprovados</span>
          </div>
          <span className="plat-stat-number" style={{ color: '#10B981' }}>{stats.aprovados}</span>
        </div>
        <div className="plat-stat-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <Clock size={20} color="#F59E0B" />
            <span className="plat-stat-label">Pendentes</span>
          </div>
          <span className="plat-stat-number" style={{ color: '#F59E0B' }}>{stats.pendentes}</span>
        </div>
        <div className="plat-stat-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <BookOpen size={20} color="#3B82F6" />
            <span className="plat-stat-label">Cursos Ativos</span>
          </div>
          <span className="plat-stat-number" style={{ color: '#3B82F6' }}>{stats.cursosAtivos}</span>
        </div>
      </div>

      <div className="plat-table-wrapper">
        <table className="plat-table">
          <thead>
            <tr>
              <th>Nome / Contato</th>
              <th>Cursos de Interesse</th>
              <th>Data</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', padding: '40px' }}>
                  Carregando inscrições...
                </td>
              </tr>
            ) : cadastros.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', padding: '40px' }}>
                  Nenhuma inscrição encontrada.
                </td>
              </tr>
            ) : (
              cadastros.map((inscrito) => (
                <tr key={inscrito.id}>
                  <td>
                    <div style={{ fontWeight: 600, color: '#1E293B', marginBottom: '4px' }}>{inscrito.nome_completo}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748B' }}>{inscrito.email}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748B' }}>{inscrito.telefone}</div>
                  </td>
                  <td>
                    <div style={{ fontSize: '0.85rem' }}>
                      {inscrito.cursos_interesse?.join(', ') || '-'}
                    </div>
                  </td>
                  <td>
                    {new Date(inscrito.created_at).toLocaleDateString('pt-BR')}
                  </td>
                  <td>
                    <span className={`plat-badge ${inscrito.status === 'aprovado' ? 'approved' : inscrito.status === 'rejeitado' ? 'review' : 'pending'}`}>
                      {inscrito.status ? inscrito.status.charAt(0).toUpperCase() + inscrito.status.slice(1) : 'Pendente'}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {inscrito.status !== 'aprovado' && (
                        <button 
                          className="btn btn-sm" 
                          style={{ background: 'rgba(16,185,129,0.1)', color: '#059669', padding: '4px 10px', fontSize: '0.8rem' }}
                          onClick={() => handleStatusChange(inscrito.id, 'aprovado')}
                        >
                          Aprovar
                        </button>
                      )}
                      {inscrito.status !== 'rejeitado' && (
                        <button 
                          className="btn btn-sm" 
                          style={{ background: 'rgba(239,68,68,0.1)', color: '#DC2626', padding: '4px 10px', fontSize: '0.8rem' }}
                          onClick={() => handleStatusChange(inscrito.id, 'rejeitado')}
                        >
                          Rejeitar
                        </button>
                      )}
                      <button className="btn btn-sm" style={{ padding: '4px', background: 'none', border: '1px solid rgba(0,0,0,0.1)' }}>
                        <Eye size={16} color="#64748B" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
