import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { Badge } from "@/components/ui/badge";

const performanceData = [
  { year: "2022", wins: 8, losses: 8, revenue: 65.2, fanSentiment: 4.2 },
  { year: "2023", wins: 4, losses: 13, revenue: 58.8, fanSentiment: 2.1 },
  { year: "2024", wins: 12, losses: 5, revenue: 127.4, fanSentiment: 8.7 },
  { year: "2025*", wins: 9.5, losses: 7.5, revenue: 145.2, fanSentiment: 7.8 }
];

export const TeamPerformance = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-foreground">Performance vs. Revenue Correlation</CardTitle>
        <CardDescription>
          How on-field success directly impacts financial performance and fan sentiment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis yAxisId="wins" orientation="left" domain={[0, 17]} />
                <YAxis yAxisId="revenue" orientation="right" domain={[50, 150]} />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'wins' ? `${value} wins` : `$${value}M`,
                    name === 'wins' ? 'Season Wins' : 'Revenue'
                  ]}
                />
                <ReferenceLine x="2024" stroke="hsl(var(--primary))" strokeDasharray="2 2" />
                <Line 
                  yAxisId="wins"
                  type="monotone" 
                  dataKey="wins" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 5 }}
                />
                <Line 
                  yAxisId="revenue"
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(var(--secondary))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--secondary))", strokeWidth: 2, r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Key Milestones</h4>
              <div className="space-y-3">
                <div className="p-3 bg-muted rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">2023 Low Point</span>
                    <Badge variant="destructive">4-13</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Snyder era ended, fan confidence at all-time low</p>
                </div>
                
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-primary">2024 Turnaround</span>
                    <Badge className="bg-primary text-primary-foreground">12-5</Badge>
                  </div>
                  <p className="text-xs text-primary/80 mt-1">New ownership + Jayden Daniels = Playoff berth</p>
                </div>
                
                <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-secondary-foreground">2025 Outlook</span>
                    <Badge variant="secondary">9-10*</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Projected range with tougher schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-destructive/10 rounded-lg">
            <p className="text-sm text-destructive font-medium">2023 Impact</p>
            <p className="text-lg font-bold text-destructive">-10.2%</p>
            <p className="text-xs text-muted-foreground">Revenue decline</p>
          </div>
          <div className="text-center p-3 bg-primary/10 rounded-lg">
            <p className="text-sm text-primary font-medium">2024 Surge</p>
            <p className="text-lg font-bold text-primary">+116.7%</p>
            <p className="text-xs text-muted-foreground">Revenue growth</p>
          </div>
          <div className="text-center p-3 bg-secondary/10 rounded-lg">
            <p className="text-sm text-secondary-foreground font-medium">2025 Projection</p>
            <p className="text-lg font-bold text-secondary-foreground">+14.0%</p>
            <p className="text-xs text-muted-foreground">Sustained growth</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};