import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, FileText, Phone, ArrowRight, PartyPopper } from "lucide-react";

const Confirmation = () => {
  const { type, planId } = useParams<{ type: string; planId: string }>();

  const planNames: Record<string, string> = {
    "1": type === "health" ? "Essential Health" : "Basic Auto",
    "2": type === "health" ? "Complete Care Plus" : "Premium Protection",
    "3": type === "health" ? "Smart Health" : "Smart Driver"
  };

  const planName = planNames[planId || "3"];

  const nextSteps = [
    {
      icon: FileText,
      title: "Review Documents",
      description: "We'll send you the policy documents to review within 24 hours.",
      status: "pending"
    },
    {
      icon: Phone,
      title: "Broker Call (Optional)",
      description: "A licensed broker can walk you through the details if you'd like.",
      status: "optional"
    },
    {
      icon: CheckCircle,
      title: "Sign & Activate",
      description: "Complete the digital signature to activate your coverage.",
      status: "upcoming"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Animation */}
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto rounded-full gradient-hero flex items-center justify-center mb-6 animate-scale-in">
                <PartyPopper className="h-10 w-10 text-primary-foreground" />
              </div>
              <Badge variant="success" className="mb-4">
                <CheckCircle className="h-3 w-3 mr-1" />
                Request Submitted
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Great choice!
              </h1>
              <p className="text-lg text-muted-foreground">
                You've selected <strong className="text-foreground">{planName}</strong> for your {type} insurance.
                We'll take it from here.
              </p>
            </div>

            {/* Status Card */}
            <Card variant="highlighted" className="mb-8 text-left">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Current Status</CardTitle>
                    <CardDescription>Request received • Processing</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your request has been received and is being processed. You'll receive an email 
                  confirmation shortly with your request details and tracking information.
                </p>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card variant="default" className="mb-8 text-left">
              <CardHeader>
                <CardTitle>What Happens Next?</CardTitle>
                <CardDescription>Here's what to expect in the coming days</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {nextSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-foreground">{step.title}</h4>
                        {step.status === "optional" && (
                          <Badge variant="muted" className="text-xs">Optional</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Reassurance */}
            <Card variant="muted" className="mb-8">
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Don't worry</strong> — you can still change your mind. 
                  Nothing is finalized until you sign the policy documents. Take your time to review everything.
                </p>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/customer-dashboard">
                <Button variant="hero" size="lg">
                  Go to Dashboard
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link to="/compare">
                <Button variant="outline" size="lg">
                  Compare More Options
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Confirmation;
