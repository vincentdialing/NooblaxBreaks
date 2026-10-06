-- ================================================================
-- Nooblax Breaks – Supabase Database Schema
-- Run this in your Supabase SQL Editor (Dashboard → SQL Editor → New Query)
-- ================================================================

-- ======================== 1. TABLES ========================

-- Cards table
CREATE TABLE IF NOT EXISTS cards (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  pokemon_type TEXT DEFAULT 'Colorless',
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

-- If the cards table already existed without pokemon_type, add it safely
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'cards' AND column_name = 'pokemon_type'
  ) THEN
    ALTER TABLE cards ADD COLUMN pokemon_type TEXT DEFAULT 'Colorless';
  END IF;
END $$;

-- Testimonials / Vouches table
CREATE TABLE IF NOT EXISTS testimonials (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT,
  rating INT DEFAULT 5,
  text TEXT NOT NULL,
  date TEXT,
  verified BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Events Showcase table
CREATE TABLE IF NOT EXISTS events (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  date TEXT NOT NULL,
  image_url TEXT,
  fallback_url TEXT,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Vouchers table (optional promo engine)
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

-- Site settings key-value store
CREATE TABLE IF NOT EXISTS settings (
  id BIGSERIAL PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value TEXT
);

-- ======================== 2. ROW LEVEL SECURITY (RLS) ========================

ALTER TABLE cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE vouchers ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any to allow clean re-runs
DROP POLICY IF EXISTS "Public can view cards" ON cards;
DROP POLICY IF EXISTS "Public can view testimonials" ON testimonials;
DROP POLICY IF EXISTS "Public can view events" ON events;
DROP POLICY IF EXISTS "Public can view vouchers" ON vouchers;
DROP POLICY IF EXISTS "Public can view settings" ON settings;

DROP POLICY IF EXISTS "Authenticated can insert cards" ON cards;
DROP POLICY IF EXISTS "Authenticated can update cards" ON cards;
DROP POLICY IF EXISTS "Authenticated can delete cards" ON cards;

DROP POLICY IF EXISTS "Authenticated can insert testimonials" ON testimonials;
DROP POLICY IF EXISTS "Authenticated can update testimonials" ON testimonials;
DROP POLICY IF EXISTS "Authenticated can delete testimonials" ON testimonials;

DROP POLICY IF EXISTS "Authenticated can insert events" ON events;
DROP POLICY IF EXISTS "Authenticated can update events" ON events;
DROP POLICY IF EXISTS "Authenticated can delete events" ON events;

DROP POLICY IF EXISTS "Authenticated can insert vouchers" ON vouchers;
DROP POLICY IF EXISTS "Authenticated can update vouchers" ON vouchers;
DROP POLICY IF EXISTS "Authenticated can delete vouchers" ON vouchers;

DROP POLICY IF EXISTS "Authenticated can insert settings" ON settings;
DROP POLICY IF EXISTS "Authenticated can update settings" ON settings;
DROP POLICY IF EXISTS "Authenticated can delete settings" ON settings;

-- Public READ-ONLY access (Visitors can view all content without logging in)
CREATE POLICY "Public can view cards"        ON cards        FOR SELECT USING (true);
CREATE POLICY "Public can view testimonials" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Public can view events"       ON events       FOR SELECT USING (true);
CREATE POLICY "Public can view vouchers"     ON vouchers     FOR SELECT USING (true);
CREATE POLICY "Public can view settings"     ON settings     FOR SELECT USING (true);

-- Authenticated WRITE access (Only logged-in admin can insert/update/delete)
CREATE POLICY "Authenticated can insert cards"        ON cards        FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated can update cards"        ON cards        FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated can delete cards"        ON cards        FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated can insert testimonials" ON testimonials FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated can update testimonials" ON testimonials FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated can delete testimonials" ON testimonials FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated can insert events"       ON events       FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated can update events"       ON events       FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated can delete events"       ON events       FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated can insert vouchers"     ON vouchers     FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated can update vouchers"     ON vouchers     FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated can delete vouchers"     ON vouchers     FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated can insert settings"     ON settings     FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated can update settings"     ON settings     FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated can delete settings"     ON settings     FOR DELETE TO authenticated USING (true);

-- ======================== 3. STORAGE BUCKET ========================
-- Create a public bucket for card & event images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('card-images', 'card-images', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Storage policies: anyone can view, authenticated can upload/update/delete
DROP POLICY IF EXISTS "Public card images" ON storage.objects;
DROP POLICY IF EXISTS "Auth upload card images" ON storage.objects;
DROP POLICY IF EXISTS "Auth update card images" ON storage.objects;
DROP POLICY IF EXISTS "Auth delete card images" ON storage.objects;

CREATE POLICY "Public card images"       ON storage.objects FOR SELECT USING (bucket_id = 'card-images');
CREATE POLICY "Auth upload card images"  ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'card-images');
CREATE POLICY "Auth update card images"  ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'card-images');
CREATE POLICY "Auth delete card images"  ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'card-images');

