import React, { useState } from 'react';
import { MOCK_TOOLS } from '../constants';
import { Lock, FileCheck, ArrowRight, Calendar, ChevronDown } from 'lucide-react';

interface SmartToolsProps {
  onViewPlans: () => void;
}

const SmartTools: React.FC<SmartToolsProps> = ({ onViewPlans }) => {
    const [activeTool, setActiveTool] = useState<string | null>(null);

    const scrollToTool = () => {
         const element = document.getElementById('active-tool-container');
         if(element) element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">डिजिटल साधने (Smart Toolkit)</h2>
                    <p className="text-sm text-gray-500">Auto-generate official documents, resolutions, and reports.</p>
                </div>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {MOCK_TOOLS.map((tool) => (
                    <div 
                        key={tool.id} 
                        className={`bg-white rounded-xl shadow-sm border p-6 cursor-pointer hover:shadow-md transition-all relative overflow-hidden group ${tool.isPremium ? 'border-indigo-100' : 'border-gray-200'} active:scale-95`}
                        onClick={() => { setActiveTool(tool.id); setTimeout(scrollToTool, 100); }}
                    >
                        {tool.isPremium && (
                            <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                                PRO
                            </div>
                        )}
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${tool.isPremium ? 'bg-indigo-50 text-indigo-600' : 'bg-gray-100 text-gray-600'}`}>
                            <tool.icon size={24} />
                        </div>
                        <h3 className="font-bold text-gray-800 mb-2">{tool.title}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">{tool.description}</p>
                        
                        {tool.isPremium ? (
                            <div className="mt-4 flex items-center text-xs text-indigo-600 font-bold opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                                <Lock size={12} className="mr-1" /> Unlock Feature
                            </div>
                        ) : (
                             <div className="mt-4 flex items-center text-xs text-green-600 font-bold opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowRight size={12} className="mr-1" /> Open Tool
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Tool Simulation (When clicked) */}
            {activeTool && (
                <div id="active-tool-container" className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 md:p-6 animate-fade-in scroll-mt-20">
                    <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                         <h3 className="text-lg font-bold text-gray-800 flex items-center">
                             <FileCheck size={20} className="mr-2 text-gov-primary"/> 
                             <span className="truncate">{MOCK_TOOLS.find(t => t.id === activeTool)?.title}</span>
                         </h3>
                         <button onClick={() => setActiveTool(null)} className="text-sm text-gray-500 hover:text-red-500 px-3 py-1 rounded hover:bg-red-50 transition-colors">Close</button>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                         {/* Input Form Mock */}
                         <div className="space-y-4">
                             <div>
                                 <label className="block text-sm font-medium text-gray-700 mb-1">Date / दिनांक</label>
                                 <div className="relative">
                                     <input type="date" className="w-full border border-gray-300 rounded-lg p-2.5 pl-10 focus:ring-2 focus:ring-gov-primary outline-none text-sm" />
                                     <Calendar className="absolute left-3 top-2.5 text-gray-400" size={16}/>
                                 </div>
                             </div>
                             <div>
                                 <label className="block text-sm font-medium text-gray-700 mb-1">Meeting Type / सभेचा प्रकार</label>
                                 <div className="relative">
                                    <select className="w-full border border-gray-300 rounded-lg p-2.5 appearance-none focus:ring-2 focus:ring-gov-primary outline-none bg-white text-sm">
                                        <option>मासिक सभा (Monthly)</option>
                                        <option>ग्रामसभा (Gramsabha)</option>
                                        <option>विशेष सभा (Special)</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={16}/>
                                 </div>
                             </div>
                             <div>
                                 <label className="block text-sm font-medium text-gray-700 mb-1">Subject / विषय</label>
                                 <textarea className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:ring-2 focus:ring-gov-primary outline-none text-sm" placeholder="उदा. 15 वा वित्त आयोग कामे मंजूर करणेबाबत..."></textarea>
                             </div>
                             <button className="w-full bg-gov-primary text-white font-bold py-3 rounded-lg hover:bg-green-800 transition-colors shadow-md active:scale-95">
                                 Generate PDF (मराठी)
                             </button>
                         </div>

                         {/* Preview */}
                         <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center border-2 border-dashed border-gray-300 min-h-[300px]">
                              <div className="text-center">
                                  <FileCheck size={48} className="mx-auto text-gray-400 mb-4"/>
                                  <p className="text-gray-500 font-medium">Document Preview</p>
                                  <p className="text-xs text-gray-400 mt-2">Fill the details to see the magic.</p>
                              </div>
                         </div>
                    </div>
                </div>
            )}

            {/* Link to Subscription Plans */}
            <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="text-center mb-8">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">Unlock Premium Features</h2>
                    <p className="text-gray-500 mb-6 text-sm md:text-base">Get access to all pro tools and unlimited document generation.</p>
                    <button 
                        onClick={onViewPlans}
                        className="px-6 md:px-8 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors shadow-lg active:scale-95"
                    >
                        View Subscription Plans
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SmartTools;