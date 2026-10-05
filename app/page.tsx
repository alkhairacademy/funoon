'use client';
import React, { useState } from 'react';

export default function FunoonDashboard() {
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="min-h-screen bg-[#E5DCCB] text-[#4A4238] p-4 md:p-8 font-sans relative overflow-hidden z-0">
      
      {/* Decorative Background Patterns matching the image vibe */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-[#D5CABD] transform origin-top-right -skew-x-12 -z-10 translate-x-1/4 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#F4EFE6] transform origin-bottom-left skew-y-12 -z-10 -translate-x-1/4 opacity-40"></div>

      {/* Top Header Section */}
      <header className="flex justify-between items-center bg-[#F4EFE6] border border-[#D5CABD] p-5 md:p-6 rounded-2xl mb-8 shadow-lg shadow-[#A87C61]/10">
        <div className="flex items-center gap-3 md:gap-4">
          {/* Islamic Star Logo */}
          <div className="p-2 bg-[#D5CABD] rounded-lg">
            <svg className="w-6 h-6 md:w-8 md:h-8 text-[#6D5A4B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l2.5 6 6.5.5-5 4.5 1.5 6.5-5.5-3.5-5.5 3.5 1.5-6.5-5-4.5 6.5-.5z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#6D5A4B] tracking-wide">
              FUNOON <span className="font-light">2026</span>
            </h1>
            <div className="text-[#A87C61] text-xs mt-1 font-semibold tracking-widest uppercase">
              Islamic Arts Fest
            </div>
          </div>
        </div>
        
        {/* Total Programs (Right Side) */}
        <div className="flex flex-col items-end border-l border-[#D5CABD] pl-4 md:pl-6">
          <div className="text-[#8A7D71] text-xs font-bold tracking-wider uppercase mb-1">Total Programs</div>
          <div className="bg-[#A87C61] text-[#F4EFE6] px-4 py-1.5 rounded-xl text-lg md:text-xl font-bold shadow-md">
            120
          </div>
        </div>
      </header>

      {/* Score Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* Zumarad */}
        <div className="bg-[#F4EFE6] p-8 rounded-2xl border border-[#D5CABD] shadow-md relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#D5CABD]/40 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
          <div className="flex justify-between items-center mb-6 relative z-10">
            <div className="px-3 py-1 bg-[#8B9075]/20 text-[#61654C] rounded-lg text-sm font-bold tracking-widest uppercase">Team A</div>
            <div className="text-2xl font-serif font-bold tracking-wide text-[#6D5A4B]">Zumarad</div>
          </div>
          <div className="text-6xl font-bold text-[#4A4238] relative z-10">
            50 <span className="text-lg font-normal text-[#8A7D71]">Points</span>
          </div>
        </div>

        {/* Yaqooth */}
        <div className="bg-[#F4EFE6] p-8 rounded-2xl border border-[#D5CABD] shadow-md relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#D5CABD]/40 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
          <div className="flex justify-between items-center mb-6 relative z-10">
             <div className="px-3 py-1 bg-[#A87C61]/20 text-[#8B5E41] rounded-lg text-sm font-bold tracking-widest uppercase">Team B</div>
            <div className="text-2xl font-serif font-bold tracking-wide text-[#6D5A4B]">Yaqooth</div>
          </div>
          <div className="text-6xl font-bold text-[#4A4238] relative z-10">
            30 <span className="text-lg font-normal text-[#8A7D71]">Points</span>
          </div>
        </div>

      </div>

      {/* Bottom Section: Current & Next Program */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Current Program */}
        <div className="md:col-span-2 bg-[#F4EFE6] p-8 rounded-2xl border border-[#D5CABD] shadow-md relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-2 bg-[#A87C61]"></div>
          <div className="text-xs text-[#8A7D71] mb-4 font-bold tracking-widest uppercase">Current Program</div>
          <div className="inline-block bg-[#A87C61]/10 text-[#8B5E41] text-xs px-4 py-1.5 rounded-full mb-4 font-bold border border-[#A87C61]/20">
            • Now Happening
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2 text-[#4A4238]">Senior Malayalam Speech</h2>
        </div>

        {/* Next Program */}
        <div className="bg-[#D5CABD] p-8 rounded-2xl border border-[#C5B9A9] shadow-inner flex flex-col justify-center">
          <div className="text-xs text-[#6D5A4B] mb-4 font-bold flex items-center gap-2 tracking-widest uppercase">
             Upcoming Program
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#4A4238]">Sub-Junior Conversation</h2>
        </div>

      </div>

      {/* Recent Program Results - Accordion Button */}
      <div className="mt-4">
        <button 
          onClick={() => setShowResults(!showResults)}
          className="w-full flex justify-between items-center bg-[#A87C61] text-[#F4EFE6] p-6 rounded-2xl shadow-md hover:bg-[#8B5E41] transition-colors"
        >
          <div className="text-sm font-bold flex items-center gap-3 tracking-widest uppercase">
            Previous Program Results
          </div>
          <div className="text-2xl font-light">
            {showResults ? '−' : '+'}
          </div>
        </button>
        
        {/* Expandable Results Area */}
        {showResults && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 animate-in fade-in slide-in-from-top-4 duration-500">
            
            {/* Result Card 1 */}
            <div className="bg-[#F4EFE6] p-6 rounded-2xl border border-[#D5CABD] shadow-sm">
              <h3 className="font-serif font-bold text-xl mb-5 text-[#6D5A4B]">Junior English Speech</h3>
              <div className="text-sm space-y-3 text-[#4A4238] font-medium">
                <p className="flex justify-between items-center border-b border-[#D5CABD]/50 pb-2">
                  <span><span className="font-bold text-[#A87C61] mr-2">1st:</span> Zumarad (Safvan)</span> 
                  <span className="text-lg">🥇</span>
                </p>
                <p className="flex justify-between items-center border-b border-[#D5CABD]/50 pb-2">
                  <span><span className="font-bold text-[#A87C61] mr-2">2nd:</span> Yaqooth (Yahya)</span> 
                  <span className="text-lg">🥈</span>
                </p>
                <p className="flex justify-between items-center">
                  <span><span className="font-bold text-[#A87C61] mr-2">3rd:</span> Zumarad (Amjad)</span> 
                  <span className="text-lg">🥉</span>
                </p>
              </div>
            </div>

            {/* Result Card 2 */}
            <div className="bg-[#F4EFE6] p-6 rounded-2xl border border-[#D5CABD] shadow-sm">
              <h3 className="font-serif font-bold text-xl mb-5 text-[#6D5A4B]">Mono Act</h3>
              <div className="text-sm space-y-3 text-[#4A4238] font-medium">
                <p className="flex justify-between items-center border-b border-[#D5CABD]/50 pb-2">
                  <span><span className="font-bold text-[#A87C61] mr-2">1st:</span> Yaqooth (Razaq)</span> 
                  <span className="text-lg">🥇</span>
                </p>
                <p className="flex justify-between items-center border-b border-[#D5CABD]/50 pb-2">
                  <span><span className="font-bold text-[#A87C61] mr-2">2nd:</span> Zumarad (Adhil)</span> 
                  <span className="text-lg">🥈</span>
                </p>
                <p className="flex justify-between items-center">
                  <span><span className="font-bold text-[#A87C61] mr-2">3rd:</span> Yaqooth (Naseem)</span> 
                  <span className="text-lg">🥉</span>
                </p>
              </div>
            </div>
            
          </div>
        )}
      </div>
      
    </div>
  );
}