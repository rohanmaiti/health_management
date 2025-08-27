import { useThemeClasses } from '../../../hooks/useTheme';

export const Appointments = () => {
  const themeClasses = useThemeClasses();
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-2xl font-bold ${themeClasses.text.primary}`}>
          Appointments
        </h2>
        <button className={`${themeClasses.accent.primary} hover:${themeClasses.accent.secondary} text-white px-4 py-2 rounded-lg font-medium transition-colors`}>
          Schedule Appointment
        </button>
      </div>
      <div className={`${themeClasses.bg.card} rounded-xl shadow-sm border ${themeClasses.border.primary} p-6`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className={`${themeClasses.isDark ? 'bg-blue-900/20 border-blue-800' : 'bg-blue-50 border-blue-200'} p-4 rounded-lg border`}>
            <h4 className={`text-sm font-medium ${themeClasses.isDark ? 'text-blue-400' : 'text-blue-600'}`}>
              Today
            </h4>
            <p className={`text-2xl font-bold ${themeClasses.isDark ? 'text-blue-300' : 'text-blue-800'}`}>
              23
            </p>
          </div>
          <div className={`${themeClasses.isDark ? 'bg-indigo-900/20 border-indigo-800' : 'bg-green-50 border-green-200'} p-4 rounded-lg border`}>
            <h4 className={`text-sm font-medium ${themeClasses.isDark ? 'text-indigo-400' : 'text-green-600'}`}>
              This Week
            </h4>
            <p className={`text-2xl font-bold ${themeClasses.isDark ? 'text-indigo-300' : 'text-green-800'}`}>
              156
            </p>
          </div>
          <div className={`${themeClasses.isDark ? 'bg-yellow-900/20 border-yellow-800' : 'bg-yellow-50 border-yellow-200'} p-4 rounded-lg border`}>
            <h4 className={`text-sm font-medium ${themeClasses.isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>
              Pending
            </h4>
            <p className={`text-2xl font-bold ${themeClasses.isDark ? 'text-yellow-300' : 'text-yellow-800'}`}>
              8
            </p>
          </div>
          <div className={`${themeClasses.isDark ? 'bg-red-900/20 border-red-800' : 'bg-red-50 border-red-200'} p-4 rounded-lg border`}>
            <h4 className={`text-sm font-medium ${themeClasses.isDark ? 'text-red-400' : 'text-red-600'}`}>
              Cancelled
            </h4>
            <p className={`text-2xl font-bold ${themeClasses.isDark ? 'text-red-300' : 'text-red-800'}`}>3</p>
          </div>
        </div>
        <div className={`${themeClasses.bg.card} p-4 rounded-lg border ${themeClasses.border.primary}`}>
          <p className={themeClasses.text.secondary}>
            Calendar view and appointment scheduling interface would be displayed
            here.
          </p>
        </div>
      </div>
    </div>
  );
};
