import React, { useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import WhySection from './components/WhySection';
import BenefitsSection from './components/BenefitsSection';
import TransformationSection from './components/TransformationSection';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import SignupModal from './components/SignupModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Parallax for background glows
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Glows with Parallax */}
      <motion.div style={{ y: y1 }} className="absolute top-0 left-0 w-96 h-96 bg-[#8A63FF] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></motion.div>
      <motion.div style={{ y: y2 }} className="absolute top-1/4 right-0 w-96 h-96 bg-[#22E1FF] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></motion.div>
      <motion.div style={{ y: y3 }} className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#8A63FF] rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></motion.div>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8A63FF] to-[#22E1FF] origin-left z-50" style={{ scaleX }} />

      <Header onCtaClick={openModal} />
      
      <main className="overflow-x-hidden">
        <Hero onPrimaryCtaClick={openModal} />
        <ProblemSection />
        <WhySection />
        <BenefitsSection />
        <TransformationSection />
        <FinalCta onCtaClick={openModal} />
      </main>

      <Footer />

      <SignupModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;