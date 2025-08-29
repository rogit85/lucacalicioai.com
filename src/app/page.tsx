"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type Hero = { id: string; title: string; subtitle: string; brand: string; href: string; color: string };
type Site = {
  id: string;
  name: string;
  logo_url: string;
  tagline: string;
  cta_label: string;
  cta_url: string;
  score: number;
  features: string[];
  tcs: string;
};

const FILTERS = [
  "All",
  "Acca Offers",
  "Bet £10 Get £40",
  "Daily Offer Boosts",
  "Live Streaming",
  "Online Casino",
  "PayPal",
  "New Bookmaker",
  "Bet £10 Get £30",
];

export default function Home() {
  const [hero, setHero] = useState<Hero[]>([]);
  const [sites, setSites] = useState<Site[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    fetch("/api/hero").then((r) => r.json()).then(setHero);
  }, []);

  useEffect(() => {
    const url = new URL(window.location.origin + "/api/sites");
    if (activeFilter && activeFilter !== "All") url.searchParams.set("filter", activeFilter);
    fetch(url.toString()).then((r) => r.json()).then(setSites);
  }, [activeFilter]);

  const sortedSites = useMemo(() => sites, [sites]);

  return (
    <main className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Animated Football Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-25">
        <motion.div
          className="absolute w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-sm"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-sm"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{ top: "30%", right: "15%" }}
        />
        <motion.div
          className="absolute w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-sm"
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{ bottom: "20%", left: "20%" }}
        />
        <motion.div
          className="absolute w-14 h-14 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full blur-sm"
          animate={{
            x: [0, -90, 0],
            y: [0, 70, 0],
            rotate: [0, -180],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          style={{ bottom: "40%", right: "25%" }}
        />
        <motion.div
          className="absolute w-18 h-18 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-sm"
          animate={{
            x: [0, -110, 0],
            y: [0, -90, 0],
            rotate: [0, 270],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          style={{ top: "60%", left: "5%" }}
        />
        <motion.div
          className="absolute w-10 h-10 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full blur-sm"
          animate={{
            x: [0, 85, 0],
            y: [0, 45, 0],
            rotate: [0, -270],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          style={{ top: "80%", right: "10%" }}
        />
      </div>

      <section className="relative mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center mb-6">
          Best Football Betting Sites UK 2025
        </h1>
        <p className="text-center text-gray-600 max-w-4xl mx-auto text-lg mb-12 leading-relaxed">
          Football betting sites, such as Bet365 and William Hill, offer punters competitive odds and numerous betting markets. These platforms provide users real-time statistics, including win probabilities and player performance metrics. Many bettors appreciate features like live streaming and cash-out options, which enhance the overall betting experience. Below are the top Football Betting Sites in UK:
        </p>
        
        {/* Prominent Hero Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {hero.map((h, index) => (
            <motion.a
              key={h.id}
              href={h.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-gray-300 min-h-[180px] group overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Gradient overlay */}
              <div 
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${h.color}20, ${h.color}05)` }}
              />
              
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="text-center mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl shadow-lg mx-auto mb-3"
                    style={{ backgroundColor: h.color }}
                  />
                  <div className="text-xl font-bold text-gray-900 mb-1">{h.title}</div>
                  <div className="text-sm text-gray-600 font-medium">{h.subtitle}</div>
                </div>
                
                <div className="text-center">
                  <motion.div
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold shadow-lg text-sm inline-block"
                    whileHover={{ backgroundColor: h.color }}
                    transition={{ duration: 0.2 }}
                  >
                    Claim Now →
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Filter by Offers & Features</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full border-2 font-medium transition-all duration-200 ${
                activeFilter === f 
                  ? "bg-gray-900 text-white border-gray-900 shadow-lg" 
                  : "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {sortedSites.map((s, index) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center shadow-md">
                    <Image src={s.logo_url} alt={`${s.name} Logo`} width={48} height={48} />
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">{s.name}</div>
                    <div className="text-gray-600 font-medium">{s.tagline}</div>
                  </div>
                </div>
                
                <div className="lg:ml-auto flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 font-medium">Our Score</div>
                    <div className="text-2xl font-bold text-gray-900">{s.score}</div>
                  </div>
                  <motion.a
                    href={s.cta_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {s.cta_label} →
                  </motion.a>
                </div>
              </div>
              
              {s.features?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span key={f} className="text-sm px-3 py-1 rounded-full bg-green-100 text-green-800 border border-green-200 font-medium">
                      ✓ {f}
                    </span>
                  ))}
                </div>
              ) : null}
              
              <p className="mt-4 text-sm text-gray-500 leading-relaxed bg-gray-50 p-3 rounded-lg">
                {s.tcs}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="mt-20 border-t-2 border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 flex flex-wrap gap-4 items-center justify-between">
          <div className="text-gray-600 font-medium">© {new Date().getFullYear()} Edge Ahead Media Limited</div>
          <div className="flex gap-4">
            <a className="px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-white font-medium transition-all" href="/terms" target="_blank">Terms & Conditions</a>
            <a className="px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-white font-medium transition-all" href="/privacy" target="_blank">Privacy Policy</a>
            <a className="px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-white font-medium transition-all" href="/cookies" target="_blank">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
