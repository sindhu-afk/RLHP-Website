import { useState } from 'react';
import { orgDetails, fundingPartners } from '../data/rlhpData';
import { Target, Compass, Flag, Users, Shield, CheckCircle2, AlertCircle, X, ZoomIn } from 'lucide-react';

export default function AboutUs({ setCurrentPage }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="space-y-12 font-sans pb-12">
      {/* Top Page Header Banner */}
      <section className="relative bg-rlhp-darkgreen text-white py-16 px-4 sm:px-8 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">About RLHP</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Who We Are Section */}
        <section id="who-we-are" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold text-rlhp-orange uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-rlhp-darkgreen tracking-tight leading-tight">
              Rural Literacy & Health Programme (RLHP)
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Rural Literacy and Health Programme (RLHP) is a Mysore-based NGO. It was registered on 24th May 1984 under the Karnataka Societies Registration Act 1960 [and FCRA].
            </p>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              At present, RLHP works in 10 districts of Karnataka covering South and North Karnataka, reaching a population of over 9.65 lakh people. Over the last 42+ years, RLHP has transformed thousands of lives through child rights advocacy, residential shelter homes, learning disability remediation, women sanghas, and last-mile government scheme facilitation.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-rlhp-lightgreen/50 rounded-xl border border-rlhp-green/20">
                <div className="text-2xl font-bold text-rlhp-green">42+ Years</div>
                <div className="text-xs text-gray-600 font-medium">Unbroken Ground Presence</div>
              </div>
              <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
                <div className="text-2xl font-bold text-rlhp-orange">10 Districts</div>
                <div className="text-xs text-gray-600 font-medium">South & North Karnataka Coverage</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop" 
                alt="RLHP Children studying" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 p-4 text-white">
                <p className="text-xs font-semibold">Serving marginalized children & women across Karnataka since 1984.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission & Core Values with Rich Interactive Mouse-Over Animations */}
        <section id="vision-mission" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Our Vision Card */}
            <div className="group relative bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 text-white p-8 sm:p-10 rounded-3xl border border-emerald-500/20 shadow-xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(16,185,129,0.3)] hover:border-emerald-400/60 cursor-pointer">
              {/* Radial Mouseover Glow & Particle Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 via-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-2xl"></div>
              <div className="absolute -top-24 -left-24 w-60 h-60 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-400/30 transition-colors duration-700 pointer-events-none"></div>

              {/* Top-Right Decorative Morphing Corner Accent */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 pointer-events-none"></div>

              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between">
                  {/* Animated Icon Box */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-emerald-800 to-slate-950 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shadow-md group-hover:scale-110 group-hover:rotate-6 group-hover:bg-emerald-500 group-hover:text-slate-950 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.8)] transition-all duration-500">
                    <Compass className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>

                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-3 py-1 rounded-full group-hover:bg-emerald-400 group-hover:text-slate-950 transition-colors">
                    Guiding Light
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                    Our Vision
                  </h3>
                  <p className="text-xs font-semibold text-emerald-400/80 mt-1">A Just, Free & Sustainable World</p>
                </div>

                <div className="relative pt-2">
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light italic bg-white/5 p-4 rounded-2xl border border-white/10 group-hover:border-emerald-500/40 group-hover:bg-white/10 transition-all">
                    "{orgDetails.vision}"
                  </p>
                </div>
              </div>
            </div>

            {/* Our Mission Card */}
            <div className="group relative bg-gradient-to-br from-amber-950 via-slate-900 to-orange-950 text-white p-8 sm:p-10 rounded-3xl border border-amber-500/20 shadow-xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(245,158,11,0.3)] hover:border-amber-400/60 cursor-pointer">
              {/* Radial Mouseover Glow & Particle Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/15 via-orange-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-2xl"></div>
              <div className="absolute -top-24 -left-24 w-60 h-60 bg-amber-500/20 rounded-full blur-3xl group-hover:bg-amber-400/30 transition-colors duration-700 pointer-events-none"></div>

              {/* Top-Right Decorative Morphing Corner Accent */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-amber-400/20 to-transparent rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 pointer-events-none"></div>

              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between">
                  {/* Animated Icon Box */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-orange-800 to-slate-950 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-md group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-amber-400 group-hover:text-slate-950 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.8)] transition-all duration-500">
                    <Target className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>

                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    Core Purpose
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white group-hover:text-amber-300 transition-colors">
                    Our Mission
                  </h3>
                  <p className="text-xs font-semibold text-amber-400/80 mt-1">Empowering Marginalized Communities</p>
                </div>

                <div className="relative pt-2">
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light italic bg-white/5 p-4 rounded-2xl border border-white/10 group-hover:border-amber-500/40 group-hover:bg-white/10 transition-all">
                    "{orgDetails.mission}"
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Guiding Operational Pillars Grid */}
          <div className="pt-6">
            <div className="text-center max-w-xl mx-auto mb-6">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-rlhp-green bg-rlhp-lightgreen px-3 py-1 rounded-full">
                Guiding Methodologies
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-rlhp-darkgreen mt-2">Core Strategic Pillars</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {orgDetails.approaches.map((app, idx) => (
                <div
                  key={idx}
                  className="group bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-lg hover:border-rlhp-green/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-rlhp-green to-amber-500 group-hover:w-2 transition-all"></div>
                  <div className="pl-3">
                    <h4 className="font-extrabold text-sm text-gray-900 group-hover:text-rlhp-green transition-colors">
                      {app.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership & Board Members */}
        <section id="leadership" className="space-y-8">
          <div className="max-w-xl mx-auto text-center space-y-2">
            <span className="text-xs font-bold text-rlhp-green uppercase tracking-wider bg-rlhp-lightgreen px-3 py-1 rounded-full">
              Governance & Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-rlhp-darkgreen">Founders & Board Members</h2>
            <p className="text-xs text-gray-500">Guided by experienced social pioneers, development leaders, and community trustees</p>
          </div>

          {/* Founders Card */}
          <div className="bg-gradient-to-r from-emerald-900 to-rlhp-darkgreen text-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <Users className="text-rlhp-orange" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold">RLHP Founders</h3>
                <p className="text-xs text-rlhp-lightgreen">Pioneered grassroots development in Mysuru since 1983</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10">
              <div className="bg-white/10 p-5 rounded-2xl flex items-center space-x-4 hover:bg-white/15 transition-all group">
                <div 
                  className="w-32 sm:w-36 h-40 sm:h-48 rounded-2xl overflow-hidden border-2 border-rlhp-orange shrink-0 bg-slate-900/60 p-1 shadow-lg group-hover:scale-105 transition-all relative cursor-pointer flex items-center justify-center"
                  onClick={() => setSelectedPhoto({
                    src: `${import.meta.env.BASE_URL}images/team/joy_maliekal.jpg?v=20260925`,
                    name: "Mr. Joy Maliekal",
                    title: "Founder, RLHP"
                  })}
                  title="Click to zoom photo"
                >
                  <img 
                    src={`${import.meta.env.BASE_URL}images/team/joy_maliekal.jpg?v=20260925`} 
                    alt="Mr. Joy Maliekal - Founder, RLHP" 
                    className="w-full h-full object-contain rounded-xl filter contrast-[1.04] brightness-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                    <ZoomIn className="text-white" size={20} />
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-rlhp-orange bg-white/10 px-2.5 py-0.5 rounded-full">
                    Founder
                  </span>
                  <h4 className="font-extrabold text-lg text-white mt-1">Mr. Joy Maliekal</h4>
                  <p className="text-xs text-rlhp-lightgreen font-medium">Founder & Visionary, RLHP</p>
                </div>
              </div>

              <div className="bg-white/10 p-5 rounded-2xl flex items-center space-x-4 hover:bg-white/15 transition-all group">
                <div 
                  className="w-32 sm:w-36 h-40 sm:h-48 rounded-2xl overflow-hidden border-2 border-rlhp-orange shrink-0 bg-slate-900/60 p-1 shadow-lg group-hover:scale-105 transition-all relative cursor-pointer flex items-center justify-center"
                  onClick={() => setSelectedPhoto({
                    src: `${import.meta.env.BASE_URL}images/team/philomena_joy.jpg?v=20260925`,
                    name: "Mrs. Philomena Joy",
                    title: "Founder, RLHP"
                  })}
                  title="Click to zoom photo"
                >
                  <img 
                    src={`${import.meta.env.BASE_URL}images/team/philomena_joy.jpg?v=20260925`} 
                    alt="Mrs. Philomena Joy - Founder, RLHP" 
                    className="w-full h-full object-contain rounded-xl filter contrast-[1.04] brightness-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                    <ZoomIn className="text-white" size={20} />
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-rlhp-orange bg-white/10 px-2.5 py-0.5 rounded-full">
                    Founder
                  </span>
                  <h4 className="font-extrabold text-lg text-white mt-1">Mrs. Philomena Joy</h4>
                  <p className="text-xs text-rlhp-lightgreen font-medium">Founder & Visionary, RLHP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Office Bearers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* President */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center space-y-4 hover:border-rlhp-green transition-all group flex flex-col items-center">
              <div 
                className="w-36 sm:w-40 h-44 sm:h-52 rounded-2xl overflow-hidden border-2 border-rlhp-green mx-auto shadow-md group-hover:scale-105 transition-all relative cursor-pointer bg-gray-100 p-1 flex items-center justify-center"
                onClick={() => setSelectedPhoto({
                  src: `${import.meta.env.BASE_URL}images/team/gita_mithra.jpg?v=20260925`,
                  name: "Mrs. Gita Mitra",
                  title: "President, RLHP Board"
                })}
                title="Click to zoom photo"
              >
                <img 
                  src={`${import.meta.env.BASE_URL}images/team/gita_mithra.jpg?v=20260925`} 
                  alt="Mrs. Gita Mitra - President, RLHP" 
                  className="w-full h-full object-contain rounded-xl filter contrast-[1.04] brightness-[1.02]"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                  <ZoomIn className="text-white" size={22} />
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rlhp-orange bg-orange-50 px-2.5 py-0.5 rounded-full">
                  President
                </span>
                <h3 className="text-lg font-extrabold text-gray-900 mt-1.5">Mrs. Gita Mitra</h3>
                <p className="text-xs text-gray-500 font-medium mt-0.5">President, RLHP Board</p>
              </div>
            </div>

            {/* Secretary / Director */}
            <div className="bg-white p-6 rounded-2xl border-2 border-rlhp-green shadow-md text-center space-y-4 relative group flex flex-col items-center">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rlhp-green text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full shadow-xs uppercase tracking-wider">
                Secretary & Director
              </span>
              <div 
                className="w-36 sm:w-40 h-44 sm:h-52 rounded-2xl overflow-hidden border-2 border-rlhp-green mx-auto shadow-md group-hover:scale-105 transition-all mt-1 relative cursor-pointer bg-gray-100 p-1 flex items-center justify-center"
                onClick={() => setSelectedPhoto({
                  src: `${import.meta.env.BASE_URL}images/team/jose_vk.jpg?v=20260925`,
                  name: "Mr. Jose V.K.",
                  title: "Secretary & Director, RLHP"
                })}
                title="Click to zoom photo"
              >
                <img 
                  src={`${import.meta.env.BASE_URL}images/team/jose_vk.jpg?v=20260925`} 
                  alt="Mr. Jose V.K. - Secretary & Director, RLHP" 
                  className="w-full h-full object-contain rounded-xl filter contrast-[1.04] brightness-[1.02]"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                  <ZoomIn className="text-white" size={22} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-rlhp-darkgreen mt-1">Mr. Jose V.K.</h3>
                <p className="text-xs text-rlhp-green font-bold mt-0.5">Secretary & Director</p>
                <p className="text-[11px] text-gray-600 mt-1 leading-snug">Leading RLHP's 42+ year legacy in child development, women sanghas & rural health.</p>
              </div>
            </div>

            {/* Treasurer */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center space-y-4 hover:border-rlhp-green transition-all group flex flex-col items-center">
              <div 
                className="w-36 sm:w-40 h-44 sm:h-52 rounded-2xl overflow-hidden border-2 border-rlhp-green mx-auto shadow-md group-hover:scale-105 transition-all relative cursor-pointer bg-gray-100 p-1 flex items-center justify-center"
                onClick={() => setSelectedPhoto({
                  src: `${import.meta.env.BASE_URL}images/team/santhosh_kumar.jpg?v=20260925`,
                  name: "Mr. Santhosh Kumar",
                  title: "Treasurer, Financial Oversight"
                })}
                title="Click to zoom photo"
              >
                <img 
                  src={`${import.meta.env.BASE_URL}images/team/santhosh_kumar.jpg?v=20260925`} 
                  alt="Mr. Santhosh Kumar - Treasurer, RLHP" 
                  className="w-full h-full object-contain rounded-xl filter contrast-[1.04] brightness-[1.02]"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                  <ZoomIn className="text-white" size={22} />
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                  Treasurer
                </span>
                <h3 className="text-lg font-extrabold text-gray-900 mt-1.5">Mr. Santhosh Kumar</h3>
                <p className="text-xs text-gray-500 font-medium mt-0.5">Treasurer, Financial Oversight</p>
              </div>
            </div>
          </div>

          {/* Additional Board Members List - Executive Portrait Cards */}
          <div className="bg-gradient-to-b from-gray-50 to-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
            <div className="flex items-center space-x-3 border-b border-gray-200 pb-4">
              <div className="p-2 bg-rlhp-green/10 rounded-lg">
                <Shield className="text-rlhp-green" size={22} />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-gray-900 uppercase tracking-wider">Governing Board Members</h4>
                <p className="text-xs text-gray-500 font-medium">Distinguished trustees guiding RLHP's mission, ethics & governance</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {orgDetails.boardMembers
                .filter(member => !['President', 'Secretary & Director', 'Treasurer'].includes(member.designation))
                .map((member, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs hover:shadow-md hover:border-rlhp-green transition-all duration-300 text-center space-y-4 group flex flex-col items-center">
                    {member.image ? (
                      <div 
                        className="w-36 sm:w-40 h-44 sm:h-52 rounded-2xl overflow-hidden border-2 border-rlhp-green/40 group-hover:border-rlhp-green shrink-0 shadow-md bg-gray-100 p-1 group-hover:scale-105 transition-all duration-300 relative cursor-pointer flex items-center justify-center"
                        onClick={() => setSelectedPhoto({
                          src: member.image.startsWith('/') ? `${import.meta.env.BASE_URL}${member.image.slice(1)}?v=20260925` : `${member.image}?v=20260925`,
                          name: member.name,
                          title: `${member.designation}, RLHP Board`
                        })}
                        title="Click to view full photo in HD"
                      >
                        <img 
                          src={member.image.startsWith('/') ? `${import.meta.env.BASE_URL}${member.image.slice(1)}?v=20260925` : `${member.image}?v=20260925`} 
                          alt={`${member.name} - ${member.designation}`}
                          className="w-full h-full object-contain rounded-xl filter contrast-[1.04] brightness-[1.02]"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                          <ZoomIn className="text-white" size={22} />
                        </div>
                      </div>
                    ) : (
                      <div className="w-36 sm:w-40 h-44 sm:h-52 rounded-2xl bg-rlhp-lightgreen text-rlhp-green flex items-center justify-center font-extrabold text-xl shrink-0 border-2 border-rlhp-green/30 shadow-inner">
                        {idx + 1}
                      </div>
                    )}
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rlhp-green bg-rlhp-lightgreen px-2.5 py-0.5 rounded-full inline-block">
                        {member.role || member.designation}
                      </span>
                      <h5 className="font-extrabold text-base text-gray-900 group-hover:text-rlhp-darkgreen transition-colors">{member.name}</h5>
                      <p className="text-xs text-gray-500 font-medium">Board Member, RLHP</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Strategic Development Approaches Section */}
        <section id="approaches" className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div className="max-w-xl mx-auto text-center space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-rlhp-darkgreen">Our 6 Strategic Development Approaches</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Integrated methodologies ensuring child welfare, downward accountability, and grassroots social mobilization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {orgDetails.approaches.map((app, idx) => (
              <div key={idx} className="bg-gray-50 p-5 rounded-xl border border-gray-200 space-y-2 hover:border-rlhp-green hover:shadow-xs transition-all">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-rlhp-lightgreen text-rlhp-green flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-xs text-gray-900">{app.title}</h4>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed pl-8">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Partners & Supporters Section */}
        <section id="partners" className="bg-rlhp-lightgreen/30 p-8 rounded-2xl border border-rlhp-green/20 space-y-6">
          <div className="max-w-xl mx-auto text-center space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-rlhp-darkgreen">Our Institutional & Funding Partners</h3>
            <p className="text-xs text-gray-600">
              Generously collaborating with RLHP to champion child rights, maternal health, and grassroots empowerment.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {fundingPartners.map((partner, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs text-center flex flex-col items-center justify-between min-h-[110px] hover:border-rlhp-green transition-all group">
                <div className="h-14 flex items-center justify-center w-full">
                  {partner.logoImage ? (
                    <img 
                      src={`${import.meta.env.BASE_URL}${partner.logoImage.replace(/^\//, '')}`} 
                      alt={`${partner.name} Logo`}
                      className="max-h-12 max-w-full object-contain transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <span className="font-extrabold text-xs text-gray-900 group-hover:text-rlhp-darkgreen">{partner.logoText}</span>
                  )}
                </div>
                {partner.project && (
                  <span className="text-[10px] text-gray-500 line-clamp-2 font-medium mt-1">{partner.project}</span>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* High Resolution Photo Preview Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300 animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-md w-full p-6 text-center space-y-4 relative border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
              title="Close modal"
            >
              <X size={20} />
            </button>

            <div className="w-64 sm:w-72 h-80 sm:h-96 mx-auto rounded-2xl overflow-hidden border-4 border-rlhp-green shadow-xl bg-gray-50 mt-2">
              <img 
                src={selectedPhoto.src} 
                alt={selectedPhoto.name}
                className="w-full h-full object-cover object-[center_15%] filter contrast-[1.04] brightness-[1.02]"
              />
            </div>

            <div className="space-y-1 pt-2">
              <h3 className="text-xl font-extrabold text-gray-900">{selectedPhoto.name}</h3>
              <p className="text-xs text-rlhp-green font-semibold">{selectedPhoto.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
