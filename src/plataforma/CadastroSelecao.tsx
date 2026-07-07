import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Loader2, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

const cursosDisponiveis = [
  'Reforço de Matemática',
  'Informática Básica',
  'Educação Ambiental',
  'Português',
  'Inglês Básico',
  'Artes',
];

const seriesOptions = [
  '1° Fundamental', '2° Fundamental', '3° Fundamental',
  '4° Fundamental', '5° Fundamental', '6° Fundamental',
  '7° Fundamental', '8° Fundamental', '9° Fundamental',
  '1° Médio', '2° Médio', '3° Médio',
];

const parentescoOptions = ['Mãe', 'Pai', 'Avó/Avô', 'Tio/Tia', 'Irmão/Irmã', 'Outro'];

const comoConheceuOptions = [
  'Redes sociais',
  'Indicação de amigos',
  'Escola',
  'Igreja/Comunidade',
  'Panfleto/Cartaz',
  'Outro',
];

export default function CadastroSelecao() {
  const [loading, setLoading] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    nome_completo: '',
    data_nascimento: '',
    cpf: '',
    email: '',
    telefone: '',
    endereco_completo: '',
    cidade: '',
    estado: 'MG',
    escola: '',
    serie: '',
    nome_responsavel: '',
    telefone_responsavel: '',
    parentesco_responsavel: '',
    motivacao: '',
    participou_programa: '',
    como_conheceu: '',
  });

  const [cursosSelecionados, setCursosSelecionados] = useState<string[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function toggleCurso(curso: string) {
    setCursosSelecionados((prev) =>
      prev.includes(curso) ? prev.filter((c) => c !== curso) : [...prev, curso]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErro('');

    if (cursosSelecionados.length === 0) {
      setErro('Por favor, selecione ao menos um curso de interesse.');
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.from('cadastros').insert([
        {
          ...formData,
          cursos_interesse: cursosSelecionados,
        }
      ]);

      if (error) throw error;
      
      setSucesso(true);
    } catch (err: any) {
      console.error(err);
      setErro(err.message || 'Ocorreu um erro ao enviar a inscrição. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  if (sucesso) {
    return (
      <div className="plat-auth-page">
        <div className="plat-cadastro-card" style={{ textAlign: 'center', padding: '60px 30px' }}>
          <CheckCircle2 size={64} style={{ color: '#10B981', margin: '0 auto 20px' }} />
          <h2 style={{ marginBottom: '16px', color: '#1E293B' }}>Inscrição Recebida!</h2>
          <p style={{ color: '#64748B', lineHeight: 1.6, marginBottom: '32px' }}>
            Seus dados foram enviados com sucesso para a secretaria do Instituto Passos Livres. 
            Em breve entraremos em contato com você pelo telefone ou e-mail informado.
          </p>
          <Link to="/plataforma" className="btn btn-primary">
            Voltar para a Plataforma
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="plat-auth-page">
      <div className="plat-cadastro-card">
        <Link to="/plataforma" className="plat-back-link" style={{ marginBottom: '1.5rem' }}>
          <ArrowLeft size={16} /> Voltar à Plataforma
        </Link>

        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <GraduationCap size={48} style={{ color: 'var(--accent-primary, #22c55e)' }} />
          <h1 style={{ margin: '0.75rem 0 0.25rem' }}>Inscrição para Seleção</h1>
          <p style={{ opacity: 0.7 }}>
            Preencha o formulário abaixo para se inscrever no processo seletivo.
          </p>
        </div>

        {erro && (
          <div style={{ padding: '12px 16px', background: '#FEE2E2', color: '#B91C1C', borderRadius: '8px', marginBottom: '24px', fontSize: '0.9rem' }}>
            {erro}
          </div>
        )}

        <form className="clean-form" onSubmit={handleSubmit}>
          {/* Dados Pessoais */}
          <div className="plat-form-section">
            <h3 className="plat-form-section-title">Dados Pessoais</h3>
            <div className="form-row">
              <label>Nome Completo *</label>
              <input type="text" name="nome_completo" value={formData.nome_completo} onChange={handleChange} required />
            </div>
            <div className="form-row form-row-2col">
              <div>
                <label>Data de Nascimento *</label>
                <input type="date" name="data_nascimento" value={formData.data_nascimento} onChange={handleChange} required />
              </div>
              <div>
                <label>CPF</label>
                <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} placeholder="000.000.000-00" />
              </div>
            </div>
            <div className="form-row form-row-2col">
              <div>
                <label>E-mail *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" required />
              </div>
              <div>
                <label>Telefone / WhatsApp *</label>
                <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="(00) 00000-0000" required />
              </div>
            </div>
          </div>

          {/* Endereço */}
          <div className="plat-form-section">
            <h3 className="plat-form-section-title">Endereço</h3>
            <div className="form-row">
              <label>Endereço Completo *</label>
              <textarea name="endereco_completo" value={formData.endereco_completo} onChange={handleChange} placeholder="Rua, número, bairro, complemento" rows={3} required />
            </div>
            <div className="form-row form-row-2col">
              <div>
                <label>Cidade *</label>
                <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} placeholder="Sua cidade" required />
              </div>
              <div>
                <label>Estado *</label>
                <select name="estado" value={formData.estado} onChange={handleChange} required>
                  <option value="MG">Minas Gerais</option>
                  <option value="SP">São Paulo</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="BA">Bahia</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="PR">Paraná</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="GO">Goiás</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>
          </div>

          {/* Escolaridade */}
          <div className="plat-form-section">
            <h3 className="plat-form-section-title">Escolaridade</h3>
            <div className="form-row">
              <label>Escola / Instituição Atual *</label>
              <input type="text" name="escola" value={formData.escola} onChange={handleChange} placeholder="Nome da escola ou instituição" required />
            </div>
            <div className="form-row">
              <label>Série / Ano *</label>
              <select name="serie" value={formData.serie} onChange={handleChange} required>
                <option value="" disabled>Selecione</option>
                {seriesOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Responsável */}
          <div className="plat-form-section">
            <h3 className="plat-form-section-title">Responsável</h3>
            <div className="form-row">
              <label>Nome do Responsável *</label>
              <input type="text" name="nome_responsavel" value={formData.nome_responsavel} onChange={handleChange} placeholder="Nome completo do responsável" required />
            </div>
            <div className="form-row form-row-2col">
              <div>
                <label>Telefone do Responsável *</label>
                <input type="text" name="telefone_responsavel" value={formData.telefone_responsavel} onChange={handleChange} placeholder="(00) 00000-0000" required />
              </div>
              <div>
                <label>Parentesco *</label>
                <select name="parentesco_responsavel" value={formData.parentesco_responsavel} onChange={handleChange} required>
                  <option value="" disabled>Selecione</option>
                  {parentescoOptions.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Sobre Você */}
          <div className="plat-form-section">
            <h3 className="plat-form-section-title">Sobre Você</h3>
            <div className="form-row">
              <label>Curso de Interesse *</label>
              <div className="plat-checkbox-group">
                {cursosDisponiveis.map((curso) => (
                  <label key={curso} className="plat-checkbox-label">
                    <input
                      type="checkbox"
                      checked={cursosSelecionados.includes(curso)}
                      onChange={() => toggleCurso(curso)}
                    />
                    {curso}
                  </label>
                ))}
              </div>
            </div>
            <div className="form-row">
              <label>Por que deseja participar?</label>
              <textarea name="motivacao" value={formData.motivacao} onChange={handleChange} placeholder="Conte um pouco sobre sua motivação..." rows={4} />
            </div>
            <div className="form-row">
              <label>Já participou de outro programa social?</label>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="participou_programa"
                    value="sim"
                    checked={formData.participou_programa === 'sim'}
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="participou_programa"
                    value="nao"
                    checked={formData.participou_programa === 'nao'}
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>
            </div>
            <div className="form-row">
              <label>Como conheceu o Instituto?</label>
              <select name="como_conheceu" value={formData.como_conheceu} onChange={handleChange}>
                <option value="" disabled>Selecione</option>
                {comoConheceuOptions.map((op) => (
                  <option key={op} value={op}>{op}</option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '1.5rem' }} disabled={loading}>
            {loading ? (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <Loader2 size={18} className="spin" /> Enviando...
              </span>
            ) : (
              'Enviar Inscrição'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
