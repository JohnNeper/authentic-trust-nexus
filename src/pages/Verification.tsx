
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Scan, CheckCircle, XCircle, AlertTriangle, Brain, Shield, Search } from 'lucide-react';

const Verification = () => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [verificationMethod, setVerificationMethod] = useState<'qr' | 'file' | 'code'>('qr');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<'valid' | 'invalid' | 'processing' | null>(null);

  const content = {
    fr: {
      title: 'Vérification de Documents',
      subtitle: 'Vérifiez instantanément l\'authenticité de vos documents officiels grâce à notre technologie IA',
      methods: {
        qr: 'Scanner QR Code',
        file: 'Télécharger Document',
        code: 'Code de Vérification'
      },
      qrDescription: 'Scannez le QR code présent sur votre document officiel',
      fileDescription: 'Téléchargez le document PDF à vérifier',
      codeDescription: 'Saisissez le code de vérification unique',
      verify: 'Vérifier',
      processing: 'Vérification en cours...',
      results: {
        valid: {
          title: 'Document Authentique ✓',
          description: 'Ce document est valide et certifié par nos algorithmes IA'
        },
        invalid: {
          title: 'Document Non Authentique ✗',
          description: 'Ce document n\'a pas pu être vérifié ou présente des anomalies'
        }
      },
      placeholder: 'Entrez le code de vérification (ex: AUTH-2024-001234)',
      features: {
        ai: 'Analyse IA en temps réel',
        crypto: 'Vérification cryptographique',
        instant: 'Résultat instantané'
      },
      steps: {
        title: 'Comment ça marche ?',
        step1: '1. Choisissez votre méthode de vérification',
        step2: '2. Notre IA analyse le document en temps réel',
        step3: '3. Recevez un résultat de vérification instantané'
      }
    },
    en: {
      title: 'Document Verification',
      subtitle: 'Instantly verify the authenticity of your official documents with our AI technology',
      methods: {
        qr: 'Scan QR Code',
        file: 'Upload Document',
        code: 'Verification Code'
      },
      qrDescription: 'Scan the QR code present on your official document',
      fileDescription: 'Upload the PDF document to verify',
      codeDescription: 'Enter the unique verification code',
      verify: 'Verify',
      processing: 'Verification in progress...',
      results: {
        valid: {
          title: 'Authentic Document ✓',
          description: 'This document is valid and certified by our AI algorithms'
        },
        invalid: {
          title: 'Non-Authentic Document ✗',
          description: 'This document could not be verified or shows anomalies'
        }
      },
      placeholder: 'Enter verification code (ex: AUTH-2024-001234)',
      features: {
        ai: 'Real-time AI analysis',
        crypto: 'Cryptographic verification',
        instant: 'Instant result'
      },
      steps: {
        title: 'How it works?',
        step1: '1. Choose your verification method',
        step2: '2. Our AI analyzes the document in real-time',
        step3: '3. Get an instant verification result'
      }
    }
  };

  const t = content[language];

  const handleVerification = async () => {
    setIsVerifying(true);
    setVerificationResult('processing');
    
    // Simulate verification process
    setTimeout(() => {
      // Random result for demo (in real app, this would be actual verification)
      const isValid = Math.random() > 0.3; // 70% chance of valid for demo
      setVerificationResult(isValid ? 'valid' : 'invalid');
      setIsVerifying(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{t.subtitle}</p>
          
          {/* Features badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100">
              <Brain className="text-blue-900 mr-2" size={16} />
              <span className="text-sm text-gray-700">{t.features.ai}</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100">
              <Shield className="text-blue-900 mr-2" size={16} />
              <span className="text-sm text-gray-700">{t.features.crypto}</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100">
              <CheckCircle className="text-blue-900 mr-2" size={16} />
              <span className="text-sm text-gray-700">{t.features.instant}</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Verification Methods */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-center">{t.title}</CardTitle>
                <CardDescription className="text-center">
                  Choisissez votre méthode de vérification préférée
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Method Selection */}
                <div className="grid grid-cols-3 gap-4">
                  <button
                    onClick={() => setVerificationMethod('qr')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      verificationMethod === 'qr'
                        ? 'border-blue-900 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <Scan className="mx-auto mb-2 text-blue-900" size={24} />
                    <div className="text-sm font-medium">{t.methods.qr}</div>
                  </button>
                  
                  <button
                    onClick={() => setVerificationMethod('file')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      verificationMethod === 'file'
                        ? 'border-blue-900 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <Upload className="mx-auto mb-2 text-blue-900" size={24} />
                    <div className="text-sm font-medium">{t.methods.file}</div>
                  </button>
                  
                  <button
                    onClick={() => setVerificationMethod('code')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      verificationMethod === 'code'
                        ? 'border-blue-900 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <Search className="mx-auto mb-2 text-blue-900" size={24} />
                    <div className="text-sm font-medium">{t.methods.code}</div>
                  </button>
                </div>

                {/* Verification Interface */}
                <div className="space-y-4">
                  {verificationMethod === 'qr' && (
                    <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
                      <Scan className="mx-auto mb-4 text-gray-400" size={48} />
                      <p className="text-gray-600">{t.qrDescription}</p>
                      <Button 
                        onClick={handleVerification}
                        className="mt-4 bg-blue-900 hover:bg-blue-800"
                        disabled={isVerifying}
                      >
                        {isVerifying ? t.processing : 'Scanner QR Code'}
                      </Button>
                    </div>
                  )}

                  {verificationMethod === 'file' && (
                    <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
                      <Upload className="mx-auto mb-4 text-gray-400" size={48} />
                      <p className="text-gray-600">{t.fileDescription}</p>
                      <Button 
                        onClick={handleVerification}
                        className="mt-4 bg-blue-900 hover:bg-blue-800"
                        disabled={isVerifying}
                      >
                        {isVerifying ? t.processing : 'Choisir fichier'}
                      </Button>
                    </div>
                  )}

                  {verificationMethod === 'code' && (
                    <div className="space-y-4">
                      <Input
                        placeholder={t.placeholder}
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        className="text-center text-lg font-mono"
                      />
                      <Button 
                        onClick={handleVerification}
                        className="w-full bg-blue-900 hover:bg-blue-800 py-3"
                        disabled={isVerifying || !verificationCode}
                      >
                        {isVerifying ? t.processing : t.verify}
                      </Button>
                    </div>
                  )}
                </div>

                {/* Verification Result */}
                {verificationResult && (
                  <div className={`p-6 rounded-lg border-2 ${
                    verificationResult === 'valid' 
                      ? 'border-green-200 bg-green-50' 
                      : verificationResult === 'invalid'
                      ? 'border-red-200 bg-red-50'
                      : 'border-blue-200 bg-blue-50'
                  }`}>
                    <div className="flex items-center space-x-3">
                      {verificationResult === 'valid' && <CheckCircle className="text-green-600" size={24} />}
                      {verificationResult === 'invalid' && <XCircle className="text-red-600" size={24} />}
                      {verificationResult === 'processing' && <AlertTriangle className="text-blue-600 animate-pulse" size={24} />}
                      
                      <div>
                        <h4 className="font-semibold">
                          {verificationResult === 'processing' ? t.processing : 
                           verificationResult === 'valid' ? t.results.valid.title : t.results.invalid.title}
                        </h4>
                        {verificationResult !== 'processing' && (
                          <p className="text-sm text-gray-600">
                            {verificationResult === 'valid' ? t.results.valid.description : t.results.invalid.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* How it works */}
          <div>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>{t.steps.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <p className="text-sm">{t.steps.step1}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <p className="text-sm">{t.steps.step2}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <p className="text-sm">{t.steps.step3}</p>
                </div>
              </CardContent>
            </Card>

            {/* Trust indicators */}
            <div className="mt-6 p-4 bg-white rounded-lg shadow">
              <h4 className="font-semibold mb-3">Sécurité & Conformité</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={16} />
                  <span>Conforme eIDAS & ANSSI</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={16} />
                  <span>Chiffrement AES 256-bit</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={16} />
                  <span>Audit sécurité indépendant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer language={language} />
    </div>
  );
};

export default Verification;
