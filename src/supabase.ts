import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase URL or Anon Key is missing. Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are defined in your .env file.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export type SupabaseClientType = typeof supabase;

if (typeof window !== 'undefined') {
  (window as any).supabase = supabase;
}
