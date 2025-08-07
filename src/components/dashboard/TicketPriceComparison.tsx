import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const ticketData = [
  {
    category: "Lower Bowl",
    snyder2023: 180,
    newOwnership2024: 285,
    projected2025: 275,
  },
  {
    category: "Upper Bowl", 
    snyder2023: 75,
    newOwnership2024: 125,
    projected2025: 115,
  },
  {
    category: "Club Level",
    snyder2023: 220,
    newOwnership2024: 385,
    projected2025: 365,
  },
  {
    category: "Premium Suites",
    snyder2023: 450,
    newOwnership2024: 795,
    projected2025: 750,
  },
  {
    category: "Standing Room",
    snyder2023: 45,
    newOwnership2024: 85,
    projected2025: 80,
  }
];

export const TicketPriceComparison = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-foreground">Ticket Price Analysis</CardTitle>
        <CardDescription>
          Ticket price evolution: 4-13 season (2023) vs. 12-5 playoff season (2024) vs. 2025 projections
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ticketData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="category" 
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip 
              formatter={(value, name) => [
                `$${value}`, 
                name === 'snyder2023' ? '2023 (4-13)' : 
                name === 'newOwnership2024' ? '2024 (12-5)' : '2025 Projection'
              ]}
            />
            <Legend />
            <Bar 
              dataKey="snyder2023" 
              fill="hsl(var(--muted-foreground))" 
              name="2023 (4-13)"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="newOwnership2024" 
              fill="hsl(var(--primary))" 
              name="2024 (12-5)"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="projected2025" 
              fill="hsl(var(--secondary))" 
              name="2025 Projection"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 p-4 bg-accent rounded-lg">
          <p className="text-sm text-accent-foreground">
            <strong>Performance Impact:</strong> Playoff run drove 49% average price increase. 
            Premium suites saw 77% jump ($450→$795) as corporate demand surged. 
            2025 projections show 5-8% moderation despite 9-10 win expectations.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};