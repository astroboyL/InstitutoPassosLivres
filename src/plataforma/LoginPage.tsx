import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GraduationCap, LogIn, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../lib/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');
  
  const navigate = useNavigate();
  const location = useLocation();
  const { session } = useAuth();

  // Se já estiver logado, redireciona
  if (session) {
    navigate('/plataforma/dashboard');
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErro('');

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      // Se tiver uma URL de origem ("from"), volta pra ela, senão vai pro dashboard
      const from = location.state?.from?.pathname || '/plataforma/dashboard';
      navigate(from, { replace: true });
      
    } catch (err: any) {
      console.error(err);
      if (err.message === 'Invalid login credentials') {
        setErro('E-mail ou senha incorretos.');
      } else {
        setErro('Ocorreu um erro ao tentar fazer login. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
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

        {erro && (
          <div style={{ padding: '12px 16px', background: '#FEE2E2', color: '#B91C1C', borderRadius: '8px', marginBottom: '24px', fontSize: '0.9rem' }}>
            {erro}
          </div>
        )}

        <form className="clean-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="login-email">E-mail</label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="login-password">Senha</label>
            <input
              id="login-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <div style={{ textAlign: 'right', marginBottom: '0.5rem' }}>
            <a href="#" style={{ fontSize: '0.85rem', color: '#10B981', textDecoration: 'none' }}>
              Esqueceu a senha?
            </a>
          </div>

          <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
            {loading ? (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <Loader2 size={18} className="spin" /> Entrando...
              </span>
            ) : (
              <><LogIn size={18} /> Entrar</>
            )}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: '#64748B' }}>
          Não tem conta?{' '}
          <Link to="/plataforma/cadastro" style={{ color: '#10B981', fontWeight: 600, textDecoration: 'none' }}>
            Inscreva-se
          </Link>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Link to="/plataforma" className="plat-back-link">
            ← Voltar para a plataforma
          </Link>
        </div>
      </div>
    </div>
  );
}
