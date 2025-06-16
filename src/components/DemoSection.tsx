
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Play, Shield, Award, Lock } from 'lucide-react';

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

  const [showVideo, setShowVideo] = useState(false);

  const content = {
    fr: {
      title: 'Essayez Authentic dans votre institution',
      subtitle: 'Nous accompagnons les administrations et organisations dans l\'intégration de notre technologie certifiée. Demandez une démonstration personnalisée dès aujourd\'hui.',
      videoTitle: 'Processus de Signature & Vérification',
      videoSubtitle: 'Découvrez comment nos certificats électroniques valides sécurisent vos documents',
      loginTitle: 'Déjà client ?',
      loginSubtitle: 'Accédez à votre espace institution',
      loginButton: 'Se connecter',
      certificationNote: '✓ Certificats électroniques conformes aux standards internationaux (X.509)',
      securityNote: '✓ Infrastructure PKI certifiée et audit de sécurité',
      complianceNote: '✓ Conforme aux réglementations eIDAS et ANSSI',
      form: {
        name: 'Nom complet',
        institution: 'Institution / Organisation',
        email: 'Adresse email professionnelle',
        message: 'Décrivez vos besoins (optionnel)',
        submit: 'Demander une démo gratuite'
      },
      stats: {
        reliability: 'Fiabilité',
        verification: 'Vérification',
        institutions: 'Institutions',
        certificates: 'Certificats délivrés'
      }
    },
    en: {
      title: 'Try Authentic in your institution',
      subtitle: 'We support administrations and organizations in integrating our certified technology. Request a personalized demonstration today.',
      videoTitle: 'Signature & Verification Process',
      videoSubtitle: 'Discover how our valid electronic certificates secure your documents',
      loginTitle: 'Already a client?',
      loginSubtitle: 'Access your institution space',
      loginButton: 'Sign In',
      certificationNote: '✓ Electronic certificates compliant with international standards (X.509)',
      securityNote: '✓ Certified PKI infrastructure and security audit',
      complianceNote: '✓ Compliant with eIDAS and ANSSI regulations',
      form: {
        name: 'Full Name',
        institution: 'Institution / Organization',
        email: 'Professional Email Address',
        message: 'Describe your needs (optional)',
        submit: 'Request Free Demo'
      },
      stats: {
        reliability: 'Reliability',
        verification: 'Verification',
        institutions: 'Institutions',
        certificates: 'Certificates Issued'
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

  const handleLoginClick = () => {
    console.log('Redirect to institution login');
    // Here you would redirect to the login page
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
                      <p className="text-white text-lg font-medium">Voir le processus en action</p>
                      <p className="text-blue-100 text-sm">Durée: 3 minutes</p>
                    </div>
                  </div>
                  {/* Overlay with document animation preview */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/20">
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white/80 text-xs">
                      <span>📄 Document</span>
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
                        Cette démonstration montre le processus complet de signature électronique et de vérification avec Authentic.
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
                <div className="text-2xl font-bold text-blue-900">150+</div>
                <div className="text-sm text-gray-600">{t.stats.institutions}</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow border border-blue-100">
                <div className="text-2xl font-bold text-blue-900">2M+</div>
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
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t.form.submit}
                </Button>
                
                <div className="text-center">
                  <p className="text-xs text-gray-500">
                    Réponse garantie sous 24h • Démonstration personnalisée
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
