import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Solutions from './components/Solutions';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Solutions />
        <Portfolio />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
