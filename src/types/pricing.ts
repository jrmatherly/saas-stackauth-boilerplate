
export interface PricingPlan {
    title: string;
    description: string;
    price: { monthly: string; yearly: string };
    popular: boolean;
    features: string[];
  }