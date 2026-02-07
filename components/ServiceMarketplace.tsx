import React, { useState } from 'react';
import { MOCK_SERVICES } from '../constants';
import { Service } from '../types';
import { Search, Filter, Clock, ArrowRight, IndianRupee, FileText, CheckCircle2, Building2, ChevronLeft } from 'lucide-react';

const ServiceMarketplace: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Scroll to top when selecting a service
  const handleSelectService = (service: Service) => {
    setSelectedService(service);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-6">
      {!selectedService ? (
        <>
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">सेवा केंद्र (Service Marketplace)</h2>
              <p className="text-sm text-gray-500">शासकीय आणि खाजगी सेवा एकाच छताखाली.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:flex-none">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="सेवा शोधा (Search)..." 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gov-primary focus:border-transparent outline-none w-full md:w-64 transition-all"
                />
              </div>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-600 flex-shrink-0">
                <Filter size={20} />
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded uppercase tracking-wide">
                      {service.category}
                    </span>
                    <span className="flex items-center text-gray-500 text-sm whitespace-nowrap ml-2">
                      <Clock size={14} className="mr-1" /> {service.deliveryDays} Days
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{service.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                     <div>
                        <p className="text-xs text-gray-400">शासकीय शुल्क</p>
                        <p className="text-lg font-bold text-gov-primary flex items-center">
                            {service.isFree ? <span className="text-green-600">मोफत</span> : <><IndianRupee size={16} /> {service.price}</>}
                        </p>
                     </div>
                     <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded truncate max-w-[120px]">
                       {service.level}
                     </span>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 border-t border-gray-100 rounded-b-xl">
                  <button 
                    onClick={() => handleSelectService(service)}
                    className="w-full py-2 bg-white border border-gov-secondary text-gov-secondary hover:bg-gov-secondary hover:text-white rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    तपशील पहा (View Details) <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Detailed View */
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 animate-fade-in">
           <div className="bg-gov-primary p-4 md:p-6 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
             <div className="flex-1">
               <button 
                 onClick={() => setSelectedService(null)}
                 className="mb-3 text-green-100 hover:text-white flex items-center text-sm font-medium transition-colors"
               >
                 <ChevronLeft size={16} className="mr-1" /> मागे जा (Back)
               </button>
               <h1 className="text-2xl md:text-3xl font-bold leading-tight">{selectedService.title}</h1>
               <div className="mt-3 flex flex-wrap items-center gap-3">
                 <span className="bg-white/20 px-2 py-1 rounded text-xs flex items-center">
                   <Building2 size={12} className="mr-1"/> {selectedService.level}
                 </span>
                 <p className="opacity-90 text-sm hidden md:block border-l border-white/30 pl-3">{selectedService.description}</p>
               </div>
               <p className="opacity-90 text-sm md:hidden mt-2">{selectedService.description}</p>
             </div>
             <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm text-center min-w-[100px] md:min-w-[120px] self-end md:self-center">
                <p className="text-xs md:text-sm text-green-100">एकूण शुल्क</p>
                <p className="text-xl md:text-2xl font-bold">
                  {selectedService.isFree ? "Free" : `₹ ${selectedService.price}`}
                </p>
             </div>
           </div>

           <div className="p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
             <div className="lg:col-span-2 space-y-8">
                <section>
                    <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2 flex items-center">
                      <span className="w-1 h-6 bg-gov-primary rounded mr-2"></span>
                      प्रक्रिया (Workflow)
                    </h3>
                    <div className="space-y-0">
                        {selectedService.workflowSteps.map((step, index) => (
                           <div key={index} className="flex group">
                              <div className="flex flex-col items-center mr-4">
                                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center font-bold text-sm shadow-sm z-10">
                                    {index + 1}
                                  </div>
                                  {index !== selectedService.workflowSteps.length - 1 && (
                                    <div className="h-full w-0.5 bg-gray-200 my-1 group-hover:bg-blue-200 transition-colors"></div>
                                  )}
                              </div>
                              <div className="pb-6 pt-1">
                                  <p className="font-semibold text-gray-800 text-sm md:text-base">{step}</p>
                              </div>
                           </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2 flex items-center">
                        <span className="w-1 h-6 bg-gov-primary rounded mr-2"></span>
                        आवश्यक कागदपत्रे (Required Documents)
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedService.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100">
                                <FileText size={16} className="mr-2 text-gov-secondary flex-shrink-0" />
                                <span>{req}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2 flex items-center">
                     <span className="w-1 h-6 bg-gov-primary rounded mr-2"></span>
                     सेवा आउटपुट (Deliverables)
                  </h3>
                  <div className="flex items-start p-4 bg-green-50 border border-green-100 rounded-lg">
                    <CheckCircle2 className="text-green-600 mr-3 mt-0.5" size={24} />
                    <div>
                      <p className="font-semibold text-green-900">{selectedService.serviceOutput}</p>
                      <p className="text-xs text-green-700 mt-1">Digital signed document available for download.</p>
                    </div>
                  </div>
                </section>
             </div>

             <div className="lg:col-span-1">
                <div className="bg-orange-50 p-5 md:p-6 rounded-xl border border-orange-100 lg:sticky lg:top-6">
                    <h3 className="font-bold text-gray-800 mb-4 border-b border-orange-200 pb-2">सेवा तपशील (Details)</h3>
                    <div className="space-y-4 mb-6">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">कालावधी (Duration):</span>
                            <span className="font-bold text-gray-800">{selectedService.deliveryDays} दिवस</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">श्रेणी (Category):</span>
                            <span className="font-bold text-gray-800">{selectedService.category}</span>
                        </div>
                         <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Service ID:</span>
                            <span className="font-mono bg-white px-1 rounded text-gray-500 text-xs">#{selectedService.id}</span>
                        </div>
                    </div>
                    <button className="w-full py-3 bg-gov-secondary text-white rounded-lg font-bold shadow-md hover:bg-orange-700 transition-all transform active:scale-95 flex justify-center items-center">
                        सेवा घ्या (Apply Now) <ArrowRight size={18} className="ml-2" />
                    </button>
                    <p className="text-[10px] text-center text-gray-500 mt-4 flex items-center justify-center">
                       <LockIcon size={10} className="mr-1"/> Secure Payment Gateway Protected.
                    </p>
                </div>
             </div>
           </div>
        </div>
      )}
    </div>
  );
};

const LockIcon = ({size, className}: {size: number, className?: string}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
)

export default ServiceMarketplace;