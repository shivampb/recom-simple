import { useStoreContext } from "@/lib/store-context";
import { SharedNav } from "@/components/shared-nav";
import { SharedFooter } from "@/components/shared-footer";
import { HeroSection } from "@/components/hero-section";
import { AnalysisSection } from "@/components/analysis-section";
import { ConversionSection } from "@/components/conversion-section";
import { FeaturesSection } from "@/components/features-section";
import { DashboardSection } from "@/components/dashboard-section";
import { ImpactSection } from "@/components/impact-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  const { url } = useStoreContext();

  return (
    <main className="min-h-screen bg-background overflow-x-hidden font-sans">
      <div className="landing-root">
        <SharedNav />
      </div>
      <HeroSection />
      {url && (
        <>
          <div id="analysis">
            <AnalysisSection />
          </div>
          <ConversionSection />
          <FeaturesSection />
          <DashboardSection />
          <ImpactSection />
        </>
      )}
      <div className="landing-root">
        <SharedFooter />
      </div>
    </main>
  );
}
