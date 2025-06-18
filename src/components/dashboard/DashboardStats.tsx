
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileCheck, FileClock, FileWarning, Users, FileText, TrendingUp, Clock, AlertTriangle } from 'lucide-react';

interface DashboardStatsProps {
  language: 'fr' | 'en';
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ language }) => {
  const content = {
    fr: {
      signedDocs: 'Documents signés',
      signedDesc: 'Ce mois: +20%',
      pendingDocs: 'En attente de signature',
      pendingDesc: 'Dernières 24h: +5',
      rejectedDocs: 'Documents rejetés',
      rejectedDesc: 'Ce mois: -10%',
      activeUsers: 'Utilisateurs actifs',
      activeDesc: 'Connectés aujourd\'hui',
      totalTemplates: 'Templates disponibles',
      templatesDesc: 'Prêts à utiliser',
      avgProcessing: 'Temps de traitement moyen',
      avgDesc: 'Minutes par document',
      monthlyGrowth: 'Croissance mensuelle',
      growthDesc: 'Documents traités',
      criticalAlerts: 'Alertes critiques',
      alertsDesc: 'Nécessitent attention'
    },
    en: {
      signedDocs: 'Signed Documents',
      signedDesc: 'This month: +20%',
      pendingDocs: 'Pending Signature',
      pendingDesc: 'Last 24h: +5',
      rejectedDocs: 'Rejected Documents',
      rejectedDesc: 'This month: -10%',
      activeUsers: 'Active Users',
      activeDesc: 'Connected today',
      totalTemplates: 'Available Templates',
      templatesDesc: 'Ready to use',
      avgProcessing: 'Average Processing Time',
      avgDesc: 'Minutes per document',
      monthlyGrowth: 'Monthly Growth',
      growthDesc: 'Documents processed',
      criticalAlerts: 'Critical Alerts',
      alertsDesc: 'Need attention'
    }
  };

  const t = content[language];

  const statsCards = [
    {
      title: t.signedDocs,
      value: "1,247",
      description: t.signedDesc,
      icon: <FileCheck className="h-5 w-5 text-green-600" />,
      iconBackground: "bg-green-100 dark:bg-green-900/20",
      trend: "+20%",
      trendColor: "text-green-600"
    },
    {
      title: t.pendingDocs,
      value: "42",
      description: t.pendingDesc,
      icon: <FileClock className="h-5 w-5 text-yellow-600" />,
      iconBackground: "bg-yellow-100 dark:bg-yellow-900/20",
      trend: "+5",
      trendColor: "text-yellow-600"
    },
    {
      title: t.rejectedDocs,
      value: "8",
      description: t.rejectedDesc,
      icon: <FileWarning className="h-5 w-5 text-red-600" />,
      iconBackground: "bg-red-100 dark:bg-red-900/20",
      trend: "-10%",
      trendColor: "text-green-600"
    },
    {
      title: t.activeUsers,
      value: "89",
      description: t.activeDesc,
      icon: <Users className="h-5 w-5 text-blue-600" />,
      iconBackground: "bg-blue-100 dark:bg-blue-900/20",
      trend: "+12",
      trendColor: "text-blue-600"
    },
    {
      title: t.totalTemplates,
      value: "15",
      description: t.templatesDesc,
      icon: <FileText className="h-5 w-5 text-purple-600" />,
      iconBackground: "bg-purple-100 dark:bg-purple-900/20",
      trend: "+3",
      trendColor: "text-purple-600"
    },
    {
      title: t.avgProcessing,
      value: "12",
      description: t.avgDesc,
      icon: <Clock className="h-5 w-5 text-indigo-600" />,
      iconBackground: "bg-indigo-100 dark:bg-indigo-900/20",
      trend: "-2min",
      trendColor: "text-green-600"
    },
    {
      title: t.monthlyGrowth,
      value: "+32%",
      description: t.growthDesc,
      icon: <TrendingUp className="h-5 w-5 text-emerald-600" />,
      iconBackground: "bg-emerald-100 dark:bg-emerald-900/20",
      trend: "+8%",
      trendColor: "text-emerald-600"
    },
    {
      title: t.criticalAlerts,
      value: "2",
      description: t.alertsDesc,
      icon: <AlertTriangle className="h-5 w-5 text-orange-600" />,
      iconBackground: "bg-orange-100 dark:bg-orange-900/20",
      trend: "-3",
      trendColor: "text-green-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsCards.map((card, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {card.title}
            </CardTitle>
            <div className={`${card.iconBackground} p-2 rounded-lg`}>
              {card.icon}
            </div>
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {card.value}
              </div>
              <span className={`text-sm font-medium ${card.trendColor}`}>
                {card.trend}
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {card.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
