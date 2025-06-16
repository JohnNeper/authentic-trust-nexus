
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const content = {
    fr: {
      title: 'Contactez-Nous',
      subtitle: 'Nous sommes là pour répondre à vos questions et vous accompagner dans votre transformation numérique sécurisée',
      info: {
        title: 'Informations de Contact',
        address: {
          title: 'Adresse',
          text: 'Université de Bamenda\nCentre pour la Cybersécurité\nRégion du Nord-Ouest, Cameroun'
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
        name: 'Nom complet *',
        email: 'Adresse email *',
        subject: 'Sujet *',
        message: 'Votre message *',
        submit: 'Envoyer le message',
        submitting: 'Envoi en cours...',
        success: 'Message envoyé avec succès ! Nous vous répondrons sous 24h.',
        error: 'Erreur lors de l\'envoi. Veuillez réessayer.'
      },
      demo: {
        title: 'Demander une Démonstration',
        text: 'Intéressé par notre solution ? Planifiez une démonstration personnalisée avec notre équipe d\'experts.',
        button: 'Planifier une démo'
      },
      map: {
        title: 'Notre Localisation',
        subtitle: 'Basés à l\'Université de Bamenda, nous rayonnons sur toute l\'Afrique'
      }
    },
    en: {
      title: 'Contact Us',
      subtitle: 'We are here to answer your questions and support you in your secure digital transformation',
      info: {
        title: 'Contact Information',
        address: {
          title: 'Address',
          text: 'University of Bamenda\nCenter for Cybersecurity\nNorth West Region, Cameroon'
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
        name: 'Full Name *',
        email: 'Email Address *',
        subject: 'Subject *',
        message: 'Your message *',
        submit: 'Send Message',
        submitting: 'Sending...',
        success: 'Message sent successfully! We will respond within 24 hours.',
        error: 'Error sending message. Please try again.'
      },
      demo: {
        title: 'Request a Demonstration',
        text: 'Interested in our solution? Schedule a personalized demonstration with our team of experts.',
        button: 'Schedule a demo'
      },
      map: {
        title: 'Our Location',
        subtitle: 'Based at the University of Bamenda, we serve all of Africa'
      }
    }
  };

  const t = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate email sending - In real implementation, you would call your backend API
      console.log('Contact form submitted:', formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Message envoyé !",
        description: t.form.success,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Erreur",
        description: t.form.error,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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

              {/* Map Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.map.title}</h3>
                <p className="text-gray-600 mb-6">{t.map.subtitle}</p>
                <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="text-blue-900 mx-auto mb-2" size={48} />
                    <p className="text-gray-600">Université de Bamenda</p>
                    <p className="text-sm text-gray-500">Région du Nord-Ouest, Cameroun</p>
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
                  disabled={isSubmitting}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 text-lg flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>{t.form.submitting}</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>{t.form.submit}</span>
                    </>
                  )}
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
