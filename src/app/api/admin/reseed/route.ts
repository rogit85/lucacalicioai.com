import { NextResponse } from "next/server";
import "../../../../../../scripts/db-seed";

export async function POST() {
  return NextResponse.json({ ok: true });
}


