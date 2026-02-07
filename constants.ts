
import { Service, Task, Notification, UserRole, SmartTool, SubscriptionPlan } from './types';
import { FileText, Users, BarChart3, CheckCircle, AlertCircle, Clock, PenTool, FileCheck, Zap, BookOpen } from 'lucide-react';

// --- Smart Tools (Feature #2) ---
export const MOCK_TOOLS: SmartTool[] = [
  {
    id: 'TOOL-1',
    title: 'ऑटो ठराव जनरेटर (Resolution)',
    description: 'विषय निवडा आणि तयार ठराव मिळवा (PDF).',
    icon: FileCheck,
    isPremium: false
  },
  {
    id: 'TOOL-2',
    title: 'मासिक सभा इतिवृत्त (Minutes)',
    description: 'फक्त उपस्थिती आणि विषय टाका, इतिवृत्त तयार.',
    icon: BookOpen,
    isPremium: true
  },
  {
    id: 'TOOL-3',
    title: 'नोटीस बिल्डर (Notices)',
    description: 'कर वसुली, ग्रामसभा, आणि अतिक्रमण नोटीस.',
    icon: AlertCircle,
    isPremium: true
  },
  {
    id: 'TOOL-4',
    title: '15 वा वित्त आयोग कॅल्क्युलेटर',
    description: 'निधी वाटप आणि खर्च नियोजन साधन.',
    icon: Zap,
    isPremium: false
  }
];

// --- Subscription Plans (Feature #9) ---
export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'BASIC',
    name: 'Basic (मूलभूत)',
    price: 999,
    monthlyPrice: 99,
    yearlyPrice: 999,
    period: '/ year',
    features: ['सर्व शासकीय GR अपडेट्स', 'मर्यादित फॉरमॅट जनरेटर', 'ई-मेल सपोर्ट'],
    recommended: false
  },
  {
    id: 'PRO',
    name: 'Pro (व्यावसायिक)',
    price: 2499,
    monthlyPrice: 249,
    yearlyPrice: 2499,
    period: '/ year',
    features: ['Unlimited फॉरमॅट जनरेटर', 'Deadline Alerts (SMS)', 'Priority Support', 'Audit Ready Files'],
    recommended: true
  },
  {
    id: 'GP_PLUS',
    name: 'GP Plus (संपूर्ण)',
    price: 4999,
    monthlyPrice: 499,
    yearlyPrice: 4999,
    period: '/ year',
    features: ['Dedicated Account Manager', 'Legal Consultation', 'सर्व सेवांवर 10% सूट', 'Cloud Document Vault'],
    recommended: false
  }
];

