import React from 'react';
import Sidebar from './components/Sidebar';
import { Search, SlidersHorizontal, ArrowUpRight, Download, Plus, Menu, Share2, ChevronDown, ChevronRight, Star, BarChart2, ShoppingBag } from 'lucide-react';

export default function App() {
  return (
    // MAIN CONTAINER: h-screen ensures it takes 100% of the viewport height
    <div className="flex h-screen w-screen bg-[#F7F2F2] overflow-hidden font-sans">
      
      <Sidebar />

      <main className="flex-1 h-full p-2 flex flex-col overflow-hidden">
        
        {/* --- TOP NAVIGATION BAR (Fixed Height) --- */}
        <div className="flex justify-between items-center mb-2 flex-shrink-0">
           <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="Try searching 'insights'" 
                className="bg-white h-9 rounded-full pl-10 pr-6 w-[250px] md:w-[300px] text-xs text-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-100 transition-all placeholder-gray-400 font-medium"
              />
           </div>

           <div className="flex items-center gap-2">
              <div className="bg-white h-9 rounded-full pl-3 pr-1 flex items-center gap-2 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
                 <Menu size={16} className="text-gray-500" />
                 <img 
                   src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" 
                   alt="Profile" 
                   className="w-7 h-7 rounded-full object-cover border border-gray-100"
                 />
              </div>
              <button className="w-9 h-9 rounded-full bg-[#E91E63] text-white flex items-center justify-center shadow-lg shadow-pink-200 hover:bg-pink-600 hover:scale-105 transition-all">
                 <Plus size={18} />
              </button>
           </div>
        </div>

        {/* 4. THE WHITE DASHBOARD BOX (Flex Parent) */}
        {/* 'flex-1' makes this box take up all remaining vertical space */}
        <div className="bg-white w-full flex-1 rounded-[24px] shadow-sm border border-gray-100 overflow-hidden p-3 relative z-0 flex flex-col min-h-0">
          
          {/* --- A. HEADER SECTION --- */}
          <div className="flex flex-col gap-2 mb-2 flex-shrink-0">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-500">
                  <Plus size={14} />
                </button>
                <PersonPill name="Armin" img="https://i.pravatar.cc/150?u=Armin" />
                <PersonPill name="Eren" img="https://i.pravatar.cc/150?u=Eren" />
                <PersonPill name="Mikasa" img="https://i.pravatar.cc/150?u=Mikasa" />
                <button className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold hover:bg-gray-800 transition-colors">C</button>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-500 transition-colors"><SlidersHorizontal size={12}/></button>
                <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-500 transition-colors"><Download size={12}/></button>
                <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-500 transition-colors"><Share2 size={12}/></button>
              </div>
            </div>

            <div className="flex justify-between items-end">
              <h1 className="text-xl font-bold text-gray-300 tracking-tight">New report</h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 cursor-pointer group">
                  <div className="w-6 h-4 bg-black rounded-full relative transition-colors group-hover:bg-gray-800">
                    <div className="w-2.5 h-2.5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                  </div>
                  <span className="text-[10px] font-semibold text-gray-700">Timeframe</span>
                </div>
                <div className="flex items-center gap-1.5 bg-gray-100 rounded-lg px-2 py-1 cursor-pointer hover:bg-gray-200 transition-colors">
                  <span className="text-[10px] font-bold text-gray-700">Sep 1 - Nov 30</span>
                  <ChevronDown size={12} className="text-gray-500"/>
                </div>
              </div>
            </div>
          </div>

          {/* --- B. REVENUE & TOP STATS ROW --- */}
          <div className="flex flex-col mb-3 flex-shrink-0">
            <div className="flex flex-col xl:flex-row gap-3 items-start mb-2">
              <div className="flex-1">
                <h2 className="text-gray-900 font-bold text-[10px] mb-0.5">Revenue</h2>
                <div className="flex items-baseline gap-2 mb-0.5">
                  <h1 className="text-3xl font-black text-gray-900 tracking-tight">$528,976<span className="text-gray-400 text-xl">.82</span></h1>
                  <span className="bg-[#E91E63] text-white text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                    <ArrowUpRight size={8} strokeWidth={3} /> 7.9%
                  </span>
                  <span className="bg-[#E91E63] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                    $27k+
                  </span>
                </div>
                <p className="text-gray-400 text-[9px] font-medium">vs prev. $501k Jun 1 - Aug 31 <ChevronDown size={10} className="inline ml-1"/></p>
              </div>

              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide items-stretch">
                <div className="min-w-[120px] p-2 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col justify-between">
                   <span className="text-[9px] font-bold text-gray-400 uppercase">Top sales</span>
                   <div>
                      <div className="text-base font-bold mb-0.5">72</div>
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-1">
                            <img src="https://i.pravatar.cc/150?u=Mikasa" className="w-4 h-4 rounded-full border border-gray-200" alt=""/>
                            <span className="text-[9px] font-bold text-gray-700">Mikasa</span>
                         </div>
                         <ChevronRight size={10} className="text-gray-400"/>
                      </div>
                   </div>
                </div>

                <div className="min-w-[130px] p-2 rounded-2xl bg-black text-white shadow-sm flex flex-col justify-between relative group cursor-pointer">
                   <div className="flex justify-between items-start">
                      <span className="text-[9px] font-bold text-gray-500 uppercase">Best deal</span>
                      <Star size={10} className="text-gray-500 fill-gray-500"/>
                   </div>
                   <div>
                      <div className="text-base font-bold mb-0.5">$42,300</div>
                      <div className="flex items-center justify-between">
                         <span className="text-[9px] font-medium text-gray-400">Rolf Inc.</span>
                         <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <ChevronRight size={10} className="text-black"/>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="flex gap-1.5">
                   <SmallStatBox label="Deals" val="256" sub="↓ 5" />
                   <SmallStatBox label="Value" val="528k" sub="↑ 7%" active />
                   <SmallStatBox label="Win rate" val="44%" sub="↑ 1%" />
                </div>
              </div>
            </div>

            <div className="bg-[#F3F4F6] rounded-full p-1 flex items-center justify-between overflow-x-auto no-scrollbar">
               <div className="flex items-center gap-2">
                   <UserWhitePill img="https://i.pravatar.cc/150?u=Armin" amount="$209k" pct="39%" />
                   <UserWhitePill img="https://i.pravatar.cc/150?u=Mikasa" amount="$156k" pct="29%" />
                   <UserWhitePill img="https://i.pravatar.cc/150?u=Eren" amount="$117k" pct="22%" />
                   <div className="flex items-center gap-1.5 bg-white rounded-full pl-1.5 pr-3 py-0.5 shadow-sm min-w-max">
                      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-[8px] font-bold shadow-sm">C</div>
                      <span className="text-[10px] font-bold text-gray-800">$45k</span>
                      <span className="text-[8px] font-medium text-gray-400">8%</span>
                   </div>
               </div>
               <button className="bg-black text-white text-[9px] font-bold px-3 py-1.5 rounded-full hover:bg-gray-800 transition-colors shadow-md ml-4 whitespace-nowrap">
                  Details
               </button>
            </div>
          </div>

          {/* --- C. MAIN BENTO GRID (RESPONSIVE HEIGHTS) --- */}
          {/* 'flex-1' here is CRITICAL. It fills the remaining screen height. */}
          <div className="grid grid-cols-12 gap-3 flex-1 min-h-0">
             
             {/* 1. LEFT COLUMN */}
             <div className="col-span-12 lg:col-span-7 flex flex-col gap-3 h-full">
                
                {/* Row 1: Filters & Bar Chart - 'flex-1' to share height equally */}
                <div className="grid grid-cols-12 gap-3 flex-1 min-h-0">
                   {/* Platform List Box */}
                   <div className="col-span-5 bg-gray-50 rounded-[24px] p-3 flex flex-col justify-between h-full">
                      <div className="flex justify-between items-center mb-1">
                         <div className="flex items-center gap-1">
                            <Menu size={12} className="text-gray-400"/>
                            <ChevronDown size={10} className="text-gray-400"/>
                         </div>
                         <button className="flex items-center gap-1 bg-white border border-gray-200 px-1.5 py-0.5 rounded text-[8px] font-bold text-gray-600 shadow-sm">
                            Filters
                         </button>
                      </div>
                      <div className="flex flex-col justify-evenly flex-1 gap-1">
                         <PlatformRow name="Dribbble" amount="$227k" pct="43%" icon="🏀" color="text-pink-500" />
                         <PlatformRow name="Instagram" amount="$142k" pct="27%" icon={<InstagramGradientIcon size={12} />} />
                         <PlatformRow name="Behance" amount="$89k" pct="11%" icon="Bm" color="text-blue-500" />
                         <PlatformRow name="Google" amount="$37k" pct="7%" icon="G" color="text-green-500" />
                      </div>
                   </div>

                   {/* Deals Amount Bar Chart Box */}
                   <div className="col-span-7 bg-gray-50 rounded-[24px] p-3 flex flex-col h-full">
                      <div className="flex justify-between items-center mb-2">
                         <div className="flex items-center gap-1">
                            <BarChart2 size={12} className="text-gray-400"/>
                            <ChevronDown size={10} className="text-gray-400"/>
                         </div>
                         <button className="flex items-center gap-1 bg-white border border-gray-200 px-1.5 py-0.5 rounded text-[8px] font-bold text-gray-600 shadow-sm">
                            Filters
                         </button>
                      </div>
                      <div className="flex-1 flex items-end justify-between px-1 gap-1">
                         <div className="w-8 h-[60%] bg-[url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png')] bg-white rounded-lg relative shadow-sm flex items-center justify-center"><span className="text-blue-600 font-bold text-[10px] mb-2">Bē</span></div>
                         <div className="w-8 h-[90%] bg-white rounded-lg relative shadow-sm flex items-start justify-center pt-2"><span className="text-pink-500 font-bold text-[10px]">🏀</span></div>
                         <div className="w-8 h-[50%] bg-white rounded-lg relative shadow-sm flex items-center justify-center"><span className="text-green-500 font-bold text-[10px]">G</span></div>
                         <div className="w-8 h-[40%] bg-white rounded-lg relative shadow-sm flex items-center justify-center"><div className="mb-1"><InstagramGradientIcon size={14} /></div></div>
                         <div className="w-8 h-[80%] bg-[url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png')] bg-white rounded-lg border border-gray-200 relative flex items-start justify-center pt-2"><ShoppingBag size={10} className="text-gray-800" /></div>
                      </div>
                      <div className="mt-1">
                         <p className="text-[9px] font-bold text-gray-500">Deals amount</p>
                      </div>
                   </div>
                </div>

                {/* --- Row 2: Platform Value Chart - 'flex-1' to share height equally --- */}
                <div className="bg-gray-100 rounded-[24px] p-3 flex-1 flex flex-col min-h-0">
                   <div className="flex justify-between items-start mb-2 flex-shrink-0">
                      <div className="flex items-center gap-2">
                         <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-white text-pink-500 text-sm">🏀</div>
                         <div>
                            <p className="text-[8px] font-bold text-gray-400 uppercase">Platform value</p>
                            <div className="flex items-center gap-1 cursor-pointer">
                               <span className="text-sm font-bold text-gray-800">Dribbble</span>
                               <ChevronDown size={10} className="text-gray-400"/>
                            </div>
                         </div>
                      </div>
                      <div className="flex bg-white rounded-full p-0.5 shadow-sm">
                         <button className="bg-black text-white text-[8px] font-bold px-2 py-0.5 rounded-full shadow-md">Revenue</button>
                         <button className="text-gray-400 text-[8px] font-bold px-2 py-0.5 hover:text-gray-600">Leads</button>
                      </div>
                   </div>

                   <div className="flex gap-2 flex-1 min-h-0">
                      <div className="w-1/3 bg-[#E91E63] text-white rounded-[20px] p-3 flex flex-col justify-center relative overflow-hidden">
                         <div className="relative z-10 flex items-center gap-1 -rotate-90 origin-left absolute -left-4 top-1/2">
                            <span className="text-[8px] font-bold uppercase opacity-60 tracking-widest whitespace-nowrap">Avg. monthly</span>
                         </div>
                         <div className="pl-4 space-y-2">
                            <div>
                               <p className="text-[8px] font-bold uppercase opacity-70">Revenue</p>
                               <p className="text-base font-bold">$18,552</p>
                            </div>
                            <div>
                               <p className="text-[8px] font-bold uppercase opacity-70">Leads</p>
                               <p className="text-[10px] font-bold">373 <span className="opacity-60 text-[8px] font-normal">97/276</span></p>
                            </div>
                         </div>
                      </div>

                      <div className="flex-1 flex items-end justify-center gap-6 px-1 pb-1 relative">
                         <div className="absolute w-full h-full flex flex-col justify-between text-[8px] text-gray-300 font-bold pointer-events-none">
                            <div className="w-full border-t border-gray-200 border-dashed text-right pr-1 pt-1">$14k</div>
                            <div className="w-full border-t border-gray-200 border-dashed text-right pr-1 pt-1">$11k</div>
                            <div className="w-full border-t border-gray-200 border-dashed text-right pr-1 pt-1">$7k</div>
                            <div className="w-full border-t border-gray-200 border-dashed text-right pr-1 pt-1">$4k</div>
                         </div>

                         <GroupedBar label="Sep" height1="45%" height2="30%" val2="$6k" avatars={["https://i.pravatar.cc/150?u=1"]} />
                         <GroupedBar label="Oct" height1="85%" height2="55%" val="$11k" valColor="bg-[#E91E63]" avatars={["https://i.pravatar.cc/150?u=3", "https://i.pravatar.cc/150?u=4"]} />
                         <GroupedBar label="Nov" height1="70%" height2="50%" val="$9k" valColor="bg-[#E91E63]" avatars={["https://i.pravatar.cc/150?u=6"]} />
                      </div>
                   </div>
                </div>
             </div>

             {/* 2. RIGHT COLUMN */}
             <div className="col-span-12 lg:col-span-5 flex flex-col gap-3 h-full">
                
                <div className="flex justify-between text-[8px] font-bold text-gray-400 px-2 flex-shrink-0">
                   <span className="w-1/4">Sales</span>
                   <span className="w-1/5 text-right">Rev</span>
                   <span className="w-1/5 text-center">Leads</span>
                   <span className="w-1/6 text-center">KPI</span>
                   <span className="w-1/6 text-right">W/L</span>
                </div>

                <SalesRow img="https://i.pravatar.cc/150?u=Armin" name="Armin" rev="$209k" leads1="41" leads2="118" kpi="0.84" wl_pct="31%" wl1="12" wl2="29" />

                {/* Mikasa Card - 'flex-1' to take remaining space */}
                <div className="bg-gradient-to-b from-white to-pink-50 rounded-[24px] p-4 shadow-sm border border-pink-100 relative flex-1 flex flex-col justify-between min-h-0">
                   {/* Top Row */}
                   <div className="flex justify-between items-center mb-1 flex-shrink-0">
                      <div className="flex items-center gap-2 w-1/4">
                         <img src="https://i.pravatar.cc/150?u=Mikasa" className="w-6 h-6 rounded-full" alt="" />
                         <span className="text-[10px] font-bold text-gray-800 whitespace-nowrap">Mikasa</span>
                      </div>
                      <span className="text-[10px] font-bold text-gray-800 w-1/5 text-right">$156k</span>
                      <div className="flex items-center justify-center gap-1 w-1/5">
                         <div className="bg-black text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">54</div>
                         <div className="text-gray-400 text-[8px] font-bold">103</div>
                      </div>
                      <span className="text-[9px] font-bold text-gray-600 w-1/6 text-center">0.89</span>
                      <div className="flex items-center justify-end gap-1 w-1/6">
                          <div className="bg-black text-white text-[8px] font-bold px-1.5 py-0.5 rounded">21</div>
                          <div className="text-gray-400 text-[8px] font-bold">33</div>
                      </div>
                   </div>

                   <div className="flex gap-1 mb-2 flex-shrink-0">
                      <BadgePill text="Top sales 💪" />
                      <BadgePill text="Streak 🔥" />
                   </div>

                   <div className="flex-1 flex flex-col justify-center min-h-0">
                      <div className="flex justify-between items-center mb-1">
                         <span className="text-[9px] font-bold text-gray-600">Work with platforms</span>
                         <div className="flex items-center gap-1 bg-[#E91E63] text-white px-1.5 py-0.5 rounded-md text-[8px] font-bold">
                            <span className="bg-white/20 px-1 rounded">^ 3</span>
                            $156k
                         </div>
                      </div>
                      
                      {/* Widgets Grid - Flex grow to fill space */}
                      <div className="grid grid-cols-2 gap-2 flex-1 min-h-0">
                         <div className="bg-white rounded-xl p-2 flex flex-col justify-between shadow-sm">
                            <div className="flex items-center gap-1">
                               <div className="text-pink-500 font-bold text-[10px]">🏀</div>
                               <span className="text-[9px] font-bold text-gray-600">Dribbble</span>
                            </div>
                            <div>
                               <div className="text-lg font-black text-gray-800">45%</div>
                               <div className="text-[10px] text-gray-300 font-bold">$71k</div>
                            </div>
                         </div>

                         <div className="grid grid-rows-2 gap-2">
                            <div className="bg-white rounded-xl p-1.5 flex flex-col justify-between shadow-sm">
                               <div className="flex items-center gap-1">
                                  <InstagramGradientIcon size={10} />
                                  <span className="text-[8px] font-bold text-gray-600">Insta</span>
                               </div>
                               <div className="flex items-baseline justify-between">
                                  <span className="text-[10px] font-bold text-gray-800">28%</span>
                                  <span className="text-[8px] text-gray-300 font-bold">$44k</span>
                               </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                               <div className="bg-white rounded-xl p-1.5 flex flex-col justify-between shadow-sm">
                                  <div className="flex items-center gap-1"><span className="text-[8px] font-bold text-gray-700">G</span></div>
                                  <div className="text-[8px] font-bold">14%</div>
                               </div>
                               <div className="bg-white rounded-xl p-1.5 flex flex-col justify-between shadow-sm">
                                  <div className="flex items-center gap-1"><ShoppingBag size={8} className="text-gray-600"/></div>
                                  <div className="text-[8px] font-bold">5%</div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="flex-shrink-0 mt-2">
                      <div className="flex justify-between items-center mb-1">
                         <span className="text-[9px] font-bold text-gray-600">Sales dynamic</span>
                         <ArrowUpRight size={10} className="text-gray-400"/>
                      </div>
                      <div className="h-10 w-full relative">
                          <SalesDynamicChart />
                      </div>
                   </div>
                </div>

                <SalesRow img="https://i.pravatar.cc/150?u=Eren" name="Eren" rev="$117k" leads1="22" leads2="84" kpi="0.79" wl_pct="32%" wl1="7" wl2="15" />
             </div>

          </div>

        </div>
      </main>
    </div>
  );
}

