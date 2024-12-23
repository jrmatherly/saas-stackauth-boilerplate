"use client";

import { Badge } from "@/components/ui/badge";
import { Switch } from "../../ui/switch";
import { Label } from "../../ui/label";
import React, { useState } from "react";
import { PlanCard } from "../pricing/plan-card";
import { type PricingPlan } from "@/types/pricing";
import { SectionTitle } from "@/components/marketing/shared/section-title";


const pricingPlans: PricingPlan[] = [
  {
    title: "Free",
    description: "Forever free",
    price: {
      monthly: "Free",
      yearly: "Free"
    },
    popular: false,
    features: [
      "1 user",
      "Plan features",
      "Product support",
    ],
  },
  {
    title: "Startup",
    description: "All the basics for starting a new business",
    price: {
      monthly: "$39",
      yearly: "$390"
    },
    popular: true,
    features: [
      "2 users",
      "Plan features",
      "Product support",
    ],
  },
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing">
      <div className="container max-w-6xl mx-auto py-24 lg:py-32">
        <SectionTitle name="Pricing" title="Choose the perfect plan for your needs" />

       <div className="flex justify-center items-center mt-12">
          <Label htmlFor="payment-schedule" className="me-3">
            Monthly
          </Label>
          <Switch id="payment-schedule" checked={isYearly} onCheckedChange={setIsYearly} />
          <Label htmlFor="payment-schedule" className="relative ms-3">
            Annual
            <span className="absolute -top-10 start-auto -end-28">
              <span className="flex items-center">
                <svg
                  className="w-14 h-8 -me-6"
                  width={45}
                  height={25}
                  viewBox="0 0 45 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
                    fill="currentColor"
                    className="text-muted-foreground"
                  />
                </svg>
                <Badge className="mt-3 uppercase">Save up to 10%</Badge>
              </span>
            </span>
          </Label>
        </div>
        <div className="mt-20 flex flex-col md:flex-row justify-center gap-6 items-center">
          {pricingPlans.map((plan, index) => (
            <PlanCard key={index} plan={plan} isYearly={isYearly} />
          ))}
        </div>
      </div>
    </section>
  );
}


