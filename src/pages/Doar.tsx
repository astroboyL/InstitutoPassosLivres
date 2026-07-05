import { CreditCard, QrCode } from 'lucide-react';

export default function Doar() {
  return (
    <main style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--c-bg)' }}>
      <div className="container center" style={{ paddingBottom: '100px' }}>
        <h1 className="section-title" style={{ marginBottom: '20px' }}>Apoie o Projeto</h1>
        <p className="lead-text" style={{ maxWidth: '600px', marginBottom: '60px' }}>
          Sua contribuição financeira garante a continuidade dos nossos programas e amplia nosso impacto na comunidade. Em breve, você poderá finalizar sua doação de forma 100% segura por aqui.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', width: '100%', maxWidth: '800px' }}>
          <div className="glass-panel" style={{ padding: '40px', textAlign: 'center' }}>
            <div style={{ margin: '0 auto 20px', width: '64px', height: '64px', backgroundColor: 'rgba(26, 92, 42, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <QrCode size={32} color="#1a5c2a" />
            </div>
            <h3 style={{ fontSize: '1.5rem', color: '#1a5c2a', marginBottom: '15px' }}>PIX Instantâneo</h3>
            <p style={{ color: 'var(--c-text-muted)', marginBottom: '30px' }}>Simples, rápido e sem taxas. Todo o valor é revertido para os projetos.</p>
            <button className="btn btn-primary btn-block" disabled style={{ opacity: 0.6, cursor: 'not-allowed' }}>Em breve (Integração)</button>
          </div>

          <div className="glass-panel" style={{ padding: '40px', textAlign: 'center' }}>
            <div style={{ margin: '0 auto 20px', width: '64px', height: '64px', backgroundColor: 'rgba(232, 168, 32, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CreditCard size={32} color="#E8A820" />
            </div>
            <h3 style={{ fontSize: '1.5rem', color: '#1a5c2a', marginBottom: '15px' }}>Cartão de Crédito</h3>
            <p style={{ color: 'var(--c-text-muted)', marginBottom: '30px' }}>Doação única ou recorrente via processador seguro (Stripe/MercadoPago).</p>
            <button className="btn btn-primary btn-block" disabled style={{ opacity: 0.6, cursor: 'not-allowed' }}>Em breve (Integração)</button>
          </div>
        </div>
      </div>
    </main>
  );
}
