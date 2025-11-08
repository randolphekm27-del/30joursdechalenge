import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';
import { Target, Users, Calendar, Loader2 } from 'lucide-react';
import { supabase, Challenger } from '../lib/supabase';

const ChallengersPage: React.FC = () => {
  const [challengers, setChallengers] = useState<Challenger[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchChallengers();
  }, []);

  const fetchChallengers = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('challengers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setChallengers(data || []);
    } catch (err) {
      setError('Impossible de charger les challengers');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  return (
    <section className="py-20 md:py-32 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <AnimatedCard>
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[#8A63FF]" />
              <h1 className="font-space-grotesk text-4xl sm:text-5xl md:text-6xl font-bold">
                Les Challengers
              </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Ils ont décidé de passer à l'action. Découvre leurs objectifs et rejoins le mouvement.
            </p>
            <div className="mt-6 sm:mt-8 glass-card inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
                <span className="text-[#8A63FF]">{challengers.length}</span> Challengers en action
              </p>
            </div>
          </div>
        </AnimatedCard>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 text-[#8A63FF] animate-spin" />
          </div>
        ) : error ? (
          <div className="glass-card p-8 rounded-2xl text-center">
            <p className="text-red-400 text-lg">{error}</p>
          </div>
        ) : challengers.length === 0 ? (
          <AnimatedCard>
            <div className="glass-card p-8 sm:p-12 rounded-2xl text-center">
              <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Sois le premier à relever le challenge</h3>
              <p className="text-gray-300 text-base sm:text-lg">Aucun challenger pour le moment. Lance-toi et inspire les autres !</p>
            </div>
          </AnimatedCard>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {challengers.map((challenger, index) => (
              <AnimatedCard key={challenger.id} delay={index * 0.1}>
                <motion.div
                  className="glass-card p-5 sm:p-6 rounded-xl h-full flex flex-col relative overflow-hidden group"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-[#8A63FF]/20 to-transparent rounded-bl-full"></div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-space-grotesk text-xl sm:text-2xl font-bold mb-1 group-hover:text-glow-purple transition-all">
                          {challenger.name}
                        </h3>
                        <div className="flex items-center text-xs sm:text-sm text-gray-400 gap-2">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>Lancé le {formatDate(challenger.start_date)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-6">
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#22E1FF]" />
                        <span className="text-xs sm:text-sm font-semibold text-gray-400">Objectif 30 jours</span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                        {challenger.objective}
                      </p>
                    </div>

                    <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm text-gray-400">En cours...</span>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse"></div>
                          <span className="text-xs sm:text-sm text-green-400 font-semibold">Actif</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ChallengersPage;
