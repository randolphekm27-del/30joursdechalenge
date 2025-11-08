import React from 'react';
import AnimatedCard from './AnimatedCard';
import {Zap, BrainCircuit, Star} from 'lucide-react';

const gains = [
    "Une raison d’agir",
    "Un objectif qui te réveille le matin",
    "Un cadre qui t’empêche d’abandonner",
    "Une discipline que tu vas garder",
    "Une confiance qui ne se négocie plus",
];

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-black px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <AnimatedCard>
            <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold mb-8 flex items-center justify-center gap-4">
                <Zap className="w-10 h-10 text-[#8A63FF]"/> Pourquoi 30 jours ?
            </h2>
            <div className="text-xl md:text-2xl text-gray-300 space-y-6 font-manrope max-w-3xl mx-auto glass-card p-8 rounded-2xl">
                <p>Parce que 30 jours, c’est court. Suffisamment pour rester focus. Assez long pour transformer ton esprit.</p>
                <p className="font-bold text-white text-2xl md:text-3xl pt-4">30 jours c’est la frontière entre : <br/> <span className="text-gray-400">“Un jour…”</span> et <span className="text-glow-purple">“C’est maintenant.”</span></p>
            </div>
        </AnimatedCard>

        <AnimatedCard delay={0.3}>
            <div className="mt-24">
                <h3 className="font-space-grotesk text-4xl md:text-5xl font-bold mb-8 flex items-center justify-center gap-4">
                    <BrainCircuit className="w-10 h-10 text-[#22E1FF]"/> Ce que tu vas réellement gagner
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
                    {gains.map((gain, i) => (
                        <div key={i} className="flex items-center p-3 sm:p-4 border border-white/10 rounded-lg">
                            <Star className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                            <span className="text-sm sm:text-base text-gray-300">{gain}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-xl md:text-2xl text-gray-300 space-y-6 font-manrope glass-card p-8 rounded-2xl">
                    <p className="font-bold text-white text-2xl md:text-3xl">Tu vas comprendre quelque chose de très puissant :</p>
                    <p className="italic">Ce n’est jamais la compétence qui manque. C’est le <strong className="text-white">déclencheur.</strong></p>
                    <p className="pt-4">Et quand tu le trouves → tu deviens <span className="text-glow-purple font-bold">unstoppable.</span></p>
                </div>
            </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default BenefitsSection;