import React from 'react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-6">Perfil</h1>

      {/* Header */}
      <div className="bg-white dark:bg-[#111a22] rounded-xl p-6 border border-slate-200 dark:border-white/10 mb-8 flex items-center gap-6">
         <div className="size-24 md:size-32 rounded-full bg-cover bg-center border-4 border-slate-100 dark:border-slate-800" style={{ backgroundImage: 'url("https://i.pravatar.cc/150?u=ana")' }}></div>
         <div>
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Ana Oliveira</h2>
             <p className="text-slate-500 dark:text-slate-400">ana.oliveira@email.com</p>
             <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">Membro desde: 15 de Jan, 2023</p>
         </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-[#111a22] p-6 rounded-xl border border-slate-200 dark:border-white/10">
              <p className="text-slate-600 dark:text-slate-400 font-medium">Imagens Enviadas</p>
              <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">1,234</p>
          </div>
          <div className="bg-white dark:bg-[#111a22] p-6 rounded-xl border border-slate-200 dark:border-white/10">
              <p className="text-slate-600 dark:text-slate-400 font-medium">Armazenamento Usado</p>
              <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">5.2 GB</p>
          </div>
      </div>

      {/* Plan */}
      <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Meu Plano</h2>
          <div className="bg-white dark:bg-[#111a22] rounded-xl p-6 border border-slate-200 dark:border-white/10">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">Plano Pro</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">Seu plano atual. Renova em 10/08/2024.</p>
                  </div>
                  <button className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-5 rounded-lg transition-colors">
                      Fazer Upgrade
                  </button>
              </div>

              <div className="space-y-6">
                  <div>
                      <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium text-slate-700 dark:text-slate-300">Armazenamento</span>
                          <span className="text-slate-500 dark:text-slate-400">5.2 GB / 10 GB</span>
                      </div>
                      <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-[52%]"></div>
                      </div>
                  </div>
                  <div>
                      <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium text-slate-700 dark:text-slate-300">Banda Larga Mensal</span>
                          <span className="text-slate-500 dark:text-slate-400">15.8 GB / 50 GB</span>
                      </div>
                      <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-[31.6%]"></div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Settings Form */}
      <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Configurações</h2>
          <div className="bg-white dark:bg-[#111a22] rounded-xl p-6 border border-slate-200 dark:border-white/10">
              <form className="space-y-6">
                  <div className="grid gap-6">
                      <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nome Completo</label>
                          <input type="text" defaultValue="Ana Oliveira" className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#1c2a36] text-slate-900 dark:text-white focus:ring-primary focus:border-primary p-2.5" />
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                          <input type="email" defaultValue="ana.oliveira@email.com" className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#1c2a36] text-slate-900 dark:text-white focus:ring-primary focus:border-primary p-2.5" />
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nova Senha</label>
                          <input type="password" placeholder="••••••••" className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#1c2a36] text-slate-900 dark:text-white focus:ring-primary focus:border-primary p-2.5" />
                      </div>
                  </div>
                  <div className="flex justify-end">
                      <button type="button" className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-5 rounded-lg transition-colors">
                          Salvar Alterações
                      </button>
                  </div>
              </form>

              <div className="my-8 h-px bg-slate-200 dark:bg-white/10"></div>

              <div>
                  <h3 className="text-lg font-bold text-red-600 dark:text-red-500">Zona de Perigo</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 mb-4">Estas ações são irreversíveis. Por favor, tenha certeza.</p>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-5 rounded-lg transition-colors">
                      Excluir Conta
                  </button>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Profile;