
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Play } from 'lucide-react';

interface DemoSectionProps {
  language: 'fr' | 'en';
}

const DemoSection = ({ language }: DemoSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    message: ''
  });

  const content = {
    fr: {
      title: 'Essayez Authentic dans votre institution',
      subtitle: 'Nous accompagnons les administrations et organisations dans l\'intégration de notre technologie. Demandez une démonstration personnalisée dès aujourd\'hui.',
      videoTitle: 'Découvrez Authentic en Action',
      videoSubtitle: 'Regardez notre démonstration complète de la plateforme',
      form: {
        name: 'Nom complet',
        institution: 'Institution / Organisation',
        email: 'Adresse email',
        message: 'Message (optionnel)',
        submit: 'Demander une démo'
      }
    },
    en: {
      title: 'Try Authentic in your institution',
      subtitle: 'We support administrations and organizations in integrating our technology. Request a personalized demonstration today.',
      videoTitle: 'Discover Authentic in Action',
      videoSubtitle: 'Watch our complete platform demonstration',
      form: {
        name: 'Full Name',
        institution: 'Institution / Organization',
        email: 'Email Address',
        message: 'Message (optional)',
        submit: 'Request Demo'
      }
    }
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request submitted:', formData);
    // Here you would typically send the data to your backend
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Video Demo */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t.videoTitle}</h3>
              <p className="text-gray-600">{t.videoSubtitle}</p>
            </div>
            
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto hover:bg-blue-800 transition-colors cursor-pointer">
                    <Play className="text-white ml-1" size={32} />
                  </div>
                  <p className="text-white text-lg">Cliquez pour voir la démo</p>
                </div>
              </div>
              
              {/* Video placeholder overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/20"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white rounded-lg shadow">
                <div className="text-2xl font-bold text-blue-900">99.9%</div>
                <div className="text-sm text-gray-600">Fiabilité</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <div className="text-2xl font-bold text-blue-900">< 2s</div>
                <div className="text-sm text-gray-600">Vérification</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <div className="text-2xl font-bold text-blue-900">100+</div>
                <div className="text-sm text-gray-600">Institutions</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder={t.form.name}
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <Input
                  placeholder={t.form.institution}
                  name="institution"
                  value={formData.institution}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder={t.form.email}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder={t.form.message}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 text-lg"
              >
                {t.form.submit}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
