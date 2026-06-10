import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Globe, Zap, Shield, Users } from "lucide-react";
import { useStoreContext } from "@/lib/store-context";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

/* ─── Floating Gradient Orbs ─── */
const ORBS = [
  { x: "10%", y: "15%", size: 280, color: "rgba(37,99,235,0.12)", delay: 0, dur: 20 },
  { x: "80%", y: "12%", size: 240, color: "rgba(6,182,212,0.10)", delay: 2, dur: 24 },
  { x: "70%", y: "75%", size: 320, color: "rgba(37,99,235,0.08)", delay: 4, dur: 22 },
  { x: "18%", y: "70%", size: 260, color: "rgba(56,189,248,0.09)", delay: 1, dur: 26 },
];

/* ─── tsParticles Config ─── */
const PARTICLES_OPTIONS: ISourceOptions = {
  fullScreen: { enable: false },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
    },
    modes: {
      grab: {
        distance: 160,
        links: { opacity: 0.35, color: "#2563eb" },
      },
    },
  },
  particles: {
    number: {
      value: 70,
      density: { enable: true, width: 1200, height: 800 },
    },
    color: {
      value: ["#2563eb", "#3b82f6", "#06b6d4", "#6366f1", "#38bdf8"],
    },
    shape: { type: "circle" },
    opacity: {
      value: { min: 0.15, max: 0.5 },
      animation: {
        enable: true,
        speed: 0.8,
        startValue: "random",
        sync: false,
      },
    },
    size: {
      value: { min: 1, max: 4 },
      animation: {
        enable: true,
        speed: 1.5,
        startValue: "random",
        sync: false,
      },
    },
    links: {
      enable: true,
      distance: 150,
      color: "#2563eb",
      opacity: 0.08,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "bounce" },
    },
  },
  detectRetina: true,
};

