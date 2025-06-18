
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Settings as SettingsIcon, 
  User, 
  Shield, 
  Bell, 
  Palette,
  Key,
  Download,
  Upload,
  Save
} from 'lucide-react';

interface SettingsProps {
  language: 'fr' | 'en';
}

const Settings: React.FC<SettingsProps> = ({ language }) => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true
  });

  const content = {
    fr: {
      title: 'Paramètres',
      description: 'Gérez vos préférences et paramètres du système',
      tabs: {
        profile: 'Profil',
        security: 'Sécurité',
        notifications: 'Notifications',
        appearance: 'Apparence'
      },
      profile: {
        name: 'Nom Complet',
        email: 'Email',
        position: 'Poste',
        institution: 'Institution',
        phone: 'Téléphone'
      },
      security: {
        certificate: 'Certificat Électronique',
        password: 'Mot de Passe',
        twoFactor: 'Authentification à Deux Facteurs',
        sessions: 'Sessions Actives'
      },
      notifications: {
        email: 'Notifications Email',
        push: 'Notifications Push',
        sms: 'Notifications SMS'
      },
      buttons: {
        save: 'Sauvegarder',
        change: 'Modifier',
        upload: 'Téléverser',
        download: 'Télécharger',
        enable: 'Activer',
        disable: 'Désactiver'
      }
    },
    en: {
      title: 'Settings',
      description: 'Manage your preferences and system settings',
      tabs: {
        profile: 'Profile',
        security: 'Security',
        notifications: 'Notifications',
        appearance: 'Appearance'
      },
      profile: {
        name: 'Full Name',
        email: 'Email',
        position: 'Position',
        institution: 'Institution',
        phone: 'Phone'
      },
      security: {
        certificate: 'Electronic Certificate',
        password: 'Password',
        twoFactor: 'Two-Factor Authentication',
        sessions: 'Active Sessions'
      },
      notifications: {
        email: 'Email Notifications',
        push: 'Push Notifications',
        sms: 'SMS Notifications'
      },
      buttons: {
        save: 'Save',
        change: 'Change',
        upload: 'Upload',
        download: 'Download',
        enable: 'Enable',
        disable: 'Disable'
      }
    }
  };

  const t = content[language];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t.title}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t.description}</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            {t.tabs.profile}
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            {t.tabs.security}
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            {t.tabs.notifications}
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            {t.tabs.appearance}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.tabs.profile}</CardTitle>
              <CardDescription>
                {language === 'fr' 
                  ? 'Gérez vos informations personnelles'
                  : 'Manage your personal information'
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{t.profile.name}</label>
                  <input
                    type="text"
                    defaultValue="Jean Mbarga"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t.profile.email}</label>
                  <input
                    type="email"
                    defaultValue="jean.mbarga@bafoussam.cm"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t.profile.position}</label>
                  <input
                    type="text"
                    defaultValue={language === 'fr' ? 'Secrétaire Général' : 'Secretary General'}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t.profile.phone}</label>
                  <input
                    type="tel"
                    defaultValue="+237 6XX XXX XXX"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t.profile.institution}</label>
                <input
                  type="text"
                  defaultValue={language === 'fr' ? 'Communauté Urbaine de Bafoussam' : 'Urban Community of Bafoussam'}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button>
                <Save className="h-4 w-4 mr-2" />
                {t.buttons.save}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.security.certificate}</CardTitle>
              <CardDescription>
                {language === 'fr' 
                  ? 'Gérez votre certificat de signature électronique'
                  : 'Manage your electronic signature certificate'
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div>
                  <p className="font-medium">
                    {language === 'fr' ? 'Certificat Actif' : 'Active Certificate'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {language === 'fr' ? 'Expire le: 15/12/2024' : 'Expires on: 15/12/2024'}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    {t.buttons.download}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    {t.buttons.upload}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.security.password}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button>
                <Key className="h-4 w-4 mr-2" />
                {t.buttons.change}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.tabs.notifications}</CardTitle>
              <CardDescription>
                {language === 'fr' 
                  ? 'Configurez vos préférences de notification'
                  : 'Configure your notification preferences'
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{t.notifications.email}</h4>
                  <p className="text-sm text-gray-600">
                    {language === 'fr' 
                      ? 'Recevez des notifications par email'
                      : 'Receive notifications via email'
                    }
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.email}
                  onChange={(e) => setNotifications(prev => ({ ...prev, email: e.target.checked }))}
                  className="h-4 w-4"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{t.notifications.push}</h4>
                  <p className="text-sm text-gray-600">
                    {language === 'fr' 
                      ? 'Recevez des notifications push'
                      : 'Receive push notifications'
                    }
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.push}
                  onChange={(e) => setNotifications(prev => ({ ...prev, push: e.target.checked }))}
                  className="h-4 w-4"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{t.notifications.sms}</h4>
                  <p className="text-sm text-gray-600">
                    {language === 'fr' 
                      ? 'Recevez des notifications par SMS'
                      : 'Receive SMS notifications'
                    }
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.sms}
                  onChange={(e) => setNotifications(prev => ({ ...prev, sms: e.target.checked }))}
                  className="h-4 w-4"
                />
              </div>
              
              <Button>
                <Save className="h-4 w-4 mr-2" />
                {t.buttons.save}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.tabs.appearance}</CardTitle>
              <CardDescription>
                {language === 'fr' 
                  ? 'Personnalisez l\'apparence de l\'interface'
                  : 'Customize the interface appearance'
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'fr' ? 'Thème' : 'Theme'}
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                  <option value="light">{language === 'fr' ? 'Clair' : 'Light'}</option>
                  <option value="dark">{language === 'fr' ? 'Sombre' : 'Dark'}</option>
                  <option value="auto">{language === 'fr' ? 'Automatique' : 'Auto'}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'fr' ? 'Langue' : 'Language'}
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                  <option value="fr">Français</option>
                  <option value="en">English</option>
                </select>
              </div>
              
              <Button>
                <Save className="h-4 w-4 mr-2" />
                {t.buttons.save}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
