/*  Nooblax Breaks – Supabase Configuration
 *  Replace the values below with your actual Supabase project credentials.
 *  Find them at: https://supabase.com/dashboard → Project → Settings → API
 */

const SUPABASE_URL = 'YOUR_SUPABASE_URL';       // e.g. https://xyzcompany.supabase.co
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; // e.g. eyJhbGciOi...

// Create the Supabase client (available globally as `supabaseClient`)
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
