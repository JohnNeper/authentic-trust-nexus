
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
  language: 'fr' | 'en';
  onLanguageChange: (lang: 'fr' | 'en') => void;
}

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const content = {
    fr: {
      home: 'Accueil',
      about: 'À propos',
      contact: 'Contact',
      demo: 'Demander une démo',
      login: 'Connexion'
    },
    en: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      demo: 'Request Demo',
      login: 'Login'
    }
  };

  const t = content[language];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/6703fdf1-262e-43bf-9da6-dfe1abea2d13.png" 
              alt="Authentic Logo" 
              className="h-12 w-auto"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `font-medium transition-colors ${isActive ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'}`
              }
            >
              {t.home}
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `font-medium transition-colors ${isActive ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'}`
              }
            >
              {t.about}
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `font-medium transition-colors ${isActive ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'}`
              }
            >
              {t.contact}
            </NavLink>
            
            {/* Language Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onLanguageChange('fr')}
                className={`px-2 py-1 text-sm font-medium rounded ${
                  language === 'fr' ? 'bg-blue-900 text-white' : 'text-gray-600 hover:text-blue-900'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 text-sm font-medium rounded ${
                  language === 'en' ? 'bg-blue-900 text-white' : 'text-gray-600 hover:text-blue-900'
                }`}
              >
                EN
              </button>
            </div>

            {/* Login Button */}
            <NavLink to="/login">
              <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
                <User className="mr-2" size={16} />
                {t.login}
              </Button>
            </NavLink>
            
            <Button className="bg-blue-900 hover:bg-blue-800 text-white">
              {t.demo}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <NavLink to="/" className="font-medium text-gray-700 hover:text-blue-900">
                {t.home}
              </NavLink>
              <NavLink to="/about" className="font-medium text-gray-700 hover:text-blue-900">
                {t.about}
              </NavLink>
              <NavLink to="/contact" className="font-medium text-gray-700 hover:text-blue-900">
                {t.contact}
              </NavLink>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onLanguageChange('fr')}
                  className={`px-2 py-1 text-sm font-medium rounded ${
                    language === 'fr' ? 'bg-blue-900 text-white' : 'text-gray-600'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => onLanguageChange('en')}
                  className={`px-2 py-1 text-sm font-medium rounded ${
                    language === 'en' ? 'bg-blue-900 text-white' : 'text-gray-600'
                  }`}
                >
                  EN
                </button>
              </div>
              <NavLink to="/login">
                <Button variant="outline" className="border-blue-900 text-blue-900 w-fit">
                  <User className="mr-2" size={16} />
                  {t.login}
                </Button>
              </NavLink>
              <Button className="bg-blue-900 hover:bg-blue-800 text-white w-fit">
                {t.demo}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
