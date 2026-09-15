import React from 'react';
import { districtsData } from '../data/rlhpData';
import { MapPin, FolderKanban, Home, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Projects() {
  return (
    <div className="space-y-12 font-sans pb-12">
      <section className="bg-rlhp-darkgreen text-white py-16 px-4 sm:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold">RLHP Projects</h1>
          <p className="text-xs sm:text-sm text-rlhp-lightgreen max-w-xl mx-auto font-medium">
            Location-specific shelter homes, centers, and intervention facilities
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Mysuru Highlight - Shelter Homes */}
        <div className="bg-white p-6 rounded-2xl border-2 border-rlhp-green shadow-sm space-y-6">
          <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
            <div className="w-10 h-10 rounded-full bg-rlhp-green text-white flex items-center justify-center font-bold">
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-rlhp-darkgreen">Mysuru Projects (Headquarters)</h3>
              <p className="text-xs text-gray-500">Flagship Residential Shelter Homes & Community Hubs</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Asha Kirana */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2.5 py-0.5 rounded-full">
                  Boys Shelter Home
                </span>
                <span className="text-xs text-gray-400 font-medium">Est. 1993</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
                <Home size={18} className="text-rlhp-green" />
                <span>AshaKirana — Boys Shelter Home</span>
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Provides residential care, safety, schooling, medical attention, and counseling for boys rescued from child labor, street situations, and abuse.
              </p>
              <div className="pt-2 text-xs font-semibold text-rlhp-green flex items-center space-x-1">
                <CheckCircle2 size={14} />
                <span>Active Beneficiaries: 120+ Boys</span>
              </div>
            </div>

            {/* Asha Bhavana */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] bg-pink-100 text-pink-800 font-bold px-2.5 py-0.5 rounded-full">
                  Girls Shelter Home
                </span>
                <span className="text-xs text-gray-400 font-medium">Est. 1999</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
                <Home size={18} className="text-rlhp-orange" />
                <span>AshaBhavana — Girls Shelter Home</span>
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Dedicated sanctuary and formal education access for young girls in difficult circumstances, empowering them toward self-reliance.
              </p>
              <div className="pt-2 text-xs font-semibold text-rlhp-orange flex items-center space-x-1">
                <CheckCircle2 size={14} />
                <span>Active Beneficiaries: 100+ Girls</span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Districts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {districtsData.filter(d => d.id !== 'mysuru').map((d) => (
            <div key={d.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-rlhp-darkgreen flex items-center space-x-2">
                  <MapPin size={16} className="text-rlhp-orange" />
                  <span>{d.name}</span>
                </h4>
                <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full flex items-center space-x-1">
                  <AlertCircle size={10} />
                  <span>(Details Updating)</span>
                </span>
              </div>
              <p className="text-xs text-gray-600">{d.description}</p>
              <div className="space-y-1.5 pt-2 border-t border-gray-100">
                {d.projects.map((proj, idx) => (
                  <div key={idx} className="text-xs font-medium text-gray-800 bg-gray-50 p-2 rounded-lg border border-gray-100 flex items-center space-x-1.5">
                    <FolderKanban size={14} className="text-rlhp-green" />
                    <span>{proj}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
