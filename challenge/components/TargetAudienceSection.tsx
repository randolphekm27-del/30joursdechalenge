import React from 'react';
import AnimatedCard from './AnimatedCard';
import { Check, X } from 'lucide-react';

const forYou = [
    "“Je sais faire, mais je n’arrive pas à vendre”",
    "“Je veux gagner ma vie avec ma compétence”",
    "“Je manque de structure”",
    "“Je suis prêt à me bouger si on me guide”",
    "“Je veux arrêter d’être spectateur”",
];

const notForYou = [
    "Tu veux un miracle sans effort",
    "Tu refuses de passer à l’action",
    "Tu cherches des excuses au lieu de résultats",
];

const TargetAudienceSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 bg-black/50">
      <div className="container mx-auto max-w-5xl">
        <AnimatedCard>
          <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold text-center mb-16">
            🔥 Pour qui est-ce challenge ?
          </h2>
        </AnimatedCard>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatedCard delay={0.1}>
            <div className="glass-card p-8 rounded-2xl h-full border-green-400/30">
              <h3 className="font-manrope text-2xl font-bold mb-6">Pour toi si tu te reconnais :</h3>
              <ul className="space-y-4">
                {forYou.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedCard>
          <AnimatedCard delay={0.2}>
            <div className="glass-card p-8 rounded-2xl h-full border-red-400/30">
              <h3 className="font-manrope text-2xl font-bold mb-6">Pas pour toi si :</h3>
              <ul className="space-y-4">
                {notForYou.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <X className="w-6 h-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;