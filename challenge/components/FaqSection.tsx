import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const faqs = [
  { q: "“Et si je ne comprends pas ?”", a: "Justement. Ce challenge est fait pour te rendre les choses claires." },
  { q: "“Et si j’ai peur ?”", a: "Alors tu es humain. Et c’est EXACTEMENT pour ça qu’on avance ensemble." },
  { q: "“Et si je n'y arrive pas ?”", a: "Le seul moyen d’échouer… c’est de ne pas essayer." },
  { q: "“Et si ça change vraiment ma vie ?”", a: "Alors tu auras 30 jours qui valent plus qu’une année d’hésitation." }
];

const AccordionItem: React.FC<{ q: string; a: string; }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <span className="text-lg font-medium">{q}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-300">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-3xl">
        <AnimatedCard>
          <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold text-center mb-16">
            🤔 FAQ émotionnelle
          </h2>
        </AnimatedCard>
        <AnimatedCard>
            <div className="glass-card p-4 sm:p-8 rounded-2xl">
                {faqs.map((faq, index) => (
                <AccordionItem key={index} q={faq.q} a={faq.a} />
                ))}
            </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default FaqSection;