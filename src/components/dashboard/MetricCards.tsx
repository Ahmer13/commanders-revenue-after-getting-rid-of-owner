import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Users, Ticket, Trophy } from "lucide-react";

const metrics = [
  {
    title: "Average Ticket Price",
    value: "$147",
    change: "+32%",
    trend: "up",
    icon: Ticket,
    description: "vs 2023 season ($111)"
  },
  {
    title: "Season Revenue",
    value: "$89.2M",
    change: "+28%",
    trend: "up", 
    icon: DollarSign,
    description: "Total stadium revenue"
  },
  {
    title: "Attendance Rate",
    value: "97.8%",
    change: "+18%",
    trend: "up",
    icon: Users,
    description: "Stadium capacity filled"
  },
  {
    title: "Fan Engagement Score",
    value: "8.4/10",
    change: "+45%",
    trend: "up",
    icon: Trophy,
    description: "Social media & engagement"
  }
];

export const MetricCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{metric.value}</div>
            <div className="flex items-center space-x-2 mt-2">
              {metric.trend === "up" ? (
                <TrendingUp className="h-4 w-4 text-success" />
              ) : (
                <TrendingDown className="h-4 w-4 text-destructive" />
              )}
              <p className={`text-xs font-medium ${
                metric.trend === "up" ? "text-success" : "text-destructive"
              }`}>
                {metric.change}
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {metric.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};