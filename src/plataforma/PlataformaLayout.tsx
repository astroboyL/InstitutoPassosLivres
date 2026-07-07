import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function PlataformaLayout() {
  return (
    <div className="plat-layout">
      <Sidebar />
      <main className="plat-main">
        <Outlet />
      </main>
    </div>
  );
}
