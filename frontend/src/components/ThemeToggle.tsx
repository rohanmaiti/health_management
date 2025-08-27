import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = '', 
  showLabel = false 
}) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        inline-flex items-center justify-center p-2 rounded-lg
        transition-all duration-200 ease-in-out
        ${isDark 
          ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' 
          : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
        }
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${isDark ? 'focus:ring-blue-500' : 'focus:ring-green-500'}
        ${className}
      `}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-5 h-5">
        {isDark ? (
          <Sun className="h-5 w-5 animate-pulse" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </div>
      {showLabel && (
        <span className="ml-2 text-sm font-medium">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  );
};
