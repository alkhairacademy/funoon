import React from 'react';

export default function FunoonDashboard() {
  return (
    <div className="min-h-screen bg-[#0d0914] text-white p-6 font-sans">
      
      {/* Top Header Section */}
      <header className="flex justify-between items-center bg-[#15111e] p-4 rounded-xl mb-6 border border-gray-800 shadow-lg">
        <div>
          <h1 className="text-2xl font-black text-pink-500 tracking-wider">
            FUNOON 2026 <span className="text-xs text-gray-400 font-normal tracking-normal ml-2">SEASON 2 • 35 PROGRAMS</span>
          </h1>
          <div className="text-red-500 text-xs mt-1 flex items-center font-bold">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span> 1 Live
          </div>
        </div>
        <div className="flex gap-4 text-sm font-medium">
          <button className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition">
            <span>✏️</span> Manual Score Override
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition">
            <span>🏆</span> Enter Result
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-white shadow-lg transition">
            <span>📺</span> Open TV
          </button>
        </div>
      </header>

      {/* Score Cards Section (2 Teams) */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        
        {/* Zumarad (1st Place) */}
        <div className="bg-[#15111e] p-5 rounded-xl border-t-4 border-teal-500 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <div className="text-2xl">🥇</div>
            <div className="text-lg font-bold text-gray-400">Zumarad</div>
          </div>
          <div className="text-4xl font-bold text-white">50 <span className="text-sm text-gray-500 font-normal">PTS</span></div>
        </div>

        {/* Yaqooth (2nd Place) */}
        <div className="bg-[#15111e] p-5 rounded-xl border-t-4 border-orange-500 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <div className="text-2xl">🥈</div>
            <div className="text-lg font-bold text-gray-400">Yaqooth</div>
          </div>
          <div className="text-4xl font-bold text-white">30 <span className="text-sm text-gray-500 font-normal">PTS</span></div>
        </div>

      </div>

      {/* Bottom Section: Current Program, Next Program & Leader */}
      <div className="grid grid-cols-3 gap-4">
        
        {/* Current Program */}
        <div className="col-span-2 bg-gradient-to-br from-[#2c1b4d] to-[#15111e] p-6 rounded-xl border border-purple-900/50 relative overflow-hidden mb-4">
          <div className="text-xs text-gray-300 mb-3 font-semibold tracking-wider">CURRENT PROGRAM</div>
          <div className="inline-block bg-pink-900/40 text-pink-400 text-xs px-2 py-1 rounded mb-4 font-bold border border-pink-900/50">
            • LIVE NOW
          </div>
          <h2 className="text-3xl font-bold mb-4">സീനിയർ മലയാള പ്രസംഗം</h2>
          <button className="px-5 py-2.5 bg-white/5 hover:bg-white/10 rounded-lg text-sm border border-gray-600/50 transition">
            🏅 Manage Result &gt;
          </button>
        </div>

        {/* Next Program */}
        <div className="bg-[#15111e] p-6 rounded-xl border border-gray-800 flex flex-col justify-between mb-4">
          <div>
            <div className="text-xs text-gray-400 mb-4 font-semibold flex items-center gap-2">
              <span>⏳</span> NEXT PROGRAM
            </div>
            <h2 className="text-xl font-bold mb-2">സബ് ജൂനിയർ സംഭാഷണം</h2>
          </div>
        </div>

        {/* Current Leader */}
        <div className="col-span-3 bg-[#15111e] p-6 rounded-xl border border-gray-800 flex flex-col justify-between">
          <div>
            <div className="text-xs text-gray-400 mb-4 font-semibold flex items-center gap-2">
              <span>🏆</span> CURRENT LEADER
            </div>
            <h2 className="text-2xl font-bold mb-2 text-teal-400">Zumarad</h2>
            <div className="text-4xl font-bold text-yellow-500 mb-2">
              50 <span className="text-lg text-gray-500 font-normal text-white">PTS</span>
            </div>
          </div>
          <div className="text-green-400 text-sm font-semibold flex items-center gap-1 mt-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            + 20 POINT LEAD
          </div>
        </div>

      </div>
    </div>
  );
}