-- ======================== 4. UPDATED_AT TRIGGER ========================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS cards_updated_at ON cards;
CREATE TRIGGER cards_updated_at
  BEFORE UPDATE ON cards
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ======================== 5. SEED DATA ========================

-- Settings
INSERT INTO settings (key, value) VALUES
  ('site_name',       'Nooblax Breaks'),
  ('fb_messenger_url','https://www.facebook.com/profile.php?id=61593883622380'),
  ('hero_tagline',    'RARE GRAILS. GRADED SLABS. NEXT-LEVEL PULLS.'),
  ('hero_subtitle',   'The premier collector''s showcase for authenticated Pokémon TCG singles, Special Art Rares (SAR), and PSA 10 slabs. Message us directly for live availability & fast nationwide delivery.')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

-- 16 Default Authentic Cards
INSERT INTO cards (id, name, pokemon_type, set_name, rarity, price, condition, is_featured, is_sold, image_url, description) VALUES
  (1,  'Charizard ex (Special Art Rare)',      'Fire',             'Scarlet & Violet: 151',           'SAR',               8500,  'PSA 10', true,  false, 'https://images.pokemontcg.io/sv3pt5/199_hires.png', 'The definitive Charizard ex Special Illustration Rare from the coveted 151 collection. Flawless surface texture and deep fiery foil accents. Encased in a pristine PSA 10 Gem Mint slab.'),
  (2,  'Umbreon VMAX (Moonbreon Alt Art)',     'Darkness',         'Sword & Shield: Evolving Skies',  'Secret Rare',      42000,  'PSA 10', true,  true,  'https://images.pokemontcg.io/swsh7/215_hires.png', 'The undisputed modern holy grail. Stunning celestial artwork featuring Umbreon reaching for the moon. Recently sold to a VIP collector — displayed for showcase reference.'),
  (3,  'Mew ex (Special Art Rare)',             'Psychic',          'Scarlet & Violet: 151',           'SAR',               6200,  'NM',     true,  false, 'https://images.pokemontcg.io/sv3pt5/205_hires.png', 'Mesmerizing celestial bubble illustration by USGMEN. Clean edges, zero surface scratches, sleeved immediately from fresh pack into magnetic toploader.'),
  (4,  'Giratina V (Alternate Art)',           'Dragon',           'Sword & Shield: Lost Origin',     'Ultra Rare',       18500,  'PSA 10', true,  false, 'https://images.pokemontcg.io/swsh11/186_hires.png', 'Intricate Distortion World masterpiece by Shinji Kanda. Widely recognized as one of the most artistic chase cards in modern Pokémon TCG history. Graded PSA 10.'),
  (5,  'Gengar VMAX (Alternate Art)',          'Psychic, Darkness','Sword & Shield: Fusion Strike',   'Secret Rare',      16800,  'PSA 10', true,  false, 'https://images.pokemontcg.io/swsh8/271_hires.png', 'Massive Gigantamax Gengar hoovering trees and houses! Top-tier modern fan favorite with rich purple foil saturation and perfect centering.'),
  (6,  'Rayquaza VMAX (Alternate Art)',        'Dragon',           'Sword & Shield: Evolving Skies',  'Secret Rare',      24500,  'PSA 10', true,  false, 'https://images.pokemontcg.io/swsh7/218_hires.png', 'The ancient sky guardian dragon soaring over an ethereal forest pagoda. Highest grade PSA 10 Gem Mint certified.'),
  (7,  'Mewtwo VSTAR (Galarian Gallery)',      'Psychic',          'Crown Zenith',                    'Art Rare',          3900,  'Mint',   false, false, 'https://images.pokemontcg.io/swsh12pt5gg/GG44_hires.png', 'Epic aerial duel between Mewtwo and Charizard over a scorched canyon. Textured holographic finish in pack-fresh condition.'),
  (8,  'Charizard ex (Special Illustration)',  'Darkness, Fire',   'Obsidian Flames',                 'SAR',               4900,  'NM',     false, false, 'https://images.pokemontcg.io/sv3/223_hires.png', 'Darkness-type Tera Charizard ex sparkling with crystalline crown power. Beautiful foil reflectivity, clean back borders.'),
  (9,  'Iono (Special Art Rare)',              'Lightning, Colorless','Paldea Evolved',               'SAR',               4800,  'NM',     false, false, 'https://images.pokemontcg.io/sv2/269_hires.png', 'The iconic Gym Leader & streamer waifu grail of the Scarlet & Violet era. Clean silver borders, zero whitening on corners.'),
  (10, 'Magikarp (Illustration Rare)',         'Water',            'Paldea Evolved',                  'Illustration Rare', 5400,  'NM',     false, false, 'https://images.pokemontcg.io/sv2/203_hires.png', 'Traditional Japanese woodblock art style featuring the legendary ascending carp. One of the hottest modern sleeper grails.'),
  (11, 'Gardevoir ex (Special Art Rare)',      'Psychic',          'Scarlet & Violet Base',           'SAR',               2800,  'NM',     false, false, 'https://images.pokemontcg.io/sv1/245_hires.png', 'Touching visual storyline card showing Ralts growing alongside its human family across the generations. Pack fresh.'),
  (12, 'Pikachu VMAX (Rainbow Secret)',        'Lightning',        'Crown Zenith / Vivid Voltage',    'Secret Rare',      11500,  'PSA 10', false, false, 'https://images.pokemontcg.io/swsh4/188_hires.png', 'Beloved Chunky Pikachu ("Chonkachu") in sparkling Rainbow Hyper Rare holographic foil. Encased in a crystal-clear PSA 10 slab.'),
  (13, 'Venusaur ex (Special Art Rare)',       'Grass',            'Scarlet & Violet: 151',           'SAR',               3600,  'PSA 10', false, false, 'https://images.pokemontcg.io/sv3pt5/198_hires.png', 'The verdant giant Venusaur blooming in a vibrant tropical glade. Flawless foil texture certified PSA 10.'),
  (14, 'Lucario VSTAR (Galarian Gallery)',     'Fighting',         'Crown Zenith',                    'Art Rare',          2900,  'Mint',   false, false, 'https://images.pokemontcg.io/swsh12pt5gg/GG22_hires.png', 'Dynamic aura sphere strike illustration with pristine centering and crisp edges.'),
  (15, 'Origin Forme Dialga VSTAR (Gold)',     'Metal',            'Crown Zenith',                    'Secret Rare',       6800,  'PSA 10', false, false, 'https://images.pokemontcg.io/swsh12pt5gg/GG68_hires.png', 'The golden master of time radiating immense celestial energy. Pristine PSA 10 slab.'),
  (16, 'Snorlax (151 Illustration Rare)',      'Colorless',        'Scarlet & Violet: 151',           'Illustration Rare', 2400,  'Mint',   true,  false, 'https://images.pokemontcg.io/svp/51_hires.png', 'The sleepy mascot of Nooblax Breaks sleeping peacefully surrounded by playful Pidgey and Diglett.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  pokemon_type = EXCLUDED.pokemon_type,
  set_name = EXCLUDED.set_name,
  rarity = EXCLUDED.rarity,
  price = EXCLUDED.price,
  condition = EXCLUDED.condition,
  is_featured = EXCLUDED.is_featured,
  is_sold = EXCLUDED.is_sold,
  image_url = EXCLUDED.image_url,
  description = EXCLUDED.description;

-- Set sequence for cards table to next available id
SELECT setval('cards_id_seq', (SELECT COALESCE(MAX(id), 1) FROM cards));

-- 6 Default English Testimonials / Vouches
INSERT INTO testimonials (id, name, location, rating, text, date, verified) VALUES
  (1, 'Mark D.',   'Cebu City',       5, 'Super legit seller! Inquired about the Charizard ex SAR and received a reply within minutes. The card arrived in pristine condition, securely packed with thick bubble wrap and a reinforced hard case. Will definitely buy again!', '2026-08-15', true),
  (2, 'Jessa R.',  'Manila',          5, 'First time ordering high-value Pokemon cards online and the entire transaction was seamless. The seller was extremely responsive and sent an HD close-up video of the card before shipping. 100% trusted and recommended!', '2026-07-22', true),
  (3, 'Kyle M.',   'Davao City',      5, 'I have placed 3 separate orders with Nooblax Breaks now. Every single card is authentic, mint, and packaged with extreme care. Fair prices, transparent service, and fast courier shipping. Best TCG seller in the Philippines!', '2026-06-10', true),
  (4, 'Raph T.',   'Iloilo City',     5, 'Ordered the PSA 10 Giratina V Alt Art. The slab is completely genuine and verified directly on the official PSA cert database. Fast shipping from Cebu to Iloilo in just 2 days. Thank you, Nooblax!', '2026-05-18', true),
  (5, 'Angelo C.', 'Cagayan de Oro',  5, 'Found their page on Facebook and sent a DM. Incredibly accommodating and friendly seller who provided timestamped photos and clear condition checks. True collector-to-collector experience!', '2026-04-05', true),
  (6, 'Tricia S.', 'Quezon City',     5, 'For anyone hesitant about ordering, go for it! My Mew ex SAR arrived in flawless mint condition with bulletproof protective packaging. Nooblax Breaks is definitely the real deal.', '2026-03-20', true)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  location = EXCLUDED.location,
  rating = EXCLUDED.rating,
  text = EXCLUDED.text,
  date = EXCLUDED.date,
  verified = EXCLUDED.verified;

SELECT setval('testimonials_id_seq', (SELECT COALESCE(MAX(id), 1) FROM testimonials));

-- 3 Default Real Events
INSERT INTO events (id, title, location, date, image_url, fallback_url, description) VALUES
  (1, 'Cebu TCG Tournament 2025',     'SM Seaside City, Cebu',     'December 2025', '/assets/events/event-1.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pyrkon_2022_Pokemon_Trading_Card_Game.jpg/1280px-Pyrkon_2022_Pokemon_Trading_Card_Game.jpg', 'Participated in the regional TCG tournament with over 100 collectors and live matches.'),
  (2, 'Pokemon Card Meetup & Trade',  'Ayala Center Cebu',         'March 2026',    '/assets/events/event-2.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/POKEMON_card_battle.jpg/1280px-POKEMON_card_battle.jpg', 'Official card trade meetup with live breaks and giveaways.'),
  (3, 'Community League Finals',      'Robinsons Galleria Cebu',   'July 2026',     '/assets/events/event-3.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Entrance_of_the_2022_London_Pok%C3%A9mon_World_Championships_-_August_2022.jpg/1280px-Entrance_of_the_2022_London_Pok%C3%A9mon_World_Championships_-_August_2022.jpg', 'Community league tournament and collector showcase booth.')
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  location = EXCLUDED.location,
  date = EXCLUDED.date,
  image_url = EXCLUDED.image_url,
  fallback_url = EXCLUDED.fallback_url,
  description = EXCLUDED.description;

SELECT setval('events_id_seq', (SELECT COALESCE(MAX(id), 1) FROM events));
