import { motion } from "framer-motion";
import { useStoreContext } from "@/lib/store-context";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageSquare, MapPin, Users,
  ShoppingCart, Headphones, Package, Zap, UserPlus,
} from "lucide-react";
import { SiWhatsapp, SiInstagram, SiFacebook } from "react-icons/si";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[300px] mx-auto bg-white rounded-4xl shadow-2xl border-[7px] border-slate-800 overflow-hidden flex flex-col" style={{ minHeight: 500 }}>
      <div className="flex justify-center pt-2.5 pb-1 shrink-0">
        <div className="w-16 h-4 bg-slate-800 rounded-full" />
      </div>
      <div className="flex-1 overflow-hidden flex flex-col min-h-0">{children}</div>
    </div>
  );
}

function BrowserFrame({ children, url }: { children: React.ReactNode; url: string }) {
  return (
    <div className="bg-white rounded-xl shadow-xl border overflow-hidden">
      <div className="bg-slate-100 border-b px-3 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white px-2 py-1 rounded text-xs text-muted-foreground border font-mono truncate min-w-0">{url}</div>
      </div>
      <div>{children}</div>
    </div>
  );
}

function ChatHeader({ name }: { name: string }) {
  return (
    <div className="bg-primary px-3 py-2.5 text-white flex items-center gap-2.5 shrink-0">
      <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
        <MessageSquare className="w-3.5 h-3.5" />
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-xs truncate">{name} AI</p>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-300 shrink-0" />
          <p className="text-xs text-blue-100">Online now</p>
        </div>
      </div>
    </div>
  );
}

function BotBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2 items-start">
      <div className="w-6 h-6 rounded-full bg-primary shrink-0 flex items-center justify-center mt-0.5">
        <MessageSquare className="w-3 h-3 text-white" />
      </div>
      <div className="bg-white rounded-2xl rounded-tl-none shadow-sm border text-xs text-foreground p-2.5 max-w-[85%]">
        {children}
      </div>
    </div>
  );
}

function UserBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end">
      <div className="bg-primary text-white rounded-2xl rounded-tr-none text-xs p-2.5 max-w-[80%]">
        {children}
      </div>
    </div>
  );
}

function FeatureTag({ label }: { label: string }) {
  return (
    <div className="inline-block px-3 py-1 bg-blue-50 text-primary font-semibold text-xs sm:text-sm rounded-full border border-blue-100">
      {label}
    </div>
  );
}

function FeatureNumber({ n }: { n: string }) {
  return (
    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
      Feature {n}
    </span>
  );
}

