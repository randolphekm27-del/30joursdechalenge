import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onPrimaryCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onPrimaryCtaClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden px-4">
      <motion.div 
        className="z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="font-space-grotesk text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter max-w-4xl"
          variants={itemVariants}
        >
          🌋 30 jours pour prouver à toi-même de quoi tu es capable
        </motion.h1>
        <motion.p 
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl"
          variants={itemVariants}
        >
          Chaque année, tu te promets : “Cette fois je vais me lancer.”, “Je suis prêt.”, “Je vais arrêter de procrastiner.” Et puis la vie reprend. Tu attends “le bon moment”.
        </motion.p>
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
          variants={itemVariants}
        >
          <motion.button 
            onClick={onPrimaryCtaClick}
            className="w-full sm:w-auto bg-gradient-to-r from-[#8A63FF] to-[#6c4de0] text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-lg"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 20px #8A63FF, 0 0 40px #8A63FF'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Je m'engage pour mes 30 jours
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;