import { sql } from "@vercel/postgres";

export async function ensureDatabase() {
  await sql`SELECT 1;`;
}

export { sql };


