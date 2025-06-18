
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  PenTool, 
  FileText, 
  AlertTriangle, 
  Clock, 
  Users,
  CheckCircle,
  Eye,
  Download,
  Calendar,
  User
} from 'lucide-react';

interface DocumentSigningProps {
  language: 'fr' | 'en';
}

const DocumentSigning: React.FC<DocumentSigningProps> = ({ language }) => {
  const [selectedDocuments, setSelectedDocuments] = useState<number[]>([]);

  const content = {
    fr: {
      title: 'Signature de Documents',
      description: 'Signez vos documents électroniquement avec votre certificat',
      tabs: {
        pending: 'En Attente',
        group: 'Signature Groupée',
        signed: 'Signés'
      },
      buttons: {
        sign: 'Signer',
        signAll: 'Signer Tout',
        view: 'Voir',
        download: 'Télécharger'
      },
      status: {
        pending: 'En attente',
        signed: 'Signé',
        expired: 'Expiré'
      },
      warnings: {
        fraud: 'Attention: Vérifiez soigneusement le contenu avant de signer. Vous êtes responsable de tout document que vous signez.',
        groupSign: 'Signature groupée sélectionnée. Vérifiez chaque document individuellement.'
      }
    },
    en: {
      title: 'Document Signing',
      description: 'Sign your documents electronically with your certificate',
      tabs: {
        pending: 'Pending',
        group: 'Group Signing',
        signed: 'Signed'
      },
      buttons: {
        sign: 'Sign',
        signAll: 'Sign All',
        view: 'View',
        download: 'Download'
      },
      status: {
        pending: 'Pending',
        signed: 'Signed',
        expired: 'Expired'
      },
      warnings: {
        fraud: 'Warning: Carefully review the content before signing. You are responsible for any document you sign.',
        groupSign: 'Group signing selected. Review each document individually.'
      }
    }
  };

  const t = content[language];

  const pendingDocuments = [
    {
      id: 1,
      name: language === 'fr' ? 'Contrat de Service - Entreprise ABC' : 'Service Contract - Company ABC',
      type: language === 'fr' ? 'Contrat' : 'Contract',
      requester: 'Jean Mbarga',
      deadline: '2024-02-01',
      priority: 'high'
    },
    {
      id: 2,
      name: language === 'fr' ? 'Autorisation de Construction - Projet XYZ' : 'Construction Authorization - Project XYZ',
      type: language === 'fr' ? 'Autorisation' : 'Authorization',
      requester: 'Marie Kouam',
      deadline: '2024-01-25',
      priority: 'medium'
    },
    {
      id: 3,
      name: language === 'fr' ? 'Certificat de Conformité - Bâtiment 123' : 'Compliance Certificate - Building 123',
      type: language === 'fr' ? 'Certificat' : 'Certificate',
      requester: 'Paul Talla',
      deadline: '2024-01-30',
      priority: 'low'
    }
  ];

  const signedDocuments = [
    {
      id: 4,
      name: language === 'fr' ? 'Acte de Naissance - Alice Nguemo' : 'Birth Certificate - Alice Nguemo',
      type: language === 'fr' ? 'Acte Civil' : 'Civil Act',
      signedDate: '2024-01-18',
      signedBy: 'Jean Mbarga'
    },
    {
      id: 5,
      name: language === 'fr' ? 'Permis de Séjour - John Smith' : 'Residence Permit - John Smith',
      type: language === 'fr' ? 'Permis' : 'Permit',
      signedDate: '2024-01-17',
      signedBy: 'Jean Mbarga'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleDocumentSelect = (docId: number) => {
    setSelectedDocuments(prev => 
      prev.includes(docId) 
        ? prev.filter(id => id !== docId)
        : [...prev, docId]
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t.title}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t.description}</p>
      </div>

      {/* Warning Alert */}
      <Card className="border-orange-200 bg-orange-50 dark:bg-orange-900/10">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
            <div>
              <p className="font-medium text-orange-800 dark:text-orange-200 mb-1">
                {language === 'fr' ? 'Avertissement de Sécurité' : 'Security Warning'}
              </p>
              <p className="text-sm text-orange-700 dark:text-orange-300">
                {t.warnings.fraud}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {t.tabs.pending}
          </TabsTrigger>
          <TabsTrigger value="group" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            {t.tabs.group}
          </TabsTrigger>
          <TabsTrigger value="signed" className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            {t.tabs.signed}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          <div className="grid gap-4">
            {pendingDocuments.map((doc) => (
              <Card key={doc.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{doc.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {doc.requester}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {doc.deadline}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Badge className={getPriorityColor(doc.priority)}>
                        {doc.priority.toUpperCase()}
                      </Badge>
                      
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button size="sm">
                          <PenTool className="h-4 w-4 mr-2" />
                          {t.buttons.sign}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="group" className="space-y-4">
          {selectedDocuments.length > 0 && (
            <Card className="border-blue-200 bg-blue-50 dark:bg-blue-900/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">
                      {selectedDocuments.length} {language === 'fr' ? 'documents sélectionnés' : 'documents selected'}
                    </span>
                  </div>
                  <Button>
                    <PenTool className="h-4 w-4 mr-2" />
                    {t.buttons.signAll}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
          
          <div className="grid gap-4">
            {pendingDocuments.map((doc) => (
              <Card 
                key={doc.id} 
                className={`hover:shadow-md transition-shadow cursor-pointer ${
                  selectedDocuments.includes(doc.id) ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => handleDocumentSelect(doc.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        checked={selectedDocuments.includes(doc.id)}
                        onChange={() => handleDocumentSelect(doc.id)}
                        className="h-4 w-4"
                      />
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{doc.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                          <span>{doc.requester}</span>
                          <span>{doc.deadline}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Badge className={getPriorityColor(doc.priority)}>
                      {doc.priority.toUpperCase()}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="signed" className="space-y-4">
          <div className="grid gap-4">
            {signedDocuments.map((doc) => (
              <Card key={doc.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-50 dark:bg-green-900/10 rounded-lg">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{doc.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                          <span>{language === 'fr' ? 'Signé le' : 'Signed on'} {doc.signedDate}</span>
                          <span>{language === 'fr' ? 'par' : 'by'} {doc.signedBy}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {t.status.signed}
                      </Badge>
                      
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DocumentSigning;