export function HeroSection() {
  const { setUrl } = useStoreContext();
  const [inputValue, setInputValue] = useState("");


  const particlesLoaded = useCallback(async () => { }, []);

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
      {/* ══════ ANIMATED BACKGROUND LAYER ══════ */}

      {/* Base gradient */}
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

      {/* ── tsParticles Connected Network ── */}
      <ParticlesProvider init={async (engine: Engine) => {
        await loadSlim(engine);
      }}>
        <Particles
          id="hero-particles"
          className="absolute inset-0 -z-[5]"
          particlesLoaded={particlesLoaded}
          options={PARTICLES_OPTIONS}
        />
      </ParticlesProvider>

      {/* ── Floating Gradient Orbs ── */}
      {ORBS.map((orb, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute -z-[4] rounded-full pointer-events-none"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, 35, -25, 18, 0],
            y: [0, -30, 25, -12, 0],
            scale: [1, 1.18, 0.88, 1.08, 1],
          }}
          transition={{
            duration: orb.dur,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ── Orbiting Ring 1 (large, slow) ── */}
      <motion.div
        className="absolute -z-[4] pointer-events-none"
        style={{
          left: "50%",
          top: "45%",
          width: 560,
          height: 560,
          marginLeft: -280,
          marginTop: -280,
          borderRadius: "50%",
          border: "1px solid rgba(37,99,235,0.07)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute"
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "rgba(37,99,235,0.35)",
            boxShadow: "0 0 14px rgba(37,99,235,0.4)",
            top: 0,
            left: "50%",
            marginLeft: -4,
            marginTop: -4,
          }}
        />
        <motion.div
          className="absolute"
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "rgba(6,182,212,0.3)",
            boxShadow: "0 0 10px rgba(6,182,212,0.35)",
            bottom: "15%",
            right: 0,
            marginRight: -2.5,
          }}
        />
      </motion.div>

      {/* ── Orbiting Ring 2 (medium, opposite) ── */}
      <motion.div
        className="absolute -z-[4] pointer-events-none"
        style={{
          left: "50%",
          top: "45%",
          width: 400,
          height: 400,
          marginLeft: -200,
          marginTop: -200,
          borderRadius: "50%",
          border: "1px dashed rgba(6,182,212,0.08)",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute"
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "rgba(6,182,212,0.35)",
            boxShadow: "0 0 12px rgba(6,182,212,0.4)",
            bottom: 0,
            left: "50%",
            marginLeft: -3,
            marginBottom: -3,
          }}
        />
      </motion.div>

      {/* ── Orbiting Ring 3 (small, fast) ── */}
      <motion.div
        className="absolute -z-[4] pointer-events-none"
        style={{
          left: "50%",
          top: "45%",
          width: 240,
          height: 240,
          marginLeft: -120,
          marginTop: -120,
          borderRadius: "50%",
          border: "1px dotted rgba(99,102,241,0.06)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute"
          style={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "rgba(99,102,241,0.3)",
            boxShadow: "0 0 8px rgba(99,102,241,0.3)",
            top: "50%",
            right: 0,
            marginRight: -2,
            marginTop: -2,
          }}
        />
      </motion.div>

      {/* ── Pulsing Concentric Circles ── */}
      {[0, 1, 2, 3].map((ring) => (
        <motion.div
          key={`pulse-${ring}`}
          className="absolute -z-[4] pointer-events-none rounded-full"
          style={{
            left: "50%",
            top: "45%",
            width: 180 + ring * 130,
            height: 180 + ring * 130,
            marginLeft: -(90 + ring * 65),
            marginTop: -(90 + ring * 65),
            border: `1px solid rgba(37,99,235,${0.07 - ring * 0.015})`,
          }}
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.4, 0.15, 0.4],
          }}
          transition={{
            duration: 5 + ring * 1.5,
            delay: ring * 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ── Animated Beam Lines ── */}
      <motion.div
        className="absolute -z-[4] pointer-events-none"
        style={{
          left: "-10%",
          top: "22%",
          width: "120%",
          height: 1,
          background:
            "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.12) 25%, rgba(6,182,212,0.18) 50%, rgba(37,99,235,0.12) 75%, transparent 100%)",
          transformOrigin: "center",
          rotate: "-15deg",
        }}
        animate={{ opacity: [0, 1, 0], x: ["-30%", "30%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute -z-[4] pointer-events-none"
        style={{
          left: "-10%",
          top: "62%",
          width: "120%",
          height: 1,
          background:
            "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.08) 25%, rgba(56,189,248,0.14) 50%, rgba(99,102,241,0.08) 75%, transparent 100%)",
          transformOrigin: "center",
          rotate: "10deg",
        }}
        animate={{ opacity: [0, 0.8, 0], x: ["25%", "-25%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="absolute -z-[4] pointer-events-none"
        style={{
          left: "-10%",
          top: "42%",
          width: "120%",
          height: 1,
          background:
            "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.06) 30%, rgba(37,99,235,0.10) 50%, rgba(6,182,212,0.06) 70%, transparent 100%)",
          transformOrigin: "center",
          rotate: "-5deg",
        }}
        animate={{ opacity: [0, 0.6, 0], x: ["-15%", "15%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />

      {/* ── Glowing Accent Spots ── */}
      <motion.div
        className="absolute -z-[4] pointer-events-none"
        style={{
          right: "6%",
          top: "8%",
          width: 140,
          height: 140,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)",
          filter: "blur(25px)",
        }}
        animate={{ scale: [1, 1.35, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -z-[4] pointer-events-none"
        style={{
          left: "4%",
          bottom: "10%",
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          filter: "blur(22px)",
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute -z-[4] pointer-events-none"
        style={{
          right: "25%",
          bottom: "18%",
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* ══════ CONTENT ══════ */}
      <div className="w-full max-w-4xl lg:max-w-5xl mx-auto text-center relative z-10">
        {/* FREE badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-6 sm:mb-7"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-xs sm:text-sm text-slate-600 shadow-sm font-medium">
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

        {/* Input pill */}
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.24 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto mb-7 sm:mb-8"
        >
          <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg shadow-blue-100/60 border border-slate-200 p-1.5 sm:p-2 gap-2">
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
