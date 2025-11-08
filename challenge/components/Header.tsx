
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onCtaClick: () => void;
  currentPage?: 'home' | 'resources';
  onNavigate?: (page: 'home' | 'resources') => void;
}

const Header: React.FC<HeaderProps> = ({ onCtaClick, currentPage = 'home', onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-3 glass-card' : 'py-6'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => onNavigate?.('home')}
          className="font-space-grotesk text-xl font-bold hover:opacity-80 transition-opacity"
        >
          30 JOURS<span className="text-[#8A63FF]">.</span>
        </button>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            <button
              onClick={() => onNavigate?.('home')}
              className={`font-semibold transition-colors ${
                currentPage === 'home' ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Accueil
            </button>
            <button
              onClick={() => onNavigate?.('resources')}
              className={`font-semibold transition-colors ${
                currentPage === 'resources' ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Ressources
            </button>
          </nav>

          <motion.button
            onClick={onCtaClick}
            className="bg-white text-black font-bold text-sm px-6 py-2 rounded-full transition-transform duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            S'inscrire
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
