import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/');
    };

  return (
    <div className="w-full max-w-md">
       <div className="flex flex-col items-center mb-8 text-center">
            <div className="flex items-center justify-center size-12 rounded-xl bg-primary text-white mb-4 shadow-lg shadow-primary/30">
                 <span className="material-symbols-outlined text-3xl">lock</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Acesso ao Painel</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Insira suas credenciais para continuar.</p>
       </div>

       <div className="bg-white dark:bg-[#18232e] rounded-xl shadow-sm border border-slate-200 dark:border-white/5 p-8">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5" htmlFor="email">E-mail ou Usuário</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-slate-400">person</span>
                        </div>
                        <input 
                            id="email"
                            type="text" 
                            className="form-input block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-[#101922] py-2.5 pl-10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-primary focus:border-primary"
                            placeholder="ex: admin@email.com"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5" htmlFor="password">Senha</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-slate-400">lock</span>
                        </div>
                        <input 
                            id="password"
                            type="password" 
                            className="form-input block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-[#101922] py-2.5 pl-10 pr-10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-primary focus:border-primary"
                            placeholder="Digite sua senha"
                        />
                        <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                             <span className="material-symbols-outlined text-xl">visibility</span>
                        </button>
                    </div>
                </div>

                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-all mt-2 shadow-md shadow-primary/20">
                    Entrar
                </button>

                <div className="text-center">
                    <a href="#" className="text-sm font-medium text-primary hover:underline">Esqueceu sua senha?</a>
                </div>
            </form>
       </div>
       <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
            Não tem uma conta? <Link to="/signup" className="text-primary font-bold hover:underline">Cadastre-se</Link>
       </p>
    </div>
  );
};

export default Login;