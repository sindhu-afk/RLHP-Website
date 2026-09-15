import React from 'react';
import { orgDetails } from '../data/rlhpData';
import { Target, Compass, Flag, Users, Shield, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AboutUs({ setCurrentPage }) {
  return (
    <div className="space-y-12 font-sans pb-12">
      {/* Top Page Header Banner */}
      <section className="relative bg-rlhp-darkgreen text-white py-16 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#4CAF50_1px,transparent_1px)] [background-size:16px_16px]"></div>
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
              Rural Literacy & Health Programme (RLHP), Mysore is a voluntary organization working since 1983 for the empowerment of children, women and marginalized communities in rural and urban areas across Karnataka.
            </p>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              We believe in community participation, inclusiveness and sustainable development. Over the last 42+ years, RLHP has transformed thousands of lives through child rights advocacy, residential shelter homes, learning disability remediation, women sanghas, and last-mile government scheme facilitation.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-rlhp-lightgreen/50 rounded-xl border border-rlhp-green/20">
                <div className="text-2xl font-bold text-rlhp-green">42+ Years</div>
                <div className="text-xs text-gray-600 font-medium">Unbroken Ground Presence</div>
              </div>
              <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
                <div className="text-2xl font-bold text-rlhp-orange">8 Districts</div>
                <div className="text-xs text-gray-600 font-medium">Urban & Rural Coverage</div>
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
                <p className="text-xs font-semibold">Empowering the next generation through education & care.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission & Goal Cards - Exact UI matching middle image mockup */}
        <section id="vision-mission" className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-rlhp-darkgreen">Our Vision, Mission & Goal</h2>
            <p className="text-xs text-gray-500 mt-1">The foundational pillars driving our community work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Vision Card */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-2xs text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-rlhp-lightgreen text-rlhp-green flex items-center justify-center mx-auto">
                <Compass size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Vision</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                To create a just, free, equitable and sustainable society.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-2xs text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-orange-100 text-rlhp-orange flex items-center justify-center mx-auto">
                <Target size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Mission</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                To empower children, women and deprived sections in urban, rural and in areas affected by natural disasters and climate change to respond to the challenges of growing poverty and rights violations through collective and affirmative action leading to equitable, sustainable development and self-reliance.
              </p>
            </div>

            {/* Goal Card - Marked (Need to Update) */}
            <div className="bg-white p-8 rounded-2xl border border-dashed border-gray-300 shadow-2xs text-center space-y-4 hover:shadow-md transition-shadow relative">
              <span className="absolute top-3 right-3 text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full flex items-center space-x-1">
                <AlertCircle size={10} />
                <span>(Need to Update)</span>
              </span>
              <div className="w-16 h-16 rounded-full bg-green-50 text-rlhp-green flex items-center justify-center mx-auto">
                <Flag size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Goal</h3>
              <p className="text-xs text-gray-500 italic leading-relaxed">
                The detailed strategic goal statement for the upcoming cycle will be updated upon finalization by the RLHP board.
              </p>
            </div>
          </div>
        </section>

        {/* RLHP Board & Governance Section */}
        <section id="governance" className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-rlhp-orange uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
              Leadership & Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-rlhp-darkgreen mt-2">RLHP Board of Directors</h2>
            <p className="text-xs text-gray-500 mt-1">Guided by experienced social leaders, development experts, and community trustees</p>
          </div>

          {/* Key Executive Office Bearers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* President */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs text-center space-y-3 hover:border-rlhp-green transition-all">
              <div className="w-16 h-16 rounded-full bg-rlhp-lightgreen text-rlhp-green flex items-center justify-center mx-auto shadow-sm">
                <Users size={32} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rlhp-orange bg-orange-50 px-2 py-0.5 rounded">
                  President
                </span>
                <h3 className="text-lg font-extrabold text-gray-900 mt-1">Mr. Koshy Mathew</h3>
                <p className="text-xs text-gray-500 mt-0.5">President, RLHP Board</p>
              </div>
            </div>

            {/* Secretary / Director */}
            <div className="bg-white p-6 rounded-2xl border-2 border-rlhp-green shadow-md text-center space-y-3 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rlhp-green text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full shadow-xs uppercase tracking-wider">
                Founder & Executive Secretary
              </span>
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-rlhp-darkgreen flex items-center justify-center mx-auto shadow-sm mt-1">
                <Users size={32} />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-rlhp-darkgreen">Mr. Jose V.K.</h3>
                <p className="text-xs text-rlhp-green font-bold mt-0.5">Secretary & Director</p>
                <p className="text-[11px] text-gray-600 mt-1 leading-snug">Pioneered RLHP's 42+ year legacy in child development, women sanghas & rural health.</p>
              </div>
            </div>

            {/* Treasurer */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs text-center space-y-3 hover:border-rlhp-green transition-all">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto shadow-sm">
                <Shield size={32} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  Treasurer
                </span>
                <h3 className="text-lg font-extrabold text-gray-900 mt-1">Mr. Santhosh Kumar</h3>
                <p className="text-xs text-gray-500 mt-0.5">Treasurer, Financial Oversight</p>
              </div>
            </div>
          </div>

          {/* Other Board Members Grid */}
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-4">
            <h4 className="font-bold text-xs text-gray-700 uppercase tracking-wider text-center">Distinguished Board Trustees</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl border border-gray-200 text-center space-y-1">
                <h5 className="font-bold text-xs text-gray-900">Ms. Rosy Sujatha K.</h5>
                <span className="text-[10px] text-gray-500">Board Member</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200 text-center space-y-1">
                <h5 className="font-bold text-xs text-gray-900">Mr. Prasanna N.</h5>
                <span className="text-[10px] text-gray-500">Board Member</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200 text-center space-y-1">
                <h5 className="font-bold text-xs text-gray-900">Mrs. Geetha Mitra</h5>
                <span className="text-[10px] text-gray-500">Board Member</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200 text-center space-y-1">
                <h5 className="font-bold text-xs text-gray-900">Mrs. Elizabeth John</h5>
                <span className="text-[10px] text-gray-500">Board Member</span>
              </div>
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
      </div>
    </div>
  );
}
