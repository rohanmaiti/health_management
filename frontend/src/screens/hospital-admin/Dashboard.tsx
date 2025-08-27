export const DashboardComponent = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Dashboard</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-green-100 dark:border-slate-700 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-green-600 dark:text-blue-400 uppercase tracking-wide">Total Patients</h3>
            <p className="text-3xl font-bold text-gray-800 dark:text-white mt-2">1,234</p>
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">+12% from last month</p>
          </div>
          <div className="p-3 bg-green-100 dark:bg-blue-900/30 rounded-lg">
            <Users className="h-6 w-6 text-green-600 dark:text-blue-400" />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-green-100 dark:border-slate-700 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-green-600 dark:text-blue-400 uppercase tracking-wide">Active Staff</h3>
            <p className="text-3xl font-bold text-gray-800 dark:text-white mt-2">89</p>
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">+3 new this week</p>
          </div>
          <div className="p-3 bg-green-100 dark:bg-blue-900/30 rounded-lg">
            <Heart className="h-6 w-6 text-green-600 dark:text-blue-400" />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-green-100 dark:border-slate-700 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-green-600 dark:text-blue-400 uppercase tracking-wide">Today's Appointments</h3>
            <p className="text-3xl font-bold text-gray-800 dark:text-white mt-2">45</p>
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">8 pending</p>
          </div>
          <div className="p-3 bg-green-100 dark:bg-blue-900/30 rounded-lg">
            <Calendar className="h-6 w-6 text-green-600 dark:text-blue-400" />
          </div>
        </div>
      </div>
    </div>
    <div className="mt-8 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-green-100 dark:border-slate-700 p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recent Activity</h3>
      <div className="space-y-3">
        <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
          <div className="w-2 h-2 bg-green-500 dark:bg-blue-500 rounded-full"></div>
          <span className="text-sm text-gray-600 dark:text-slate-300">New patient registered: John Doe</span>
          <span className="text-xs text-gray-400 dark:text-slate-400 ml-auto">5 min ago</span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
          <div className="w-2 h-2 bg-blue-500 dark:bg-indigo-500 rounded-full"></div>
          <span className="text-sm text-gray-600 dark:text-slate-300">Appointment scheduled for tomorrow</span>
          <span className="text-xs text-gray-400 dark:text-slate-400 ml-auto">15 min ago</span>
        </div>
      </div>
    </div>
  </div>
);