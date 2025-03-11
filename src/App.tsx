import Navbar from './components/Navbar';
import EnquiryPopup from './components/EnquiryPopup';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LatestWork from './components/Latest';
import Hero from './components/Hero';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <EnquiryPopup />

      {/* Hero Section */}
      <Hero />

      <About />
      <Services />
      <LatestWork />
      <Testimonials />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;