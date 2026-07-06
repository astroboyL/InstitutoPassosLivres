import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

export default function Estatuto() {
  return (
    <main style={{ backgroundColor: 'var(--c-bg)', minHeight: '100vh', paddingBottom: '100px', paddingTop: '120px' }}>
      
      <div className="container">
        <Link to="/" style={{ color: 'var(--c-forest)', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '30px', textDecoration: 'none', fontWeight: 600 }}>
          <ArrowLeft size={20} /> Voltar para o Início
        </Link>
        
        <div className="glass-panel" style={{ padding: '60px 8%', maxWidth: '1000px', margin: '0 auto', backgroundColor: '#ffffff' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '60px', borderBottom: '2px solid rgba(26,92,42,0.1)', paddingBottom: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', color: 'var(--c-gold)' }}>
              <FileText size={48} />
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--c-forest)', lineHeight: 1.2, marginBottom: '16px' }}>
              Estatuto Social
            </h1>
            <h2 style={{ fontSize: '1.2rem', color: 'var(--c-text-muted)', fontWeight: 400 }}>
              Instituto Passos Livres
            </h2>
          </div>

          <div className="estatuto-content" style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--c-text-main)' }}>
            
            <h3 style={{ color: 'var(--c-forest)', fontSize: '1.4rem', marginTop: '40px', marginBottom: '20px' }}>CAPÍTULO I – DA DENOMINAÇÃO, SEDE E FINALIDADES</h3>
            
            <p style={{ marginBottom: '16px' }}><strong>Artigo 1º</strong> – O INSTITUTO PASSOS LIVRES, constituído em [Data da futura reunião], é uma associação civil de direito privado, sem fins lucrativos, de caráter educacional, esportivo, cultural e de assistência social, com duração por tempo indeterminado.</p>
            <p style={{ marginBottom: '16px' }}><strong>Artigo 2º</strong> – A Associação tem sede e foro no município de [Santa Luzia ou Belo Horizonte], Estado de Minas Gerais, localizada na [Endereço completo da sede].</p>
            <p style={{ marginBottom: '16px' }}><strong>Artigo 3º</strong> – O INSTITUTO PASSOS LIVRES tem por finalidade primordial promover o desenvolvimento integral, a proteção e a garantia de direitos de crianças e adolescentes, além de prestar assistência às suas famílias, atuando de forma multidisciplinar.</p>
            
            <p style={{ marginBottom: '16px' }}><strong>Parágrafo Único:</strong> Para atingir suas finalidades, a Associação se dedicará às seguintes atividades:</p>
            <ol style={{ paddingLeft: '40px', marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><strong>Integração com a Natureza:</strong> Promover atividades ao ar livre, trilhas ecológicas, acampamentos e educação ambiental, visando o desenvolvimento físico, emocional e a conscientização ecológica.</li>
              <li><strong>Incentivo ao Esporte e Lazer:</strong> Promover a integração social por meio da prática e incentivo aos esportes, além de oferecer suporte contínuo de lazer e recreação para as crianças e adolescentes.</li>
              <li><strong>Apoio e Incentivo Educacional:</strong> Fomentar a integração e o incentivo à educação formal básica, bem como promover a qualificação profissionalizante, criando oportunidades reais de crescimento e inserção no mercado de trabalho.</li>
              <li><strong>Apoio Psicológico:</strong> Disponibilizar atendimento, acolhimento e suporte psicológico para crianças, adolescentes e seus familiares em situação de vulnerabilidade.</li>
              <li><strong>Assistência e Orientação Jurídica:</strong> Oferecer suporte e orientação legal para as famílias assistidas, assegurando a defesa de seus direitos fundamentais.</li>
              <li><strong>Assistência Social e Arrecadação:</strong> Promover campanhas contínuas para arrecadação e distribuição de alimentos, roupas e outras doações essenciais, visando o amparo material e a melhoria da qualidade de vida das famílias necessitadas.</li>
              <li><strong>Criação de Ambientes Seguros:</strong> Desenvolver e manter espaços e projetos que garantam a integridade, a proteção e a oportunidade de crescimento saudável para o público infanto-juvenil.</li>
            </ol>

            <h3 style={{ color: 'var(--c-forest)', fontSize: '1.4rem', marginTop: '40px', marginBottom: '20px', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '40px' }}>CAPÍTULO II – DOS ASSOCIADOS</h3>
            
            <p style={{ marginBottom: '16px' }}><strong>Artigo 4º</strong> – O quadro social do INSTITUTO PASSOS LIVRES será composto por número ilimitado de associados, distribuídos nas seguintes categorias:</p>
            <ol style={{ paddingLeft: '40px', marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><strong>Associados Fundadores:</strong> São aqueles que idealizaram a Associação, participaram da Assembleia Geral de Constituição e assinaram a primeira Ata. Possuem direito a voz, voto e podem ser votados para qualquer cargo.</li>
              <li><strong>Associados Efetivos (ou Contribuintes):</strong> São pessoas físicas ou jurídicas que contribuem financeiramente de forma regular com o Instituto, admitidos após a fundação. Possuem direito a voz e voto nas Assembleias.</li>
              <li><strong>Associados Voluntários:</strong> São aqueles que prestam serviços não remunerados ao Instituto, auxiliando nas atividades (trilhas, aulas, apoio). Possuem direito a voz nas Assembleias, mas não possuem direito a voto, nem podem ser votados para cargos de Diretoria.</li>
              <li><strong>Associados Beneméritos:</strong> Pessoas ou empresas que realizaram doações ou serviços de grande relevância ao Instituto, recebendo este título por aprovação da Diretoria. Não possuem direito a voto.</li>
            </ol>

            <p style={{ marginBottom: '16px' }}><strong>Artigo 5º</strong> – A admissão de novos associados (Efetivos ou Voluntários) se dará por meio de preenchimento de ficha de inscrição e estará condicionada à aprovação prévia da Diretoria Executiva.</p>
            
            <p style={{ marginBottom: '16px' }}><strong>§ 1º (Análise de Antecedentes)</strong> – Como requisito obrigatório e inegociável para a admissão ou ingresso no Instituto, todos os candidatos a associados, voluntários, funcionários ou parceiros deverão passar por uma rigorosa análise interna de antecedentes criminais, mediante a apresentação das devidas certidões negativas (federal e estadual).</p>
            
            <p style={{ marginBottom: '16px' }}><strong>§ 2º (Critérios de Rejeição e Vedação)</strong> – Será expressamente, sumariamente e definitivamente negada a admissão e qualquer forma de participação na Associação de qualquer pessoa que possua registros de condenação, processos ou investigações ativas relacionados a:</p>
            <ul style={{ paddingLeft: '40px', marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '8px', listStyleType: 'none' }}>
              <li>I – Crimes contra a mulher, incluindo violência doméstica, assédio e feminicídio;</li>
              <li>II – Crimes contra crianças e adolescentes, em estrita observância ao Estatuto da Criança e do Adolescente (ECA), incluindo abusos, exploração e negligência;</li>
              <li>III – Crimes graves e de teor violento, tais como homicídios, latrocínios, agressões físicas e crimes sexuais de qualquer natureza.</li>
            </ul>

            <p style={{ marginBottom: '16px' }}><strong>Artigo 6º</strong> – São direitos dos Associados Fundadores e Efetivos (quites com suas obrigações):</p>
            <ul style={{ paddingLeft: '40px', marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '8px', listStyleType: 'none' }}>
              <li>I – Votar e ser votado para os cargos eletivos;</li>
              <li>II – Tomar parte nas Assembleias Gerais;</li>
              <li>III – Propor a criação e admissão de novos associados;</li>
              <li>IV – Apresentar sugestões e projetos à Diretoria.</li>
            </ul>

            <p style={{ marginBottom: '16px' }}><strong>Artigo 7º</strong> – São deveres de todos os associados:</p>
            <ul style={{ paddingLeft: '40px', marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '8px', listStyleType: 'none' }}>
              <li>I – Cumprir e fazer cumprir o presente Estatuto;</li>
              <li>II – Zelar pelo bom nome e pelo patrimônio do INSTITUTO PASSOS LIVRES;</li>
              <li>III – Comparecer às Assembleias Gerais quando convocados;</li>
              <li>IV – Defender os princípios, os objetivos e a missão da Associação.</li>
            </ul>

            <p style={{ marginBottom: '16px' }}><strong>Artigo 8º</strong> – A demissão (saída voluntária) do associado dar-se-á por pedido por escrito dirigido à Diretoria Executiva.</p>
            
            <p style={{ marginBottom: '16px' }}><strong>Artigo 9º</strong> – A exclusão de qualquer associado só é admissível havendo justa causa, obedecido o devido processo legal e garantido o direito de ampla defesa.</p>
            
            <p style={{ marginBottom: '16px' }}><strong>§ 1º</strong> – Considera-se justa causa para a exclusão imediata do associado a prática de qualquer um dos seguintes atos:</p>
            <ul style={{ paddingLeft: '40px', marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '8px', listStyleType: 'none' }}>
              <li>I – Prática de violência física, verbal ou psicológica, bem como o cometimento de crimes graves e de teor violento (como homicídios, agressões, assédios, crimes contra a mulher e violência doméstica), independentemente de terem ocorrido dentro ou fora da instituição;</li>
              <li>II – Agressão, ameaça ou ofensa direcionada a outros associados, voluntários, funcionários ou a qualquer pessoa dentro das dependências do Instituto ou durante a realização de suas atividades;</li>
              <li>III – Qualquer tipo de ofensa, agressão, negligência, discriminação, exploração ou ato de crueldade contra as crianças e adolescentes assistidos, em estrita observância ao Estatuto da Criança e do Adolescente (ECA);</li>
              <li>IV – Consumo, porte, distribuição ou promoção (propaganda) de bebidas alcoólicas, cigarros, drogas ilícitas ou qualquer outra substância inadequada para menores, seja nas dependências do Instituto, em suas redes sociais ou durante eventos, acampamentos e trilhas;</li>
              <li>V – Porte, posse, uso, guarda ou exibição de qualquer tipo de arma (de fogo, branca ou similares) nas dependências da instituição ou durante suas atividades externas, sendo esta proibição absoluta, excetuando-se exclusivamente as autoridades de segurança pública no estrito exercício de suas funções legais;</li>
              <li>VI – Furto, roubo, desvio de recursos financeiros, fraudes, apropriação indébita ou o cometimento de qualquer crime contra o patrimônio do Instituto ou de seus assistidos;</li>
              <li>VII – Divulgação não autorizada de informações internas e estratégicas da instituição, bem como o vazamento, exposição ou uso indevido de dados pessoais e imagens das crianças, adolescentes e familiares, incluindo o cometimento de crimes cibernéticos, em observância à Lei Geral de Proteção de Dados (LGPD);</li>
              <li>VIII – Utilização do nome, dos recursos, do público ou da estrutura do INSTITUTO PASSOS LIVRES para fins de promoção pessoal (autodivulgação), enriquecimento ilícito ou para campanhas político-partidárias;</li>
              <li>IX – Violação grave das normas deste Estatuto, difamação pública do Instituto ou comprovado desvio de conduta ética.</li>
            </ul>

            <p style={{ marginBottom: '16px' }}><strong>§ 2º (Obrigação de Denúncia)</strong> – É dever inegociável da Diretoria Executiva garantir que qualquer crime ou infração penal cometida por associados, voluntários, funcionários ou qualquer pessoa com vínculo com a instituição, de que se tome conhecimento, seja imediata e formalmente denunciada às autoridades policiais, judiciárias e aos órgãos de proteção competentes, não havendo qualquer tolerância ou acobertamento de atos ilícitos.</p>
            <p style={{ marginBottom: '16px' }}><strong>§ 3º</strong> – A exclusão será decidida pela Diretoria Executiva, cabendo recurso à Assembleia Geral.</p>
            <p style={{ marginBottom: '16px' }}><strong>§ 4º (Cláusula de Proteção aos Fundadores)</strong> – Para a exclusão de um Associado Fundador, será exigida a convocação de uma Assembleia Geral Extraordinária específica para este fim, sendo necessária a aprovação de, no mínimo, 80% (oitenta por cento) da totalidade dos associados com direito a voto, garantindo-se o direito de defesa prévia.</p>

            <h3 style={{ color: 'var(--c-forest)', fontSize: '1.4rem', marginTop: '40px', marginBottom: '20px', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '40px' }}>CAPÍTULO III – DOS ÓRGÃOS DIRIGENTES E DA ADMINISTRAÇÃO</h3>
            
            <p style={{ marginBottom: '16px' }}><strong>Artigo 10º</strong> – São órgãos da administração e fiscalização do INSTITUTO PASSOS LIVRES:</p>
            <ul style={{ paddingLeft: '40px', marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '8px', listStyleType: 'none' }}>
              <li>I – A Assembleia Geral;</li>
              <li>II – A Diretoria Executiva;</li>
              <li>III – O Conselho Fiscal.</li>
            </ul>

            <p style={{ marginBottom: '16px' }}><strong>Artigo 11º</strong> – A Assembleia Geral é o órgão máximo e soberano da Associação, constituída por todos os associados em pleno gozo de seus direitos estatutários, competindo-lhe, privativamente:</p>
            <ul style={{ paddingLeft: '40px', marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '8px', listStyleType: 'none' }}>
              <li>I – Eleger e destituir os administradores (Diretoria Executiva e Conselho Fiscal);</li>
              <li>II – Aprovar as contas e o balanço anual;</li>
              <li>III – Alterar o presente Estatuto;</li>
              <li>IV – Decidir sobre a dissolução da Associação.</li>
            </ul>

            <p style={{ marginBottom: '16px' }}><strong>Artigo 12º</strong> – A Diretoria Executiva é o órgão de administração e representação da Associação, eleita pela Assembleia Geral para um mandato de 4 (quatro) anos, permitida a reeleição, sendo composta por:</p>
            <ul style={{ paddingLeft: '40px', marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '8px', listStyleType: 'none' }}>
              <li>I – Diretor-Presidente;</li>
              <li>II – Diretor-Secretário;</li>
              <li>III – Diretor-Tesoureiro.</li>
            </ul>

            <p style={{ marginBottom: '16px' }}><strong>§ 1º</strong> – Os cargos da Diretoria Executiva e do Conselho Fiscal não serão remunerados em nenhuma hipótese pelo exercício de suas funções estatutárias.</p>
            <p style={{ marginBottom: '16px' }}><strong>§ 2º (Contratação de Terceiros e Funcionários)</strong> – Havendo necessidade para a execução, administração ou operação dos projetos, o Instituto poderá contratar funcionários (sob regime da CLT) ou prestadores de serviços terceirizados (Pessoa Jurídica), pagando remuneração compatível com os valores de mercado, desde que haja disponibilidade financeira.</p>

            <p style={{ marginBottom: '16px' }}><strong>Artigo 13º</strong> – Compete ao Diretor-Presidente:</p>
            <ul style={{ paddingLeft: '40px', marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '8px', listStyleType: 'none' }}>
              <li>I – Representar o INSTITUTO PASSOS LIVRES ativa e passivamente, judicial e extrajudicialmente;</li>
              <li>II – Cumprir e fazer cumprir este Estatuto e os regulamentos internos;</li>
              <li>III – Convocar e presidir as reuniões da Diretoria Executiva e as Assembleias Gerais;</li>
              <li>IV – Assinar, em conjunto com o Diretor-Tesoureiro, os cheques, ordens de pagamento, contratos, convênios e quaisquer outros documentos financeiros;</li>
              <li>V – Coordenar as atividades gerais da instituição e o relacionamento com parceiros e a sociedade.</li>
            </ul>

            <p style={{ marginBottom: '16px' }}><strong>Artigo 14º</strong> – Compete ao Diretor-Secretário:</p>
            <ul style={{ paddingLeft: '40px', marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '8px', listStyleType: 'none' }}>
              <li>I – Redigir e manter em dia as atas das reuniões da Diretoria e das Assembleias Gerais;</li>
              <li>II – Cuidar do arquivo, correspondências e dos registros dos associados;</li>
              <li>III – Substituir o Presidente em suas faltas e impedimentos temporários.</li>
            </ul>

            <p style={{ marginBottom: '16px' }}><strong>Artigo 15º</strong> – Compete ao Diretor-Tesoureiro:</p>
            <ul style={{ paddingLeft: '40px', marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '8px', listStyleType: 'none' }}>
              <li>I – Arrecadar e contabilizar as contribuições, doações e rendas, mantendo em dia a escrituração da Associação;</li>
              <li>II – Pagar as contas das despesas autorizadas pelo Presidente;</li>
              <li>III – Apresentar relatórios de receitas e despesas e o balanço anual para aprovação;</li>
              <li>IV – Assinar, em conjunto com o Diretor-Presidente, os documentos financeiros e bancários.</li>
            </ul>

            <p style={{ marginBottom: '16px' }}><strong>Artigo 16º</strong> – O Conselho Fiscal será composto por 3 (três) membros titulares, eleitos pela Assembleia Geral para um mandato coincidente com o da Diretoria Executiva (4 anos).</p>
            <p style={{ marginBottom: '16px' }}><strong>Parágrafo Único:</strong> Compete ao Conselho Fiscal examinar os livros de escrituração e fiscalizar rigorosamente a transparência e o uso correto dos recursos da entidade.</p>

            <h3 style={{ color: 'var(--c-forest)', fontSize: '1.4rem', marginTop: '40px', marginBottom: '20px', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '40px' }}>CAPÍTULO IV – DO PATRIMÔNIO E DAS FONTES DE RECURSOS</h3>
            
            <p style={{ marginBottom: '16px' }}><strong>Artigo 17º</strong> – O patrimônio do INSTITUTO PASSOS LIVRES será constituído por bens móveis, imóveis, veículos, valores e outros direitos que venha a possuir ou adquirir, registrados em nome da Associação.</p>
            
            <p style={{ marginBottom: '16px' }}><strong>Artigo 18º</strong> – As fontes de recursos para a manutenção da Associação serão compostas por:</p>
            <ul style={{ paddingLeft: '40px', marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '8px', listStyleType: 'none' }}>
              <li>I – Contribuições e mensalidades dos associados;</li>
              <li>II – Doações de pessoas físicas ou jurídicas, nacionais ou estrangeiras;</li>
              <li>III – Arrecadações através de eventos beneficentes e campanhas de financiamento;</li>
              <li>IV – Subvenções, termos de fomento, convênios e parcerias firmadas com o Poder Público ou com a iniciativa privada;</li>
              <li>V – Rendas eventuais, juros e rendimentos de aplicações financeiras do próprio patrimônio.</li>
            </ul>

            <p style={{ marginBottom: '16px' }}><strong>Artigo 19º</strong> – O INSTITUTO PASSOS LIVRES não distribui entre os seus associados, conselheiros, diretores, empregados, doadores ou voluntários, eventuais excedentes operacionais, dividendos ou participações.</p>
            <p style={{ marginBottom: '16px' }}><strong>Parágrafo Único:</strong> Todo recurso arrecadado será aplicado integralmente na manutenção e no desenvolvimento dos objetivos institucionais da entidade.</p>

            <h3 style={{ color: 'var(--c-forest)', fontSize: '1.4rem', marginTop: '40px', marginBottom: '20px', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '40px' }}>CAPÍTULO V – DA ALTERAÇÃO ESTATUTÁRIA E DA DISSOLUÇÃO</h3>
            
            <p style={{ marginBottom: '16px' }}><strong>Artigo 20º</strong> – Este Estatuto poderá ser reformado, no todo ou em parte, a qualquer tempo, por deliberação da Assembleia Geral Extraordinária.</p>
            <p style={{ marginBottom: '16px' }}><strong>Parágrafo Único:</strong> Conforme previsto na Cláusula de Proteção aos Fundadores (§4º do Artigo 9º), qualquer alteração que vise modificar os direitos dos Associados Fundadores exigirá a aprovação mínima de 80% (oitenta por cento) dos associados com direito a voto.</p>

            <p style={{ marginBottom: '16px' }}><strong>Artigo 21º</strong> – O INSTITUTO PASSOS LIVRES poderá ser dissolvido por decisão da Assembleia Geral Extraordinária, quando se tornar impossível a continuação de suas atividades.</p>
            
            <p style={{ marginBottom: '16px' }}><strong>Artigo 22º</strong> – Em caso de dissolução da Associação, após quitadas todas as dívidas, o patrimônio remanescente será obrigatoriamente destinado a outra instituição sem fins lucrativos congênere, preferencialmente com sede no mesmo município, ou a uma entidade pública.</p>
            <p style={{ marginBottom: '16px' }}><strong>Parágrafo Único:</strong> Em nenhuma hipótese o patrimônio será dividido entre os associados ou membros da Diretoria.</p>

            <h3 style={{ color: 'var(--c-forest)', fontSize: '1.4rem', marginTop: '40px', marginBottom: '20px', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '40px' }}>CAPÍTULO VI – DAS DISPOSIÇÕES GERAIS E TRANSITÓRIAS</h3>
            
            <p style={{ marginBottom: '16px' }}><strong>Artigo 23º</strong> – Os casos omissos neste Estatuto serão resolvidos pela Diretoria Executiva e referendados pela Assembleia Geral.</p>
            <p style={{ marginBottom: '16px' }}><strong>Artigo 24º</strong> – O presente Estatuto entra em vigor na data de sua aprovação pela Assembleia Geral de Constituição, revogando-se as disposições em contrário.</p>
            
            <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px dashed rgba(0,0,0,0.1)', textAlign: 'center' }}>
              <p style={{ marginBottom: '40px', fontStyle: 'italic' }}>[Santa Luzia ou Belo Horizonte] - MG, [Dia] de [Mês] de [Ano].</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center' }}>
                <div style={{ width: '100%', maxWidth: '400px' }}>
                  <div style={{ borderBottom: '1px solid #000', marginBottom: '8px' }}></div>
                  <p><strong>[SEU NOME COMPLETO]</strong></p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--c-text-muted)' }}>Diretor-Presidente / Associado Fundador</p>
                </div>
                
                <div style={{ width: '100%', maxWidth: '400px' }}>
                  <div style={{ borderBottom: '1px solid #000', marginBottom: '8px' }}></div>
                  <p><strong>[NOME DO ADVOGADO]</strong></p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--c-text-muted)' }}>Advogado(a) - OAB/MG nº [Número]</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
