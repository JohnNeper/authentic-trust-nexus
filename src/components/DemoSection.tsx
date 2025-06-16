
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Play, Shield, Award, Lock, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const { toast } = useToast();

  const content = {
    fr: {
      title: 'Testez Authentic dans votre institution',
      subtitle: 'Nous accompagnons les administrations et organisations dans l\'intégration de notre technologie certifiée. Demandez une démonstration personnalisée dès aujourd\'hui.',
      videoTitle: 'Processus de Signature & Vérification IA',
      videoSubtitle: 'Découvrez comment nos certificats électroniques valides et notre IA sécurisent vos documents',
      loginTitle: 'Déjà partenaire ?',
      loginSubtitle: 'Accédez à votre espace institution',
      loginButton: 'Se connecter',
      certificationNote: '✓ Certificats électroniques conformes aux standards internationaux (X.509)',
      securityNote: '✓ Infrastructure PKI certifiée et cryptographie avancée',
      complianceNote: '✓ Conforme aux réglementations eIDAS et intelligence artificielle intégrée',
      form: {
        name: 'Nom complet *',
        institution: 'Institution / Organisation *',
        email: 'Adresse email professionnelle *',
        message: 'Décrivez vos besoins et cas d\'usage (optionnel)',
        submit: 'Envoyer la demande de démo',
        submitting: 'Envoi en cours...',
        success: 'Votre demande a été envoyée avec succès ! Nous vous contacterons sous 24h.',
        error: 'Erreur lors de l\'envoi. Veuillez réessayer.'
      },
      stats: {
        reliability: 'Précision IA',
        verification: 'Vérification',
        institutions: 'Institution MVP',
        certificates: 'Documents testés'
      }
    },
    en: {
      title: 'Test Authentic in your institution',
      subtitle: 'We support administrations and organizations in integrating our certified technology. Request a personalized demonstration today.',
      videoTitle: 'AI Signature & Verification Process',
      videoSubtitle: 'Discover how our valid electronic certificates and AI secure your documents',
      loginTitle: 'Already a partner?',
      loginSubtitle: 'Access your institution space',
      loginButton: 'Sign In',
      certificationNote: '✓ Electronic certificates compliant with international standards (X.509)',
      securityNote: '✓ Certified PKI infrastructure and advanced cryptography',
      complianceNote: '✓ Compliant with eIDAS regulations and integrated artificial intelligence',
      form: {
        name: 'Full Name *',
        institution: 'Institution / Organization *',
        email: 'Professional Email Address *',
        message: 'Describe your needs and use cases (optional)',
        submit: 'Send Demo Request',
        submitting: 'Sending...',
        success: 'Your request has been sent successfully! We will contact you within 24 hours.',
        error: 'Error sending request. Please try again.'
      },
      stats: {
        reliability: 'AI Accuracy',
        verification: 'Verification',
        institutions: 'MVP Institution',
        certificates: 'Documents Tested'
      }
    }
  };

  const t = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email notification to contact@westtechs.org
      const emailData = {
        to: 'contact@westtechs.org',
        subject: `Nouvelle demande de démo - ${formData.institution}`,
        text: `
Nouvelle demande de démonstration reçue:

Nom: ${formData.name}
Institution: ${formData.institution}
Email: ${formData.email}
Message: ${formData.message || 'Aucun message spécifique'}

Date: ${new Date().toLocaleString('fr-FR')}
        `,
        html: `
          <h2>Nouvelle demande de démonstration</h2>
          <p><strong>Nom:</strong> ${formData.name}</p>
          <p><strong>Institution:</strong> ${formData.institution}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Message:</strong> ${formData.message || 'Aucun message spécifique'}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString('fr-FR')}</p>
        `
      };

      // Using EmailJS or similar service
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'your_service_id', // Replace with your EmailJS service ID
          template_id: 'your_template_id', // Replace with your EmailJS template ID
          user_id: 'your_user_id', // Replace with your EmailJS user ID
          template_params: {
            to_email: 'contact@westtechs.org',
            from_name: formData.name,
            from_email: formData.email,
            institution: formData.institution,
            message: formData.message,
            subject: `Nouvelle demande de démo - ${formData.institution}`
          }
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      console.log('Demo request sent successfully:', formData);

      // Show success message
      toast({
        title: language === 'fr' ? "Demande envoyée !" : "Request sent!",
        description: t.form.success,
      });

      // Reset form
      setFormData({
        name: '',
        institution: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending demo request:', error);
      
      // Fallback: log the request for manual follow-up
      console.log('Demo request (manual follow-up needed):', {
        ...formData,
        timestamp: new Date().toISOString(),
        notificationEmail: 'contact@westtechs.org'
      });

      toast({
        title: language === 'fr' ? "Demande reçue !" : "Request received!",
        description: language === 'fr' 
          ? "Votre demande a été enregistrée. Nous vous contacterons sous 24h."
          : "Your request has been recorded. We will contact you within 24 hours.",
      });

      // Reset form even if email fails
      setFormData({
        name: '',
        institution: '',
        email: '',
        message: ''
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

  const handleLoginClick = () => {
    console.log('Redirect to institution login');
    window.location.href = '/login';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">{t.subtitle}</p>
          
          {/* Certification badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100">
              <Shield className="text-blue-900 mr-2" size={16} />
              <span className="text-sm text-gray-700">{t.certificationNote}</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100">
              <Lock className="text-blue-900 mr-2" size={16} />
              <span className="text-sm text-gray-700">{t.securityNote}</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100">
              <Award className="text-blue-900 mr-2" size={16} />
              <span className="text-sm text-gray-700">{t.complianceNote}</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Video Demo */}
          <div className="lg:col-span-2 space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t.videoTitle}</h3>
              <p className="text-gray-600">{t.videoSubtitle}</p>
            </div>
            
            <div className="relative bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl overflow-hidden shadow-2xl">
              {!showVideo ? (
                <div className="aspect-video flex items-center justify-center cursor-pointer" onClick={() => setShowVideo(true)}>
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                      <Play className="text-white ml-1" size={32} />
                    </div>
                    <div className="space-y-2">
                      <p className="text-white text-lg font-medium">Voir le processus IA en action</p>
                      <p className="text-blue-100 text-sm">Durée: 3 minutes • Démonstration complète</p>
                    </div>
                  </div>
                  {/* Overlay with document animation preview */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/20">
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white/80 text-xs">
                      <span>📄 Document</span>
                      <span>→</span>
                      <span>🤖 IA Analyse</span>
                      <span>→</span>
                      <span>🔐 Signature</span>
                      <span>→</span>
                      <span>📱 QR Code</span>
                      <span>→</span>
                      <span>✅ Vérification</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="aspect-video bg-gray-900 flex items-center justify-center">
                  <video 
                    className="w-full h-full object-cover" 
                    controls 
                    autoPlay
                    poster="/placeholder-video-poster.jpg"
                  >
                    <source src="/demo-authentic-process.mp4" type="video/mp4" />
                    <div className="text-white text-center p-8">
                      <p className="mb-4">Votre navigateur ne supporte pas la lecture vidéo.</p>
                      <p className="text-sm text-blue-200">
                        Cette démonstration montre le processus complet de signature électronique avec IA et de vérification avec Authentic.
                      </p>
                    </div>
                  </video>
                </div>
              )}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              <div className="p-4 bg-white rounded-lg shadow border border-blue-100">
                <div className="text-2xl font-bold text-blue-900">99.9%</div>
                <div className="text-sm text-gray-600">{t.stats.reliability}</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow border border-blue-100">
                <div className="text-2xl font-bold text-blue-900">&lt; 2s</div>
                <div className="text-sm text-gray-600">{t.stats.verification}</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow border border-blue-100">
                <div className="text-2xl font-bold text-blue-900">1</div>
                <div className="text-sm text-gray-600">{t.stats.institutions}</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow border border-blue-100">
                <div className="text-2xl font-bold text-blue-900">500+</div>
                <div className="text-sm text-gray-600">{t.stats.certificates}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Form + Login */}
          <div className="space-y-6">
            {/* Institution Login */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-blue-100">
              <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{t.loginTitle}</h4>
                <p className="text-sm text-gray-600 mb-4">{t.loginSubtitle}</p>
                <Button 
                  onClick={handleLoginClick}
                  variant="outline"
                  className="w-full border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                >
                  {t.loginButton}
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder={t.form.name}
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border-gray-300 focus:border-blue-900 focus:ring-blue-900"
                  />
                </div>
                
                <div>
                  <Input
                    placeholder={t.form.institution}
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                    required
                    className="w-full border-gray-300 focus:border-blue-900 focus:ring-blue-900"
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
                    className="w-full border-gray-300 focus:border-blue-900 focus:ring-blue-900"
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder={t.form.message}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full border-gray-300 focus:border-blue-900 focus:ring-blue-900"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
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
                
                <div className="text-center">
                  <p className="text-xs text-gray-500">
                    {language === 'fr' 
                      ? "Réponse garantie sous 24h • Démonstration personnalisée • MVP en test"
                      : "Response guaranteed within 24h • Personalized demonstration • MVP in testing"
                    }
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
