import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';

const stages = [
    { label: "Avant", text: "“Je veux faire.”" },
    { label: "Pendant", text: "“Je dois faire.”" },
    { label: "Après", text: "“Je suis quelqu’un qui fait.”" }
];

const IdentityTransition: React.FC = () => {
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      },
    },
  };

  return (
    <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-4xl text-center">
            <AnimatedCard>
                <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold mb-16">
                    Tu vas changer ta relation avec toi-même.
                </h2>
            </AnimatedCard>
            <motion.div
                className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                {stages.map((stage, index) => (
                <React.Fragment key={stage.label}>
                    <motion.div variants={itemVariants} className="flex flex-col items-center">
                        <p className="text-sm text-gray-400 mb-2">{stage.label}</p>
                        <p className="font-space-grotesk text-2xl md:text-4xl font-bold text-white glass-card py-4 px-6 rounded-lg">{stage.text}</p>
                    </motion.div>
                    {index < stages.length - 1 && (
                    <motion.div variants={itemVariants} className="text-2xl md:text-4xl text-gray-600 my-4 md:my-0">→</motion.div>
                    )}
                </React.Fragment>
                ))}
            </motion.div>
            <AnimatedCard delay={0.5}>
                <div className="mt-16 text-xl md:text-2xl text-gray-300 space-y-6 font-manrope max-w-3xl mx-auto">
                    <p>Et ce simple glissement vaut plus qu’un diplôme. Plus qu’un abonnement à un cours. Plus qu’un autre “plan”.</p>
                    <p className="font-bold text-white">Parce que quand tu deviens quelqu’un qui agit… le monde te respecte différemment. Les opportunités se déplacent vers toi. Tu n’attends plus. Tu crées.</p>
                </div>
            </AnimatedCard>
        </div>
    </section>
  );
};

export default IdentityTransition;
