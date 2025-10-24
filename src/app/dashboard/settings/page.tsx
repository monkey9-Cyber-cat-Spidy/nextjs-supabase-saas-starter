'use client';

import React from 'react';
import { Save, Key, Globe, Shield } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-white">Organization Settings</h1>
        <p className="text-xs text-slate-400 mt-1">Configure database connections, webhooks, and security headers.</p>
      </div>

      <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-6">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">Organization Name</label>
          <input
            type="text"
            defaultValue="Valeff Labs Production"
            className="mt-1.5 w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">Tenant Slug</label>
          <input
            type="text"
            defaultValue="valeff-labs"
            disabled
            className="mt-1.5 w-full bg-slate-950/60 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-500 font-mono"
          />
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition">
            <Save className="w-4 h-4" /> Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
}