function StatRow({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="space-y-2 mt-4">
      {items.map((s, i) => (
        <div key={i} className="flex items-center gap-3 p-3 bg-white border rounded-xl shadow-sm">
          <div className="text-lg font-extrabold text-primary w-14 text-center shrink-0">{s.value}</div>
          <p className="text-xs sm:text-sm text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

export function FeaturesSection() {
  const { storeName } = useStoreContext();

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28 lg:space-y-32">

      {/* ─── Feature 1: Personalized Recommendations ─── */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={FADE_UP}
        className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
      >
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-50 rounded-lg"><ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-primary" /></div>
            <FeatureNumber n="01" />
          </div>
          <FeatureTag label="+28% more Add-to-Carts" />
          <h3 className="text-2xl sm:text-3xl font-bold mt-3 mb-3">Personalized Product Recommendations</h3>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-5">
            ReComAI analyzes what each visitor browses on <span className="font-semibold text-foreground">{storeName}</span> and instantly suggests the perfect products in chat — removing friction from discovery.
          </p>
          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <div className="text-2xl sm:text-3xl font-extrabold text-primary">28%</div>
            <p className="text-xs sm:text-sm text-muted-foreground">Average lift in Add-to-Cart rate across active ReComAI stores</p>
          </div>
        </div>
        <div className="flex justify-center">
          <PhoneFrame>
            <ChatHeader name={storeName} />
            <div className="flex-1 bg-slate-50 p-3 space-y-3 overflow-y-auto">
              <UserBubble>Can you help me find something?</UserBubble>
              <BotBubble>
                <p className="mb-2">Based on your browsing, you might love these:</p>
                {[
                  { name: "Running Shoes X3", price: "$89", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&q=80" },
                  { name: "Compression Socks", price: "$24", img: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=100&q=80" },
                  { name: "Sports Bottle Pro", price: "$32", img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=100&q=80" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border mb-1">
                    <img src={item.img} alt={item.name} className="w-9 h-9 rounded-md shrink-0 object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold truncate">{item.name}</p>
                      <p className="text-xs text-primary font-bold">{item.price}</p>
                    </div>
                    <button className="text-xs bg-primary text-white px-2 py-1 rounded-lg shrink-0">Add</button>
                  </div>
                ))}
              </BotBubble>
            </div>
            <div className="border-t p-2 bg-white flex gap-2 shrink-0">
              <div className="flex-1 border rounded-xl px-3 py-1.5 text-xs text-muted-foreground">Message...</div>
              <button className="bg-primary rounded-xl p-1.5"><MessageSquare className="w-3.5 h-3.5 text-white" /></button>
            </div>
          </PhoneFrame>
        </div>
      </motion.div>

      {/* ─── Feature 2: Social Redirects ─── */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={FADE_UP}
        className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
      >
        <div className="order-2 lg:order-1 flex justify-center">
          <PhoneFrame>
            <ChatHeader name={storeName} />
            <div className="flex-1 bg-slate-50 p-3 space-y-3 overflow-y-auto">
              <UserBubble>I have a question about shipping.</UserBubble>
              <BotBubble>
                <p className="mb-2.5">Happy to help! Reach me on your preferred channel:</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { icon: <SiWhatsapp className="text-green-500 w-4 h-4" />, name: "WhatsApp" },
                    { icon: <SiInstagram className="text-pink-500 w-4 h-4" />, name: "Instagram" },
                    { icon: <SiFacebook className="text-blue-600 w-4 h-4" />, name: "Facebook" },
                    { icon: <Users className="text-purple-500 w-4 h-4" />, name: "Groups" },
                  ].map((ch, i) => (
                    <button key={i} className="flex items-center gap-1.5 p-2 border rounded-lg bg-white text-xs font-medium">
                      {ch.icon} {ch.name}
                    </button>
                  ))}
                </div>
              </BotBubble>
              <UserBubble>WhatsApp please!</UserBubble>
              <BotBubble>Redirecting you to WhatsApp — our team responds within minutes!</BotBubble>
            </div>
            <div className="border-t p-2 bg-white flex gap-2 shrink-0">
              <div className="flex-1 border rounded-xl px-3 py-1.5 text-xs text-muted-foreground">Message...</div>
              <button className="bg-primary rounded-xl p-1.5"><MessageSquare className="w-3.5 h-3.5 text-white" /></button>
            </div>
          </PhoneFrame>
        </div>
        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-50 rounded-lg"><Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary" /></div>
            <FeatureNumber n="02" />
          </div>
          <FeatureTag label="3x Customer Engagement" />
          <h3 className="text-2xl sm:text-3xl font-bold mt-3 mb-3">Omnichannel Social Redirects</h3>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-5">
            Meet customers where they live. ReComAI routes conversations from <span className="font-semibold text-foreground">{storeName}</span> to WhatsApp, Instagram, Facebook, and Groups automatically.
          </p>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {[
              { icon: <SiWhatsapp className="w-4 h-4 text-green-500" />, name: "WhatsApp" },
              { icon: <SiInstagram className="w-4 h-4 text-pink-500" />, name: "Instagram" },
              { icon: <SiFacebook className="w-4 h-4 text-blue-600" />, name: "Facebook" },
              { icon: <Users className="w-4 h-4 text-purple-500" />, name: "Groups" },
            ].map((ch, i) => (
              <div key={i} className="flex items-center gap-2.5 p-3 bg-white border rounded-xl shadow-sm">
                {ch.icon}
                <span className="font-medium text-xs sm:text-sm">{ch.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ─── Feature 3: FAQs ─── */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={FADE_UP}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="p-2 bg-blue-50 rounded-lg"><MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-primary" /></div>
            <FeatureNumber n="03" />
          </div>
          <FeatureTag label="0 Support Tickets Missed" />
          <h3 className="text-2xl sm:text-3xl font-bold mt-3 mb-3">Infinite Custom FAQ Resolutions</h3>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Add unlimited Q&A pairs. The AI learns your exact policies and answers questions accurately — 24/7, at scale, for free.
          </p>
        </div>
        <BrowserFrame url={`admin.recomai.com/faqs/${storeName.toLowerCase()}`}>
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h4 className="font-bold text-sm sm:text-base">{storeName} Knowledge Base</h4>
                <p className="text-xs text-muted-foreground">AI resolution rate: 98.4%</p>
              </div>
              <Button size="sm" className="self-start sm:self-auto"><Zap className="w-3.5 h-3.5 mr-1" /> Add Rule</Button>
            </div>
            <div className="space-y-2">
              {[
                { q: "What is your return policy?", a: `${storeName}'s return window is 30 days — no questions asked.` },
                { q: "Do you ship internationally?", a: "Yes! We ship to 50+ countries with tracking." },
                { q: "How long does delivery take?", a: "2-4 business days domestically." },
              ].map((faq, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 p-3 border rounded-lg bg-white hover:bg-slate-50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-xs sm:text-sm mb-0.5">{faq.q}</p>
                    <p className="text-xs text-muted-foreground">{faq.a}</p>
                  </div>
                  <span className="px-2 py-1 bg-green-50 text-green-600 rounded text-xs font-semibold border border-green-100 self-start whitespace-nowrap">
                    Resolved by AI
                  </span>
                </div>
              ))}
            </div>
          </div>
        </BrowserFrame>
      </motion.div>

      {/* ─── Feature 4: Upsell & Cross-sell ─── */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={FADE_UP}
        className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
      >
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-50 rounded-lg"><ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-primary" /></div>
            <FeatureNumber n="04" />
          </div>
          <FeatureTag label="+$4,200 avg. monthly upsell revenue" />
          <h3 className="text-2xl sm:text-3xl font-bold mt-3 mb-3">Product Upsell &amp; Cross-sell Popups</h3>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-5">
            ReComAI surfaces smart bundle offers at the perfect moment on <span className="font-semibold text-foreground">{storeName}</span> — right when the customer is most likely to add one more item.
          </p>
          <div className="space-y-2">
            {[
              { label: "Upsell Trigger", value: "Product page view" },
              { label: "Cross-sell Trigger", value: "Add to cart event" },
              { label: "Avg. Order Value Lift", value: "+22%" },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border">
                <span className="text-xs sm:text-sm text-muted-foreground">{row.label}</span>
                <span className="text-xs sm:text-sm font-semibold text-foreground">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <BrowserFrame url={`${storeName.toLowerCase()}.com/products`}>
            <div className="p-4 sm:p-5">
              <div className="flex gap-3 mb-4">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80" alt="Running Shoes X3" className="w-20 h-20 rounded-lg shrink-0 object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm mb-1">Running Shoes X3</p>
                  <p className="text-primary font-bold text-lg mb-2">$89.00</p>
                  <Button size="sm" className="w-full text-xs h-8">Add to Cart</Button>
                </div>
              </div>
              <div className="border-2 border-primary/30 bg-blue-50/80 rounded-xl p-3 relative">
                <div className="absolute -top-3 left-4 bg-primary text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                  AI Recommendation
                </div>
                <p className="text-xs font-semibold mb-2.5 mt-1">Customers who bought this also loved:</p>
                <div className="flex gap-2 mb-3">
                  {[
                    { name: "Compression Socks", price: "$24", img: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=100&q=80" },
                    { name: "Foam Roller", price: "$39", img: "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?w=100&q=80" },
                  ].map((p, i) => (
                    <div key={i} className="flex-1 bg-white rounded-lg p-2 border text-center shadow-sm">
                      <img src={p.img} alt={p.name} className="w-8 h-8 rounded-md mx-auto mb-1 object-cover" />
                      <p className="text-xs font-medium leading-tight">{p.name}</p>
                      <p className="text-xs text-primary font-bold">{p.price}</p>
                    </div>
                  ))}
                </div>
                <Button size="sm" className="w-full bg-primary text-xs h-8">Bundle &amp; Save 15%</Button>
              </div>
            </div>
          </BrowserFrame>
        </div>
      </motion.div>

      {/* ─── Feature 5: Live Chat Support ─── */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={FADE_UP}
        className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
      >
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-xl shadow-lg border overflow-hidden">
              <div className="bg-primary p-2.5 text-white">
                <p className="font-semibold text-xs">{storeName} Chat</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-300" />
                  <p className="text-xs text-blue-100">Bot active</p>
                </div>
              </div>
              <div className="p-2.5 space-y-2 bg-slate-50">
                <div className="flex gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-primary shrink-0 flex items-center justify-center">
                    <MessageSquare className="w-2.5 h-2.5 text-white" />
                  </div>
                  <div className="bg-white rounded-xl rounded-tl-none text-xs p-2 shadow-sm border">Hi! How can I help?</div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-primary text-white rounded-xl rounded-tr-none text-xs p-2">Need help with sizing</div>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-primary shrink-0 flex items-center justify-center">
                    <MessageSquare className="w-2.5 h-2.5 text-white" />
                  </div>
                  <div className="bg-white rounded-xl rounded-tl-none text-xs p-2 shadow-sm border">Generally true to size!</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-xl shadow-lg border border-slate-700 overflow-hidden">
              <div className="p-2.5 border-b border-slate-700">
                <p className="text-white font-semibold text-xs">Agent Dashboard</p>
              </div>
              <div className="p-2.5 space-y-1.5">
                {[
                  { name: "Emma K.", color: "bg-green-400" },
                  { name: "Raj M.", color: "bg-green-400" },
                  { name: "Lisa T.", color: "bg-yellow-400" },
                ].map((conv, i) => (
                  <div key={i} className="flex items-center gap-2 p-1.5 bg-slate-800 rounded-lg">
                    <div className="w-5 h-5 rounded-full bg-slate-600 shrink-0" />
                    <p className="text-white text-xs font-medium flex-1 truncate">{conv.name}</p>
                    <div className={`w-1.5 h-1.5 rounded-full ${conv.color}`} />
                  </div>
                ))}
                <div className="mt-2 p-2 bg-slate-800 rounded-lg">
                  <p className="text-slate-400 text-xs mb-1">Resolution</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-slate-700 rounded-full h-1.5">
                      <div className="bg-green-400 h-1.5 rounded-full" style={{ width: "87%" }} />
                    </div>
                    <span className="text-green-400 text-xs font-bold">87%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-50 rounded-lg"><Headphones className="w-4 h-4 sm:w-5 sm:h-5 text-primary" /></div>
            <FeatureNumber n="05" />
          </div>
          <FeatureTag label="87% AI-resolved, seamless handoff" />
          <h3 className="text-2xl sm:text-3xl font-bold mt-3 mb-3">Live Chat Support System</h3>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-4">
            The AI handles 87% of all support conversations on <span className="font-semibold text-foreground">{storeName}</span> automatically. The rest are escalated with full context already passed.
          </p>
          <StatRow items={[
            { value: "87%", label: "Queries resolved by AI" },
            { value: "13%", label: "Escalated to human agents" },
            { value: "<30s", label: "Average first response time" },
          ]} />
        </div>
      </motion.div>

      {/* ─── Feature 6: Order Tracking ─── */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={FADE_UP}
        className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
      >
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-50 rounded-lg"><Package className="w-4 h-4 sm:w-5 sm:h-5 text-primary" /></div>
            <FeatureNumber n="06" />
          </div>
          <FeatureTag label="62% fewer 'where is my order' tickets" />
          <h3 className="text-2xl sm:text-3xl font-bold mt-3 mb-3">Order Tracking Feature</h3>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-5">
            Customers ask "Where is my order?" and the AI instantly pulls live tracking data for <span className="font-semibold text-foreground">{storeName}</span> orders — no more flooded inboxes.
          </p>
          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <div className="text-2xl sm:text-3xl font-extrabold text-primary">62%</div>
            <p className="text-xs sm:text-sm text-muted-foreground">Reduction in order-status support tickets</p>
          </div>
        </div>
        <div className="flex justify-center">
          <PhoneFrame>
            <ChatHeader name={storeName} />
            <div className="flex-1 bg-slate-50 p-3 space-y-3 overflow-y-auto">
              <UserBubble>Where is my order #1842?</UserBubble>
              <BotBubble>
                <p className="mb-2 font-medium">Live status for order #1842:</p>
                <div className="bg-slate-50 rounded-xl p-2.5 border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">Out for Delivery</span>
                    <span className="text-xs text-muted-foreground">By 3pm today</span>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { label: "Order Placed", done: true },
                      { label: "Packed & Shipped", done: true },
                      { label: "In Transit", done: true },
                      { label: "Out for Delivery", done: true },
                      { label: "Delivered", done: false },
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${step.done ? "bg-primary" : "bg-slate-200"}`} />
                        <span className={`text-xs ${step.done ? "text-foreground font-medium" : "text-muted-foreground"}`}>{step.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="text-xs text-primary font-medium">2 stops away</span>
                  </div>
                </div>
              </BotBubble>
            </div>
            <div className="border-t p-2 bg-white flex gap-2 shrink-0">
              <div className="flex-1 border rounded-xl px-3 py-1.5 text-xs text-muted-foreground">Message...</div>
              <button className="bg-primary rounded-xl p-1.5"><MessageSquare className="w-3.5 h-3.5 text-white" /></button>
            </div>
          </PhoneFrame>
        </div>
      </motion.div>

      {/* ─── Feature 7 (Market Dashboard) is its own section ─── */}

      {/* ─── Feature 8: Auto-Trains ─── */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={FADE_UP}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="p-2 bg-blue-50 rounded-lg"><Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" /></div>
            <FeatureNumber n="08" />
          </div>
          <FeatureTag label="Setup in under 5 minutes" />
          <h3 className="text-2xl sm:text-3xl font-bold mt-3 mb-3">Auto-Trains on Your Store Data</h3>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Just connect <span className="font-semibold text-foreground">{storeName}</span>. ReComAI automatically crawls your products, policies, FAQs — zero manual training needed.
          </p>
        </div>
        {/* Mobile-first vertical timeline */}
        <div className="max-w-lg mx-auto space-y-3">
          {[
            { step: "01", title: "Store Connected", desc: `${storeName} URL verified & secured`, color: "bg-primary" },
            { step: "02", title: "Products Indexed", desc: "All product catalog parsed & embedded", color: "bg-primary" },
            { step: "03", title: "Policies Parsed", desc: "Return, shipping & FAQ policies learned", color: "bg-primary" },
            { step: "04", title: "Brand Voice Calibrated", desc: "Tone & style matched to your brand", color: "bg-primary" },
            { step: "05", title: "ReComAI is Live!", desc: "Your AI chatbot is ready to serve customers", color: "bg-green-500" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex flex-col items-center shrink-0">
                <div className={`w-9 h-9 rounded-full ${item.color} flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
                  {item.step}
                </div>
                {i < 4 && <div className="w-0.5 h-4 bg-slate-200 mt-1" />}
              </div>
              <div className="flex-1 bg-white border rounded-xl p-3.5 shadow-sm">
                <p className="font-bold text-sm">{item.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ─── Feature 9: Lead Generation ─── */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={FADE_UP}
        className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
      >
        <div className="order-2 lg:order-1 flex justify-center">
          <PhoneFrame>
            <ChatHeader name={storeName} />
            <div className="flex-1 bg-slate-50 p-3 space-y-3 overflow-y-auto">
              <BotBubble>
                <p>I'd love to keep you updated with exclusive offers. Mind sharing your details?</p>
              </BotBubble>
              <div className="ml-8 bg-white rounded-xl border shadow-sm p-3 space-y-2">
                {["Your Name", "Email Address", "Phone Number"].map((ph, i) => (
                  <div key={i} className="border rounded-lg px-3 py-2 text-xs text-muted-foreground bg-slate-50">{ph}</div>
                ))}
                <div className="border rounded-lg px-3 py-2 text-xs text-muted-foreground bg-slate-50 h-10">Your message...</div>
                <button className="w-full bg-primary text-white rounded-lg py-2 text-xs font-semibold">Send Message</button>
              </div>
            </div>
            <div className="border-t p-2 bg-white flex gap-2 shrink-0">
              <div className="flex-1 border rounded-xl px-3 py-1.5 text-xs text-muted-foreground">Message...</div>
              <button className="bg-primary rounded-xl p-1.5"><MessageSquare className="w-3.5 h-3.5 text-white" /></button>
            </div>
          </PhoneFrame>
        </div>
        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-50 rounded-lg"><UserPlus className="w-4 h-4 sm:w-5 sm:h-5 text-primary" /></div>
            <FeatureNumber n="09" />
          </div>
          <FeatureTag label="Avg. 47 new leads/month per store" />
          <h3 className="text-2xl sm:text-3xl font-bold mt-3 mb-3">Lead Generation Engine</h3>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-4">
            ReComAI naturally collects name, email, phone, and intent from visitors on <span className="font-semibold text-foreground">{storeName}</span> — building your CRM automatically.
          </p>
          <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
            <div className="px-4 py-3 bg-slate-50 border-b flex items-center justify-between">
              <p className="font-semibold text-xs sm:text-sm">Recent Leads</p>
              <span className="text-xs text-muted-foreground">Last 24 hours</span>
            </div>
            <div className="divide-y">
              {[
                { name: "Sarah K.", email: "sarah@email.com", intent: "Shoes" },
                { name: "Marcus R.", email: "m.ross@mail.com", intent: "Sportswear" },
                { name: "Priya N.", email: "priya@inbox.com", intent: "Accessories" },
              ].map((lead, i) => (
                <div key={i} className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary text-xs font-bold">{lead.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-medium text-xs">{lead.name}</p>
                      <p className="text-xs text-muted-foreground truncate max-w-[120px] sm:max-w-none">{lead.email}</p>
                    </div>
                  </div>
                  <span className="text-xs bg-blue-50 text-primary border border-blue-100 rounded-full px-2 py-0.5 font-medium shrink-0">{lead.intent}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
