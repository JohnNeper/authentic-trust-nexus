
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileCheck, FileWarning, FileClock, Eye, User, Calendar, AlertTriangle } from 'lucide-react';

interface RecentActivityProps {
  language: 'fr' | 'en';
}

const RecentActivity: React.FC<RecentActivityProps> = ({ language }) => {
  const content = {
    fr: {
      title: 'Activité récente',
      description: 'Les dernières actions et signatures de documents',
      signed: 'Signé',
      verified: 'Vérifié',
      rejected: 'Rejeté',
      pending: 'En attente',
      viewAll: 'Voir tout',
      ago: 'Il y a',
      minutes: 'minutes',
      hours: 'heures',
      hour: 'heure',
      days: 'jours',
      day: 'jour'
    },
    en: {
      title: 'Recent Activity',
      description: 'Latest document actions and signatures',
      signed: 'Signed',
      verified: 'Verified',
      rejected: 'Rejected',
      pending: 'Pending',
      viewAll: 'View All',
      ago: '',
      minutes: 'minutes ago',
      hours: 'hours ago',
      hour: 'hour ago',
      days: 'days ago',
      day: 'day ago'
    }
  };

  const t = content[language];

  const activities = [
    {
      id: 1,
      type: 'signed',
      user: 'Jean Mbarga',
      document: language === 'fr' ? 'Certificat de résidence' : 'Residence Certificate',
      time: language === 'fr' ? `${t.ago} 10 ${t.minutes}` : `10 ${t.minutes}`,
      icon: <FileCheck className="h-4 w-4" />,
      bgColor: 'bg-green-50 dark:bg-green-900/10',
      iconColor: 'text-green-600'
    },
    {
      id: 2,
      type: 'verified',
      user: 'Paul Atangana',
      document: language === 'fr' ? 'Acte de naissance' : 'Birth Certificate',
      time: language === 'fr' ? `${t.ago} 25 ${t.minutes}` : `25 ${t.minutes}`,
      icon: <Eye className="h-4 w-4" />,
      bgColor: 'bg-blue-50 dark:bg-blue-900/10',
      iconColor: 'text-blue-600'
    },
    {
      id: 3,
      type: 'rejected',
      user: 'Marie Ondoa',
      document: language === 'fr' ? 'Attestation de célibat' : 'Single Status Certificate',
      time: language === 'fr' ? `${t.ago} 42 ${t.minutes}` : `42 ${t.minutes}`,
      icon: <FileWarning className="h-4 w-4" />,
      bgColor: 'bg-red-50 dark:bg-red-900/10',
      iconColor: 'text-red-600'
    },
    {
      id: 4,
      type: 'signed',
      user: 'Yves Essomba',
      document: language === 'fr' ? 'Diplôme universitaire' : 'University Diploma',
      time: language === 'fr' ? `${t.ago} 1 ${t.hour}` : `1 ${t.hour}`,
      icon: <FileCheck className="h-4 w-4" />,
      bgColor: 'bg-green-50 dark:bg-green-900/10',
      iconColor: 'text-green-600'
    },
    {
      id: 5,
      type: 'pending',
      user: 'Clarice Ngo',
      document: language === 'fr' ? 'Permis de construire' : 'Building Permit',
      time: language === 'fr' ? `${t.ago} 2 ${t.hours}` : `2 ${t.hours}`,
      icon: <FileClock className="h-4 w-4" />,
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/10',
      iconColor: 'text-yellow-600'
    }
  ];

  const getStatusBadge = (type: string) => {
    switch (type) {
      case 'signed':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{t.signed}</Badge>;
      case 'verified':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{t.verified}</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">{t.rejected}</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">{t.pending}</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>{t.title}</CardTitle>
          <CardDescription>{t.description}</CardDescription>
        </div>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          {t.viewAll}
        </button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <div className={`${activity.bgColor} p-2 rounded-lg`}>
                <div className={activity.iconColor}>
                  {activity.icon}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-medium text-gray-900 dark:text-white">
                    {activity.document}
                  </p>
                  {getStatusBadge(activity.type)}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <User className="h-3 w-3" />
                  <span>{activity.user}</span>
                  <span>•</span>
                  <Calendar className="h-3 w-3" />
                  <span>{activity.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
