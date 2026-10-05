import React from 'react';

export default function FunoonDashboard() {
  return (
    <div className="min-h-screen bg-[#0b0712] text-white p-6 font-sans bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1d162a] via-[#0b0712] to-[#0b0712]">
      
      {/* Top Header Section */}
      <header className="flex justify-between items-center bg-[#15111e]/80 backdrop-blur-md p-5 rounded-2xl mb-6 border border-gray-800 shadow-xl shadow-black/50">
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
          <button className="flex items-center gap-2 px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl text-white shadow-lg shadow-purple-900/20 transition">
            <span>📺</span> Open TV
          </button>
        </div>
      </header>

      {/* Score Cards Section (2 Teams - Colored by Team) */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        
        {/* Zumarad (1st Place - Emerald Green) */}
        <div className="bg-gradient-to-br from-[#12311d] to-[#15111e] p-6 rounded-2xl border-t-4 border-emerald-500 shadow-xl shadow-emerald-950/20">
          <div className="flex justify-between items-center mb-4">
            <div className="text-3xl">🥇</div>
            <div className="text-lg font-bold text-gray-300">Zumarad</div>
          </div>
          <div className="text-5xl font-bold text-white tracking-tighter">50 <span className="text-sm text-gray-400 font-normal tracking-normal">PTS</span></div>
        </div>

        {/* Yaqooth (2nd Place - Crimson Red) */}
        <div className="bg-gradient-to-br from-[#311215] to-[#15111e] p-6 rounded-2xl border-t-4 border-red-500 shadow-xl shadow-red-950/20">
          <div className="flex justify-between items-center mb-4">
            <div className="text-3xl">🥈</div>
            <div className="text-lg font-bold text-gray-300">Yaqooth</div>
          </div>
          <div className="text-5xl font-bold text-white tracking-tighter">30 <span className="text-sm text-gray-400 font-normal tracking-normal">PTS</span></div>
        </div>

      </div>

      {/* Bottom Section: Current Program, Next Program & Leader */}
      <div className="grid grid-cols-3 gap-6">
        
        {/* Current Program */}
        <div className="col-span-2 bg-[#15111e] p-8 rounded-2xl border border-gray-800 relative overflow-hidden mb-4 shadow-xl shadow-black/30">
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pink-500 to-purple-600"></div>
          <div className="text-xs text-gray-400 mb-3 font-semibold tracking-wider">CURRENT PROGRAM</div>
          <div className="inline-block bg-pink-900/30 text-pink-400 text-xs px-3 py-1 rounded-full mb-4 font-bold border border-pink-900/50">
            • LIVE NOW
          </div>
          <h2 className="text-4xl font-bold mb-6 tracking-tight">സീനിയർ മലയാള പ്രസംഗം</h2>
          <button className="px-5 py-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-sm border border-gray-700/50 transition backdrop-blur-md">
            🏅 Manage Result &gt;
          </button>
        </div>

        {/* Next Program */}
        <div className="bg-[#15111e] p-6 rounded-2xl border border-gray-800 flex flex-col justify-between mb-4 shadow-xl shadow-black/30">
          <div>
            <div className="text-xs text-gray-400 mb-4 font-semibold flex items-center gap-2 tracking-wider">
              <span>⏳</span> NEXT PROGRAM
            </div>
            <h2 className="text-2xl font-bold mb-2 tracking-tight">സബ് ജൂനിയർ സംഭാഷണം</h2>
          </div>
        </div>

        {/* Current Leader */}
        <div className="col-span-3 bg-[#15111e] p-8 rounded-2xl border border-gray-800 flex flex-col justify-between shadow-xl shadow-black/30">
          <div>
            <div className="text-xs text-gray-400 mb-4 font-semibold flex items-center gap-2 tracking-wider">
              <span>🏆</span> CURRENT LEADER
            </div>
            <div className="flex items-end gap-6">
              <h2 className="text-4xl font-bold text-emerald-400 tracking-tight">Zumarad</h2>
              <div className="text-5xl font-bold text-yellow-500 mb-0.5 tracking-tighter">
                50 <span className="text-lg text-gray-500 font-normal text-white">PTS</span>
              </div>
            </div>
          </div>
          <div className="text-emerald-400 text-sm font-semibold flex items-center gap-1.5 mt-6 bg-emerald-900/20 px-4 py-2 rounded-xl inline-flex w-max border border-emerald-900/50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            + 20 POINT LEAD
          </div>
        </div>

      </div>

      {/* Recent Program Results Section */}
      <div className="mt-8 bg-[#15111e] p-8 rounded-2xl border border-gray-800 shadow-xl shadow-black/30">
        <div className="text-xs text-info.
Let's see if the code fits within the conversational context and needs formatting. gray-400 mb-6 font-semibold flex items-center gap-2 tracking-wider">
          <span>📜</span> RECENT PROGRAM RESULTS (കഴിഞ്ഞ പ്രോഗ്രാം ഫലങ്ങൾ)
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Result Card 1 */}
          <div className="bg-[#1c1629]/50 p-6 rounded-2xl border border-gray-700/50">
            <h3 className="font-bold text-xl mb-4 text-pink-400">ജൂനിയർ ഇംഗ്ലീഷ് പ്രസംഗം</h3>
            <div className="text-sm space-y-2 text-gray-300 font-medium">
              <p>🥇 <span className="font-semibold text-white">ഫസ്റ്റ്:</span> Zumarad (സഫ്‌വാൻ)</p>
              <p>🥈 <span className="font-semibold text-white">സെക്കൻഡ്:</span> Yaqooth (യഹ്‌യ)</p>
              <p>🥉 <span className="font-semibold text-white">തേർഡ്:</span> (അംജദ്)</p>
            </div>
          </div>

          {/* Result Card 2 */}
          <div className="bg-[#1c1629]/50 p-6 rounded-2xl border border-gray-700/50">
            <h3 className="font-bold text-xl mb-4 text-pink-400">മോണോ ആക്ട്</h3>
            <div className="text-sm space-y-2 text-gray-300 font-medium">
              <p>🥇 <span className="font-semibold text-white">ഫസ്റ്റ്:</span> Yaqooth (റസാഖ്)</p>
              <p>🥈 <span className="font-semibold text-white">സെക്കൻഡ്:</span> Zumarad (ആദിൽ )</p>
              <p>🥉 <span className="font-semibold text-white">തേർഡ്:</span> (നസീം)</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}