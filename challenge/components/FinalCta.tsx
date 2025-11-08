import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';

interface FinalCtaProps {
  onCtaClick: () => void;
}

const FinalCta: React.FC<FinalCtaProps> = ({ onCtaClick }) => {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-4xl text-center space-y-16">
        
        <AnimatedCard>
          <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold mb-8">
            🚪 Deux portes. Choisis :
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xl font-manrope">
              <div className="border border-red-500/30 p-6 rounded-xl">
                  <h3 className="font-bold text-2xl text-red-400 mb-3">Porte 1 :</h3>
                  <p className="text-gray-300">Tu remets ton potentiel à demain. Encore.</p>
              </div>
              <div className="border border-green-500/30 p-6 rounded-xl">
                  <h3 className="font-bold text-2xl text-green-400 mb-3">Porte 2 :</h3>
                  <p className="text-gray-300">Tu t’engages, tu te disciplines, tu avances. Tu deviens la personne qui fait — pas qui rêve.</p>
              </div>
          </div>
           <div className="mt-12 text-xl md:text-2xl text-gray-300 space-y-6 font-manrope">
              <p>Tu es capable. Tu le sais déjà.</p>
              <p className="font-bold text-white">Maintenant… tu dois juste le prouver à la seule personne qui compte : <span className="text-3xl text-glow-purple">Toi.</span></p>
          </div>
        </AnimatedCard>

        <AnimatedCard>
            <div className="relative p-8 md:p-12 rounded-2xl overflow-hidden glass-card">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8A63FF]/10 to-[#22E1FF]/10"></div>
              
              <div className="relative z-10">
                <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold mb-6">
                  🔥 Prêt à faire partie de ceux qui agissent ?
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                    30 jours. Un objectif. Un engagement. <br/> Et une nouvelle version de toi au bout du chemin.
                </p>
                <p className="text-2xl md:text-3xl font-bold text-white italic mb-10">Pas “peut-être”. Pas “un jour”. <br/> <span className="text-glow-purple">Maintenant.</span></p>

                <motion.button 
                  onClick={onCtaClick}
                  className="bg-gradient-to-r from-[#8A63FF] to-[#6c4de0] text-white font-bold text-xl px-12 py-5 rounded-full transition-all duration-300 shadow-lg"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 0 25px #8A63FF, 0 0 50px #8A63FF'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Je m'engage pour mes 30 jours
                </motion.button>
              </div>
            </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default FinalCta;