import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';
import { BookOpen, Video, FileText, Headphones, Download, ExternalLink } from 'lucide-react';

interface Resource {
  title: string;
  description: string;
  type: 'ebook' | 'video' | 'article' | 'podcast' | 'template';
  icon: React.ReactNode;
  link: string;
  isPremium?: boolean;
}

const resources: Resource[] = [
  {
    title: "Guide complet : Comment trouver tes premiers clients",
    description: "Un guide PDF de 25 pages pour structurer ta prospection et signer tes premières missions.",
    type: 'ebook',
    icon: <BookOpen className="w-6 h-6" />,
    link: "#",
    isPremium: false
  },
  {
    title: "Template de proposition commerciale",
    description: "Un modèle prêt à l'emploi pour présenter tes services de manière professionnelle.",
    type: 'template',
    icon: <FileText className="w-6 h-6" />,
    link: "#",
    isPremium: false
  },
  {
    title: "Vidéo : Les 5 erreurs qui tuent ta crédibilité",
    description: "Une masterclass de 30 minutes pour éviter les pièges classiques des débutants.",
    type: 'video',
    icon: <Video className="w-6 h-6" />,
    link: "#",
    isPremium: false
  },
  {
    title: "Podcast : Mindset du freelance qui réussit",
    description: "Épisode exclusif sur la psychologie de l'action et de la persévérance.",
    type: 'podcast',
    icon: <Headphones className="w-6 h-6" />,
    link: "#",
    isPremium: false
  },
  {
    title: "Liste de 100 niches profitables",
    description: "Découvre les secteurs où tes compétences sont les plus recherchées.",
    type: 'article',
    icon: <Download className="w-6 h-6" />,
    link: "#",
    isPremium: true
  },
  {
    title: "Script de prospection LinkedIn",
    description: "Les messages exacts à envoyer pour obtenir des réponses positives.",
    type: 'template',
    icon: <FileText className="w-6 h-6" />,
    link: "#",
    isPremium: true
  }
];

const ResourceCard: React.FC<{ resource: Resource; delay: number }> = ({ resource, delay }) => {
  return (
    <AnimatedCard delay={delay}>
      <motion.div
        className="glass-card p-6 rounded-xl h-full flex flex-col relative overflow-hidden group"
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        {resource.isPremium && (
          <div className="absolute top-2 right-2 bg-gradient-to-r from-[#8A63FF] to-[#6c4de0] text-white text-xs font-bold px-3 py-1 rounded-full">
            Premium
          </div>
        )}

        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-gradient-to-br from-[#8A63FF]/20 to-[#22E1FF]/20 rounded-lg text-white">
            {resource.icon}
          </div>
          <div className="flex-1">
            <h3 className="font-space-grotesk text-xl font-bold mb-2 group-hover:text-glow-purple transition-all">
              {resource.title}
            </h3>
          </div>
        </div>

        <p className="text-gray-300 mb-6 flex-grow">
          {resource.description}
        </p>

        <motion.a
          href={resource.link}
          className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>{resource.isPremium ? 'Accéder' : 'Télécharger'}</span>
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </motion.div>
    </AnimatedCard>
  );
};

const ResourcesSection: React.FC = () => {
  const freeResources = resources.filter(r => !r.isPremium);
  const premiumResources = resources.filter(r => r.isPremium);

  return (
    <section id="resources" className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <AnimatedCard>
          <div className="text-center mb-16">
            <h1 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              Ressources gratuites
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des outils concrets pour t'aider à passer à l'action dès maintenant.
            </p>
          </div>
        </AnimatedCard>

        <div className="mb-20">
          <h2 className="font-space-grotesk text-3xl font-bold mb-8 text-center">
            Accès libre
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeResources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} delay={index * 0.1} />
            ))}
          </div>
        </div>

        <div>
          <AnimatedCard>
            <div className="glass-card p-8 rounded-2xl mb-8">
              <h2 className="font-space-grotesk text-3xl font-bold mb-4 text-center">
                Ressources Premium
              </h2>
              <p className="text-gray-300 text-center max-w-2xl mx-auto">
                Réservées aux participants du challenge 30 jours. Rejoins-nous pour débloquer l'accès complet.
              </p>
            </div>
          </AnimatedCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-75">
            {premiumResources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} delay={index * 0.1} />
            ))}
          </div>
        </div>

        <AnimatedCard delay={0.3}>
          <div className="mt-16 text-center">
            <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="font-space-grotesk text-2xl font-bold mb-4">
                Besoin de plus ?
              </h3>
              <p className="text-gray-300 mb-6">
                Rejoins le challenge pour accéder à toutes les ressources premium et au support communautaire.
              </p>
              <motion.button
                className="bg-gradient-to-r from-[#8A63FF] to-[#6c4de0] text-white font-bold text-lg px-8 py-3 rounded-full transition-all duration-300 shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 20px #8A63FF, 0 0 40px #8A63FF'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Rejoindre le challenge
              </motion.button>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default ResourcesSection;
