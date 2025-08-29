"use client";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function AdminPage() {
  const { data: hero, mutate: mutateHero } = useSWR("/api/hero", fetcher);
  const { data: sites, mutate: mutateSites } = useSWR("/api/sites", fetcher);
  const [saving, setSaving] = useState(false);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 bg-white text-gray-900">
      <h1 className="text-2xl font-bold text-gray-900">Admin CMS</h1>
      <p className="text-gray-600">Edit top hero links and listed sites.</p>

      <section className="mt-6">
        <h2 className="font-semibold text-gray-900">Top Hero Links</h2>
        <pre className="mt-2 rounded bg-gray-100 p-3 text-xs overflow-auto border border-gray-200">{JSON.stringify(hero, null, 2)}</pre>
      </section>

      <section className="mt-6">
        <h2 className="font-semibold text-gray-900">Betting Sites</h2>
        <pre className="mt-2 rounded bg-gray-100 p-3 text-xs overflow-auto border border-gray-200">{JSON.stringify(sites, null, 2)}</pre>
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
          className="px-4 py-2 rounded-lg bg-gray-900 text-white font-semibold disabled:opacity-60 hover:bg-gray-800 transition-colors"
        >
          Reseed Demo Data
        </button>
      </div>
    </main>
  );
}


