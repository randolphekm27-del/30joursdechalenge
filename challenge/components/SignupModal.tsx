
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [objective, setObjective] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: insertError } = await supabase
        .from('challengers')
        .insert([{ name, email, objective }]);

      if (insertError) {
        if (insertError.code === '23505') {
          setError('Cet email est déjà inscrit au challenge');
        } else {
          setError('Une erreur est survenue. Réessaye plus tard.');
        }
        throw insertError;
      }

      setSuccess(true);
      setTimeout(() => {
        setName('');
        setEmail('');
        setObjective('');
        setSuccess(false);
        onClose();
      }, 2000);
    } catch (err) {
      console.error('Error submitting form:', err);
    } finally {
      setLoading(false);
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 15, stiffness: 200 } },
    exit: { opacity: 0, y: 50, scale: 0.9 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="glass-card relative w-full max-w-md p-8 rounded-2xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
              <X />
            </button>
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-bold text-center mb-2">Rejoins le challenge</h2>
            <p className="text-center text-sm sm:text-base text-gray-300 mb-6">L'aventure commence ici. Présente-toi et fixe ton objectif.</p>

            {success ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-4xl">✅</div>
                </div>
                <h3 className="text-xl font-bold mb-2">Bienvenue dans le challenge !</h3>
                <p className="text-gray-300">Ton inscription a été enregistrée.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ton prénom</label>
                    <input
                      type="text"
                      placeholder="Ex: Thomas"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8A63FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Ton email</label>
                    <input
                      type="email"
                      placeholder="ton.email@exemple.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8A63FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Ton objectif pour les 30 prochains jours</label>
                    <textarea
                      placeholder="Ex: Signer mes 3 premiers clients en freelance"
                      value={objective}
                      onChange={(e) => setObjective(e.target.value)}
                      required
                      rows={3}
                      className="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8A63FF] resize-none"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-sm text-red-400">
                      {error}
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#8A63FF] to-[#6c4de0] text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    whileHover={!loading ? {
                      scale: 1.02,
                      boxShadow: '0 0 15px #8A63FF'
                    } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Inscription en cours...</span>
                      </>
                    ) : (
                      "Je m'engage pour 30 jours"
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignupModal;
