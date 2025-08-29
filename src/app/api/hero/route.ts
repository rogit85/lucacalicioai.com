import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  const hasDb = !!process.env.POSTGRES_URL;
  try {
    if (hasDb) {
      const rows = (await sql`SELECT * FROM top_hero_links;`).rows;
      return NextResponse.json(rows);
    }
  } catch (e) {
    // fall through
  }
  return NextResponse.json([
    { id: "hero-betmgm", title: "BetMGM", subtitle: "Bet £10, get £40", brand: "betmgm", href: "https://www.betmgm.co.uk/", color: "#111827" },
    { id: "hero-dabble", title: "Dabble", subtitle: "£10 Free Bet", brand: "dabble", href: "https://www.dabble.com/", color: "#00E5FF" },
    { id: "hero-bet365", title: "bet365", subtitle: "Bet £10 & Get £30", brand: "bet365", href: "https://www.bet365.com/", color: "#00A651" },
    { id: "hero-skybet", title: "Sky Bet", subtitle: "Bet 5p get £30", brand: "skybet", href: "https://m.skybet.com/", color: "#1E3A8A" },
  ]);
}


