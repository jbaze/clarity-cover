import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Search, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Building2, 
  Sparkles,
  Heart,
  Car,
  Home,
  Umbrella
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const steps = [
    {
      icon: Search,
      title: "Select Insurance Type",
      description: "Choose what you need - health, car, or more. We'll guide you."
    },
    {
      icon: MessageSquare,
      title: "Answer Simple Questions",
      description: "Tell us about your needs in plain language. No jargon."
    },
    {
      icon: CheckCircle,
      title: "Compare & Choose",
      description: "See honest recommendations with clear explanations."
    }
  ];

  const insuranceTypes = [
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Protect your health and family with comprehensive coverage",
      color: "text-secondary"
    },
    {
      icon: Car,
      title: "Car Insurance",
      description: "Drive with peace of mind knowing you're covered",
      color: "text-primary"
    },
    {
      icon: Home,
      title: "Home Insurance",
      description: "Safeguard your home and belongings",
      color: "text-success"
    },
    {
      icon: Umbrella,
      title: "Life Insurance",
      description: "Secure your family's future",
      color: "text-info"
    }
  ];

  const trustSignals = [
    { value: "50,000+", label: "Happy Customers" },
    { value: "200+", label: "Insurance Partners" },
    { value: "4.9/5", label: "Customer Rating" },
    { value: "100%", label: "Transparency" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 gradient-soft" />
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
          
          <div className="container relative px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="accent" className="mb-6 animate-fade-up">
                <Sparkles className="h-3 w-3 mr-1" />
                Transparent Insurance Comparison
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Insurance that's{" "}
                <span className="text-primary">clear</span>,{" "}
                <span className="text-secondary">fair</span>, and{" "}
                <span className="text-primary">honest</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
                We help you understand and compare insurance options transparently. 
                No hidden fees, no confusing terms—just honest recommendations tailored to your needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <Link to="/compare">
                  <Button variant="hero" size="xl">
                    Compare Insurance Transparently
                    <ArrowRight className="h-5 w-5 ml-1" />
                  </Button>
                </Link>
                <Button variant="outline" size="xl">
                  Learn How It Works
                </Button>
              </div>

              {/* Trust Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                {trustSignals.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-card">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge variant="muted" className="mb-4">How It Works</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Simple steps to find your perfect coverage
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our process is designed to educate and guide you, not to sell you something you don't need.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <Card key={index} variant="feature" className="relative">
                  <CardHeader className="text-center pb-2">
                    <div className="mx-auto w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mb-4">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-semibold text-muted-foreground">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base">{step.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Insurance Types Preview */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge variant="muted" className="mb-4">Insurance Types</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Find the coverage that fits your life
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Start with what matters most to you. We'll help you understand each option clearly.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {insuranceTypes.map((type, index) => (
                <Link to="/compare" key={index}>
                  <Card variant="interactive" className="h-full">
                    <CardHeader className="text-center">
                      <div className={`mx-auto w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-3 ${type.color}`}>
                        <type.icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-lg">{type.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pt-0">
                      <CardDescription>{type.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* User Roles */}
        <section className="py-20 bg-card">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge variant="muted" className="mb-4">For Everyone</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Built for transparency at every level
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card variant="elevated">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>For Customers</CardTitle>
                  <CardDescription>
                    Compare insurance options transparently, understand what you're buying, and make informed decisions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/customer-dashboard">
                    <Button variant="soft" className="w-full">
                      View Dashboard
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>For Brokers</CardTitle>
                  <CardDescription>
                    Advise clients with powerful tools, build trust through transparency, and grow your practice.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/broker-dashboard">
                    <Button variant="soft" className="w-full">
                      View Dashboard
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-3">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>For Insurance Companies</CardTitle>
                  <CardDescription>
                    Reach customers who are actively looking, manage products, and handle requests efficiently.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/company-dashboard">
                    <Button variant="soft" className="w-full">
                      View Dashboard
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <Card variant="highlighted" className="max-w-4xl mx-auto overflow-hidden">
              <div className="relative p-8 md:p-12 text-center">
                <div className="absolute inset-0 gradient-hero opacity-5" />
                <div className="relative">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Ready to find the right insurance?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Start comparing today. It only takes a few minutes, and you'll get recommendations you can trust.
                  </p>
                  <Link to="/compare">
                    <Button variant="hero" size="xl">
                      Start Comparing Now
                      <ArrowRight className="h-5 w-5 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
