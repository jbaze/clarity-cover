import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles,
  MessageCircle,
  Check,
  HelpCircle
} from "lucide-react";

interface Question {
  id: string;
  title: string;
  subtitle: string;
  helpText: string;
  type: "radio" | "input" | "number";
  options?: { value: string; label: string; emoji?: string; description?: string }[];
  placeholder?: string;
}

const healthQuestions: Question[] = [
  {
    id: "coverage",
    title: "Who are we protecting today?",
    subtitle: "This helps us find the right plan size",
    helpText: "Family plans often offer better value if you're covering multiple people.",
    type: "radio",
    options: [
      { value: "individual", label: "Just me", emoji: "👤", description: "Solo coverage" },
      { value: "couple", label: "Me + partner", emoji: "👥", description: "Couples plan" },
      { value: "family", label: "My family", emoji: "👨‍👩‍👧‍👦", description: "Full family coverage" }
    ]
  },
  {
    id: "age",
    title: "How young are you feeling?",
    subtitle: "Your age helps us find age-appropriate plans",
    helpText: "Insurance premiums typically vary with age. Being accurate helps us show you real pricing.",
    type: "number",
    placeholder: "Enter your age"
  },
  {
    id: "health_status",
    title: "How's your health journey going?",
    subtitle: "No judgment—this helps match coverage levels",
    helpText: "Being honest helps us find plans that truly cover your needs.",
    type: "radio",
    options: [
      { value: "excellent", label: "Excellent", emoji: "💪", description: "Rarely need medical care" },
      { value: "good", label: "Good", emoji: "😊", description: "Occasional doctor visits" },
      { value: "fair", label: "Fair", emoji: "🩺", description: "Regular medical needs" },
      { value: "chronic", label: "Managing conditions", emoji: "💊", description: "Ongoing treatment" }
    ]
  },
  {
    id: "priority",
    title: "What matters most to you?",
    subtitle: "This shapes our recommendations",
    helpText: "There's no wrong answer—we'll prioritize what matters to you.",
    type: "radio",
    options: [
      { value: "price", label: "Save money", emoji: "💰", description: "Lowest monthly cost" },
      { value: "coverage", label: "Maximum protection", emoji: "🛡️", description: "Best coverage possible" },
      { value: "balanced", label: "Best value", emoji: "⚖️", description: "Good balance of both" }
    ]
  }
];

const carQuestions: Question[] = [
  {
    id: "vehicle_type",
    title: "What are you driving?",
    subtitle: "Different vehicles have different insurance needs",
    helpText: "The type and value of your vehicle affects your coverage options.",
    type: "radio",
    options: [
      { value: "sedan", label: "Sedan", emoji: "🚗", description: "Standard car" },
      { value: "suv", label: "SUV", emoji: "🚙", description: "Sport utility" },
      { value: "truck", label: "Truck", emoji: "🛻", description: "Pickup or van" },
      { value: "luxury", label: "Luxury", emoji: "🏎️", description: "High-value vehicle" }
    ]
  },
  {
    id: "usage",
    title: "How do you use your car?",
    subtitle: "Usage patterns affect your coverage needs",
    helpText: "Commuting daily involves more risk than occasional weekend use.",
    type: "radio",
    options: [
      { value: "commute", label: "Daily commute", emoji: "🏢", description: "Work travel" },
      { value: "occasional", label: "Weekend warrior", emoji: "🌴", description: "Occasional use" },
      { value: "business", label: "Business use", emoji: "💼", description: "Work-related" }
    ]
  },
  {
    id: "driving_history",
    title: "How's your driving record?",
    subtitle: "Your history impacts available rates",
    helpText: "A clean record can qualify you for discounts.",
    type: "radio",
    options: [
      { value: "clean", label: "Spotless", emoji: "✨", description: "No incidents in 5+ years" },
      { value: "minor", label: "Minor bumps", emoji: "🔧", description: "1-2 small incidents" },
      { value: "recent", label: "Recent claims", emoji: "📋", description: "Claims in past 3 years" }
    ]
  },
  {
    id: "priority",
    title: "What matters most to you?",
    subtitle: "This shapes our recommendations",
    helpText: "There's no wrong answer—we'll prioritize what matters to you.",
    type: "radio",
    options: [
      { value: "price", label: "Save money", emoji: "💰", description: "Lowest monthly cost" },
      { value: "coverage", label: "Maximum protection", emoji: "🛡️", description: "Best coverage possible" },
      { value: "balanced", label: "Best value", emoji: "⚖️", description: "Good balance of both" }
    ]
  }
];

