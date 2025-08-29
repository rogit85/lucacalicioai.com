import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filter = searchParams.get("filter");
  const hasDb = !!process.env.POSTGRES_URL;
  try {
    if (hasDb) {
      let rows;
      if (filter && filter !== "All") {
        rows = (
          await sql`SELECT * FROM betting_sites WHERE features::text ILIKE ${"%" + filter + "%"} ORDER BY score DESC;`
        ).rows;
      } else {
        rows = (await sql`SELECT * FROM betting_sites ORDER BY score DESC;`).rows;
      }
      return NextResponse.json(rows);
    }
  } catch (e) {
    // fall through to static data
  }
  const staticRows = [
    {
      id: "betmgm",
      name: "BetMGM",
      slug: "betmgm",
      logo_url: "/logos/betmgm.svg",
      tagline: "Bet £10, get £40 in free bets",
      cta_label: "Claim Offer",
      cta_url: "https://www.betmgm.co.uk/",
      score: 8.5,
      features: ["Enhanced Offers", "Extensive Bet-Builder", "Very Competitive Odds"],
      tcs: "New customers only. 18+. T&Cs apply.",
    },
    {
      id: "dabble",
      name: "Dabble",
      slug: "dabble",
      logo_url: "/logos/dabble.svg",
      tagline: "£10 Free Bet No Deposit Required",
      cta_label: "Claim Here",
      cta_url: "https://www.dabble.com/",
      score: 10,
      features: ["Fantastic Promotions", "Fun Social Media Content", "New Bookmaker"],
      tcs: "#AD 18+ New customers only. Full T&Cs apply.",
    },
    {
      id: "bet365",
      name: "bet365",
      slug: "bet365",
      logo_url: "/logos/bet365.svg",
      tagline: "Bet £10 & Get £30 in Free Racing Bets",
      cta_label: "Get Offer",
      cta_url: "https://www.bet365.com/",
      score: 9.5,
      features: [],
      tcs: "#AD. 18+ New customers only. T&Cs apply.",
    },
    {
      id: "skybet",
      name: "Sky Bet",
      slug: "sky-bet",
      logo_url: "/logos/skybet.svg",
      tagline: "Bet 5p get £30 in Free Bets",
      cta_label: "Claim Offer",
      cta_url: "https://m.skybet.com/",
      score: 9.5,
      features: ["Enhanced Offers", "Request A Bet", "Vast selection of sports markets"],
      tcs: "#AD 18+ New customers only. T&Cs apply.",
    },
  ];
  const filtered = filter && filter !== "All"
    ? staticRows.filter((r) => (r.features || []).some((f) => f.toLowerCase().includes(filter.toLowerCase())))
    : staticRows;
  return NextResponse.json(filtered);
}


