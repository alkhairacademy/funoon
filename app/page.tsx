import React, { useState } from 'react';

export default function FunoonDashboard() {
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="min-h-screen bg-[#060409] text-white p-6 font-sans bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat">
      
      {/* Top Header Section with Islamic Accent and Liquid Glass Effect */}
      <header className="flex justify-between items-center bg-white/[0.04] backdrop-blur-2xl border border-white/10 p-6 rounded-3xl mb-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full blur-xl"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-amber-500 tracking-widest flex items-center gap-3">
            <svg className="w-8 h-8 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" />
            </svg>
            FUNOON <span className="text-white">2026</span>
          </h1>
          <div className="text-emerald-400 text-xs mt-1 flex items-center font-semibold">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span> Season 2 • LIVE
          </div>
        </div>
      </header>

      {/* Score Cards Section with Liquid Glass Effect */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        
        {/* Zumarad */}
        <div className="bg-gradient-to-br from-emerald-500/10 via-white/[0.03] to-white/[0.01] backdrop-blur-2xl p-8 rounded-3xl border border-emerald-500/20 shadow-[0_8px_32px_0_rgba(16,185,129,0.15)] relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
          <div className="flex justify-between items-center mb-4 relative z-10">
            <div className="text-4xl">🥇</div>
            <div className="text-xl font-bold tracking-wide text-emerald-400">Zumarad</div>
          </div>
          <div className="text-5xl font-black tracking-tighter relative z-10">50 <span className="text-sm font-normal tracking-normal text-gray-400">Points</span></div>
        </div>

        {/* Yaqooth */}
        <div className="bg-gradient-to-br from-rose-500/10 via-white/[0.03] to-white/[0.01] backdrop-blur-2xl p-8 rounded-3xl border border-rose-500/20 shadow-[0_8px_32px_0_rgba(244,63,94,0.15)] relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl"></div>
          <div className="flex justify-between items-center mb-4 relative z-10">
            <div className="text-4xl">🥈</div>
            <div className="text-xl font-bold tracking-wide text-rose-500">Yaqooth</div>
          </div>
          <div className="text-5xl font-black tracking-tighter relative z-10">30 <span className="text-sm font-normal tracking-normal text-gray-400">Points</span></div>
        </div>

      </div>

      {/* Bottom Section: Current Program, Next Program & Leader */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Current Program */}
        <div className="md:col-span-2 bg-white/[0.04] backdrop-blur-2xl p-8 rounded-3xl border border-white/10 relative overflow-hidden mb-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-amber-500 to-rose-500"></div>
          <div className="text-xs text-amber-500 mb-3 font-bold tracking-widest uppercase">Current Program</div>
          <div className="inline-block bg-amber-500/10 text-amber-400 text-xs px-3.5 py-1 rounded-full mb-4 font-bold border border-amber-500/20 backdrop-blur-md">
            • Now Happening
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight text-white">Senior Malayalam Speech</h2>
        </div>

        {/* Next Program */}
        <div className="bg-white/[0.04] backdrop-blur-2xl p-6 rounded-3xl border border-white/10 flex flex-col justify-between mb-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div>
            <div className="text-xs text-emerald-400 mb-4 font-bold flex items-center gap-2 tracking-widest uppercase">
              <span>⏳</span> Upcoming Program
            </div>
            <h2 className="text-2xl font-bold mb-2 tracking-tight text-white">Sub-Junior Conversation</h2>
          </div>
        </div>

        {/* Current Leader */}
        <div className="md:col-span-3 bg-white/[0.04] backdrop-blur-2xl p-8 rounded-3xl border border-white/10 flex flex-col justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="text-xs text-amber-500 mb-4 font-bold flex items-center gap-2 tracking-widest uppercase">
              <span>🏆</span> Leaderboard
            </div>
            <div className="flex flex-wrap items-end gap-6">
              <h2 className="text-4xl font-black text-white tracking-tighter">Zumarad <span className="text-2xl text-gray-400 font-normal">is Leading</span></h2>
              <div className="text-5xl font-black text-emerald-400 mb-0.5 tracking-tighter">
                50 <span className="text-lg text-gray-400 font-normal">PTS</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Recent Program Results Icon & Expandable Section */}
      <div className="mt-8">
        <button 
          onClick={() => setShowResults(!showResults)}
          aria-expanded={showResults}
          className="w-full flex justify-between items-center bg-white/[0.04] backdrop-blur-2xl p-6 rounded-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-white/[0.08] transition-all"
        >
          <div className="text-sm text-gray-300 font-bold flex items-center gap-3 tracking-widest uppercase">
            <span>📜</span> Previous Program Results
          </div>
          <div className="text-xl">
            {showResults ? '🔼' : '🔽'}
          </div>
        </button>
        
        {showResults && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 animate-in fade-in slide-in-from-top-4 duration-500">
            {/* Result Card 1 */}
            <div className="bg-white/[0.04] backdrop-blur-2xl p-6 rounded-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
              <h3 className="font-bold text-xl mb-4 text-emerald-400">Junior English Speech</h3>
              <div className="text-sm space-y-2 text-gray-300 font-medium">
                <p>🥇 <span className="font-semibold text-white">1st:</span> Zumarad (Safvan)</p>
                <p>🥈 <span className="font-semibold text-white">2nd:</span> Yaqooth (Yahya)</p>
                <p>🥉 <span className="font-semibold text-white">3rd:</span> Zumarad (Amjad)</p>
              </div>
            </div>

            {/* Result Card 2 */}
            <div className="bg-white/[0.04] backdrop-blur-2xl p-6 rounded-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
              <h3 className="font-bold text-xl mb-4 text-rose-500">Mono Act</h3>
              <div className="text-sm space-y-2 text-gray-300 font-medium">
                <p>🥇 <span className="font-semibold text-white">1st:</span> Yaqooth (Razaq)</p>
                <p>🥈 <span className="font-semibold text-white">2nd:</span> Zumarad (Adhil)</p>
                <p>🥉 <span className="font-semibold text-white">3rd:</span> Yaqooth (Naseem)</p>
              </div>
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
}git push

