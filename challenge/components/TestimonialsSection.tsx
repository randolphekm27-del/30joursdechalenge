import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const testimonials = [
  { name: "Léa Dubois", role: "Développeuse Freelance", quote: "Ce challenge a tout changé. J'ai signé 2 clients en moins de 30 jours, chose que je n'osais même pas imaginer avant.", avatar: "https://picsum.photos/id/237/100/100" },
  { name: "Marc Petit", role: "Graphiste Indépendant", quote: "La structure du programme est incroyable. Chaque jour, je savais exactement quoi faire. Plus de procrastination !", avatar: "https://picsum.photos/id/238/100/100" },
  { name: "Sophie Martin", role: "Consultante Marketing", quote: "J'avais la compétence, mais pas la confiance. Le groupe et le suivi m'ont donné l'élan pour enfin me lancer sérieusement.", avatar: "https://picsum.photos/id/239/100/100" }
];

const TestimonialsSection: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    let newIndex = page + newDirection;
    if (newIndex < 0) {
      newIndex = testimonials.length - 1;
    } else if (newIndex >= testimonials.length) {
      newIndex = 0;
    }
    setPage([newIndex, newDirection]);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const testimonial = testimonials[page];

  return (
    <section className="py-20 md:py-32 bg-black px-4 overflow-hidden">
      <div className="container mx-auto max-w-4xl relative">
        <AnimatedCard>
          <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold text-center mb-16">
            Ils ont arrêté de préparer. Ils ont commencé à vivre.
          </h2>
        </AnimatedCard>
        
        <div className="relative h-80 md:h-72 flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="absolute w-full px-4 md:px-0"
                >
                    <div className="glass-card p-8 rounded-2xl h-full flex flex-col justify-between max-w-2xl mx-auto">
                        <div>
                            <div className="flex text-[#FFC700] mb-4">
                                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
                            </div>
                            <p className="text-gray-300 italic text-base md:text-lg">"{testimonial.quote}"</p>
                        </div>
                        <div className="flex items-center mt-6">
                            <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <p className="font-bold text-white">{testimonial.name}</p>
                                <p className="text-sm text-gray-400">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-4">
            <button onClick={() => paginate(-1)} aria-label="Témoignage précédent" className="glass-card p-3 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
                <ArrowLeft className="w-6 h-6" />
            </button>
            <button onClick={() => paginate(1)} aria-label="Témoignage suivant" className="glass-card p-3 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
                <ArrowRight className="w-6 h-6" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;