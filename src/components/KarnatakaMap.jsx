import React, { useState } from 'react';
import { districtsData } from '../data/rlhpData';
import { MapPin, Building, ChevronRight, CheckCircle2, Compass, ShieldCheck, Sparkles } from 'lucide-react';

export default function KarnatakaMap({ onSelectDistrict }) {
  const [selectedDistrict, setSelectedDistrict] = useState(districtsData[0]); // default Mysuru HQ

  const handlePinClick = (district) => {
    setSelectedDistrict(district);
    if (onSelectDistrict) onSelectDistrict(district);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Poly-Art Karnataka Map Image Container */}
        <div className="lg:col-span-7 relative flex flex-col justify-center items-center bg-gray-50 rounded-2xl p-4 sm:p-6 border border-gray-200 min-h-[460px] overflow-hidden">
          {/* Map Title Badge */}
          <div className="absolute top-4 left-4 z-20 flex items-center space-x-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gray-200 shadow-2xs">
            <Compass size={14} className="text-rlhp-green" />
            <span className="text-xs font-bold text-rlhp-darkgreen">Karnataka 8 Districts Operational Corridor</span>
          </div>

          {/* Map Image Graphic */}
          {/* Map Image Graphic */}
          <div className="relative w-full flex justify-center items-center">
            <img 
              src={`${import.meta.env.BASE_URL}karnataka-district-overview-map.png`} 
              alt="Karnataka District Overview Map" 
              className="w-full h-auto max-h-[580px] object-contain rounded-2xl shadow-sm border border-gray-100 select-none"
            />
          </div>
        </div>

        {/* Right Side: Selected District Card Spotlight */}
        <div className="lg:col-span-5 space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs font-bold text-rlhp-orange uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              <MapPin size={14} />
              <span>{selectedDistrict.isHq ? 'RLHP Headquarters' : 'Intervention District'}</span>
            </div>

            <span className="text-[11px] font-bold bg-rlhp-lightgreen text-rlhp-darkgreen px-2.5 py-1 rounded-md">
              {selectedDistrict.projectsCount} Active Projects
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold text-rlhp-darkgreen flex items-center space-x-2">
              <span>{selectedDistrict.name}</span>
              {selectedDistrict.isHq && <Sparkles size={18} className="text-rlhp-orange" />}
            </h3>
            <p className="text-xs text-gray-500 mt-1">Operational Coverage & Ground Facilities</p>
          </div>

          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-200/70">
            {selectedDistrict.description}
          </p>

          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wide border-b border-gray-100 pb-1 flex items-center justify-between">
              <span>Key District Initiatives</span>
              <ShieldCheck size={14} className="text-rlhp-green" />
            </h4>
            <div className="space-y-2">
              {selectedDistrict.projects.map((proj, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 text-xs text-gray-800 bg-white p-2.5 rounded-xl border border-gray-200 shadow-2xs hover:border-rlhp-green/50 transition-colors">
                  <CheckCircle2 size={16} className="text-rlhp-green shrink-0" />
                  <span className="font-semibold">{proj}</span>
                </div>
              ))}
            </div>
          </div>

          {/* District Quick Switch Pills */}
          <div className="pt-3 border-t border-gray-100">
            <label className="block text-[11px] font-bold text-gray-600 mb-2 uppercase tracking-wider">
              Quick Switch District (8 Active):
            </label>
            <div className="flex flex-wrap gap-1.5">
              {districtsData.map((d) => {
                const isActive = selectedDistrict.id === d.id;
                return (
                  <button
                    key={d.id}
                    onClick={() => handlePinClick(d)}
                    className={`text-xs px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-rlhp-green text-white shadow-xs scale-105' 
                        : 'bg-gray-100 text-gray-700 hover:bg-rlhp-lightgreen hover:text-rlhp-darkgreen'
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
