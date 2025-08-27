import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Users,
  Heart,
  Calendar,
  Settings,
  Sun,
  Moon,
  Bell,
  User,
  LogOut,
} from "lucide-react";
import { Dashboard } from "../screens/hospital-admin/components/Dashboard";
import { Patients } from "../screens/hospital-admin/components/Patient";
import { Doctors } from "../screens/hospital-admin/components/Doctors";
import { Appointments } from "../screens/hospital-admin/components/Appointments";
import { Setting } from "../screens/hospital-admin/components/Settings";
import { useTheme, useThemeClasses } from "../hooks/useTheme";

// Mock components for different sections

interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  component: React.ComponentType;
}

const menuItems: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: Home,
    component: Dashboard,
  },
  {
    id: "patients",
    label: "Patients",
    icon: Users,
    component: Patients,
  },
  {
    id: "doctors",
    label: "Doctors & Staff",
    icon: Heart,
    component: Doctors,
  },
  {
    id: "appointments",
    label: "Appointments",
    icon: Calendar,
    component: Appointments,
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    component: Setting,
  },
];

const HospitalAdminLayout: React.FC = () => {
  // Use the theme context instead of local state
  const { isDark, toggleTheme } = useTheme();
  const themeClasses = useThemeClasses();

  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(false);
  const [activeMenuItem, setActiveMenuItem] = useState<string>("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState<boolean>(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (profileMenuOpen && !target.closest("[data-profile-menu]")) {
        setProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileMenuOpen]);

  const toggleDarkMode = () => {
    toggleTheme();
  };

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const handleMenuClick = (menuId: string) => {
    setActiveMenuItem(menuId);
    setMobileMenuOpen(false);
  };

  const ActiveComponent =
    menuItems.find((item) => item.id === activeMenuItem)?.component ||
    Dashboard;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <div className="flex min-h-screen">
        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`flex flex-col transition-all duration-300 ${
            isDark
              ? "bg-slate-900 border-r border-slate-700"
              : "bg-white border-r border-gray-200"
          } ${sidebarExpanded ? "w-64" : "w-16"} ${
            mobileMenuOpen
              ? "fixed inset-y-0 left-0 z-50 lg:relative lg:translate-x-0"
              : "hidden lg:flex"
          }`}
        >
          {/* Menu Toggle Section */}
          <div
            className={`flex items-center p-4 ${
              isDark
                ? "border-b border-slate-700"
                : "border-b border-gray-200"
            } ${sidebarExpanded ? "justify-between" : "justify-center"}`}
          >
            {/* Close button for mobile */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className={`p-2 rounded-lg transition-colors ${
                  isDark
                    ? "hover:bg-slate-800 text-slate-300"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Menu toggle button */}
            <button
              onClick={toggleSidebar}
              className={`p-2 rounded-lg transition-colors group ${
                isDark
                  ? "hover:bg-slate-800 text-slate-300"
                  : "hover:bg-gray-100 text-gray-600"
              } ${mobileMenuOpen ? "lg:block" : ""}`}
            >
              <Menu className="h-5 w-5" />
              {!sidebarExpanded && (
                <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                  Expand Menu
                </div>
              )}
            </button>

            {/* Logo/Title when expanded */}
            {sidebarExpanded && (
              <div className="flex items-center space-x-3">
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                    isDark
                      ? "bg-gradient-to-br from-blue-500 to-blue-600"
                      : "bg-gradient-to-br from-green-500 to-green-600"
                  }`}
                >
                  <Heart className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h1
                    className={`text-lg font-bold ${
                      isDark ? "text-blue-400" : "text-green-600"
                    }`}
                  >
                    MediCare
                  </h1>
                  <p
                    className={`text-xs ${
                      isDark ? "text-slate-400" : "text-gray-500"
                    }`}
                  >
                    Hospital Admin
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 px-2 py-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeMenuItem === item.id;

              return (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => handleMenuClick(item.id)}
                    className={`w-full flex items-center px-3 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? isDark
                          ? "bg-blue-900/30 text-blue-400"
                          : "bg-green-50 text-green-600"
                        : isDark
                        ? "text-slate-300 hover:bg-slate-800 hover:text-white"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    } ${!sidebarExpanded ? "justify-center" : ""}`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        sidebarExpanded ? "mr-3" : ""
                      } transition-colors duration-200 flex-shrink-0`}
                    />
                    {sidebarExpanded && (
                      <span className="transition-opacity duration-200 truncate">
                        {item.label}
                      </span>
                    )}
                  </button>

                  {!sidebarExpanded && (
                    <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                      {item.label}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* User Profile Section */}
          <div
            className={`p-3 ${
              isDark
                ? "border-t border-slate-700"
                : "border-t border-gray-200"
            }`}
          >
            <div className="relative" data-profile-menu>
              <button
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className={`w-full flex items-center p-2.5 rounded-lg transition-colors ${
                  isDark ? "hover:bg-slate-800" : "hover:bg-gray-50"
                } ${!sidebarExpanded ? "justify-center" : ""}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0 ${
                    isDark ? "bg-blue-600" : "bg-green-600"
                  }`}
                >
                  A
                </div>
                {sidebarExpanded && (
                  <div className="ml-3 flex-1 text-left">
                    <p
                      className={`text-sm font-medium ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Admin User
                    </p>
                    <p
                      className={`text-xs ${
                        isDark ? "text-slate-400" : "text-gray-500"
                      }`}
                    >
                      Administrator
                    </p>
                  </div>
                )}
              </button>

              {profileMenuOpen && sidebarExpanded && (
                <div
                  className={`absolute bottom-full mb-2 left-0 right-0 rounded-lg shadow-lg py-1 ${
                    isDark
                      ? "bg-slate-800 border border-slate-700"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <button
                    className={`w-full flex items-center px-3 py-2 text-sm transition-colors ${
                      isDark
                        ? "text-slate-300 hover:bg-slate-700"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </button>
                  <button
                    className={`w-full flex items-center px-3 py-2 text-sm transition-colors ${
                      isDark
                        ? "text-slate-300 hover:bg-slate-700"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </button>
                </div>
              )}

              {/* Tooltip for collapsed profile */}
              {!sidebarExpanded && (
                <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 group">
                  Admin User
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Header */}
          <header
            className={`px-4 py-3 ${
              isDark
                ? "bg-slate-900 border-b border-slate-700"
                : "bg-white border-b border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* Mobile menu button */}
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className={`lg:hidden p-2 rounded-lg transition-colors ${
                    isDark
                      ? "hover:bg-slate-800 text-slate-300"
                      : "hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  <Menu className="h-5 w-5" />
                </button>

                <h1
                  className={`text-xl font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {menuItems.find((item) => item.id === activeMenuItem)
                    ?.label || "Dashboard"}
                </h1>
              </div>

              <div className="flex items-center space-x-3">
                {/* Notifications */}
                <button
                  className={`relative p-2 rounded-lg transition-colors ${
                    isDark
                      ? "hover:bg-slate-800 text-slate-300"
                      : "hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* Theme Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    isDark ? "hover:bg-slate-800" : "hover:bg-gray-100"
                  }`}
                  title={
                    isDark ? "Switch to light mode" : "Switch to dark mode"
                  }
                >
                  <div className="relative w-5 h-5 transition-transform duration-200">
                    {isDark ? (
                      <Sun className="h-5 w-5 text-yellow-500 animate-pulse" />
                    ) : (
                      <Moon className="h-5 w-5 text-gray-600" />
                    )}
                  </div>
                </button>

                {/* Profile Menu (Mobile) */}
                <div className="lg:hidden relative" data-profile-menu>
                  <button
                    onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold ${
                      isDark ? "bg-blue-600" : "bg-green-600"
                    }`}
                  >
                    A
                  </button>

                  
                  {profileMenuOpen && (
                    <div
                      className={`absolute top-full right-0 mt-2 w-48 rounded-lg shadow-lg py-1 ${
                        isDark
                          ? "bg-slate-800 border border-slate-700"
                          : "bg-white border border-gray-200"
                      }`}
                    >
                      <button
                        className={`w-full flex items-center px-3 py-2 text-sm transition-colors ${
                          isDark
                            ? "text-slate-300 hover:bg-slate-700"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <User className="h-4 w-4 mr-2" />
                        Profile
                      </button>
                      <button
                        className={`w-full flex items-center px-3 py-2 text-sm transition-colors ${
                          isDark
                            ? "text-slate-300 hover:bg-slate-700"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </button>
                    </div>
                  )}


                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main
            className={`flex-1 overflow-auto ${
              isDark ? "bg-slate-950" : "bg-gray-50"
            }`}
          >
            <ActiveComponent />
          </main>
        </div>
      </div>
    </div>
  );
};

export default HospitalAdminLayout;
