"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
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

const HERO_DATA: Hero[] = [
  { id: "hero-betmgm", title: "BetMGM", subtitle: "Bet £10, get £40", brand: "betmgm", href: "https://www.betmgm.co.uk/", color: "#111827" },
  { id: "hero-dabble", title: "Dabble", subtitle: "£10 Free Bet", brand: "dabble", href: "https://www.dabble.com/", color: "#00E5FF" },
  { id: "hero-bet365", title: "bet365", subtitle: "Bet £10 & Get £30", brand: "bet365", href: "https://www.bet365.com/", color: "#00A651" },
  { id: "hero-skybet", title: "Sky Bet", subtitle: "Bet 5p get £30", brand: "skybet", href: "https://m.skybet.com/", color: "#1E3A8A" },
];

const SITES_DATA: Site[] = [
  {
    id: "betmgm",
    name: "BetMGM",
    logo_url: "/logos/betmgm.svg",
    tagline: "Bet £10, get £40 in free bets",
    cta_label: "Claim Offer",
    cta_url: "https://www.betmgm.co.uk/",
    score: 8.5,
    features: ["Enhanced Offers", "Extensive Bet-Builder", "Very Competitive Odds"],
    tcs: "New customers only. 7 days to place qualifying bet of £10 at 1/1 (2.0) to receive 4 x £10 Free Bets: 1 x £10 football, 1 x £10 horse racing & 2 x £10 Bet Builders. Free Bets cannot be used on e-sports and non UK/IE horse racing. 7 day expiry. Exclusions apply. Stake not returned. 18+. T&Cs apply.",
  },
  {
    id: "dabble",
    name: "Dabble",
    logo_url: "/logos/dabble.svg",
    tagline: "£10 Free Bet No Deposit Required",
    cta_label: "Claim Here",
    cta_url: "https://www.dabble.com/",
    score: 10,
    features: ["Fantastic Promotions", "Fun Social Media Content", "New Bookmaker"],
    tcs: "#AD 18+ New customers only. Free Bets credited following registration. Must be wagered 1x at min odds of 1/2 (1.5). 7-day expiry. Stake not returned. Pick Em offer subject to status. Min odds 1/2 (1.5). First Bet Only. Qualifying bets must be placed on active Pick Em Market. Rocket Boosts DNQ. Free bet expries after 7 days.Full T&Cs apply. Gambleaware.org.",
  },
  {
    id: "bet365",
    name: "bet365",
    logo_url: "/logos/bet365.svg",
    tagline: "Bet £10 & Get £30 in Free Racing Bets",
    cta_label: "Get Offer",
    cta_url: "https://www.bet365.com/",
    score: 9.5,
    features: [],
    tcs: "#AD. 18+ New customers only. Min deposit requirement. Free Bets are paid as Bet Credits and are available for use upon settlement of bets to value of qualifying deposit. Min odds, bet and payment method exclusions apply. Returns exclude Bet Credits stake. Time limits and T&Cs apply. Registration Required.",
  },
  {
    id: "skybet",
    name: "Sky Bet",
    logo_url: "/logos/skybet.svg",
    tagline: "Bet 5p get £30 in Free Bets",
    cta_label: "Claim Offer",
    cta_url: "https://m.skybet.com/",
    score: 9.5,
    features: ["Enhanced Offers", "Request A Bet", "Vast selection of sports markets"],
    tcs: "#AD 18+ New customers only. First single & E/W bet only. Odds of 1/1 or greater. 3 X £10 bet tokens. Free bet stakes not included in returns. Free bets exclude virtuals. Free bets are non withdrawable. Free bets expire after 30 days. Eligibility restrictions and further T&Cs apply.New customers only. First single & E/W bet only. Odds of 1/1 or greater. 3 X £10 bet tokens. Free bet stakes not included in returns. Free bets exclude virtuals. Free bets are non withdrawable. Free bets expire after 30 days. Eligibility restrictions and further T&Cs apply.",
  },
  {
    id: "paddypower",
    name: "Paddy Power",
    logo_url: "/logos/paddypower.svg",
    tagline: "Liverpool v Arsenal Liverpool to win 50/1 Arsenal to win 70/1",
    cta_label: "Claim here",
    cta_url: "https://www.paddypower.com/",
    score: 9,
    features: [],
    tcs: "New customer offer. Place a max £1 bet on the Match odds market on Arsenal to beat Liverpool, Sunday, August 31st. Winnings paid in cash at normal odds and are topped up to the enhanced price in Free Bets. Free bets are valid 7 days, only deposits with cards & Apple Pay are eligible. Excludes multiples & in-play bets. T&C's apply. Please gamble responsibly.",
  },
  {
    id: "copybet",
    name: "CopyBet",
    logo_url: "/logos/copybet.svg",
    tagline: "Bet £20, Get £20 in Free Bets + up to 15% daily profit boost",
    cta_label: "Claim Offer",
    cta_url: "https://www.copybet.com/",
    score: 8.5,
    features: ["Exceptional Mobile App", "Super Fast Withdrawals", "Tipster Best Event"],
    tcs: "Full T&Cs apply. New UK customers only. The qualifying bet should be either a Single or Acca (2+ selections) bet, start at £20, have 1.9 or greater odds and must be settled within 7 days of opt-in. The Free bet include: 1 x £20 Free bet any Live or Pre-Match event. Max payout – £500. 7-day expiry. To unlock the offer, complete the first deposit via the banking app secured by Truelayer. Profit boost: One boost per day; claim required. 1 day to claim (by 23:59 UTC+3). Max stake £30. Single bets only. No Free Bets. Profit Boost valid for 24 hrs. Max payout £1,000. Credited within 24 hrs. 18+. BeGambleAware.com",
  },
  {
    id: "boylesports",
    name: "BOYLE Sports",
    logo_url: "/logos/boylesports.svg",
    tagline: "£40 in Free Bets + 25% Boost on your Bet Builder winnings",
    cta_label: "Claim Offer",
    cta_url: "https://www.boylesports.com/",
    score: 10,
    features: ["Daily Promotions & Free Bets", "Super Fast Withdrawals", "Vast selection of sports markets"],
    tcs: "18+ New UK customers (Excluding NI) only. £40 in FREE Bets (FB) as £30 in sports bets & a £10 casino bonus (CB). Min Deposit £10. Min stake £10. Min odds Evs. FB applied on 1st settlement of any qualifying bet. FB 7-day expiry. 1 FB offer per customer, household & IP address only. Account & Payment restrictions. 14 days to accept £10 CB, then active for 3 days. CB 5x wagering & max redeemable £100. Game restrictions apply. Cashed out/Free Bets won't apply. 30 days to qualify. T&Cs Apply",
  },
  {
    id: "betmaze",
    name: "Betmaze",
    logo_url: "/logos/betmaze.svg",
    tagline: "Bet £20 and get £20 in free bets",
    cta_label: "CLAIM HERE",
    cta_url: "https://www.betmaze.com/",
    score: 8,
    features: ["Enhanced Offers", "New Bookmaker", "Very Competitive Odds"],
    tcs: "18+. New customers only. Min deposit: £20. Min wager: £20 at min odds 1/1 (2.00). Max free bet amount: £20. Eligible bets: single, combo, bet builder. Max 1 free bet per user. Max free bet winnings: £200. Free bet is not valid for Horse Racing. Free bet token credited within 24 hours, valid for 14 days. System bet excluded. Free bet min odds: 4/5 (1.80). T&Cs apply. gambleaware.org",
  },
  {
    id: "midnite",
    name: "Midnite",
    logo_url: "/logos/midnite.svg",
    tagline: "Bet £10, get £20 plus 50 free spins",
    cta_label: "Claim Offer",
    cta_url: "https://www.midnite.com/",
    score: 10,
    features: ["Great for ESports", "Modern Betting Platform", "Uniquely Designed Sportsbook"],
    tcs: "18+ New UK customers. Bet £10 on accas with 4+ legs, min odds 3/1 (4.0). Get 4x £5 Free Bets and 50 Free Spins, valid for 7 days on selected bets and games only. T&Cs apply. BeGambleAware.org",
  },
  {
    id: "akbets",
    name: "AK Bets",
    logo_url: "/logos/akbets.svg",
    tagline: "Up to £100 Winnings Boost on your first Acca",
    cta_label: "Claim Offer",
    cta_url: "https://www.akbets.com/",
    score: 10,
    features: ["Fun Social Media Content", "Modern Betting Platform", "Very Competitive Odds"],
    tcs: "If your first bet is a Treble or Up on Any Sport (minimum 3 selections) AK Bets will boost the profit gained on that initial bet by 25% in the form of a Free Bet up to a value of £100. Applies to new customers who sign up to AK BETS with the promo code AKACCA100. 18+ GambleAware.org.",
  },
  {
    id: "matchbook",
    name: "Matchbook",
    logo_url: "/logos/matchbook.svg",
    tagline: "Get £30 In Free Bets when you bet £20",
    cta_label: "Claim Offer",
    cta_url: "https://www.matchbook.com/",
    score: 8.5,
    features: [],
    tcs: "18+ New UK customers only. T&Cs apply. BeGambleAware.org",
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSites = useMemo(() => {
    if (activeFilter === "All") return SITES_DATA;
    return SITES_DATA.filter((site) =>
      site.features.some((feature) => feature.toLowerCase().includes(activeFilter.toLowerCase()))
    );
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Background: SIMPLE ANIMATIONS WITH TAILWIND */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Big red spinning circle */}
        <div className="absolute w-32 h-32 bg-red-500 rounded-full opacity-30 animate-spin" style={{ top: '20%', left: '10%' }} />
        
        {/* Green bouncing circle */}
        <div className="absolute w-24 h-24 bg-green-500 rounded-full opacity-40 animate-bounce" style={{ top: '50%', right: '20%' }} />
        
        {/* White pulsing circle */}
        <div className="absolute w-40 h-40 bg-gray-300 rounded-full opacity-30 animate-pulse" style={{ bottom: '20%', left: '40%' }} />
        
        {/* Extra visible test - a big red square that definitely moves */}
        <div className="absolute w-20 h-20 bg-red-600 animate-bounce" style={{ top: '10px', left: '50%' }}>
          MOVING
        </div>
      </div>

      {/* Header with Logo */}
      <header className="relative mx-auto max-w-6xl px-4 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image 
              src="/Luca.jpeg" 
              alt="Luca Calcio AI" 
              width={60} 
              height={60} 
              className="rounded-full border-3 border-green-600 shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Luca Calcio AI</h2>
              <p className="text-sm text-gray-600">Football Betting Expert</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <div className="w-4 h-6 bg-green-600 rounded-l"></div>
            <div className="w-4 h-6 bg-white border-y border-gray-300"></div>
            <div className="w-4 h-6 bg-red-600 rounded-r"></div>
          </div>
        </div>
      </header>

      <section className="relative mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center mb-6 bg-gradient-to-r from-green-600 via-gray-800 to-red-600 bg-clip-text text-transparent">
          Best Football Betting Sites UK 2025
        </h1>
        <p className="text-center text-gray-600 max-w-4xl mx-auto text-lg mb-12 leading-relaxed">
          Football betting sites, such as Bet365 and William Hill, offer punters competitive odds and numerous betting markets. These platforms provide users real-time statistics, including win probabilities and player performance metrics. Many bettors appreciate features like live streaming and cash-out options, which enhance the overall betting experience. Below are the top Football Betting Sites in UK:
        </p>
        
        {/* Prominent Hero Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {HERO_DATA.map((h, index) => (
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
                    className="bg-gradient-to-r from-green-600 to-red-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg text-sm inline-block"
                    whileHover={{ scale: 1.05 }}
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
                  ? "bg-gradient-to-r from-green-600 to-red-600 text-white border-green-600 shadow-lg" 
                  : "border-gray-300 text-gray-700 hover:border-green-500 hover:bg-green-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredSites.map((s, index) => (
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
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-green-600 to-red-600 text-white px-8 py-4 font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
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

      <footer className="mt-20 border-t-2 border-gray-200 bg-gradient-to-r from-green-50 via-white to-red-50">
        <div className="mx-auto max-w-6xl px-4 py-12 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-3 h-4 bg-green-600 rounded-l"></div>
              <div className="w-3 h-4 bg-white border-y border-gray-300"></div>
              <div className="w-3 h-4 bg-red-600 rounded-r"></div>
            </div>
            <div className="text-gray-600 font-medium">© {new Date().getFullYear()} Luca Calcio AI - Edge Ahead Media Limited</div>
          </div>
          <div className="flex gap-4">
            <a className="px-4 py-2 rounded-lg border-2 border-green-600 bg-green-600 text-white hover:bg-green-700 hover:border-green-700 font-medium transition-all shadow-md hover:shadow-lg" href="/terms">Terms & Conditions</a>
            <a className="px-4 py-2 rounded-lg border-2 border-gray-300 bg-white text-gray-900 hover:bg-gray-100 hover:border-gray-400 font-medium transition-all shadow-md hover:shadow-lg" href="/privacy">Privacy Policy</a>
            <a className="px-4 py-2 rounded-lg border-2 border-red-600 bg-red-600 text-white hover:bg-red-700 hover:border-red-700 font-medium transition-all shadow-md hover:shadow-lg" href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
