import React, { useState } from 'react';
import { SUBSCRIPTION_PLANS } from '../constants';
import { Check, Loader2 } from 'lucide-react';

const SubscriptionPlans: React.FC = () => {
    const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

    const handleChoosePlan = (planId: string, planName: string) => {
        setLoadingPlan(planId);
        // Simulate API call / Payment Gateway initialization
        setTimeout(() => {
            alert(`तुम्ही '${planName}' निवडले आहे. आमचे प्रतिनिधी लवकरच आपल्याशी संपर्क साधतील.\n\nYou selected: ${planName}`);
            setLoadingPlan(null);
        }, 1500);
    };

    return (
        <div className="space-y-8 pb-10 animate-fade-in">
            <div className="text-center mb-8 px-4">
                <h2 className="text-2xl font-bold text-gray-800">Upgrade Your Office (Premium Plans)</h2>
                <p className="text-gray-500 text-sm mt-2">Unlock auto-generators, deadline savers, and audit vaults.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {SUBSCRIPTION_PLANS.map((plan) => (
                    <div key={plan.id} className={`rounded-xl p-6 relative flex flex-col transition-all duration-300 ${plan.recommended ? 'bg-indigo-900 text-white shadow-xl md:scale-105 z-10' : 'bg-white border border-gray-200 text-gray-800 hover:shadow-lg'}`}>
                        {plan.recommended && (
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-3 bg-yellow-400 text-indigo-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                Best Value
                            </div>
                        )}
                        <h3 className={`text-lg font-bold ${plan.recommended ? 'text-white' : 'text-gray-800'}`}>{plan.name}</h3>
                        <div className="mt-4 mb-6">
                            <span className="text-3xl font-bold">₹{plan.price}</span>
                            <span className={`text-sm ${plan.recommended ? 'text-indigo-200' : 'text-gray-500'}`}>{plan.period}</span>
                        </div>
                        <ul className="space-y-3 mb-8 flex-1">
                            {plan.features.map((feat, idx) => (
                                <li key={idx} className="flex items-start text-sm">
                                    <Check size={16} className={`mr-2 mt-0.5 flex-shrink-0 ${plan.recommended ? 'text-yellow-400' : 'text-green-500'}`} />
                                    <span className={plan.recommended ? 'text-indigo-100' : 'text-gray-600'}>{feat}</span>
                                </li>
                            ))}
                        </ul>
                        <button 
                            onClick={() => handleChoosePlan(plan.id, plan.name)}
                            disabled={loadingPlan === plan.id}
                            className={`w-full py-3 rounded-lg font-bold transition-all shadow-md active:scale-95 flex justify-center items-center ${
                                plan.recommended 
                                ? 'bg-yellow-400 text-indigo-900 hover:bg-yellow-300 disabled:bg-yellow-500' 
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:bg-gray-200'
                            }`}
                        >
                            {loadingPlan === plan.id ? (
                                <Loader2 size={20} className="animate-spin" />
                            ) : (
                                'Choose Plan'
                            )}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubscriptionPlans;