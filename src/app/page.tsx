import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { ShieldCheck, Database, Zap, Users, Server, ArrowRight, CheckCircle2, Lock, GitBranch } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-slate-950 to-slate-950 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" /> Next.js 15 App Router + Supabase RLS
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Production Multi-Tenant SaaS with <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Zero Data Leakage</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Full-stack enterprise starter engineered with React Server Components, Supabase SSR Auth cookies, PostgreSQL Row-Level Security policies, and production Ubuntu VPS deployment topologies.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition shadow-lg shadow-sky-500/20"
            >
              Explore Live Console <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://github.com/monkey9-Cyber-cat-Spidy/nextjs-supabase-saas-starter"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-300 font-semibold transition"
            >
              <GitBranch className="w-4 h-4" /> GitHub Repository
            </a>
          </div>
        </div>
      </section>

      {/* Feature Architecture Matrix */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6" id="features">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl font-bold text-white tracking-tight">Engineered for Technical Audits</h2>
          <p className="text-slate-400 text-sm">Every layer is built with strict production patterns, relational integrity, and zero fluff.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 transition space-y-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">PostgreSQL Row-Level Security</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Multi-tenant data isolation enforced by PostgreSQL database engine policies, preventing cross-tenant leakage even on rogue queries.
            </p>
            <ul className="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-800/80">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> auth.uid() tenant matching</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> Automated cascading foreign keys</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 transition space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Next.js 15 Server Actions</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Server-rendered UI with streaming Suspense boundaries, zero-bundle form mutations, and automatic cookie session hydration.
            </p>
            <ul className="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-800/80">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Sub-second First Contentful Paint</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 100% TypeScript typed contracts</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 transition space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">VPS & Container Topology</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Hardened multi-stage Dockerfile, PM2 cluster configurations, and Nginx reverse proxy templates ready for Ubuntu VPS hosting.
            </p>
            <ul className="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-800/80">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Zero-downtime rolling reload</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> SSL / TLS via Let's Encrypt</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 border-t border-slate-900 bg-slate-950/40" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-bold text-white tracking-tight">Transparent Scalability</h2>
            <p className="text-slate-400 text-sm">Predictable multi-tenant subscription tiers backed by PostgreSQL usage metering.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/30 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Starter</h3>
                <p className="text-xs text-slate-400 mt-1">For single teams & early testing</p>
                <div className="mt-6 text-3xl font-extrabold text-white">$0 <span className="text-xs text-slate-500 font-normal">/ month</span></div>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400" /> Up to 5 team members</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400" /> PostgreSQL RLS Isolation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400" /> Community Support</li>
                </ul>
              </div>
              <Link href="/login" className="mt-8 block text-center py-2.5 rounded-lg border border-slate-700 hover:border-slate-500 text-white font-medium text-sm transition">
                Get Started
              </Link>
            </div>

            <div className="p-8 rounded-2xl border-2 border-sky-500 bg-slate-900/80 flex flex-col justify-between relative shadow-xl shadow-sky-500/10">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-sky-500 text-slate-950 text-xs font-bold uppercase tracking-wider">
                Most Popular
              </span>
              <div>
                <h3 className="text-lg font-bold text-white">Pro Scale</h3>
                <p className="text-xs text-slate-400 mt-1">For growing high-traffic platforms</p>
                <div className="mt-6 text-3xl font-extrabold text-white">$49 <span className="text-xs text-slate-500 font-normal">/ month</span></div>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400" /> Unlimited team members</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400" /> Dedicated Ubuntu VPS Blueprint</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400" /> Sub-50ms Global Edge Latency</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400" /> Audit Log Retention (1 Year)</li>
                </ul>
              </div>
              <Link href="/login" className="mt-8 block text-center py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition">
                Start 14-Day Free Trial
              </Link>
            </div>

            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/30 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Enterprise</h3>
                <p className="text-xs text-slate-400 mt-1">Custom on-premise & SLA guarantees</p>
                <div className="mt-6 text-3xl font-extrabold text-white">Custom</div>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400" /> Custom Database Sharding</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400" /> Dedicated VPC Peering</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400" /> 24/7 Phone & Slack Support</li>
                </ul>
              </div>
              <Link href="/login" className="mt-8 block text-center py-2.5 rounded-lg border border-slate-700 hover:border-slate-500 text-white font-medium text-sm transition">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} SaaSCore Architecture. Engineered with Next.js 15, React 18, Supabase SSR, and PostgreSQL RLS.
      </footer>
    </div>
  );
}