// --- SUB COMPONENTS ---

const SalesRow = ({ img, name, rev, leads1, leads2, kpi, wl_pct, wl1, wl2 }) => (
   <div className="flex justify-between items-center px-2 py-1.5 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer flex-shrink-0">
      <div className="flex items-center gap-2 w-1/4">
         <img src={img} className="w-5 h-5 rounded-full" alt="" />
         <span className="text-[10px] font-bold text-gray-800 whitespace-nowrap">{name}</span>
      </div>
      <span className="text-[10px] font-bold text-gray-800 w-1/5 text-right">{rev}</span>
      <div className="flex items-center justify-center gap-1 w-1/5">
         <div className="bg-black text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">{leads1}</div>
         <div className="text-gray-400 text-[8px] font-bold">{leads2}</div>
      </div>
      <span className="text-[9px] font-bold text-gray-600 w-1/6 text-center">{kpi}</span>
      <div className="flex items-center justify-end gap-1 w-1/6">
          <span className="text-[8px] font-bold text-gray-500 mr-1">{wl_pct}</span>
          <div className="bg-black text-white text-[8px] font-bold px-1.5 py-0.5 rounded">{wl1}</div>
          <div className="text-gray-400 text-[8px] font-bold">{wl2}</div>
      </div>
   </div>
);

