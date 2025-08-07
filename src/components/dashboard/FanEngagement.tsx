import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Badge } from "@/components/ui/badge";

const engagementData = [
  { name: "Social Media", value: 35, color: "hsl(var(--primary))" },
  { name: "Stadium Attendance", value: 28, color: "hsl(var(--secondary))" },
  { name: "TV Viewership", value: 22, color: "hsl(var(--chart-3))" },
  { name: "Merchandise Sales", value: 15, color: "hsl(var(--chart-4))" }
];

const socialMetrics = [
  { platform: "Twitter/X", followers: "2.1M", growth: "+38%" },
  { platform: "Instagram", followers: "1.8M", growth: "+42%" },
  { platform: "TikTok", followers: "950K", growth: "+127%" },
  { platform: "Facebook", followers: "3.2M", growth: "+18%" }
];

export const FanEngagement = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-foreground">Fan Engagement Metrics</CardTitle>
        <CardDescription>
          Distribution of fan interaction channels and social media growth
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Engagement Distribution</h4>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={engagementData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                  labelLine={false}
                >
                  {engagementData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Engagement Share']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Social Media Growth</h4>
            <div className="space-y-3">
              {socialMetrics.map((metric, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">{metric.platform}</p>
                    <p className="text-sm text-muted-foreground">{metric.followers} followers</p>
                  </div>
                  <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                    {metric.growth}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-accent rounded-lg">
          <p className="text-sm text-accent-foreground">
            <strong>Engagement Surge:</strong> The combination of Jayden Daniels' rookie success and new ownership 
            has driven a 45% increase in overall fan engagement, with TikTok leading social growth at 127%.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};