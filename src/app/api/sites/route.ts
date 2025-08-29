import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filter = searchParams.get("filter");
  let rows;
  if (filter && filter !== "All") {
    rows = (
      await sql`
        SELECT * FROM betting_sites WHERE features::text ILIKE ${"%" + filter + "%"} ORDER BY score DESC;`
    ).rows;
  } else {
    rows = (await sql`SELECT * FROM betting_sites ORDER BY score DESC;`).rows;
  }
  return NextResponse.json(rows);
}


