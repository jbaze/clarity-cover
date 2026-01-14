import { useParams, useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  CheckCircle, 
  XCircle, 
  Star, 
  Info, 
  MessageSquare, 
  ArrowRight,
  Shield,
  Award,
  TrendingDown
} from "lucide-react";

interface InsurancePlan {
  id: string;
  name: string;
  company: string;
  monthlyPrice: number;
  yearlyPrice: number;
  coverage: string;
  deductible: number;
  rating: number;
  bestFor: "price" | "coverage" | "balanced";
  features: { name: string; included: boolean }[];
  highlights: string[];
  exclusions: string[];
}

const healthPlans: InsurancePlan[] = [
  {
    id: "1",
    name: "Essential Health",
    company: "SafeGuard Insurance",
    monthlyPrice: 189,
    yearlyPrice: 2079,
    coverage: "Basic",
    deductible: 3000,
    rating: 4.2,
    bestFor: "price",
    features: [
      { name: "Doctor visits", included: true },
      { name: "Emergency care", included: true },
      { name: "Prescriptions", included: true },
      { name: "Mental health", included: false },
      { name: "Dental", included: false },
      { name: "Vision", included: false }
    ],
    highlights: ["Low monthly cost", "Wide network", "No referrals needed"],
    exclusions: ["Cosmetic procedures", "Experimental treatments"]
  },
  {
    id: "2",
    name: "Complete Care Plus",
    company: "TrustLife Health",
    monthlyPrice: 349,
    yearlyPrice: 3839,
    coverage: "Comprehensive",
    deductible: 1000,
    rating: 4.8,
    bestFor: "coverage",
    features: [
      { name: "Doctor visits", included: true },
      { name: "Emergency care", included: true },
      { name: "Prescriptions", included: true },
      { name: "Mental health", included: true },
      { name: "Dental", included: true },
      { name: "Vision", included: true }
    ],
    highlights: ["Full coverage", "Low deductible", "24/7 telehealth", "Wellness rewards"],
    exclusions: ["Cosmetic procedures"]
  },
  {
    id: "3",
    name: "Smart Health",
    company: "ClearPath Insurance",
    monthlyPrice: 259,
    yearlyPrice: 2849,
    coverage: "Standard",
    deductible: 2000,
    rating: 4.5,
    bestFor: "balanced",
    features: [
      { name: "Doctor visits", included: true },
      { name: "Emergency care", included: true },
      { name: "Prescriptions", included: true },
      { name: "Mental health", included: true },
      { name: "Dental", included: false },
      { name: "Vision", included: false }
    ],
    highlights: ["Great value", "Mental health included", "Good network coverage"],
    exclusions: ["Cosmetic procedures", "Out-of-network specialists"]
  }
];

const carPlans: InsurancePlan[] = [
  {
    id: "1",
    name: "Basic Auto",
    company: "DriveShield",
    monthlyPrice: 89,
    yearlyPrice: 979,
    coverage: "Liability Only",
    deductible: 1000,
    rating: 4.0,
    bestFor: "price",
    features: [
      { name: "Liability coverage", included: true },
      { name: "Collision", included: false },
      { name: "Comprehensive", included: false },
      { name: "Roadside assistance", included: false },
      { name: "Rental coverage", included: false },
      { name: "Glass coverage", included: false }
    ],
    highlights: ["Meets legal requirements", "Lowest cost option"],
    exclusions: ["Your own vehicle damage", "Theft", "Natural disasters"]
  },
  {
    id: "2",
    name: "Premium Protection",
    company: "AutoGuard Elite",
    monthlyPrice: 189,
    yearlyPrice: 2079,
    coverage: "Full Coverage",
    deductible: 250,
    rating: 4.9,
    bestFor: "coverage",
    features: [
      { name: "Liability coverage", included: true },
      { name: "Collision", included: true },
      { name: "Comprehensive", included: true },
      { name: "Roadside assistance", included: true },
      { name: "Rental coverage", included: true },
      { name: "Glass coverage", included: true }
    ],
    highlights: ["Complete protection", "Low deductible", "New car replacement", "Accident forgiveness"],
    exclusions: ["Intentional damage", "Racing activities"]
  },
  {
    id: "3",
    name: "Smart Driver",
    company: "RoadWise Insurance",
    monthlyPrice: 129,
    yearlyPrice: 1419,
    coverage: "Standard",
    deductible: 500,
    rating: 4.6,
    bestFor: "balanced",
    features: [
      { name: "Liability coverage", included: true },
      { name: "Collision", included: true },
      { name: "Comprehensive", included: true },
      { name: "Roadside assistance", included: true },
      { name: "Rental coverage", included: false },
      { name: "Glass coverage", included: false }
    ],
    highlights: ["Good balance", "Safe driver discounts", "Mobile app claims"],
    exclusions: ["Rental vehicles", "Personal items in car"]
  }
];

