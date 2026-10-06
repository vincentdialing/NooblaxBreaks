# Nooblax Breaks – Dedicated Admin Portal

This is the private, standalone admin website for Nooblax Breaks.

## How to Deploy as a Separate Website

You can deploy this folder (`admin-portal`) completely independently from the main customer-facing website:

1. **Option A: Separate Subdomain on Vercel / Netlify / Cloudflare Pages**
   - Point your git repository root to `admin-portal` or deploy `admin-portal` as a separate project.
   - Example URL: `https://admin.nooblaxbreaks.com` or `https://nooblax-admin.vercel.app`

2. **Option B: Local Development / Staging**
   - Run a local web server inside this directory:
     ```bash
     cd admin-portal
     python3 -m http.server 8080
     ```
   - Open: `http://localhost:8080`

## Supabase Connection Setup

1. Open `js/config.js` in this directory:
   ```javascript
   const SUPABASE_URL = 'https://YOUR_PROJECT.supabase.co';
   const SUPABASE_ANON_KEY = 'eyJhbGciOi...';
   ```
2. Replace with your actual project URL and anon public key from your Supabase Dashboard:
   - **Settings** → **API** → **Project URL** and **Project API keys (anon public)**.

## Security & Authentication

- The admin portal requires an email and password to log in.
- Create your admin account directly in your Supabase Dashboard:
  - Go to **Authentication** → **Users** → **Add User** (enter your email & password).
- All changes are protected by Supabase Row Level Security (RLS). Visitors on the public website can only read data, while only authenticated admin users can create, update, or delete content.
