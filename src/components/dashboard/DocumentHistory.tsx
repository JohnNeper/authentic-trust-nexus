
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  History, 
  FileText, 
  Calendar, 
  User, 
  Download,
  Eye,
  Filter,
  Search
} from 'lucide-react';

interface DocumentHistoryProps {
  language: 'fr' | 'en';
}

const DocumentHistory: React.FC<DocumentHistoryProps> = ({ language }) => {
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const content = {
    fr: {
      title: 'Historique des Documents',
      description: 'Consultez l\'historique complet de tous vos documents',
      buttons: {
        view: 'Voir',
        download: 'Télécharger',
        filter: 'Filtrer'
      },
      status: {
        signed: 'Signé',
        verified: 'Vérifié',
        created: 'Créé',
        modified: 'Modifié',
        archived: 'Archivé'
      },
      filters: {
        all: 'Tous',
        signed: 'Signés',
        verified: 'Vérifiés',
        created: 'Créés'
      },
      placeholders: {
        search: 'Rechercher un document...'
      }
    },
    en: {
      title: 'Document History',
      description: 'View the complete history of all your documents',
      buttons: {
        view: 'View',
        download: 'Download',
        filter: 'Filter'
      },
      status: {
        signed: 'Signed',
        verified: 'Verified',
        created: 'Created',
        modified: 'Modified',
        archived: 'Archived'
      },
      filters: {
        all: 'All',
        signed: 'Signed',
        verified: 'Verified',
        created: 'Created'
      },
      placeholders: {
        search: 'Search document...'
      }
    }
  };

  const t = content[language];

  const historyEntries = [
    {
      id: 1,
      documentName: language === 'fr' ? 'Acte de Naissance - Jean Dupont' : 'Birth Certificate - Jean Dupont',
      action: 'signed',
      date: '2024-01-18 14:30',
      user: 'Jean Mbarga',
      details: language === 'fr' ? 'Document signé électroniquement' : 'Document electronically signed'
    },
    {
      id: 2,
      documentName: language === 'fr' ? 'Certificat de Résidence - Marie Kouam' : 'Residence Certificate - Marie Kouam',
      action: 'verified',
      date: '2024-01-17 10:15',
      user: 'Paul Talla',
      details: language === 'fr' ? 'Vérification d\'authenticité réussie' : 'Authenticity verification successful'
    },
    {
      id: 3,
      documentName: language === 'fr' ? 'Permis de Construire - Projet ABC' : 'Building Permit - Project ABC',
      action: 'created',
      date: '2024-01-16 16:45',
      user: 'Alice Nguemo',
      details: language === 'fr' ? 'Nouveau document créé à partir du template' : 'New document created from template'
    },
    {
      id: 4,
      documentName: language === 'fr' ? 'Contrat de Service - Entreprise XYZ' : 'Service Contract - Company XYZ',
      action: 'modified',
      date: '2024-01-15 09:20',
      user: 'Jean Mbarga',
      details: language === 'fr' ? 'Modifications apportées au document' : 'Document modifications made'
    },
    {
      id: 5,
      documentName: language === 'fr' ? 'Autorisation Temporaire - Event 2024' : 'Temporary Authorization - Event 2024',
      action: 'archived',
      date: '2024-01-14 11:00',
      user: 'Marie Kouam',
      details: language === 'fr' ? 'Document archivé après expiration' : 'Document archived after expiration'
    }
  ];

  const getStatusColor = (action: string) => {
    switch (action) {
      case 'signed': return 'bg-green-100 text-green-800';
      case 'verified': return 'bg-blue-100 text-blue-800';
      case 'created': return 'bg-purple-100 text-purple-800';
      case 'modified': return 'bg-yellow-100 text-yellow-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredEntries = historyEntries.filter(entry => {
    const matchesFilter = filterStatus === 'all' || entry.action === filterStatus;
    const matchesSearch = entry.documentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.user.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter &&!searchTerm || matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t.title}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t.description}</p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {Object.entries(t.filters).map(([key, label]) => (
            <Button
              key={key}
              variant={filterStatus === key ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilterStatus(key)}
            >
              {label}
            </Button>
          ))}
        </div>
        
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder={t.placeholders.search}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64"
          />
        </div>
      </div>

      {/* History Timeline */}
      <div className="space-y-4">
        {filteredEntries.map((entry, index) => (
          <Card key={entry.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                {/* Timeline indicator */}
                <div className="flex flex-col items-center">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/10 rounded-full">
                    <History className="h-4 w-4 text-blue-600" />
                  </div>
                  {index < filteredEntries.length - 1 && (
                    <div className="w-px h-16 bg-gray-200 dark:bg-gray-700 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{entry.documentName}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        {entry.details}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {entry.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {entry.user}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 ml-4">
                      <Badge className={getStatusColor(entry.action)}>
                        {t.status[entry.action as keyof typeof t.status]}
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
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredEntries.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <History className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {language === 'fr' ? 'Aucun résultat trouvé' : 'No results found'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'fr' 
                ? 'Essayez de modifier vos critères de recherche ou de filtrage.'
                : 'Try adjusting your search or filter criteria.'
              }
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DocumentHistory;
