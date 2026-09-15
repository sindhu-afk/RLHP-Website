import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Programmes from './pages/Programmes';
import WhereWeWork from './pages/WhereWeWork';
import Projects from './pages/Projects';
import ImpactPage from './pages/ImpactPage';
import AwardsPage from './pages/AwardsPage';
import NewsArticlesPage from './pages/NewsArticlesPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import PublicationsPage from './pages/PublicationsPage';
import GalleryPage from './pages/GalleryPage';
import FinancialReportsPage from './pages/FinancialReportsPage';
import BankDetailsPage from './pages/BankDetailsPage';
import HowYouCanBeAPartOfUsPage from './pages/HowYouCanBeAPartOfUsPage';
import VideoGalleryPage from './pages/VideoGalleryPage';
import ContactUs from './pages/ContactUs';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProgrammeId, setSelectedProgrammeId] = useState('child-development');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleNavClick = (pageId, optionId = null) => {
    setCurrentPage(pageId);
    if (pageId === 'programmes' && optionId) {
      setSelectedProgrammeId(optionId);
    }
    if (optionId && pageId !== 'programmes') {
      setTimeout(() => {
        const el = document.getElementById(optionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} onNavClick={handleNavClick} onSelectNews={(item) => setSelectedMedia(item)} />;
      case 'about':
        return <AboutUs setCurrentPage={setCurrentPage} />;
      case 'programmes':
        return (
          <Programmes 
            selectedProgrammeId={selectedProgrammeId}
            setSelectedProgrammeId={setSelectedProgrammeId}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'where-we-work':
        return <WhereWeWork />;
      case 'projects':
        return <Projects />;
      case 'impact':
        return <ImpactPage />;
      case 'awards':
        return <AwardsPage />;
      case 'news':
        return <NewsArticlesPage onSelectNews={(item) => setSelectedMedia(item)} setCurrentPage={setCurrentPage} onNavClick={handleNavClick} />;
      case 'stories':
        return <SuccessStoriesPage onSelectNews={(item) => setSelectedMedia(item)} />;
      case 'publications':
        return <PublicationsPage onSelectMedia={(item) => setSelectedMedia(item)} />;
      case 'gallery':
        return <GalleryPage onSelectMedia={(item) => setSelectedMedia(item)} />;
      case 'video-gallery':
        return <VideoGalleryPage onSelectMedia={(item) => setSelectedMedia(item)} />;
      case 'financials':
        return <FinancialReportsPage />;
      case 'bank-details':
        return <BankDetailsPage />;
      case 'part-of-us':
        return <HowYouCanBeAPartOfUsPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactUs />;
      default:
        return <Home setCurrentPage={setCurrentPage} onSelectNews={(item) => setSelectedMedia(item)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans selection:bg-rlhp-green selection:text-white">
      {/* Sticky Navbar */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onNavClick={handleNavClick}
      />

      {/* Main Page Area */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Global Dark Green Footer */}
      <Footer 
        setCurrentPage={setCurrentPage} 
        onNavClick={handleNavClick}
      />

      <ImageModal 
        item={selectedMedia} 
        onClose={() => setSelectedMedia(null)} 
      />
    </div>
  );
}