const BadgePill = ({ text }) => (
   <span className="bg-white px-1.5 py-0.5 rounded-full text-[8px] font-bold text-gray-600 shadow-sm border border-gray-100">
      {text}
   </span>
);

const SalesDynamicChart = () => (
   <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 100">
      <defs>
         <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e91e63" />
            <stop offset="50%" stopColor="#ffb74d" />
            <stop offset="100%" stopColor="#4caf50" />
         </linearGradient>
      </defs>
      <path d="M0,80 Q30,70 60,85 T120,75 T180,85 T240,65 T300,75" fill="none" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4,4" />
      <path d="M0,80 Q30,60 60,75 T120,65 T180,75 T240,55 T300,45" fill="none" stroke="#e91e63" strokeWidth="2" strokeLinecap="round" />
      <g transform="translate(60, 75)"><circle r="4" fill="white" stroke="#3b82f6" strokeWidth="2" /></g>
      <g transform="translate(150, 80)"><circle r="4" fill="#e91e63" stroke="white" strokeWidth="2" /></g>
      <g transform="translate(260, 55)"><circle r="4" fill="white" stroke="#ef4444" strokeWidth="2" /></g>
   </svg>
);

const InstagramGradientIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="url(#instaGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="instaGradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fec053" />
        <stop offset="50%" stopColor="#tr2345" />
        <stop offset="100%" stopColor="#e91e63" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const PersonPill = ({ name, img }) => (
  <div className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full pl-1 pr-2 py-0.5 cursor-pointer hover:bg-gray-50 transition-colors">
    <img src={img} alt={name} className="w-5 h-5 rounded-full object-cover" />
    <span className="text-[10px] font-bold text-gray-700">{name}</span>
  </div>
);

