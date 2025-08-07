import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MetricCards } from "@/components/dashboard/MetricCards";
import { TicketPriceComparison } from "@/components/dashboard/TicketPriceComparison";
import { RevenueAnalysis } from "@/components/dashboard/RevenueAnalysis";
import { FanEngagement } from "@/components/dashboard/FanEngagement";
import { TeamPerformance } from "@/components/dashboard/TeamPerformance";
import { ProjectionsAnalysis } from "@/components/dashboard/ProjectionsAnalysis";
import { StrategicInsights } from "@/components/dashboard/StrategicInsights";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <MetricCards />
        
        <TeamPerformance />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TicketPriceComparison />
          <RevenueAnalysis />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FanEngagement />
          <StrategicInsights />
        </div>
        
        <ProjectionsAnalysis />
      </main>
    </div>
  );
};

export default Index;