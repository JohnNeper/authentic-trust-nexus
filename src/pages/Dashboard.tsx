
import React, { useState } from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardHome from '@/components/dashboard/DashboardHome';
import TemplateManager from '@/components/dashboard/TemplateManager';
import DocumentVerification from '@/components/dashboard/DocumentVerification';
import DocumentSigning from '@/components/dashboard/DocumentSigning';
import DocumentHistory from '@/components/dashboard/DocumentHistory';
import Settings from '@/components/dashboard/Settings';

type ActiveView = 'home' | 'templates' | 'verification' | 'signing' | 'history' | 'settings';

const Dashboard: React.FC = () => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [activeView, setActiveView] = useState<ActiveView>('home');

  const renderActiveView = () => {
    switch (activeView) {
      case 'home':
        return <DashboardHome language={language} />;
      case 'templates':
        return <TemplateManager language={language} />;
      case 'verification':
        return <DocumentVerification language={language} />;
      case 'signing':
        return <DocumentSigning language={language} />;
      case 'history':
        return <DocumentHistory language={language} />;
      case 'settings':
        return <Settings language={language} />;
      default:
        return <DashboardHome language={language} />;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar 
          language={language} 
          activeView={activeView} 
          onViewChange={setActiveView} 
        />
        <SidebarInset className="flex-1">
          <DashboardHeader 
            language={language} 
            onLanguageChange={setLanguage} 
          />
          <main className="flex-1 p-6">
            {renderActiveView()}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
