import { sql } from "@vercel/postgres";

export type SiteFeature =
  | "Acca Offers"
  | "Bet £10 Get £40"
  | "Daily Offer Boosts"
  | "Live Streaming"
  | "Online Casino"
  | "PayPal"
  | "New Bookmaker"
  | "Bet £10 Get £30";

export interface BettingSite {
  id: string;
  name: string;
  slug: string;
  logoUrl: string;
  tagline: string;
  ctaLabel: string;
  ctaUrl: string;
  score: number;
  features: string[];
  pros?: string[];
  cons?: string[];
  tcs: string;
  isSponsored: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TopHeroLink {
  id: string;
  title: string;
  subtitle: string;
  brand: string;
  href: string;
  color: string;
}

export async function createTables() {
  await sql`
    CREATE TABLE IF NOT EXISTS betting_sites (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      logo_url TEXT NOT NULL,
      tagline TEXT NOT NULL,
      cta_label TEXT NOT NULL,
      cta_url TEXT NOT NULL,
      score REAL NOT NULL,
      features JSON NOT NULL,
      pros JSON,
      cons JSON,
      tcs TEXT NOT NULL,
      is_sponsored BOOLEAN NOT NULL DEFAULT false,
      created_at TIMESTAMP NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMP NOT NULL DEFAULT NOW()
    );
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS top_hero_links (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      subtitle TEXT NOT NULL,
      brand TEXT NOT NULL,
      href TEXT NOT NULL,
      color TEXT NOT NULL
    );
  `;
}


