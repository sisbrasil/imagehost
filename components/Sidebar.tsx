import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="hidden md:flex w-64 flex-shrink-0 flex-col bg-white dark:bg-[#111a22] border-r border-slate-200 dark:border-white/10 p-4 sticky top-0 h-screen">
      <div className="flex items-center gap-3 px-2 py-3">
        <div className="flex items-center justify-center size-10 rounded-lg bg-primary text-white">
             <span className="material-symbols-outlined">dataset</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-slate-900 dark:text-white text-base font-bold leading-normal">ImageHost</h1>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-normal">Admin Panel</p>
        </div>
      </div>

      <nav className="flex flex-col gap-2 mt-8">
        <NavItem 
          to="/" 
          icon="dashboard" 
          label="Dashboard" 
          active={isActive('/')} 
        />
        <NavItem 
          to="/images" 
          icon="image" 
          label="Imagens" 
          active={isActive('/images')} 
        />
        <NavItem 
          to="/upload" 
          icon="cloud_upload" 
          label="Upload" 
          active={isActive('/upload')} 
        />
        <NavItem 
          to="/plans" 
          icon="inventory_2" 
          label="Planos" 
          active={isActive('/plans')} 
        />
        <NavItem 
          to="/users" 
          icon="group" 
          label="Usuários" 
          active={isActive('/users')} 
        />
        <NavItem 
          to="/profile" 
          icon="person" 
          label="Perfil" 
          active={isActive('/profile')} 
        />
      </nav>

      <div className="mt-auto flex flex-col gap-2">
         <NavItem 
          to="/settings" 
          icon="settings" 
          label="Configurações" 
          active={isActive('/settings')} 
        />
        <Link 
            to="/login"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined">logout</span>
          <p className="text-sm font-medium">Sair</p>
        </Link>
      </div>
    </aside>
  );
};

const NavItem = ({ to, icon, label, active }: { to: string; icon: string; label: string; active: boolean }) => {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
        active
          ? 'bg-primary text-white'
          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10'
      }`}
    >
      <span className={`material-symbols-outlined ${active ? 'fill' : ''}`}>{icon}</span>
      <p className="text-sm font-medium leading-normal">{label}</p>
    </Link>
  );
};

export default Sidebar;