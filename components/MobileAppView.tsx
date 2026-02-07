import React from 'react';
import { Wifi, Battery, Signal, Bell, Home, Grid, User, Menu, ArrowRight } from 'lucide-react';

// This component simulates how the app looks on a mobile device
// It's a UI wrapper to meet the requirement of "Android Mobile App"

const MobileAppView: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-8 bg-gray-100 min-h-[800px]">
        <div className="w-[360px] h-[740px] bg-black rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800 relative">
            {/* Phone Notch/Status Bar */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-xl z-20"></div>
            
            {/* Screen Content */}
            <div className="w-full h-full bg-gray-50 rounded-[2.5rem] overflow-hidden flex flex-col relative">
                
                {/* Status Bar Mock */}
                <div className="h-8 bg-gov-primary flex justify-between items-center px-6 text-white text-[10px] pt-2">
                    <span>10:30</span>
                    <div className="flex space-x-1">
                        <Wifi size={12} />
                        <Signal size={12} />
                        <Battery size={12} />
                    </div>
                </div>

                {/* App Header */}
                <div className="bg-gov-primary px-4 py-4 pb-8 rounded-b-[2rem] shadow-md text-white">
                    <div className="flex justify-between items-center mb-4">
                        <Menu size={24} />
                        <Bell size={24} />
                    </div>
                    <h2 className="text-xl font-bold">नमस्ते, राजेश!</h2>
                    <p className="text-green-100 text-sm">GramSeva Mobile App</p>
                </div>

                {/* Quick Actions Grid */}
                <div className="px-4 -mt-6">
                    <div className="bg-white rounded-xl shadow-lg p-4 grid grid-cols-3 gap-4 text-center">
                         <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                <Grid size={20} />
                            </div>
                            <span className="text-[10px] font-medium text-gray-600">सेवा</span>
                         </div>
                         <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <FileText size={20} />
                            </div>
                            <span className="text-[10px] font-medium text-gray-600">दाखले</span>
                         </div>
                         <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <User size={20} />
                            </div>
                            <span className="text-[10px] font-medium text-gray-600">प्रोफाइल</span>
                         </div>
                    </div>
                </div>

                {/* Recent Tasks List */}
                <div className="px-4 mt-6 flex-1 overflow-y-auto no-scrollbar">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-gray-800">माझे अर्ज (My Tasks)</h3>
                        <span className="text-xs text-orange-600 font-bold">See All</span>
                    </div>
                    
                    <div className="space-y-3">
                        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center">
                            <div className="w-10 h-10 rounded bg-green-50 flex items-center justify-center text-green-600 mr-3">
                                <span className="font-bold text-xs">80%</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text-sm text-gray-800">जन्म दाखला</h4>
                                <p className="text-[10px] text-gray-500">ID: #4023 • In Progress</p>
                            </div>
                            <ArrowRight size={16} className="text-gray-300" />
                        </div>
                         <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center">
                            <div className="w-10 h-10 rounded bg-orange-50 flex items-center justify-center text-orange-600 mr-3">
                                <span className="font-bold text-xs">New</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text-sm text-gray-800">7/12 उतारा</h4>
                                <p className="text-[10px] text-gray-500">ID: #4025 • Pending Payment</p>
                            </div>
                            <ArrowRight size={16} className="text-gray-300" />
                        </div>
                    </div>

                    {/* Banner */}
                    <div className="mt-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-4 text-white">
                        <h4 className="font-bold text-sm">नवीन योजना!</h4>
                        <p className="text-xs text-blue-100 mt-1">पंतप्रधान आवास योजनेसाठी अर्ज करा.</p>
                        <button className="mt-2 bg-white text-blue-800 text-xs font-bold px-3 py-1 rounded-full">आता तपासा</button>
                    </div>
                </div>

                {/* Bottom Nav */}
                <div className="bg-white border-t border-gray-200 h-16 flex justify-around items-center px-2">
                    <button className="flex flex-col items-center text-gov-primary">
                        <Home size={20} fill="currentColor" className="opacity-20" />
                        <span className="text-[10px] font-bold mt-1">Home</span>
                    </button>
                    <button className="flex flex-col items-center text-gray-400">
                        <Grid size={20} />
                        <span className="text-[10px] mt-1">Services</span>
                    </button>
                    <div className="w-12 h-12 bg-gov-secondary rounded-full -mt-6 flex items-center justify-center shadow-lg border-4 border-gray-50 text-white">
                        <span className="text-xl">+</span>
                    </div>
                    <button className="flex flex-col items-center text-gray-400">
                        <Bell size={20} />
                        <span className="text-[10px] mt-1">Alerts</span>
                    </button>
                    <button className="flex flex-col items-center text-gray-400">
                        <User size={20} />
                        <span className="text-[10px] mt-1">Profile</span>
                    </button>
                </div>
            </div>
        </div>
        <div className="ml-8 text-left hidden lg:block max-w-xs">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Android Mobile App</h3>
            <p className="text-gray-600 mb-4">
                The GramSeva mobile app is optimized for rural connectivity, featuring:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                <li>Offline Mode Support</li>
                <li>Biometric Login</li>
                <li>One-click document scan & upload</li>
                <li>Push Notifications for status updates</li>
                <li>Available in Marathi & English</li>
            </ul>
        </div>
    </div>
  );
};

export default MobileAppView;

// Helper component for icon used in bottom nav
function FileText({ size }: { size: number }) {
    return (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <line x1="10" y1="9" x2="8" y2="9"/>
        </svg>
    );
}