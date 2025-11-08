import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';

const ProgramSection: React.FC = () => {
  return (
    <section id="programme" className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <AnimatedCard>
          <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold mb-8">
            Ce challenge n’est pas fait pour produire un résultat.
          </h2>
          <p className="text-2xl md:text-4xl text-white font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
            Il est fait pour produire <span className="text-white">une version de toi.</span>
          </p>
          <div className="text-xl md:text-2xl text-gray-300 space-y-6 font-manrope max-w-2xl mx-auto">
              <p>Celle qui se lève chaque matin avec un devoir. Un but. Une mission.</p>
              <p>Pas parce qu’elle “doit”. Mais parce qu’elle <strong className="text-white">a décidé.</strong></p>
          </div>
        </AnimatedCard>
        
        <AnimatedCard delay={0.3}>
            <div className="mt-24">
                 <h3 className="font-space-grotesk text-4xl md:text-5xl font-bold mb-8">Le principe est simple. Brutal. Libérateur.</h3>
                 <div className="glass-card p-8 md:p-12 rounded-2xl text-xl md:text-2xl text-gray-300 space-y-6 font-manrope max-w-2xl mx-auto">
                    <p>Tu choisis un objectif non négociable. Tu t’engages. Tu te mets dos au mur. Tu avances, jour après jour.</p>
                    <p className="font-bold text-white text-2xl md:text-3xl border-2 border-[#8A63FF] p-4 rounded-lg">“J’ai promis. Je termine.”</p>
                    <p>C’est tout. Mais c’est assez pour changer une vie.</p>
                    <p className="pt-4">Parce que le problème n’a jamais été le chemin. <br/>Le problème a toujours été <strong className="text-white">l'absence de départ.</strong></p>
                 </div>
            </div>
        </AnimatedCard>

      </div>
    </section>
  );
};

export default ProgramSection;
