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
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Best Football Betting Sites UK 2025</h1>
        <p className="mt-3 text-neutral-300 max-w-3xl">
          Football betting sites, such as Bet365 and William Hill, offer punters competitive odds and numerous betting markets. These platforms provide users real-time statistics, including win probabilities and player performance metrics. Many bettors appreciate features like live streaming and cash-out options, which enhance the overall betting experience. Below are the top Football Betting Sites in UK:
        </p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {hero.map((h) => (
            <motion.a
              key={h.id}
              href={h.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold">{h.title}</div>
                  <div className="text-sm text-neutral-300">{h.subtitle}</div>
                </div>
                <div className="size-8 rounded-md" style={{ backgroundColor: h.color }} />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1.5 rounded-full border ${
                activeFilter === f ? "bg-white text-black" : "border-neutral-800 hover:bg-neutral-900"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          {sortedSites.map((s) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-neutral-800 bg-neutral-900 p-4"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-md bg-neutral-800 flex items-center justify-center">
                    <Image src={s.logo_url} alt={`${s.name} Logo`} width={40} height={40} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{s.name}</div>
                    <div className="text-sm text-neutral-300">{s.tagline}</div>
                  </div>
                </div>
                <div className="md:ml-auto flex items-center gap-3">
                  <div className="text-sm text-neutral-300">Our Score</div>
                  <div className="text-xl font-bold">{s.score}</div>
                </div>
                <a
                  href={s.cta_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:ml-4 inline-flex items-center justify-center rounded-md bg-white text-black px-4 py-2 font-semibold hover:bg-neutral-200"
                >
                  {s.cta_label}
                </a>
              </div>
              {s.features?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span key={f} className="text-xs px-2 py-1 rounded-full bg-neutral-800 border border-neutral-700">
                      {f}
                    </span>
                  ))}
                </div>
              ) : null}
              <p className="mt-3 text-xs text-neutral-400 leading-snug">{s.tcs}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="mt-16 border-t border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-wrap gap-3 items-center justify-between">
          <div className="text-sm text-neutral-400">© {new Date().getFullYear()} Edge Ahead Media Limited</div>
          <div className="flex gap-3">
            <a className="px-3 py-1.5 rounded-md border border-neutral-800 hover:bg-neutral-900" href="/terms" target="_blank">Terms & Conditions</a>
            <a className="px-3 py-1.5 rounded-md border border-neutral-800 hover:bg-neutral-900" href="/privacy" target="_blank">Privacy Policy</a>
            <a className="px-3 py-1.5 rounded-md border border-neutral-800 hover:bg-neutral-900" href="/cookies" target="_blank">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
