import React from 'react';
import { Clock, IndianRupee, FileCheck, Zap, Calendar, ArrowUpRight } from 'lucide-react';
import StatCard from './StatCard';

const ComplianceScoreCard = () => (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl shadow-md p-5 md:p-6 text-white flex flex-col md:flex-row justify-between items-center relative overflow-hidden h-full min-h-[160px]">
        <div className="z-10 w-full md:w-auto">
            <h3 className="text-lg font-bold flex items-center gap-2"><FileCheck size={20}/> <span className="truncate">Compliance Score</span></h3>
            <p className="text-blue-100 text-xs mt-1">Based on task completion and audit readiness</p>
            <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl md:text-5xl font-bold">85</span>
                <span className="text-lg opacity-80 mb-1">/ 100</span>
                <span className="bg-green-500 text-xs px-2 py-1 rounded-full font-bold ml-2 whitespace-nowrap">Good (Green)</span>
            </div>
        </div>
        
        {/* Visual Gauge Mock */}
        <div className="w-24 h-24 rounded-full border-8 border-white/20 border-t-green-400 flex items-center justify-center rotate-[-45deg] mt-4 md:mt-0 flex-shrink-0">
             <Zap size={32} className="rotate-[45deg] text-yellow-400" />
        </div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
    </div>
)

const DailyToolkit = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50 rounded-t-xl">
             <h3 className="font-bold text-gray-800 flex items-center gap-2"><Calendar size={18}/> <span className="hidden md:inline">Daily Office Toolkit</span><span className="md:hidden">Toolkit</span></h3>
             <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded border border-blue-100">Today</span>
        </div>
        <div className="p-4 space-y-4 flex-1">
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 p-3 bg-orange-50 rounded-lg border border-orange-100">
                    <p className="text-xs text-orange-600 font-bold mb-1">आजची डेडलाईन</p>
                    <p className="text-sm font-semibold text-gray-800">ग्रामसभा नोटीस प्रसिद्ध करणे</p>
                </div>
                <div className="flex-1 p-3 bg-green-50 rounded-lg border border-green-100">
                     <p className="text-xs text-green-600 font-bold mb-1">नवीन GR (Update)</p>
                     <p className="text-sm font-semibold text-gray-800 line-clamp-2">लाडकी बहीण योजना सुधारित नियमावली...</p>
                </div>
            </div>
            
            <div className="space-y-2">
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Quick Actions</p>
                 <button className="w-full text-left flex items-center justify-between p-2 hover:bg-gray-50 rounded text-sm text-gray-700 transition-colors border border-transparent hover:border-gray-200">
                     <span>📝 Create Tax Receipt</span>
                     <ArrowUpRight size={14} className="text-gray-400"/>
                 </button>
                 <button className="w-full text-left flex items-center justify-between p-2 hover:bg-gray-50 rounded text-sm text-gray-700 transition-colors border border-transparent hover:border-gray-200">
                     <span>📂 Upload Audit File</span>
                     <ArrowUpRight size={14} className="text-gray-400"/>
                 </button>
            </div>
        </div>
    </div>
)

const SmartSuggestions = () => (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-sm border border-indigo-100 p-4 h-full">
        <h3 className="font-bold text-indigo-900 flex items-center gap-2 mb-3"><Zap size={18} className="text-indigo-600"/> Smart Suggestions (AI)</h3>
        <ul className="space-y-3">
             <li className="flex gap-2 items-start text-sm">
                 <span className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0"></span>
                 <span className="text-gray-700 leading-snug">Audit season is approaching. <span className="font-bold text-indigo-700 cursor-pointer hover:underline">Pre-book CA audit service</span> to avoid rush.</span>
             </li>
             <li className="flex gap-2 items-start text-sm">
                 <span className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0"></span>
                 <span className="text-gray-700 leading-snug">You have 12 pending birth certificates. Use <span className="font-bold text-indigo-700 cursor-pointer hover:underline">Bulk Generate Tool</span>.</span>
             </li>
        </ul>
    </div>
)

const AdminDashboard: React.FC = () => {
  const totalRev = 145000;

  return (
    <div className="space-y-6 animate-fade-in">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">प्रशासकीय डॅशबोर्ड</h2>
            <span className="text-sm text-gray-500 font-normal block md:inline md:ml-2">Gram Panchayat Office Portal</span>
        </div>
        <div className="flex space-x-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">Export Report</button>
            <button className="flex-1 md:flex-none px-4 py-2 bg-gov-primary text-white rounded-lg text-sm font-medium shadow-sm hover:bg-green-800">+ New Task</button>
        </div>
      </div>

      {/* Grid Layout Fixes */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
         <div className="xl:col-span-1 space-y-6">
            <ComplianceScoreCard />
            <SmartSuggestions />
         </div>
         <div className="xl:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                <div className="h-full">
                    <DailyToolkit />
                </div>
                <div className="flex flex-col gap-6">
                    <StatCard 
                      title="एकूण महसूल (Revenue)" 
                      value={`₹ ${totalRev.toLocaleString()}`} 
                      subtext="+12% from last month"
                      icon={IndianRupee} 
                      colorClass="bg-emerald-600 text-emerald-600" 
                      borderClass="border-emerald-500"
                    />
                     <StatCard 
                      title="प्रलंबित अर्ज (Pending)" 
                      value="42" 
                      subtext="High priority: 5"
                      icon={Clock} 
                      colorClass="bg-orange-600 text-orange-600" 
                      borderClass="border-orange-500"
                    />
                </div>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
             <h3 className="font-semibold text-gray-800 mb-4">अलीकडील कामे (Work Log)</h3>
             <div className="space-y-4">
                {[1,2,3,4].map((i) => (
                    <div key={i} className="flex items-start pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold mr-3 mt-1 flex-shrink-0">U</div>
                        <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-gray-800 truncate">New Application: Birth Certificate</p>
                            <p className="text-xs text-gray-500 truncate">From: Ramesh Patil • Taluka: Haveli</p>
                        </div>
                        <span className="ml-auto text-xs text-gray-400 whitespace-nowrap pl-2">2h ago</span>
                    </div>
                ))}
             </div>
          </div>

          {/* Verification Queue */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
             <h3 className="font-semibold text-gray-800 mb-4">कादगपत्रे पडताळणी (Doc Verification)</h3>
             <div className="space-y-3">
                 <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg flex justify-between items-center">
                    <div className="min-w-0 pr-2">
                        <p className="text-sm font-bold text-blue-800 truncate">GPDP Plan Approval</p>
                        <p className="text-xs text-blue-600 truncate">Pending CEO Signature</p>
                    </div>
                    <button className="px-3 py-1 bg-white text-blue-700 text-xs font-bold rounded shadow-sm border border-blue-200 hover:bg-blue-50 whitespace-nowrap">Review</button>
                 </div>
                 <div className="p-3 bg-orange-50 border border-orange-100 rounded-lg flex justify-between items-center">
                    <div className="min-w-0 pr-2">
                        <p className="text-sm font-bold text-orange-800 truncate">15th FC Audit Report</p>
                        <p className="text-xs text-orange-600 truncate">Correction Needed</p>
                    </div>
                    <button className="px-3 py-1 bg-white text-orange-700 text-xs font-bold rounded shadow-sm border border-orange-200 hover:bg-orange-50 whitespace-nowrap">View</button>
                 </div>
             </div>
          </div>
      </div>
    </div>
  );
};

export default AdminDashboard;