const SmallStatBox = ({ label, val, sub, active }) => (
  <div className={`min-w-[70px] p-1 rounded-xl flex flex-col justify-center items-center gap-0.5 border cursor-pointer hover:-translate-y-0.5 transition-transform
    ${active ? 'bg-white border-pink-500 shadow-sm' : 'bg-white border-gray-100'}`}>
    <span className="text-[8px] font-bold uppercase text-gray-400">{label}</span>
    <div className={`text-[10px] font-black ${active ? 'bg-pink-100 text-pink-700 px-1 rounded' : 'bg-gray-100 text-gray-600 px-1 rounded'}`}>{val}</div>
    <span className={`text-[8px] font-bold ${active ? 'text-gray-800' : 'text-gray-400'}`}>{sub}</span>
  </div>
);

const UserWhitePill = ({ img, amount, pct }) => (
   <div className="flex items-center gap-1.5 bg-white rounded-full pl-1 pr-2 py-0.5 shadow-sm min-w-max">
      <img src={img} className="w-5 h-5 rounded-full object-cover" alt=""/>
      <div className="flex items-baseline gap-1">
        <span className="text-[10px] font-bold text-gray-800">{amount}</span>
        <span className="text-[8px] font-medium text-gray-400">{pct}</span>
      </div>
   </div>
);

