import { useThemeClasses } from '../../../hooks/useTheme';

export const Patients = () => {
  const themeClasses = useThemeClasses();
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-2xl font-bold ${themeClasses.text.primary}`}>
          Patients Management
        </h2>
        <button className={`${themeClasses.accent.primary} hover:${themeClasses.accent.secondary} text-white px-4 py-2 rounded-lg font-medium transition-colors`}>
          Add New Patient
        </button>
      </div>
      <div className={`${themeClasses.bg.card} rounded-xl shadow-sm border ${themeClasses.border.primary} overflow-hidden`}>
        <div className={`p-6 ${themeClasses.bg.card}`}>
          <div className="flex space-x-4 mb-6">
            <input
              type="text"
              placeholder="Search patients..."
              className={`flex-1 px-4 py-2 border ${themeClasses.border.secondary} rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent ${themeClasses.bg.card} ${themeClasses.text.primary} ${themeClasses.isDark ? 'focus:ring-blue-500 placeholder-slate-400' : 'focus:ring-green-500 placeholder-gray-500'}`}
            />
            <select className={`px-4 py-2 border ${themeClasses.border.secondary} rounded-lg focus:ring-2 focus:ring-opacity-50 ${themeClasses.bg.card} ${themeClasses.text.primary} ${themeClasses.isDark ? 'focus:ring-blue-500' : 'focus:ring-green-500'}`}>
              <option>All Departments</option>
              <option>Cardiology</option>
              <option>Neurology</option>
            </select>
          </div>
          <p className={themeClasses.text.secondary}>
            Patient records table and management system would be displayed here
            with advanced filtering, sorting, and CRUD operations.
          </p>
        </div>
      </div>
    </div>
  );
};
