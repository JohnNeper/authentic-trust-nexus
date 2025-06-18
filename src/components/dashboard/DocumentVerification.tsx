
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Eye, 
  Download,
  FileText,
  Calendar,
  User
} from 'lucide-react';

interface DocumentVerificationProps {
  language: 'fr' | 'en';
}

const DocumentVerification: React.FC<DocumentVerificationProps> = ({ language }) => {
  const [selectedDocument, setSelectedDocument] = useState<number | null>(null);

  const content = {
    fr: {
      title: 'Vérification de Documents',
      description: 'Vérifiez l\'authenticité et la validité des documents électroniques',
      buttons: {
        verify: 'Vérifier',
        view: 'Voir',
        download: 'Télécharger'
      },
      status: {
        valid: 'Valide',
        invalid: 'Invalide',
        pending: 'En attente',
        expired: 'Expiré'
      },
      labels: {
        document: 'Document',
        issuer: 'Émetteur',
        date: 'Date d\'émission',
        signature: 'Signature',
        certificate: 'Certificat'
      }
    },
    en: {
      title: 'Document Verification',
      description: 'Verify the authenticity and validity of electronic documents',
      buttons: {
        verify: 'Verify',
        view: 'View',
        download: 'Download'
      },
      status: {
        valid: 'Valid',
        invalid: 'Invalid',
        pending: 'Pending',
        expired: 'Expired'
      },
      labels: {
        document: 'Document',
        issuer: 'Issuer',
        date: 'Issue Date',
        signature: 'Signature',
        certificate: 'Certificate'
      }
    }
  };

  const t = content[language];

  const documents = [
    {
      id: 1,
      name: language === 'fr' ? 'Acte de Naissance - Jean Dupont' : 'Birth Certificate - Jean Dupont',
      issuer: language === 'fr' ? 'Communauté Urbaine de Bafoussam' : 'Urban Community of Bafoussam',
      date: '2024-01-15',
      status: 'valid',
      signatureValid: true,
      certificateValid: true
    },
    {
      id: 2,
      name: language === 'fr' ? 'Certificat de Résidence - Marie Mbarga' : 'Residence Certificate - Marie Mbarga',
      issuer: language === 'fr' ? 'Communauté Urbaine de Bafoussam' : 'Urban Community of Bafoussam',
      date: '2024-01-10',
      status: 'pending',
      signatureValid: null,
      certificateValid: null
    },
    {
      id: 3,
      name: language === 'fr' ? 'Permis de Construire - Paul Nguemo' : 'Building Permit - Paul Nguemo',
      issuer: language === 'fr' ? 'Communauté Urbaine de Bafoussam' : 'Urban Community of Bafoussam',
      date: '2023-12-20',
      status: 'expired',
      signatureValid: true,
      certificateValid: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'valid': return 'bg-green-100 text-green-800 border-green-200';
      case 'invalid': return 'bg-red-100 text-red-800 border-red-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'expired': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'valid': return <CheckCircle className="h-4 w-4" />;
      case 'invalid': return <XCircle className="h-4 w-4" />;
      case 'pending': return <AlertTriangle className="h-4 w-4" />;
      case 'expired': return <XCircle className="h-4 w-4" />;
      default: return <AlertTriangle className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t.title}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t.description}</p>
      </div>

      <div className="grid gap-6">
        {documents.map((doc) => (
          <Card key={doc.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-2">{doc.name}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">{doc.issuer}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">{doc.date}</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Shield className="h-4 w-4" />
                          <span className="text-xs">
                            {doc.signatureValid === true ? '✓' : doc.signatureValid === false ? '✗' : '?'}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4" />
                          <span className="text-xs">
                            {doc.certificateValid === true ? '✓' : doc.certificateValid === false ? '✗' : '?'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 ml-4">
                  <Badge className={getStatusColor(doc.status)}>
                    {getStatusIcon(doc.status)}
                    <span className="ml-1">
                      {t.status[doc.status as keyof typeof t.status]}
                    </span>
                  </Badge>
                  
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm"
                      onClick={() => setSelectedDocument(doc.id)}
                      disabled={doc.status === 'valid'}
                    >
                      <Shield className="h-4 w-4 mr-2" />
                      {t.buttons.verify}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DocumentVerification;
