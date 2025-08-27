import React, { createContext, useEffect, useState, type ReactNode } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  defaultTheme = 'light' 
}) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check if we're in browser environment
    if (typeof window === 'undefined') {
      return defaultTheme;
    }

    try {
      // Get saved theme from localStorage
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      return savedTheme || defaultTheme;
    } catch (error) {
      console.warn('Failed to read theme from localStorage:', error);
      return defaultTheme;
    }
  });

  // Apply theme to document and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    
    try {
      // Remove existing theme classes
      root.classList.remove('light', 'dark');
      
      // Add current theme class
      root.classList.add(theme);
      
      // Save to localStorage
      localStorage.setItem('theme', theme);
      
      // Optional: Set color-scheme for native browser elements
      root.style.colorScheme = theme;
      
    } catch (error) {
      console.warn('Failed to apply theme:', error);
    }
  }, [theme]);

  // Handle system theme changes (optional)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      // Only auto-switch if no saved preference exists
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        setThemeState(e.matches ? 'dark' : 'light');
      }
    };

    // Listen for system theme changes
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    setThemeState(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    setTheme,
    isDark: theme === 'dark',
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
