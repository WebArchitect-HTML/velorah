import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Studio } from './components/Studio';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useReveal } from './hooks/use-reveal';
import { useClickSound } from './hooks/use-click-sound';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useClickSound();
  useReveal();

  return (
    <div className="relative min-h-screen w-full bg-background">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Navigation />
      <main>
        <Hero />
        <Studio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}



