
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-card flex flex-col sm:flex-row justify-between items-center p-4 rounded-xl">
          <p className="text-sm text-gray-400 mb-2 sm:mb-0">&copy; {new Date().getFullYear()} 30 Jours Challenge. Tous droits réservés.</p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Réseaux</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
