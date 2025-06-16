
import React from 'react';
import { Globe, Shield, Users, Award } from 'lucide-react';

interface MissionSectionProps {
  language: 'fr' | 'en';
}

const MissionSection = ({ language }: MissionSectionProps) => {
  const content = {
    fr: {
      title: 'Notre Mission et Impact',
      mainText: 'Authentic contribue à un écosystème administratif plus transparent, plus fiable, et plus moderne. Ensemble, luttons contre la désinformation, la contrefaçon et la perte de confiance.',
      story: {
        title: 'L\'Histoire d\'Authentic',
        text: 'Née au cœur du Cameroun, Authentic est le fruit d\'une vision partagée : celle d\'un avenir où chaque document officiel inspire confiance. Face aux défis de la fraude documentaire qui affecte les institutions africaines, notre équipe de Bamenda a développé une solution technologique de pointe, alliant innovation locale et standards internationaux.'
      },
      vision: {
        title: 'Notre Vision',
        text: 'Nous imaginons un Cameroun, et plus largement une Afrique, où la confiance numérique règne. Un continent où les citoyens, les entreprises et les institutions peuvent échanger des documents en toute sérénité, sachant qu\'ils sont authentiques et inviolables.'
      },
      impact: [
        {
          icon: Globe,
          title: 'Transparence Administrative',
          description: 'Renforcer la confiance entre citoyens et institutions'
        },
        {
          icon: Shield,
          title: 'Sécurité Documentaire',
          description: 'Éliminer la fraude et la contrefaçon'
        },
        {
          icon: Users,
          title: 'Accessibilité Publique',
          description: 'Démocratiser l\'accès à la vérification'
        },
        {
          icon: Award,
          title: 'Excellence Technologique',
          description: 'Promouvoir l\'innovation africaine'
        }
      ]
    },
    en: {
      title: 'Our Mission and Impact',
      mainText: 'Authentic contributes to a more transparent, reliable, and modern administrative ecosystem. Together, let\'s fight against misinformation, counterfeiting, and loss of trust.',
      story: {
        title: 'The Authentic Story',
        text: 'Born in the heart of Cameroon, Authentic is the result of a shared vision: that of a future where every official document inspires trust. Faced with the challenges of document fraud affecting African institutions, our team in Bamenda has developed a cutting-edge technological solution, combining local innovation with international standards.'
      },
      vision: {
        title: 'Our Vision',
        text: 'We envision a Cameroon, and more broadly an Africa, where digital trust reigns. A continent where citizens, businesses and institutions can exchange documents with complete peace of mind, knowing they are authentic and inviolable.'
      },
      impact: [
        {
          icon: Globe,
          title: 'Administrative Transparency',
          description: 'Strengthen trust between citizens and institutions'
        },
        {
          icon: Shield,
          title: 'Document Security',
          description: 'Eliminate fraud and counterfeiting'
        },
        {
          icon: Users,
          title: 'Public Accessibility',
          description: 'Democratize access to verification'
        },
        {
          icon: Award,
          title: 'Technological Excellence',
          description: 'Promote African innovation'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        {/* Main Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.title}</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t.mainText}
          </p>
        </div>

        {/* Story and Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.story.title}</h3>
            <p className="text-gray-600 leading-relaxed">{t.story.text}</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">{t.vision.title}</h3>
            <p className="leading-relaxed opacity-90">{t.vision.text}</p>
          </div>
        </div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.impact.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-blue-900" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
