
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, PieChart, TrendingUp } from 'lucide-react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, PieChart as RechartsPieChart, Cell, Pie } from 'recharts';

interface DashboardChartsProps {
  language: 'fr' | 'en';
}

const DashboardCharts: React.FC<DashboardChartsProps> = ({ language }) => {
  const content = {
    fr: {
      monthlyTitle: 'Documents signés (2024)',
      monthlyDesc: 'Progression mensuelle des signatures',
      typesTitle: 'Types de documents',
      typesDesc: 'Répartition par catégorie',
      documents: 'documents',
      birthCert: 'Actes de naissance',
      diplomas: 'Diplômes',
      adminCert: 'Certificats administratifs',
      idCards: 'Pièces d\'identité',
      landTitle: 'Titres fonciers',
      others: 'Autres'
    },
    en: {
      monthlyTitle: 'Signed Documents (2024)',
      monthlyDesc: 'Monthly signature progression',
      typesTitle: 'Document Types',
      typesDesc: 'Distribution by category',
      documents: 'documents',
      birthCert: 'Birth Certificates',
      diplomas: 'Diplomas',
      adminCert: 'Administrative Certificates',
      idCards: 'ID Cards',
      landTitle: 'Land Titles',
      others: 'Others'
    }
  };

  const t = content[language];

  const monthlyData = [
    { name: 'Jan', documents: 45 },
    { name: 'Fév', documents: 52 },
    { name: 'Mar', documents: 61 },
    { name: 'Avr', documents: 58 },
    { name: 'Mai', documents: 73 },
    { name: 'Juin', documents: 89 },
    { name: 'Juil', documents: 94 },
    { name: 'Août', documents: 112 },
    { name: 'Sep', documents: 98 },
    { name: 'Oct', documents: 108 },
    { name: 'Nov', documents: 125 },
    { name: 'Déc', documents: 142 }
  ];

  const documentTypes = [
    { name: t.birthCert, value: 324, color: '#3B82F6' },
    { name: t.diplomas, value: 187, color: '#10B981' },
    { name: t.adminCert, value: 256, color: '#F59E0B' },
    { name: t.idCards, value: 89, color: '#EF4444' },
    { name: t.landTitle, value: 145, color: '#8B5CF6' },
    { name: t.others, value: 67, color: '#6B7280' }
  ];

  return (
    <div className="space-y-6">
      {/* Graphique mensuel */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              {t.monthlyTitle}
            </CardTitle>
            <CardDescription>{t.monthlyDesc}</CardDescription>
          </div>
          <div className="flex items-center gap-2 text-sm text-green-600">
            <TrendingUp className="h-4 w-4" />
            <span>+12.5%</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                  formatter={(value: any) => [value, t.documents]}
                />
                <Bar 
                  dataKey="documents" 
                  fill="#3B82F6" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Graphique en secteurs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChart className="h-5 w-5 text-purple-600" />
            {t.typesTitle}
          </CardTitle>
          <CardDescription>{t.typesDesc}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={documentTypes}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {documentTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: any) => [value, t.documents]}
                  />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="space-y-3">
              {documentTypes.map((type, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: type.color }}
                    />
                    <span className="font-medium text-sm">{type.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{type.value}</div>
                    <div className="text-xs text-gray-500">
                      {((type.value / documentTypes.reduce((sum, t) => sum + t.value, 0)) * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCharts;
