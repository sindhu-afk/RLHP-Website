import React, { useState, useEffect } from 'react';
import { focusAreas, newsArticlesData, successStoriesData, fundingPartners, governmentDepartments } from '../data/rlhpData';
import ImpactCounters from '../components/ImpactCounters';
import KarnatakaMap from '../components/KarnatakaMap';
import { getImageUrl } from '../utils/imageUtils';
import {
  ArrowRight, Heart, Baby, GraduationCap, Users, Activity,
  BookOpen, Handshake, Building2, ShieldAlert, Award, Calendar, ChevronRight, ChevronLeft
} from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    image: `${import.meta.env.BASE_URL}images/hero_slide_1.png`,
    badge: "42+ Years of Community Empowerment",
    title: "Empowering Communities.",
    highlightTitle: "Transforming Lives.",
    subtitle: "For over 42 years, RLHP has been working with children, women and communities for a just, equitable and sustainable society across Karnataka.",
    buttonText: "Explore Our Work",
    page: "about"
  },
  {
    id: 2,
    image: `${import.meta.env.BASE_URL}images/hero_slide_2.jpg`,
    badge: "Child Rights & Community Action",
    title: "Standing Together for",
    highlightTitle: "Child Rights & Protection.",
    subtitle: "Mobilizing over 78 Child Rights Clubs and community forums to protect every child's fundamental rights to education, healthcare, and safety.",
    buttonText: "View Our Programmes",
    page: "programmes"
  },
  {
    id: 3,
    image: `${import.meta.env.BASE_URL}images/hero_slide_3.jpg`,
    badge: "Food Security & Self Reliance",
    title: "Fostering Unity,",
    highlightTitle: "Livelihood & Hope.",
    subtitle: "Empowering thousands of rural women and vulnerable families through micro-savings, community gardens, food security, and self-reliance initiatives.",
    buttonText: "See Our Impact",
    page: "impact"
  }
];

