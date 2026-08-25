import React, { useState } from 'react';
import { Language } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { WhoWeHelp } from './components/WhoWeHelp';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { PayWhatYouCan } from './components/PayWhatYouCan';
import { Workshops } from './components/Workshops';
import { Survey } from './components/Survey';
import { Footer } from './components/Footer';
import { HelpRequestModal } from './components/HelpRequestModal';
import { WorkshopModal } from './components/WorkshopModal';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [largeText, setLargeText] = useState<boolean>(false);
  const [helpModalOpen, setHelpModalOpen] = useState<boolean>(false);
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [workshopModalOpen, setWorkshopModalOpen] = useState<boolean>(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState<string>('');

  const handleOpenHelpModal = (topic?: string) => {
    setSelectedTopic(topic || '');
    setHelpModalOpen(true);
  };

  const handleOpenWorkshopModal = (workshopTitle: string) => {
    setSelectedWorkshop(workshopTitle);
    setWorkshopModalOpen(true);
  };

  return (
    <div className={`min-h-screen bg-[#FDF6EC] text-[#343434] ${largeText ? 'text-lg' : 'text-base'}`}>
      
      {/* Navigation Header with Accessibility & Language Controls */}
      <Navbar
        lang={lang}
        setLang={setLang}
        largeText={largeText}
        setLargeText={setLargeText}
        onOpenHelpModal={handleOpenHelpModal}
      />

      {/* Main Page Content Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          lang={lang}
          onOpenHelpModal={() => handleOpenHelpModal()}
          largeText={largeText}
        />

        {/* 2. Mission Section */}
        <Mission
          lang={lang}
          largeText={largeText}
        />

        {/* 3. Who We Help (6 Audiences) */}
        <WhoWeHelp
          lang={lang}
          onOpenHelpModal={handleOpenHelpModal}
          largeText={largeText}
        />

        {/* 4. Core Services */}
        <Services
          lang={lang}
          onOpenHelpModal={handleOpenHelpModal}
          largeText={largeText}
        />

        {/* 5. How It Works (4 Anxiety-Reducing Steps) */}
        <HowItWorks
          lang={lang}
          onOpenHelpModal={() => handleOpenHelpModal()}
          largeText={largeText}
        />

        {/* 6. Pay What You Can Interactive Calculator */}
        <PayWhatYouCan
          lang={lang}
          onOpenHelpModal={handleOpenHelpModal}
          largeText={largeText}
        />

        {/* 7. Upcoming Community Workshops */}
        <Workshops
          lang={lang}
          onOpenWorkshopModal={handleOpenWorkshopModal}
          largeText={largeText}
        />

        {/* 8. Community Voice & Survey */}
        <Survey
          lang={lang}
          largeText={largeText}
        />
      </main>

      {/* Footer & Desert Mountain Skyline */}
      <Footer
        lang={lang}
        onOpenHelpModal={() => handleOpenHelpModal()}
      />

      {/* Booking & Assistance Modals */}
      <HelpRequestModal
        isOpen={helpModalOpen}
        onClose={() => setHelpModalOpen(false)}
        lang={lang}
        preselectedTopic={selectedTopic}
      />

      <WorkshopModal
        isOpen={workshopModalOpen}
        onClose={() => setWorkshopModalOpen(false)}
        lang={lang}
        workshopTitle={selectedWorkshop}
      />

    </div>
  );
};

export default App;
