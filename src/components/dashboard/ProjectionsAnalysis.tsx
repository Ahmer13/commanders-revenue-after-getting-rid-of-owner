import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, AlertTriangle, Target } from "lucide-react";

const projectionData = [
  { 
    scenario: "Conservative (8-9 wins)", 
    ticketRevenue: 82.5, 
    merchandise: 24.8, 
    sponsorships: 45.2, 
    total: 152.5,
    probability: 35
  },
  { 
    scenario: "Expected (9-10 wins)", 
    ticketRevenue: 91.3, 
    merchandise: 28.4, 
    sponsorships: 52.8, 
    total: 172.5,
    probability: 45
  },
  { 
    scenario: "Optimistic (11+ wins)", 
    ticketRevenue: 105.7, 
    merchandise: 34.2, 
    sponsorships: 62.1, 
    total: 202.0,
    probability: 20
  }
];

const strategicRecommendations = [
  {
    title: "Season Ticket Retention Strategy",
    priority: "High",
    icon: Target,
    description: "Lock in current fans with multi-year packages before potential regression",
    timeline: "Q1 2025",
    impact: "+$15-20M guaranteed revenue"
  },
  {
    title: "Diversified Revenue Streams", 
    priority: "Medium",
    icon: TrendingUp,
    description: "Reduce dependency on win-loss record through experiences and partnerships",
    timeline: "Q2-Q3 2025",
    impact: "+$8-12M recurring revenue"
  },
  {
    title: "Brand Consolidation",
    priority: "High", 
    icon: AlertTriangle,
    description: "Establish identity beyond Daniels to weather potential sophomore slump",
    timeline: "Ongoing",
    impact: "Risk mitigation valued at $25M+"
  }
];

export const ProjectionsAnalysis = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-foreground">2025 Revenue Projections</CardTitle>
          <CardDescription>
            Three scenarios based on team performance and market conditions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={projectionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="scenario" 
                tick={{ fontSize: 10 }}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value}M`, 'Revenue']} />
              <Legend />
              <Area
                type="monotone"
                dataKey="ticketRevenue"
                stackId="1"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.6}
                name="Ticket Revenue"
              />
              <Area
                type="monotone"
                dataKey="merchandise"
                stackId="1"
                stroke="hsl(var(--secondary))"
                fill="hsl(var(--secondary))"
                fillOpacity={0.6}
                name="Merchandise"
              />
              <Area
                type="monotone"
                dataKey="sponsorships"
                stackId="1"
                stroke="hsl(var(--chart-3))"
                fill="hsl(var(--chart-3))"
                fillOpacity={0.6}
                name="Sponsorships"
              />
            </AreaChart>
          </ResponsiveContainer>
          
          <div className="mt-4 space-y-2">
            {projectionData.map((scenario, index) => (
              <div key={index} className="flex justify-between items-center p-2 bg-muted/50 rounded">
                <span className="text-sm font-medium text-foreground">{scenario.scenario}</span>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">{scenario.probability}% likely</Badge>
                  <span className="text-sm font-bold text-foreground">${scenario.total}M</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-foreground">Strategic Recommendations</CardTitle>
          <CardDescription>
            Action items to maximize revenue sustainability regardless of on-field performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {strategicRecommendations.map((rec, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-full ${
                    rec.priority === 'High' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-secondary/10 text-secondary'
                  }`}>
                    <rec.icon className="h-4 w-4" />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-foreground text-sm">{rec.title}</h4>
                      <Badge 
                        variant={rec.priority === 'High' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {rec.priority}
                      </Badge>
                    </div>
                    
                    <p className="text-xs text-muted-foreground">{rec.description}</p>
                    
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-muted-foreground">{rec.timeline}</span>
                      <span className="font-medium text-success">{rec.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
            <h4 className="font-semibold text-foreground mb-2">Risk Assessment</h4>
            <p className="text-sm text-foreground/80">
              With experts projecting 9-10 wins in 2025 (vs. 12-5 in 2024), the Commanders face the classic 
              "post-success challenge." Implementing these strategies now, during peak momentum, ensures 
              sustainable revenue growth even if performance regresses toward historical averages.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};