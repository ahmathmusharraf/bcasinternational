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

// Dedicated Views (All Section Pages)
import { DestinationsView } from './views/DestinationsView';
import { UniversitiesView } from './views/UniversitiesView';
import { CoursesView } from './views/CoursesView';
import { ScholarshipsView } from './views/ScholarshipsView';
import { PathwayView } from './views/PathwayView';
import { CostEstimatorView } from './views/CostEstimatorView';
import { IeltsView } from './views/IeltsView';
import { WorkAndPrView } from './views/WorkAndPrView';
import { BlogView } from './views/BlogView';
import { ServicesView } from './views/ServicesView';
import { AboutView } from './views/AboutView';
import { WhyBcasView } from './views/WhyBcasView';
import { JourneyView } from './views/JourneyView';
import { StoriesView } from './views/StoriesView';
import { AdvisorsView } from './views/AdvisorsView';
import { ContactView } from './views/ContactView';

// Homepage Core Sections & Sub-Pages Hub
import { HeroSection } from './components/home/HeroSection';
import { UniversityFinder } from './components/home/UniversityFinder';
import { SubPagesHubSection } from './components/home/SubPagesHubSection';
import { StudyDestinationsSection } from './components/home/StudyDestinationsSection';
import { WhyBcasSection } from './components/home/WhyBcasSection';
import { TestimonialVideoSection } from './components/home/TestimonialVideoSection';
import { LeadGenSection } from './components/home/LeadGenSection';
import { ContactSection } from './components/home/ContactSection';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedUniversityForModal, setSelectedUniversityForModal] = useState<University | null>(null);
  const [selectedBlogArticleForModal, setSelectedBlogArticleForModal] = useState<BlogPost | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationDestination, setConsultationDestination] = useState<DestinationCountry | undefined>(undefined);
  const [selectedDestinationCountry, setSelectedDestinationCountry] = useState<DestinationCountry | null>(null);

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
    if (page === 'home' && sectionId && sectionId !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 50);
      return;
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open consultation modal with optional pre-filled country
  const handleOpenConsultation = (destination?: DestinationCountry) => {
    setConsultationDestination(destination);
    setIsConsultationModalOpen(true);
  };

  // Open destination dedicated page with selected country
  const handleOpenDestinationPage = (country?: DestinationCountry) => {
    if (country) {
      setSelectedDestinationCountry(country);
    }
    setCurrentPage('destinations');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamic SEO: Update document title, meta descriptions and social cards per page
  useEffect(() => {
    const seoMap: Record<PageView, { title: string; desc: string }> = {
      'home': {
        title: 'BCAS International University Placement – Study Abroad & Visa Advisory',
        desc: 'Official overseas university placement portal by BCAS Sri Lanka. Free admissions counseling, scholarships up to 50%, IELTS waivers, and visa guidance for UK, Canada, Australia, USA & more.'
      },
      'destinations': {
        title: 'Study Destinations Guide (11 Countries) – BCAS International',
        desc: 'Compare post-study work rules, tuition fees, and living costs across the UK, Canada, Australia, USA, Ireland, Germany, and more.'
      },
      'universities': {
        title: '50+ Global Universities Directory & Admissions – BCAS',
        desc: 'Browse accredited universities worldwide with interactive comparison, entry criteria, and scholarship offerings with zero agency fees.'
      },
      'courses': {
        title: 'International Degree Programs & Career Outcomes – BCAS',
        desc: 'Search undergraduate, postgraduate, and MBA programs in IT, Business, Engineering, Health, and Law with international qualifications.'
      },
      'scholarships': {
        title: 'University Scholarships & Tuition Grants (Up to 50%) – BCAS',
        desc: 'Explore partial merit scholarships, country bursaries, and tuition reduction schemes for Sri Lankan international students.'
      },
      'pathway': {
        title: 'Study Path Wizard – Interactive Academic Matching – BCAS',
        desc: 'Interactive 4-step degree and country evaluation tool to discover your best university matches and scholarship eligibility.'
      },
      'cost-calculator': {
        title: 'Study Abroad Cost & Currency Estimator (Live LKR Rates) – BCAS',
        desc: 'Calculate estimated tuition, living expenses, accommodation, and part-time student work offsets across 11 study destinations.'
      },
      'ielts': {
        title: 'IELTS Academy & 100% English Waiver Desk – BCAS',
        desc: 'British Council & IDP test prep coaching, IELTS Academic/UKVI/PTE standards, and Medium of Instruction (MOI) waiver assessment.'
      },
      'work-pr': {
        title: 'Country Work Rights & PR Pathways – BCAS International',
        desc: 'Comprehensive post-graduation work visa analysis (PSW, PGWP, OPT, 485) and permanent residency points pathways.'
      },
      'blog': {
        title: 'International Education Insights & Visa Blog – BCAS',
        desc: 'Expert guides on student visas, global migration changes, scholarship applications, and student life abroad by BCAS advisors.'
      },
      'services': {
        title: 'Comprehensive Student Services Roadmap – BCAS',
        desc: 'End-to-end 8-point university placement services: profile review, admissions, SOP editing, visa filing, and pre-departure briefings.'
      },
      'about': {
        title: 'About BCAS – 27+ Years of Higher Education Heritage',
        desc: 'Established in 1999, British College of Applied Studies is one of Sri Lanka’s premier higher education providers and global university gateways.'
      },
      'why-bcas': {
        title: 'Why Choose BCAS – 8 Core Advantages & Zero Agency Fees',
        desc: 'Discover the 8 key pillars of BCAS: 100% free placement advisory, authorized direct institutional linkages, and 98% visa success rate.'
      },
      'journey': {
        title: 'University Placement Journey Roadmap – BCAS',
        desc: 'Structured 5-phase student roadmap from free counseling in Sri Lanka to university offer letter, visa stamp, and campus arrival.'
      },
      'stories': {
        title: 'Student Video Testimonials & Success Stories – BCAS',
        desc: 'Watch authentic video reviews and placement reflections from Sri Lankan students now studying in top UK, Canadian, and Australian universities.'
      },
      'advisors': {
        title: 'Placement Advisors & Counselors Directory – BCAS',
        desc: 'Meet certified higher education counselors in Colombo, Kandy, Kalmunai, and Jaffna offering 1-on-1 personalized advisory sessions.'
      },
      'contact': {
        title: 'Campuses & Direct Inquiries in Colombo, Kandy, Jaffna – BCAS',
        desc: 'Visit BCAS campus placement desks or connect directly via telephone, WhatsApp, or walk-in appointment scheduling.'
      }
    };

    const currentSeo = seoMap[currentPage] || seoMap.home;
    document.title = currentSeo.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', currentSeo.desc);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', currentSeo.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', currentSeo.desc);
    }
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) {
      twTitle.setAttribute('content', currentSeo.title);
    }
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) {
      twDesc.setAttribute('content', currentSeo.desc);
    }
  }, [currentPage]);

  // View University Modal
  const handleSelectUniversity = (uni: University) => {
    setSelectedUniversityForModal(uni);
  };

  // ScrollSpy: highlight active section in navbar as user scrolls on home page
  useEffect(() => {
    if (currentPage !== 'home') return;

    const sections: { id: string; page: PageView }[] = [
      { id: 'home', page: 'home' },
      { id: 'finder', page: 'home' },
      { id: 'destinations', page: 'destinations' },
      { id: 'universities', page: 'universities' },
      { id: 'pathway', page: 'pathway' },
      { id: 'courses', page: 'courses' },
      { id: 'scholarships', page: 'scholarships' },
      { id: 'cost-calculator', page: 'cost-calculator' },
      { id: 'ielts', page: 'ielts' },
      { id: 'work-pr', page: 'work-pr' },
      { id: 'blog', page: 'blog' },
      { id: 'services', page: 'services' },
      { id: 'about', page: 'about' },
      { id: 'why-bcas', page: 'why-bcas' },
      { id: 'journey', page: 'journey' },
      { id: 'stories', page: 'stories' },
      { id: 'advisors', page: 'advisors' },
      { id: 'contact', page: 'contact' }
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          // Keep current page synced for indicator if on home
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  // Render the current view based on currentPage
  const renderCurrentView = () => {
    switch (currentPage) {
      case 'destinations':
        return (
          <DestinationsView
            onSelectUniversity={handleSelectUniversity}
            onBookConsultation={(country) => handleOpenConsultation(country)}
            initialCountry={selectedDestinationCountry}
            onNavigateHome={() => handleNavigate('home')}
          />
        );

      case 'universities':
        return (
          <UniversitiesView
            onSelectUniversity={handleSelectUniversity}
            onBookConsultation={() => handleOpenConsultation()}
            onNavigateHome={() => handleNavigate('home')}
          />
        );

      case 'courses':
        return (
          <CoursesView
            onSelectCourse={() => handleOpenConsultation()}
            onBookConsultation={() => handleOpenConsultation()}
            onNavigateHome={() => handleNavigate('home')}
          />
        );

      case 'scholarships':
        return (
          <ScholarshipsView
            onApplyScholarship={() => handleOpenConsultation()}
            onBookConsultation={() => handleOpenConsultation()}
            onNavigateHome={() => handleNavigate('home')}
          />
        );

      case 'pathway':
        return (
          <PathwayView
            onSelectUniversity={handleSelectUniversity}
            onBookConsultation={() => handleOpenConsultation()}
            onNavigateHome={() => handleNavigate('home')}
          />
        );

      case 'cost-calculator':
        return (
          <CostEstimatorView
            onBookConsultation={() => handleOpenConsultation()}
            onNavigateHome={() => handleNavigate('home')}
          />
        );

      case 'ielts':
        return (
          <IeltsView
            onBookConsultation={() => handleOpenConsultation()}
            onNavigateHome={() => handleNavigate('home')}
          />
        );

      case 'work-pr':
        return (
          <WorkAndPrView
            onBookConsultation={(country) => handleOpenConsultation(country)}
            onNavigateHome={() => handleNavigate('home')}
          />
        );

      case 'blog':
        return (
          <BlogView
            onOpenConsultation={() => handleOpenConsultation()}
            onNavigateHome={() => handleNavigate('home')}
          />
        );

      case 'services':
        return (
          <ServicesView
            onBookConsultation={() => handleOpenConsultation()}
            onNavigateHome={() => handleNavigate('home')}
          />
        );

      case 'about':
        return (
          <AboutView
            onBookConsultation={() => handleOpenConsultation()}
            onExploreDestinations={() => handleNavigate('destinations')}
            onNavigateHome={() => handleNavigate('home')}
          />
        );

      case 'why-bcas':
        return (
          <WhyBcasView
            onBookConsultation={() => handleOpenConsultation()}
            onNavigateHome={() => handleNavigate('home')}
          />
        );

      case 'journey':
        return (
          <JourneyView
            onBookConsultation={() => handleOpenConsultation()}
            onNavigateHome={() => handleNavigate('home')}
          />
        );

      case 'stories':
        return (
          <StoriesView
            onBookConsultation={() => handleOpenConsultation()}
            onNavigateHome={() => handleNavigate('home')}
          />
        );

      case 'advisors':
        return (
          <AdvisorsView
            onBookConsultation={() => handleOpenConsultation()}
            onNavigateHome={() => handleNavigate('home')}
          />
        );

      case 'contact':
        return (
          <ContactView
            onBookConsultation={() => handleOpenConsultation()}
            onNavigateHome={() => handleNavigate('home')}
          />
        );

      case 'home':
      default:
        return (
          <main className="flex-1">
            {/* 1. HERO SECTION (Primary Value Proposition, Stats & CTAs) */}
            <div id="home">
              <HeroSection
                onFindUniversity={() => handleNavigate('universities')}
                onBookConsultation={() => handleOpenConsultation()}
              />
            </div>

            {/* 2. UNIVERSITY QUICK FINDER STRIP (Fast Interactive Search) */}
            <div id="finder">
              <UniversityFinder
                onSelectUniversity={handleSelectUniversity}
                onExploreAll={() => handleNavigate('universities')}
              />
            </div>

            {/* 3. DEDICATED SUB-PAGES HUB (Section Showing All Sub-Pages) */}
            <div id="sub-pages">
              <SubPagesHubSection
                onNavigate={handleNavigate}
              />
            </div>

            {/* 4. TOP STUDY DESTINATIONS HIGHLIGHTS */}
            <div id="destinations-preview">
              <StudyDestinationsSection
                onSelectDestination={(country) => handleOpenDestinationPage(country)}
                onExploreAll={() => handleNavigate('destinations')}
              />
            </div>

            {/* 5. WHY BCAS (8 Core Advantages & Trust Pillars) */}
            <div id="why-bcas-preview">
              <WhyBcasSection />
            </div>

            {/* 6. STUDENT VIDEO TESTIMONIALS & PLACEMENT REFLECTIONS */}
            <div id="stories-preview">
              <TestimonialVideoSection
                onBookConsultation={() => handleOpenConsultation()}
              />
            </div>

            {/* 7. LEAD GENERATION & ELIGIBILITY ASSESSMENT FORM */}
            <div id="lead-assessment">
              <LeadGenSection />
            </div>

            {/* 8. OUR CAMPUSES & IMMEDIATE CONTACT DESK */}
            <div id="contact-preview">
              <ContactSection
                onOpenConsultation={() => handleOpenConsultation()}
              />
            </div>
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#103578] selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Dynamic Main Body Content: Dedicated Section Pages or Home Overview */}
      {renderCurrentView()}

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
