import React from 'react';
import Link from 'next/link';
import { Layers, ArrowRight } from 'lucide-react';

export function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center font-bold text-slate-950 shadow-md">
            <Layers className="w-5 h-5 text-slate-950" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white">SaaSCore</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="#features" className="text-slate-400 hover:text-white transition">Features</Link>
          <Link href="#pricing" className="text-slate-400 hover:text-white transition">Pricing</Link>
          <Link href="/dashboard" className="text-slate-400 hover:text-white transition hidden sm:inline-block">Console</Link>
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition shadow-sm"
          >
            Sign In <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
