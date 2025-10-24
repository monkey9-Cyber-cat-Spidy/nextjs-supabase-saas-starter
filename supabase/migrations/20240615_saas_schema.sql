-- Complete Production Schema for Multi-Tenant SaaS with Row Level Security
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Organizations Table
CREATE TABLE IF NOT EXISTS public.organizations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    plan_tier VARCHAR(50) DEFAULT 'starter' CHECK (plan_tier IN ('starter', 'pro', 'enterprise')),
    stripe_customer_id VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Organization Memberships
CREATE TABLE IF NOT EXISTS public.org_memberships (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    org_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    role VARCHAR(50) DEFAULT 'member' CHECK (role IN ('owner', 'admin', 'member', 'billing')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(org_id, user_id)
);

-- 3. Audit Logs
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id BIGSERIAL PRIMARY KEY,
    org_id UUID REFERENCES public.organizations(id) ON DELETE CASCADE,
    actor_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    action VARCHAR(100) NOT NULL,
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.org_memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Policy: Select Organizations
CREATE POLICY "Users can view organizations they belong to"
    ON public.organizations
    FOR SELECT
    USING (
        id IN (
            SELECT org_id FROM public.org_memberships
            WHERE user_id = auth.uid()
        )
    );

-- Policy: Update Organizations (Owner / Admin)
CREATE POLICY "Admins and Owners can update their organization"
    ON public.organizations
    FOR UPDATE
    USING (
        id IN (
            SELECT org_id FROM public.org_memberships
            WHERE user_id = auth.uid() AND role IN ('owner', 'admin')
        )
    );

-- Policy: Memberships Read
CREATE POLICY "Members can view membership roster"
    ON public.org_memberships
    FOR SELECT
    USING (
        org_id IN (
            SELECT org_id FROM public.org_memberships
            WHERE user_id = auth.uid()
        )
    );

-- Policy: Audit Logs Read
CREATE POLICY "Admins can view audit logs"
    ON public.audit_logs
    FOR SELECT
    USING (
        org_id IN (
            SELECT org_id FROM public.org_memberships
            WHERE user_id = auth.uid() AND role IN ('owner', 'admin')
        )
    );
