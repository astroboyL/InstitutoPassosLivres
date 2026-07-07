import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap } from 'lucide-react';

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
  const [cursosSelecionados, setCursosSelecionados] = useState<string[]>([]);
  const [participouPrograma, setParticipouPrograma] = useState('');

  function toggleCurso(curso: string) {
    setCursosSelecionados((prev) =>
      prev.includes(curso) ? prev.filter((c) => c !== curso) : [...prev, curso]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert('Inscrição enviada com sucesso! Entraremos em contato em breve.');
  }

  return (
    <div className="plat-auth-page">
      <div className="plat-cadastro-card">
        <Link to="/plataforma" className="btn btn-sm" style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
          <ArrowLeft size={16} /> Voltar à Plataforma
        </Link>

        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <GraduationCap size={48} style={{ color: 'var(--accent-primary, #22c55e)' }} />
          <h1 style={{ margin: '0.75rem 0 0.25rem' }}>Inscrição para Seleção</h1>
          <p style={{ opacity: 0.7 }}>
            Preencha o formulário abaixo para se inscrever no processo seletivo do Instituto Passos Livres.
            Todas as informações serão tratadas com sigilo.
          </p>
        </div>

        <form className="clean-form" onSubmit={handleSubmit}>
          {/* Dados Pessoais */}
          <div className="plat-form-section">
            <h3 className="plat-form-section-title">Dados Pessoais</h3>
            <div className="form-row">
              <label>Nome Completo</label>
              <input type="text" placeholder="Seu nome completo" required />
            </div>
            <div className="form-row form-row-2col">
              <div>
                <label>Data de Nascimento</label>
                <input type="date" required />
              </div>
              <div>
                <label>CPF</label>
                <input type="text" placeholder="000.000.000-00" />
              </div>
            </div>
            <div className="form-row form-row-2col">
              <div>
                <label>E-mail</label>
                <input type="email" placeholder="seu@email.com" required />
              </div>
              <div>
                <label>Telefone / WhatsApp</label>
                <input type="text" placeholder="(00) 00000-0000" required />
              </div>
            </div>
          </div>

          {/* Endereço */}
          <div className="plat-form-section">
            <h3 className="plat-form-section-title">Endereço</h3>
            <div className="form-row">
              <label>Endereço Completo</label>
              <textarea placeholder="Rua, número, bairro, complemento" rows={3} required />
            </div>
            <div className="form-row form-row-2col">
              <div>
                <label>Cidade</label>
                <input type="text" placeholder="Sua cidade" required />
              </div>
              <div>
                <label>Estado</label>
                <select defaultValue="MG">
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
              <label>Escola / Instituição</label>
              <input type="text" placeholder="Nome da escola ou instituição" required />
            </div>
            <div className="form-row">
              <label>Série / Ano</label>
              <select required defaultValue="">
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
              <label>Nome do Responsável</label>
              <input type="text" placeholder="Nome completo do responsável" required />
            </div>
            <div className="form-row form-row-2col">
              <div>
                <label>Telefone do Responsável</label>
                <input type="text" placeholder="(00) 00000-0000" required />
              </div>
              <div>
                <label>Parentesco</label>
                <select required defaultValue="">
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
              <label>Curso de Interesse</label>
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
              <textarea placeholder="Conte um pouco sobre sua motivação..." rows={4} />
            </div>
            <div className="form-row">
              <label>Já participou de outro programa social?</label>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="participou"
                    value="sim"
                    checked={participouPrograma === 'sim'}
                    onChange={(e) => setParticipouPrograma(e.target.value)}
                  />
                  Sim
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="participou"
                    value="nao"
                    checked={participouPrograma === 'nao'}
                    onChange={(e) => setParticipouPrograma(e.target.value)}
                  />
                  Não
                </label>
              </div>
            </div>
            <div className="form-row">
              <label>Como conheceu o Instituto?</label>
              <select defaultValue="">
                <option value="" disabled>Selecione</option>
                {comoConheceuOptions.map((op) => (
                  <option key={op} value={op}>{op}</option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '1.5rem' }}>
            Enviar Inscrição
          </button>
        </form>
      </div>
    </div>
  );
}
