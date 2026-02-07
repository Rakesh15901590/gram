import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Jan', requests: 400, completed: 240 },
  { name: 'Feb', requests: 300, completed: 139 },
  { name: 'Mar', requests: 200, completed: 980 },
  { name: 'Apr', requests: 278, completed: 390 },
  { name: 'May', requests: 189, completed: 480 },
  { name: 'Jun', requests: 239, completed: 380 },
];

const pieData = [
  { name: 'Finance', value: 400 },
  { name: 'Legal', value: 300 },
  { name: 'Infra', value: 300 },
  { name: 'Citizen', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminAnalytics: React.FC = () => {
  return (
    <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">अहवाल आणि विश्लेषण (Analytics & Reports)</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue / Tasks Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">मासिक अर्ज स्थिती (Monthly Requests)</h3>
                <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="requests" fill="#ea580c" radius={[4, 4, 0, 0]} name="Received" />
                            <Bar dataKey="completed" fill="#15803d" radius={[4, 4, 0, 0]} name="Completed" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Service Category Pie */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">विभागवार सेवा (Category Distribution)</h3>
                <div className="h-72 w-full flex justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-4 mt-2">
                    {pieData.map((entry, index) => (
                        <div key={index} className="flex items-center text-xs text-gray-600">
                            <div className="w-2 h-2 rounded-full mr-1" style={{backgroundColor: COLORS[index % COLORS.length]}}></div>
                            {entry.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Audit Log Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-800">ऑडिट लॉग (System Audit Logs)</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP Address</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {[1,2,3].map((row) => (
                            <tr key={row}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-10-25 10:3{row} AM</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Operator_Taluka</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Approved Document #{200+row}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">192.168.1.{row}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};

export default AdminAnalytics;