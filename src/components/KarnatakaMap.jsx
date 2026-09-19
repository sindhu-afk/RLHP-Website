import React, { useState } from 'react';
import { districtsData } from '../data/rlhpData';
import { MapPin, ChevronRight, CheckCircle2, ShieldCheck, Sparkles, Navigation } from 'lucide-react';

export default function KarnatakaMap({ onSelectDistrict }) {
  const [selectedDistrict, setSelectedDistrict] = useState(districtsData[0]); // default Mysuru HQ

  const handlePinClick = (district) => {
    setSelectedDistrict(district);
    if (onSelectDistrict) onSelectDistrict(district);
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Fully Dynamic & Interactive Karnataka Map */}
        <div className="lg:col-span-7 relative flex flex-col justify-center items-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 rounded-3xl p-6 border border-emerald-800/40 min-h-[520px] shadow-inner overflow-hidden">
          
          {/* Subtle Background Mesh Grid & Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-15"></div>
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>



          {/* Active District Status Banner */}
          <div className="absolute top-4 right-4 z-20 flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-400/30 text-emerald-300 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span>Active: <strong className="text-white">{selectedDistrict.name.split('/')[0]}</strong></span>
          </div>

          {/* Interactive Map Canvas Container */}
          <div className="relative w-full max-w-md aspect-[3/4] flex justify-center items-center my-4">
            
            {/* Base Karnataka Poly-Art Map Background */}
            <img 
              src={`${import.meta.env.BASE_URL}karnataka-state-map.png`} 
              alt="Karnataka Poly-Art Geometric Map" 
              className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] select-none opacity-90 transition-all duration-500"
            />

            {/* Interactive SVG Connector Routes Layer */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full z-10 pointer-events-none">
              {/* Connecting Operational Corridor Line */}
              <polyline
                points="65,12 55,22 62,34 44,48 56,52 30,62 46,78 52,86"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="0.8"
                strokeDasharray="2 1.5"
                className="opacity-80"
              />
            </svg>

            {/* Dynamic Interactive HTML District Nodes Overlay */}
            {districtsData.map((district) => {
              const isSelected = selectedDistrict.id === district.id;
              const isHq = district.isHq;

              // Position coordinates matching Karnataka state geometry
              const positionMap = {
                bidar: { top: '12%', left: '65%' },
                kalaburagi: { top: '22%', left: '55%' },
                yadgir: { top: '26%', left: '60%' },
                raichur: { top: '34%', left: '62%' },
                davanagere: { top: '48%', left: '44%' },
                chitradurga: { top: '52%', left: '56%' },
                udupi: { top: '62%', left: '30%' },
                mandya: { top: '72%', left: '50%' },
                mysuru: { top: '78%', left: '46%' },
                chamarajanagar: { top: '86%', left: '52%' }
              };

              const pos = positionMap[district.id] || { top: '50%', left: '50%' };

              return (
                <div
                  key={district.id}
                  style={{ top: pos.top, left: pos.left }}
                  onClick={() => handlePinClick(district)}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                >
                  {/* Glowing Animated Ring for Selected Node */}
                  {isSelected && (
                    <div className="absolute inset-0 -m-3 rounded-full bg-amber-400/40 animate-ping pointer-events-none"></div>
                  )}

                  {/* Node Pin Graphic */}
                  <div className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
                    isSelected 
                      ? 'w-9 h-9 bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-[0_0_20px_rgba(245,158,11,0.9)] scale-125 z-30 border-2 border-white' 
                      : isHq
                      ? 'w-7 h-7 bg-emerald-600 text-white border-2 border-emerald-300 shadow-md group-hover:scale-110 group-hover:bg-amber-500'
                      : 'w-6 h-6 bg-slate-900/90 text-emerald-400 border border-emerald-500/50 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white'
                  }`}>
                    <MapPin size={12} />
                  </div>

                  {/* Dynamic Floating Label Badge */}
                  <div className={`absolute left-1/2 -translate-x-1/2 mt-1.5 whitespace-nowrap px-2.5 py-1 rounded-md text-[11px] font-extrabold tracking-wide transition-all duration-300 shadow-lg ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 scale-110 border border-amber-300 z-40'
                      : 'bg-slate-900/90 text-emerald-300 border border-emerald-800 group-hover:bg-emerald-700 group-hover:text-white'
                  }`}>
                    {district.name.split(' ')[0]}
                    {isHq && <span className="ml-1 text-[9px] text-amber-900 bg-amber-300 px-1 rounded font-black">HQ</span>}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Map Interaction Footer Prompt */}
          <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-emerald-500/20 text-xs text-gray-300 flex items-center justify-between shadow-lg z-20">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="font-semibold text-white">Click any node on the map to switch district</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider hidden sm:inline">10 Active Hubs</span>
          </div>

        </div>

        {/* Right Side: Selected District Dynamic Spotlight Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-gradient-to-b from-gray-50 to-white p-6 rounded-3xl border border-gray-200">
          
          <div className="space-y-4">
            {/* Header Badge */}
            <div className="flex items-center justify-between">
              <div className={`flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full border ${
                selectedDistrict.isHq
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-emerald-100 text-emerald-900 border-emerald-300'
              }`}>
                <Navigation size={14} className={selectedDistrict.isHq ? 'text-amber-600' : 'text-emerald-600'} />
                <span>{selectedDistrict.isHq ? 'State Headquarters' : 'Intervention District'}</span>
              </div>

              <span className="text-xs font-extrabold bg-rlhp-darkgreen text-white px-3 py-1 rounded-xl shadow-2xs">
                {selectedDistrict.projectsCount} Active Projects
              </span>
            </div>

            {/* Selected District Title */}
            <div>
              <h3 className="text-3xl font-black text-rlhp-darkgreen tracking-tight flex items-center space-x-2">
                <span>{selectedDistrict.name}</span>
              </h3>
              <p className="text-xs font-semibold text-gray-500 mt-1">Ground Operations & Facilities</p>
            </div>

            {/* Description Box */}
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs">
              {selectedDistrict.description}
            </p>

            {/* Key Initiatives List */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1.5 flex items-center justify-between">
                <span>Key District Initiatives</span>
                <ShieldCheck size={16} className="text-rlhp-green" />
              </h4>
              <div className="space-y-2">
                {selectedDistrict.projects.map((proj, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-xs text-gray-800 bg-white p-3 rounded-xl border border-gray-200 shadow-2xs hover:border-rlhp-green transition-colors">
                    <CheckCircle2 size={16} className="text-rlhp-green shrink-0" />
                    <span className="font-bold">{proj}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Switch District Buttons */}
          <div className="pt-4 border-t border-gray-200">
            <label className="block text-[11px] font-extrabold text-gray-600 mb-2.5 uppercase tracking-wider">
              Quick Switch District (Click to view on map):
            </label>
            <div className="flex flex-wrap gap-1.5">
              {districtsData.map((d) => {
                const isActive = selectedDistrict.id === d.id;
                return (
                  <button
                    key={d.id}
                    onClick={() => handlePinClick(d)}
                    className={`text-xs px-3 py-2 rounded-xl font-extrabold transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-amber-500 text-slate-950 shadow-md scale-105 border border-amber-400' 
                        : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-rlhp-darkgreen border border-gray-200'
                    }`}
                  >
                    {d.name.split('/')[0]}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
