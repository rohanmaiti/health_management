import { useContext } from 'react';
import { ThemeContext, type ThemeContextType } from '../contexts/ThemeContext';

// Custom hook to use theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};

// Utility hook for conditional class names
export const useThemeClasses = () => {
  const { isDark } = useTheme();
  
  return {
    isDark,
    bg: {
      primary: isDark ? 'bg-slate-900' : 'bg-white',
      secondary: isDark ? 'bg-slate-800' : 'bg-gray-50',
      tertiary: isDark ? 'bg-slate-700' : 'bg-gray-100',
      card: isDark ? 'bg-slate-800' : 'bg-white',
      hover: isDark ? 'hover:bg-slate-700' : 'hover:bg-gray-50',
    },
    text: {
      primary: isDark ? 'text-white' : 'text-gray-900',
      secondary: isDark ? 'text-slate-300' : 'text-gray-600',
      muted: isDark ? 'text-slate-400' : 'text-gray-500',
      accent: isDark ? 'text-blue-400' : 'text-green-600',
    },
    border: {
      primary: isDark ? 'border-slate-700' : 'border-gray-200',
      secondary: isDark ? 'border-slate-600' : 'border-gray-300',
    },
    accent: {
      primary: isDark ? 'bg-blue-600' : 'bg-green-600',
      secondary: isDark ? 'bg-blue-500' : 'bg-green-500',
      light: isDark ? 'bg-blue-900/30' : 'bg-green-50',
    }
  };
};
