
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const content = {
    fr: {
      title: 'Contactez-Nous',
      subtitle: 'Nous sommes là pour répondre à vos questions et vous accompagner dans votre transformation numérique',
      info: {
        title: 'Informations de Contact',
        address: {
          title: 'Adresse',
          text: 'Bamenda, Région du Nord-Ouest\nCameroun'
        },
        email: {
          title: 'Email',
          text: 'contact@authentic.cm'
        },
        phone: {
          title: 'Téléphone',
          text: '+237 6XX XXX XXX'
        },
        hours: {
          title: 'Heures d\'ouverture',
          text: 'Lun - Ven: 8h00 - 18h00\nSam: 9h00 - 13h00'
        }
      },
      form: {
        title: 'Envoyez-nous un Message',
        name: 'Nom complet',
        email: 'Adresse email',
        subject: 'Sujet',
        message: 'Votre message',
        submit: 'Envoyer le message',
        success: 'Message envoyé avec succès !'
      },
      demo: {
        title: 'Demander une Démonstration',
        text: 'Intéressé par notre solution ? Planifiez une démonstration personnalisée avec notre équipe.',
        button: 'Planifier une démo'
      }
    },
    en: {
      title: 'Contact Us',
      subtitle: 'We are here to answer your questions and support you in your digital transformation',
      info: {
        title: 'Contact Information',
        address: {
          title: 'Address',
          text: 'Bamenda, North West Region\nCameroon'
        },
        email: {
          title: 'Email',
          text: 'contact@authentic.cm'
        },
        phone: {
          title: 'Phone',
          text: '+237 6XX XXX XXX'
        },
        hours: {
          title: 'Business Hours',
          text: 'Mon - Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 1:00 PM'
        }
      },
      form: {
        title: 'Send us a Message',
        name: 'Full Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Your message',
        submit: 'Send Message',
        success: 'Message sent successfully!'
      },
      demo: {
        title: 'Request a Demonstration',
        text: 'Interested in our solution? Schedule a personalized demonstration with our team.',
        button: 'Schedule a demo'
      }
    }
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Here you would typically send the data to your backend
    alert(t.form.success);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.info.title}</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t.info.address.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{t.info.address.text}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t.info.email.title}</h3>
                    <a href={`mailto:${t.info.email.text}`} className="text-blue-900 hover:text-blue-700">
                      {t.info.email.text}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t.info.phone.title}</h3>
                    <a href={`tel:${t.info.phone.text}`} className="text-blue-900 hover:text-blue-700">
                      {t.info.phone.text}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t.info.hours.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{t.info.hours.text}</p>
                  </div>
                </div>
              </div>

              {/* Demo CTA */}
              <div className="bg-blue-50 rounded-2xl p-8 mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.demo.title}</h3>
                <p className="text-gray-600 mb-6">{t.demo.text}</p>
                <Button className="bg-blue-900 hover:bg-blue-800 text-white">
                  {t.demo.button}
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.form.title}</h2>
              
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
                  <Input
                    placeholder={t.form.subject}
                    name="subject"
                    value={formData.subject}
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
                    rows={6}
                    required
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 text-lg flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>{t.form.submit}</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
};

export default Contact;
