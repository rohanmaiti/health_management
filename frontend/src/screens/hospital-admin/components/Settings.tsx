import { useThemeClasses } from '../../../hooks/useTheme';

export const Setting = () => {
  const themeClasses = useThemeClasses();
  
  return (
    <div className="p-6">
      <h2 className={`text-2xl font-bold mb-6 ${themeClasses.text.primary}`}>
        Settings
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`${themeClasses.bg.card} rounded-xl shadow-sm border ${themeClasses.border.primary} p-6`}>
          <h3 className={`text-lg font-semibold ${themeClasses.text.primary} mb-4`}>
            System Settings
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className={themeClasses.text.secondary}>
                Email Notifications
              </span>
              <button className={`relative inline-flex h-6 w-11 items-center rounded-full ${themeClasses.accent.primary} transition-colors`}>
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className={themeClasses.text.secondary}>
                Auto Backup
              </span>
              <button className={`relative inline-flex h-6 w-11 items-center rounded-full ${themeClasses.isDark ? 'bg-slate-700' : 'bg-gray-200'} transition-colors`}>
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
              </button>
            </div>
          </div>
        </div>
        <div className={`${themeClasses.bg.card} rounded-xl shadow-sm border ${themeClasses.border.primary} p-6`}>
          <h3 className={`text-lg font-semibold ${themeClasses.text.primary} mb-4`}>
            User Preferences
          </h3>
          <p className={themeClasses.text.secondary}>
            User management and system configuration options would be available
            here.
          </p>
        </div>
      </div>
    </div>
  );
};