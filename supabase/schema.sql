-- ================================================================
-- Nooblax Breaks – Supabase Database Schema
-- Run this in your Supabase SQL Editor (Dashboard → SQL Editor → New Query)
-- ================================================================

-- ======================== TABLES ========================

CREATE TABLE IF NOT EXISTS cards (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  set_name TEXT,
  rarity TEXT DEFAULT 'Common',
  price NUMERIC(10,2) DEFAULT 0,
  condition TEXT DEFAULT 'NM',
  is_featured BOOLEAN DEFAULT false,
  is_sold BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS vouchers (
  id BIGSERIAL PRIMARY KEY,
  code TEXT UNIQUE NOT NULL,
  description TEXT,
  discount_type TEXT DEFAULT 'percentage',
  discount_value NUMERIC(10,2) DEFAULT 0,
  valid_from DATE,
  valid_until DATE,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS settings (
  id BIGSERIAL PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value TEXT
);

-- ======================== ROW LEVEL SECURITY ========================

ALTER TABLE cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE vouchers ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- Public read access (anyone can view)
CREATE POLICY "Anyone can view cards"    ON cards    FOR SELECT USING (true);
CREATE POLICY "Anyone can view vouchers" ON vouchers FOR SELECT USING (true);
CREATE POLICY "Anyone can view settings" ON settings FOR SELECT USING (true);

-- Authenticated write access (admin only)
CREATE POLICY "Auth users can insert cards"  ON cards    FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Auth users can update cards"  ON cards    FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Auth users can delete cards"  ON cards    FOR DELETE TO authenticated USING (true);

CREATE POLICY "Auth users can insert vouchers"  ON vouchers FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Auth users can update vouchers"  ON vouchers FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Auth users can delete vouchers"  ON vouchers FOR DELETE TO authenticated USING (true);

CREATE POLICY "Auth users can insert settings"  ON settings FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Auth users can update settings"  ON settings FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Auth users can delete settings"  ON settings FOR DELETE TO authenticated USING (true);

-- ======================== STORAGE BUCKET ========================
-- Create a public bucket for card images.
-- Run this in SQL Editor or create via Dashboard → Storage → New Bucket
INSERT INTO storage.buckets (id, name, public) VALUES ('card-images', 'card-images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies: anyone can view, only authenticated can upload/delete
CREATE POLICY "Public card images" ON storage.objects FOR SELECT USING (bucket_id = 'card-images');
CREATE POLICY "Auth upload card images" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'card-images');
CREATE POLICY "Auth update card images" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'card-images');
CREATE POLICY "Auth delete card images" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'card-images');

-- ======================== UPDATED_AT TRIGGER ========================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER cards_updated_at
  BEFORE UPDATE ON cards
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ======================== SEED DATA ========================

-- Default settings
INSERT INTO settings (key, value) VALUES
  ('site_name',      'Nooblax Breaks'),
  ('fb_messenger_url','https://www.facebook.com/profile.php?id=61593883622380'),
  ('hero_tagline',   'Premium Pokemon TCG Cards & Breaks'),
  ('hero_subtitle',  'Discover rare pulls, graded gems, and exclusive deals. Your next chase card is waiting.')
ON CONFLICT (key) DO NOTHING;

-- Sample cards
INSERT INTO cards (name, description, set_name, rarity, price, condition, is_featured, is_sold) VALUES
  ('Charizard ex',           'A powerful fire-type Pokemon card with stunning full-art illustration.',     'Scarlet & Violet',   'Ultra Rare',       8500,  'NM',     true,  false),
  ('Pikachu VMAX',           'Rainbow rare Pikachu in its Gigantamax form.',                              'Crown Zenith',       'Secret Rare',      12000, 'Mint',   true,  false),
  ('Mew ex SAR',             'Special Art Rare featuring Mew in a beautiful cosmic scene.',                'Scarlet & Violet 151','SAR',             25000, 'PSA 10', true,  false),
  ('Arcanine Illustration',  'Illustration Rare with hand-drawn style artwork.',                          'Obsidian Flames',    'Illustration Rare', 3500, 'NM',     false, false),
  ('Eevee',                  'Classic Eevee card, perfect for any collection.',                            'Paldea Evolved',     'Common',            150,  'NM',     false, false),
  ('Gardevoir ex',           'Psychic-type powerhouse with elegant art.',                                 'Scarlet & Violet',   'Ultra Rare',       4200,  'NM',     true,  false),
  ('Lechonk',                'Adorable Lechonk card from the Paldea region.',                             'Scarlet & Violet',   'Uncommon',          200,  'Mint',   false, false),
  ('Miraidon ex',            'The legendary Pokemon from the future, graded gem mint.',                   'Scarlet & Violet',   'Art Rare',         6800,  'PSA 10', true,  true)
ON CONFLICT DO NOTHING;

-- Sample vouchers
INSERT INTO vouchers (code, description, discount_type, discount_value, valid_from, valid_until, is_active) VALUES
  ('NOOBLAX10', 'Get 10% off on any card purchase!',      'percentage', 10,  '2026-01-01', '2026-12-31', true),
  ('FIRSTBREAK','Flat 100 pesos off your first purchase!', 'fixed',     100, '2026-01-01', '2026-12-31', true),
  ('SHINYHUNT', '15% off on all Ultra Rare cards!',        'percentage', 15,  '2026-06-01', '2026-12-31', true)
ON CONFLICT DO NOTHING;
