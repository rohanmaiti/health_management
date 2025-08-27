
import { useThemeClasses } from '../../../hooks/useTheme';

export const Doctors = () => {
  const themeClasses = useThemeClasses();
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-2xl font-bold ${themeClasses.text.primary}`}>
          Doctors & Staff
        </h2>
        <button className={`${themeClasses.accent.primary} hover:${themeClasses.accent.secondary} text-white px-4 py-2 rounded-lg font-medium transition-colors`}>
          Add Staff Member
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`${themeClasses.bg.card} rounded-xl shadow-sm border ${themeClasses.border.primary} p-6`}>
          <h3 className={`text-lg font-semibold ${themeClasses.text.primary} mb-4`}>
            Department Overview
          </h3>
          <div className="space-y-3">
            <div className={`flex justify-between items-center p-3 ${themeClasses.bg.tertiary} rounded-lg`}>
              <span className={`text-sm font-medium ${themeClasses.text.secondary}`}>
                Cardiology
              </span>
              <span className={`text-sm ${themeClasses.text.accent} font-semibold`}>
                12 doctors
              </span>
            </div>
            <div className={`flex justify-between items-center p-3 ${themeClasses.bg.tertiary} rounded-lg`}>
              <span className={`text-sm font-medium ${themeClasses.text.secondary}`}>
                Neurology
              </span>
              <span className={`text-sm ${themeClasses.text.accent} font-semibold`}>
                8 doctors
              </span>
            </div>
          </div>
        </div>
        <div className={`${themeClasses.bg.card} rounded-xl shadow-sm border ${themeClasses.border.primary} p-6`}>
          <h3 className={`text-lg font-semibold ${themeClasses.text.primary} mb-4`}>
            Staff Management
          </h3>
          <p className={themeClasses.text.secondary}>
            Doctor profiles, schedules, and staff management tools would be
            available here.
          </p>
        </div>
      </div>
    </div>
  );
};