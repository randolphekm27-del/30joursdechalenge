
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 15, stiffness: 200 } },
    exit: { opacity: 0, y: 50, scale: 0.9 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="glass-card relative w-full max-w-md p-8 rounded-2xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
              <X />
            </button>
            <h2 className="font-space-grotesk text-3xl font-bold text-center mb-2">Rejoins le challenge</h2>
            <p className="text-center text-gray-300 mb-6">L'aventure commence ici. Entre ton email pour t'inscrire.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Inscription envoyée !'); onClose(); }}>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="ton.email@exemple.com"
                  required
                  className="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8A63FF]" 
                />
                 <motion.button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#8A63FF] to-[#6c4de0] text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg"
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: '0 0 15px #8A63FF'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    S'inscrire
                  </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignupModal;
