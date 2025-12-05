import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Services } from './components/Services';
import { Partnerships } from './components/Partnerships';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Enquiry } from './components/Enquiry';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-paper-gold selection:text-white overflow-x-hidden">
      <CustomCursor />
      <Header onNavigate={scrollToSection} />
      <main className="flex-grow">
        <Hero onNavigate={scrollToSection} />
        <Marquee />
        <Services />
        <Partnerships />
        <Process />
        <Portfolio />
        <Enquiry />
      </main>
      <Footer />
    </div>
  );
}

export default App;