import React from 'react';
import Link from 'next/link';
import { Layers, LayoutDashboard, Users, Settings, Shield, LogOut } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-100">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 bg-slate-900/60 hidden md:flex flex-col justify-between p-4">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2.5 px-2">
            <div className="w-8 h-8 rounded-lg bg-sky-500 font-bold text-slate-950 flex items-center justify-center">
              <Layers className="w-4 h-4 text-slate-950" />
            </div>
            <span className="font-bold text-base tracking-tight text-white">SaaSCore</span>
          </Link>

          <nav className="space-y-1 text-sm font-medium">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-sky-500/10 text-sky-400 font-semibold"
            >
              <LayoutDashboard className="w-4 h-4" /> Overview
            </Link>
            <Link
              href="/dashboard/team"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <Users className="w-4 h-4" /> Team Members
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <Settings className="w-4 h-4" /> Settings
            </Link>
          </nav>
        </div>

        <div className="border-t border-slate-800 pt-4 px-2 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-sky-400">
              MK
            </div>
            <div className="truncate">
              <div className="text-xs font-bold text-white truncate">mk1343093@gmail.com</div>
              <div className="text-[10px] text-emerald-400">Active Tenant (RLS)</div>
            </div>
          </div>
          <Link
            href="/login"
            className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition"
          >
            <LogOut className="w-3.5 h-3.5" /> Sign out
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="h-16 border-b border-slate-800 bg-slate-900/40 px-6 flex items-center justify-between md:hidden">
          <Link href="/" className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-sky-400" />
            <span className="font-bold text-white">SaaSCore</span>
          </Link>
          <Link href="/login" className="text-xs text-slate-400">Sign out</Link>
        </header>
        <div className="p-6 sm:p-8 flex-1">{children}</div>
      </main>
    </div>
  );
}
