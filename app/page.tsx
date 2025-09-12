'use client';

import { useState } from 'react';
import WelcomePage from './WelcomePage';
import HomeComponent from './HomeComponent';
import DepartmentSelector from './Departments'; // import your department component
import SelectionStatsSection from './Result'; 
import HackClubHero from './Hackclub';
import Footer from './Footer';
import Asciipage from './Aski';

export default function Page() {
  const [showHome, setShowHome] = useState(false);
  const [userName, setUserName] = useState('');

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    setShowHome(true);
  };

  return (
    <>
      {!showHome && <WelcomePage onSubmit={handleNameSubmit} />}
      {showHome && <HomeComponent userName={userName} />}
      {showHome && <HackClubHero />}
      {showHome && <SelectionStatsSection />}
      {showHome && <DepartmentSelector />}
      {showHome && <Asciipage />}
      {showHome && <Footer />}
      {/* DepartmentSelector appears after everything */}
     

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
      
    </>
  );
}

