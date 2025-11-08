import React from 'react';
import AnimatedCard from './AnimatedCard';
import { Quote } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <AnimatedCard>
          <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold mb-8">
            La vérité ? <br/> Ce n’est pas un manque de capacité. <br/> C’est un manque d’<span className="text-glow-purple">engagement réel.</span>
          </h2>
          
          <div className="mt-12 glass-card p-8 rounded-2xl max-w-3xl mx-auto text-xl md:text-2xl text-gray-300 space-y-6 font-manrope">
            <Quote className="w-10 h-10 text-[#8A63FF] mx-auto mb-4" />
            <p className="text-2xl md:text-3xl italic text-white">L’être humain peut soulever une montagne… à condition d’avoir des raisons suffisamment fortes pour le faire.</p>
          </div>

          <div className="text-xl md:text-2xl text-gray-300 space-y-4 font-manrope mt-12">
            <p>Tu n’avances pas parce que tu n’as pas encore solidifié ton “POURQUOI”.</p>
            <p>Tu n’es pas en retard — tu es en mode attente.</p>
            <p>Tu n’es pas faible — tu es <strong className="text-white">sous-engagé.</strong></p>
            <p className="font-bold text-white text-2xl md:text-3xl pt-6">Et c’est exactement là que ce challenge frappe.</p>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default ProblemSection;