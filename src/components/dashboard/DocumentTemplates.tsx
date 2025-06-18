
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Plus, Edit3, Eye, Download, Users, Calendar, MapPin } from 'lucide-react';

interface DocumentTemplatesProps {
  language: 'fr' | 'en';
}

const DocumentTemplates: React.FC<DocumentTemplatesProps> = ({ language }) => {
  const content = {
    fr: {
      title: 'Templates de Documents',
      description: 'Gérez vos modèles de documents officiels',
      createNew: 'Nouveau Template',
      viewAll: 'Voir tous',
      used: 'utilisé',
      times: 'fois',
      lastUsed: 'Dernière utilisation',
      edit: 'Modifier',
      preview: 'Aperçu',
      download: 'Télécharger',
      active: 'Actif',
      draft: 'Brouillon'
    },
    en: {
      title: 'Document Templates',
      description: 'Manage your official document templates',
      createNew: 'New Template',
      viewAll: 'View All',
      used: 'used',
      times: 'times',
      lastUsed: 'Last used',
      edit: 'Edit',
      preview: 'Preview',
      download: 'Download',
      active: 'Active',
      draft: 'Draft'
    }
  };

  const t = content[language];

  const templates = [
    {
      id: 1,
      name: language === 'fr' ? 'Acte de Naissance' : 'Birth Certificate',
      icon: <Users className="h-4 w-4 text-blue-600" />,
      usageCount: 324,
      lastUsed: language === 'fr' ? 'Il y a 2 heures' : '2 hours ago',
      status: 'active',
      bgColor: 'bg-blue-50 dark:bg-blue-900/10'
    },
    {
      id: 2,
      name: language === 'fr' ? 'Certificat de Résidence' : 'Residence Certificate',
      icon: <MapPin className="h-4 w-4 text-green-600" />,
      usageCount: 187,
      lastUsed: language === 'fr' ? 'Il y a 5 heures' : '5 hours ago',
      status: 'active',
      bgColor: 'bg-green-50 dark:bg-green-900/10'
    },
    {
      id: 3,
      name: language === 'fr' ? 'Attestation de Célibat' : 'Single Status Certificate',
      icon: <FileText className="h-4 w-4 text-purple-600" />,
      usageCount: 95,
      lastUsed: language === 'fr' ? 'Il y a 1 jour' : '1 day ago',
      status: 'active',
      bgColor: 'bg-purple-50 dark:bg-purple-900/10'
    },
    {
      id: 4,
      name: language === 'fr' ? 'Permis de Construire' : 'Building Permit',
      icon: <Calendar className="h-4 w-4 text-orange-600" />,
      usageCount: 23,
      lastUsed: language === 'fr' ? 'Il y a 3 jours' : '3 days ago',
      status: 'draft',
      bgColor: 'bg-orange-50 dark:bg-orange-900/10'
    }
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600" />
            {t.title}
          </CardTitle>
          <CardDescription>{t.description}</CardDescription>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            {t.viewAll}
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-1" />
            {t.createNew}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {templates.map((template) => (
            <div
              key={template.id}
              className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${template.bgColor}`}>
                  {template.icon}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {template.name}
                  </h4>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-sm text-gray-500">
                      {t.used} {template.usageCount} {t.times}
                    </span>
                    <span className="text-sm text-gray-500">
                      {t.lastUsed}: {template.lastUsed}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Badge variant={template.status === 'active' ? 'default' : 'secondary'}>
                  {template.status === 'active' ? t.active : t.draft}
                </Badge>
                
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit3 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentTemplates;
