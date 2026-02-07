import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import ServiceMarketplace from './components/ServiceMarketplace';
import AdminAnalytics from './components/AdminAnalytics';
import MobileAppView from './components/MobileAppView';
import SmartTools from './components/SmartTools';
import SubscriptionPlans from './components/SubscriptionPlans';
import { UserRole } from './types';
import { Smartphone, Monitor } from 'lucide-react';

const App: React.FC = () => {
  // Global State for "Demo" purposes
  const [currentRole, setCurrentRole] = useState<UserRole>(UserRole.CITIZEN);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [viewMode, setViewMode] = useState<'WEB' | 'MOBILE'>('WEB');

  // Router Logic
  const renderContent = () => {
    if (viewMode === 'MOBILE') {
        return <MobileAppView />;
    }

    switch (activeTab) {
      case 'dashboard':
        // SEPARATION: Render AdminDashboard for officials, Dashboard for citizens
        if (currentRole === UserRole.CITIZEN) {
            return <Dashboard />;
        } else {
            return <AdminDashboard />;
        }
      case 'marketplace':
        return <ServiceMarketplace />;
      case 'tools':
         // Tools only available for official roles
         if (currentRole === UserRole.CITIZEN) return <div className="p-4 text-orange-600">Please switch to Operator Role to access Tools.</div>;
         return <SmartTools onViewPlans={() => setActiveTab('subscription_plans')} />;
      case 'subscription_plans':
         return <SubscriptionPlans />;
      case 'reports':
        // Only show if role has access (basic check)
        if (currentRole === UserRole.CITIZEN) return <div className="p-4 text-red-500">Access Denied</div>;
        return <AdminAnalytics />;
      case 'mytasks':
         return (
             <div className="bg-white p-6 rounded-xl shadow-sm">
                 <h2 className="text-2xl font-bold mb-4">माझे अर्ज (My Tasks)</h2>
                 <p className="text-gray-500">Client-specific task list would appear here. See Dashboard for summary.</p>
             </div>
         );
      case 'settings':
         return (
             <div className="bg-white p-6 rounded-xl shadow-sm">
                 <h2 className="text-2xl font-bold mb-4">सेटिंग्ज (Settings)</h2>
                 <div className="space-y-4 max-w-md">
                     <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                         <span>Language / भाषा</span>
                         <span className="font-bold text-gov-primary">मराठी</span>
                     </div>
                     <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                         <span>Notifications</span>
                         <span className="text-green-600 font-bold">ON</span>
                     </div>
                 </div>
             </div>
         );
      default:
        return <div className="p-10 text-center text-gray-500">Module under construction for demo.</div>;
    }
  };

  return (
    <div className="relative">
        {/* Development Toolbar (To switch between Web/Mobile views for the assignment) */}
        <div className="fixed bottom-4 right-4 z-50 flex bg-gray-800 text-white rounded-full p-1 shadow-2xl border border-gray-600">
            <button 
                onClick={() => setViewMode('WEB')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${viewMode === 'WEB' ? 'bg-gov-primary font-bold' : 'hover:bg-gray-700'}`}
            >
                <Monitor size={16} />
                <span>Web Portal</span>
            </button>
            <button 
                onClick={() => setViewMode('MOBILE')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${viewMode === 'MOBILE' ? 'bg-gov-secondary font-bold' : 'hover:bg-gray-700'}`}
            >
                <Smartphone size={16} />
                <span>Mobile App</span>
            </button>
        </div>

        {viewMode === 'WEB' ? (
             <Layout 
                currentRole={currentRole} 
                setCurrentRole={setCurrentRole}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
             >
               {renderContent()}
             </Layout>
        ) : (
            <div className="min-h-screen bg-gray-200 p-4">
                 <div className="text-center mb-4">
                    <h1 className="text-3xl font-bold text-gray-800">GramSeva Android App</h1>
                    <p className="text-gray-600">Interactive Simulation</p>
                 </div>
                 <MobileAppView />
            </div>
        )}
    </div>
  );
};

export default App;