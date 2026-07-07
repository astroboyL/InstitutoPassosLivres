import { Link } from 'react-router-dom';
import { GraduationCap, LogIn } from 'lucide-react';

export default function LoginPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Login será conectado ao Supabase na Fase 2!');
  };

  return (
    <div className="plat-auth-page">
      <div className="plat-auth-card">
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <GraduationCap size={44} strokeWidth={1.5} style={{ color: '#10B981', marginBottom: '0.5rem' }} />
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1E293B', margin: 0 }}>
            Acessar Plataforma
          </h1>
          <p style={{ color: '#64748B', fontSize: '0.9rem', marginTop: '0.35rem' }}>
            Entre com suas credenciais para continuar
          </p>
        </div>

        <form className="clean-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="login-email">E-mail</label>
            <input
              id="login-email"
              type="email"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="login-password">Senha</label>
            <input
              id="login-password"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>

          <div style={{ textAlign: 'right', marginBottom: '0.5rem' }}>
            <a href="#" style={{ fontSize: '0.85rem', color: '#10B981', textDecoration: 'none' }}>
              Esqueceu a senha?
            </a>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            <LogIn size={18} />
            Entrar
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: '#64748B' }}>
          Não tem conta?{' '}
          <Link to="/plataforma/cadastro" style={{ color: '#10B981', fontWeight: 600, textDecoration: 'none' }}>
            Inscreva-se
          </Link>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Link to="/plataforma" style={{ fontSize: '0.85rem', color: '#94A3B8', textDecoration: 'none' }}>
            ← Voltar para a plataforma
          </Link>
        </div>
      </div>
    </div>
  );
}
