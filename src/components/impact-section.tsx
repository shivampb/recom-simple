import { useEffect, useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { useStoreContext } from "@/lib/store-context";
import { TrendingUp, ShoppingCart, HeadphonesIcon, Users } from "lucide-react";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function useCountUp(target: number, duration = 1600, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function MetricCard({
  icon: Icon, label, value, suffix, prefix, color, active,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  color: string;
  active: boolean;
}) {
  const count = useCountUp(value, 1600, active);
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-6 flex flex-col items-center text-center">
      <div className={`p-2.5 sm:p-3 rounded-xl ${color} mb-3`}>
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </div>
      <p className="text-3xl sm:text-4xl font-medium text-foreground mb-1">
        {prefix}{count}{suffix}
      </p>
      <p className="text-xs sm:text-sm text-muted-foreground leading-tight">{label}</p>
    </div>
  );
}

export function ImpactSection() {
  const { storeName } = useStoreContext();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const metrics = [
    { icon: ShoppingCart, label: "Add-to-Cart Rate Increase", value: 32, suffix: "%", prefix: "+", color: "bg-blue-500" },
    { icon: TrendingUp, label: "Monthly Revenue Lift", value: 24, suffix: "%", prefix: "+", color: "bg-emerald-500" },
    { icon: HeadphonesIcon, label: "Support Cost Reduction", value: 45, suffix: "%", prefix: "-", color: "bg-orange-500" },
    { icon: Users, label: "New Leads Per Month", value: 47, suffix: "", prefix: "+", color: "bg-purple-500" },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={FADE_UP}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-block px-3 py-1 bg-blue-50 text-primary font-semibold text-xs sm:text-sm rounded-full border border-blue-100 mb-4">
            Revenue Impact Report
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            {storeName}'s Growth Potential
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Based on ReComAI's performance across 400+ active stores, here's what{" "}
            <span className="font-semibold text-foreground">{storeName}</span> can expect in the first 90 days.
          </p>
        </motion.div>

        {/* Metric cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-16">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <MetricCard {...m} active={inView} />
            </motion.div>
          ))}
        </div>

        {/* Revenue bar chart */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={FADE_UP}
          className="bg-white rounded-2xl border shadow-sm p-4 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
            <div>
              <h3 className="font-bold text-base sm:text-lg">Projected Monthly Revenue Lift</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                For {storeName} — based on $30k baseline monthly revenue
              </p>
            </div>
            <span className="text-xs text-muted-foreground bg-slate-50 border px-3 py-1.5 rounded-lg self-start sm:self-auto whitespace-nowrap">
              90-day projection
            </span>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {[
              { label: "Upsell & Cross-sell Revenue", value: 85, amount: "$4,200" },
              { label: "Cart Recovery (abandoned)", value: 62, amount: "$3,100" },
              { label: "Lead Conversion Revenue", value: 45, amount: "$2,250" },
              { label: "Repeat Purchase Lift", value: 38, amount: "$1,900" },
            ].map((row, i) => (
              <div key={i}>
                <div className="flex items-center justify-between text-xs sm:text-sm mb-1.5">
                  <span className="font-medium text-foreground">{row.label}</span>
                  <span className="font-bold text-primary ml-2 shrink-0">{row.amount}/mo</span>
                </div>
                <div className="h-2.5 sm:h-3 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${row.value}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                    className="h-full rounded-full bg-linear-to-r from-primary to-blue-400"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground">Estimated total monthly uplift</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-primary mt-1">
                $11,450 <span className="text-base sm:text-lg text-muted-foreground font-normal">/ month</span>
              </p>
            </div>
            <div className="sm:text-right">
              <p className="text-xs sm:text-sm text-muted-foreground">Annual growth potential</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-500 mt-1">+$137,400</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
