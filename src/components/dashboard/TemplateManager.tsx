import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import TemplateEditor from './TemplateEditor';
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
  AlertTriangle,
  Search,
  Filter,
  Trash2
} from 'lucide-react';

interface TemplateManagerProps {
  language: 'fr' | 'en';
}

const TemplateManager: React.FC<TemplateManagerProps> = ({ language }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('list');
  const { toast } = useToast();

  const content = {
    fr: {
      title: 'Gestionnaire de Templates',
      description: 'Créez et gérez vos modèles de documents avec positionnement QR et signature',
      tabs: {
        list: 'Liste des Templates',
        editor: 'Nouvel Éditeur',
        preview: 'Aperçu'
      },
      buttons: {
        create: 'Nouveau Template',
        edit: 'Modifier',
        preview: 'Aperçu',
        download: 'Télécharger',
        upload: 'Importer',
        save: 'Sauvegarder',
        position: 'Positionner',
        delete: 'Supprimer'
      },
      labels: {
        qrCode: 'Code QR',
        signature: 'Zone Signature',
        coordinates: 'Coordonnées',
        testDoc: 'Document Test',
        search: 'Rechercher des templates...',
        filter: 'Filtrer'
      },
      status: {
        active: 'Actif',
        draft: 'Brouillon'
      },
      messages: {
        templateDeleted: 'Template supprimé avec succès',
        templateDownloaded: 'Template téléchargé'
      }
    },
    en: {
      title: 'Template Manager',
      description: 'Create and manage your document templates with QR and signature positioning',
      tabs: {
        list: 'Template List',
        editor: 'New Editor',
        preview: 'Preview'
      },
      buttons: {
        create: 'New Template',
        edit: 'Edit',
        preview: 'Preview',
        download: 'Download',
        upload: 'Import',
        save: 'Save',
        position: 'Position',
        delete: 'Delete'
      },
      labels: {
        qrCode: 'QR Code',
        signature: 'Signature Zone',
        coordinates: 'Coordinates',
        testDoc: 'Test Document',
        search: 'Search templates...',
        filter: 'Filter'
      },
      status: {
        active: 'Active',
        draft: 'Draft'
      },
      messages: {
        templateDeleted: 'Template deleted successfully',
        templateDownloaded: 'Template downloaded'
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
      usage: 324,
      fileSize: '2.3 MB'
    },
    {
      id: 2,
      name: language === 'fr' ? 'Certificat de Résidence' : 'Residence Certificate',
      status: 'active',
      lastModified: language === 'fr' ? 'Il y a 1 semaine' : '1 week ago',
      usage: 187,
      fileSize: '1.8 MB'
    },
    {
      id: 3,
      name: language === 'fr' ? 'Permis de Construire' : 'Building Permit',
      status: 'draft',
      lastModified: language === 'fr' ? 'Il y a 3 jours' : '3 days ago',
      usage: 23,
      fileSize: '3.1 MB'
    },
    {
      id: 4,
      name: language === 'fr' ? 'Certificat de Mariage' : 'Marriage Certificate',
      status: 'active',
      lastModified: language === 'fr' ? 'Il y a 5 jours' : '5 days ago',
      usage: 156,
      fileSize: '2.7 MB'
    }
  ];

  const filteredTemplates = templates.filter(template =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNewTemplate = () => {
    setActiveTab('editor');
    toast({
      title: language === 'fr' ? 'Nouvel éditeur' : 'New editor',
      description: language === 'fr' ? 'Créez un nouveau template' : 'Create a new template',
    });
  };

  const handleEditTemplate = (templateId: number) => {
    setSelectedTemplate(templateId);
    setActiveTab('editor');
    toast({
      title: language === 'fr' ? 'Édition' : 'Editing',
      description: language === 'fr' ? 'Template ouvert en édition' : 'Template opened for editing',
    });
  };

  const handlePreviewTemplate = (templateId: number) => {
    setSelectedTemplate(templateId);
    setActiveTab('preview');
    toast({
      title: language === 'fr' ? 'Aperçu' : 'Preview',
      description: language === 'fr' ? 'Aperçu du template' : 'Template preview',
    });
  };

  const handleDownloadTemplate = (template: any) => {
    // Simulate download
    toast({
      title: language === 'fr' ? 'Téléchargement' : 'Download',
      description: `${template.name} - ${t.messages.templateDownloaded}`,
    });
  };

  const handleDeleteTemplate = (templateId: number) => {
    toast({
      title: language === 'fr' ? 'Supprimé' : 'Deleted',
      description: t.messages.templateDeleted,
    });
  };

  const handleUploadTemplate = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        toast({
          title: language === 'fr' ? 'Importé' : 'Imported',
          description: file.name,
        });
      }
    };
    input.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t.title}</h1>
          <p className="text-gray-600 dark:text-gray-400">{t.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={handleUploadTemplate}>
            <Upload className="h-4 w-4 mr-2" />
            {t.buttons.upload}
          </Button>
          <Button onClick={handleNewTemplate}>
            <Plus className="h-4 w-4 mr-2" />
            {t.buttons.create}
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="list">{t.tabs.list}</TabsTrigger>
          <TabsTrigger value="editor">{t.tabs.editor}</TabsTrigger>
          <TabsTrigger value="preview">{t.tabs.preview}</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="space-y-4">
          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder={t.labels.search}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              {t.labels.filter}
            </Button>
          </div>

          {/* Templates Grid */}
          <div className="grid gap-4">
            {filteredTemplates.map((template) => (
              <Card key={template.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg flex-shrink-0">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-lg truncate">{template.name}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-1">
                          <span>{template.lastModified}</span>
                          <span>{language === 'fr' ? 'Utilisé' : 'Used'} {template.usage} {language === 'fr' ? 'fois' : 'times'}</span>
                          <span>{template.fileSize}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <Badge variant={template.status === 'active' ? 'default' : 'secondary'}>
                        {template.status === 'active' ? t.status.active : t.status.draft}
                      </Badge>
                      
                      <div className="flex gap-1">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleEditTemplate(template.id)}
                          title={t.buttons.edit}
                        >
                          <Edit3 className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handlePreviewTemplate(template.id)}
                          title={t.buttons.preview}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDownloadTemplate(template)}
                          title={t.buttons.download}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDeleteTemplate(template.id)}
                          title={t.buttons.delete}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {language === 'fr' ? 'Aucun template trouvé' : 'No templates found'}
                </h3>
                <p className="text-gray-500 mb-4">
                  {language === 'fr' 
                    ? 'Commencez par créer votre premier template'
                    : 'Start by creating your first template'
                  }
                </p>
                <Button onClick={handleNewTemplate}>
                  <Plus className="h-4 w-4 mr-2" />
                  {t.buttons.create}
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="editor" className="space-y-4">
          <TemplateEditor language={language} />
        </TabsContent>

        <TabsContent value="preview">
          <Card>
            <CardHeader>
              <CardTitle>{t.tabs.preview}</CardTitle>
              <CardDescription>
                {language === 'fr' 
                  ? 'Aperçu du template sélectionné avec les éléments positionnés'
                  : 'Preview of selected template with positioned elements'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-96 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                {selectedTemplate ? (
                  <div className="text-center">
                    <Eye className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">
                      {language === 'fr' 
                        ? `Aperçu du template #${selectedTemplate}`
                        : `Preview of template #${selectedTemplate}`
                      }
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">
                      {language === 'fr' 
                        ? 'Sélectionnez un template pour voir l\'aperçu'
                        : 'Select a template to see preview'
                      }
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TemplateManager;
