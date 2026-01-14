import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Car, ArrowRight, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const Compare = () => {
  const insuranceTypes = [
    {
      id: "health",
      icon: Heart,
      title: "Health Insurance",
      description: "Medical coverage for you and your family. Includes doctor visits, hospital stays, prescriptions, and preventive care.",
      features: ["Doctor visits", "Hospital coverage", "Prescriptions", "Preventive care"],
      helpText: "Health insurance helps pay for medical expenses. It can cover routine checkups, emergency care, and chronic conditions.",
      popular: true
    },
    {
      id: "car",
      icon: Car,
      title: "Car Insurance",
      description: "Protection for your vehicle and liability coverage. Required by law in most places.",
      features: ["Liability coverage", "Collision protection", "Theft protection", "Roadside assistance"],
      helpText: "Car insurance protects you financially if you're in an accident. It covers damage to your car and others' property."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="accent" className="mb-4">Step 1 of 4</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What type of insurance are you looking for?
            </h1>
            <p className="text-muted-foreground text-lg">
              Choose the coverage that matters most to you. Don't worry—we'll explain everything along the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {insuranceTypes.map((type) => (
              <Link to={`/questionnaire/${type.id}`} key={type.id}>
                <Card variant="interactive" className="h-full relative">
                  {type.popular && (
                    <Badge variant="secondary" className="absolute -top-3 left-6">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                        <type.icon className="h-7 w-7 text-primary" />
                      </div>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                            <HelpCircle className="h-5 w-5 text-muted-foreground" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p>{type.helpText}</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <CardTitle className="text-xl mt-4">{type.title}</CardTitle>
                    <CardDescription className="text-base">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {type.features.map((feature, index) => (
                        <Badge key={index} variant="muted">{feature}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-primary font-medium">
                      Get Started
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-12 text-center">
            <Card variant="muted" className="p-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Not sure which one you need?</strong>
                <br />
                That's okay! Many people feel the same way. You can also work with a licensed broker who can help guide you through the process for free.
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Compare;
