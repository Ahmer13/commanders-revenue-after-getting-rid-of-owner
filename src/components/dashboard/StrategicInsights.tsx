import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, AlertCircle, CheckCircle, Target } from "lucide-react";

const insights = [
  {
    category: "Revenue Growth",
    status: "positive",
    icon: TrendingUp,
    title: "Strong Financial Performance",
    description: "28% revenue increase driven by premium ticket demand and new sponsorship deals",
    confidence: 92,
    recommendation: "Continue investing in fan experience and stadium amenities"
  },
  {
    category: "Brand Positioning",
    status: "positive", 
    icon: CheckCircle,
    title: "Successful Rebranding",
    description: "New ownership has successfully distanced from previous negative associations",
    confidence: 88,
    recommendation: "Leverage positive momentum for long-term partnerships"
  },
  {
    category: "Market Risk",
    status: "warning",
    icon: AlertCircle,
    title: "Sustainability Concerns",
    description: "Current growth may be hype-driven; need sustainable competitive performance",
    confidence: 75,
    recommendation: "Develop 3-year retention strategy independent of rookie QB performance"
  },
  {
    category: "Future Outlook",
    status: "neutral",
    icon: Target,
    title: "Growth Potential",
    description: "Strong foundation for continued expansion with proper strategic planning",
    confidence: 85,
    recommendation: "Focus on season ticket renewals and corporate partnerships"
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
            The Washington Commanders have successfully leveraged new ownership and Jayden Daniels' impact 
            to achieve significant revenue growth. While current metrics are positive, long-term sustainability 
            requires strategic focus on fan retention, competitive performance, and brand consistency beyond 
            the initial excitement period.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};