
import React, { useState } from 'react';
import DashboardStats from '@/components/dashboard/DashboardStats';
import DocumentTemplates from '@/components/dashboard/DocumentTemplates';
import RecentActivity from '@/components/dashboard/RecentActivity';
import DashboardCharts from '@/components/dashboard/DashboardCharts';
import InstitutionOverview from '@/components/dashboard/InstitutionOverview';

const Dashboard: React.FC = () => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  const content = {
    fr: {
      title: 'Tableau de bord',
      subtitle: 'Vue d\'ensemble de l\'activité de votre institution'
    },
    en: {
      title: 'Dashboard',
      subtitle: 'Overview of your institution\'s activity'
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Header avec institution et utilisateur */}
      <div className="bg-white dark:bg-slate-800 shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  CUB
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                    Communauté Urbaine de Bafoussam
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {language === 'fr' ? 'Administration municipale' : 'Municipal administration'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Sélecteur de langue */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-3 py-1 text-sm font-medium rounded ${
                    language === 'fr' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-sm font-medium rounded ${
                    language === 'en' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  EN
                </button>
              </div>
              
              {/* Utilisateur connecté */}
              <div className="flex items-center space-x-3 pl-4 border-l border-gray-200 dark:border-gray-700">
                <div className="h-8 w-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  JM
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Jean Mbarga</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {language === 'fr' ? 'Secrétaire Général' : 'Secretary General'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t.title}</h2>
          <p className="text-gray-600 dark:text-gray-400">{t.subtitle}</p>
        </div>

        <div className="space-y-8">
          {/* Vue d'ensemble de l'institution */}
          <InstitutionOverview language={language} />
          
          {/* Statistiques principales */}
          <DashboardStats language={language} />
          
          {/* Templates de documents et graphiques */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <DocumentTemplates language={language} />
            <DashboardCharts language={language} />
          </div>
          
          {/* Activité récente */}
          <RecentActivity language={language} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
