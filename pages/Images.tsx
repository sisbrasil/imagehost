import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Images = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { id: 1, url: 'https://picsum.photos/seed/gradient/400/400', name: 'abstract-gradient.jpg' },
    { id: 2, url: 'https://picsum.photos/seed/swirl/400/400', name: 'swirl-art.jpg' },
    { id: 3, url: 'https://picsum.photos/seed/geo/400/400', name: 'geometric-teal.png' },
    { id: 4, url: 'https://picsum.photos/seed/holo/400/400', name: 'holographic-foil.jpg' },
    { id: 5, url: 'https://picsum.photos/seed/marble/400/400', name: 'liquid-marble.jpg' },
    { id: 6, url: 'https://picsum.photos/seed/paint/400/400', name: 'paint-strokes.png' },
    { id: 7, url: 'https://picsum.photos/seed/aurora/400/400', name: 'aurora-borealis.jpg' },
    { id: 8, url: 'https://picsum.photos/seed/pink/400/400', name: 'soft-pink-grad.jpg' },
    { id: 9, url: 'https://picsum.photos/seed/lines/400/400', name: 'dark-lines.png' },
    { id: 10, url: 'https://picsum.photos/seed/wave/400/400', name: 'purple-wave.jpg' },
    { id: 11, url: 'https://picsum.photos/seed/yellow/400/400', name: 'yellow-orange.jpg' },
    { id: 12, url: 'https://picsum.photos/seed/neon/400/400', name: 'neon-lights.jpg' },
  ];

  return (
    <div className="flex h-[calc(100vh-80px)] -m-4 md:-m-8 lg:-m-10">
        {/* Categories Sidebar */}
       <div className="w-48 hidden xl:flex flex-col border-r border-slate-200 dark:border-white/10 bg-white dark:bg-[#111a22] p-4">
            <div className="mb-4">
                 <h3 className="font-bold text-slate-900 dark:text-white mb-2">Categorias</h3>
                 <div className="flex flex-col gap-1">
                     {['Marketing', 'Produtos', 'Blog', 'Eventos', 'Social Media'].map(cat => (
                         <button key={cat} className="text-left px-2 py-1.5 rounded text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-primary dark:hover:text-primary transition-colors">
                             {cat}
                         </button>
                     ))}
                 </div>
            </div>
       </div>

      <div className="flex-1 flex flex-col min-w-0">
         <div className="p-6 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-[#111a22]">
            <div className="flex justify-between items-center gap-4 mb-4">
                 <div>
                    <h1 className="text-2xl font-black text-slate-900 dark:text-white">Todas as Imagens</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Gerencie e organize suas mídias.</p>
                 </div>
                 <Link to="/upload" className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors">
                    Novo Upload
                 </Link>
            </div>
            
            {/* Toolbar */}
            <div className="flex gap-2 items-center bg-slate-50 dark:bg-black/20 p-2 rounded-lg border border-slate-200 dark:border-white/10">
                <span className="material-symbols-outlined text-slate-400 pl-2">search</span>
                <input 
                    type="text" 
                    placeholder="Buscar imagens..." 
                    className="bg-transparent border-none focus:ring-0 text-sm w-full text-slate-900 dark:text-white placeholder:text-slate-500"
                />
                 <div className="flex gap-1">
                    <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-white/10 rounded text-slate-600 dark:text-slate-400">
                        <span className="material-symbols-outlined">swap_vert</span>
                    </button>
                    <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-white/10 rounded text-primary bg-white dark:bg-white/5 shadow-sm">
                        <span className="material-symbols-outlined">grid_view</span>
                    </button>
                     <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-white/10 rounded text-slate-600 dark:text-slate-400">
                        <span className="material-symbols-outlined">view_list</span>
                    </button>
                </div>
            </div>
         </div>

         <div className="flex-1 overflow-y-auto p-6 bg-slate-50 dark:bg-[#0d141c]">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {images.map(img => (
                    <div 
                        key={img.id} 
                        onClick={() => setSelectedImage(img.url)}
                        className={`group relative aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${selectedImage === img.url ? 'border-primary ring-2 ring-primary/30' : 'border-transparent hover:border-slate-300 dark:hover:border-slate-600'}`}
                    >
                        <div 
                            className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                            style={{ backgroundImage: `url(${img.url})` }}
                        />
                         <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-xs truncate">{img.name}</p>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </div>

      {/* Details Panel */}
      {selectedImage && (
          <aside className="w-80 border-l border-slate-200 dark:border-white/10 bg-white dark:bg-[#111a22] p-6 flex flex-col gap-6 overflow-y-auto absolute inset-y-0 right-0 z-20 shadow-2xl md:static md:shadow-none">
              <div className="flex justify-between items-center md:hidden">
                  <h2 className="font-bold text-slate-900 dark:text-white">Detalhes</h2>
                  <button onClick={() => setSelectedImage(null)} className="text-slate-500">
                      <span className="material-symbols-outlined">close</span>
                  </button>
              </div>
              
              <h2 className="font-bold text-lg text-slate-900 dark:text-white hidden md:block">Detalhes da Imagem</h2>
              
              <div className="aspect-video w-full rounded-lg bg-cover bg-center shadow-md" style={{ backgroundImage: `url(${selectedImage})` }}></div>
              
              <div className="space-y-4">
                  <div>
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Link Compartilhável</label>
                      <div className="flex mt-1">
                          <input 
                            readOnly 
                            value="https://mysite.com/img/a9d8b1c2.jpg" 
                            className="flex-1 rounded-l-md border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-black/20 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 focus:outline-none"
                          />
                          <button className="bg-slate-100 dark:bg-slate-700 border-y border-r border-slate-300 dark:border-slate-600 rounded-r-md px-3 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600">
                              <span className="material-symbols-outlined text-sm">content_copy</span>
                          </button>
                      </div>
                  </div>

                   <div className="space-y-1">
                      <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Nome do Arquivo</p>
                      <p className="text-sm text-slate-900 dark:text-white">abstract-gradient.jpg</p>
                  </div>
                   <div className="space-y-1">
                      <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Data de Upload</p>
                      <p className="text-sm text-slate-900 dark:text-white">18 de Abril, 2024</p>
                  </div>
                   <div className="space-y-1">
                      <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Dimensões</p>
                      <p className="text-sm text-slate-900 dark:text-white">1920x1080</p>
                  </div>
                   <div className="space-y-1">
                      <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Tamanho</p>
                      <p className="text-sm text-slate-900 dark:text-white">1.2 MB</p>
                  </div>
              </div>

              <div className="mt-auto pt-4 border-t border-slate-200 dark:border-white/10">
                   <button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition-colors">
                       <span className="material-symbols-outlined">delete</span>
                       Deletar Imagem
                   </button>
              </div>
          </aside>
      )}
    </div>
  );
};

export default Images;