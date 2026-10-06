# Nooblax Breaks – Premium Pokémon TCG Web Showcase

Official web showcase and catalog for **Nooblax Breaks**, featuring authenticated Pokémon Trading Card Game grails, Special Art Rares (SAR), and PSA 10 slabs.

---

## Architecture Overview

This project is divided into two distinct components:

1. **Main Public Website (`/`)**:
   - Zero admin presence or links.
   - Clean, high-converting showcase for collectors and buyers.
   - Real-time read-only sync with Supabase for cards, collector vouches, and community TCG events.
   - Direct Messenger inquiry routing with pre-filled card information.

2. **Dedicated Standalone Admin Portal (`/admin-portal/`)**:
   - Completely separate website with its own authentication and domain/URL readiness.
   - Full CRUD management for:
     - **Cards Inventory** (pricing, Pokemon type, rarity, condition, featured, sold status, image upload to Supabase Storage).
     - **Collector Vouches & Reviews** (add/edit buyer feedback and star ratings).
     - **TCG Events Showcase** (update real tournament and trade meetup proof photos).
     - **Public Site Settings** (live updates to Messenger URL, brand title, and hero announcements).

---

## 3-Step Supabase Setup Guide

### Step 1: Run the Database Schema
1. Log in to your [Supabase Dashboard](https://supabase.com/dashboard).
2. Go to **SQL Editor** → **New Query**.
3. Open `supabase/schema.sql` from this repository, copy the entire SQL script, and click **Run**.
   - This sets up all 5 tables (`cards`, `testimonials`, `events`, `vouchers`, `settings`), public storage bucket (`card-images`), Row Level Security policies, and initial authentic data.

### Step 2: Create Your Admin User
1. In your Supabase Dashboard, navigate to **Authentication** → **Users**.
2. Click **Add User** → **Create User**.
3. Enter your admin email and password.

### Step 3: Connect Credentials
1. In your Supabase Dashboard, go to **Project Settings** → **API**.
2. Copy your **Project URL** and **Project API keys (anon public)**.
3. Paste them into:
   - `js/config.js` (for the main public site)
   - `admin-portal/js/config.js` (for the dedicated admin portal)

---

## Running Locally

To run both sites locally on different ports:

- **Main Public Site**:
  ```bash
  python3 -m http.server 5501
  # Open: http://localhost:5501
  ```

- **Dedicated Admin Portal**:
  ```bash
  cd admin-portal
  python3 -m http.server 8080
  # Open: http://localhost:8080
  ```
