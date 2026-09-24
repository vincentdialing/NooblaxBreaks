# 🎴 Nooblax Breaks — Pokemon TCG Card Showcase

A modern, static website for showcasing Pokemon TCG cards with a **Supabase** backend.  
No Node.js server needed — just static HTML files that talk directly to Supabase.

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | HTML, Tailwind CSS (CDN), Vanilla JS |
| Backend | Supabase (Auth, Database, Storage) |
| Fonts | Press Start 2P (pixel), Space Grotesk (body/display) |
| Design | Neo-Brutalist Pixel / Modern Arcade |

---

## 🚀 Setup Guide

### Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Click **"New Project"** and give it a name
3. Wait for the project to provision (~1 minute)

### Step 2: Run the Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Click **"New Query"**
3. Copy/paste the entire contents of [`supabase/schema.sql`](supabase/schema.sql)
4. Click **"Run"** — this creates all tables, RLS policies, storage bucket, and seed data

### Step 3: Create an Admin User

1. Go to **Authentication** → **Users** in your Supabase dashboard
2. Click **"Add User"** → **"Create New User"**
3. Enter your **email** and **password**
4. Check ✅ **"Auto Confirm User"**
5. Click **"Create User"**

### Step 4: Configure the Frontend

1. Go to **Settings** → **API** in your Supabase dashboard
2. Copy your **Project URL** and **anon/public key**
3. Open [`js/config.js`](js/config.js) and replace the placeholders:

```javascript
const SUPABASE_URL = 'https://YOUR-PROJECT.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key-here';
```

### Step 5: Run Locally

Serve the static files with any HTTP server:

```bash
# Using npx (Node.js)
npx serve . -l 3000

# Or Python
python3 -m http.server 3000

# Or PHP
php -S localhost:3000
```

Open **http://localhost:3000** 🎉

---

## 📁 Project Structure

```
Nooblax/
├── index.html              # Homepage (hero, featured, recent cards)
├── cards.html              # Browse all cards (search, filter, sort)
├── card.html               # Single card detail (?id=)
├── vouchers.html           # Active vouchers & promos
├── admin/
│   ├── index.html          # Admin login (email/password)
│   ├── dashboard.html      # Stats overview
│   ├── cards.html          # Manage cards (CRUD)
│   ├── card-form.html      # Add/edit card (?id= for edit)
│   ├── vouchers.html       # Manage vouchers
│   ├── voucher-form.html   # Add/edit voucher
│   └── settings.html       # Site settings (name, messenger URL)
├── js/
│   ├── config.js           # Supabase URL + anon key
│   └── components.js       # Shared UI components & utilities
├── css/
│   └── style.css           # Custom styles (neo-brutalist)
├── assets/
│   └── placeholder.svg     # Card placeholder image
└── supabase/
    └── schema.sql          # Full database schema + seed data
```

---

## 🔗 Pages & URLs

| Page | URL | Auth |
|------|-----|------|
| Homepage | `/` | Public |
| Browse Cards | `/cards.html` | Public |
| Card Detail | `/card.html?id=1` | Public |
| Vouchers | `/vouchers.html` | Public |
| Admin Login | `/admin/` | Public |
| Dashboard | `/admin/dashboard.html` | 🔒 |
| Manage Cards | `/admin/cards.html` | 🔒 |
| Add/Edit Card | `/admin/card-form.html` | 🔒 |
| Manage Vouchers | `/admin/vouchers.html` | 🔒 |
| Add/Edit Voucher | `/admin/voucher-form.html` | 🔒 |
| Settings | `/admin/settings.html` | 🔒 |

---

## 🎨 Design System

- **Primary (Teal):** `#0E839E` / `#1FB5D6`
- **Secondary (Cream):** `#F6D06F` / `#FFDF85`
- **Accent (Cherry Red):** `#E63946`
- **Dark Ink:** `#1A1E24`
- **Shell Gray:** `#ECEFF1`
- **Pixel Font:** Press Start 2P (headers, badges, prices)
- **Body & Display Font:** Space Grotesk + Plus Jakarta Sans (descriptions, card titles, nav, forms, PSA labels)

---

## 🚢 Deployment

Since this is a static site, deploy to any static hosting:

- **Netlify** — drag & drop the folder
- **Vercel** — `vercel deploy`
- **GitHub Pages** — push to repo, enable Pages
- **Cloudflare Pages** — connect your repo

No build step needed!
