import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Users, Ticket, Trophy } from "lucide-react";

const metrics = [
  {
    title: "Season Record Improvement",
    value: "12-5",
    change: "+200%",
    trend: "up",
    icon: Trophy,
    description: "vs 2023 season (4-13)"
  },
  {
    title: "Average Ticket Price",
    value: "$165",
    change: "+49%",
    trend: "up",
    icon: Ticket,
    description: "vs 2023 season ($111)"
  },
  {
    title: "Season Revenue",
    value: "$127.4M",
    change: "+58%",
    trend: "up", 
    icon: DollarSign,
    description: "Playoff run impact"
  },
  {
    title: "Attendance Rate",
    value: "99.2%",
    change: "+31%",
    trend: "up",
    icon: Users,
    description: "Playoff atmosphere"
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