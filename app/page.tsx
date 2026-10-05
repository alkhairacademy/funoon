import React, { useState } from 'react';

export default function FunoonDashboard() {
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="min-h-screen bg-[#060409] text-white p-6 font-sans bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat">
      
      {/* Top Header Section */}
      <header className="flex justify-between items-center bg-[#0e0a16]/85 backdrop-blur-sm p-6 rounded-2xl mb-6 border border-[#2b1f3d] shadow-2xl shadow-black/80">
        <div>
          <h1 className="text-3xl font-bold text-amber-500 tracking-widest">
            FUNOON <span className="text-white">2026</span>
          </h1>
          <div className="text-emerald-400 text-xs mt-1 flex items-center font-semibold">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span> സീസൺ 2 • ലൈവ്
          </div>
        </div>
        <div className="flex gap-4 text-sm font-semibold">
          <button className="flex items-center gap-2 px-4 py-2 border border-[#2b1f3d] rounded-xl text-gray-400 hover:text-white hover:bg-[#1a1226] transition">
            <span>✏️</span> സ്കോറുകൾ മാറ്റുക
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-[#2b1f3d] rounded-xl text-gray-400 hover:text-white hover:bg-[#1a1226] transition">
            <span>🏆</span> ഫലം ചേർക്കുക
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-amber-600 hover:bg-amber-500 rounded-xl text-[#0b0712] transition shadow-lg shadow-amber-900/40">
            <span>📺</span> ഓപ്പൺ ടിവി
          </button>
        </div>
      </header>

      {/* Score Cards Section */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        
        {/* Zumarad */}
        <div className="bg-gradient-to-br from-[#0c1810] via-[#0e0a16] to-[#0e0a16] p-6 rounded-2xl border-t-4 border-emerald-500 shadow-xl shadow-[#0c1810]">
          <div className="flex justify-between items-center mb-4">
            <div className="text-4xl">🥇</div>
            <div className="text-xl font-bold tracking-wide text-emerald-400">സുമറദ് (Zumarad)</div>
          </div>
          <div className="text-5xl font-black tracking-tighter">50 <span className="text-sm font-normal tracking-normal text-gray-400">പോയിന്റ്</span></div>
        </div>

        {/* Yaqooth */}
        <div className="bg-gradient-to-br from-[#180a0a] via-[#0e0a16] to-[#0e0a16] p-6 rounded-2xl border-t-4 border-rose-600 shadow-xl shadow-[#180a0a]">
          <div className="flex justify-between items-center mb-4">
            <div className="text-4xl">🥈</div>
            <div className="text-xl font-bold tracking-wide text-rose-500">യഖൂത്ത് (Yaqooth)</div>
          </div>
          <div className="text-5xl font-black tracking-tighter">30 <span className="text-sm font-normal tracking-normal text-gray-400">പോയിന്റ്</span></div>
        </div>

      </div>

      {/* Bottom Section: Current Program, Next Program & Leader */}
      <div className="grid grid-cols-3 gap-6">
        
        {/* Current Program */}
        <div className="col-span-2 bg-[#0e0a16] p-8 rounded-2xl border border-[#2b1f3d] relative overflow-hidden mb-4 shadow-xl shadow-black/50">
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-amber-600 to-rose-600"></div>
          <div className="text-xs text-amber-500 mb-3 font-bold tracking-widest uppercase">നിലവിലെ പ്രോഗ്രാം</div>
          <div className="inline-block bg-amber-900/30 text-amber-500 text-xs px-3 py-1 rounded-full mb-4 font-bold border border-amber-900/50">
            • ഇപ്പോൾ നടക്കുന്നു
          </div>
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight text-white">സീനിയർ മലയാള പ്രസംഗം</h2>
          <button className="px-5 py-2.5 bg-[#1a1226] hover:bg-[#251a36] rounded-xl text-sm border border-[#2b1f3d] transition">
            🏅 ഫലങ്ങൾ നിയന്ത്രിക്കുക &gt;
          </button>
        </div>

        {/* Next Program */}
        <div className="bg-[#0e0a16] p-6 rounded-2xl border border-[#2b1f3d] flex flex-col justify-between mb-4 shadow-xl shadow-black/50">
          <div>
            <div className="text-xs text-emerald-400 mb-4 font-bold flex items-center gap-2 tracking-widest uppercase">
              <span>⏳</span> വരാനിരിക്കുന്ന പ്രോഗ്രാം
            </div>
            <h2 className="text-2xl font-bold mb-2 tracking-tight">സബ് ജൂനിയർ സംഭാഷണം</h2>
          </div>
        </div>

        {/* Current Leader */}
        <div className="col-span-3 bg-[#0e0a16] p-8 rounded-2xl border border-[#2b1f3d] flex flex-col justify-between shadow-xl shadow-black/50">
          <div>
            <div className="text-xs text-amber-500 mb-4 font-bold flex items-center gap-2 tracking-widest uppercase">
              <span>🏆</span> ലീഡർബോർഡ്
            </div>
            <div className="flex items-end gap-6">
              <h2 className="text-4xl font-black text-white tracking-tighter">സുമറദ് <span className="text-2xl text-gray-500 font-normal">മുന്നിൽ</span></h2>
              <div className="text-5xl font-black text-emerald-500 mb-0.5 tracking-tighter">
                50 <span className="text-lg text-gray-400 font-normal">PTS</span>
              </div>
            </div>
          </div>
          <div className="text-emerald-400 text-sm font-semibold flex items-center gap-1.5 mt-6 bg-emerald-900/20 px-4 py-2 rounded-xl inline-flex w-max border border-emerald-900/50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            വലിയ ലീഡ്
          </div>
        </div>

      </div>

      {/* Recent Program Results Icon & Expandable Section */}
      <div className="mt-8">
        <button 
          onClick={() => setShowResults(!showResults)}
          className="w-full flex justify-between items-center bg-[#0e0a16] p-6 rounded-2xl border border-[#2b1f3d] shadow-xl shadow-black/50 hover:bg-[#150e21] transition"
        >
          <div className="text-sm text-gray-400 font-bold flex items-center gap-3 tracking-widest uppercase">
            <span>📜</span> കഴിഞ്ഞ പ്രോഗ്രാം ഫലങ്ങൾ
          </div>
          <div className="text-xl">
            {showResults ? '🔼' : '🔽'}
          </div>
        </button>
        
        {showResults && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 animate-in fade-in slide-in-from-top-4 duration-500">
            {/* Result Card 1 */}
            <div className="bg-[#0e0a16] p-6 rounded-2xl border border-[#2b1f3d] shadow-xl shadow-black/50">
              <h3 className="font-bold text-xl mb-4 text-emerald-400">ജൂനിയർ ഇംഗ്ലീഷ് പ്രസംഗം</h3>
              <div className="text-sm space-y-2 text-gray-300 font-medium">
                <p>🥇 <span className="font-semibold text-white">ഫസ്റ്റ്:</span> സുമറദ് (സഫ്‌വാൻ)</p>
                <p>🥈 <span className="font-semibold text-white">സെക്കൻഡ്:</span> യഖൂത്ത് (യഹ്‌യ)</p>
                <p>🥉 <span className="font-semibold text-white">തേർഡ്:</span> (അംജദ്)</p>
              </div>
            </div>

            {/* Result Card 2 */}
            <div className="bg-[#0e0a16] p-6 rounded-2xl border border-[#2b1f3d] shadow-xl shadow-black/50">
              <h3 className="font-bold text-xl mb-4 text-rose-500">മോണോ ആക്ട്</h3>
              <div className="text-sm space-y-2 text-gray-300 font-medium">
                <p>🥇 <span className="font-semibold text-white">ഫസ്റ്റ്:</span> യഖൂത്ത് (റസാഖ്)</p>
                <p>🥈 <span className="font-semibold text-white">സെക്കൻഡ്:</span> സുമറദ് (ആദിൽ)</p>
                <p>🥉 <span className="font-semibold text-white">തേർഡ്:</span> (നസീം)</p>
              </div>
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
}