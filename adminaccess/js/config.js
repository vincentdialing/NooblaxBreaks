// ================================================================
// Nooblax Breaks – Dedicated Admin Portal Configuration
// ================================================================

const SUPABASE_URL = 'https://mcsqzwjleebxjrqayuha.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jc3F6d2psZWVieGpycWF5dWhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzMDIwNTYsImV4cCI6MjEwNjg3ODA1Nn0.LgagB9mRgpjjrL_l7wk_TrBvT9sSuimpdpL5rljrRe8';

// Initialize Supabase Client
const supabaseClient = (typeof window !== 'undefined' && window.supabase)
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;
