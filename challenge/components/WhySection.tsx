import React from 'react';
import AnimatedCard from './AnimatedCard';

const WhySection: React.FC = () => {
    return (
        <section className="py-20 md:py-32 px-4 bg-black/50">
            <div className="container mx-auto max-w-3xl text-center">
                <AnimatedCard>
                    <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold mb-6">
                        🎯 Le principe est simple
                    </h2>
                    <div className="text-xl md:text-2xl text-gray-300 space-y-6 font-manrope">
                        <p>Pendant 30 jours, tu choisis un objectif clair. Tu t’engages. Tu annonces. Tu prends date.</p>
                        <div className="font-bold text-white text-2xl md:text-3xl border-2 border-[#8A63FF] p-6 rounded-lg max-w-xl mx-auto my-8">
                            “Dans 30 jours, je dois y arriver. Point.”
                        </div>
                        <p>Pas <i className="text-gray-400">si j’ai le temps</i>. Pas <i className="text-gray-400">si je me sens prêt</i>. Pas <i className="text-gray-400">si tout est parfait</i>.</p>
                        <p className="font-bold text-white text-2xl">Tu agis. Tu avances. Tu te prouves.</p>
                    </div>
                </AnimatedCard>

                <AnimatedCard delay={0.2}>
                    <div className="mt-16 text-xl md:text-2xl text-gray-300 space-y-6 font-manrope">
                       <p>Ce n’est pas un programme miracle. C’est un <strong className="text-white text-glow-purple text-3xl">détonateur.</strong></p>
                       <p className="pt-4">Ce challenge existe pour provoquer ce moment où tu passes de :</p>
                       <p className="text-2xl md:text-3xl font-bold"><span className="text-red-400">❌ “Je vais essayer”</span> à <span className="text-green-400">✅ “Je vais réussir — parce que j’ai décidé.”</span></p>
                    </div>
                </AnimatedCard>
            </div>
        </section>
    );
};

export default WhySection;