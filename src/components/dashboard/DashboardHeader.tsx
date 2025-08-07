import { Card } from "@/components/ui/card";

export const DashboardHeader = () => {
  return (
    <div className="bg-gradient-to-r from-primary via-primary to-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
            Washington Commanders
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
            Revenue Impact Analysis: Jayden Daniels Era & New Ownership
          </p>
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            Comprehensive financial analysis of ticket prices, fan engagement, and revenue streams 
            comparing the Dan Snyder era to the current season under new leadership
          </p>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <div className="p-4 text-center">
              <p className="text-sm text-primary-foreground/80">Analysis Period</p>
              <p className="text-lg font-semibold text-primary-foreground">2023-2024 Season</p>
            </div>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <div className="p-4 text-center">
              <p className="text-sm text-primary-foreground/80">Key Variables</p>
              <p className="text-lg font-semibold text-primary-foreground">QB + Ownership Change</p>
            </div>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <div className="p-4 text-center">
              <p className="text-sm text-primary-foreground/80">Focus Areas</p>
              <p className="text-lg font-semibold text-primary-foreground">Revenue & Engagement</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};