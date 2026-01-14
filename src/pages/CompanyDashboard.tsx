import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Package, 
  FileText, 
  Clock, 
  CheckCircle, 
  Search,
  Plus,
  TrendingUp,
  Eye,
  Edit,
  MoreHorizontal
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  type: "health" | "car";
  monthlyPrice: number;
  status: "active" | "draft" | "archived";
  applications: number;
  conversions: number;
}

interface IncomingRequest {
  id: string;
  customerName: string;
  productName: string;
  status: "new" | "under_review" | "approved" | "rejected";
  submittedAt: string;
  brokerAssigned: boolean;
}

const products: Product[] = [
  {
    id: "1",
    name: "Essential Health",
    type: "health",
    monthlyPrice: 189,
    status: "active",
    applications: 145,
    conversions: 89
  },
  {
    id: "2",
    name: "Complete Care Plus",
    type: "health",
    monthlyPrice: 349,
    status: "active",
    applications: 98,
    conversions: 72
  },
  {
    id: "3",
    name: "Smart Health",
    type: "health",
    monthlyPrice: 259,
    status: "active",
    applications: 234,
    conversions: 156
  },
  {
    id: "4",
    name: "Basic Auto",
    type: "car",
    monthlyPrice: 89,
    status: "active",
    applications: 312,
    conversions: 198
  }
];

const incomingRequests: IncomingRequest[] = [
  {
    id: "1",
    customerName: "Sarah Johnson",
    productName: "Smart Driver",
    status: "new",
    submittedAt: "2026-01-14",
    brokerAssigned: true
  },
  {
    id: "2",
    customerName: "Michael Chen",
    productName: "Essential Health",
    status: "under_review",
    submittedAt: "2026-01-13",
    brokerAssigned: true
  },
  {
    id: "3",
    customerName: "Emily Rodriguez",
    productName: "Complete Care Plus",
    status: "approved",
    submittedAt: "2026-01-12",
    brokerAssigned: false
  }
];

const CompanyDashboard = () => {
  const getStatusBadge = (status: IncomingRequest["status"]) => {
    switch (status) {
      case "new":
        return <Badge variant="info">New</Badge>;
      case "under_review":
        return <Badge variant="warning">Under Review</Badge>;
      case "approved":
        return <Badge variant="success">Approved</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>;
    }
  };

  const getProductStatusBadge = (status: Product["status"]) => {
    switch (status) {
      case "active":
        return <Badge variant="success">Active</Badge>;
      case "draft":
        return <Badge variant="muted">Draft</Badge>;
      case "archived":
        return <Badge variant="outline">Archived</Badge>;
    }
  };

  const totalApplications = products.reduce((acc, p) => acc + p.applications, 0);
  const totalConversions = products.reduce((acc, p) => acc + p.conversions, 0);
  const conversionRate = ((totalConversions / totalApplications) * 100).toFixed(1);

  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Header />
      
      <main className="flex-1 py-8 md:py-12">
        <div className="container px-4 md:px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">Insurance Company Portal</h1>
              <p className="text-muted-foreground">Manage products and customer applications</p>
            </div>
            <Button variant="hero">
              <Plus className="h-4 w-4 mr-2" />
              Add New Product
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card variant="default">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Package className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{products.length}</div>
                    <div className="text-xs text-muted-foreground">Active Products</div>
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
                    <div className="text-2xl font-bold text-foreground">{totalApplications}</div>
                    <div className="text-xs text-muted-foreground">Total Applications</div>
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
                    <div className="text-2xl font-bold text-foreground">{totalConversions}</div>
                    <div className="text-xs text-muted-foreground">Conversions</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card variant="default">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{conversionRate}%</div>
                    <div className="text-xs text-muted-foreground">Conversion Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Product Catalog */}
            <Card variant="elevated">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Product Catalog</CardTitle>
                    <CardDescription>Your insurance products on the platform</CardDescription>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-9 w-40" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {products.map((product) => (
                    <div 
                      key={product.id} 
                      className="p-4 rounded-xl border bg-muted/30"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-foreground">{product.name}</h4>
                            {getProductStatusBadge(product.status)}
                            <Badge variant="muted" className="capitalize">{product.type}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            ${product.monthlyPrice}/month
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{product.applications} applications</span>
                            <span>{product.conversions} conversions</span>
                            <span>{((product.conversions / product.applications) * 100).toFixed(0)}% rate</span>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Incoming Requests */}
            <Card variant="elevated">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Incoming Requests</CardTitle>
                    <CardDescription>Customer applications for your products</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {incomingRequests.map((request) => (
                    <div 
                      key={request.id} 
                      className={`p-4 rounded-xl border ${
                        request.status === "new" ? "border-l-4 border-l-info" : ""
                      } bg-muted/30`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-foreground">{request.customerName}</h4>
                            {getStatusBadge(request.status)}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {request.productName}
                          </p>
                          <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                            <span>{new Date(request.submittedAt).toLocaleDateString()}</span>
                            {request.brokerAssigned && (
                              <Badge variant="muted" className="text-xs">Broker Assigned</Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {request.status === "new" && (
                            <Button variant="soft" size="sm">Review</Button>
                          )}
                          {request.status === "under_review" && (
                            <>
                              <Button variant="default" size="sm">Approve</Button>
                              <Button variant="outline" size="sm">Reject</Button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CompanyDashboard;
