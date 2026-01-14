import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowLeft, ArrowRight, HelpCircle, Lightbulb } from "lucide-react";

interface Question {
  id: string;
  title: string;
  description: string;
  helpText: string;
  type: "radio" | "input" | "number";
  options?: { value: string; label: string; description?: string }[];
  placeholder?: string;
}

const healthQuestions: Question[] = [
  {
    id: "coverage",
    title: "Who needs to be covered?",
    description: "This helps us find the right plan size for you.",
    helpText: "Family plans often offer better value if you're covering multiple people. Individual plans are simpler if it's just for you.",
    type: "radio",
    options: [
      { value: "individual", label: "Just me", description: "Individual coverage" },
      { value: "couple", label: "Me and my partner", description: "Couples coverage" },
      { value: "family", label: "My family", description: "Family coverage" }
    ]
  },
  {
    id: "age",
    title: "What is your age?",
    description: "Age affects premium costs and available plans.",
    helpText: "Insurance premiums typically increase with age. Being accurate helps us show you real pricing.",
    type: "number",
    placeholder: "Enter your age"
  },
  {
    id: "health_status",
    title: "How would you describe your current health?",
    description: "This helps match you with appropriate coverage levels.",
    helpText: "Pre-existing conditions may affect some plans. Being honest helps us find plans that truly cover your needs.",
    type: "radio",
    options: [
      { value: "excellent", label: "Excellent", description: "Rarely need medical care" },
      { value: "good", label: "Good", description: "Occasional doctor visits" },
      { value: "fair", label: "Fair", description: "Regular medical needs" },
      { value: "chronic", label: "I have chronic conditions", description: "Ongoing treatment needs" }
    ]
  },
  {
    id: "priority",
    title: "What's most important to you?",
    description: "This shapes our recommendations.",
    helpText: "There's no wrong answer. This helps us prioritize what matters most to you in the comparison.",
    type: "radio",
    options: [
      { value: "price", label: "Lowest monthly cost", description: "Budget-focused" },
      { value: "coverage", label: "Best coverage", description: "Maximum protection" },
      { value: "balanced", label: "Balanced option", description: "Good value for money" }
    ]
  }
];

const carQuestions: Question[] = [
  {
    id: "vehicle_type",
    title: "What type of vehicle do you drive?",
    description: "Different vehicles have different insurance needs.",
    helpText: "The type, age, and value of your vehicle affects your premium and coverage options.",
    type: "radio",
    options: [
      { value: "sedan", label: "Sedan/Compact", description: "Standard passenger car" },
      { value: "suv", label: "SUV/Crossover", description: "Sport utility or crossover" },
      { value: "truck", label: "Truck/Van", description: "Pickup or commercial vehicle" },
      { value: "luxury", label: "Luxury/Sports", description: "High-value vehicles" }
    ]
  },
  {
    id: "usage",
    title: "How do you primarily use your vehicle?",
    description: "Usage patterns affect your risk profile.",
    helpText: "Commuting daily involves more risk than occasional weekend use. This affects your premium.",
    type: "radio",
    options: [
      { value: "commute", label: "Daily commute", description: "Regular work travel" },
      { value: "occasional", label: "Occasional use", description: "Weekends and errands" },
      { value: "business", label: "Business use", description: "Work-related driving" }
    ]
  },
  {
    id: "driving_history",
    title: "How is your driving history?",
    description: "Your record impacts available rates.",
    helpText: "A clean record can qualify you for discounts. Recent incidents may affect pricing but won't disqualify you.",
    type: "radio",
    options: [
      { value: "clean", label: "Clean record", description: "No incidents in 5+ years" },
      { value: "minor", label: "Minor incidents", description: "1-2 small claims or tickets" },
      { value: "recent", label: "Recent claims", description: "Claims in past 3 years" }
    ]
  },
  {
    id: "priority",
    title: "What's most important to you?",
    description: "This shapes our recommendations.",
    helpText: "There's no wrong answer. This helps us prioritize what matters most to you in the comparison.",
    type: "radio",
    options: [
      { value: "price", label: "Lowest monthly cost", description: "Budget-focused" },
      { value: "coverage", label: "Best coverage", description: "Maximum protection" },
      { value: "balanced", label: "Balanced option", description: "Good value for money" }
    ]
  }
];

const Questionnaire = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = type === "health" ? healthQuestions : carQuestions;
  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Navigate to results with priority
      navigate(`/results/${type}?priority=${answers.priority || "balanced"}`);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate("/compare");
    }
  };

  const canProceed = answers[currentQuestion.id] && answers[currentQuestion.id].length > 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="accent">Step {currentStep + 2} of {questions.length + 1}</Badge>
                <span className="text-sm text-muted-foreground">
                  {type === "health" ? "Health Insurance" : "Car Insurance"}
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question Card */}
            <Card variant="elevated" className="mb-8">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{currentQuestion.title}</CardTitle>
                    <CardDescription className="text-base">{currentQuestion.description}</CardDescription>
                  </div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="p-2 rounded-lg hover:bg-muted transition-colors shrink-0">
                        <HelpCircle className="h-5 w-5 text-muted-foreground" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>{currentQuestion.helpText}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </CardHeader>
              <CardContent>
                {currentQuestion.type === "radio" && currentQuestion.options && (
                  <RadioGroup
                    value={answers[currentQuestion.id] || ""}
                    onValueChange={handleAnswer}
                    className="space-y-3"
                  >
                    {currentQuestion.options.map((option) => (
                      <Label
                        key={option.value}
                        htmlFor={option.value}
                        className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          answers[currentQuestion.id] === option.value
                            ? "border-primary bg-accent"
                            : "border-border hover:border-primary/50 hover:bg-muted/50"
                        }`}
                      >
                        <RadioGroupItem value={option.value} id={option.value} />
                        <div className="flex-1">
                          <div className="font-medium text-foreground">{option.label}</div>
                          {option.description && (
                            <div className="text-sm text-muted-foreground">{option.description}</div>
                          )}
                        </div>
                      </Label>
                    ))}
                  </RadioGroup>
                )}

                {(currentQuestion.type === "input" || currentQuestion.type === "number") && (
                  <Input
                    type={currentQuestion.type === "number" ? "number" : "text"}
                    placeholder={currentQuestion.placeholder}
                    value={answers[currentQuestion.id] || ""}
                    onChange={(e) => handleAnswer(e.target.value)}
                    className="h-12 text-lg"
                  />
                )}
              </CardContent>
            </Card>

            {/* Tip Card */}
            <Card variant="muted" className="mb-8">
              <CardContent className="flex items-start gap-3 p-4">
                <Lightbulb className="h-5 w-5 text-warning shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Tip:</strong> {currentQuestion.helpText}
                </p>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button variant="ghost" onClick={handleBack}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <Button 
                variant="hero" 
                onClick={handleNext}
                disabled={!canProceed}
              >
                {currentStep < questions.length - 1 ? "Continue" : "See Results"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Questionnaire;
