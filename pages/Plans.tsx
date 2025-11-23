import React from 'react';

const Plans = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Gerenciamento de Planos</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Crie, edite e gerencie os planos de hospedagem.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors">
          <span className="material-symbols-outlined">add_circle</span>
          Criar Novo Plano
        </button>
      </div>

      <div className="max-w-md">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-slate-400">search</span>
          </div>
          <input
            type="text"
            className="form-input block w-full rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-[#111a22] py-3 pl-10 pr-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Buscar plano por nome..."
          />
        </div>
      </div>

      <div className="w-full overflow-hidden rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111a22]">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 font-medium">
              <tr>
                <th className="px-4 py-3">Nome do Plano</th>
                <th className="px-4 py-3">Armazenamento</th>
                <th className="px-4 py-3">Largura de Banda</th>
                <th className="px-4 py-3">Nº de Imagens</th>
                <th className="px-4 py-3">Preço</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-white/10">
              <PlanRow 
                name="Básico" 
                storage="5 GB" 
                bandwidth="50 GB/mês" 
                images="1.000" 
                price="R$ 9,90/mês" 
                active={true} 
              />
              <PlanRow 
                name="Profissional" 
                storage="20 GB" 
                bandwidth="200 GB/mês" 
                images="5.000" 
                price="R$ 29,90/mês" 
                active={true} 
              />
              <PlanRow 
                name="Empresarial" 
                storage="100 GB" 
                bandwidth="1 TB/mês" 
                images="Ilimitado" 
                price="R$ 79,90/mês" 
                active={false} 
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const PlanRow = ({ name, storage, bandwidth, images, price, active }: { name: string; storage: string; bandwidth: string; images: string; price: string; active: boolean }) => (
  <tr className="text-slate-900 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
    <td className="px-4 py-4 font-medium dark:text-white">{name}</td>
    <td className="px-4 py-4 text-slate-500 dark:text-slate-400">{storage}</td>
    <td className="px-4 py-4 text-slate-500 dark:text-slate-400">{bandwidth}</td>
    <td className="px-4 py-4 text-slate-500 dark:text-slate-400">{images}</td>
    <td className="px-4 py-4 text-slate-500 dark:text-slate-400">{price}</td>
    <td className="px-4 py-4">
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
        active 
        ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' 
        : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
      }`}>
        {active ? 'Ativo' : 'Inativo'}
      </span>
    </td>
    <td className="px-4 py-4">
      <div className="flex items-center gap-2">
        <button className="p-2 text-slate-500 hover:bg-slate-200 dark:hover:bg-white/10 rounded transition-colors">
          <span className="material-symbols-outlined text-lg">edit</span>
        </button>
        <button className="p-2 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/40 rounded transition-colors">
          <span className="material-symbols-outlined text-lg">delete</span>
        </button>
      </div>
    </td>
  </tr>
);

export default Plans;