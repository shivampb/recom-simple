import { motion } from "framer-motion";
import { useStoreContext } from "@/lib/store-context";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiShopify, SiWoocommerce, SiBigcommerce, SiSquarespace } from "react-icons/si";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function CTASection() {
  const { storeName } = useStoreContext();

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={FADE_UP}
          className="relative bg-gradient-to-br from-primary to-blue-700 rounded-2xl sm:rounded-3xl p-7 sm:p-10 lg:p-16 text-white text-center overflow-hidden shadow-2xl shadow-primary/30"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-block px-3 py-1 bg-white/15 text-white/90 font-semibold text-xs sm:text-sm rounded-full border border-white/20 mb-5">
              Ready to activate
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              {storeName === "Your Store"
                ? "Activate ReComAI for Your Store"
                : `Activate ReComAI for ${storeName}`}
            </h2>
            <p className="text-blue-100 text-sm sm:text-lg mb-8 max-w-2xl mx-auto">
              Join 400+ ecommerce stores already using ReComAI to boost revenue, automate support, and capture more leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="h-12 sm:h-14 px-7 sm:px-10 text-base sm:text-lg bg-white text-primary hover:bg-blue-50 rounded-2xl shadow-lg font-bold"
                data-testid="button-start-trial"
              >
                Start Free Trial <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 sm:h-14 px-7 sm:px-10 text-base sm:text-lg border-white/30 text-white bg-white/10 hover:bg-white/20 rounded-2xl"
                data-testid="button-schedule-demo"
              >
                <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Schedule a Demo
              </Button>
            </div>
            <p className="mt-5 text-xs sm:text-sm text-blue-200">
              No credit card required &bull; 14-day free trial &bull; Cancel anytime
            </p>
          </div>
        </motion.div>

        {/* Platform trust bar */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={FADE_UP}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-xs sm:text-sm text-muted-foreground mb-5 uppercase tracking-widest font-semibold">
            Works with all major platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 lg:gap-12">
            {[
              { Icon: SiShopify, name: "Shopify", color: "text-[#96BF48]" },
              { Icon: SiWoocommerce, name: "WooCommerce", color: "text-[#7F54B3]" },
              { Icon: SiBigcommerce, name: "BigCommerce", color: "text-[#34313F]" },
              { Icon: SiSquarespace, name: "Squarespace", color: "text-[#000000]" },
            ].map(({ Icon, name, color }, i) => (
              <div key={i} className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors">
                <Icon className={`w-5 h-5 sm:w-7 sm:h-7 ${color}`} />
                <span className="font-semibold text-xs sm:text-sm">{name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={FADE_UP}
          className="mt-12 sm:mt-16 pt-7 sm:pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center shadow flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5 text-white" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <span className="font-bold text-foreground">ReComAI</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ReComAI. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs sm:text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
