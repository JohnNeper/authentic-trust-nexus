
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, MapPin, Phone, Mail, Globe, Users, Calendar, Shield } from 'lucide-react';

interface InstitutionOverviewProps {
  language: 'fr' | 'en';
}

const InstitutionOverview: React.FC<InstitutionOverviewProps> = ({ language }) => {
  const content = {
    fr: {
      title: 'Vue d\'ensemble de l\'institution',
      description: 'Informations générales et état de la plateforme',
      address: 'Adresse',
      contact: 'Contact',
      website: 'Site web',
      employees: 'Employés',
      departments: 'Départements',
      since: 'Depuis',
      status: 'Statut',
      statusActive: 'Actif',
      statusVerified: 'Vérifié',
      securityLevel: 'Niveau de sécurité',
      securityHigh: 'Élevé'
    },
    en: {
      title: 'Institution Overview',
      description: 'General information and platform status',
      address: 'Address',
      contact: 'Contact',
      website: 'Website',
      employees: 'Employees',
      departments: 'Departments',
      since: 'Since',
      status: 'Status',
      statusActive: 'Active',
      statusVerified: 'Verified',
      securityLevel: 'Security Level',
      securityHigh: 'High'
    }
  };

  const t = content[language];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building2 className="h-5 w-5 text-blue-600" />
          {t.title}
        </CardTitle>
        <CardDescription>{t.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-gray-500 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-500">{t.address}</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">
                  BP 1234, Bafoussam<br />
                  Région de l'Ouest, Cameroun
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="h-4 w-4 text-gray-500 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-500">{t.contact}</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">
                  +237 233 44 12 34<br />
                  +237 699 88 77 66
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="h-4 w-4 text-gray-500 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">
                  contact@cub.cm
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="h-4 w-4 text-gray-500 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-500">{t.website}</p>
                <p className="text-sm text-blue-600">www.cub.cm</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-500">{t.employees}</span>
                <Badge variant="secondary">234</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-500">{t.departments}</span>
                <Badge variant="secondary">12</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-500">{t.since}</span>
                <Badge variant="secondary">2024</Badge>
              </div>
            </div>
            
            <div className="space-y-2 pt-2 border-t">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-500">{t.status}</span>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  {t.statusActive}
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                  {t.statusVerified}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-gray-500">{t.securityLevel}</span>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  {t.securityHigh}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InstitutionOverview;
