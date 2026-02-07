import React, { useState, useEffect } from 'react';
import { Menu, Bell, ChevronDown, X } from 'lucide-react';
import { UserRole } from '../types';
import { NAV_ITEMS, APP_NAME_MARATHI, MOCK_NOTIFICATIONS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  currentRole: UserRole;
  setCurrentRole: (role: UserRole) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentRole, setCurrentRole, activeTab, setActiveTab }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const isCitizen = currentRole === UserRole.CITIZEN;
  const sidebarColorClass = isCitizen ? 'bg-gov-primary' : 'bg-indigo-900';
  const logoText = isCitizen ? 'MH' : 'Admin';

  // Handle screen resize to switch between mobile and desktop modes
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarOpen(false); // Default close on mobile
      } else {
        setIsSidebarOpen(true); // Default open on desktop
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const filteredNavItems = NAV_ITEMS.filter(item => 
    item.roles.includes('ALL') || item.roles.includes(currentRole)
  );

  return (
    <div className="flex h-screen bg-gov-bg overflow-hidden relative">
      
      {/* Mobile Backdrop */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`bg-white shadow-xl z-30 flex flex-col border-r border-gray-200 transition-all duration-300 
          ${isMobile ? 'fixed inset-y-0 left-0 w-64' : 'relative'} 
          ${isMobile && !isSidebarOpen ? '-translate-x-full' : 'translate-x-0'}
          ${!isMobile && isSidebarOpen ? 'w-64' : ''}
          ${!isMobile && !isSidebarOpen ? 'w-20' : ''}
        `}
      >
        <div className={`p-4 flex items-center justify-between border-b border-white/10 ${sidebarColorClass} text-white h-16 md:h-20 transition-colors duration-500`}>
            {isSidebarOpen || isMobile ? (
               <div className="text-center w-full">
                 <h1 className="text-lg md:text-xl font-bold whitespace-nowrap">{isCitizen ? APP_NAME_MARATHI : 'प्रशासन पोर्टल'}</h1>
                 <p className="text-[10px] md:text-xs text-white/80 opacity-90">महाराष्ट्र शासन</p>
               </div>
            ) : (
              <span className="font-bold text-xl md:text-2xl mx-auto">{logoText}</span>
            )}
            
            {isMobile && (
              <button onClick={() => setIsSidebarOpen(false)} className="text-white ml-2">
                <X size={24} />
              </button>
            )}
        </div>

        <nav className="flex-1 py-4 md:py-6 space-y-1 overflow-y-auto no-scrollbar">
          {filteredNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                if (isMobile) setIsSidebarOpen(false); // Close sidebar on mobile after click
              }}
              className={`w-full flex items-center px-4 py-3 transition-colors group relative ${
                activeTab === item.id 
                  ? 'bg-orange-50 text-gov-secondary border-r-4 border-gov-secondary' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon 
                size={24} 
                className={`flex-shrink-0 ${activeTab === item.id ? 'text-gov-secondary' : 'text-gray-500 group-hover:text-gray-700'}`} 
              />
              {(isSidebarOpen || isMobile) && (
                <span className="ml-3 font-medium text-sm text-left truncate">{item.label}</span>
              )}
              {/* Tooltip for collapsed desktop sidebar */}
              {!isSidebarOpen && !isMobile && (
                <div className="absolute left-16 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity">
                  {item.label}
                </div>
              )}
            </button>
          ))}
        </nav>

        {/* Role Switcher for Demo */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          {(isSidebarOpen || isMobile) && <p className="text-xs text-gray-500 mb-2 uppercase font-bold tracking-wider">Demo: Switch Role</p>}
          <div className={`flex flex-col gap-2 ${!isSidebarOpen && !isMobile ? 'items-center' : ''}`}>
            {[UserRole.CITIZEN, UserRole.GP_OPERATOR, UserRole.SUPER_ADMIN].map(role => (
              <button
                key={role}
                onClick={() => {
                  setCurrentRole(role);
                  if (isMobile) setIsSidebarOpen(false);
                }}
                className={`text-xs px-2 py-1 rounded border transition-colors ${
                  currentRole === role 
                    ? 'bg-gov-accent text-white border-gov-accent' 
                    : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-100'
                }`}
                title={role}
              >
                {(isSidebarOpen || isMobile) ? role.replace('_', ' ') : role.substring(0,1)}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden w-full">
        {/* Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-4 md:px-6 z-10 flex-shrink-0">
          <div className="flex items-center">
            <button 
              onClick={toggleSidebar} 
              className="p-2 rounded-full hover:bg-gray-100 text-gray-600 mr-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-bold text-gray-800 md:hidden">{isCitizen ? APP_NAME_MARATHI : 'प्रशासन पोर्टल'}</h2>
          </div>

          <div className="flex items-center space-x-3 md:space-x-6">
            {/* Notification Bell */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-600 relative focus:outline-none"
              >
                <Bell size={20} />
                <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              
              {/* Notification Dropdown */}
              {showNotifications && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)}></div>
                  <div className="absolute right-0 mt-2 w-72 md:w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100 flex justify-between items-center">
                      <h3 className="font-semibold text-gray-800">Notifications</h3>
                      <span className="text-xs text-gov-secondary cursor-pointer hover:underline">Mark all read</span>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {MOCK_NOTIFICATIONS.map(n => (
                        <div key={n.id} className="px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0 cursor-pointer">
                          <p className="text-sm font-medium text-gray-800">{n.title}</p>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2">{n.message}</p>
                          <p className="text-xs text-gray-400 mt-1 text-right">{n.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Profile */}
            <div className="flex items-center space-x-2 md:space-x-3 cursor-pointer border-l pl-3 md:pl-6 border-gray-200">
              <div className="w-8 h-8 rounded-full bg-gov-accent text-white flex items-center justify-center font-bold text-sm">
                {currentRole === UserRole.CITIZEN ? 'C' : 'A'}
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-semibold text-gray-800">
                  {currentRole === UserRole.CITIZEN ? 'राजेश कुमार' : 'प्रशासक'}
                </p>
                <p className="text-xs text-gray-500 capitalize">{currentRole.replace('_', ' ').toLowerCase()}</p>
              </div>
              <ChevronDown size={16} className="text-gray-400 hidden md:block" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gov-bg p-4 md:p-6 scroll-smooth">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;