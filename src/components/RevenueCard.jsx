import { Plus } from 'lucide-react';

const Avatar = ({ name, color }) => (
  <div className={`w-10 h-10 rounded-full border-2 border-white ${color} flex items-center justify-center overflow-hidden`}>
    <span className="text-[10px] font-bold text-white opacity-0 hover:opacity-100 transition-opacity bg-black/20 w-full h-full flex items-center justify-center cursor-default">
      {name[0]}
    </span>
  </div>
);

export default function RevenueCard() {
  return (
    <div className="space-y-6">
      {/* Avatar Stack Row */}
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-colors">
          <Plus size={20} />
        </button>
        <div className="flex -space-x-3">
          <Avatar name="Armin A." color="bg-gray-800" />
          <Avatar name="Eren Y." color="bg-orange-200" />
          <Avatar name="Mikasa A." color="bg-blue-400" />
          <div className="w-10 h-10 rounded-full border-2 border-white bg-black flex items-center justify-center text-white text-[10px] font-bold z-10">C</div>
        </div>
      </div>

      {/* Revenue Data Card */}
      <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">
        <p className="text-gray-400 font-bold text-lg mb-2">Revenue</p>
        <div className="flex items-center gap-4 flex-wrap">
          <h2 className="text-6xl font-black text-gray-900 tracking-tight">$528,976.82</h2>
          <div className="flex gap-2">
            <span className="bg-pink-100 text-pink-600 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1">
              ▲ 7.9%
            </span>
            <span className="bg-pink-500 text-white px-4 py-1.5 rounded-full text-sm font-bold">
              $27,335.09
            </span>
          </div>
        </div>
        <p className="text-gray-400 text-sm mt-4 font-medium italic">
          vs prev. $501,841.73 Jun 1 - Aug 31, 2023
        </p>

        {/* Progress Bar Detail from Image */}
        <div className="mt-8 pt-8 border-t border-gray-50 flex items-center gap-8">
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-800"></div>
              <span className="text-sm font-bold">$209,633</span>
              <span className="text-xs text-gray-400">39.63%</span>
           </div>
           <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden flex">
              <div className="h-full bg-gray-800" style={{ width: '39.63%' }}></div>
              <div className="h-full bg-blue-400" style={{ width: '29.65%' }}></div>
              <div className="h-full bg-orange-200" style={{ width: '22.14%' }}></div>
           </div>
        </div>
      </div>
    </div>
  );
}