
import React from 'react';
import { Shield, QrCode, Brain, Key, Users, Archive, Scan, CheckCircle } from 'lucide-react';

interface FeaturesSectionProps {
  language: 'fr' | 'en';
}

const FeaturesSection = ({ language }: FeaturesSectionProps) => {
  const content = {
    fr: {
      title: 'Intelligence Artificielle & Sécurité Avancée',
      subtitle: 'Une suite complète d\'outils alimentés par l\'IA pour sécuriser et vérifier vos documents officiels',
      features: [
        {
          icon: Brain,
          title: 'Intelligence Artificielle Avancée',
          description: 'Analyse sémantique et contextuelle automatique powered by AI pour détecter les anomalies, incohérences et tentatives de fraude en temps réel.',
          highlight: true
        },
        {
          icon: Scan,
          title: 'Reconnaissance IA de Documents',
          description: 'Identification automatique du type de document, extraction intelligente des données et validation de la structure grâce à nos algorithmes d\'apprentissage automatique.',
          highlight: true
        },
        {
          icon: Shield,
          title: 'Cryptographie Quantique',
          description: 'Algorithmes de chiffrement de dernière génération résistants aux attaques quantiques pour signer vos documents de manière inviolable.',
          highlight: false
        },
        {
          icon: QrCode,
          title: 'QR Code Intelligent',
          description: 'Vérification publique instantanée avec QR codes dynamiques contenant des métadonnées cryptées et validation IA intégrée.',
          highlight: false
        },
        {
          icon: Key,
          title: 'Infrastructure PKI Intelligente',
          description: 'Système à clé publique auto-adaptatif avec IA pour identifier, authentifier et valider automatiquement tous les signataires.',
          highlight: false
        },
        {
          icon: CheckCircle,
          title: 'Vérification Publique IA',
          description: 'Plateforme de vérification alimentée par l\'IA, accessible au grand public pour valider instantanément l\'authenticité des documents.',
          highlight: false
        }
      ]
    },
    en: {
      title: 'Artificial Intelligence & Advanced Security',
      subtitle: 'A complete suite of AI-powered tools to secure and verify your official documents',
      features: [
        {
          icon: Brain,
          title: 'Advanced Artificial Intelligence',
          description: 'Automatic semantic and contextual analysis powered by AI to detect anomalies, inconsistencies and fraud attempts in real-time.',
          highlight: true
        },
        {
          icon: Scan,
          title: 'AI Document Recognition',
          description: 'Automatic document type identification, intelligent data extraction and structure validation through our machine learning algorithms.',
          highlight: true
        },
        {
          icon: Shield,
          title: 'Quantum Cryptography',
          description: 'Latest generation encryption algorithms resistant to quantum attacks to sign your documents unbreakably.',
          highlight: false
        },
        {
          icon: QrCode,
          title: 'Smart QR Code',
          description: 'Instant public verification with dynamic QR codes containing encrypted metadata and integrated AI validation.',
          highlight: false
        },
        {
          icon: Key,
          title: 'Intelligent PKI Infrastructure',
          description: 'Self-adaptive public key system with AI to automatically identify, authenticate and validate all signatories.',
          highlight: false
        },
        {
          icon: CheckCircle,
          title: 'AI Public Verification',
          description: 'AI-powered verification platform accessible to the general public to instantly validate document authenticity.',
          highlight: false
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.map((feature, index) => (
            <div 
              key={index} 
              className={`group p-8 rounded-2xl border transition-all duration-300 ${
                feature.highlight 
                  ? 'border-blue-300 bg-gradient-to-br from-blue-50 to-indigo-50 hover:border-blue-500 hover:shadow-xl' 
                  : 'border-gray-200 hover:border-blue-300 hover:shadow-lg'
              }`}
            >
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                  feature.highlight
                    ? 'bg-gradient-to-br from-blue-600 to-indigo-700 group-hover:from-blue-700 group-hover:to-indigo-800'
                    : 'bg-blue-100 group-hover:bg-blue-900'
                }`}>
                  <feature.icon className={`transition-colors duration-300 ${
                    feature.highlight 
                      ? 'text-white' 
                      : 'text-blue-900 group-hover:text-white'
                  }`} size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* AI Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Intelligence Artificielle en Action</h3>
            <p className="text-blue-100">Nos algorithmes d'IA analysent et protègent vos documents 24h/24</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400">99.8%</div>
              <div className="text-sm text-blue-100">Précision IA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">&lt; 0.5s</div>
              <div className="text-sm text-blue-100">Analyse IA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">50+</div>
              <div className="text-sm text-blue-100">Types documents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">100%</div>
              <div className="text-sm text-blue-100">Automatisation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
