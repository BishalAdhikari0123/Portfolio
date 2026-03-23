/// <reference types="node" />

import { createClient } from "@supabase/supabase-js";

export function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    const missing: string[] = [];
    if (!supabaseUrl) {
      missing.push("NEXT_PUBLIC_SUPABASE_URL (or SUPABASE_URL)");
    }
    if (!serviceRoleKey) {
      missing.push("SUPABASE_SERVICE_ROLE_KEY (or SUPABASE_SECRET_KEY)");
    }
    throw new Error(`Missing Supabase env vars: ${missing.join(", ")}`);
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
