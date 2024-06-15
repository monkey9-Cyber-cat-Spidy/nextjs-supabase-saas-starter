# Next.js + Supabase SaaS Starter Core

Production-grade, secure, multi-tenant SaaS architecture powered by **Next.js 15 (App Router)**, **Supabase SSR**, and **PostgreSQL Row-Level Security (RLS)**.

## Architecture Highlights
- **Next.js 15 App Router**: Server Components, streaming Suspense boundaries, and Server Actions.
- **Supabase SSR Cookie Auth**: Secure cookie-based authentication with Next.js Middleware session refresh.
- **PostgreSQL Multi-Tenant RLS**: Zero data leaking between organizations enforced at the database level.
- **Optimized Relational Schema**: Normalized tables for users, organizations, memberships, and subscription audits.
- **VPS Ready**: Dockerfile and Docker Compose configurations optimized for Ubuntu VPS deployment.

## Tech Stack
- Frontend: Next.js 15, React 18, Tailwind CSS, TypeScript
- Backend: Next.js Server Actions, Route Handlers, Node.js
- Database: Supabase (PostgreSQL 15+), Row-Level Security (RLS)
- Deployment: Docker, Nginx, Ubuntu VPS

## Database Schema (PostgreSQL)
```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE organizations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE org_memberships (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    org_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    role VARCHAR(50) DEFAULT 'member' CHECK (role IN ('owner', 'admin', 'member')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(org_id, user_id)
);

ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE org_memberships ENABLE ROW LEVEL SECURITY;

CREATE POLICY org_access_policy ON organizations
    FOR ALL
    USING (
        id IN (
            SELECT org_id FROM org_memberships
            WHERE user_id = auth.uid()
        )
    );
```

## Getting Started
```bash
npm install
npm run dev
```

License: MIT