const Results = () => {
  const { type } = useParams<{ type: string }>();
  const [searchParams] = useSearchParams();
  const priority = searchParams.get("priority") || "balanced";

  const plans = type === "health" ? healthPlans : carPlans;
  const bestMatch = plans.find(p => p.bestFor === priority) || plans[2];
  const alternatives = plans.filter(p => p.id !== bestMatch.id);

  const getBestMatchIcon = () => {
    switch (priority) {
      case "price": return TrendingDown;
      case "coverage": return Shield;
      default: return Award;
    }
  };

  const BestMatchIcon = getBestMatchIcon();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 md:py-20">
        <div className="container px-4 md:px-6">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge variant="success" className="mb-4">
              <CheckCircle className="h-3 w-3 mr-1" />
              Analysis Complete
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your personalized recommendations
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Based on your answers, we've identified the best options for you. 
              Remember: the final choice is always yours.
            </p>
          </div>

          {/* Best Match */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-2 mb-4">
              <BestMatchIcon className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Best Match for You</h2>
            </div>
            
            <Card variant="highlighted" className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 gradient-hero opacity-10 rounded-bl-full" />
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <Badge variant="default" className="mb-2">
                      <Star className="h-3 w-3 mr-1" />
                      Recommended
                    </Badge>
                    <CardTitle className="text-2xl">{bestMatch.name}</CardTitle>
                    <CardDescription className="text-base">{bestMatch.company}</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">${bestMatch.monthlyPrice}</div>
                    <div className="text-sm text-muted-foreground">per month</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Why This Fits */}
                <Card variant="muted" className="border-0">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground mb-1">Why this fits your needs</p>
                        <p className="text-sm text-muted-foreground">
                          {priority === "price" && "This plan offers the most affordable coverage that still meets your essential needs. You'll save money while maintaining basic protection."}
                          {priority === "coverage" && "This plan provides comprehensive protection with minimal gaps. It covers the widest range of scenarios to give you peace of mind."}
                          {priority === "balanced" && "This plan strikes the best balance between cost and coverage. You get solid protection without overpaying for features you don't need."}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Features */}
                <div>
                  <h4 className="font-medium text-foreground mb-3">Coverage Details</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {bestMatch.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        {feature.included ? (
                          <CheckCircle className="h-4 w-4 text-success" />
                        ) : (
                          <XCircle className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                  <Link to={`/confirmation/${type}/${bestMatch.id}`} className="flex-1">
                    <Button variant="hero" size="lg" className="w-full">
                      Select This Plan
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="lg">
                        View Full Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{bestMatch.name}</DialogTitle>
                        <DialogDescription>{bestMatch.company}</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6 py-4">
                        <div>
                          <h4 className="font-semibold mb-2">Pricing</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <Card variant="muted" className="p-4 text-center">
                              <div className="text-2xl font-bold text-primary">${bestMatch.monthlyPrice}</div>
                              <div className="text-sm text-muted-foreground">Monthly</div>
                            </Card>
                            <Card variant="muted" className="p-4 text-center">
                              <div className="text-2xl font-bold text-foreground">${bestMatch.yearlyPrice}</div>
                              <div className="text-sm text-muted-foreground">Yearly (save 10%)</div>
                            </Card>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Highlights</h4>
                          <ul className="space-y-2">
                            {bestMatch.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-success" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">What's Not Covered</h4>
                          <ul className="space-y-2">
                            {bestMatch.exclusions.map((exclusion, i) => (
                              <li key={i} className="flex items-center gap-2 text-muted-foreground">
                                <XCircle className="h-4 w-4" />
                                <span>{exclusion}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Broker Recommendation */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card variant="feature" className="border-l-4 border-l-primary">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center shrink-0">
                  <MessageSquare className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <Badge variant="accent" className="mb-2">Broker's Note</Badge>
                  <p className="text-foreground mb-2">
                    "Based on what you've shared, {bestMatch.name} seems like a solid choice. 
                    {priority === "price" && " If your budget allows, consider the balanced option for slightly better coverage."}
                    {priority === "coverage" && " This gives you maximum peace of mind, though you could save with the balanced option."}
                    {priority === "balanced" && " This is often the sweet spot for most customers in your situation."}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    — Your ClearCover Advisory Team
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alternatives */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-4">Other Options</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {alternatives.map((plan) => (
                <Card key={plan.id} variant="default">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge variant="muted" className="mb-2">
                          {plan.bestFor === "price" && "Budget Option"}
                          {plan.bestFor === "coverage" && "Premium Option"}
                          {plan.bestFor === "balanced" && "Balanced Option"}
                        </Badge>
                        <CardTitle>{plan.name}</CardTitle>
                        <CardDescription>{plan.company}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-foreground">${plan.monthlyPrice}</div>
                        <div className="text-xs text-muted-foreground">/month</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {plan.features.filter(f => f.included).slice(0, 3).map((feature, i) => (
                        <Badge key={i} variant="muted" className="text-xs">{feature.name}</Badge>
                      ))}
                    </div>
                    <Link to={`/confirmation/${type}/${plan.id}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        Select This Plan
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="max-w-4xl mx-auto mt-12">
            <Card variant="muted">
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Important:</strong> These are recommendations based on the information you provided. 
                  The final choice is always yours. We encourage you to review all details carefully 
                  and consult with a broker if you have questions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Results;
