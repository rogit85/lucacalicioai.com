import { ensureDatabase } from "../src/lib/db";
import { createTables } from "../src/lib/schema";

async function main() {
  await ensureDatabase();
  await createTables();
  // eslint-disable-next-line no-console
  console.log("Database setup complete");
}

main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error);
  process.exit(1);
});


