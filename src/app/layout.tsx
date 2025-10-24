import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SaaSCore | Next.js 15 & Supabase SaaS Starter',
  description: 'Production-ready SaaS boilerplate featuring multi-tenant organization isolation with PostgreSQL Row-Level Security.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full">
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 antialiased selection:bg-sky-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
