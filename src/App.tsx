import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Studio } from './components/Studio';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useReveal } from './hooks/use-reveal';

export default function App() {
  useReveal();

  return (
    <div className="relative min-h-screen w-full bg-background">
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
