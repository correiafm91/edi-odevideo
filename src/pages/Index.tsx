import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import RankingsSection from "@/components/RankingsSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-editor-dark">
      <HeroSection />
      <StatsSection />
      <TestimonialsSection />
      <RankingsSection />
      <WhatsAppCTA />
    </div>
  );
};

export default Index;