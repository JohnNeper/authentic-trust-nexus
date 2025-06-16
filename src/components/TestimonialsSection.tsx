
import React from 'react';
import { Quote, Star } from 'lucide-react';

interface TestimonialsSectionProps {
  language: 'fr' | 'en';
}

const TestimonialsSection = ({ language }: TestimonialsSectionProps) => {
  const content = {
    fr: {
      title: 'Témoignages de nos Partenaires',
      subtitle: 'Découvrez comment Authentic transforme les processus documentaires de nos clients',
      testimonials: [
        {
          name: 'Dr. Marie Nguyen',
          position: 'Directrice des Systèmes d\'Information',
          institution: 'Ministère de l\'Éducation Nationale',
          text: 'Authentic a révolutionné notre processus de certification des diplômes. La confiance de nos citoyens dans nos documents officiels n\'a jamais été aussi forte.',
          rating: 5
        },
        {
          name: 'Jean-Baptiste Fonkou',
          position: 'Responsable Sécurité Informatique',
          institution: 'Mairie de Douala',
          text: 'L\'intégration d\'Authentic dans nos services municipaux a été remarquable. Nos agents et nos citoyens apprécient la simplicité et la sécurité de la solution.',
          rating: 5
        },
        {
          name: 'Amina Hassan',
          position: 'Chef de Projet Numérique',
          institution: 'Chambre de Commerce du Nord-Ouest',
          text: 'Grâce à Authentic, nous avons pu moderniser nos processus de certification des entreprises tout en maintenant les plus hauts standards de sécurité.',
          rating: 5
        }
      ]
    },
    en: {
      title: 'Testimonials from our Partners',
      subtitle: 'Discover how Authentic is transforming our clients\' document processes',
      testimonials: [
        {
          name: 'Dr. Marie Nguyen',
          position: 'Director of Information Systems',
          institution: 'Ministry of National Education',
          text: 'Authentic has revolutionized our diploma certification process. Citizens\' trust in our official documents has never been stronger.',
          rating: 5
        },
        {
          name: 'Jean-Baptiste Fonkou',
          position: 'IT Security Manager',
          institution: 'Douala City Hall',
          text: 'The integration of Authentic into our municipal services has been remarkable. Our agents and citizens appreciate the simplicity and security of the solution.',
          rating: 5
        },
        {
          name: 'Amina Hassan',
          position: 'Digital Project Manager',
          institution: 'North West Chamber of Commerce',
          text: 'Thanks to Authentic, we were able to modernize our business certification processes while maintaining the highest security standards.',
          rating: 5
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
          {t.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-shadow duration-300">
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                  <Quote className="text-white" size={16} />
                </div>
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
                <p className="text-sm text-blue-900 font-medium">{testimonial.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
