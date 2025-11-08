import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import AnimatedCard from './AnimatedCard';

interface AnimatedCounterProps {
  to: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ to }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, to, {
        duration: 2,
        ease: 'easeOut'
      });
      return animation.stop;
    }
  }, [isInView, count, to]);

  return <motion.h3 ref={ref} className="font-space-grotesk text-6xl md:text-7xl font-bold text-white tracking-tighter">{rounded}</motion.h3>;
};

const stats = [
  { value: 30, label: "JOURS", description: "Pour construire une routine d'action et obtenir des résultats mesurables." },
  { value: 1, label: "OBJECTIF", description: "Passer de la compétence à la rentabilité en signant tes premiers clients." },
  { value: 3, label: "CLIENTS MINIMUM", description: "C'est la cible concrète que nous visons ensemble pendant le challenge." },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <AnimatedCard key={index} delay={index * 0.15}>
              <div className="glass-card p-8 rounded-2xl h-full text-center flex flex-col items-center">
                <AnimatedCounter to={stat.value} />
                <p className="font-space-grotesk text-xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#8A63FF] to-[#22E1FF]">{stat.label}</p>
                <p className="text-gray-400 mt-4 text-sm max-w-xs">{stat.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;