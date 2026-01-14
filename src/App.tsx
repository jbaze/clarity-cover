import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Compare from "./pages/Compare";
import Questionnaire from "./pages/Questionnaire";
import Results from "./pages/Results";
import Confirmation from "./pages/Confirmation";
import CustomerDashboard from "./pages/CustomerDashboard";
import BrokerDashboard from "./pages/BrokerDashboard";
import CompanyDashboard from "./pages/CompanyDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/questionnaire/:type" element={<Questionnaire />} />
          <Route path="/results/:type" element={<Results />} />
          <Route path="/confirmation/:type/:planId" element={<Confirmation />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          <Route path="/broker-dashboard" element={<BrokerDashboard />} />
          <Route path="/company-dashboard" element={<CompanyDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
