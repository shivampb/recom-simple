import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { useStoreContext } from "@/lib/store-context";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const OPPORTUNITIES = [
  "Product Recommendations",
  "Cart Abandonment Recovery",
  "FAQ Automation",
  "Return Policy Parsing",
  "Lead Capture Generation",
  "Social Channel Routing",
  "Order Tracking Integration",
  "Cross-sell Prompts",
  "Market Sentiment Analysis",
];

export function AnalysisSection() {
  const { storeName } = useStoreContext();
  const [progress, setProgress] = useState(0);
  const [activeItems, setActiveItems] = useState<number[]>([]);

  const getProgressMessage = (pct: number) => {
    if (pct < 12) return "Connecting to store API...";
    if (pct < 28) return "Fetching product catalog details...";
    if (pct < 45) return "Generating vector embeddings for items...";
    if (pct < 62) return "Analyzing cart abandonment triggers...";
    if (pct < 78) return "Calculating support ticket pattern metrics...";
    if (pct < 92) return "Identifying high-impact growth opportunities...";
    if (pct < 100) return "Optimizing conversational models...";
    return "Analysis complete";
  };

  useEffect(() => {
    setProgress(0);
    setActiveItems([]);
    
    let currentProgress = 0;
    let timer: any;

    const tick = () => {
      let increment = 1;
      let delay = 100;

      if (currentProgress < 20) {
        // Fast start: takes ~800ms
        increment = 2; 
        delay = 80;
      } else if (currentProgress < 50) {
        // Medium loading catalogs: takes ~2400ms
        increment = Math.random() > 0.5 ? 2 : 1; 
        delay = 120;
      } else if (currentProgress < 75) {
        // Heavy processing (vectors, support logs): takes ~3300ms
        increment = Math.random() > 0.85 ? 2 : 1;
        delay = 150;
      } else if (currentProgress < 90) {
        // The "realistic stutter" near 80-88%: takes ~2750ms
        increment = Math.random() > 0.4 ? 1 : 0;
        delay = 110;
      } else {
        // Fast finish: takes ~750ms
        increment = Math.random() > 0.5 ? 3 : 2;
        delay = 190;
      }

      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);

      const itemsToShow = Math.floor((currentProgress / 100) * OPPORTUNITIES.length);
      setActiveItems(Array.from({ length: itemsToShow }, (_, i) => i));

      if (currentProgress < 100) {
        timer = setTimeout(tick, delay);
      } else {
        setTimeout(() => {
          document.getElementById("conversion-section")?.scrollIntoView({ behavior: "smooth" });
        }, 1000);
      }
    };

    timer = setTimeout(tick, 200);

    return () => clearTimeout(timer);
  }, [storeName]);

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Your Store at a Glance
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
            ReComAI has analyzed{" "}
            <span className="font-semibold text-foreground">{storeName}</span> and identified{" "}
            <span className="font-semibold text-foreground">9 growth opportunities</span>.
          </p>
        </motion.div>

        <Card className="p-4 sm:p-8 shadow-lg border-primary/10 bg-white/50 backdrop-blur-sm">
          <div className="mb-6 sm:mb-8">
            <div className="flex justify-between items-center mb-2 text-sm font-medium">
              <span className="text-muted-foreground flex items-center gap-2">
                {progress < 100 ? (
                  <Loader2 className="w-4 h-4 animate-spin text-primary" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                )}
                <span className="text-xs sm:text-sm font-medium tracking-wide transition-all duration-300">
                  {getProgressMessage(progress)}
                </span>
              </span>
              <span className="text-primary font-bold">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2 bg-primary/10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
            <AnimatePresence>
              {OPPORTUNITIES.map((opp, index) => (
                <motion.div
                  key={opp}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: activeItems.includes(index) ? 1 : 0.3,
                    y: 0,
                    scale: activeItems.includes(index) ? 1 : 0.95,
                  }}
                  className={`flex items-center gap-3 p-2.5 sm:p-3 rounded-lg border ${
                    activeItems.includes(index)
                      ? "bg-white border-primary/20 shadow-sm"
                      : "bg-transparent border-transparent"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      activeItems.includes(index)
                        ? "bg-primary shadow-[0_0_8px_rgba(37,99,235,0.5)]"
                        : "bg-muted"
                    }`}
                  />
                  <span
                    className={`text-xs sm:text-sm ${
                      activeItems.includes(index)
                        ? "text-foreground font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    {opp}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </Card>
      </div>
    </section>
  );
}
