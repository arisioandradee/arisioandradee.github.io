import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import TechStack from './components/TechStack';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
