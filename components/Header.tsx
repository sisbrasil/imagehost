import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#101922]/80 px-6 py-4 backdrop-blur-md">
      <div className="flex items-center gap-4 flex-1">
        <label className="relative hidden sm:flex flex-col min-w-40 h-10 max-w-sm w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400">search</span>
            </div>
            <input 
                className="form-input block w-full rounded-lg border-0 bg-slate-100 dark:bg-[#1c2a36] py-2 pl-10 pr-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6" 
                placeholder="Search..." 
            />
        </label>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <div className="h-8 w-px bg-slate-200 dark:bg-white/10 mx-1"></div>
        <div className="flex items-center gap-3">
             <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-slate-900 dark:text-white">Admin User</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">admin@imagehost.com</p>
            </div>
            <div 
                className="size-10 rounded-full bg-cover bg-center border-2 border-white dark:border-[#233648] shadow-sm"
                style={{ backgroundImage: 'url("https://i.pravatar.cc/150?u=admin")' }}
            ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;