import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', value: 20 },
  { name: 'Tue', value: 45 },
  { name: 'Wed', value: 30 },
  { name: 'Thu', value: 70 },
  { name: 'Fri', value: 40 },
  { name: 'Sat', value: 60 },
  { name: 'Sun', value: 90 },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Welcome Section */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Visão Geral</h1>
        <p className="text-slate-500 dark:text-slate-400">Bem-vindo de volta, Admin!</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total de Imagens" value="14,832" change="+2.5%" isPositive={true} />
        <StatCard title="Total de Usuários" value="1,204" change="+1.2%" isPositive={true} />
        <StatCard title="Planos Ativos" value="89" change="+5%" isPositive={true} />
        <StatCard title="Espaço Utilizado" value="15.6 GB" change="+0.8%" isPositive={true} />
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Ações Rápidas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <QuickAction to="/upload" icon="add_photo_alternate" label="Nova Imagem" primary />
          <QuickAction to="/users" icon="person_add" label="Adicionar Usuário" />
          <QuickAction to="/plans" icon="add_card" label="Criar Plano" />
        </div>
      </div>

      {/* Recent Activity & Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Images Table */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Imagens Recentes</h2>
          <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111a22]">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400">
                  <tr>
                    <th className="px-6 py-4 font-medium">Imagem</th>
                    <th className="px-6 py-4 font-medium">Nome do Arquivo</th>
                    <th className="px-6 py-4 font-medium">Usuário</th>
                    <th className="px-6 py-4 font-medium">Data</th>
                    <th className="px-6 py-4 font-medium">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-white/10 text-slate-700 dark:text-slate-200">
                  <RecentImageRow 
                    img="https://picsum.photos/seed/city/100/100" 
                    name="city-night.jpg" 
                    user="john.doe" 
                    time="2 min atrás" 
                  />
                  <RecentImageRow 
                    img="https://picsum.photos/seed/forest/100/100" 
                    name="forest-path.png" 
                    user="jane.smith" 
                    time="1 hora atrás" 
                  />
                  <RecentImageRow 
                    img="https://picsum.photos/seed/mountain/100/100" 
                    name="mountains.webp" 
                    user="peter.jones" 
                    time="5 horas atrás" 
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Upload Chart */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Uploads (7 dias)</h2>
          <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111a22] p-6 h-[300px] flex flex-col justify-center">
             <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <Line type="monotone" dataKey="value" stroke="#137fec" strokeWidth={3} dot={{ r: 4, fill: '#137fec', strokeWidth: 0 }} />
                </LineChart>
             </ResponsiveContainer>
             <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-2">Atividade da semana</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change, isPositive }: { title: string; value: string; change: string; isPositive: boolean }) => (
  <div className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111a22]">
    <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">{title}</p>
    <p className="text-slate-900 dark:text-white text-3xl font-bold">{value}</p>
    <p className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
      {change} vs. mês passado
    </p>
  </div>
);

const QuickAction = ({ to, icon, label, primary }: { to: string; icon: string; label: string; primary?: boolean }) => (
  <Link
    to={to}
    className={`flex items-center justify-center gap-3 p-6 rounded-xl font-medium transition-colors ${
      primary
        ? 'bg-primary text-white hover:bg-primary/90'
        : 'bg-slate-100 dark:bg-[#233648] text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-[#324d67]'
    }`}
  >
    <span className="material-symbols-outlined">{icon}</span>
    <span>{label}</span>
  </Link>
);

const RecentImageRow = ({ img, name, user, time }: { img: string; name: string; user: string; time: string }) => (
  <tr className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
    <td className="px-6 py-4">
      <div className="size-10 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}></div>
    </td>
    <td className="px-6 py-4 font-medium">{name}</td>
    <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{user}</td>
    <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{time}</td>
    <td className="px-6 py-4">
      <button className="text-primary hover:underline font-medium">Ver</button>
    </td>
  </tr>
);

export default Dashboard;