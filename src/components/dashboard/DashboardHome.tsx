
import React from 'react';
import DashboardStats from './DashboardStats';
import DocumentTemplates from './DocumentTemplates';
import RecentActivity from './RecentActivity';
import DashboardCharts from './DashboardCharts';
import InstitutionOverview from './InstitutionOverview';

interface DashboardHomeProps {
  language: 'fr' | 'en';
}

const DashboardHome: React.FC<DashboardHomeProps> = ({ language }) => {
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
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t.title}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t.subtitle}</p>
      </div>

      <div className="space-y-8">
        <InstitutionOverview language={language} />
        <DashboardStats language={language} />
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <DocumentTemplates language={language} />
          <DashboardCharts language={language} />
        </div>
        
        <RecentActivity language={language} />
      </div>
    </div>
  );
};

export default DashboardHome;
