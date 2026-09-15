import React from 'react';
import { orgDetails } from '../data/rlhpData';
import RlhpLogo from './RlhpLogo';
import { Mail, Phone, MapPin, Globe, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer({ setCurrentPage, onOpenDonate, onNavClick }) {
  const handleNavClick = (pageId, optionId = null) => {
    if (onNavClick) {
      onNavClick(pageId, optionId);
    } else {
      setCurrentPage(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#063E2A] text-white font-sans">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="p-1 bg-white rounded-full shadow-md border border-white/20 shrink-0">
              <RlhpLogo className="w-16 h-16 sm:w-20 sm:h-20" showText={false} />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-white tracking-wide leading-tight">Rural Literacy & Health Programme</h4>
              <p className="text-xs text-rlhp-lightgreen font-bold mt-0.5">(RLHP), Mysore</p>
            </div>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed">
            Working for over 42 years for the empowerment of children, women and communities for a just, equitable and sustainable society.
          </p>
          <div className="pt-2 flex items-center space-x-3">
            <a href={orgDetails.social.facebook} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-rlhp-orange text-white flex items-center justify-center transition-colors">
              <Facebook size={16} />
            </a>
            <a href={orgDetails.social.twitter} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-rlhp-orange text-white flex items-center justify-center transition-colors">
              <Twitter size={16} />
            </a>
            <a href={orgDetails.social.instagram} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-rlhp-orange text-white flex items-center justify-center transition-colors">
              <Instagram size={16} />
            </a>
            <a href={orgDetails.social.youtube} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-rlhp-orange text-white flex items-center justify-center transition-colors">
              <Youtube size={16} />
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs text-gray-300">
            <li><button onClick={() => handleNavClick('home')} className="hover:text-rlhp-orange transition-colors cursor-pointer text-left">Home</button></li>
            <li><button onClick={() => handleNavClick('about')} className="hover:text-rlhp-orange transition-colors cursor-pointer text-left">About Us</button></li>
            <li><button onClick={() => handleNavClick('programmes')} className="hover:text-rlhp-orange transition-colors cursor-pointer text-left">Our Programmes</button></li>
            <li><button onClick={() => handleNavClick('part-of-us')} className="hover:text-rlhp-orange transition-colors cursor-pointer text-left text-rlhp-orange font-bold">How You Can Be a Part of Us</button></li>
            <li><button onClick={() => handleNavClick('where-we-work')} className="hover:text-rlhp-orange transition-colors cursor-pointer text-left">Where We Work</button></li>
            <li><button onClick={() => handleNavClick('impact')} className="hover:text-rlhp-orange transition-colors cursor-pointer text-left">Our Impact</button></li>
            <li><button onClick={() => handleNavClick('news')} className="hover:text-rlhp-orange transition-colors cursor-pointer text-left">News, Articles & Events</button></li>
            <li><button onClick={() => handleNavClick('gallery')} className="hover:text-rlhp-orange transition-colors cursor-pointer text-left">Gallery</button></li>
            <li><button onClick={() => handleNavClick('contact')} className="hover:text-rlhp-orange transition-colors cursor-pointer text-left">Contact Us</button></li>
          </ul>
        </div>

        {/* Col 3: Programmes */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 mb-4">
            Programmes
          </h4>
          <ul className="space-y-2 text-xs text-gray-300">
            <li><button onClick={() => handleNavClick('programmes', 'child-development')} className="hover:text-rlhp-orange transition-colors cursor-pointer text-left">Child Development</button></li>
            <li><button onClick={() => handleNavClick('programmes', 'youth-empowerment')} className="hover:text-rlhp-orange transition-colors cursor-pointer text-left">Youth Empowerment</button></li>
            <li><button onClick={() => handleNavClick('programmes', 'women-empowerment')} className="hover:text-rlhp-orange transition-colors cursor-pointer text-left">Women Empowerment</button></li>
            <li><button onClick={() => handleNavClick('programmes', 'health-sanitation')} className="hover:text-rlhp-orange transition-colors cursor-pointer text-left">Health & Sanitation</button></li>
            <li><button onClick={() => handleNavClick('programmes', 'peoples-development')} className="hover:text-rlhp-orange transition-colors cursor-pointer text-left">People's Development</button></li>
            <li><button onClick={() => handleNavClick('programmes', 'education')} className="hover:text-rlhp-orange transition-colors cursor-pointer text-left">Education & Livelihood</button></li>
            <li><button onClick={() => handleNavClick('programmes', 'government-schemes')} className="hover:text-rlhp-orange transition-colors cursor-pointer text-left">Government Schemes</button></li>
            <li><button onClick={() => handleNavClick('programmes', 'humanitarian-assistance')} className="hover:text-rlhp-orange transition-colors cursor-pointer text-left">Disaster Response & Relief</button></li>
          </ul>
        </div>

        {/* Col 4: Contact Us */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 mb-4">
            Contact Us
          </h4>
          <ul className="space-y-3 text-xs text-gray-300">
            <li className="flex items-start space-x-2.5">
              <MapPin size={16} className="text-rlhp-orange shrink-0 mt-0.5" />
              <span>{orgDetails.address}</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Phone size={14} className="text-rlhp-orange shrink-0" />
              <span>{orgDetails.phones.join(', ')}</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Mail size={14} className="text-rlhp-orange shrink-0" />
              <span>{orgDetails.emails[0]}</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Globe size={14} className="text-rlhp-orange shrink-0" />
              <span>{orgDetails.website}</span>
            </li>
          </ul>
          <div className="mt-5">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full bg-rlhp-orange hover:bg-rlhp-darkorange text-white font-bold text-xs py-2.5 px-4 rounded-lg shadow-md transition-colors flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Get In Touch</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-black/30 border-t border-white/10 py-5 px-4 text-center text-xs text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} RLHP Mysore. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a>
            <span>•</span>
            <button onClick={() => handleNavClick('financials')} className="hover:text-white transition-colors text-rlhp-lightgreen font-bold">FCRA & Audit Reports</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
