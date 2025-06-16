
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, QrCode } from 'lucide-react';

interface HeroSectionProps {
  language: 'fr' | 'en';
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const content = {
    fr: {
      title: 'Rendez vos documents incontestables.',
      subtitle: 'Authentic est une solution de signature électronique et de vérification intelligente conçue pour lutter contre la fraude documentaire.',
      cta: 'Demander une démo',
      features: ['Signature électronique sécurisée', 'Vérification par QR code', 'Intelligence artificielle intégrée']
    },
    en: {
      title: 'Make your documents unquestionable.',
      subtitle: 'Authentic is an electronic signature and intelligent verification solution designed to combat document fraud.',
      cta: 'Request Demo',
      features: ['Secure electronic signature', 'QR code verification', 'Integrated artificial intelligence']
    }
  };

  const t = content[language];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t.subtitle}
            </p>
            
            {/* Features */}
            <div className="space-y-4">
              {t.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 text-lg">
              {t.cta}
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-6">
                {/* Document Header */}
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="text-blue-900" size={24} />
                    <span className="font-semibold text-gray-900">Document Officiel</span>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Vérifié
                  </div>
                </div>

                {/* Document Content */}
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>

                {/* QR Code and Signature */}
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center space-x-2">
                    <QrCode size={48} className="text-blue-900" />
                    <div className="text-sm text-gray-600">
                      <div>Code de vérification</div>
                      <div className="font-mono text-xs">AUT-2024-001</div>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <div>Signature numérique</div>
                    <div className="font-semibold text-blue-900">✓ Authentifié</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              IA Intégrée
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              100% Sécurisé
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
