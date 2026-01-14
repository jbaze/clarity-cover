import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  FileText, 
  Clock, 
  CheckCircle, 
  Search,
  MessageSquare,
  Phone,
  Mail,
  MoreHorizontal
} from "lucide-react";

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  activePolicies: number;
  pendingRequests: number;
  lastContact: string;
}

interface Request {
  id: string;
  clientName: string;
  insuranceType: string;
  planName: string;
  status: "new" | "reviewing" | "waiting_signature" | "completed";
  submittedAt: string;
  priority: "high" | "normal";
}

const clients: Client[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 (555) 123-4567",
    activePolicies: 2,
    pendingRequests: 1,
    lastContact: "2026-01-12"
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "m.chen@email.com",
    phone: "+1 (555) 234-5678",
    activePolicies: 1,
    pendingRequests: 0,
    lastContact: "2026-01-10"
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    email: "emily.r@email.com",
    phone: "+1 (555) 345-6789",
    activePolicies: 0,
    pendingRequests: 2,
    lastContact: "2026-01-14"
  }
];

const requests: Request[] = [
  {
    id: "1",
    clientName: "Sarah Johnson",
    insuranceType: "Car",
    planName: "Smart Driver",
    status: "waiting_signature",
    submittedAt: "2026-01-12",
    priority: "high"
  },
  {
    id: "2",
    clientName: "Emily Rodriguez",
    insuranceType: "Health",
    planName: "Complete Care Plus",
    status: "new",
    submittedAt: "2026-01-14",
    priority: "high"
  },
  {
    id: "3",
    clientName: "Emily Rodriguez",
    insuranceType: "Health",
    planName: "Smart Health",
    status: "reviewing",
    submittedAt: "2026-01-13",
    priority: "normal"
  }
];

const BrokerDashboard = () => {
  const getStatusBadge = (status: Request["status"]) => {
    switch (status) {
      case "new":
        return <Badge variant="info">New</Badge>;
      case "reviewing":
        return <Badge variant="warning">Reviewing</Badge>;
      case "waiting_signature":
        return <Badge variant="accent">Waiting Signature</Badge>;
      case "completed":
        return <Badge variant="success">Completed</Badge>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Header />
      
      <main className="flex-1 py-8 md:py-12">
        <div className="container px-4 md:px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">Broker Dashboard</h1>
            <p className="text-muted-foreground">Manage clients and insurance requests</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card variant="default">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{clients.length}</div>
                    <div className="text-xs text-muted-foreground">Total Clients</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card variant="default">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-warning" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      {requests.filter(r => r.status !== "completed").length}
                    </div>
                    <div className="text-xs text-muted-foreground">Active Requests</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card variant="default">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-info/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-info" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      {requests.filter(r => r.status === "new").length}
                    </div>
                    <div className="text-xs text-muted-foreground">New Requests</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card variant="default">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">12</div>
                    <div className="text-xs text-muted-foreground">This Month</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Active Requests */}
            <div className="lg:col-span-2">
              <Card variant="elevated">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Active Requests</CardTitle>
                      <CardDescription>Insurance requests requiring attention</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">View All</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {requests.map((request) => (
                      <div 
                        key={request.id} 
                        className={`p-4 rounded-xl border ${
                          request.priority === "high" ? "border-l-4 border-l-secondary" : ""
                        } bg-muted/30`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-medium text-foreground">{request.clientName}</h4>
                              {getStatusBadge(request.status)}
                              {request.priority === "high" && (
                                <Badge variant="secondary" className="text-xs">Priority</Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {request.insuranceType} • {request.planName}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Submitted {new Date(request.submittedAt).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="soft" size="sm">
                              <MessageSquare className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Client List */}
            <div>
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Clients</CardTitle>
                  <div className="relative mt-2">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search clients..." className="pl-9" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {clients.map((client) => (
                      <div key={client.id} className="p-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-medium text-foreground">{client.name}</h4>
                            <p className="text-xs text-muted-foreground">{client.email}</p>
                          </div>
                          {client.pendingRequests > 0 && (
                            <Badge variant="warning" className="text-xs">
                              {client.pendingRequests} pending
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{client.activePolicies} policies</span>
                          <span>Last contact: {new Date(client.lastContact).toLocaleDateString()}</span>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            <Phone className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            <Mail className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            <MessageSquare className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BrokerDashboard;
