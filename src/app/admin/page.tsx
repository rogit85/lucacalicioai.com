"use client";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function AdminPage() {
  const { data: hero, mutate: mutateHero } = useSWR("/api/hero", fetcher);
  const { data: sites, mutate: mutateSites } = useSWR("/api/sites", fetcher);
  const [saving, setSaving] = useState(false);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold">Admin CMS</h1>
      <p className="text-neutral-400">Edit top hero links and listed sites.</p>

      <section className="mt-6">
        <h2 className="font-semibold">Top Hero Links</h2>
        <pre className="mt-2 rounded bg-neutral-900 p-3 text-xs overflow-auto">{JSON.stringify(hero, null, 2)}</pre>
      </section>

      <section className="mt-6">
        <h2 className="font-semibold">Betting Sites</h2>
        <pre className="mt-2 rounded bg-neutral-900 p-3 text-xs overflow-auto">{JSON.stringify(sites, null, 2)}</pre>
      </section>

      <div className="mt-6 flex gap-3">
        <button
          disabled={saving}
          onClick={async () => {
            setSaving(true);
            await fetch("/api/admin/reseed", { method: "POST" });
            await Promise.all([mutateHero(), mutateSites()]);
            setSaving(false);
          }}
          className="px-3 py-2 rounded bg-white text-black font-semibold disabled:opacity-60"
        >
          Reseed Demo Data
        </button>
      </div>
    </main>
  );
}


