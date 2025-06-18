
import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

interface DashboardHeaderProps {
  language: 'fr' | 'en';
  onLanguageChange: (lang: 'fr' | 'en') => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  language,
  onLanguageChange,
}) => {
  return (
    <header className="flex h-16 items-center gap-4 border-b bg-background px-6">
      <SidebarTrigger />
      
      <div className="flex-1" />
      
      <div className="flex items-center space-x-2">
        <Button
          variant={language === 'fr' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onLanguageChange('fr')}
        >
          FR
        </Button>
        <Button
          variant={language === 'en' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onLanguageChange('en')}
        >
          EN
        </Button>
      </div>
    </header>
  );
};

export default DashboardHeader;
