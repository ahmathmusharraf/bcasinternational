/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageView, DestinationCountry, University, BlogPost } from './types';

// Layout & Common
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';

// Modals
import { ConsultationModal } from './components/modals/ConsultationModal';
import { UniversityDetailModal } from './components/modals/UniversityDetailModal';
import { BlogArticleModal } from './components/modals/BlogArticleModal';

// Dedicated Views
import { WorkAndPrView } from './views/WorkAndPrView';
import { BlogView } from './views/BlogView';

// Homepage & Core Sections (All in One View)
import { HeroSection } from './components/home/HeroSection';
import { UniversityFinder } from './components/home/UniversityFinder';
import { StudyDestinationsSection } from './components/home/StudyDestinationsSection';
import { FeaturedUniversitiesSection } from './components/home/FeaturedUniversitiesSection';
import { StudyPathWizard } from './components/home/StudyPathWizard';
import { CoursesSection } from './components/home/CoursesSection';
import { ScholarshipsSection } from './components/home/ScholarshipsSection';
import { CostAndCurrencyEstimator } from './components/home/CostAndCurrencyEstimator';
import { IeltsSection } from './components/home/IeltsSection';
import { WorkAndPrSection } from './components/home/WorkAndPrSection';
import { BlogSection } from './components/home/BlogSection';
import { ServicesSection } from './components/home/ServicesSection';
import { AboutSection } from './components/home/AboutSection';
import { WhyBcasSection } from './components/home/WhyBcasSection';
import { JourneyTimelineSection } from './components/home/JourneyTimelineSection';
import { TestimonialVideoSection } from './components/home/TestimonialVideoSection';
import { AdvisorsSection } from './components/home/AdvisorsSection';
import { LeadGenSection } from './components/home/LeadGenSection';
import { ContactSection } from './components/home/ContactSection';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedUniversityForModal, setSelectedUniversityForModal] = useState<University | null>(null);
  const [selectedBlogArticleForModal, setSelectedBlogArticleForModal] = useState<BlogPost | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationDestination, setConsultationDestination] = useState<DestinationCountry | undefined>(undefined);
  const [dedicatedView, setDedicatedView] = useState<'none' | 'work-pr' | 'blog'>('none');

  // Smooth scroll to any section ID in the one view
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -72; // height of fixed top navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Navigation handler
  const handleNavigate = (page: PageView, sectionId?: string) => {
    setCurrentPage(page);
    if (sectionId === 'dedicated-work-pr') {
      setDedicatedView('work-pr');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (sectionId === 'dedicated-blog') {
      setDedicatedView('blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (dedicatedView !== 'none') {
      setDedicatedView('none');
    }
    const targetId = sectionId || (page === 'home' ? 'home' : page);
    scrollToSection(targetId);
  };

  // Open consultation modal with optional pre-filled country
  const handleOpenConsultation = (destination?: DestinationCountry) => {
    setConsultationDestination(destination);
    setIsConsultationModalOpen(true);
  };

  // View University Modal
  const handleSelectUniversity = (uni: University) => {
    setSelectedUniversityForModal(uni);
  };

  // ScrollSpy: highlight active section in navbar as user scrolls
  useEffect(() => {
    const sections: { id: string; page: PageView }[] = [
      { id: 'home', page: 'home' },
      { id: 'finder', page: 'home' },
      { id: 'destinations', page: 'destinations' },
      { id: 'universities', page: 'universities' },
      { id: 'pathway', page: 'universities' },
      { id: 'courses', page: 'universities' },
      { id: 'scholarships', page: 'universities' },
      { id: 'cost-calculator', page: 'universities' },
      { id: 'ielts', page: 'universities' },
      { id: 'work-pr', page: 'work-pr' },
      { id: 'blog', page: 'blog' },
      { id: 'services', page: 'home' },
      { id: 'about', page: 'home' },
      { id: 'stories', page: 'home' },
      { id: 'contact', page: 'home' }
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setCurrentPage(sections[i].page);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#103578] selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Dynamic Main Body Content: Dedicated View or All-in-One Home Flow */}
      {dedicatedView === 'work-pr' ? (
        <WorkAndPrView
          onBookConsultation={(country) => handleOpenConsultation(country)}
          onNavigateHome={() => {
            setDedicatedView('none');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : dedicatedView === 'blog' ? (
        <BlogView
          onOpenConsultation={() => handleOpenConsultation()}
          onNavigateHome={() => {
            setDedicatedView('none');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : (
        <main className="flex-1">
          {/* 1. HERO SECTION */}
          <div id="home">
            <HeroSection
              onFindUniversity={() => scrollToSection('finder')}
              onBookConsultation={() => handleOpenConsultation()}
            />
          </div>

          {/* 2. UNIVERSITY QUICK FINDER STRIP */}
          <div id="finder">
            <UniversityFinder
              onSelectUniversity={handleSelectUniversity}
              onExploreAll={() => scrollToSection('universities')}
            />
          </div>

          {/* 3. STUDY DESTINATIONS */}
          <StudyDestinationsSection
            onSelectDestination={(country) => {
              handleOpenConsultation(country);
            }}
            onExploreAll={() => scrollToSection('destinations')}
          />

          {/* 4. FEATURED UNIVERSITIES & DIRECTORY */}
          <FeaturedUniversitiesSection
            onSelectUniversity={handleSelectUniversity}
            onExploreAll={() => scrollToSection('finder')}
          />

          {/* 5. FIND YOUR STUDY PATH (Interactive Stepper) */}
          <StudyPathWizard
            onSelectUniversity={handleSelectUniversity}
            onBookConsultation={() => handleOpenConsultation()}
          />

          {/* 6. POPULAR COURSES & DEGREE SPECIALIZATIONS */}
          <CoursesSection
            onSelectCourse={() => handleOpenConsultation()}
            onExploreAll={() => scrollToSection('pathway')}
          />

          {/* 7. SCHOLARSHIPS & OPPORTUNITIES */}
          <ScholarshipsSection
            onApplyScholarship={() => handleOpenConsultation()}
            onExploreAll={() => handleOpenConsultation()}
          />

          {/* 8. INTERACTIVE COST & CURRENCY ESTIMATOR */}
          <CostAndCurrencyEstimator
            onBookConsultation={() => handleOpenConsultation()}
          />

          {/* 9. IELTS & ENGLISH PROFICIENCY ACADEMY & WAIVER DESK */}
          <IeltsSection
            onBookConsultation={() => handleOpenConsultation()}
          />

          {/* 10. COUNTRY WORK OPPORTUNITY & PATHWAY TO PR */}
          <WorkAndPrSection
            onBookConsultation={(country) => handleOpenConsultation(country)}
            onExploreFullGuide={() => {
              setDedicatedView('work-pr');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          {/* 11. INTERNATIONAL EDUCATION & PR BLOG */}
          <BlogSection
            onSelectArticle={(article) => setSelectedBlogArticleForModal(article)}
            onExploreAllBlogs={() => {
              setDedicatedView('blog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          {/* 12. COMPREHENSIVE STUDENT SERVICES */}
          <ServicesSection
            onBookConsultation={() => handleOpenConsultation()}
          />

          {/* 13. ABOUT BCAS HERITAGE & CAMPUSES */}
          <AboutSection
            onBookConsultation={() => handleOpenConsultation()}
            onExploreDestinations={() => scrollToSection('destinations')}
          />

          {/* 14. WHY BCAS (8 Core Advantages) */}
          <WhyBcasSection />

          {/* 15. YOUR JOURNEY TO UNIVERSITY (Step-by-Step Timeline) */}
          <JourneyTimelineSection
            onStartJourney={() => handleOpenConsultation()}
          />

          {/* 16. STUDENT VIDEO TESTIMONIALS & PLACEMENT REFLECTIONS */}
          <TestimonialVideoSection
            onBookConsultation={() => handleOpenConsultation()}
          />

          {/* 17. EXPERIENCED UNIVERSITY ADVISORS */}
          <AdvisorsSection
            onBookAdvisor={() => handleOpenConsultation()}
          />

          {/* 18. LEAD GENERATION & ELIGIBILITY ASSESSMENT */}
          <LeadGenSection />

          {/* 19. OUR CAMPUSES & CONTACT DESK */}
          <ContactSection
            onOpenConsultation={() => handleOpenConsultation()}
          />
        </main>
      )}

      {/* FOOTER */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Mobile Bottom Quick-Access Sticky Navigation */}
      <MobileBottomNav
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnquire={() => handleOpenConsultation()}
      />

      {/* Floating WhatsApp Logo Only */}
      <FloatingWhatsApp />

      {/* Global Modals */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        defaultDestination={consultationDestination}
      />

      <UniversityDetailModal
        university={selectedUniversityForModal}
        onClose={() => setSelectedUniversityForModal(null)}
        onApply={(uni) => {
          setSelectedUniversityForModal(null);
          handleOpenConsultation(uni.country);
        }}
      />

      <BlogArticleModal
        article={selectedBlogArticleForModal}
        onClose={() => setSelectedBlogArticleForModal(null)}
        onOpenConsultation={() => {
          setSelectedBlogArticleForModal(null);
          handleOpenConsultation();
        }}
      />
    </div>
  );
}
