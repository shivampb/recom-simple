import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Zap, Shield, Users } from "lucide-react";
import { useStoreContext } from "@/lib/store-context";

export function HeroSection() {
  const { setUrl } = useStoreContext();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setUrl(inputValue.trim());
      setTimeout(() => {
        const el = document.getElementById("analysis");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  };

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20">
      {/* Background — matches the light blue-gray gradient in the screenshot */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, #dbeafe 0%, #e0f2fe 30%, #f8fafc 70%, #ffffff 100%)",
        }}
      />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(to right, #2563eb 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="w-full max-w-4xl lg:max-w-5xl mx-auto text-center">
        {/* FREE badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-6 sm:mb-7"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs sm:text-sm text-slate-600 shadow-sm font-medium">
            <span className="px-2 py-0.5 bg-primary text-white text-xs font-bold rounded-full">
              FREE
            </span>
            Personalized AI impact report for your store
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-3xl sm:text-5xl lg:text-5xl xl:text-[56px] lg:whitespace-nowrap font-extrabold tracking-tight text-slate-900 mb-5 sm:mb-6 leading-[1.12] text-center"
        >
          See How{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-500 to-cyan-500">
            AI Can Transform
          </span>{" "}
          Your Store
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className="text-slate-500 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Enter your e-commerce store URL below and get an instant, personalized
          report showing how ReComAI's AI chatbot can increase your revenue,
          recover abandoned carts, and automate customer support.
        </motion.p>

        {/* Input pill — matching the screenshot's unified bar */}
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.24 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto mb-7 sm:mb-8"
        >
          <div className="flex items-center bg-white rounded-full shadow-lg shadow-blue-100/60 border border-slate-200 p-1.5 sm:p-2 gap-2">
            <Globe className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
            <input
              type="text"
              placeholder="Enter your store URL (e.g. https://mystore.com)"
              className="flex-1 min-w-0 text-sm sm:text-base text-slate-700 placeholder:text-slate-400 bg-transparent outline-none py-2 sm:py-2.5"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              data-testid="input-store-url"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-colors shadow-sm shrink-0 whitespace-nowrap"
              data-testid="button-analyze"
            >
              <Zap className="w-4 h-4 shrink-0" />
              <span className="hidden xs:inline sm:inline">Analyze My Store</span>
              <span className="xs:hidden sm:hidden">Analyze</span>
            </button>
          </div>
        </motion.form>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.36 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 lg:gap-10"
        >
          {[
            { icon: Shield, text: "100% Free & Secure" },
            { icon: Zap, text: "Results in 30 Seconds" },
            { icon: Users, text: "1,200+ Stores Analyzed" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-slate-500 text-xs sm:text-sm font-medium"
            >
              <item.icon className="w-4 h-4 text-primary shrink-0" />
              {item.text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
