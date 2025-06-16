
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
        text: 'Démocratiser l\'accès à la vérification documentaire et lutter contre la fraude grâce à des technologies de pointe accessibles à tous.'
      },
      vision: {
        title: 'Notre Vision',
        text: 'Devenir la référence africaine en matière de certification numérique et contribuer à bâtir un écosystème administratif transparent et fiable.'
      },
      values: {
        title: 'Nos Valeurs',
        items: [
          {
            icon: Shield,
            title: 'Sécurité',
            description: 'Protection maximale des données et des documents'
          },
          {
            icon: Users,
            title: 'Accessibilité',
            description: 'Solutions simples et accessibles à tous'
          },
          {
            icon: Globe,
            title: 'Innovation',
            description: 'Technologies de pointe adaptées au contexte local'
          },
          {
            icon: Award,
            title: 'Excellence',
            description: 'Standards de qualité internationale'
          }
        ]
      },
      team: {
        title: 'Notre Équipe',
        subtitle: 'Des experts passionnés par l\'innovation et la sécurité numérique',
        members: [
          {
            name: 'Dr. Emmanuel Kengne',
            position: 'CEO & Fondateur',
            description: 'Expert en cryptographie et sécurité informatique, diplômé de l\'Université de Cambridge'
          },
          {
            name: 'Sarah Mbala',
            position: 'CTO',
            description: 'Spécialiste en intelligence artificielle et architecture logicielle, ancienne de Google'
          },
          {
            name: 'Michel Fogue',
            position: 'Directeur Commercial',
            description: 'Expert en transformation numérique des administrations publiques'
          }
        ]
      },
      stats: {
        title: 'Authentic en Chiffres',
        items: [
          { number: '50+', label: 'Institutions Partenaires' },
          { number: '1M+', label: 'Documents Sécurisés' },
          { number: '99.9%', label: 'Taux de Fiabilité' },
          { number: '24/7', label: 'Support Technique' }
        ]
      }
    },
    en: {
      title: 'About Authentic',
      subtitle: 'Technological innovation in service of digital trust',
      mission: {
        title: 'Our Mission',
        text: 'Democratize access to document verification and fight fraud through cutting-edge technologies accessible to all.'
      },
      vision: {
        title: 'Our Vision',
        text: 'Become the African reference in digital certification and contribute to building a transparent and reliable administrative ecosystem.'
      },
      values: {
        title: 'Our Values',
        items: [
          {
            icon: Shield,
            title: 'Security',
            description: 'Maximum protection of data and documents'
          },
          {
            icon: Users,
            title: 'Accessibility',
            description: 'Simple solutions accessible to everyone'
          },
          {
            icon: Globe,
            title: 'Innovation',
            description: 'Cutting-edge technologies adapted to local context'
          },
          {
            icon: Award,
            title: 'Excellence',
            description: 'International quality standards'
          }
        ]
      },
      team: {
        title: 'Our Team',
        subtitle: 'Experts passionate about innovation and digital security',
        members: [
          {
            name: 'Dr. Emmanuel Kengne',
            position: 'CEO & Founder',
            description: 'Expert in cryptography and computer security, graduate from Cambridge University'
          },
          {
            name: 'Sarah Mbala',
            position: 'CTO',
            description: 'Specialist in artificial intelligence and software architecture, former Google employee'
          },
          {
            name: 'Michel Fogue',
            position: 'Sales Director',
            description: 'Expert in digital transformation of public administrations'
          }
        ]
      },
      stats: {
        title: 'Authentic in Numbers',
        items: [
          { number: '50+', label: 'Partner Institutions' },
          { number: '1M+', label: 'Secured Documents' },
          { number: '99.9%', label: 'Reliability Rate' },
          { number: '24/7', label: 'Technical Support' }
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
          <h2 className="text-4xl font-bold text-center mb-16">{t.stats.title}</h2>
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
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-900 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
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
