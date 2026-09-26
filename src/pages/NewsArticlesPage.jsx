import React, { useState } from 'react';
import { newsArticlesData, eventsData } from '../data/rlhpData';
import { Calendar, Search, Filter, ChevronRight, User, FileText, BookOpen, Award, Landmark, Image, Video, Sparkles } from 'lucide-react';
import { getImageUrl } from '../utils/imageUtils';

export default function NewsArticlesPage({ onSelectNews, setCurrentPage, onNavClick }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [eventTab, setEventTab] = useState('All');

  const filteredNews = newsArticlesData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = categoryFilter === 'All' || item.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  const filteredEvents = eventsData.filter(evt => {
    if (eventTab === 'All') return true;
    if (eventTab === 'Upcoming') return evt.type === 'Upcoming';
    if (eventTab === 'Past') return evt.type === 'Past Event';
    return true;
  });

  return (
    <div className="space-y-12 font-sans pb-12">
      <section className="bg-rlhp-darkgreen text-white py-16 px-4 sm:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold">News, Articles & Events</h1>
          <p className="text-xs sm:text-sm text-rlhp-lightgreen max-w-xl mx-auto font-medium">
            Stay informed on RLHP field activities, announcements, and upcoming community drives
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Resources & Media Hub Cards Grid - Matching Reference Mockup */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div className="flex items-center space-x-2">
              <Sparkles className="text-rlhp-green" size={20} />
              <h2 className="text-sm font-bold text-rlhp-darkgreen uppercase tracking-wider">Resources & Media Hub</h2>
            </div>
            <span className="text-[11px] bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full">Downloads & Audits</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <button 
              onClick={() => { setCategoryFilter('All'); document.getElementById('news-articles-grid')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="p-3.5 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-200 hover:border-rlhp-green/40 rounded-xl text-left transition-all group flex items-start space-x-3 cursor-pointer shadow-2xs"
            >
              <div className="w-9 h-9 rounded-lg bg-white text-rlhp-green flex items-center justify-center shrink-0 shadow-xs group-hover:bg-rlhp-green group-hover:text-white transition-colors">
                <FileText size={18} />
              </div>
              <div>
                <h4 className="font-bold text-xs text-gray-900 group-hover:text-rlhp-darkgreen">News & Articles</h4>
                <p className="text-[10px] text-gray-500 mt-0.5">Field reports & press</p>
              </div>
            </button>

            <button 
              onClick={() => onNavClick ? onNavClick('stories') : setCurrentPage?.('stories')}
              className="p-3.5 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-200 hover:border-rlhp-orange/40 rounded-xl text-left transition-all group flex items-start space-x-3 cursor-pointer shadow-2xs"
            >
              <div className="w-9 h-9 rounded-lg bg-white text-rlhp-orange flex items-center justify-center shrink-0 shadow-xs group-hover:bg-rlhp-orange group-hover:text-white transition-colors">
                <BookOpen size={18} />
              </div>
              <div>
                <h4 className="font-bold text-xs text-gray-900 group-hover:text-rlhp-darkgreen">Success Stories</h4>
                <p className="text-[10px] text-gray-500 mt-0.5">Community case studies</p>
              </div>
            </button>

            <button 
              onClick={() => onNavClick ? onNavClick('awards') : setCurrentPage?.('awards')}
              className="p-3.5 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-200 hover:border-amber-400 rounded-xl text-left transition-all group flex items-start space-x-3 cursor-pointer shadow-2xs"
            >
              <div className="w-9 h-9 rounded-lg bg-white text-amber-500 flex items-center justify-center shrink-0 shadow-xs group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Award size={18} />
              </div>
              <div>
                <h4 className="font-bold text-xs text-gray-900 group-hover:text-rlhp-darkgreen">Awards & Honors</h4>
                <p className="text-[10px] text-gray-500 mt-0.5">State recognitions</p>
              </div>
            </button>

            <button 
              onClick={() => onNavClick ? onNavClick('publications') : setCurrentPage?.('publications')}
              className="p-3.5 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-200 hover:border-blue-400 rounded-xl text-left transition-all group flex items-start space-x-3 cursor-pointer shadow-2xs"
            >
              <div className="w-9 h-9 rounded-lg bg-white text-blue-600 flex items-center justify-center shrink-0 shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <FileText size={18} />
              </div>
              <div>
                <h4 className="font-bold text-xs text-gray-900 group-hover:text-rlhp-darkgreen">Publications</h4>
                <p className="text-[10px] text-gray-500 mt-0.5">IEP handbooks & videos</p>
              </div>
            </button>

            <button 
              onClick={() => onNavClick ? onNavClick('financials') : setCurrentPage?.('financials')}
              className="p-3.5 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-200 hover:border-rlhp-green/40 rounded-xl text-left transition-all group flex items-start space-x-3 cursor-pointer shadow-2xs"
            >
              <div className="w-9 h-9 rounded-lg bg-white text-rlhp-green flex items-center justify-center shrink-0 shadow-xs group-hover:bg-rlhp-green group-hover:text-white transition-colors">
                <Landmark size={18} />
              </div>
              <div>
                <h4 className="font-bold text-xs text-rlhp-green group-hover:text-rlhp-darkgreen">Audit Reports (3 Yrs)</h4>
                <p className="text-[10px] text-gray-500 mt-0.5">FCRA & financial transparency</p>
              </div>
            </button>

            <button 
              onClick={() => onNavClick ? onNavClick('gallery') : setCurrentPage?.('gallery')}
              className="p-3.5 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-200 hover:border-pink-400 rounded-xl text-left transition-all group flex items-start space-x-3 cursor-pointer shadow-2xs"
            >
              <div className="w-9 h-9 rounded-lg bg-white text-pink-600 flex items-center justify-center shrink-0 shadow-xs group-hover:bg-pink-600 group-hover:text-white transition-colors">
                <Image size={18} />
              </div>
              <div>
                <h4 className="font-bold text-xs text-gray-900 group-hover:text-rlhp-darkgreen">Photo Gallery</h4>
                <p className="text-[10px] text-gray-500 mt-0.5">30+ Field photo albums</p>
              </div>
            </button>

            <button 
              onClick={() => onNavClick ? onNavClick('video-gallery') : setCurrentPage?.('video-gallery')}
              className="p-3.5 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-200 hover:border-red-400 rounded-xl text-left transition-all group flex items-start space-x-3 cursor-pointer shadow-2xs"
            >
              <div className="w-9 h-9 rounded-lg bg-white text-red-600 flex items-center justify-center shrink-0 shadow-xs group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Video size={18} />
              </div>
              <div>
                <h4 className="font-bold text-xs text-red-700 group-hover:text-rlhp-darkgreen">Video Gallery</h4>
                <p className="text-[10px] text-gray-500 mt-0.5">17 Official YouTube videos</p>
              </div>
            </button>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search news & articles..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-rlhp-green focus:outline-none"
            />
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto overflow-x-auto">
            <span className="text-xs text-gray-500 font-semibold shrink-0">Filter:</span>
            {['All', 'News', 'Article'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors shrink-0 ${categoryFilter === cat ? 'bg-rlhp-green text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Cards Grid */}
        <div id="news-articles-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredNews.map((item) => (
            <div 
              key={item.id}
              onClick={() => onSelectNews(item)}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-2xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img src={getImageUrl(item.image)} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <span className="absolute top-3 left-3 bg-rlhp-green text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    {item.category}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center text-[11px] text-gray-400 space-x-3">
                    <span className="flex items-center space-x-1"><Calendar size={12} /><span>{item.date}</span></span>
                    <span className="flex items-center space-x-1"><User size={12} /><span>{item.author}</span></span>
                  </div>
                  <h3 className="font-bold text-sm text-gray-900 group-hover:text-rlhp-green transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 text-xs font-semibold text-rlhp-orange flex items-center">
                <span>Read Full Story</span>
                <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Events Section - Matching right screenshot in reference mockup */}
        <section className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-rlhp-darkgreen">Upcoming & Past Events</h2>
              <p className="text-xs text-gray-500">Community workshops, health camps, and environmental drives</p>
            </div>

            {/* Event Filter Tabs matching right image */}
            <div className="flex items-center space-x-2 bg-white p-1 rounded-xl border border-gray-200">
              {['All', 'Upcoming', 'Past'].map((t) => (
                <button
                  key={t}
                  onClick={() => setEventTab(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${eventTab === t ? 'bg-rlhp-green text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  {t === 'All' ? 'All Events' : `${t} Events`}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredEvents.map((evt) => (
              <div key={evt.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-rlhp-green transition-colors">
                <div className="flex items-center space-x-4">
                  {/* Date Badge Box */}
                  <div className="w-16 h-16 rounded-xl bg-rlhp-lightgreen text-rlhp-darkgreen flex flex-col items-center justify-center shrink-0 border border-rlhp-green/20">
                    <span className="text-xl font-black leading-none">{evt.date.split(' ')[0]}</span>
                    <span className="text-[10px] font-bold uppercase mt-1 text-rlhp-green">{evt.date.split(' ')[1]}</span>
                    <span className="text-[9px] text-gray-400">{evt.date.split(' ')[2]}</span>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-bold text-sm text-gray-900">{evt.title}</h4>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${evt.type === 'Upcoming' ? 'bg-green-100 text-rlhp-green' : 'bg-orange-100 text-rlhp-orange'}`}>
                        {evt.type}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{evt.description}</p>
                    <div className="text-[11px] text-gray-400 font-medium mt-1">📍 {evt.location}</div>
                  </div>
                </div>

                <button 
                  onClick={() => alert(`Registration details for: ${evt.title}`)}
                  className="bg-gray-100 hover:bg-rlhp-green hover:text-white text-gray-800 font-semibold text-xs px-4 py-2 rounded-lg transition-colors shrink-0"
                >
                  Event Details
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
