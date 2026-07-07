import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, BookOpen, Library, Building2, Users, 
  MessageCircle, LogOut, Menu, X, GraduationCap 
} from 'lucide-react';

const navItems = [
  { path: '/plataforma/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/plataforma/sala-de-aula', label: 'Sala de Aula', icon: BookOpen },
  { path: '/plataforma/biblioteca', label: 'Biblioteca', icon: Library },
  { path: '/plataforma/secretaria', label: 'Secretaria', icon: Building2 },
  { path: '/plataforma/professores', label: 'Professores', icon: Users },
  { path: '/plataforma/chat', label: 'Chat', icon: MessageCircle },
];

export default function Sidebar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="plat-mobile-header">
        <Link to="/plataforma/dashboard" className="plat-mobile-logo">
          <GraduationCap size={24} />
          <span>Passos Livres</span>
        </Link>
        <button className="plat-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`plat-sidebar ${mobileOpen ? 'open' : ''}`}>
        <div className="plat-sidebar-header">
          <Link to="/" className="plat-sidebar-logo">
            <img src="/image/logoSoope.png" alt="Logo" style={{ height: '36px' }} />
            <div>
              <strong style={{ display: 'block', fontSize: '0.9rem' }}>Passos Livres</strong>
              <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>Plataforma Educacional</span>
            </div>
          </Link>
        </div>

        <nav className="plat-sidebar-nav">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`plat-sidebar-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="plat-sidebar-footer">
          <Link to="/" className="plat-sidebar-link" onClick={() => setMobileOpen(false)}>
            <LogOut size={20} />
            <span>Voltar ao Site</span>
          </Link>
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && <div className="plat-overlay" onClick={() => setMobileOpen(false)} />}

      {/* Mobile bottom navigation */}
      <nav className="plat-bottom-nav">
        {navItems.slice(0, 5).map(item => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`plat-bottom-link ${isActive ? 'active' : ''}`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
