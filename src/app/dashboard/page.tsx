'use client';

import React, { useState } from 'react';
import { Users, CreditCard, Activity, Plus, ShieldCheck, Database, ArrowUpRight } from 'lucide-react';

export default function DashboardOverviewPage() {
  const [activeTenant, setActiveTenant] = useState('valeff-labs');

  return (
    <div className="space-y-8 max-w-6xl">
      {/* Page Title & Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">System Console</h1>
          <p className="text-xs text-slate-400 mt-1">Multi-tenant production dashboard isolated by PostgreSQL Row-Level Security.</p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={activeTenant}
            onChange={(e) => setActiveTenant(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-xs rounded-xl px-3 py-2 text-white focus:outline-none focus:border-sky-500"
          >
            <option value="valeff-labs">Valeff Labs (Primary Tenant)</option>
            <option value="commercial-saas">Commercial SaaS Client</option>
          </select>
          <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition">
            <Plus className="w-3.5 h-3.5" /> New Service
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs uppercase font-semibold">Active Members</span>
            <Users className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-3xl font-extrabold text-white mt-2">24 Users</div>
          <div className="flex items-center gap-1 text-xs text-emerald-400 mt-1">
            <ArrowUpRight className="w-3.5 h-3.5" /> +4 this week
          </div>
        </div>

        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs uppercase font-semibold">PostgreSQL Relational Reads</span>
            <Database className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-extrabold text-white mt-2">1,248,390</div>
          <div className="text-xs text-slate-500 mt-1">p95 query response: 18ms</div>
        </div>

        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs uppercase font-semibold">RLS Isolation Status</span>
            <ShieldCheck className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-3xl font-extrabold text-white mt-2">Enforced</div>
          <div className="text-xs text-purple-400 mt-1">0 cross-tenant anomalies</div>
        </div>
      </div>

      {/* Realtime Audit Stream */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden">
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-sm text-white">
            <Activity className="w-4 h-4 text-sky-400" /> Relational Event & Security Audit Ledger
          </div>
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            PostgreSQL CDC Live
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900/80 text-[11px] text-slate-400 uppercase tracking-wider border-b border-slate-800">
              <tr>
                <th className="px-5 py-3.5">Operation</th>
                <th className="px-5 py-3.5">Target Entity</th>
                <th className="px-5 py-3.5">Actor Identity</th>
                <th className="px-5 py-3.5">Security Context</th>
                <th className="px-5 py-3.5">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 font-mono">
              <tr>
                <td className="px-5 py-3.5 font-bold text-sky-400">SELECT</td>
                <td className="px-5 py-3.5 text-white">public.org_memberships</td>
                <td className="px-5 py-3.5 text-slate-400">auth.uid() = 8f91..4c</td>
                <td className="px-5 py-3.5"><span className="text-emerald-400">PASS (RLS Match)</span></td>
                <td className="px-5 py-3.5 text-slate-500">Just now</td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 font-bold text-emerald-400">INSERT</td>
                <td className="px-5 py-3.5 text-white">public.invitations</td>
                <td className="px-5 py-3.5 text-slate-400">admin@valefflabs.com</td>
                <td className="px-5 py-3.5"><span className="text-emerald-400">PASS (Admin Role)</span></td>
                <td className="px-5 py-3.5 text-slate-500">14 mins ago</td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 font-bold text-purple-400">UPDATE</td>
                <td className="px-5 py-3.5 text-white">public.organizations</td>
                <td className="px-5 py-3.5 text-slate-400">sys_admin@valefflabs.com</td>
                <td className="px-5 py-3.5"><span className="text-emerald-400">PASS (Owner Role)</span></td>
                <td className="px-5 py-3.5 text-slate-500">1 hr ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