export default function Home({ setCurrentPage, onNavClick, onOpenDonate, onSelectNews }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    },2000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const iconMap = {
    Baby: Baby,
    GraduationCap: GraduationCap,
    Users: Users,
    Activity: Activity,
    BookOpen: BookOpen,
    Handshake: Handshake,
    Building2: Building2,
    ShieldAlert: ShieldAlert
  };

  const handleNav = (pageId, optionId = null) => {
    if (onNavClick) {
      onNavClick(pageId, optionId);
    } else {
      setCurrentPage(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-16 font-sans pb-12">
      {/* HERO BANNER - Auto Sliding Carousel */}
      <section
        className="relative min-h-[480px] sm:min-h-[560px] flex items-center justify-center bg-gray-900 text-white overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Images with smooth crossfade transition */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center filter brightness-[0.38]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20"></div>
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full text-left">
          <div key={currentSlide} className="max-w-2xl space-y-6 transition-all duration-500 animate-in fade-in">
            <div className="inline-flex items-center space-x-2 bg-rlhp-green/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-rlhp-accentgreen/40 text-xs font-semibold text-white">
              <span className="w-2 h-2 rounded-full bg-rlhp-orange animate-ping"></span>
              <span>{heroSlides[currentSlide].badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md">
              {heroSlides[currentSlide].title}<br />
              <span className="text-rlhp-accentgreen">{heroSlides[currentSlide].highlightTitle}</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-xl drop-shadow-sm font-normal">
              {heroSlides[currentSlide].subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => handleNav(heroSlides[currentSlide].page)}
                className="bg-rlhp-green hover:bg-rlhp-darkgreen text-white font-bold text-sm px-6 py-3 rounded-lg shadow-lg transition-all flex items-center space-x-2 transform active:scale-95 cursor-pointer"
              >
                <span>{heroSlides[currentSlide].buttonText}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Previous / Next Arrow Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-20 p-2.5 rounded-full bg-black/40 hover:bg-rlhp-green text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer hidden sm:flex items-center justify-center border border-white/20 shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 z-20 p-2.5 rounded-full bg-black/40 hover:bg-rlhp-green text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer hidden sm:flex items-center justify-center border border-white/20 shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>

        {/* Interactive 3 Dots Pagination */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-none ${idx === currentSlide
                ? 'w-8 h-2.5 bg-rlhp-orange shadow-md'
                : 'w-2.5 h-2.5 bg-white/60 hover:bg-white'
                }`}
              title={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* STATS COUNTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <ImpactCounters />
      </section>

      {/* OUR FOCUS AREAS - Exact UI matching reference image grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-rlhp-darkgreen tracking-tight">Our Focus Areas</h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Working together for a better tomorrow across 8 core domains</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area) => {
            const IconComponent = iconMap[area.icon] || Baby;
            const progMap = {
              'child-development': 'child-development',
              'youth-empowerment': 'youth-empowerment',
              'women-empowerment': 'women-empowerment',
              'health-sanitation': 'health-sanitation',
              'education-livelihood': 'education',
              'people-development': 'peoples-development',
              'government-schemes': 'government-schemes',
              'humanitarian-assistance': 'humanitarian-assistance'
            };
            const targetId = progMap[area.id] || 'child-development';

            return (
              <div
                key={area.id}
                onClick={() => handleNav('programmes', targetId)}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-2xs hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-rlhp-lightgreen text-rlhp-green flex items-center justify-center group-hover:bg-rlhp-green group-hover:text-white transition-colors">
                    <IconComponent size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-gray-900 group-hover:text-rlhp-green transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                      {area.shortDesc}
                    </p>
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-50 flex items-center text-xs font-semibold text-rlhp-green group-hover:text-rlhp-orange">
                  <span>Learn More</span>
                  <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHERE WE WORK - Karnataka Interactive Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-rlhp-darkgreen">Where We Work</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              RLHP is currently working in 10 districts of Karnataka covering South and North Karnataka, reaching a population of over 9.65 lakh people.
            </p>
          </div>
          <button
            onClick={() => handleNav('where-we-work')}
            className="bg-rlhp-green hover:bg-rlhp-darkgreen text-white font-semibold text-xs px-4 py-2 rounded-lg transition-colors flex items-center space-x-1"
          >
            <span>View All Districts</span>
            <ChevronRight size={14} />
          </button>
        </div>

        <KarnatakaMap onSelectDistrict={() => { }} />
      </section>

      {/* LATEST NEWS & ARTICLES - Matching reference mockup grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-rlhp-darkgreen">Latest News & Articles</h2>
            <p className="text-xs text-gray-500 mt-1">Updates and ground reports from our intervention sites</p>
          </div>
          <button
            onClick={() => handleNav('news')}
            className="text-xs font-bold text-rlhp-green hover:text-rlhp-orange transition-colors flex items-center space-x-1"
          >
            <span>View All News</span>
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsArticlesData.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectNews(item)}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-2xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={getImageUrl(item.image)}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-rlhp-green text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                    {item.category}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center text-[11px] text-gray-400 space-x-2">
                    <Calendar size={12} />
                    <span>{item.date}</span>
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
                <span>Read Story</span>
                <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FUNDING PARTNERS & GOVERNMENT COLLABORATION */}
      <section className="bg-rlhp-lightgreen/40 py-12 border-y border-rlhp-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Funding Partners */}
          <div>
            <div className="text-center max-w-lg mx-auto mb-6">
              <h3 className="text-lg font-bold text-rlhp-darkgreen uppercase tracking-wider text-xs">Our Funding & Institutional Partners</h3>
              <p className="text-xs text-gray-500 mt-0.5">Generously supporting our programmes across Karnataka</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
              {fundingPartners.map((partner, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs text-center flex flex-col items-center justify-between min-h-[120px] hover:border-rlhp-green hover:shadow-md transition-all group">
                  <div className="h-14 flex items-center justify-center w-full px-2">
                    {partner.logoImage ? (
                      <img 
                        src={`${import.meta.env.BASE_URL}${partner.logoImage.replace(/^\//, '')}`} 
                        alt={`${partner.name} Logo`}
                        className="max-h-12 max-w-full object-contain filter group-hover:brightness-105 transition-all"
                      />
                    ) : (
                      <span className="font-extrabold text-xs text-gray-900 group-hover:text-rlhp-darkgreen">{partner.logoText}</span>
                    )}
                  </div>
                  {partner.project && (
                    <span className="text-[10px] text-gray-500 line-clamp-2 font-medium mt-2">{partner.project}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Government Departments */}
          <div>
            <div className="text-center max-w-lg mx-auto mb-4">
              <h3 className="text-xs font-bold text-rlhp-darkgreen uppercase tracking-wider">Government Collaboration & Community Participation</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {governmentDepartments.map((dept, idx) => (
                <span key={idx} className="bg-white text-gray-700 border border-gray-200 text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-2xs">
                  🏛️ {dept}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER - Exact UI matching reference screenshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-rlhp-green to-rlhp-darkgreen text-white rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-3xl font-bold tracking-tight">Together we can build a better tomorrow</h3>
            <p className="text-xs sm:text-sm text-gray-200 max-w-xl">
              Support our mission to empower communities, protect children rights, and change lives across Karnataka.
            </p>
          </div>
          <button
            onClick={() => handleNav('contact')}
            className="bg-white text-rlhp-darkgreen hover:bg-rlhp-lightgreen font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all shrink-0 hover:scale-105 cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}
