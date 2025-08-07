import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const ticketData = [
  {
    category: "Lower Bowl",
    snyder2023: 180,
    newOwnership2024: 245,
  },
  {
    category: "Upper Bowl", 
    snyder2023: 75,
    newOwnership2024: 95,
  },
  {
    category: "Club Level",
    snyder2023: 220,
    newOwnership2024: 320,
  },
  {
    category: "Premium Suites",
    snyder2023: 450,
    newOwnership2024: 650,
  },
  {
    category: "Standing Room",
    snyder2023: 45,
    newOwnership2024: 65,
  }
];

export const TicketPriceComparison = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-foreground">Ticket Price Analysis</CardTitle>
        <CardDescription>
          Comparison of average ticket prices: Snyder era vs. New ownership with Jayden Daniels
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
                name === 'snyder2023' ? '2023 Season (Snyder)' : '2024 Season (New Era)'
              ]}
            />
            <Legend />
            <Bar 
              dataKey="snyder2023" 
              fill="hsl(var(--muted-foreground))" 
              name="2023 Season (Snyder)"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="newOwnership2024" 
              fill="hsl(var(--primary))" 
              name="2024 Season (New Era)"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 p-4 bg-accent rounded-lg">
          <p className="text-sm text-accent-foreground">
            <strong>Key Insight:</strong> Average ticket price increase of 32% across all categories, 
            with premium sections seeing the highest demand and price growth.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};