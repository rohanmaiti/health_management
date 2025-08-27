import React from 'react';
import { useThemeClasses } from '../hooks/useTheme';

interface ThemedCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const ThemedCard: React.FC<ThemedCardProps> = ({ 
  title, 
  children, 
  className = '' 
}) => {
  const themeClasses = useThemeClasses();

  return (
    <div 
      className={`
        ${themeClasses.bg.card} 
        ${themeClasses.border.primary} 
        ${themeClasses.bg.hover}
        border rounded-xl shadow-sm p-6 transition-all duration-200
        ${className}
      `}
    >
      <h3 className={`text-lg font-semibold ${themeClasses.text.primary} mb-4`}>
        {title}
      </h3>
      <div className={themeClasses.text.secondary}>
        {children}
      </div>
    </div>
  );
};
