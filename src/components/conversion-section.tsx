import { motion, Variants } from "framer-motion";
import { useStoreContext } from "@/lib/store-context";
import {
  CheckCircle2, Zap, Shield, ArrowRight, Star, TrendingUp,
} from "lucide-react";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const PLAN_FEATURES = [
  "Personalized Product Recommendations",
  "WhatsApp, Instagram & FB Redirects",
  "Unlimited Custom FAQs",
  "Upsell & Cross-sell Popups",
  "Live Chat + Human Handoff",
  "Order Tracking Integration",
  "Market Analysis Dashboard",
  "Auto-training on Store Data",
  "Lead Generation (CRM ready)",
];

export function ConversionSection() {
  const { storeName } = useStoreContext();

  return (
    <section id="conversion-section" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-blue-50/40">
      <div className="max-w-5xl mx-auto">

        {/* Hook headline */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={FADE_UP}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 font-semibold text-xs sm:text-sm rounded-full border border-blue-200 mb-5">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>This is all available for {storeName} — right now</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 leading-tight">
            Everything You Just Saw — <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-500">
              Activated in 5 Minutes
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto">
            Every insight above becomes real for <span className="font-semibold text-foreground">{storeName}</span> the moment you install ReComAI. No coding. No data entry. Just connect and go.
          </p>
        </motion.div>

        {/* Pricing card + features */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={FADE_UP}
          className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start"
        >
          {/* Feature checklist */}
          <div className="lg:col-span-3 bg-white rounded-2xl border shadow-sm p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 rounded-xl">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-base sm:text-lg">Everything included</p>
                <p className="text-xs sm:text-sm text-muted-foreground">All 9 features, zero add-ons</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
              {PLAN_FEATURES.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-foreground">{feat}</span>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="mt-6 pt-5 border-t flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex -space-x-2">
                {["S", "R", "A", "M", "P"].map((l, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white shrink-0"
                    style={{ backgroundColor: ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b", "#ef4444"][i] }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-xs font-semibold text-foreground ml-1">4.9</span>
                </div>
                <p className="text-xs text-muted-foreground">Trusted by 1,200+ store owners</p>
              </div>
            </div>
          </div>

          {/* Pricing card */}
          <div className="lg:col-span-2">
            <div className="relative bg-linear-to-br from-primary to-blue-700 rounded-2xl p-6 sm:p-8 text-white shadow-2xl shadow-primary/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-block px-2.5 py-1 bg-white/20 text-white text-xs font-bold rounded-full border border-white/30 mb-4">
                  Most Popular
                </div>
                <p className="text-blue-100 text-sm mb-1">Starter Plan</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl sm:text-5xl font-extrabold">$29</span>
                  <span className="text-blue-200 text-sm mb-1.5">/ month</span>
                </div>
                <p className="text-blue-200 text-xs mb-6">
                  14-day free trial — no credit card required
                </p>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 bg-white text-primary font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-sm sm:text-base"
                >
                  <Shield className="w-4 h-4" />
                  Start Free Trial
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full py-3 mt-3 text-sm text-white/80 hover:text-white transition-colors"
                >
                  Schedule a Demo <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <div className="mt-5 pt-5 border-t border-white/20 space-y-2">
                  {[
                    "Full access to all 9 features",
                    "Connects in under 5 minutes",
                    "Cancel anytime, no lock-in",
                  ].map((t, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-blue-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-300 shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Urgency nudge */}
            <div className="mt-4 flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <TrendingUp className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
              <p className="text-xs sm:text-sm text-amber-800">
                <span className="font-bold">Every day without ReComAI</span> is revenue left on the table. Based on your store size, that's ~<span className="font-bold">$380/day</span> in missed upsells and leads.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
