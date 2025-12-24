import { Search, Bell, Plus } from 'lucide-react';

export default function TopNav() {
  return (
    <header className="h-20 flex items-center justify-between px-8 bg-white border-b border-gray-50">
      {/* Left: Search Bar */}
      <div className="relative w-96">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input 
          type="text" 
          placeholder="Try searching 'insights'"
          className="w-full bg-gray-100 border-none rounded-2xl py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-pink-500 transition-all outline-none"
        />
      </div>

      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-full pr-4">
           <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
             <div className="w-6 h-1 bg-gray-300 rounded-full relative after:content-[''] after:absolute after:w-6 after:h-1 after:bg-gray-300 after:rounded-full after:-bottom-2 before:content-[''] before:absolute before:w-6 before:h-1 before:bg-gray-300 before:rounded-full before:-top-2"></div>
           </div>
           <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-500 border-2 border-white"></div>
        </div>
        
        <button className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-full transition-colors shadow-lg shadow-pink-200">
          <Plus size={24} />
        </button>
      </div>
    </header>
  );
}