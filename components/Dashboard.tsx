import React from 'react';
import { Clock, CheckCircle, IndianRupee, FileText } from 'lucide-react';
import { MOCK_TASKS } from '../constants';
import StatCard from './StatCard';

const Dashboard: React.FC = () => {
  // Citizen Stats
  const myTasks = MOCK_TASKS;
  const pending = myTasks.filter(t => t.status === 'REQUESTED' || t.status === 'IN_PROGRESS').length;
  const completed = myTasks.filter(t => t.status === 'COMPLETED').length;
  
  return (
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-end gap-2 border-b border-gray-200 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">नमस्ते, राजेश!</h2>
              <p className="text-gray-500 text-sm mt-1">तुमचे ग्रामसेवा पोर्टलवर स्वागत आहे.</p>
            </div>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold ml-auto self-start md:self-center">Citizen Account</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <StatCard 
            title="प्रलंबित कामे (Pending)" 
            value={pending} 
            icon={Clock} 
            colorClass="bg-orange-600 text-orange-600" 
            borderClass="border-orange-500"
          />
          <StatCard 
            title="पूर्ण झालेली कामे" 
            value={completed} 
            icon={CheckCircle} 
            colorClass="bg-green-600 text-green-600" 
            borderClass="border-green-500"
          />
          <StatCard 
            title="एकूण खर्च (Total Spend)" 
            value="₹ 2,400" 
            icon={IndianRupee} 
            colorClass="bg-blue-600 text-blue-600" 
            borderClass="border-blue-500"
          />
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
            <h3 className="font-semibold text-gray-800">अलीकडील अर्ज (Recent Applications)</h3>
            <button className="text-sm text-gov-secondary font-medium hover:underline">सर्व पहा</button>
          </div>
          <div className="divide-y divide-gray-100">
            {MOCK_TASKS.length > 0 ? MOCK_TASKS.map((task) => (
              <div key={task.id} className="p-4 px-6 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-gray-50 gap-4">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${task.status === 'COMPLETED' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                    <FileText size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{task.serviceTitle}</p>
                    <p className="text-xs text-gray-500">ID: {task.id} • {task.dateRequested}</p>
                  </div>
                </div>
                <div className="flex items-center w-full sm:w-auto mt-2 sm:mt-0">
                  <div className="w-full sm:w-24 bg-gray-200 rounded-full h-2 mr-3">
                    <div className={`h-2 rounded-full ${task.status === 'COMPLETED' ? 'bg-green-500' : 'bg-orange-500'}`} style={{ width: `${task.progress}%` }}></div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap ${
                    task.status === 'COMPLETED' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {task.status === 'COMPLETED' ? 'पूर्ण' : 'प्रगतीपथावर'}
                  </span>
                </div>
              </div>
            )) : (
              <div className="p-8 text-center text-gray-500 text-sm">
                कोणतेही अर्ज आढळले नाहीत. नवीन सेवा शोधा.
              </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default Dashboard;