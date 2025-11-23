import React from 'react';

const Users = () => {
  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Gerenciamento de Usuários</h1>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex-1 max-w-md relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-slate-400">search</span>
          </div>
          <input
            type="text"
            className="form-input block w-full rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-[#111a22] py-3 pl-10 pr-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Buscar por nome ou e-mail..."
          />
        </div>
        <button className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors shadow-sm">
          <span className="material-symbols-outlined">add</span>
          Adicionar Usuário
        </button>
      </div>

      <div className="flex-1 min-h-0 overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111a22] flex flex-col">
        <div className="overflow-auto flex-1">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-white/5 text-xs font-medium uppercase text-slate-500 dark:text-slate-400 sticky top-0">
              <tr>
                <th className="px-6 py-4 tracking-wider">ID</th>
                <th className="px-6 py-4 tracking-wider">Nome</th>
                <th className="px-6 py-4 tracking-wider">E-mail</th>
                <th className="px-6 py-4 tracking-wider">Data de Cadastro</th>
                <th className="px-6 py-4 tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-white/10 text-sm">
              {[
                { id: '101', name: 'Ana Beatriz', email: 'ana.b@example.com', date: '2023-10-26' },
                { id: '102', name: 'Carlos Silva', email: 'carlos.silva@example.com', date: '2023-10-25' },
                { id: '103', name: 'Daniela Martins', email: 'daniela.m@example.com', date: '2023-10-24' },
                { id: '104', name: 'Eduardo Costa', email: 'eduardo.c@example.com', date: '2023-10-23' },
                { id: '105', name: 'Fernanda Lima', email: 'fernanda.l@example.com', date: '2023-10-22' },
              ].map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{user.id}</td>
                  <td className="px-6 py-4 font-medium text-slate-800 dark:text-slate-200">{user.name}</td>
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{user.email}</td>
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{user.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button className="text-primary hover:text-primary/80 transition-colors">
                        <span className="material-symbols-outlined text-xl">edit</span>
                      </button>
                      <button className="text-red-600 hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined text-xl">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="border-t border-slate-200 dark:border-white/10 p-4 flex items-center justify-between bg-slate-50 dark:bg-white/5">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Mostrando <span className="font-semibold text-slate-900 dark:text-white">1</span> a <span className="font-semibold text-slate-900 dark:text-white">5</span> de <span className="font-semibold text-slate-900 dark:text-white">57</span> resultados
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 border border-slate-300 dark:border-white/10 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-white/10">Anterior</button>
            <button className="px-3 py-1.5 border border-slate-300 dark:border-white/10 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-white/10">Próximo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;