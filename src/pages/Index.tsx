import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  ArrowRight, 
  Users, 
  Building2, 
  Sparkles,
  Heart,
  Car,
  Check,
  MessageCircle,
  Eye,
  TrendingUp,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const words = ["clear", "fair", "honest", "transparent"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }, 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Eye,
      title: "See Everything",
      description: "Full breakdown of what you're paying for—no hidden fees, ever.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: MessageCircle,
      title: "Talk, Don't Read",
      description: "Answer simple questions in plain language. We translate insurance-speak for you.",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: TrendingUp,
      title: "Smart Matching",
      description: "Our algorithm finds what fits your life, not what pays us the most.",
      gradient: "from-success/20 to-success/5"
    }
  ];

  const comparisonPoints = [
    { us: "See exactly why we recommend each plan", them: "Hidden algorithms, no explanations" },
    { us: "Brokers work for you, not commissions", them: "Salespeople pushing expensive plans" },
    { us: "Plain language, real examples", them: "Legal jargon and fine print" },
    { us: "Change or cancel anytime", them: "Lock-in periods and penalties" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Innovative asymmetric layout */}
        <section className="relative min-h-[90vh] flex items-center py-20">
          {/* Animated background shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl animate-float" />
            <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-secondary/10 via-secondary/5 to-transparent blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-accent/30 to-transparent opacity-50" />
            
            {/* Floating orbs */}
            <div className="absolute top-32 right-[20%] w-4 h-4 rounded-full bg-primary/40 animate-float" style={{ animationDelay: "-1s" }} />
            <div className="absolute top-48 right-[35%] w-2 h-2 rounded-full bg-secondary/60 animate-float" style={{ animationDelay: "-2s" }} />
            <div className="absolute bottom-40 left-[25%] w-3 h-3 rounded-full bg-success/40 animate-float" style={{ animationDelay: "-4s" }} />
          </div>
          
          <div className="container relative px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left side - Text content */}
              <div className="space-y-8">
                <Badge variant="accent" className="inline-flex items-center gap-2 px-4 py-2 text-sm animate-fade-up">
                  <Sparkles className="h-4 w-4" />
                  The future of insurance shopping
                </Badge>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] animate-fade-up" style={{ animationDelay: "0.1s" }}>
                  Insurance<br />
                  made{" "}
                  <span className="relative inline-block">
                    <span 
                      className={`text-primary transition-all duration-300 ${
                        isTyping ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {words[currentWord]}
                    </span>
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30 rounded-full" />
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
                  Finally, insurance comparison that explains itself. 
                  See exactly why each plan fits your needs—or doesn't.
                </p>
                
                <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                  <Link to="/compare">
                    <Button variant="hero" size="xl" className="group shadow-glow">
                      Start Your Journey
                      <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="xl" className="bg-background/50 backdrop-blur-sm">
                    Watch Demo
                  </Button>
                </div>

                {/* Quick stats - inline */}
                <div className="flex items-center gap-8 pt-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                      <Check className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">50K+</div>
                      <div className="text-xs text-muted-foreground">Happy customers</div>
                    </div>
                  </div>
                  <div className="w-px h-10 bg-border" />
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">3 min</div>
                      <div className="text-xs text-muted-foreground">Average comparison</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Interactive cards stack */}
              <div className="relative h-[500px] hidden lg:block animate-fade-up" style={{ animationDelay: "0.3s" }}>
                {/* Stacked cards effect */}
                <div className="absolute top-8 right-8 w-full max-w-md">
                  <Card className="p-6 bg-card/80 backdrop-blur-xl border-border/50 shadow-medium rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl gradient-hero flex items-center justify-center shrink-0">
                        <Heart className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">Health Insurance</h3>
                          <Badge variant="success" className="text-xs">Best Match</Badge>
                        </div>
                        <div className="space-y-1">
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full w-[92%] bg-primary rounded-full" />
                          </div>
                          <p className="text-xs text-muted-foreground">92% match with your needs</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
                
                <div className="absolute top-32 right-4 w-full max-w-md">
                  <Card className="p-6 bg-card/80 backdrop-blur-xl border-border/50 shadow-medium -rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl gradient-warm flex items-center justify-center shrink-0">
                        <Car className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">Car Insurance</h3>
                          <span className="text-sm font-medium text-primary">€42/mo</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Full coverage • Zero deductible</p>
                      </div>
                    </div>
                  </Card>
                </div>
                
                {/* Floating explanation card */}
                <div className="absolute bottom-20 left-0 max-w-xs animate-float" style={{ animationDelay: "-2s" }}>
                  <Card className="p-4 bg-foreground text-background border-0 shadow-xl">
                    <p className="text-sm font-medium mb-2">💡 Why this plan?</p>
                    <p className="text-xs opacity-80">Based on your family size and health needs, this covers 94% of common medical expenses.</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features - Bento Grid */}
        <section className="py-24 bg-card relative">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <Badge variant="muted" className="mb-4">How It's Different</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Insurance comparison,{" "}
                <span className="text-primary">reimagined</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We built this because we were tired of opaque recommendations and pushy salespeople.
              </p>
            </div>

            {/* Bento grid layout */}
            <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className={`group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-medium ${
                    index === 1 ? "md:col-span-1 md:row-span-2" : ""
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <CardHeader className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section - Us vs Them */}
        <section className="py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="accent" className="mb-4">The ClearCover Difference</Badge>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Why people switch to us
                </h2>
              </div>

              <div className="space-y-4">
                {comparisonPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="grid md:grid-cols-2 gap-4 animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Card className="p-5 bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <p className="text-foreground font-medium">{point.us}</p>
                      </div>
                    </Card>
                    <Card className="p-5 bg-muted/50 border-muted hover:bg-muted transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-muted-foreground/20 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-muted-foreground text-sm">✕</span>
                        </div>
                        <p className="text-muted-foreground">{point.them}</p>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Types - Large interactive cards */}
        <section className="py-24 bg-card">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge variant="muted" className="mb-4">Get Started</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What would you like to protect?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Link to="/compare" className="group">
                <Card className="relative h-64 overflow-hidden border-2 border-transparent hover:border-primary/30 transition-all duration-500 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="relative h-full flex flex-col justify-between p-8">
                    <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Heart className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Health Insurance</h3>
                      <p className="text-muted-foreground">Coverage for you and your family's medical needs</p>
                    </div>
                    <ArrowRight className="absolute bottom-8 right-8 h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all" />
                  </CardContent>
                </Card>
              </Link>

              <Link to="/compare" className="group">
                <Card className="relative h-64 overflow-hidden border-2 border-transparent hover:border-secondary/30 transition-all duration-500 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="relative h-full flex flex-col justify-between p-8">
                    <div className="w-16 h-16 rounded-2xl gradient-warm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Car className="h-8 w-8 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-secondary transition-colors">Car Insurance</h3>
                      <p className="text-muted-foreground">Drive with confidence and full protection</p>
                    </div>
                    <ArrowRight className="absolute bottom-8 right-8 h-6 w-6 text-muted-foreground group-hover:text-secondary group-hover:translate-x-2 transition-all" />
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* User Roles - Minimal cards */}
        <section className="py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge variant="muted" className="mb-4">Built For Everyone</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">One platform, three perspectives</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Users, title: "Customers", desc: "Compare honestly, choose confidently", link: "/customer-dashboard", color: "primary" },
                { icon: Shield, title: "Brokers", desc: "Advise clients with transparent tools", link: "/broker-dashboard", color: "secondary" },
                { icon: Building2, title: "Insurers", desc: "Reach informed buyers directly", link: "/company-dashboard", color: "success" }
              ].map((role, index) => (
                <Link to={role.link} key={index}>
                  <Card className="group h-full border-border/50 hover:border-primary/30 hover:shadow-medium transition-all duration-500">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 rounded-2xl bg-${role.color}/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
                        <role.icon className={`h-8 w-8 text-${role.color}`} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{role.title}</h3>
                      <p className="text-muted-foreground mb-6">{role.desc}</p>
                      <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                        View Dashboard <ArrowRight className="h-4 w-4 ml-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Bold and simple */}
        <section className="py-24">
          <div className="container px-4 md:px-6">
            <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden">
              <div className="absolute inset-0 gradient-hero" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
              
              <div className="relative p-12 md:p-20 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                  Ready to see insurance<br />differently?
                </h2>
                <p className="text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto">
                  Join 50,000+ people who found their perfect coverage in under 3 minutes.
                </p>
                <Link to="/compare">
                  <Button size="xl" className="bg-background text-foreground hover:bg-background/90 shadow-xl">
                    Get Started Free
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
