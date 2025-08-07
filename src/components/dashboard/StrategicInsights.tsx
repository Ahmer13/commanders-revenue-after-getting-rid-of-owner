import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, AlertCircle, CheckCircle, Target } from "lucide-react";

const insights = [
  {
    category: "Revenue Growth",
    status: "positive",
    icon: TrendingUp,
    title: "Exceptional Financial Turnaround",
    description: "372% revenue increase from 4-13 season to playoff run - unprecedented in NFL",
    confidence: 96,
    recommendation: "Capitalize on momentum with premium season ticket packages and corporate suites"
  },
  {
    category: "Performance Correlation",
    status: "positive", 
    icon: CheckCircle,
    title: "Win-Revenue Direct Link Confirmed",
    description: "12-5 record translated to $150M+ revenue jump, validating performance-pricing model",
    confidence: 94,
    recommendation: "Implement tiered pricing based on expected win totals and playoff probability"
  },
  {
    category: "2025 Risk Assessment",
    status: "warning",
    icon: AlertCircle,
    title: "Regression Probability High",
    description: "9-10 win projection suggests 15-20% revenue decline risk if expectations aren't managed",
    confidence: 82,
    recommendation: "Lock in multi-year commitments now while brand equity is at peak"
  },
  {
    category: "Market Position",
    status: "positive",
    icon: Target,
    title: "Premium Brand Established",
    description: "Successfully transitioned from discount franchise to premium product in one season",
    confidence: 89,
    recommendation: "Maintain premium positioning even through potential on-field regression"
  }
];

export const StrategicInsights = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-foreground">Strategic Analysis & Recommendations</CardTitle>
        <CardDescription>
          Key insights and actionable recommendations for sustainable growth
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {insights.map((insight, index) => (
            <div key={index} className="border border-border rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-full ${
                  insight.status === 'positive' 
                    ? 'bg-success/10 text-success' 
                    : insight.status === 'warning'
                    ? 'bg-warning/10 text-warning'
                    : 'bg-info/10 text-info'
                }`}>
                  <insight.icon className="h-4 w-4" />
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">{insight.title}</h4>
                    <Badge 
                      variant="outline" 
                      className={
                        insight.status === 'positive' 
                          ? 'border-success text-success' 
                          : insight.status === 'warning'
                          ? 'border-warning text-warning'
                          : 'border-info text-info'
                      }
                    >
                      {insight.category}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Confidence Level</span>
                      <span className="font-medium text-foreground">{insight.confidence}%</span>
                    </div>
                    <Progress value={insight.confidence} className="h-2" />
                  </div>
                  
                  <div className="mt-3 p-3 bg-muted/50 rounded-md">
                    <p className="text-xs font-medium text-foreground mb-1">Recommendation:</p>
                    <p className="text-xs text-muted-foreground">{insight.recommendation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
          <h4 className="font-semibold text-foreground mb-2">Executive Summary</h4>
          <p className="text-sm text-foreground/80">
            The 4-13 to 12-5 transformation generated the largest single-season revenue increase in franchise history. 
            However, with expert projections of 9-10 wins in 2025, the organization must now prove that new ownership 
            and culture changes can sustain premium pricing and fan engagement beyond Daniels' rookie magic. 
            The next 12 months will determine if this was a sustainable turnaround or a temporary spike.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};