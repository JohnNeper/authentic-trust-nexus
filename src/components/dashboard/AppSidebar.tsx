
import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { 
  Home, 
  FileText, 
  Shield, 
  PenTool, 
  History, 
  Settings,
  Building2,
  User
} from 'lucide-react';

interface AppSidebarProps {
  language: 'fr' | 'en';
  activeView: string;
  onViewChange: (view: string) => void;
}

export function AppSidebar({ language, activeView, onViewChange }: AppSidebarProps) {
  const content = {
    fr: {
      institution: 'Communauté Urbaine de Bafoussam',
      user: 'Jean Mbarga - Secrétaire Général',
      menu: {
        home: 'Accueil',
        templates: 'Templates',
        verification: 'Vérification',
        signing: 'Signature',
        history: 'Historique',
        settings: 'Paramètres'
      }
    },
    en: {
      institution: 'Urban Community of Bafoussam',
      user: 'Jean Mbarga - Secretary General',
      menu: {
        home: 'Home',
        templates: 'Templates',
        verification: 'Verification',
        signing: 'Signing',
        history: 'History',
        settings: 'Settings'
      }
    }
  };

  const t = content[language];

  const menuItems = [
    { id: 'home', label: t.menu.home, icon: Home },
    { id: 'templates', label: t.menu.templates, icon: FileText },
    { id: 'verification', label: t.menu.verification, icon: Shield },
    { id: 'signing', label: t.menu.signing, icon: PenTool },
    { id: 'history', label: t.menu.history, icon: History },
    { id: 'settings', label: t.menu.settings, icon: Settings },
  ];

  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            CUB
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
              {t.institution}
            </h2>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onViewChange(item.id)}
                    isActive={activeView === item.id}
                    className="w-full justify-start"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
            JM
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
              {t.user}
            </p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
