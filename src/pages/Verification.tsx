
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Upload, Scan, CheckCircle, XCircle, AlertTriangle, Brain, Shield, Search, Eye, Download, FileText, Loader2, Info, TrendingUp, Zap, Calendar, User, Lock, Key, Hash, Fingerprint, Clock, Globe, Camera } from 'lucide-react';

const Verification = () => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [verificationMethod, setVerificationMethod] = useState<'qr' | 'file' | 'code'>('file');
  const [verificationCode, setVerificationCode] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<'valid' | 'invalid' | 'processing' | null>(null);
  const [showComparison, setShowComparison] = useState(false);
  const [showSecurityDetails, setShowSecurityDetails] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<any>(null);

  const content = {
    fr: {
      title: 'Vérification de Documents',
      subtitle: 'Vérifiez instantanément l\'authenticité de vos documents officiels grâce à notre technologie IA avancée',
      methods: {
        qr: 'Scanner QR Code',
        file: 'Télécharger Document',
        code: 'Code de Vérification'
      },
      qrDescription: 'Utilisez votre caméra pour scanner le QR code présent sur votre document officiel',
      fileDescription: 'Téléchargez le document PDF à vérifier (format PDF uniquement)',
      codeDescription: 'Saisissez le code de vérification unique fourni avec votre document',
      verify: 'Vérifier l\'authenticité',
      processing: 'Vérification en cours...',
      upload: 'Choisir un fichier PDF',
      dragDrop: 'ou glissez-déposez votre fichier ici',
      testExample: 'Essayer avec un exemple',
      howItWorks: 'Comment ça marche ?',
      securityInfo: 'Informations de sécurité',
      comparison: 'Comparaison visuelle',
      downloadOriginal: 'Télécharger l\'original',
      viewDetails: 'Voir les détails',
      results: {
        valid: {
          title: 'Document Authentique ✓',
          description: 'Ce document est valide et certifié par nos algorithmes de sécurité avancés',
          subtitle: 'Vérification réussie avec correspondance parfaite'
        },
        invalid: {
          title: 'Document Non Authentique ✗',
          description: 'Ce document n\'a pas pu être vérifié ou présente des anomalies de sécurité',
          subtitle: 'Échec de la vérification - Document suspect'
        }
      },
      placeholder: 'Entrez le code de vérification (ex: AUTH-2024-001234)',
      features: {
        ai: 'Analyse IA en temps réel',
        crypto: 'Cryptographie quantique',
        instant: 'Résultat instantané',
        secure: 'Chiffrement AES-256'
      },
      steps: {
        title: 'Processus de vérification',
        step1: '1. Téléchargez votre document PDF',
        step2: '2. Notre IA analyse la structure et le contenu',
        step3: '3. Vérification cryptographique des signatures',
        step4: '4. Comparaison avec l\'original en base de données'
      },
      security: {
        algorithm: 'Algorithme utilisé',
        publicKey: 'Clé publique',
        signature: 'Signature numérique',
        hash: 'Empreinte cryptographique',
        timestamp: 'Horodatage de création',
        issuer: 'Autorité émettrice',
        serialNumber: 'Numéro de série',
        validUntil: 'Valide jusqu\'au'
      },
      guide: {
        title: 'Guide de vérification',
        step1Title: 'Préparez votre document',
        step1Desc: 'Assurez-vous que votre document PDF contient un QR code visible',
        step2Title: 'Téléchargez le fichier',
        step2Desc: 'Sélectionnez votre document ou utilisez le glisser-déposer',
        step3Title: 'Attendez l\'analyse',
        step3Desc: 'Notre IA examine chaque élément du document',
        step4Title: 'Consultez les résultats',
        step4Desc: 'Obtenez un rapport détaillé avec preuves cryptographiques'
      }
    },
    en: {
      title: 'Document Verification',
      subtitle: 'Instantly verify the authenticity of your official documents with our advanced AI technology',
      methods: {
        qr: 'Scan QR Code',
        file: 'Upload Document',
        code: 'Verification Code'
      },
      qrDescription: 'Use your camera to scan the QR code present on your official document',
      fileDescription: 'Upload the PDF document to verify (PDF format only)',
      codeDescription: 'Enter the unique verification code provided with your document',
      verify: 'Verify authenticity',
      processing: 'Verification in progress...',
      upload: 'Choose PDF file',
      dragDrop: 'or drag and drop your file here',
      testExample: 'Try with an example',
      howItWorks: 'How it works?',
      securityInfo: 'Security information',
      comparison: 'Visual comparison',
      downloadOriginal: 'Download original',
      viewDetails: 'View details',
      results: {
        valid: {
          title: 'Authentic Document ✓',
          description: 'This document is valid and certified by our advanced security algorithms',
          subtitle: 'Verification successful with perfect match'
        },
        invalid: {
          title: 'Non-Authentic Document ✗',
          description: 'This document could not be verified or shows security anomalies',
          subtitle: 'Verification failed - Suspicious document'
        }
      },
      placeholder: 'Enter verification code (ex: AUTH-2024-001234)',
      features: {
        ai: 'Real-time AI analysis',
        crypto: 'Quantum cryptography',
        instant: 'Instant result',
        secure: 'AES-256 encryption'
      },
      steps: {
        title: 'Verification process',
        step1: '1. Upload your PDF document',
        step2: '2. Our AI analyzes structure and content',
        step3: '3. Cryptographic signature verification',
        step4: '4. Comparison with original in database'
      },
      security: {
        algorithm: 'Algorithm used',
        publicKey: 'Public key',
        signature: 'Digital signature',
        hash: 'Cryptographic fingerprint',
        timestamp: 'Creation timestamp',
        issuer: 'Issuing authority',
        serialNumber: 'Serial number',
        validUntil: 'Valid until'
      },
      guide: {
        title: 'Verification guide',
        step1Title: 'Prepare your document',
        step1Desc: 'Ensure your PDF document contains a visible QR code',
        step2Title: 'Upload the file',
        step2Desc: 'Select your document or use drag and drop',
        step3Title: 'Wait for analysis',
        step3Desc: 'Our AI examines every element of the document',
        step4Title: 'Review results',
        step4Desc: 'Get a detailed report with cryptographic evidence'
      }
    }
  };

  const t = content[language];

  // Données simulées pour la démonstration
  const mockSecurityData = {
    algorithm: 'RSA-4096 + SHA-512',
    publicKey: '-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA...',
    signature: 'a1b2c3d4e5f6789012345678901234567890abcdef...',
    hash: 'sha512:9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca7',
    timestamp: '2024-01-15T10:30:00Z',
    issuer: 'ANTIC - Agence Nationale des TIC',
    serialNumber: 'CERT-2024-001234',
    validUntil: '2025-01-15T10:30:00Z'
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
    }
  };

  const handleVerification = async () => {
    setIsVerifying(true);
    setVerificationResult('processing');
    
    // Simulation d'analyse IA
    setTimeout(() => {
      const isValid = Math.random() > 0.2; // 80% chance of valid for demo
      setVerificationResult(isValid ? 'valid' : 'invalid');
      
      // Simulation des données d'analyse IA
      setAiAnalysis({
        fraud_probability: Math.random() * 0.3,
        confidence_score: 0.85 + Math.random() * 0.15,
        is_suspicious: !isValid,
        analysis_summary: isValid 
          ? "L'analyse approfondie confirme l'authenticité du document. Toutes les signatures cryptographiques sont valides et correspondent aux standards de sécurité ANTIC."
          : "Des anomalies ont été détectées dans la structure du document. Les signatures cryptographiques ne correspondent pas aux standards attendus.",
        recommendations: isValid 
          ? ["Document authentique et sûr à utiliser", "Toutes les vérifications de sécurité sont positives"]
          : ["Vérifiez la source du document", "Contactez l'autorité émettrice pour confirmation"]
      });
      
      setIsVerifying(false);
    }, 3000);
  };

  const resetVerification = () => {
    setFile(null);
    setVerificationResult(null);
    setAiAnalysis(null);
    setVerificationCode('');
    setShowComparison(false);
    setShowSecurityDetails(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
              <Shield className="mr-2 h-4 w-4" />
              {language === 'fr' ? 'Technologie de pointe' : 'Cutting-edge technology'}
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">{t.subtitle}</p>
          
          {/* Features badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
              <Brain className="text-purple-600 mr-3" size={20} />
              <span className="text-gray-700 font-medium">{t.features.ai}</span>
            </div>
            <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
              <Lock className="text-blue-600 mr-3" size={20} />
              <span className="text-gray-700 font-medium">{t.features.crypto}</span>
            </div>
            <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
              <Zap className="text-green-600 mr-3" size={20} />
              <span className="text-gray-700 font-medium">{t.features.instant}</span>
            </div>
            <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
              <Shield className="text-red-600 mr-3" size={20} />
              <span className="text-gray-700 font-medium">{t.features.secure}</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Verification Card */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl text-gray-900">{t.title}</CardTitle>
                <CardDescription className="text-lg text-gray-600 mt-4">
                  {language === 'fr' 
                    ? 'Choisissez votre méthode de vérification préférée' 
                    : 'Choose your preferred verification method'}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8">
                {/* Method Selection */}
                <div className="grid grid-cols-3 gap-4">
                  <button
                    onClick={() => setVerificationMethod('qr')}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                      verificationMethod === 'qr'
                        ? 'border-blue-500 bg-blue-50 shadow-lg'
                        : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                    }`}
                  >
                    <Scan className="mx-auto mb-3 text-blue-600" size={32} />
                    <div className="text-sm font-semibold">{t.methods.qr}</div>
                  </button>
                  
                  <button
                    onClick={() => setVerificationMethod('file')}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                      verificationMethod === 'file'
                        ? 'border-purple-500 bg-purple-50 shadow-lg'
                        : 'border-gray-200 hover:border-purple-300 hover:shadow-md'
                    }`}
                  >
                    <Upload className="mx-auto mb-3 text-purple-600" size={32} />
                    <div className="text-sm font-semibold">{t.methods.file}</div>
                  </button>
                  
                  <button
                    onClick={() => setVerificationMethod('code')}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                      verificationMethod === 'code'
                        ? 'border-green-500 bg-green-50 shadow-lg'
                        : 'border-gray-200 hover:border-green-300 hover:shadow-md'
                    }`}
                  >
                    <Search className="mx-auto mb-3 text-green-600" size={32} />
                    <div className="text-sm font-semibold">{t.methods.code}</div>
                  </button>
                </div>

                {/* Verification Interface */}
                <div className="space-y-6">
                  {verificationMethod === 'qr' && (
                    <div className="text-center p-12 border-2 border-dashed border-blue-300 rounded-xl bg-blue-50/50">
                      <Camera className="mx-auto mb-6 text-blue-400" size={64} />
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">{t.qrDescription}</h3>
                      <p className="text-gray-600 mb-6">
                        {language === 'fr' 
                          ? 'Positionnez le QR code dans le cadre de votre caméra'
                          : 'Position the QR code within your camera frame'}
                      </p>
                      <Button 
                        onClick={handleVerification}
                        className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg"
                        disabled={isVerifying}
                      >
                        {isVerifying ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            {t.processing}
                          </>
                        ) : (
                          <>
                            <Scan className="mr-2 h-5 w-5" />
                            {language === 'fr' ? 'Activer la caméra' : 'Activate camera'}
                          </>
                        )}
                      </Button>
                    </div>
                  )}

                  {verificationMethod === 'file' && (
                    <div className="space-y-6">
                      <div className="text-center p-12 border-2 border-dashed border-purple-300 rounded-xl bg-purple-50/50 transition-all duration-300 hover:border-purple-400">
                        <input
                          type="file"
                          id="file-upload"
                          className="hidden"
                          onChange={handleFileChange}
                          accept=".pdf"
                        />
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <Upload className="mx-auto mb-6 text-purple-400" size={64} />
                          <h3 className="text-xl font-semibold mb-3 text-gray-800">{t.upload}</h3>
                          <p className="text-gray-600 mb-2">{t.dragDrop}</p>
                          <p className="text-sm text-gray-500">{t.fileDescription}</p>
                        </label>
                      </div>

                      {file && (
                        <div className="flex items-center p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200">
                          <FileText className="h-8 w-8 text-purple-600 mr-4" />
                          <div className="flex-1">
                            <p className="font-semibold text-gray-800">{file.name}</p>
                            <p className="text-sm text-gray-600">
                              {(file.size / 1024 / 1024).toFixed(2)} MB • PDF
                            </p>
                          </div>
                          <Button
                            onClick={() => setFile(null)}
                            variant="outline"
                            size="sm"
                          >
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      )}

                      <Button 
                        onClick={handleVerification}
                        className="w-full bg-purple-600 hover:bg-purple-700 py-4 text-lg"
                        disabled={isVerifying || !file}
                      >
                        {isVerifying ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            {t.processing}
                          </>
                        ) : (
                          <>
                            <Shield className="mr-2 h-5 w-5" />
                            {t.verify}
                          </>
                        )}
                      </Button>

                      <div className="text-center">
                        <Button variant="outline" size="sm" className="text-purple-600 border-purple-300">
                          <Download className="mr-2 h-4 w-4" />
                          {t.testExample}
                        </Button>
                      </div>
                    </div>
                  )}

                  {verificationMethod === 'code' && (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <label className="block text-sm font-medium text-gray-700">
                          {t.codeDescription}
                        </label>
                        <Input
                          placeholder={t.placeholder}
                          value={verificationCode}
                          onChange={(e) => setVerificationCode(e.target.value)}
                          className="text-center text-lg font-mono py-4 border-2 border-green-300 focus:border-green-500"
                        />
                      </div>
                      <Button 
                        onClick={handleVerification}
                        className="w-full bg-green-600 hover:bg-green-700 py-4 text-lg"
                        disabled={isVerifying || !verificationCode}
                      >
                        {isVerifying ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            {t.processing}
                          </>
                        ) : (
                          <>
                            <Search className="mr-2 h-5 w-5" />
                            {t.verify}
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </div>

                {/* Processing State */}
                {verificationResult === 'processing' && (
                  <div className="text-center py-16">
                    <div className="relative mb-8">
                      <div className="h-32 w-32 mx-auto">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 animate-spin"></div>
                        <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
                          <Brain className="h-12 w-12 text-purple-600 animate-pulse" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{t.processing}</h3>
                    <div className="max-w-md mx-auto space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                        {language === 'fr' ? 'Analyse de la structure du document...' : 'Analyzing document structure...'}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
                        {language === 'fr' ? 'Vérification des signatures cryptographiques...' : 'Verifying cryptographic signatures...'}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                        {language === 'fr' ? 'Comparaison avec la base de données...' : 'Comparing with database...'}
                      </div>
                    </div>
                  </div>
                )}

                {/* Verification Result */}
                {verificationResult && verificationResult !== 'processing' && (
                  <div className="space-y-8">
                    {/* Main Result */}
                    <div className={`text-center p-12 rounded-2xl border-2 ${
                      verificationResult === 'valid' 
                        ? 'border-green-200 bg-gradient-to-br from-green-50 to-emerald-50' 
                        : 'border-red-200 bg-gradient-to-br from-red-50 to-pink-50'
                    }`}>
                      <div className={`h-24 w-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
                        verificationResult === 'valid' ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {verificationResult === 'valid' ? (
                          <CheckCircle className="h-12 w-12 text-green-600" />
                        ) : (
                          <XCircle className="h-12 w-12 text-red-600" />
                        )}
                      </div>
                      <h3 className={`text-3xl font-bold mb-3 ${
                        verificationResult === 'valid' ? 'text-green-700' : 'text-red-700'
                      }`}>
                        {verificationResult === 'valid' ? t.results.valid.title : t.results.invalid.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-2">
                        {verificationResult === 'valid' ? t.results.valid.subtitle : t.results.invalid.subtitle}
                      </p>
                      <p className="text-gray-600">
                        {verificationResult === 'valid' ? t.results.valid.description : t.results.invalid.description}
                      </p>
                    </div>

                    {/* AI Analysis Results */}
                    {aiAnalysis && (
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200">
                        <h4 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                          <Brain className="h-6 w-6 text-purple-600" />
                          {language === 'fr' ? 'Analyse Intelligence Artificielle' : 'Artificial Intelligence Analysis'}
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                            <TrendingUp className={`h-10 w-10 mx-auto mb-3 ${
                              aiAnalysis.fraud_probability <= 0.2 ? 'text-green-600' : 
                              aiAnalysis.fraud_probability <= 0.5 ? 'text-yellow-600' : 'text-red-600'
                            }`} />
                            <p className="text-sm text-gray-500 mb-2">
                              {language === 'fr' ? 'Probabilité de fraude' : 'Fraud probability'}
                            </p>
                            <p className={`text-3xl font-bold ${
                              aiAnalysis.fraud_probability <= 0.2 ? 'text-green-600' : 
                              aiAnalysis.fraud_probability <= 0.5 ? 'text-yellow-600' : 'text-red-600'
                            }`}>
                              {(aiAnalysis.fraud_probability * 100).toFixed(1)}%
                            </p>
                          </div>

                          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                            <Zap className={`h-10 w-10 mx-auto mb-3 ${
                              aiAnalysis.confidence_score >= 0.8 ? 'text-green-600' : 
                              aiAnalysis.confidence_score >= 0.6 ? 'text-yellow-600' : 'text-red-600'
                            }`} />
                            <p className="text-sm text-gray-500 mb-2">
                              {language === 'fr' ? 'Score de confiance' : 'Confidence score'}
                            </p>
                            <p className={`text-3xl font-bold ${
                              aiAnalysis.confidence_score >= 0.8 ? 'text-green-600' : 
                              aiAnalysis.confidence_score >= 0.6 ? 'text-yellow-600' : 'text-red-600'
                            }`}>
                              {(aiAnalysis.confidence_score * 100).toFixed(0)}%
                            </p>
                          </div>

                          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                            <Shield className={`h-10 w-10 mx-auto mb-3 ${
                              !aiAnalysis.is_suspicious ? 'text-green-600' : 'text-red-600'
                            }`} />
                            <p className="text-sm text-gray-500 mb-2">
                              {language === 'fr' ? 'Statut final' : 'Final status'}
                            </p>
                            <p className={`text-xl font-semibold ${
                              !aiAnalysis.is_suspicious ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {!aiAnalysis.is_suspicious 
                                ? (language === 'fr' ? 'Légitime' : 'Legitimate')
                                : (language === 'fr' ? 'Suspect' : 'Suspicious')
                              }
                            </p>
                          </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 mb-6">
                          <h5 className="font-semibold mb-3 flex items-center gap-2">
                            <Info className="h-5 w-5 text-blue-600" />
                            {language === 'fr' ? 'Résumé de l\'analyse' : 'Analysis summary'}
                          </h5>
                          <p className="text-gray-700 leading-relaxed">{aiAnalysis.analysis_summary}</p>
                        </div>

                        {aiAnalysis.recommendations && aiAnalysis.recommendations.length > 0 && (
                          <div className="bg-white rounded-xl p-6">
                            <h5 className="font-semibold mb-3 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5 text-green-600" />
                              {language === 'fr' ? 'Recommandations' : 'Recommendations'}
                            </h5>
                            <ul className="space-y-2">
                              {aiAnalysis.recommendations.map((rec: string, index: number) => (
                                <li key={index} className="flex items-start gap-3">
                                  <span className="text-blue-600 mt-1">•</span>
                                  <span className="text-gray-700">{rec}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Security Details */}
                    {verificationResult === 'valid' && (
                      <div className="space-y-6">
                        <div className="flex flex-wrap gap-4">
                          <Dialog open={showSecurityDetails} onOpenChange={setShowSecurityDetails}>
                            <DialogTrigger asChild>
                              <Button variant="outline" className="flex-1 md:flex-none">
                                <Lock className="mr-2 h-4 w-4" />
                                {t.securityInfo}
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle className="flex items-center gap-2">
                                  <Shield className="h-6 w-6 text-blue-600" />
                                  {language === 'fr' ? 'Détails de sécurité cryptographique' : 'Cryptographic security details'}
                                </DialogTitle>
                                <DialogDescription>
                                  {language === 'fr' 
                                    ? 'Informations techniques détaillées sur l\'authentification du document'
                                    : 'Detailed technical information about document authentication'
                                  }
                                </DialogDescription>
                              </DialogHeader>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <div className="space-y-4">
                                  <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                      <Brain className="h-5 w-5 text-purple-600" />
                                      <span className="font-medium">{t.security.algorithm}</span>
                                    </div>
                                    <code className="text-sm text-gray-600 break-all">{mockSecurityData.algorithm}</code>
                                  </div>
                                  
                                  <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                      <Key className="h-5 w-5 text-blue-600" />
                                      <span className="font-medium">{t.security.publicKey}</span>
                                    </div>
                                    <code className="text-xs text-gray-600 break-all">{mockSecurityData.publicKey}</code>
                                  </div>
                                  
                                  <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                      <Fingerprint className="h-5 w-5 text-green-600" />
                                      <span className="font-medium">{t.security.signature}</span>
                                    </div>
                                    <code className="text-xs text-gray-600 break-all">{mockSecurityData.signature}</code>
                                  </div>
                                  
                                  <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                      <Hash className="h-5 w-5 text-orange-600" />
                                      <span className="font-medium">{t.security.hash}</span>
                                    </div>
                                    <code className="text-xs text-gray-600 break-all">{mockSecurityData.hash}</code>
                                  </div>
                                </div>
                                
                                <div className="space-y-4">
                                  <div className="bg-blue-50 rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                      <Clock className="h-5 w-5 text-blue-600" />
                                      <span className="font-medium">{t.security.timestamp}</span>
                                    </div>
                                    <p className="text-sm text-gray-700">{new Date(mockSecurityData.timestamp).toLocaleString()}</p>
                                  </div>
                                  
                                  <div className="bg-blue-50 rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                      <Globe className="h-5 w-5 text-blue-600" />
                                      <span className="font-medium">{t.security.issuer}</span>
                                    </div>
                                    <p className="text-sm text-gray-700">{mockSecurityData.issuer}</p>
                                  </div>
                                  
                                  <div className="bg-blue-50 rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                      <Info className="h-5 w-5 text-blue-600" />
                                      <span className="font-medium">{t.security.serialNumber}</span>
                                    </div>
                                    <p className="text-sm text-gray-700">{mockSecurityData.serialNumber}</p>
                                  </div>
                                  
                                  <div className="bg-green-50 rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                      <Calendar className="h-5 w-5 text-green-600" />
                                      <span className="font-medium">{t.security.validUntil}</span>
                                    </div>
                                    <p className="text-sm text-gray-700">{new Date(mockSecurityData.validUntil).toLocaleString()}</p>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>

                          <Dialog open={showComparison} onOpenChange={setShowComparison}>
                            <DialogTrigger asChild>
                              <Button variant="outline" className="flex-1 md:flex-none">
                                <Eye className="mr-2 h-4 w-4" />
                                {t.comparison}
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-6xl max-h-[90vh]">
                              <DialogHeader>
                                <DialogTitle>{language === 'fr' ? 'Comparaison visuelle des documents' : 'Visual document comparison'}</DialogTitle>
                                <DialogDescription>
                                  {language === 'fr' 
                                    ? 'Comparaison côte à côte entre le document téléchargé et l\'original authentifié'
                                    : 'Side-by-side comparison between uploaded document and authenticated original'
                                  }
                                </DialogDescription>
                              </DialogHeader>
                              
                              <div className="grid grid-cols-2 gap-6 mt-6">
                                <div className="space-y-3">
                                  <h4 className="font-semibold text-center text-green-600">
                                    {language === 'fr' ? 'Document original (base de données)' : 'Original document (database)'}
                                  </h4>
                                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 h-96 flex items-center justify-center">
                                    <div className="text-center">
                                      <FileText className="h-16 w-16 text-green-600 mx-auto mb-4" />
                                      <p className="text-sm text-green-700">
                                        {language === 'fr' ? 'Aperçu du document original' : 'Original document preview'}
                                      </p>
                                      <div className="mt-4 text-xs text-green-600">
                                        <p>✓ {language === 'fr' ? 'Signature valide' : 'Valid signature'}</p>
                                        <p>✓ {language === 'fr' ? 'Empreinte cryptographique correcte' : 'Correct cryptographic fingerprint'}</p>
                                        <p>✓ {language === 'fr' ? 'Métadonnées intactes' : 'Intact metadata'}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="space-y-3">
                                  <h4 className="font-semibold text-center text-blue-600">
                                    {language === 'fr' ? 'Document téléchargé' : 'Uploaded document'}
                                  </h4>
                                  <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 h-96 flex items-center justify-center">
                                    <div className="text-center">
                                      <Upload className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                                      <p className="text-sm text-blue-700">
                                        {file?.name || (language === 'fr' ? 'Document utilisateur' : 'User document')}
                                      </p>
                                      <div className="mt-4 text-xs text-blue-600">
                                        <p>✓ {language === 'fr' ? 'Correspondance parfaite' : 'Perfect match'}</p>
                                        <p>✓ {language === 'fr' ? 'Aucune altération détectée' : 'No alteration detected'}</p>
                                        <p>✓ {language === 'fr' ? 'Authentification réussie' : 'Authentication successful'}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-center gap-2 mb-2">
                                  <CheckCircle className="h-5 w-5 text-green-600" />
                                  <span className="font-semibold text-green-800">
                                    {language === 'fr' ? 'Correspondance 100%' : '100% Match'}
                                  </span>
                                </div>
                                <p className="text-sm text-green-700">
                                  {language === 'fr' 
                                    ? 'Les deux documents sont identiques au niveau cryptographique. Toutes les signatures numériques correspondent.'
                                    : 'Both documents are cryptographically identical. All digital signatures match.'
                                  }
                                </p>
                              </div>
                            </DialogContent>
                          </Dialog>

                          <Button variant="outline">
                            <Download className="mr-2 h-4 w-4" />
                            {t.downloadOriginal}
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Reset Button */}
                    <div className="text-center pt-6">
                      <Button 
                        onClick={resetVerification}
                        className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
                      >
                        {language === 'fr' ? 'Vérifier un autre document' : 'Verify another document'}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* How it works */}
            <Card className="shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-blue-600" />
                  {t.steps.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold mb-1">{t.guide.step1Title}</h4>
                      <p className="text-sm text-gray-600">{t.guide.step1Desc}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold mb-1">{t.guide.step2Title}</h4>
                      <p className="text-sm text-gray-600">{t.guide.step2Desc}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold mb-1">{t.guide.step3Title}</h4>
                      <p className="text-sm text-gray-600">{t.guide.step3Desc}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold mb-1">{t.guide.step4Title}</h4>
                      <p className="text-sm text-gray-600">{t.guide.step4Desc}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Certifications */}
            <Card className="shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  {language === 'fr' ? 'Sécurité & Conformité' : 'Security & Compliance'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={16} />
                    <span className="text-sm">
                      {language === 'fr' ? 'Conforme eIDAS & ANSSI' : 'eIDAS & ANSSI compliant'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={16} />
                    <span className="text-sm">
                      {language === 'fr' ? 'Chiffrement AES 256-bit' : 'AES 256-bit encryption'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={16} />
                    <span className="text-sm">
                      {language === 'fr' ? 'Audit sécurité indépendant' : 'Independent security audit'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={16} />
                    <span className="text-sm">
                      {language === 'fr' ? 'Cryptographie post-quantique' : 'Post-quantum cryptography'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={16} />
                    <span className="text-sm">
                      {language === 'fr' ? 'Blockchain pour traçabilité' : 'Blockchain for traceability'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card className="shadow-xl bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-center">
                  {language === 'fr' ? 'Statistiques en temps réel' : 'Real-time statistics'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">1,247</div>
                    <div className="text-sm text-gray-600">
                      {language === 'fr' ? 'Documents vérifiés aujourd\'hui' : 'Documents verified today'}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">99.8%</div>
                    <div className="text-sm text-gray-600">
                      {language === 'fr' ? 'Précision de détection' : 'Detection accuracy'}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">2.3s</div>
                    <div className="text-sm text-gray-600">
                      {language === 'fr' ? 'Temps moyen de vérification' : 'Average verification time'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer language={language} />
    </div>
  );
};

export default Verification;
