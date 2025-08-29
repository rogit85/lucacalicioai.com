import { sql } from "@vercel/postgres";
import { ensureDatabase } from "../src/lib/db";

async function clear() {
  await sql`DELETE FROM top_hero_links;`;
  await sql`DELETE FROM betting_sites;`;
}

async function seed() {
  const now = new Date().toISOString();
  const sites = [
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
      pros: ["Enhanced offers", "Competitive pricing"],
      cons: ["No e-sports free bets"],
      tcs:
        "New customers only. 7 days to place qualifying bet of £10 at 1/1 (2.0) to receive 4 x £10 Free Bets... 18+. T&Cs apply.",
      is_sponsored: true,
      created_at: now,
      updated_at: now,
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
      pros: ["Great promos"],
      cons: [],
      tcs:
        "#AD 18+ New customers only. Free Bets credited following registration... Full T&Cs apply.",
      is_sponsored: true,
      created_at: now,
      updated_at: now,
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
      pros: [],
      cons: [],
      tcs:
        "#AD. 18+ New customers only. Min deposit requirement... Time limits and T&Cs apply.",
      is_sponsored: true,
      created_at: now,
      updated_at: now,
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
      pros: [],
      cons: [],
      tcs:
        "#AD 18+ New customers only... Eligibility restrictions and further T&Cs apply.",
      is_sponsored: true,
      created_at: now,
      updated_at: now,
    },
  ];

  for (const s of sites) {
    await sql`
      INSERT INTO betting_sites (id, name, slug, logo_url, tagline, cta_label, cta_url, score, features, pros, cons, tcs, is_sponsored, created_at, updated_at)
      VALUES (${s.id}, ${s.name}, ${s.slug}, ${s.logo_url}, ${s.tagline}, ${s.cta_label}, ${s.cta_url}, ${s.score}, ${JSON.stringify(
        s.features,
      )}::json, ${JSON.stringify(s.pros)}::json, ${JSON.stringify(s.cons)}::json, ${s.tcs}, ${s.is_sponsored}, ${s.created_at}, ${s.updated_at})
      ON CONFLICT (id) DO UPDATE SET
        name=EXCLUDED.name,
        slug=EXCLUDED.slug,
        logo_url=EXCLUDED.logo_url,
        tagline=EXCLUDED.tagline,
        cta_label=EXCLUDED.cta_label,
        cta_url=EXCLUDED.cta_url,
        score=EXCLUDED.score,
        features=EXCLUDED.features,
        pros=EXCLUDED.pros,
        cons=EXCLUDED.cons,
        tcs=EXCLUDED.tcs,
        is_sponsored=EXCLUDED.is_sponsored,
        updated_at=EXCLUDED.updated_at;
    `;
  }

  const hero = [
    {
      id: "hero-betmgm",
      title: "BetMGM",
      subtitle: "Bet £10, get £40 in free bets",
      brand: "betmgm",
      href: "https://www.betmgm.co.uk/",
      color: "#111827",
    },
    {
      id: "hero-dabble",
      title: "Dabble",
      subtitle: "£10 Free Bet No Deposit",
      brand: "dabble",
      href: "https://www.dabble.com/",
      color: "#00E5FF",
    },
    {
      id: "hero-bet365",
      title: "bet365",
      subtitle: "Bet £10 & Get £30",
      brand: "bet365",
      href: "https://www.bet365.com/",
      color: "#00A651",
    },
    {
      id: "hero-skybet",
      title: "Sky Bet",
      subtitle: "Bet 5p get £30",
      brand: "skybet",
      href: "https://m.skybet.com/",
      color: "#1E3A8A",
    },
  ];

  for (const h of hero) {
    await sql`
      INSERT INTO top_hero_links (id, title, subtitle, brand, href, color)
      VALUES (${h.id}, ${h.title}, ${h.subtitle}, ${h.brand}, ${h.href}, ${h.color})
      ON CONFLICT (id) DO UPDATE SET
        title=EXCLUDED.title,
        subtitle=EXCLUDED.subtitle,
        brand=EXCLUDED.brand,
        href=EXCLUDED.href,
        color=EXCLUDED.color;
    `;
  }
}

async function main() {
  await ensureDatabase();
  await seed();
  // eslint-disable-next-line no-console
  console.log("Seed complete");
}

main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error);
  process.exit(1);
});