const Questionnaire = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isAnimating, setIsAnimating] = useState(false);
  const [showTip, setShowTip] = useState(false);

  const questions = type === "health" ? healthQuestions : carQuestions;
  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  useEffect(() => {
    setShowTip(false);
    const timer = setTimeout(() => setShowTip(true), 1500);
    return () => clearTimeout(timer);
  }, [currentStep]);

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsAnimating(false);
      }, 300);
    } else {
      navigate(`/results/${type}?priority=${answers.priority || "balanced"}`);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsAnimating(false);
      }, 300);
    } else {
      navigate("/compare");
    }
  };

  const canProceed = answers[currentQuestion.id] && answers[currentQuestion.id].length > 0;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 relative">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-20 left-[10%] w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />
        </div>

        <div className="container relative px-4 md:px-6 py-8 md:py-12">
          <div className="max-w-2xl mx-auto">
            {/* Progress header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="accent" className="gap-2">
                  <Sparkles className="h-3 w-3" />
                  {type === "health" ? "Health Insurance" : "Car Insurance"}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Question {currentStep + 1} of {questions.length}
                </span>
              </div>
              
              {/* Custom progress bar */}
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
                {/* Progress dots */}
                <div className="absolute inset-0 flex items-center justify-between px-[2px]">
                  {questions.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                        idx <= currentStep 
                          ? "bg-primary border-primary" 
                          : "bg-background border-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Question content - Chat-like interface */}
            <div className={`transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
              {/* AI Assistant message */}
              <div className="flex items-start gap-3 mb-8">
                <div className="w-10 h-10 rounded-2xl gradient-hero flex items-center justify-center shrink-0">
                  <MessageCircle className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="flex-1 space-y-1">
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                    {currentQuestion.title}
                  </h1>
                  <p className="text-muted-foreground">
                    {currentQuestion.subtitle}
                  </p>
                </div>
              </div>

              {/* Answer options */}
              <div className="ml-13 space-y-3 mb-8">
                {currentQuestion.type === "radio" && currentQuestion.options && (
                  <div className="grid gap-3">
                    {currentQuestion.options.map((option, idx) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(option.value)}
                        className={`group relative w-full p-4 rounded-2xl border-2 text-left transition-all duration-300 hover:scale-[1.02] ${
                          answers[currentQuestion.id] === option.value
                            ? "border-primary bg-primary/5 shadow-md"
                            : "border-border hover:border-primary/50 bg-card hover:bg-accent/50"
                        }`}
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-2xl">{option.emoji}</span>
                          <div className="flex-1">
                            <div className="font-semibold text-foreground">{option.label}</div>
                            {option.description && (
                              <div className="text-sm text-muted-foreground">{option.description}</div>
                            )}
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                            answers[currentQuestion.id] === option.value
                              ? "border-primary bg-primary"
                              : "border-muted-foreground/30"
                          }`}>
                            {answers[currentQuestion.id] === option.value && (
                              <Check className="h-4 w-4 text-primary-foreground" />
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {(currentQuestion.type === "input" || currentQuestion.type === "number") && (
                  <div className="relative">
                    <Input
                      type={currentQuestion.type === "number" ? "number" : "text"}
                      placeholder={currentQuestion.placeholder}
                      value={answers[currentQuestion.id] || ""}
                      onChange={(e) => handleAnswer(e.target.value)}
                      className="h-14 text-lg pl-5 pr-12 rounded-2xl border-2 focus:border-primary transition-colors"
                    />
                    {answers[currentQuestion.id] && (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Check className="h-4 w-4 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Helpful tip - appears with delay */}
              <div className={`ml-13 transition-all duration-500 ${showTip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                <Card className="bg-accent/50 border-accent">
                  <CardContent className="flex items-start gap-3 p-4">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Tip:</strong> {currentQuestion.helpText}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Navigation - Fixed at bottom on mobile */}
            <div className="mt-12 flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={handleBack}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              
              <Button 
                variant="hero" 
                size="lg"
                onClick={handleNext}
                disabled={!canProceed}
                className="gap-2 min-w-[140px]"
              >
                {currentStep < questions.length - 1 ? (
                  <>
                    Continue
                    <ArrowRight className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    See Results
                    <Sparkles className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>

            {/* Keyboard hint */}
            <p className="text-center text-xs text-muted-foreground mt-8">
              Press <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs font-mono">Enter</kbd> to continue
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Questionnaire;
