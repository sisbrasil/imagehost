import React from 'react';

const Upload = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white">Upload Your Images</h1>
        <p className="text-slate-500 dark:text-slate-400">Drag & drop files or click to browse. Supports JPG, PNG, GIF.</p>
      </div>

      {/* Dropzone */}
      <div className="flex flex-col items-center justify-center gap-6 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-black/10 px-6 py-14 hover:border-primary dark:hover:border-primary transition-colors cursor-pointer group">
        <div className="flex flex-col items-center gap-2 text-center">
            <span className="material-symbols-outlined text-5xl text-slate-400 group-hover:text-primary transition-colors">cloud_upload</span>
            <p className="text-lg font-bold text-slate-900 dark:text-white">Drag & Drop files here</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">or</p>
        </div>
        <button className="bg-slate-200 dark:bg-[#233648] text-slate-800 dark:text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-slate-300 dark:hover:bg-[#324d67] transition-colors">
            Select Files
        </button>
      </div>

      {/* Progress List */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-2">Upload Progress</h2>
        
        {/* Uploading Item */}
        <div className="flex items-center justify-between p-2">
            <div className="flex items-center gap-4">
                 <div className="size-14 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/seed/mountain/100/100)' }}></div>
                 <div>
                     <p className="font-medium text-slate-900 dark:text-white">mountain-vista.jpg</p>
                     <p className="text-sm text-slate-500 dark:text-slate-400">Uploading...</p>
                 </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="w-24 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div className="h-full bg-primary w-[65%]"></div>
                </div>
                <span className="text-sm font-medium text-slate-900 dark:text-white">65%</span>
            </div>
        </div>

        {/* Completed Item */}
         <div className="bg-slate-100 dark:bg-white/5 rounded-lg p-4 flex flex-col gap-4">
             <div className="flex items-start gap-4">
                 <div className="size-14 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/seed/city/100/100)' }}></div>
                 <div>
                     <p className="font-medium text-slate-900 dark:text-white">cityscape-sunset.png</p>
                     <div className="flex items-center gap-1 text-success mt-1">
                         <span className="material-symbols-outlined text-sm">check_circle</span>
                         <span className="text-sm font-medium">Complete</span>
                     </div>
                 </div>
             </div>
             <div className="flex flex-col sm:flex-row gap-4">
                 <div className="flex-1">
                     <label className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 block">Description</label>
                     <input type="text" placeholder="Add a brief description..." className="w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-[#101922] text-sm dark:text-white focus:ring-primary" />
                 </div>
                 <div className="flex-1">
                     <label className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 block">Tags</label>
                     <input type="text" placeholder="Add tags, separated by commas" className="w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-[#101922] text-sm dark:text-white focus:ring-primary" />
                 </div>
             </div>
         </div>

         {/* Error Item */}
         <div className="flex items-center justify-between p-2">
            <div className="flex items-center gap-4">
                 <div className="size-14 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/seed/leaf/100/100)' }}></div>
                 <div>
                     <p className="font-medium text-slate-900 dark:text-white">nature-detail.gif</p>
                     <div className="flex items-center gap-1 text-error mt-1">
                         <span className="material-symbols-outlined text-sm">error</span>
                         <span className="text-sm font-medium">Upload Failed</span>
                     </div>
                 </div>
            </div>
            <button className="text-xs font-bold border border-slate-300 dark:border-slate-700 px-3 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-white/10 dark:text-slate-300">
                Retry
            </button>
        </div>
      </div>

      <div className="flex justify-end pt-4">
          <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-primary/20 transition-all">
              Generate Shareable Links
          </button>
      </div>
    </div>
  );
};

export default Upload;