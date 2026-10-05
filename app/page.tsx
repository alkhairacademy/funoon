'use client';
import React, { useState } from 'react';

export default function FunoonDashboard() {
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="min-h-screen bg-[#E5DCCB] text-[#4A4238] p-4 md:p-8 font-sans relative overflow-hidden z-0">
      
      {/* Decorative Background Patterns */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-[#D5CABD] transform origin-top-right -skew-x-12 -z-10 translate-x-1/4 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#F4EFE6] transform origin-bottom-left skew-y-12 -z-10 -translate-x-1/4 opacity-20"></div>

      {/* Top Header Section */}
      <header className="flex justify-between items-center bg-[#F4EFE6] border border-[#D5CABD] p-5 md:p-6 rounded-2xl mb-8 shadow-xl shadow-[#A87C61]/10">
        <div className="flex items-center gap-3 md:gap-4">
          {/* Islamic Star Logo */}
          <div className="p-2">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#6D5A4B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="4" y="4" width="16" height="16" transform="rotate(45 12 12)" />
              <rect x="4" y="4" width="16" height="16" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#6D5A4B] tracking-wide">
              FUNOON 2026
            </h1>
            <div className="text-[#A87C61] text-xs mt-1 font-semibold tracking-widest uppercase">
              Islamic Arts Fest
            </div>
          </div>
        </div>
        
        {/* Total Programs */}
        <div className="flex flex-col items-end border-l border-[#D5CABD] pl-4 md:pl-6">
          <div className="text-[#8A7D71] text-xs font-bold tracking-wider uppercase mb-1">Total Programs</div>
          <div className="bg-[#A87C61] text-[#F4EFE6] px-4 py-1.5 rounded-xl text-lg md:text-xl font-bold shadow-md">
            120
          </div>
        </div>
      </header>

      {/* Score Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        
        {/* Zumarad (Green Theme) */}
        <div className="bg-[#F4EFE6] p-8 rounded-3xl border border-emerald-300 shadow-[0_10px_40px_-15px_rgba(16,185,129,0.4)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div className="flex justify-between items-center mb-6 relative z-10">
            <div className="px-4 py-1.5 bg-emerald-100 text-emerald-800 rounded-xl text-xs font-bold tracking-widest uppercase shadow-sm">Team A</div>
            <div className="text-3xl font-serif font-bold tracking-wide text-emerald-700">Zumarad</div>
          </div>
          <div className="text-6xl font-black text-emerald-950 relative z-10">
            50 <span className="text-lg font-normal text-emerald-700/80">Points</span>
          </div>
        </div>

        {/* Yaqooth (Red Theme) */}
        <div className="bg-[#F4EFE6] p-8 rounded-3xl border border-red-300 shadow-[0_10px_40px_-15px_rgba(239,68,68,0.4)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div className="flex justify-between items-center mb-6 relative z-10">
             <div className="px-4 py-1.5 bg-red-100 text-red-800 rounded-xl text-xs font-bold tracking-widest uppercase shadow-sm">Team B</div>
            <div className="text-3xl font-serif font-bold tracking-wide text-red-700">Yaqooth</div>
          </div>
          <div className="text-6xl font-black text-red-950 relative z-10">
            100 <span className="text-lg font-normal text-red-700/80">Points</span>
          </div>
        </div>

      </div>

      {/* Bottom Section: Current Program & Leaderboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Current Program */}
        <div className="md:col-span-2 bg-[#F4EFE6] p-8 rounded-3xl border border-[#D5CABD] shadow-lg relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-3 bg-[#A87C61]"></div>
          <div className="text-xs text-[#8A7D71] mb-4 font-bold tracking-widest uppercase">Current Program</div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2 text-[#4A4238]">Senior Malayalam Speech</h2>
        </div>

        {/* Current Leaderboard */}
        <div className="bg-[#D5CABD] p-8 rounded-3xl border border-[#C5B9A9] shadow-inner flex flex-col justify-center">
          <div className="text-xs text-[#4A4238] mb-1 font-bold tracking-widest uppercase opacity-70">
             Currently Leading
          </div>
          <h2 className="text-3xl font-serif font-bold text-emerald-800 mb-0.5">Yaqooth</h2>
          <div className="text-emerald-700/80 text-sm font-semibold tracking-wide">
            With 100  Points
          </div>
        </div>

      </div>

      {/* Recent Program Results */}
      <div className="mt-8">
        <button 
          onClick={() => setShowResults(!showResults)}
          className="w-full flex justify-between items-center bg-[#A87C61] text-[#F4EFE6] p-6 rounded-3xl shadow-xl hover:bg-[#8B5E41] transition-all duration-500"
        >
          <div className="text-sm font-bold flex items-center gap-3 tracking-widest uppercase">
            Previous Program Results
          </div>
          <div className="text-2xl font-light">
            {showResults ? '−' : '+'}
          </div>
        </button>
        
        {showResults && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
            
            {/* Result Card 1 */}
            <div className="bg-[#F4EFE6] p-8 rounded-3xl border border-[#D5CABD] shadow-md">
              <h3 className="font-serif font-bold text-xl mb-5 text-[#6D5A4B]">Junior English Speech</h3>
              <div className="text-sm space-y-4 text-[#4A4238] font-medium">
                <p className="flex justify-between items-center border-b border-[#D5CABD]/50 pb-3">
                  <span><span className="font-bold text-[#A87C61] mr-3">1st:</span> Zumarad (Safvan)</span> 
                  <span className="text-xl">🥇</span>
                </p>
                <p className="flex justify-between items-center border-b border-[#D5CABD]/50 pb-3">
                  <span><span className="font-bold text-[#A87C61] mr-3">2nd:</span> Yaqooth (Yahya)</span> 
                  <span className="text-xl">🥈</span>
                </p>
                <p className="flex justify-between items-center pt-1">
                  <span><span className="font-bold text-[#A87C61] mr-3">3rd:</span> Zumarad (Amjad)</span> 
                  <span className="text-xl">🥉</span>
                </p>
              </div>
            </div>

            {/* Result Card 2 */}
            <div className="bg-[#F4EFE6] p-8 rounded-3xl border border-[#D5CABD] shadow-md">
              <h3 className="font-serif font-bold text-xl mb-5 text-[#6D5A4B]">Mono Act</h3>
              <div className="text-sm space-y-4 text-[#4A4238] font-medium">
                <p className="flex justify-between items-center border-b border-[#D5CABD]/50 pb-3">
                  <span><span className="font-bold text-[#A87C61] mr-3">1st:</span> Yaqooth (Razaq)</span> 
                  <span className="text-xl">🥇</span>
                </p>
                <p className="flex justify-between items-center border-b border-[#D5CABD]/50 pb-3">
                  <span><span className="font-bold text-[#A87C61] mr-3">2nd:</span> Zumarad (Adhil)</span> 
                  <span className="text-xl">🥈</span>
                </p>
                <p className="flex justify-between items-center pt-1">
                  <span><span className="font-bold text-[#A87C61] mr-3">3rd:</span> Yaqooth (Naseem)</span> 
                  <span className="text-xl">🥉</span>
                </p>
              </div>
            </div>
            
          </div>
        )}
      </div>
      
    </div>
  );
}