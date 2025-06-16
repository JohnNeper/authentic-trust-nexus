
import React from 'react';
import { Shield, QrCode, Brain, Key, Users, Archive } from 'lucide-react';

interface FeaturesSectionProps {
  language: 'fr' | 'en';
}

const FeaturesSection = ({ language }: FeaturesSectionProps) => {
  const content = {
    fr: {
      title: 'Fonctionnalités Avancées',
      subtitle: 'Une suite complète d\'outils pour sécuriser et vérifier vos documents officiels',
      features: [
        {
          icon: Shield,
          title: 'Cryptographie Avancée',
          description: 'Algorithmes de chiffrement de dernière génération pour signer vos documents de manière inviolable.'
        },
        {
          icon: QrCode,
          title: 'QR Code Sécurisé',
          description: 'Vérification publique instantanée grâce à des QR codes uniques et infalsifiables.'
        },
        {
          icon: Brain,
          title: 'Intelligence Artificielle',
          description: 'Analyse contextuelle et sémantique automatique pour détecter les anomalies documentaires.'
        },
        {
          icon: Key,
          title: 'Infrastructure PKI',
          description: 'Système à clé publique robuste pour identifier et authentifier tous les signataires.'
        },
        {
          icon: Users,
          title: 'Interface Publique',
          description: 'Plateforme de vérification accessible au grand public pour valider l\'authenticité des documents.'
        },
        {
          icon: Archive,
          title: 'Archivage Sécurisé',
          description: 'Stockage chiffré avec historique complet et traçabilité de tous les documents.'
        }
      ]
    },
    en: {
      title: 'Advanced Features',
      subtitle: 'A complete suite of tools to secure and verify your official documents',
      features: [
        {
          icon: Shield,
          title: 'Advanced Cryptography',
          description: 'Latest generation encryption algorithms to sign your documents in an unbreakable way.'
        },
        {
          icon: QrCode,
          title: 'Secure QR Code',
          description: 'Instant public verification through unique and tamper-proof QR codes.'
        },
        {
          icon: Brain,
          title: 'Artificial Intelligence',
          description: 'Automatic contextual and semantic analysis to detect document anomalies.'
        },
        {
          icon: Key,
          title: 'PKI Infrastructure',
          description: 'Robust public key system to identify and authenticate all signatories.'
        },
        {
          icon: Users,
          title: 'Public Interface',
          description: 'Verification platform accessible to the general public to validate document authenticity.'
        },
        {
          icon: Archive,
          title: 'Secure Archiving',
          description: 'Encrypted storage with complete history and traceability of all documents.'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-900 transition-colors duration-300">
                  <feature.icon className="text-blue-900 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
