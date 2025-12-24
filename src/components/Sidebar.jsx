import { Settings, MessageSquare, Plus, ChevronDown, Link as LinkIcon } from 'lucide-react';
// 1. IMPORTING IMAGES
import analyticsIcon from '../assets/image.png'; 
import tgIcon from '../assets/logo2.jpg';         

export default function Sidebar() {
  return (
    <aside className="w-80 flex bg-[#F7F2F2] h-full overflow-hidden border-r border-gray-200/50 flex-shrink-0">
      {/* 1. Slim Icon Rail */}
      <div className="w-16 flex flex-col items-center py-4 border-r border-gray-200/50 h-full">
        <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center mb-6 text-white font-bold text-lg shadow-md hover:scale-110 transition-transform duration-200 cursor-pointer">C</div>
        
        <nav className="flex flex-col gap-4">
          {/* 1st Icon: Black Border Image */}
          <RailIcon icon={
            <div className="w-10 h-10 rounded-full bg-white border-2 border-white flex items-center justify-center overflow-hidden shadow-sm p-1">
               <img 
                 src={analyticsIcon} 
                 alt="Analytics" 
                 className="w-full h-full object-cover"
               />
            </div>
          } />
          
          {/* 2nd Icon: Pink TG Image */}
          <RailIcon icon={
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-md">
               <img 
                 src={tgIcon} 
                 alt="TG Logo" 
                 className="w-full h-full object-cover"
               />
            </div>
          } />

          {/* Other SVG Icons (Black) */}
          <RailIcon icon={<CustomDocIcon />} />
          <RailIcon icon={<CustomCommandIcon />} />
          <RailIcon icon={<CustomOverlapIcon />} />
        </nav>

        <div className="mt-auto flex flex-col gap-4 pb-4">
          <div className="relative">
            <RailIcon icon={<MessageSquare size={20} />} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 border-2 border-[#F3F3F3] rounded-full"></span>
          </div>
          <RailIcon icon={<Settings size={20} />} />
        </div>
      </div>

      {/* 2.  Tree Navigation */}
      <div className="flex-1 py-4 px-3 flex flex-col h-full overflow-hidden">
      
        <div className="flex items-center justify-between mb-4 px-2 font-bold text-black text-[13px]">
          <span>Codename.com</span>
          <ChevronDown size={14} className="text-gray-400" />
        </div>

       
        <div className="flex-1 overflow-y-auto no-scrollbar text-[12px] font-medium text-black space-y-0.5">
          
        
          <div className="px-2 py-1 hover:bg-white rounded-md cursor-pointer text-gray-500">☆ Starred</div>
          
          {/* Recent remains Gray */}
          <div className="px-2 py-1 hover:bg-white rounded-md cursor-pointer text-gray-500">↺ Recent</div>
          
          <div className="px-2 py-1 hover:bg-white rounded-md cursor-pointer font-bold">Sales list</div>
          <div className="px-2 py-1 hover:bg-white rounded-md cursor-pointer font-bold">Goals</div>
          
          <SectionWrapper title="Dashboard">
             <div className="ml-2 border-l border-gray-300">
                <TreeLeaf label="Codename" />
                <TreeLeaf label="Shared with me" hasChevron isExpanded />
                <div className="ml-3 border-l border-gray-300">
                  <TreeLeaf label="Cargo2go" />
                  <TreeLeaf label="Cloudz3r" badge="2" />
                  <TreeLeaf label="Idioma" />
                  <TreeLeaf label="Syllables" />
                  <TreeLeaf label="x-Ob" />
                </div>
             </div>
          </SectionWrapper>

          <SectionWrapper title="Reports">
             <div className="ml-2 border-l border-gray-300">
                <TreeLeaf label="Share with me" hasChevron />
                <TreeLeaf label="My reports" hasChevron isExpanded />
                <div className="ml-3 border-l border-gray-300">
                  <TreeLeaf label="Emails received" />
                  <TreeLeaf label="Deal duration" />
                  <TreeLeaf label="New report" isPink />
                  <TreeLeaf label="Analytics" badge="7" />
                </div>
             </div>
          </SectionWrapper>

          {/* Manage folders -Gray */}
          <div className="flex items-center gap-2 px-2 py-3 text-gray-400 hover:text-gray-600 cursor-pointer text-[11px] mt-1">
            <LinkIcon size={12} />
            <span>Manage folders</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

// Helpers

const RailIcon = ({ icon, active }) => (
  <div className={`rounded-xl cursor-pointer transition-transform duration-200 ease-out flex items-center justify-center w-10 h-10 hover:scale-110 hover:z-50
    ${active ? 'bg-white shadow-sm text-[#E91E63] border border-gray-100' : 'text-black hover:bg-gray-200'}`}>
    {icon}
  </div>
);

const SectionWrapper = ({ title, children }) => (
  <div className="pt-2">
    {/* Title is  black */}
    <div className="flex justify-between items-center px-2 py-1 text-black font-bold group cursor-pointer">
      <span>{title}</span>
      <Plus size={12} className="text-gray-300 group-hover:text-black" />
    </div>
    {children}
  </div>
);

const TreeLeaf = ({ label, badge, isPink, hasChevron, isExpanded }) => (
  <div className="relative flex items-center justify-between py-0.5 pl-3 cursor-pointer group hover:bg-white/40 rounded-sm">
    <div className="absolute left-0 w-2.5 h-[1px] bg-gray-300 top-1/2"></div>
    
    <span className={`truncate ${isPink ? 'text-[#E91E63] font-bold' : 'text-black'}`}>
      {label}
    </span>
    <div className="flex items-center gap-1 mr-1 flex-shrink-0">
      {badge && <span className="bg-[#E91E63] text-white text-[9px] px-1 rounded-sm font-bold shadow-sm shadow-pink-200">{badge}</span>}
      {hasChevron && <ChevronDown size={10} className={`text-gray-300 transition-transform ${isExpanded ? '' : '-rotate-90'}`} />}
    </div>
  </div>
);

// --- SVG COMPONENTS ---
const CustomDocIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="13 2 13 8 19 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const CustomCommandIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
  </svg>
);

const CustomOverlapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="10" height="10" rx="2" />
    <rect x="10" y="10" width="10" height="10" rx="2" fill="currentColor" fillOpacity="0.1" />
  </svg>
);