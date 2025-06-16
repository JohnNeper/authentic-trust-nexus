
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Target, Eye, Award, Globe, Shield } from 'lucide-react';

const About = () => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  const content = {
    fr: {
      title: 'À Propos d\'Authentic',
      subtitle: 'Innovation technologique au service de la confiance numérique',
      mission: {
        title: 'Notre Mission',
        text: 'Révolutionner la vérification documentaire en Afrique grâce à des technologies de pointe accessibles, sécurisées et conformes aux standards internationaux. Nous luttons contre la fraude documentaire tout en facilitant les processus administratifs.'
      },
      vision: {
        title: 'Notre Vision',
        text: 'Devenir la référence africaine en matière de certification numérique sécurisée et contribuer à bâtir un écosystème administratif transparent, fiable et moderne pour toute l\'Afrique.'
      },
      values: {
        title: 'Nos Valeurs',
        items: [
          {
            icon: Shield,
            title: 'Sécurité',
            description: 'Cryptographie avancée et protection maximale des données'
          },
          {
            icon: Users,
            title: 'Accessibilité',
            description: 'Solutions intuitives adaptées au contexte africain'
          },
          {
            icon: Globe,
            title: 'Innovation',
            description: 'Intelligence artificielle et blockchain de pointe'
          },
          {
            icon: Award,
            title: 'Excellence',
            description: 'Standards internationaux et certification eIDAS'
          }
        ]
      },
      team: {
        title: 'Notre Équipe d\'Experts',
        subtitle: 'Une équipe passionnée d\'experts en cybersécurité et intelligence artificielle',
        members: [
          {
            name: 'Therence Ngniguepa',
            position: 'Fondateur & CEO',
            description: 'Expert en Cybersécurité et Ingénieur en Intelligence Artificielle. Co-Fondateur de Tenezis AI (Kot-AI). Master Professionnel en Cybersécurité – Université de Bamenda. Spécialiste en systèmes cryptographiques, IA, architecture sécurisée et modèles LLM.',
            emoji: '👨‍💼'
          },
          {
            name: 'Rosly Mamekem',
            position: 'Co-Fondateur & CTO',
            description: 'Développeur Fullstack et Cryptographe. Master en Cybersécurité – Université de Bamenda. Spécialiste en interfaces web, gestion sécurisée des certificats et intégration OCR/QR.',
            emoji: '👩‍💻'
          },
          {
            name: 'Prof. Emmanuel FOUOTSA',
            position: 'Encadreur Académique & Conseiller Stratégique',
            description: 'Coordonnateur du Centre pour la Cybersécurité et la Cryptologie Mathématique. Enseignant-chercheur en sécurité des systèmes, confiance numérique et IA explicable.',
            emoji: '🎓'
          }
        ]
      },
      stats: {
        title: 'Authentic en Développement',
        subtitle: 'Notre MVP en phase de test avec des partenaires pilotes',
        items: [
          { number: '1', label: 'Institution Pilote' },
          { number: '500+', label: 'Documents Testés' },
          { number: '99.9%', label: 'Taux de Précision IA' },
          { number: 'MVP', label: 'Phase de Test' }
        ]
      }
    },
    en: {
      title: 'About Authentic',
      subtitle: 'Technological innovation in service of digital trust',
      mission: {
        title: 'Our Mission',
        text: 'Revolutionize document verification in Africa through cutting-edge technologies that are accessible, secure, and compliant with international standards. We fight document fraud while facilitating administrative processes.'
      },
      vision: {
        title: 'Our Vision',
        text: 'Become the African reference in secure digital certification and contribute to building a transparent, reliable, and modern administrative ecosystem for all of Africa.'
      },
      values: {
        title: 'Our Values',
        items: [
          {
            icon: Shield,
            title: 'Security',
            description: 'Advanced cryptography and maximum data protection'
          },
          {
            icon: Users,
            title: 'Accessibility',
            description: 'Intuitive solutions adapted to the African context'
          },
          {
            icon: Globe,
            title: 'Innovation',
            description: 'Cutting-edge artificial intelligence and blockchain'
          },
          {
            icon: Award,
            title: 'Excellence',
            description: 'International standards and eIDAS certification'
          }
        ]
      },
      team: {
        title: 'Our Expert Team',
        subtitle: 'A passionate team of cybersecurity and artificial intelligence experts',
        members: [
          {
            name: 'Therence Ngniguepa',
            position: 'Founder & CEO',
            description: 'Cybersecurity Expert and Artificial Intelligence Engineer. Co-Founder of Tenezis AI (Kot-AI). Professional Master in Cybersecurity – University of Bamenda. Specialist in cryptographic systems, AI, secure architecture, and LLM models.',
            emoji: '👨‍💼'
          },
          {
            name: 'Rosly Mamekem',
            position: 'Co-Founder & CTO',
            description: 'Fullstack Developer and Cryptographer. Master in Cybersecurity – University of Bamenda. Specialist in web interfaces, secure certificate management, and OCR/QR integration.',
            emoji: '👩‍💻'
          },
          {
            name: 'Prof. Emmanuel FOUOTSA',
            position: 'Academic Supervisor & Strategic Advisor',
            description: 'Coordinator of the Center for Cybersecurity and Mathematical Cryptology. Teacher-researcher in systems security, digital trust, and explainable AI.',
            emoji: '🎓'
          }
        ]
      },
      stats: {
        title: 'Authentic in Development',
        subtitle: 'Our MVP in testing phase with pilot partners',
        items: [
          { number: '1', label: 'Pilot Institution' },
          { number: '500+', label: 'Documents Tested' },
          { number: '99.9%', label: 'AI Accuracy Rate' },
          { number: 'MVP', label: 'Testing Phase' }
        ]
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={setLanguage} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="text-blue-900" size={32} />
                <h2 className="text-3xl font-bold text-gray-900">{t.mission.title}</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">{t.mission.text}</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="text-blue-900" size={32} />
                <h2 className="text-3xl font-bold text-gray-900">{t.vision.title}</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">{t.vision.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">{t.values.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.values.items.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-blue-900" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t.stats.title}</h2>
            <p className="text-xl opacity-90">{t.stats.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {t.stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.team.title}</h2>
            <p className="text-xl text-gray-600">{t.team.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.team.members.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100">
                <div className="text-6xl mb-6">{member.emoji}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-900 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
};

export default About;
