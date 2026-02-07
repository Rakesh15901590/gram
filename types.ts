
export enum UserRole {
  CITIZEN = 'CITIZEN',
  GP_OPERATOR = 'GP_OPERATOR',
  TALUKA = 'TALUKA',
  DISTRICT = 'DISTRICT',
  SUPER_ADMIN = 'SUPER_ADMIN'
}

export type ServiceStatus = 'REQUESTED' | 'IN_PROGRESS' | 'COMPLETED' | 'REJECTED';

export type ServiceLevel = 'Gram Panchayat' | 'Panchayat Samiti' | 'Zilla Parishad' | 'State Govt';

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  isFree: boolean;
  deliveryDays: number;
  category: string;
  requirements: string[];
  serviceOutput: string; // Deliverables
  level: ServiceLevel;
  workflowSteps: string[];
}

export interface Task {
  id: string;
  serviceId: string;
  serviceTitle: string;
  userId: string;
  userName: string;
  dateRequested: string;
  status: ServiceStatus;
  progress: number; // 0-100
  operator?: string;
}

export interface StatMetric {
  label: string;
  value: string | number;
  trend?: string; // e.g. "+12%"
  color: string;
  icon: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
  type: 'info' | 'success' | 'warning' | 'alert';
}

export interface SmartTool {
  id: string;
  title: string;
  description: string;
  icon: any;
  isPremium: boolean;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  monthlyPrice: number;
  yearlyPrice: number;
  period: string;
  features: string[];
  recommended: boolean;
}
