
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Plus, 
  Edit3, 
  Eye, 
  Download, 
  Upload,
  QrCode,
  PenTool,
  Save,
  AlertTriangle
} from 'lucide-react';

interface TemplateManagerProps {
  language: 'fr' | 'en';
}

const TemplateManager: React.FC<TemplateManagerProps> = ({ language }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [qrPosition, setQrPosition] = useState({ x: 50, y: 80 });
  const [signaturePosition, setSignaturePosition] = useState({ x: 50, y: 90 });

  const content = {
    fr: {
      title: 'Gestionnaire de Templates',
      description: 'Créez et gérez vos modèles de documents avec positionnement QR et signature',
      tabs: {
        list: 'Liste des Templates',
        editor: 'Éditeur',
        preview: 'Aperçu'
      },
      buttons: {
        create: 'Nouveau Template',
        edit: 'Modifier',
        preview: 'Aperçu',
        download: 'Télécharger',
        upload: 'Importer',
        save: 'Sauvegarder',
        position: 'Positionner'
      },
      labels: {
        qrCode: 'Code QR',
        signature: 'Zone Signature',
        coordinates: 'Coordonnées',
        testDoc: 'Document Test'
      },
      status: {
        active: 'Actif',
        draft: 'Brouillon'
      }
    },
    en: {
      title: 'Template Manager',
      description: 'Create and manage your document templates with QR and signature positioning',
      tabs: {
        list: 'Template List',
        editor: 'Editor',
        preview: 'Preview'
      },
      buttons: {
        create: 'New Template',
        edit: 'Edit',
        preview: 'Preview',
        download: 'Download',
        upload: 'Import',
        save: 'Save',
        position: 'Position'
      },
      labels: {
        qrCode: 'QR Code',
        signature: 'Signature Zone',
        coordinates: 'Coordinates',
        testDoc: 'Test Document'
      },
      status: {
        active: 'Active',
        draft: 'Draft'
      }
    }
  };

  const t = content[language];

  const templates = [
    {
      id: 1,
      name: language === 'fr' ? 'Acte de Naissance' : 'Birth Certificate',
      status: 'active',
      lastModified: language === 'fr' ? 'Il y a 2 jours' : '2 days ago',
      usage: 324
    },
    {
      id: 2,
      name: language === 'fr' ? 'Certificat de Résidence' : 'Residence Certificate',
      status: 'active',
      lastModified: language === 'fr' ? 'Il y a 1 semaine' : '1 week ago',
      usage: 187
    },
    {
      id: 3,
      name: language === 'fr' ? 'Permis de Construire' : 'Building Permit',
      status: 'draft',
      lastModified: language === 'fr' ? 'Il y a 3 jours' : '3 days ago',
      usage: 23
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t.title}</h1>
          <p className="text-gray-600 dark:text-gray-400">{t.description}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            {t.buttons.upload}
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            {t.buttons.create}
          </Button>
        </div>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="list">{t.tabs.list}</TabsTrigger>
          <TabsTrigger value="editor">{t.tabs.editor}</TabsTrigger>
          <TabsTrigger value="preview">{t.tabs.preview}</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="space-y-4">
          <div className="grid gap-4">
            {templates.map((template) => (
              <Card key={template.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{template.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{template.lastModified}</span>
                          <span>Utilisé {template.usage} fois</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Badge variant={template.status === 'active' ? 'default' : 'secondary'}>
                        {template.status === 'active' ? t.status.active : t.status.draft}
                      </Badge>
                      
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" onClick={() => setSelectedTemplate(template.id)}>
                          <Edit3 className="h-4 w-4" />
                        </Button>
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

        <TabsContent value="editor" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    {t.labels.testDoc}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div 
                    className="relative w-full h-96 bg-white border-2 border-dashed border-gray-300 rounded-lg overflow-hidden"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg%3E%3Ctext x="10" y="20" font-family="Arial" font-size="12" fill="%23999"%3EDocument Template%3C/text%3E%3Ctext x="10" y="40" font-family="Arial" font-size="10" fill="%23666"%3EContenu du document ici...%3C/text%3E%3C/g%3E%3C/svg%3E")' }}
                  >
                    {/* QR Code Position */}
                    <div
                      className="absolute w-12 h-12 bg-blue-100 border-2 border-blue-500 rounded flex items-center justify-center cursor-move"
                      style={{ left: `${qrPosition.x}%`, top: `${qrPosition.y}%` }}
                    >
                      <QrCode className="h-6 w-6 text-blue-600" />
                    </div>
                    
                    {/* Signature Position */}
                    <div
                      className="absolute w-24 h-12 bg-green-100 border-2 border-green-500 rounded flex items-center justify-center cursor-move"
                      style={{ left: `${signaturePosition.x}%`, top: `${signaturePosition.y}%` }}
                    >
                      <PenTool className="h-4 w-4 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t.buttons.position}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium flex items-center gap-2 mb-2">
                      <QrCode className="h-4 w-4" />
                      {t.labels.qrCode}
                    </label>
                    <div className="space-y-2">
                      <div>
                        <label className="text-xs text-gray-500">X: {qrPosition.x}%</label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={qrPosition.x}
                          onChange={(e) => setQrPosition(prev => ({ ...prev, x: parseInt(e.target.value) }))}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500">Y: {qrPosition.y}%</label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={qrPosition.y}
                          onChange={(e) => setQrPosition(prev => ({ ...prev, y: parseInt(e.target.value) }))}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium flex items-center gap-2 mb-2">
                      <PenTool className="h-4 w-4" />
                      {t.labels.signature}
                    </label>
                    <div className="space-y-2">
                      <div>
                        <label className="text-xs text-gray-500">X: {signaturePosition.x}%</label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={signaturePosition.x}
                          onChange={(e) => setSignaturePosition(prev => ({ ...prev, x: parseInt(e.target.value) }))}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500">Y: {signaturePosition.y}%</label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={signaturePosition.y}
                          onChange={(e) => setSignaturePosition(prev => ({ ...prev, y: parseInt(e.target.value) }))}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    <Save className="h-4 w-4 mr-2" />
                    {t.buttons.save}
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-orange-200 bg-orange-50 dark:bg-orange-900/10">
                <CardContent className="p-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-orange-800 dark:text-orange-200">
                        {language === 'fr' ? 'Attention' : 'Warning'}
                      </p>
                      <p className="text-orange-700 dark:text-orange-300">
                        {language === 'fr' 
                          ? 'Assurez-vous que les positions du QR code et de la signature ne se chevauchent pas avec le contenu principal du document.'
                          : 'Make sure QR code and signature positions do not overlap with the main document content.'
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="preview">
          <Card>
            <CardHeader>
              <CardTitle>{t.tabs.preview}</CardTitle>
              <CardDescription>
                {language === 'fr' 
                  ? 'Aperçu du document avec les éléments positionnés'
                  : 'Document preview with positioned elements'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">
                  {language === 'fr' ? 'Aperçu du document ici' : 'Document preview here'}
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TemplateManager;
