import React, { useState, useEffect, useRef } from 'react';
import { orgDetails } from '../data/rlhpData';
import { 
  Phone, Mail, Heart, Menu, X, ChevronDown, 
  MapPin, Lock, Info, BookOpen, Award, FileText, 
  Image as ImageIcon, Landmark, ShieldCheck, Baby,
  GraduationCap, Users, Activity, Building2, ShieldAlert,
  ArrowRight, Sparkles, CheckCircle2, Video
} from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, onNavClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null); // 'about' | 'programmes' | 'resources' | null
  const [activeDropdown, setActiveDropdown] = useState(null); // 'about' | 'programmes' | 'resources' | null
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const prevScrollY = useRef(0);

  // Scroll listener for auto-hiding navbar and reducing height on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY);

      // Check if scrolled past top section to compact header height
      if (currentScrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide header when scrolling down past 80px, show when scrolling up
      if (currentScrollY > 80 && currentScrollY > prevScrollY.current + 5) {
        setIsVisible(false);
      } else if (currentScrollY < prevScrollY.current - 5 || currentScrollY <= 80) {
        setIsVisible(true);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close desktop dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (pageId, optionId = null) => {
    if (onNavClick) {
      onNavClick(pageId, optionId);
    } else {
      setCurrentPage(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
    setMobileDropdown(null);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name, e) => {
    if (e) e.stopPropagation();
    setActiveDropdown(prev => prev === name ? null : name);
  };

  const toggleMobileDropdown = (name, e) => {
    if (e) e.stopPropagation();
    setMobileDropdown(prev => prev === name ? null : name);
  };

  const shouldShowHeader = isVisible || mobileMenuOpen;

  return (
    <header 
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm font-sans border-b border-gray-100 transition-all duration-300 ease-in-out ${
        shouldShowHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Top Utility Announcement Bar */}
      <div className={`bg-rlhp-darkgreen text-white font-medium px-4 sm:px-6 lg:px-8 border-b border-white/10 transition-all duration-300 ${
        isScrolled ? 'py-1 text-[10px]' : 'py-1.5 text-[11px]'
      }`}>
        <div className="max-w-[1440px] mx-auto w-full flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-5 text-gray-200">
            <div className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <Phone size={isScrolled ? 11 : 12} className="text-rlhp-orange" />
              <span>{orgDetails.phones[0]}</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1.5 hover:text-white transition-colors">
              <Mail size={isScrolled ? 11 : 12} className="text-rlhp-orange" />
              <span>{orgDetails.emails[0]}</span>
            </div>
            <div className="hidden md:flex items-center space-x-1.5 text-gray-300">
              <MapPin size={isScrolled ? 11 : 12} className="text-rlhp-orange" />
              <span>{orgDetails.location}</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-gray-300">
            <span className={`inline-flex items-center space-x-1 text-rlhp-lightgreen font-semibold ${isScrolled ? 'text-[10px]' : 'text-[11px]'}`}>
              <ShieldCheck size={isScrolled ? 11 : 12} className="text-rlhp-accentgreen" />
              <span>FCRA & 80G Tax Certified NGO</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar Header */}
      <div className={`max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 transition-all duration-300 ${
        isScrolled ? 'py-2 lg:py-2.5' : 'py-2.5 lg:py-3.5'
      }`}>
        {/* Official Brand Emblem & Name */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center space-x-3 text-left group focus:outline-none flex-1 min-w-0 cursor-pointer"
        >
          <img 
            src={`${import.meta.env.BASE_URL}rlhp-logo.png`} 
            alt="RLHP Logo" 
            className={`object-contain rounded-full drop-shadow-md group-hover:scale-105 transition-all duration-300 shrink-0 ${
              isScrolled 
                ? 'w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14' 
                : 'w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16'
            }`} 
          />
          <div className="min-w-0">
            <div className={`font-extrabold text-rlhp-darkgreen tracking-tight leading-tight group-hover:text-rlhp-green transition-all duration-300 truncate ${
              isScrolled ? 'text-sm sm:text-base lg:text-lg' : 'text-base sm:text-lg lg:text-xl'
            }`}>
              Rural Literacy & Health Programme
            </div>
            <div className={`font-bold text-rlhp-orange truncate transition-all duration-300 ${
              isScrolled ? 'text-[10px] sm:text-xs mt-0' : 'text-xs sm:text-sm mt-0.5'
            }`}>
              (RLHP), Mysuru <span className="text-gray-400 font-normal">| Est. 1983</span>
            </div>
          </div>
        </button>

        {/* Desktop & Laptop Navigation Links */}
        <nav ref={navRef} className="hidden lg:flex flex-none items-center justify-end space-x-0.5 xl:space-x-1 font-semibold text-xs xl:text-[13px] 2xl:text-sm text-gray-700">
          {/* Home */}
          <button 
            onClick={() => handleNavClick('home')}
            className={`relative py-2.5 px-2 xl:px-2.5 2xl:px-3 whitespace-nowrap inline-flex items-center transition-colors cursor-pointer group ${currentPage === 'home' ? 'text-rlhp-darkgreen font-extrabold' : 'text-gray-700 hover:text-rlhp-green'}`}
          >
            <span>Home</span>
            <span className={`absolute bottom-0 left-1 right-1 h-0.5 rounded-full transition-all duration-200 ${currentPage === 'home' ? 'bg-rlhp-green opacity-100' : 'bg-rlhp-green opacity-0 group-hover:opacity-100'}`}></span>
          </button>

          {/* About Us Dropdown */}
          <div 
            className="relative flex items-center"
            onMouseEnter={() => setActiveDropdown('about')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              type="button"
              onClick={() => handleNavClick('about')}
              className={`relative py-2 px-2 xl:px-2.5 whitespace-nowrap inline-flex items-center space-x-1 transition-colors cursor-pointer group ${currentPage === 'about' || activeDropdown === 'about' ? 'text-rlhp-darkgreen font-extrabold' : 'text-gray-700 hover:text-rlhp-green'}`}
            >
              <span>About Us</span>
              <ChevronDown size={12} className={`transition-transform duration-200 shrink-0 ${activeDropdown === 'about' ? 'rotate-180 text-rlhp-green' : 'text-gray-400'}`} />
              <span className={`absolute bottom-0 left-1 right-1 h-0.5 rounded-full transition-all duration-200 ${currentPage === 'about' || activeDropdown === 'about' ? 'bg-rlhp-green opacity-100' : 'bg-rlhp-green opacity-0 group-hover:opacity-100'}`}></span>
            </button>

            {activeDropdown === 'about' && (
              <div className="absolute top-full left-0 pt-2 w-[440px] max-w-[calc(100vw-2rem)] z-50">
                <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-200 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-3 px-1">
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleNavClick('about'); }} 
                      className="text-xs font-bold text-rlhp-darkgreen uppercase tracking-wider hover:text-rlhp-green flex items-center space-x-1 cursor-pointer"
                    >
                      <span>About Organization</span>
                      <ArrowRight size={12} />
                    </button>
                    <span className="text-[10px] bg-rlhp-lightgreen text-rlhp-green font-bold px-2 py-0.5 rounded-full">Established 1983</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleNavClick('about', 'who-we-are'); }}
                      className="p-3 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-100 hover:border-rlhp-green/30 rounded-xl text-left transition-all group flex items-start space-x-2.5 cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white text-rlhp-green flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-rlhp-green group-hover:text-white transition-colors">
                        <Info size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-gray-900 group-hover:text-rlhp-darkgreen">Who We Are</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">42+ years NGO legacy</p>
                      </div>
                    </button>

                    <button 
                      onClick={(e) => { e.stopPropagation(); handleNavClick('about', 'vision-mission'); }}
                      className="p-3 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-100 hover:border-rlhp-orange/30 rounded-xl text-left transition-all group flex items-start space-x-2.5 cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white text-rlhp-orange flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-rlhp-orange group-hover:text-white transition-colors">
                        <Sparkles size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-gray-900 group-hover:text-rlhp-darkgreen">Vision & Mission</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">Core principles & goal</p>
                      </div>
                    </button>

                    <button 
                      onClick={(e) => { e.stopPropagation(); handleNavClick('about', 'governance'); }}
                      className="p-3 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-100 hover:border-rlhp-green/30 rounded-xl text-left transition-all group flex items-start space-x-2.5 cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white text-blue-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Users size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-gray-900 group-hover:text-rlhp-darkgreen">Founder & Board</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">Leadership & directors</p>
                      </div>
                    </button>

                    <button 
                      onClick={(e) => { e.stopPropagation(); handleNavClick('about', 'approaches'); }}
                      className="p-3 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-100 hover:border-rlhp-green/30 rounded-xl text-left transition-all group flex items-start space-x-2.5 cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white text-purple-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <CheckCircle2 size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-gray-900 group-hover:text-rlhp-darkgreen">Our Approaches</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">Community strategies</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Our Impact */}
          <button 
            onClick={() => handleNavClick('impact')}
            className={`relative py-2 px-2 xl:px-2.5 whitespace-nowrap inline-flex items-center transition-colors cursor-pointer group ${currentPage === 'impact' ? 'text-rlhp-darkgreen font-extrabold' : 'text-gray-700 hover:text-rlhp-green'}`}
          >
            <span>Our Impact</span>
            <span className={`absolute bottom-0 left-1 right-1 h-0.5 rounded-full transition-all duration-200 ${currentPage === 'impact' ? 'bg-rlhp-green opacity-100' : 'bg-rlhp-green opacity-0 group-hover:opacity-100'}`}></span>
          </button>

          {/* Our Programmes Dropdown - Clickable Header & Direct Programme Navigation */}
          <div 
            className="relative flex items-center"
            onMouseEnter={() => setActiveDropdown('programmes')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              type="button"
              onClick={() => handleNavClick('programmes')}
              className={`relative py-2 px-2 xl:px-2.5 whitespace-nowrap inline-flex items-center space-x-1 transition-colors cursor-pointer group ${currentPage === 'programmes' || activeDropdown === 'programmes' ? 'text-rlhp-darkgreen font-extrabold' : 'text-gray-700 hover:text-rlhp-green'}`}
            >
              <span>Our Programmes</span>
              <ChevronDown size={12} className={`transition-transform duration-200 shrink-0 ${activeDropdown === 'programmes' ? 'rotate-180 text-rlhp-green' : 'text-gray-400'}`} />
              <span className={`absolute bottom-0 left-1 right-1 h-0.5 rounded-full transition-all duration-200 ${currentPage === 'programmes' || activeDropdown === 'programmes' ? 'bg-rlhp-green opacity-100' : 'bg-rlhp-green opacity-0 group-hover:opacity-100'}`}></span>
            </button>

            {activeDropdown === 'programmes' && (
              <div className="absolute top-full left-0 pt-2 w-[580px] max-w-[calc(100vw-2rem)] z-50">
                <div className="bg-white rounded-2xl shadow-2xl p-5 border border-gray-200 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2.5 mb-3 px-1">
                    <span className="text-xs font-bold text-rlhp-darkgreen uppercase tracking-wider">RLHP Core Operational Domains</span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleNavClick('programmes'); }}
                      className="text-[11px] font-bold text-rlhp-orange hover:text-rlhp-darkorange flex items-center space-x-1 cursor-pointer"
                    >
                      <span>View All Programmes</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleNavClick('programmes', 'child-development'); }}
                      className="p-3 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-100 hover:border-rlhp-green/30 rounded-xl text-left transition-all group flex items-start space-x-3 cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white text-rlhp-green flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-rlhp-green group-hover:text-white transition-colors">
                        <Baby size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-gray-900 group-hover:text-rlhp-darkgreen">Child Development</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">AshaKirana & AshaBhavana shelters</p>
                      </div>
                    </button>

                    <button 
                      onClick={(e) => { e.stopPropagation(); handleNavClick('programmes', 'education'); }}
                      className="p-3 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-100 hover:border-rlhp-green/30 rounded-xl text-left transition-all group flex items-start space-x-3 cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white text-blue-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <GraduationCap size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-gray-900 group-hover:text-rlhp-darkgreen">Education & IEP</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">Learning disability support</p>
                      </div>
                    </button>

                    <button 
                      onClick={(e) => { e.stopPropagation(); handleNavClick('programmes', 'youth-empowerment'); }}
                      className="p-3 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-100 hover:border-rlhp-green/30 rounded-xl text-left transition-all group flex items-start space-x-3 cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white text-purple-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <Users size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-gray-900 group-hover:text-rlhp-darkgreen">Youth Empowerment</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">Vocational & life skills</p>
                      </div>
                    </button>

                    <button 
                      onClick={(e) => { e.stopPropagation(); handleNavClick('programmes', 'women-empowerment'); }}
                      className="p-3 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-100 hover:border-rlhp-green/30 rounded-xl text-left transition-all group flex items-start space-x-3 cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white text-pink-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-pink-600 group-hover:text-white transition-colors">
                        <Users size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-gray-900 group-hover:text-rlhp-darkgreen">Women Empowerment</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">DWANI & BELAKU sanghas</p>
                      </div>
                    </button>

                    <button 
                      onClick={(e) => { e.stopPropagation(); handleNavClick('programmes', 'health-sanitation'); }}
                      className="p-3 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-100 hover:border-rlhp-green/30 rounded-xl text-left transition-all group flex items-start space-x-3 cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white text-rlhp-orange flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-rlhp-orange group-hover:text-white transition-colors">
                        <Activity size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-gray-900 group-hover:text-rlhp-darkgreen">Health & Sanitation</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">Nutrition & maternal health</p>
                      </div>
                    </button>

                    <button 
                      onClick={(e) => { e.stopPropagation(); handleNavClick('programmes', 'government-schemes'); }}
                      className="p-3 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-100 hover:border-rlhp-green/30 rounded-xl text-left transition-all group flex items-start space-x-3 cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white text-teal-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-teal-600 group-hover:text-white transition-colors">
                        <Building2 size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-gray-900 group-hover:text-rlhp-darkgreen">Government Schemes</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">Last-mile benefit access</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* How You Can Be a Part of Us Nav Button */}
          <button 
            onClick={() => handleNavClick('part-of-us')}
            className={`relative py-2 px-2 xl:px-2.5 whitespace-nowrap inline-flex items-center transition-colors cursor-pointer group ${
              currentPage === 'part-of-us' 
                ? 'text-rlhp-orange font-extrabold' 
                : 'text-gray-700 hover:text-rlhp-orange'
            }`}
          >
            <span>How You Can Be a Part of Us</span>
            <span className={`absolute bottom-0 left-1 right-1 h-0.5 rounded-full transition-all duration-200 ${currentPage === 'part-of-us' ? 'bg-rlhp-orange opacity-100' : 'bg-rlhp-orange opacity-0 group-hover:opacity-100'}`}></span>
          </button>

          {/* Where We Work */}
          <button 
            onClick={() => handleNavClick('where-we-work')}
            className={`relative py-2 px-2 xl:px-2.5 whitespace-nowrap inline-flex items-center transition-colors cursor-pointer group ${currentPage === 'where-we-work' ? 'text-rlhp-darkgreen font-extrabold' : 'text-gray-700 hover:text-rlhp-green'}`}
          >
            <span>Where We Work</span>
            <span className={`absolute bottom-0 left-1 right-1 h-0.5 rounded-full transition-all duration-200 ${currentPage === 'where-we-work' ? 'bg-rlhp-green opacity-100' : 'bg-rlhp-green opacity-0 group-hover:opacity-100'}`}></span>
          </button>

          {/* Projects */}
          <button 
            onClick={() => handleNavClick('projects')}
            className={`relative py-2 px-2 xl:px-2.5 whitespace-nowrap inline-flex items-center transition-colors cursor-pointer group ${currentPage === 'projects' ? 'text-rlhp-darkgreen font-extrabold' : 'text-gray-700 hover:text-rlhp-green'}`}
          >
            <span>Projects</span>
            <span className={`absolute bottom-0 left-1 right-1 h-0.5 rounded-full transition-all duration-200 ${currentPage === 'projects' ? 'bg-rlhp-green opacity-100' : 'bg-rlhp-green opacity-0 group-hover:opacity-100'}`}></span>
          </button>

          {/* News, Articles & Events Dropdown - Clickable Header */}
          <div 
            className="relative flex items-center"
            onMouseEnter={() => setActiveDropdown('resources')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              type="button"
              onClick={() => handleNavClick('news')}
              className={`relative py-2 px-2 xl:px-2.5 whitespace-nowrap inline-flex items-center space-x-1 transition-colors cursor-pointer group ${['news', 'stories', 'publications', 'gallery', 'awards', 'financials', 'bank-details', 'video-gallery'].includes(currentPage) || activeDropdown === 'resources' ? 'text-rlhp-darkgreen font-extrabold' : 'text-gray-700 hover:text-rlhp-green'}`}
            >
              <span>News, Articles & Events</span>
              <ChevronDown size={12} className={`transition-transform duration-200 shrink-0 ${activeDropdown === 'resources' ? 'rotate-180 text-rlhp-green' : 'text-gray-400'}`} />
              <span className={`absolute bottom-0 left-1 right-1 h-0.5 rounded-full transition-all duration-200 ${['news', 'stories', 'publications', 'gallery', 'awards', 'financials', 'bank-details', 'video-gallery'].includes(currentPage) || activeDropdown === 'resources' ? 'bg-rlhp-green opacity-100' : 'bg-rlhp-green opacity-0 group-hover:opacity-100'}`}></span>
            </button>

            {activeDropdown === 'resources' && (
              <div className="absolute top-full right-0 pt-2 w-[480px] max-w-[calc(100vw-2rem)] z-50">
                <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-200 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-3 px-1">
                    <span className="text-xs font-bold text-rlhp-darkgreen uppercase tracking-wider">Resources & Media Hub</span>
                    <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full">Downloads & Audits</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleNavClick('news'); }}
                      className="p-3 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-100 hover:border-rlhp-green/30 rounded-xl text-left transition-all group flex items-start space-x-2.5 cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white text-rlhp-green flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-rlhp-green group-hover:text-white transition-colors">
                        <FileText size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-gray-900 group-hover:text-rlhp-darkgreen">News & Articles</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">Field reports & press</p>
                      </div>
                    </button>

                    <button 
                      onClick={(e) => { e.stopPropagation(); handleNavClick('stories'); }}
                      className="p-3 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-100 hover:border-rlhp-orange/30 rounded-xl text-left transition-all group flex items-start space-x-2.5 cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white text-rlhp-orange flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-rlhp-orange group-hover:text-white transition-colors">
                        <BookOpen size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-gray-900 group-hover:text-rlhp-darkgreen">Success Stories</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">Community case studies</p>
                      </div>
                    </button>

                    <button 
                      onClick={(e) => { e.stopPropagation(); handleNavClick('awards'); }}
                      className="p-3 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-100 hover:border-rlhp-green/30 rounded-xl text-left transition-all group flex items-start space-x-2.5 cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white text-amber-500 flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-amber-500 group-hover:text-white transition-colors">
                        <Award size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-gray-900 group-hover:text-rlhp-darkgreen">Awards & Honors</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">State recognitions</p>
                      </div>
                    </button>

                    <button 
                      onClick={(e) => { e.stopPropagation(); handleNavClick('publications'); }}
                      className="p-3 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-100 hover:border-rlhp-green/30 rounded-xl text-left transition-all group flex items-start space-x-2.5 cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white text-blue-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <FileText size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-gray-900 group-hover:text-rlhp-darkgreen">Publications</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">IEP handbooks & videos</p>
                      </div>
                    </button>

                    <button 
                      onClick={(e) => { e.stopPropagation(); handleNavClick('financials'); }}
                      className="p-3 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-100 hover:border-rlhp-green/30 rounded-xl text-left transition-all group flex items-start space-x-2.5 cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white text-rlhp-green flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-rlhp-green group-hover:text-white transition-colors">
                        <Landmark size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-rlhp-green group-hover:text-rlhp-darkgreen">Audit Reports (3 Yrs)</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">FCRA & financial transparency</p>
                      </div>
                    </button>

                    <button 
                      onClick={(e) => { e.stopPropagation(); handleNavClick('gallery'); }}
                      className="p-3 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-100 hover:border-rlhp-green/30 rounded-xl text-left transition-all group flex items-start space-x-2.5 cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white text-pink-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-pink-600 group-hover:text-white transition-colors">
                        <ImageIcon size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-gray-900 group-hover:text-rlhp-darkgreen">Photo Gallery</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">30+ Field photo albums</p>
                      </div>
                    </button>

                    <button 
                      onClick={(e) => { e.stopPropagation(); handleNavClick('video-gallery'); }}
                      className="p-3 bg-gray-50 hover:bg-rlhp-lightgreen border border-gray-100 hover:border-rlhp-green/30 rounded-xl text-left transition-all group flex items-start space-x-2.5 cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white text-red-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <Video size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-red-700 group-hover:text-rlhp-darkgreen">Video Gallery</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">17 Official YouTube videos</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Us */}
          <button 
            onClick={() => handleNavClick('contact')}
            className={`relative py-2 px-2 xl:px-2.5 whitespace-nowrap inline-flex items-center transition-colors cursor-pointer group ${currentPage === 'contact' ? 'text-rlhp-darkgreen font-extrabold' : 'text-gray-700 hover:text-rlhp-green'}`}
          >
            <span>Contact Us</span>
            <span className={`absolute bottom-0 left-1 right-1 h-0.5 rounded-full transition-all duration-200 ${currentPage === 'contact' ? 'bg-rlhp-green opacity-100' : 'bg-rlhp-green opacity-0 group-hover:opacity-100'}`}></span>
          </button>
        </nav>

        {/* Mobile & Tablet Menu Toggle Button */}
        <div className="flex items-center shrink-0 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-gray-700 hover:text-rlhp-green hover:bg-gray-100 focus:outline-none transition-colors border border-gray-200 cursor-pointer"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Accordion Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 pt-3 pb-6 space-y-2 text-sm shadow-2xl animate-in slide-in-from-top duration-200">
          <button onClick={() => handleNavClick('home')} className="block w-full text-left px-3.5 py-2.5 rounded-xl font-bold hover:bg-rlhp-lightgreen hover:text-rlhp-green cursor-pointer">Home</button>
          
          {/* Mobile About Us Accordion */}
          <div className="space-y-1">
            <div className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl font-bold hover:bg-rlhp-lightgreen hover:text-rlhp-green text-gray-800">
              <button 
                onClick={() => handleNavClick('about')}
                className="text-left font-bold cursor-pointer hover:text-rlhp-green flex-1"
              >
                About Us
              </button>
              <button 
                onClick={(e) => toggleMobileDropdown('about', e)}
                className="p-1 cursor-pointer text-gray-500 hover:text-rlhp-green"
              >
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobileDropdown === 'about' ? 'rotate-180 text-rlhp-green' : 'text-gray-400'}`} />
              </button>
            </div>
            {mobileDropdown === 'about' && (
              <div className="pl-4 pr-2 py-2 space-y-1 bg-gray-50 rounded-xl border border-gray-100 text-xs">
                <button onClick={() => handleNavClick('about', 'who-we-are')} className="block w-full text-left py-2 px-3 font-semibold text-gray-700 hover:text-rlhp-darkgreen hover:bg-white rounded-lg cursor-pointer">Who We Are</button>
                <button onClick={() => handleNavClick('about', 'vision-mission')} className="block w-full text-left py-2 px-3 font-semibold text-gray-700 hover:text-rlhp-darkgreen hover:bg-white rounded-lg cursor-pointer">Vision & Mission</button>
                <button onClick={() => handleNavClick('about', 'governance')} className="block w-full text-left py-2 px-3 font-semibold text-gray-700 hover:text-rlhp-darkgreen hover:bg-white rounded-lg cursor-pointer">Founder & Board</button>
                <button onClick={() => handleNavClick('about', 'approaches')} className="block w-full text-left py-2 px-3 font-semibold text-gray-700 hover:text-rlhp-darkgreen hover:bg-white rounded-lg cursor-pointer">Our Approaches</button>
                <button onClick={() => handleNavClick('about')} className="block w-full text-left py-2 px-3 font-bold text-rlhp-orange hover:bg-white rounded-lg cursor-pointer">View Main About Page →</button>
              </div>
            )}
          </div>

          <button onClick={() => handleNavClick('impact')} className="block w-full text-left px-3.5 py-2.5 rounded-xl font-bold hover:bg-rlhp-lightgreen hover:text-rlhp-green cursor-pointer">Our Impact</button>

          {/* Mobile Our Programmes Accordion */}
          <div className="space-y-1">
            <div className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl font-bold hover:bg-rlhp-lightgreen hover:text-rlhp-green text-gray-800">
              <button 
                onClick={() => handleNavClick('programmes')}
                className="text-left font-bold cursor-pointer hover:text-rlhp-green flex-1"
              >
                Our Programmes
              </button>
              <button 
                onClick={(e) => toggleMobileDropdown('programmes', e)}
                className="p-1 cursor-pointer text-gray-500 hover:text-rlhp-green"
              >
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobileDropdown === 'programmes' ? 'rotate-180 text-rlhp-green' : 'text-gray-400'}`} />
              </button>
            </div>
            {mobileDropdown === 'programmes' && (
              <div className="pl-4 pr-2 py-2 space-y-1 bg-gray-50 rounded-xl border border-gray-100 text-xs">
                <button onClick={() => handleNavClick('programmes', 'child-development')} className="block w-full text-left py-2 px-3 font-semibold text-gray-700 hover:text-rlhp-darkgreen hover:bg-white rounded-lg cursor-pointer">Child Development</button>
                <button onClick={() => handleNavClick('programmes', 'education')} className="block w-full text-left py-2 px-3 font-semibold text-gray-700 hover:text-rlhp-darkgreen hover:bg-white rounded-lg cursor-pointer">Education & IEP</button>
                <button onClick={() => handleNavClick('programmes', 'youth-empowerment')} className="block w-full text-left py-2 px-3 font-semibold text-gray-700 hover:text-rlhp-darkgreen hover:bg-white rounded-lg cursor-pointer">Youth Empowerment</button>
                <button onClick={() => handleNavClick('programmes', 'women-empowerment')} className="block w-full text-left py-2 px-3 font-semibold text-gray-700 hover:text-rlhp-darkgreen hover:bg-white rounded-lg cursor-pointer">Women Empowerment</button>
                <button onClick={() => handleNavClick('programmes', 'health-sanitation')} className="block w-full text-left py-2 px-3 font-semibold text-gray-700 hover:text-rlhp-darkgreen hover:bg-white rounded-lg cursor-pointer">Health & Sanitation</button>
                <button onClick={() => handleNavClick('programmes', 'government-schemes')} className="block w-full text-left py-2 px-3 font-semibold text-gray-700 hover:text-rlhp-darkgreen hover:bg-white rounded-lg cursor-pointer">Government Schemes</button>
                <button onClick={() => handleNavClick('programmes')} className="block w-full text-left py-2 px-3 font-bold text-rlhp-orange hover:bg-white rounded-lg cursor-pointer">View All Programmes →</button>
              </div>
            )}
          </div>

          <button onClick={() => handleNavClick('part-of-us')} className="block w-full text-left px-3.5 py-2.5 rounded-xl font-bold hover:bg-rlhp-lightgreen hover:text-rlhp-green cursor-pointer">How You Can Be a Part of Us</button>
          <button onClick={() => handleNavClick('where-we-work')} className="block w-full text-left px-3.5 py-2.5 rounded-xl font-bold hover:bg-rlhp-lightgreen hover:text-rlhp-green cursor-pointer">Where We Work (Map)</button>
          <button onClick={() => handleNavClick('projects')} className="block w-full text-left px-3.5 py-2.5 rounded-xl font-bold hover:bg-rlhp-lightgreen hover:text-rlhp-green cursor-pointer">Projects</button>

          {/* Mobile News, Articles & Events Accordion */}
          <div className="space-y-1">
            <div className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl font-bold hover:bg-rlhp-lightgreen hover:text-rlhp-green text-gray-800">
              <button 
                onClick={() => handleNavClick('news')}
                className="text-left font-bold cursor-pointer hover:text-rlhp-green flex-1"
              >
                News, Articles & Events
              </button>
              <button 
                onClick={(e) => toggleMobileDropdown('resources', e)}
                className="p-1 cursor-pointer text-gray-500 hover:text-rlhp-green"
              >
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobileDropdown === 'resources' ? 'rotate-180 text-rlhp-green' : 'text-gray-400'}`} />
              </button>
            </div>
            {mobileDropdown === 'resources' && (
              <div className="pl-4 pr-2 py-2 space-y-1 bg-gray-50 rounded-xl border border-gray-100 text-xs">
                <button onClick={() => handleNavClick('news')} className="block w-full text-left py-2 px-3 font-semibold text-gray-700 hover:text-rlhp-darkgreen hover:bg-white rounded-lg cursor-pointer">News & Articles</button>
                <button onClick={() => handleNavClick('stories')} className="block w-full text-left py-2 px-3 font-semibold text-gray-700 hover:text-rlhp-darkgreen hover:bg-white rounded-lg cursor-pointer">Success Stories</button>
                <button onClick={() => handleNavClick('awards')} className="block w-full text-left py-2 px-3 font-semibold text-gray-700 hover:text-rlhp-darkgreen hover:bg-white rounded-lg cursor-pointer">Awards & Honors</button>
                <button onClick={() => handleNavClick('publications')} className="block w-full text-left py-2 px-3 font-semibold text-gray-700 hover:text-rlhp-darkgreen hover:bg-white rounded-lg cursor-pointer">Publications & IEP Videos</button>
                <button onClick={() => handleNavClick('financials')} className="block w-full text-left py-2 px-3 font-bold text-rlhp-green hover:bg-white rounded-lg cursor-pointer">Financial Audit Reports (3 Yrs)</button>
                <button onClick={() => handleNavClick('gallery')} className="block w-full text-left py-2 px-3 font-semibold text-gray-700 hover:text-rlhp-darkgreen hover:bg-white rounded-lg cursor-pointer">Photo & Event Gallery</button>
                <button onClick={() => handleNavClick('video-gallery')} className="block w-full text-left py-2 px-3 font-bold text-red-600 hover:bg-white rounded-lg cursor-pointer">Video Gallery (17 YouTube Videos)</button>
              </div>
            )}
          </div>

          <button onClick={() => handleNavClick('contact')} className="block w-full text-left px-3.5 py-2.5 rounded-xl font-bold hover:bg-rlhp-lightgreen hover:text-rlhp-green cursor-pointer">Contact Us</button>
        </div>
      )}
    </header>
  );
}
