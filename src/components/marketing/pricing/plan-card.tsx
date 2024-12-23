import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { type PricingPlan } from "@/types/pricing";

interface PlanCardProps {
  plan: PricingPlan,
  isYearly: boolean
}

export const PlanCard: React.FC<PlanCardProps> = ({
    plan,
    isYearly
  }) => {
    return (
      <Card 
        className={`
          flex flex-col min-h-[500px] flex-1 w-full md:max-w-sm 
          ${plan.popular ? 'min-h-[550px] border-primary shadow-lg' : ''}
        `}
      >
        <CardHeader className="text-center pb-2">
          {plan.popular && (
            <Badge className="uppercase w-max self-center mb-3">
              Most popular
            </Badge>
          )}
          <CardTitle className="mb-7">{plan.title}</CardTitle>
          <span className="font-bold text-5xl">
            {isYearly ? plan.price.yearly : plan.price.monthly}
          </span>
        </CardHeader>
        <CardDescription className="text-center w-11/12 mx-auto">
          {plan.description}
        </CardDescription>
        <CardContent className="flex-grow">
          <ul className="mt-7 space-y-2.5">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button 
            className="w-full" 
            variant={plan.popular ? "default" : "outline"}
            size={plan.popular ? "lg" : "default"}
          >
            Sign up
          </Button>
        </CardFooter>
      </Card>
    );
  };