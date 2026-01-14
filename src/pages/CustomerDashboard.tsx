import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Plus,
  Calendar,
  Heart,
  Car
} from "lucide-react";
import { Link } from "react-router-dom";

interface Policy {
  id: string;
  type: "health" | "car";
  name: string;
  company: string;
  status: "requested" | "pending_signature" | "active";
  monthlyPrice: number;
  expiryDate?: string;
  renewalReminder?: boolean;
}

const policies: Policy[] = [
  {
    id: "1",
    type: "health",
    name: "Smart Health",
    company: "ClearPath Insurance",
    status: "active",
    monthlyPrice: 259,
    expiryDate: "2026-03-15",
    renewalReminder: false
  },
  {
    id: "2",
    type: "car",
    name: "Smart Driver",
    company: "RoadWise Insurance",
    status: "pending_signature",
    monthlyPrice: 129
  },
  {
    id: "3",
    type: "health",
    name: "Complete Care Plus",
    company: "TrustLife Health",
    status: "requested",
    monthlyPrice: 349
  }
];

const CustomerDashboard = () => {
  const getStatusBadge = (status: Policy["status"]) => {
    switch (status) {
      case "active":
        return <Badge variant="success"><CheckCircle className="h-3 w-3 mr-1" />Active</Badge>;
      case "pending_signature":
        return <Badge variant="warning"><Clock className="h-3 w-3 mr-1" />Pending Signature</Badge>;
      case "requested":
        return <Badge variant="info"><AlertCircle className="h-3 w-3 mr-1" />Requested</Badge>;
    }
  };

  const getTypeIcon = (type: Policy["type"]) => {
    return type === "health" ? Heart : Car;
  };

  const activePolicies = policies.filter(p => p.status === "active");
  const pendingPolicies = policies.filter(p => p.status !== "active");

  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Header />
      
      <main className="flex-1 py-8 md:py-12">
        <div className="container px-4 md:px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">My Insurance</h1>
              <p className="text-muted-foreground">Manage your policies and track requests</p>
            </div>
            <Link to="/compare">
              <Button variant="hero">
                <Plus className="h-4 w-4 mr-2" />
                Add New Policy
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card variant="default">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{activePolicies.length}</div>
                    <div className="text-sm text-muted-foreground">Active Policies</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card variant="default">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-warning" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{pendingPolicies.length}</div>
                    <div className="text-sm text-muted-foreground">Pending Actions</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card variant="default">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">0</div>
                    <div className="text-sm text-muted-foreground">Upcoming Renewals</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Active Policies */}
          {activePolicies.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-foreground mb-4">Active Policies</h2>
              <div className="grid gap-4">
                {activePolicies.map((policy) => {
                  const TypeIcon = getTypeIcon(policy.type);
                  return (
                    <Card key={policy.id} variant="elevated">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                              <TypeIcon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold text-foreground">{policy.name}</h3>
                                {getStatusBadge(policy.status)}
                              </div>
                              <p className="text-sm text-muted-foreground">{policy.company}</p>
                              {policy.expiryDate && (
                                <p className="text-sm text-muted-foreground mt-1">
                                  Expires: {new Date(policy.expiryDate).toLocaleDateString()}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-foreground">${policy.monthlyPrice}</div>
                            <div className="text-sm text-muted-foreground">/month</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* Pending Actions */}
          {pendingPolicies.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">Pending Actions</h2>
              <div className="grid gap-4">
                {pendingPolicies.map((policy) => {
                  const TypeIcon = getTypeIcon(policy.type);
                  return (
                    <Card key={policy.id} variant="default" className="border-l-4 border-l-warning">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                              <TypeIcon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold text-foreground">{policy.name}</h3>
                                {getStatusBadge(policy.status)}
                              </div>
                              <p className="text-sm text-muted-foreground">{policy.company}</p>
                              <p className="text-sm text-muted-foreground">${policy.monthlyPrice}/month</p>
                            </div>
                          </div>
                          <div className="flex gap-2 md:flex-shrink-0">
                            {policy.status === "pending_signature" && (
                              <Button variant="warm" size="sm">
                                <FileText className="h-4 w-4 mr-2" />
                                Sign Documents
                              </Button>
                            )}
                            <Button variant="outline" size="sm">View Details</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CustomerDashboard;
