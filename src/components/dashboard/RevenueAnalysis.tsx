import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const revenueData = [
  { month: "Aug", ticketSales: 12.5, merchandise: 3.2, sponsorships: 8.1, total: 23.8, year: "2024" },
  { month: "Sep", ticketSales: 18.3, merchandise: 5.4, sponsorships: 11.2, total: 34.9, year: "2024" },
  { month: "Oct", ticketSales: 22.1, merchandise: 7.8, sponsorships: 13.5, total: 43.4, year: "2024" },
  { month: "Nov", ticketSales: 24.7, merchandise: 8.9, sponsorships: 14.8, total: 48.4, year: "2024" },
  { month: "Dec", ticketSales: 28.2, merchandise: 12.1, sponsorships: 16.2, total: 56.5, year: "2024" },
  { month: "Jan*", ticketSales: 35.4, merchandise: 15.8, sponsorships: 18.9, total: 70.1, year: "2024 Playoffs" },
];

export const RevenueAnalysis = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-foreground">Revenue Stream Analysis</CardTitle>
        <CardDescription>
          Monthly revenue breakdown by category (in millions USD)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip 
              formatter={(value, name) => [`$${value}M`, name]}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="ticketSales" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              name="Ticket Sales"
              dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="merchandise" 
              stroke="hsl(var(--secondary))" 
              strokeWidth={3}
              name="Merchandise"
              dot={{ fill: "hsl(var(--secondary))", strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="sponsorships" 
              stroke="hsl(var(--chart-3))" 
              strokeWidth={3}
              name="Sponsorships"
              dot={{ fill: "hsl(var(--chart-3))", strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-primary/10 rounded-lg">
            <p className="text-sm text-primary font-medium">Playoff Revenue Spike</p>
            <p className="text-lg font-bold text-primary">$35.4M</p>
            <p className="text-xs text-muted-foreground">January playoffs (tickets)</p>
          </div>
          <div className="text-center p-3 bg-secondary/10 rounded-lg">
            <p className="text-sm text-secondary-foreground font-medium">Merchandise Surge</p>
            <p className="text-lg font-bold text-secondary-foreground">+278%</p>
            <p className="text-xs text-muted-foreground">Playoff merchandise vs 2023</p>
          </div>
          <div className="text-center p-3 bg-success/10 rounded-lg">
            <p className="text-sm text-success font-medium">Total Season Revenue</p>
            <p className="text-lg font-bold text-success">$277.5M</p>
            <p className="text-xs text-muted-foreground">Including playoff run</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};