
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

interface FooterProps {
  language: 'fr' | 'en';
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    fr: {
      about: 'À propos',
      contact: 'Contact',
      legal: 'Mentions légales',
      email: 'Email de contact',
      copyright: '© 2024 Authentic. Tous droits réservés.',
      mission: 'Authentic contribue à un écosystème administratif plus transparent, plus fiable, et plus moderne.',
      location: 'Bamenda, Nord-Ouest Cameroun'
    },
    en: {
      about: 'About',
      contact: 'Contact',
      legal: 'Legal Notice',
      email: 'Contact Email',
      copyright: '© 2024 Authentic. All rights reserved.',
      mission: 'Authentic contributes to a more transparent, reliable, and modern administrative ecosystem.',
      location: 'Bamenda, North West Cameroon'
    }
  };

  const t = content[language];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/lovable-uploads/6703fdf1-262e-43bf-9da6-dfe1abea2d13.png" 
              alt="Authentic Logo" 
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              {t.mission}
            </p>
            <p className="text-sm text-gray-400">
              {t.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  {t.about}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t.contact}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t.legal}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <a href="mailto:contact@authentic.cm" className="text-gray-300 hover:text-white transition-colors">
                  contact@authentic.cm
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin size={16} />
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
