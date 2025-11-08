import React from 'react';
import AnimatedCard from './AnimatedCard';
import { Sparkles } from 'lucide-react';

const TransformationSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-black/50 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <AnimatedCard>
          <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold mb-8">
            💥 Tu peux continuer à te préparer… <br/> … ou tu peux décider que <span className="text-glow-purple">ton tour est venu.</span>
          </h2>
          <div className="text-xl md:text-2xl text-gray-300 space-y-6 font-manrope">
              <p>Ce challenge te demande une seule chose : <strong className="text-white">t’engager envers toi-même.</strong></p>
              <p>Pas pour impressionner les autres. Pas pour “faire semblant”.</p>
          </div>
        </AnimatedCard>
        
        <AnimatedCard delay={0.3}>
            <div className="mt-16">
                 <div className="glass-card p-8 md:p-12 rounded-2xl text-xl md:text-2xl text-gray-300 space-y-6 font-manrope max-w-3xl mx-auto">
                    <Sparkles className="w-10 h-10 text-[#8A63FF] mx-auto mb-4" />
                    <p>Pour te regarder dans le miroir dans 30 jours et dire :</p>
                    <p className="font-bold text-white text-3xl md:text-4xl border-2 border-[#8A63FF] p-6 rounded-lg">“J’ai tenu ma parole.”</p>
                 </div>
            </div>
        </AnimatedCard>

      </div>
    </section>
  );
};

export default TransformationSection;