import { motion } from "framer-motion";
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { useStoreContext } from "@/lib/store-context";
import { TrendingUp, PieChart, Activity, Globe } from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const lineData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 4500 },
  { name: "May", value: 6000 },
  { name: "Jun", value: 7500 },
];

const barData = [
  { name: "Product A", demand: 85 },
  { name: "Product B", demand: 65 },
  { name: "Product C", demand: 45 },
];

const competitors = [
  { name: "Competitor A", price: "$129", rating: "4.2", share: "18%" },
  { name: "Competitor B", price: "$99", rating: "3.8", share: "12%" },
  { name: "Competitor C", price: "$149", rating: "4.5", share: "22%" },
];

export function DashboardSection() {
  const { storeName } = useStoreContext();

  return (
    <motion.section
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={FADE_UP}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white text-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold text-xs sm:text-sm rounded-full border border-primary/20 mb-4">
            Feature 07
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-slate-900">Market Analysis Dashboard</h2>
          <p className="text-slate-500 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Make smarter inventory and marketing decisions with live market intel specific to{" "}
            <span className="text-slate-900 font-semibold">{storeName}</span>.
          </p>
        </div>

        {/* Dashboard frame */}
        <div className="bg-slate-800 rounded-xl sm:rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
          {/* Browser chrome */}
          <div className="border-b border-slate-700 bg-slate-800/50 px-3 sm:px-4 py-3 flex items-center gap-3">
            <div className="flex gap-1.5 flex-shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
            </div>
            <div className="flex-1 text-slate-400 text-xs font-mono px-3 py-1 bg-slate-900 rounded-md border border-slate-700 truncate text-center">
              intel.recomai.com/dash/{storeName.toLowerCase()}
            </div>
          </div>

          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            {/* Stat cards — 2 cols on mobile, 4 on desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { label: "Market Valuation", value: "$4.2B", icon: Globe, color: "text-blue-400" },
                { label: "Niche CAGR", value: "+12.4%", icon: TrendingUp, color: "text-green-400" },
                { label: "Store Share", value: "0.01%", icon: PieChart, color: "text-purple-400" },
                { label: "Sentiment", value: "Positive", icon: Activity, color: "text-emerald-400" },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-900 p-3 sm:p-4 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-2 mb-1.5">
                    <stat.icon className={`w-4 h-4 ${stat.color} flex-shrink-0`} />
                    <span className="text-slate-400 text-xs font-medium leading-tight">{stat.label}</span>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Charts — stacked on mobile, side by side on large */}
            <div className="grid lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 bg-slate-900 p-4 sm:p-6 rounded-xl border border-slate-700" style={{ height: 240 }}>
                <h4 className="text-xs font-medium text-slate-400 mb-3">Niche Search Trend (6 months)</h4>
                <ResponsiveContainer width="100%" height="85%">
                  <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} width={40} />
                    <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "none", borderRadius: "8px", color: "#fff", fontSize: 12 }} />
                    <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2.5} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-slate-900 p-4 sm:p-6 rounded-xl border border-slate-700" style={{ height: 240 }}>
                <h4 className="text-xs font-medium text-slate-400 mb-3">Top Demanded Products</h4>
                <ResponsiveContainer width="100%" height="85%">
                  <BarChart data={barData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                    <XAxis type="number" stroke="#94a3b8" fontSize={11} hide />
                    <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} width={70} />
                    <Tooltip cursor={{ fill: "#334155" }} contentStyle={{ backgroundColor: "#1e293b", border: "none", borderRadius: "8px", color: "#fff", fontSize: 12 }} />
                    <Bar dataKey="demand" fill="#8b5cf6" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Competitor table */}
            <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-700">
                <h4 className="text-xs sm:text-sm font-semibold text-white">Competitor Comparison</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left px-4 py-2.5 text-slate-400 font-medium">Store</th>
                      <th className="text-left px-4 py-2.5 text-slate-400 font-medium">Avg. Price</th>
                      <th className="text-left px-4 py-2.5 text-slate-400 font-medium">Rating</th>
                      <th className="text-left px-4 py-2.5 text-slate-400 font-medium">Market Share</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitors.map((c, i) => (
                      <tr key={i} className="border-b border-slate-700/50 hover:bg-slate-800 transition-colors">
                        <td className="px-4 py-3 text-white font-medium">{c.name}</td>
                        <td className="px-4 py-3 text-slate-300">{c.price}</td>
                        <td className="px-4 py-3 text-yellow-400">{c.rating} ★</td>
                        <td className="px-4 py-3 text-slate-300">{c.share}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