export const MOCK_SERVICES: Service[] = [
  // --- New Service: RTI Section 4 Compliance (Based on Government Circular) ---
  {
    id: 'ADM-004',
    title: 'RTI कलम 4 - 17 बाबींचे प्रकटीकरण (Proactive Disclosure)',
    description: 'माहितीचा अधिकार अधिनियम 2005 नुसार, प्रत्येक ग्रामपंचायतीने दरवर्षी प्रसिद्ध करावयाची कलम 4(1)(b) अंतर्गत 17 बाबींची माहिती विहित नमुन्यात तयार करून दिली जाईल. (GR संदर्भ: सामान्य प्रशासन विभाग). हे मसुदा नोटीस बोर्डावर लावणे बंधनकारक आहे.',
    price: 800,
    isFree: false,
    deliveryDays: 4,
    category: 'Administration',
    requirements: ['कर्मचारी व पदाधिकारी माहिती', 'मागील वर्षाचे अंदाजपत्रक', 'विविध योजनांची लाभार्थी सांख्यिकी'],
    serviceOutput: '17 मॅन्युअल्सची संकलित PDF (Print Ready)',
    level: 'Gram Panchayat',
    workflowSteps: ['प्राथमिक माहिती संकलन', 'मॅन्युअल 1 ते 17 चे ड्राफ्टिंग', 'ग्रामसेवक पडताळणी (Review)', 'अंतिम PDF वितरण'],
  },
  
  // --- A) ग्रामपंचायत सेवा (Gram Panchayat Services) ---
  {
    id: 'GP-001',
    title: 'जन्म दाखला (Birth Certificate)',
    description: 'नवीन जन्म नोंदणी करणे आणि दाखला मिळवणे.',
    price: 50,
    isFree: false,
    deliveryDays: 3,
    category: 'Gram Panchayat',
    requirements: ['रुग्णालय डिस्चार्ज कार्ड', 'माता-पित्याचे आधार कार्ड', 'पत्ता पुरावा'],
    serviceOutput: 'डिजिटल स्वाक्षरीकृत जन्म दाखला',
    level: 'Gram Panchayat',
    workflowSteps: ['अर्ज दाखल करणे', 'ग्रामसेवक पडताळणी', 'दाखला जनरेट करणे', 'वितरण']
  },
  {
    id: 'GP-002',
    title: 'मृत्यू दाखला (Death Certificate)',
    description: 'मृत्यू नोंदणी आणि प्रमाणपत्र मिळवणे.',
    price: 50,
    isFree: false,
    deliveryDays: 3,
    category: 'Gram Panchayat',
    requirements: ['स्मशानभूमी पावती', 'डॉक्टरांचे प्रमाणपत्र', 'आधार कार्ड (मृत व्यक्तीचे)'],
    serviceOutput: 'मृत्यू दाखला',
    level: 'Gram Panchayat',
    workflowSteps: ['अर्ज नोंदणी', 'वैद्यकीय अहवाल तपासणी', 'नोंदवही अपडेट', 'प्रमाणपत्र जारी']
  },
  {
    id: 'GP-003',
    title: 'विवाह नोंदणी (Marriage Certificate)',
    description: 'विवाह नोंदणी प्रमाणपत्र मिळवण्यासाठी अर्ज.',
    price: 200,
    isFree: false,
    deliveryDays: 7,
    category: 'Gram Panchayat',
    requirements: ['वधू-वराचे आधार कार्ड', 'लग्न पत्रिका', 'तीन साक्षीदारांचे आधार कार्ड', 'फोटो'],
    serviceOutput: 'विवाह नोंदणी प्रमाणपत्र',
    level: 'Gram Panchayat',
    workflowSteps: ['ऑनलाइन अर्ज', 'कागदपत्र तपासणी', 'साक्षीदार स्वाक्षरी', 'प्रमाणपत्र जारी']
  },
  {
    id: 'GP-004',
    title: 'घरपट्टी / पाणीपट्टी पावती (Assessment Tax Receipt)',
    description: 'कर भरल्याची अधिकृत पावती मिळवणे.',
    price: 20,
    isFree: false,
    deliveryDays: 1,
    category: 'Gram Panchayat',
    requirements: ['मागील वर्षाची पावती', 'मालमत्ता क्रमांक'],
    serviceOutput: 'कर भरल्याची पावती (नमूना ८)',
    level: 'Gram Panchayat',
    workflowSteps: ['कर गणना', 'पैसे भरणे', 'पावती प्रिंट करणे']
  },
  {
    id: 'GP-005',
    title: 'नवीन नळ जोडणी (Water Connection)',
    description: 'नवीन घरगुती नळ जोडणीसाठी अर्ज.',
    price: 500,
    isFree: false,
    deliveryDays: 15,
    category: 'Gram Panchayat',
    requirements: ['जागा मालकी पुरावा', 'आधार कार्ड', 'घरपट्टी पावती'],
    serviceOutput: 'नळ जोडणी मंजुरी पत्र',
    level: 'Gram Panchayat',
    workflowSteps: ['अर्ज', 'स्थळ पाहणी', 'Gram Sabha ठराव', 'कनेक्शन जोडणी']
  },
  {
    id: 'GP-006',
    title: 'निराधार योजना दाखला',
    description: 'संजय गांधी निराधार योजनेसाठी उत्पन्नाचा दाखला.',
    price: 100,
    isFree: false,
    deliveryDays: 5,
    category: 'Gram Panchayat',
    requirements: ['रेशन कार्ड', 'आधार कार्ड', 'बँक पासबुक'],
    serviceOutput: 'शिफारस पत्र / दाखला',
    level: 'Gram Panchayat',
    workflowSteps: ['अर्ज', 'उत्पन्न पडताळणी', 'सरपंच स्वाक्षरी', 'वितरण']
  },

  // --- B) 15 वा वित्त आयोग सेवा (15th FC Services) ---
  {
    id: 'FC-001',
    title: '15 वा वित्त आयोग - GPDP आराखडा',
    description: '15 व्या वित्त आयोगा अंतर्गत विकास कामांचा आराखडा तयार करणे.',
    price: 2500,
    isFree: false,
    deliveryDays: 7,
    category: 'Finance',
    requirements: ['कामांची यादी', 'अंदाजपत्रक', 'ग्रामसभा ठराव'],
    serviceOutput: 'मंजूर GPDP आराखडा (PDF)',
    level: 'Gram Panchayat',
    workflowSteps: ['डेटा संकलन', 'पोर्टलवर एन्ट्री', 'ग्रामसभा मंजुरी', 'अंतिम सबमिशन']
  },
  {
    id: 'FC-002',
    title: 'उपयोगिता प्रमाणपत्र (Utilization Certificate - UC)',
    description: 'खर्च झालेल्या निधीचे उपयोगिता प्रमाणपत्र तयार करणे.',
    price: 1500,
    isFree: false,
    deliveryDays: 5,
    category: 'Finance',
    requirements: ['कॅश बुक', 'व्हाउचर', 'बँक स्टेटमेंट'],
    serviceOutput: 'UC प्रमाणपत्र',
    level: 'Panchayat Samiti',
    workflowSteps: ['खर्च पडताळणी', 'UC ड्राफ्ट करणे', 'DSK स्वाक्षरी', 'सबमिशन']
  },
  {
    id: 'FC-003',
    title: 'PFMS पेमेंट आणि व्हेंडर नोंदणी',
    description: 'PFMS पोर्टलवर व्हेंडर ऍड करणे आणि पेमेंट प्रोसेस करणे.',
    price: 500,
    isFree: false,
    deliveryDays: 2,
    category: 'Finance',
    requirements: ['व्हेंडर बँक डिटेल्स', 'PAN कार्ड', 'GST नंबर'],
    serviceOutput: 'पेमेंट एडवाइस (PPA)',
    level: 'Gram Panchayat',
    workflowSteps: ['व्हेंडर नोंदणी', 'मेकर एन्ट्री', 'चेकर अप्रूव्हल', 'PPA जनरेशन']
  },

  // --- C) GPDP / ई-ग्राम सेवा ---
  {
    id: 'EG-001',
    title: 'ई-ग्राम स्वराज पोर्टल अपडेट',
    description: 'ई-ग्राम स्वराज पोर्टलवर दैनंदिन कामकाज अपडेट करणे.',
    price: 1000,
    isFree: false,
    deliveryDays: 3,
    category: 'Data Entry',
    requirements: ['मिटींग प्रोसिडिंग', 'कामाचे फोटो', 'अहवाल'],
    serviceOutput: 'अपडेटेड पोर्टल रिपोर्ट',
    level: 'State Govt',
    workflowSteps: ['लॉगिन', 'डेटा अपलोड', 'फ्रीज करणे']
  },
  {
    id: 'EG-002',
    title: 'मासिक प्रगती अहवाल (MPR)',
    description: 'मासिक प्रगती अहवाल तयार करून वरिष्ठ कार्यालयास पाठवणे.',
    price: 300,
    isFree: false,
    deliveryDays: 2,
    category: 'Data Entry',
    requirements: ['मागील महिन्याचा आढावा', 'खर्च तपशील'],
    serviceOutput: 'MPR फाईल',
    level: 'Panchayat Samiti',
    workflowSteps: ['माहिती संकलन', 'टाइपिंग', 'प्रिंट आणि स्वाक्षरी']
  },

  // --- D) RTI / कायदेशीर सेवा (Legal) ---
  {
    id: 'LEG-001',
    title: 'RTI अर्ज मसुदा (RTI Drafting)',
    description: 'माहितीचा अधिकार कायद्यांतर्गत अचूक अर्ज तयार करणे.',
    price: 150,
    isFree: false,
    deliveryDays: 1,
    category: 'Legal',
    requirements: ['कोणती माहिती हवी आहे', 'विभाग नाव'],
    serviceOutput: 'तयार RTI अर्ज (PDF)',
    level: 'State Govt',
    workflowSteps: ['माहिती घेणे', 'कलम ६(१) नुसार मसुदा', 'प्रिंट']
  },
  {
    id: 'LEG-002',
    title: 'करारनामा (Agreement Drafting)',
    description: 'ग्रामपंचायत कंत्राट किंवा भाडेकरू करारनामा तयार करणे.',
    price: 500,
    isFree: false,
    deliveryDays: 2,
    category: 'Legal',
    requirements: ['दोन्ही पक्षांचे आधार', 'अटी व शर्ती'],
    serviceOutput: 'स्टॅम्प पेपरसाठी मसुदा',
    level: 'Gram Panchayat',
    workflowSteps: ['तपशील चर्चा', 'मसुदा लेखन', 'कायदेशीर तपासणी', 'अंतिम प्रिंट']
  },

  // --- E) लेखा / ऑडिट सेवा (Audit) ---
  {
    id: 'AUD-001',
    title: 'नमुना १ ते ३३ अद्ययावत करणे',
    description: 'ग्रामपंचायतीचे सर्व वैधानिक नमुने लिहून पूर्ण करणे.',
    price: 5000,
    isFree: false,
    deliveryDays: 15,
    category: 'Audit',
    requirements: ['पावती पुस्तक', 'प्रोसिडिंग', 'कॅश बुक'],
    serviceOutput: 'पूर्ण झालेले दप्तर',
    level: 'Gram Panchayat',
    workflowSteps: ['रेकॉर्ड चेक', 'हस्ताक्षर लेखन', 'क्रॉस वेरिफाई']
  },
  {
    id: 'AUD-002',
    title: 'वार्षिक लेखापरीक्षण (Audit Assistance)',
    description: 'ऑडिटरच्या क्वेरीजना उत्तरे देणे आणि पूर्तता अहवाल.',
    price: 3000,
    isFree: false,
    deliveryDays: 10,
    category: 'Audit',
    requirements: ['ऑडिट रिपोर्ट', 'जुने रेकॉर्ड'],
    serviceOutput: 'पूर्तता अहवाल',
    level: 'Zilla Parishad',
    workflowSteps: ['आक्षेप पाहणे', 'उत्तरे तयार करणे', 'ग्रामसेवक स्वाक्षरी']
  },

  // --- F) टेंडर / ई-प्रोक्योरमेंट सेवा ---
  {
    id: 'TND-001',
    title: 'निविदा प्रसिद्धी (Tender Publishing)',
    description: 'महाटेंडर्स पोर्टलवर निविदा अपलोड करणे.',
    price: 2000,
    isFree: false,
    deliveryDays: 3,
    category: 'Tenders',
    requirements: ['तांत्रिक मंजुरी', 'प्रशासकीय मंजुरी', 'BOQ', 'DSC'],
    serviceOutput: 'टेंडर ID आणि पावती',
    level: 'Zilla Parishad',
    workflowSteps: ['डॉक्युमेंट स्कॅन', 'BOQ तयार करणे', 'DSC स्वाक्षरी', 'अपलोड']
  },
  {
    id: 'TND-002',
    title: 'GeM पोर्टल नोंदणी',
    description: 'GeM (Government e-Marketplace) वर खरेदीसाठी नोंदणी.',
    price: 1000,
    isFree: false,
    deliveryDays: 2,
    category: 'Tenders',
    requirements: ['आधार लिंक मोबाईल', 'इमेल', 'बँक खाते'],
    serviceOutput: 'GeM आयडी आणि पासवर्ड',
    level: 'Gram Panchayat',
    workflowSteps: ['प्रोफाइल तयार करणे', 'कागदपत्र अपलोड', 'वेरिफिकेशन']
  },
  {
    id: 'TND-003',
    title: 'DSC (Digital Signature) काढणे',
    description: 'सरपंच / ग्रामसेवक यांचे डिजिटल सिग्नेचर काढणे.',
    price: 1800,
    isFree: false,
    deliveryDays: 4,
    category: 'Technical',
    requirements: ['आधार कार्ड', 'पॅन कार्ड', 'फोटो'],
    serviceOutput: 'Class-3 DSC Token',
    level: 'State Govt',
    workflowSteps: ['अर्ज', 'व्हिडिओ व्हेरिफिकेशन', 'टोकन डाउनलोड']
  },

  // --- G) Excel / PDF / डेटा कामे ---
  {
    id: 'DAT-001',
    title: 'मराठी टायपिंग (DTP Work)',
    description: 'कोणतेही शासकीय पत्र किंवा ठराव मराठीत टाइप करणे.',
    price: 50,
    isFree: false,
    deliveryDays: 1,
    category: 'Data Entry',
    requirements: ['हस्तलिखित मजकूर'],
    serviceOutput: 'PDF / Word File',
    level: 'Gram Panchayat',
    workflowSteps: ['टायपिंग', 'प्रूफ रिडिंग', 'प्रिंट']
  },
  {
    id: 'DAT-002',
    title: 'मतदार यादी प्रिंट करणे',
    description: 'गावाची अद्ययावत मतदार यादी डाउनलोड आणि प्रिंट.',
    price: 300,
    isFree: false,
    deliveryDays: 1,
    category: 'Data Entry',
    requirements: ['गावाचे नाव'],
    serviceOutput: 'मतदार यादी संच',
    level: 'State Govt',
    workflowSteps: ['निवडणूक आयोग पोर्टल', 'डाउनलोड', 'प्रिंटिंग']
  },

  // --- H) योजना / अनुदान सहाय्य (Schemes) ---
  {
    id: 'SCH-001',
    title: 'PM किसान सन्मान निधी अर्ज',
    description: 'नवीन शेतकरी नोंदणी व E-KYC करणे.',
    price: 100,
    isFree: false,
    deliveryDays: 1,
    category: 'Schemes',
    requirements: ['7/12 उतारा', 'आधार कार्ड', 'बँक पासबुक'],
    serviceOutput: 'नोंदणी पावती',
    level: 'State Govt',
    workflowSteps: ['पोर्टल एन्ट्री', 'E-KYC', 'पावती']
  },
  {
    id: 'SCH-002',
    title: 'प्रधान मंत्री आवास योजना (PMAY)',
    description: 'घरकुलासाठी ऑनलाइन अर्ज करणे.',
    price: 200,
    isFree: false,
    deliveryDays: 5,
    category: 'Schemes',
    requirements: ['उत्पन्न दाखला', 'जागा पुरावा', 'आधार', 'फोटो'],
    serviceOutput: 'अर्ज क्रमांक',
    level: 'Panchayat Samiti',
    workflowSteps: ['जिओ टॅगिंग', 'डेटा अपलोड', 'अर्ज सबमिशन']
  },
  {
    id: 'SCH-003',
    title: 'आयुष्यमान भारत कार्ड',
    description: '5 लाखांपर्यंत मोफत उपचारासाठी कार्ड काढणे.',
    price: 50,
    isFree: false,
    deliveryDays: 1,
    category: 'Schemes',
    requirements: ['रेशन कार्ड', 'आधार कार्ड'],
    serviceOutput: 'PVC कार्ड / प्रिंट',
    level: 'State Govt',
    workflowSteps: ['नाव शोधणे', 'KYC करणे', 'कार्ड प्रिंट']
  },
  {
    id: 'SCH-004',
    title: 'मनरेगा जॉब कार्ड (Job Card)',
    description: 'रोजगार हमी योजनेसाठी जॉब कार्ड नोंदणी.',
    price: 0,
    isFree: true,
    deliveryDays: 7,
    category: 'Schemes',
    requirements: ['आधार कार्ड', 'फोटो', 'बँक पासबुक'],
    serviceOutput: 'जॉब कार्ड पुस्तिका',
    level: 'Gram Panchayat',
    workflowSteps: ['अर्ज', 'ग्रामसभा मंजुरी', 'नोंदणी', 'वितरण']
  },
  {
    id: 'SCH-005',
    title: 'लाडकी बहीण योजना अर्ज',
    description: 'महिलांसाठी आर्थिक सहाय्य योजनेचा अर्ज.',
    price: 50,
    isFree: false,
    deliveryDays: 2,
    category: 'Schemes',
    requirements: ['आधार', 'बँक पासबुक', 'हमीपत्र'],
    serviceOutput: 'अर्ज पोचपावती',
    level: 'State Govt',
    workflowSteps: ['Nari Shakti ॲप वर एन्ट्री', 'कागदपत्र अपलोड', 'सबमिशन']
  },

  // --- I) प्रमाणपत्र / दाखले सहाय्य (Certificates) ---
  {
    id: 'CRT-001',
    title: 'उत्पन्न दाखला (Income Certificate)',
    description: 'तहसीलदार यांच्या कडील 1 किंवा 3 वर्षाचा उत्पन्न दाखला.',
    price: 150,
    isFree: false,
    deliveryDays: 15,
    category: 'Citizen',
    requirements: ['तलाठी अहवाल', 'शिधापत्रिका', 'स्वयंघोषणा पत्र'],
    serviceOutput: 'डिजिटल उत्पन्न दाखला',
    level: 'State Govt',
    workflowSteps: ['आपले सरकार पोर्टल', 'तलाठी पडताळणी', 'मंडळ अधिकारी मंजुरी', 'तहसीलदार मंजुरी']
  },
  {
    id: 'CRT-002',
    title: 'अधिवास दाखला (Domicile Certificate)',
    description: 'रहिवासी असल्याचा पुरावा (वय, राष्ट्रीयत्व आणि अधिवास).',
    price: 200,
    isFree: false,
    deliveryDays: 21,
    category: 'Citizen',
    requirements: ['शाळा सोडल्याचा दाखला', 'आधार', 'विज बिल'],
    serviceOutput: 'डोमिसाईल सर्टिफिकेट',
    level: 'State Govt',
    workflowSteps: ['अर्ज', 'कागदपत्र तपासणी', 'सेतू केंद्र', 'वितरण']
  },
  {
    id: 'CRT-003',
    title: 'जातीचा दाखला (Caste Certificate)',
    description: 'अनुसूचित जाती/जमाती/ओबीसी साठी जातीचा दाखला.',
    price: 250,
    isFree: false,
    deliveryDays: 30,
    category: 'Citizen',
    requirements: ['वडिलांचा शाळा सोडल्याचा दाखला', 'आजोबांचा पुरावा', 'वंशावळ'],
    serviceOutput: 'जातीचे प्रमाणपत्र',
    level: 'State Govt',
    workflowSteps: ['महा ई-सेवा केंद्र', 'कागदपत्र स्कॅनिंग', 'SDO मंजुरी']
  },
  {
    id: 'CRT-004',
    title: 'नॉन-क्रिमीलेअर (Non-Creamy Layer)',
    description: 'OBC प्रवर्गासाठी आरक्षणासाठी आवश्यक.',
    price: 200,
    isFree: false,
    deliveryDays: 21,
    category: 'Citizen',
    requirements: ['3 वर्षाचा उत्पन्न दाखला', 'जातीचा दाखला'],