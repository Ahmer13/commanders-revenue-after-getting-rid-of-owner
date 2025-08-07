import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const revenueData = [
  { month: "Aug", ticketSales: 12.5, merchandise: 3.2, sponsorships: 8.1, total: 23.8 },
  { month: "Sep", ticketSales: 15.8, merchandise: 4.1, sponsorships: 9.2, total: 29.1 },
  { month: "Oct", ticketSales: 18.2, merchandise: 5.3, sponsorships: 10.5, total: 34.0 },
  { month: "Nov", ticketSales: 16.9, merchandise: 4.8, sponsorships: 9.8, total: 31.5 },
  { month: "Dec", ticketSales: 19.4, merchandise: 6.2, sponsorships: 11.1, total: 36.7 },
  { month: "Jan", ticketSales: 14.2, merchandise: 4.5, sponsorships: 8.9, total: 27.6 },
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
            <p className="text-sm text-primary font-medium">Ticket Sales Peak</p>
            <p className="text-lg font-bold text-primary">$19.4M</p>
            <p className="text-xs text-muted-foreground">December 2024</p>
          </div>
          <div className="text-center p-3 bg-secondary/10 rounded-lg">
            <p className="text-sm text-secondary-foreground font-medium">Merchandise Growth</p>
            <p className="text-lg font-bold text-secondary-foreground">+94%</p>
            <p className="text-xs text-muted-foreground">vs previous year</p>
          </div>
          <div className="text-center p-3 bg-success/10 rounded-lg">
            <p className="text-sm text-success font-medium">Sponsorship Value</p>
            <p className="text-lg font-bold text-success">$57.6M</p>
            <p className="text-xs text-muted-foreground">Total season</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};