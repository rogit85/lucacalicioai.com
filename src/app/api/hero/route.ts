import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  const rows = (await sql`SELECT * FROM top_hero_links;`).rows;
  return NextResponse.json(rows);
}


