import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="w-full max-w-md">
       <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Crie sua Conta</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Comece a compartilhar suas imagens de forma fácil e segura.</p>
       </div>

       <div className="bg-white dark:bg-[#18232e] rounded-xl shadow-sm border border-slate-200 dark:border-white/5 p-8">
            <form className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5" htmlFor="fullname">Nome Completo</label>
                    <input 
                        id="fullname"
                        type="text" 
                        className="form-input block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-[#101922] py-3 px-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-primary focus:border-primary"
                        placeholder="Digite seu nome completo"
                    />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5" htmlFor="email">Seu melhor e-mail</label>
                    <input 
                        id="email"
                        type="email" 
                        className="form-input block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-[#101922] py-3 px-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-primary focus:border-primary"
                        placeholder="exemplo@email.com"
                    />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5" htmlFor="password">Crie uma senha</label>
                    <div className="relative">
                        <input 
                            id="password"
                            type="password" 
                            className="form-input block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-[#101922] py-3 px-4 pr-12 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-primary focus:border-primary"
                            placeholder="Digite sua senha"
                        />
                        <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                             <span className="material-symbols-outlined">visibility</span>
                        </button>
                    </div>
                </div>
                 <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5" htmlFor="confirm-password">Confirme sua senha</label>
                    <input 
                        id="confirm-password"
                        type="password" 
                        className="form-input block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-[#101922] py-3 px-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-primary focus:border-primary"
                        placeholder="Digite sua senha novamente"
                    />
                </div>

                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-md shadow-primary/20">
                    Criar Conta
                </button>
            </form>
       </div>
       <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
            Já possui uma conta? <Link to="/login" className="text-primary font-bold hover:underline">Faça login</Link>
       </p>
    </div>
  );
};

export default SignUp;