const PlatformRow = ({ name, amount, pct, icon, color }) => (
   <div className="flex items-center justify-between bg-white rounded-xl p-1.5 shadow-sm border border-gray-100">
      <div className="flex items-center gap-1.5">
         <div className={`w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center text-[9px] font-bold ${color || ''}`}>{icon}</div>
         <span className="text-[9px] font-bold text-gray-600">{name}</span>
      </div>
      <div className="flex items-center gap-1.5">
         <span className="text-[9px] font-bold text-gray-800">{amount}</span>
         <span className="text-[8px] font-medium text-gray-400">{pct}</span>
      </div>
   </div>
);

const GroupedBar = ({ label, height1, height2, val, valColor, val2, avatars = [] }) => (
   <div className="flex flex-col items-center justify-end h-full gap-0.5 group relative w-12">
      {val && <div className={`absolute -top-3 right-0 ${valColor} text-white text-[8px] font-bold px-1 py-0.5 rounded shadow-sm z-20`}>{val}</div>}
      {val2 && <div className="absolute top-8 left-0 bg-[#E91E63] text-white text-[8px] font-bold px-1 py-0.5 rounded shadow-sm z-20">{val2}</div>}
      
      <div className="flex items-end gap-0.5 w-full flex-1 justify-center mb-0.5">
         <div className="w-3 rounded-t-sm bg-[url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png')] bg-gray-300 border border-gray-300 opacity-60" style={{ height: height1 }}></div>
         <div className="w-3 rounded-t-sm bg-gray-200" style={{ height: height2 }}></div>
      </div>
      <span className="text-[8px] font-bold text-gray-400 mb-1">{label}</span>
      <div className="flex -space-x-1 h-3">
          {avatars.map((src, i) => <img key={i} src={src} className="w-3 h-3 rounded-full border border-white" alt=""/>)}
      </div>
   </div>
);