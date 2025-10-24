import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
  const supabase = createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    // Return sample organizations for development / demo mode
    return NextResponse.json([
      { id: '1', name: 'Valeff Labs Production', slug: 'valeff-labs', role: 'owner', plan: 'enterprise' },
      { id: '2', name: 'Commercial SaaS Staging', slug: 'saas-staging', role: 'admin', plan: 'pro' },
    ]);
  }

  const { data, error } = await supabase
    .from('organizations')
    .select('id, name, slug, plan_tier, created_at');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
