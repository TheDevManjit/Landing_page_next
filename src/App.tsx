import  { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Background from './components/Background';

import EnquiryPopup from './components/EnquiryPopup';
import ErrorBoundary from './components/ErrorBoundary';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

import Footer from './components/Footer';
import LatestWork from './components/Latest';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <EnquiryPopup />

      {/* Hero Section */}
      <section className="h-screen relative w-full">
        <ErrorBoundary>
          <Canvas className="absolute inset-0">
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <Background />
              {/* <Logo3D /> */}
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </ErrorBoundary>

        <div className="absolute inset-0  z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center flex justify-center  items-center h-screen px-6 md:px-12"
          >

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-4xl md:text-8xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg"
                style={{ textShadow: '0 0 15px rgba(74, 222, 128, 0.8), 0 0 25px rgba(59, 130, 246, 0.6)' }}
              >
                Elevate Your Institute
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-lg md:text-4xl text-gray-300 drop-shadow-md"
                style={{ textShadow: '0 0 10px rgba(209, 213, 219, 0.7)' }}
              >
                Unleashing growth for businesses with bold, innovative marketing strategies.
              </motion.p>
            </div>

          </motion.div>
        </div>
      </section>

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