/* ================================================================
   Nooblax Breaks – Shared Components & Utilities
   DARK GLASSMORPHISM + GLOW AESTHETIC
   ================================================================ */

const NB = {

  // ======================== THEMED VECTOR SVG ICONS ========================
  icons: {
    bolt: `<svg class="w-3.5 h-3.5 inline-block text-[#F6D06F] fill-current" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
    star: `<svg class="w-3.5 h-3.5 inline-block text-[#1FB5D6] fill-current" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4h7.6l-6.1 4.5 2.3 7.3-6.2-4.6-6.2 4.6 2.3-7.3-6.1-4.5h7.6z"/></svg>`,
    sparkle: `<svg class="w-3.5 h-3.5 inline-block text-[#F6D06F] fill-current" viewBox="0 0 24 24"><path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z"/></svg>`,
    gem: `<svg class="w-3.5 h-3.5 inline-block text-[#1FB5D6] stroke-current fill-none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M11 3v6l-5 13"/><path d="M13 3v6l5 13"/><path d="M2 9h20"/></svg>`,
    shield: `<svg class="w-3.5 h-3.5 inline-block text-emerald-400 stroke-current fill-none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    truck: `<svg class="w-3.5 h-3.5 inline-block text-[#1FB5D6] stroke-current fill-none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" rx="1"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
    box: `<svg class="w-3.5 h-3.5 inline-block text-[#F6D06F] stroke-current fill-none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    lock: `<svg class="w-3.5 h-3.5 inline-block text-[#F6D06F] stroke-current fill-none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    chat: `<svg class="w-3.5 h-3.5 inline-block text-[#1FB5D6] stroke-current fill-none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
    pokeball: `<svg class="w-3.5 h-3.5 inline-block" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#1FB5D6" stroke-width="2"/><line x1="2" y1="12" x2="22" y2="12" stroke="#1FB5D6" stroke-width="2"/><circle cx="12" cy="12" r="3.5" fill="#0B1120" stroke="#1FB5D6" stroke-width="2"/><circle cx="12" cy="12" r="1.5" fill="#1FB5D6"/></svg>`,
    arrowRight: `<svg class="w-3 h-3 inline-block stroke-current fill-none" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>`,
    arrowDown: `<svg class="w-3 h-3 inline-block stroke-current fill-none" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>`,
    dot: `<span class="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-[0_0_8px_#34d399]"></span>`,
    check: `<svg class="w-3.5 h-3.5 inline-block text-emerald-400 stroke-current fill-none" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>`,
    tiktok: `<svg class="w-4 h-4 inline-block fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .57.04.84.12V9.36a6.34 6.34 0 0 0-.84-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.47a8.28 8.28 0 0 0 4.77 1.52V6.69z"/></svg>`,
    instagram: `<svg class="w-4 h-4 inline-block fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
    facebook: `<svg class="w-4 h-4 inline-block fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
    messenger: `<svg class="w-4 h-4 inline-block fill-current" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.096.304 2.256.464 3.443.464 6.627 0 12-4.975 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26 6.559-6.963 3.13 3.259 5.889-3.259-6.56 6.963z"/></svg>`
  },

  // ======================== DEFAULT / FALLBACK DATA ========================

  DEFAULT_SETTINGS: {
    site_name: 'Nooblax Breaks',
    fb_messenger_url: 'https://www.facebook.com/profile.php?id=61593883622380',
    instagram_url: 'https://www.instagram.com/nooblaxbreaks',
    tiktok_url: 'https://www.tiktok.com/@nooblaxbreaks',
    contact_channels: JSON.stringify([
      {
        id: 'tt_main',
        platform: 'tiktok',
        name: 'TikTok (Main Showcase)',
        handle: '@nooblaxbreaks',
        url: 'https://www.tiktok.com/@nooblaxbreaks',
        description: 'Watch daily singles showcase & rare card pulls'
      },
      {
        id: 'tt_live',
        platform: 'tiktok',
        name: 'TikTok (Live Stream Breaks)',
        handle: '@nooblaxbreaks_live',
        url: 'https://www.tiktok.com/@nooblaxbreaks_live',
        description: 'Join live box breaks, pack rips, and claims'
      },
      {
        id: 'ig_main',
        platform: 'instagram',
        name: 'Instagram (Official DM)',
        handle: '@nooblaxbreaks',
        url: 'https://www.instagram.com/nooblaxbreaks',
        description: 'Direct message for VIP reservations & slabs'
      },
      {
        id: 'fb_main',
        platform: 'facebook',
        name: 'Facebook Messenger',
        handle: 'Nooblax Breaks',
        url: 'https://www.facebook.com/profile.php?id=61593883622380',
        description: 'Fast chat support on our official Facebook Page'
      }
    ]),
    hero_tagline: 'RARE GRAILS. GRADED SLABS. NEXT-LEVEL PULLS.',
    hero_subtitle: 'The premier collector\'s showcase for authenticated Pokémon TCG singles, Special Art Rares (SAR), and PSA 10 slabs. Message us directly for live availability & fast nationwide delivery.',
  },

  DEFAULT_CARDS: [
    {
      id: 1,
      name: 'Charizard ex (Special Art Rare)',
      pokemon_type: 'Fire',
      set_name: 'Scarlet & Violet: 151',
      rarity: 'SAR',
      price: 8500,
      condition: 'PSA 10',
      is_featured: true,
      is_sold: false,
      image_url: 'https://images.pokemontcg.io/sv3pt5/199_hires.png',
      description: 'The definitive Charizard ex Special Illustration Rare from the coveted 151 collection. Flawless surface texture and deep fiery foil accents. Encased in a pristine PSA 10 Gem Mint slab.'
    },
    {
      id: 2,
      name: 'Umbreon VMAX (Moonbreon Alt Art)',
      pokemon_type: 'Darkness',
      set_name: 'Sword & Shield: Evolving Skies',
      rarity: 'Secret Rare',
      price: 42000,
      condition: 'PSA 10',
      is_featured: true,
      is_sold: true,
      image_url: 'https://images.pokemontcg.io/swsh7/215_hires.png',
      description: 'The undisputed modern holy grail. Stunning celestial artwork featuring Umbreon reaching for the moon. Recently sold to a VIP collector — displayed for showcase reference.'
    },
    {
      id: 3,
      name: 'Mew ex (Special Art Rare)',
      pokemon_type: 'Psychic',
      set_name: 'Scarlet & Violet: 151',
      rarity: 'SAR',
      price: 6200,
      condition: 'NM',
      is_featured: true,
      is_sold: false,
      image_url: 'https://images.pokemontcg.io/sv3pt5/205_hires.png',
      description: 'Mesmerizing celestial bubble illustration by USGMEN. Clean edges, zero surface scratches, sleeved immediately from fresh pack into magnetic toploader.'
    },
    {
      id: 4,
      name: 'Giratina V (Alternate Art)',
      pokemon_type: 'Dragon',
      set_name: 'Sword & Shield: Lost Origin',
      rarity: 'Ultra Rare',
      price: 18500,
      condition: 'PSA 10',
      is_featured: true,
      is_sold: false,
      image_url: 'https://images.pokemontcg.io/swsh11/186_hires.png',
      description: 'Intricate Distortion World masterpiece by Shinji Kanda. Widely recognized as one of the most artistic chase cards in modern Pokémon TCG history. Graded PSA 10.'
    },
    {
      id: 5,
      name: 'Gengar VMAX (Alternate Art)',
      pokemon_type: 'Psychic, Darkness',
      set_name: 'Sword & Shield: Fusion Strike',
      rarity: 'Secret Rare',
      price: 16800,
      condition: 'PSA 10',
      is_featured: true,
      is_sold: false,
      image_url: 'https://images.pokemontcg.io/swsh8/271_hires.png',
      description: 'Massive Gigantamax Gengar hoovering trees and houses! Top-tier modern fan favorite with rich purple foil saturation and perfect centering.'
    },
    {
      id: 6,
      name: 'Rayquaza VMAX (Alternate Art)',
      pokemon_type: 'Dragon',
      set_name: 'Sword & Shield: Evolving Skies',
      rarity: 'Secret Rare',
      price: 24500,
      condition: 'PSA 10',
      is_featured: true,
      is_sold: false,
      image_url: 'https://images.pokemontcg.io/swsh7/218_hires.png',
      description: 'The ancient sky guardian dragon soaring over an ethereal forest pagoda. Highest grade PSA 10 Gem Mint certified.'
    },
    {
      id: 7,
      name: 'Mewtwo VSTAR (Galarian Gallery)',
      pokemon_type: 'Psychic',
      set_name: 'Crown Zenith',
      rarity: 'Art Rare',
      price: 3900,
      condition: 'Mint',
      is_featured: false,
      is_sold: false,
      image_url: 'https://images.pokemontcg.io/swsh12pt5gg/GG44_hires.png',
      description: 'Epic aerial duel between Mewtwo and Charizard over a scorched canyon. Textured holographic finish in pack-fresh condition.'
    },
    {
      id: 8,
      name: 'Charizard ex (Special Illustration Rare)',
      pokemon_type: 'Darkness, Fire',
      set_name: 'Obsidian Flames',
      rarity: 'SAR',
      price: 4900,
      condition: 'NM',
      is_featured: false,
      is_sold: false,
      image_url: 'https://images.pokemontcg.io/sv3/223_hires.png',
      description: 'Darkness-type Tera Charizard ex sparkling with crystalline crown power. Beautiful foil reflectivity, clean back borders.'
    },
    {
      id: 9,
      name: 'Iono (Special Art Rare)',
      pokemon_type: 'Lightning, Colorless',
      set_name: 'Paldea Evolved',
      rarity: 'SAR',
      price: 4800,
      condition: 'NM',
      is_featured: false,
      is_sold: false,
      image_url: 'https://images.pokemontcg.io/sv2/269_hires.png',
      description: 'The iconic Gym Leader & streamer waifu grail of the Scarlet & Violet era. Clean silver borders, zero whitening on corners.'
    },
    {
      id: 10,
      name: 'Magikarp (Illustration Rare)',
      pokemon_type: 'Water',
      set_name: 'Paldea Evolved',
      rarity: 'Illustration Rare',
      price: 5400,
      condition: 'NM',
      is_featured: false,
      is_sold: false,
      image_url: 'https://images.pokemontcg.io/sv2/203_hires.png',
      description: 'Traditional Japanese woodblock art style featuring the legendary ascending carp. One of the hottest modern sleeper grails.'
    },
    {
      id: 11,
      name: 'Gardevoir ex (Special Art Rare)',
      pokemon_type: 'Psychic',
      set_name: 'Scarlet & Violet Base',
      rarity: 'SAR',
      price: 2800,
      condition: 'NM',
      is_featured: false,
      is_sold: false,
      image_url: 'https://images.pokemontcg.io/sv1/245_hires.png',
      description: 'Touching visual storyline card showing Ralts growing alongside its human family across the generations. Pack fresh.'
    },
    {
      id: 12,
      name: 'Pikachu VMAX (Rainbow Secret)',
      pokemon_type: 'Lightning',
      set_name: 'Crown Zenith / Vivid Voltage',
      rarity: 'Secret Rare',
      price: 11500,
      condition: 'PSA 10',
      is_featured: false,
      is_sold: false,
      image_url: 'https://images.pokemontcg.io/swsh4/188_hires.png',
      description: 'Beloved Chunky Pikachu ("Chonkachu") in sparkling Rainbow Hyper Rare holographic foil. Encased in a crystal-clear PSA 10 slab.'
    },
    {
      id: 13,
      name: 'Venusaur ex (Special Art Rare)',
      pokemon_type: 'Grass',
      set_name: 'Scarlet & Violet: 151',
      rarity: 'SAR',
      price: 3600,
      condition: 'PSA 10',
      is_featured: false,
      is_sold: false,
      image_url: 'https://images.pokemontcg.io/sv3pt5/198_hires.png',
      description: 'The verdant giant Venusaur blooming in a vibrant tropical glade. Flawless foil texture certified PSA 10.'
    },
    {
      id: 14,
      name: 'Lucario VSTAR (Galarian Gallery)',
      pokemon_type: 'Fighting',
      set_name: 'Crown Zenith',
      rarity: 'Art Rare',
      price: 2900,
      condition: 'Mint',
      is_featured: false,
      is_sold: false,
      image_url: 'https://images.pokemontcg.io/swsh12pt5gg/GG22_hires.png',
      description: 'Dynamic aura sphere strike illustration with pristine centering and crisp edges.'
    },
    {
      id: 15,
      name: 'Origin Forme Dialga VSTAR (Gold Secret)',
      pokemon_type: 'Metal',
      set_name: 'Crown Zenith',
      rarity: 'Secret Rare',
      price: 6800,
      condition: 'PSA 10',
      is_featured: false,
      is_sold: false,
      image_url: 'https://images.pokemontcg.io/swsh12pt5gg/GG68_hires.png',
      description: 'The golden master of time radiating immense celestial energy. Pristine PSA 10 slab.'
    },
    {
      id: 16,
      name: 'Snorlax (151 Illustration Rare)',
      pokemon_type: 'Colorless',
      set_name: 'Scarlet & Violet: 151',
      rarity: 'Illustration Rare',
      price: 2400,
      condition: 'Mint',
      is_featured: true,
      is_sold: false,
      image_url: 'https://images.pokemontcg.io/svp/51_hires.png',
      description: 'The sleepy mascot of Nooblax Breaks sleeping peacefully surrounded by playful Pidgey and Diglett.'
    }
  ],

  // ======================== DEFAULT VOUCHERS (legacy, kept for admin) ========================

  DEFAULT_VOUCHERS: [
    { id: 1, code: 'NOOBLAX10', description: 'Enjoy 10% OFF on any single card purchase!', discount_type: 'percentage', discount_value: 10, valid_from: '2026-01-01', valid_until: '2026-12-31', is_active: true },
    { id: 2, code: 'FIRSTBREAK', description: 'Flat P100 discount on your first order.', discount_type: 'fixed', discount_value: 100, valid_from: '2026-01-01', valid_until: '2026-12-31', is_active: true },
    { id: 3, code: 'FREESHIP', description: 'Free shipping on orders P3,500+.', discount_type: 'fixed', discount_value: 200, valid_from: '2026-01-01', valid_until: '2026-12-31', is_active: true }
  ],

  // ======================== DEFAULT TESTIMONIALS ========================

  DEFAULT_TESTIMONIALS: [
    {
      id: 1,
      name: 'Mark D.',
      location: 'Cebu City',
      rating: 5,
      text: 'Super legit seller! Inquired about the Charizard ex SAR and received a reply within minutes. The card arrived in pristine condition, securely packed with thick bubble wrap and a reinforced hard case. Will definitely buy again!',
      date: '2026-08-15',
      verified: true
    },
    {
      id: 2,
      name: 'Jessa R.',
      location: 'Manila',
      rating: 5,
      text: 'First time ordering high-value Pokemon cards online and the entire transaction was seamless. The seller was extremely responsive and sent an HD close-up video of the card before shipping. 100% trusted and recommended!',
      date: '2026-07-22',
      verified: true
    },
    {
      id: 3,
      name: 'Kyle M.',
      location: 'Davao City',
      rating: 5,
      text: "I have placed 3 separate orders with Nooblax Breaks now. Every single card is authentic, mint, and packaged with extreme care. Fair prices, transparent service, and fast courier shipping. Best TCG seller in the Philippines!",
      date: '2026-06-10',
      verified: true
    },
    {
      id: 4,
      name: 'Raph T.',
      location: 'Iloilo City',
      rating: 5,
      text: 'Ordered the PSA 10 Giratina V Alt Art. The slab is completely genuine and verified directly on the official PSA cert database. Fast shipping from Cebu to Iloilo in just 2 days. Thank you, Nooblax!',
      date: '2026-05-18',
      verified: true
    },
    {
      id: 5,
      name: 'Angelo C.',
      location: 'Cagayan de Oro',
      rating: 5,
      text: 'Found their page on Facebook and sent a DM. Incredibly accommodating and friendly seller who provided timestamped photos and clear condition checks. True collector-to-collector experience!',
      date: '2026-04-05',
      verified: true
    },
    {
      id: 6,
      name: 'Tricia S.',
      location: 'Quezon City',
      rating: 5,
      text: 'For anyone hesitant about ordering, go for it! My Mew ex SAR arrived in flawless mint condition with bulletproof protective packaging. Nooblax Breaks is definitely the real deal.',
      date: '2026-03-20',
      verified: true
    }
  ],

  // ======================== DEFAULT EVENTS ========================

  DEFAULT_EVENTS: [
    {
      id: 1,
      title: 'Cebu TCG Tournament 2025',
      location: 'SM Seaside City, Cebu',
      date: 'December 2025',
      image: '/assets/events/event-1.jpg',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pyrkon_2022_Pokemon_Trading_Card_Game.jpg/1280px-Pyrkon_2022_Pokemon_Trading_Card_Game.jpg',
      description: 'Participated in the regional TCG tournament with over 100 collectors.'
    },
    {
      id: 2,
      title: 'Pokemon Card Meetup & Trade',
      location: 'Ayala Center Cebu',
      date: 'March 2026',
      image: '/assets/events/event-2.jpg',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/POKEMON_card_battle.jpg/1280px-POKEMON_card_battle.jpg',
      description: 'Official card trade meetup with live breaks and giveaways.'
    },
    {
      id: 3,
      title: 'Community League Finals',
      location: 'Robinsons Galleria Cebu',
      date: 'July 2026',
      image: '/assets/events/event-3.jpg',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Entrance_of_the_2022_London_Pok%C3%A9mon_World_Championships_-_August_2022.jpg/1280px-Entrance_of_the_2022_London_Pok%C3%A9mon_World_Championships_-_August_2022.jpg',
      description: 'Community league tournament and collector showcase.'
    }
  ],

  // ======================== DATA ACCESS (WITH FALLBACKS) ========================

  async loadSettings() {
    try {
      if (typeof supabaseClient !== 'undefined' && supabaseClient.from) {
        const { data, error } = await supabaseClient.from('settings').select('*');
        if (!error && data && data.length > 0) {
          const s = { ...this.DEFAULT_SETTINGS };
          data.forEach(r => { s[r.key] = r.value; });
          window._siteSettings = s;
          return s;
        }
      }
    } catch (e) {
      console.warn('Using default settings fallback:', e);
    }
    const def = { ...this.DEFAULT_SETTINGS };
    window._siteSettings = def;
    return def;
  },

  async getCards() {
    try {
      if (typeof supabaseClient !== 'undefined' && supabaseClient.from) {
        const { data, error } = await supabaseClient.from('cards').select('*');
        if (!error && data && data.length > 0) {
          // Check if custom order is stored in settings
          const { data: orderSetting } = await supabaseClient
            .from('settings')
            .select('value')
            .eq('key', 'card_custom_order')
            .single();

          if (orderSetting && orderSetting.value) {
            try {
              const orderIds = JSON.parse(orderSetting.value);
              if (Array.isArray(orderIds) && orderIds.length > 0) {
                const idMap = new Map();
                orderIds.forEach((id, idx) => idMap.set(String(id), idx));
                data.sort((a, b) => {
                  const idxA = idMap.has(String(a.id)) ? idMap.get(String(a.id)) : 999999;
                  const idxB = idMap.has(String(b.id)) ? idMap.get(String(b.id)) : 999999;
                  return idxA - idxB;
                });
                window._cardsCache = data;
                return data;
              }
            } catch (err) {
              console.warn('Failed parsing card_custom_order:', err);
            }
          }

          // Fallback order by created_at desc
          const sorted = data.sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));
          window._cardsCache = sorted;
          return sorted;
        }
      }
    } catch (e) {
      console.warn('Using default cards fallback:', e);
    }
    window._cardsCache = this.DEFAULT_CARDS;
    return this.DEFAULT_CARDS;
  },

  async getCardById(id) {
    try {
      if (typeof supabaseClient !== 'undefined' && supabaseClient.from) {
        const { data, error } = await supabaseClient.from('cards').select('*').eq('id', id).single();
        if (!error && data) {
          if (!window._cardsCache) window._cardsCache = [];
          if (!window._cardsCache.some(c => String(c.id) === String(data.id))) {
            window._cardsCache.push(data);
          }
          return data;
        }
      }
    } catch (e) {
      console.warn('Card lookup fallback:', e);
    }
    const fallback = this.DEFAULT_CARDS.find(c => String(c.id) === String(id)) || this.DEFAULT_CARDS[0];
    if (fallback) {
      if (!window._cardsCache) window._cardsCache = [];
      if (!window._cardsCache.some(c => String(c.id) === String(fallback.id))) {
        window._cardsCache.push(fallback);
      }
    }
    return fallback;
  },

  async getVouchers() {
    try {
      if (typeof supabaseClient !== 'undefined' && supabaseClient.from) {
        const { data, error } = await supabaseClient.from('vouchers').select('*').eq('is_active', true);
        if (!error && data && data.length > 0) return data;
      }
    } catch (e) {
      console.warn('Vouchers fallback:', e);
    }
    return this.DEFAULT_VOUCHERS;
  },

  async getTestimonials() {
    try {
      if (typeof supabaseClient !== 'undefined' && supabaseClient.from) {
        const { data, error } = await supabaseClient.from('testimonials').select('*').order('date', { ascending: false });
        if (!error && data && data.length > 0) return data;
      }
    } catch (e) {
      console.warn('Testimonials fallback:', e);
    }
    return this.DEFAULT_TESTIMONIALS;
  },

  async getEvents() {
    try {
      if (typeof supabaseClient !== 'undefined' && supabaseClient.from) {
        const { data, error } = await supabaseClient.from('events').select('*').order('id', { ascending: true });
        if (!error && data && data.length > 0) return data;
      }
    } catch (e) {
      console.warn('Events fallback:', e);
    }
    return this.DEFAULT_EVENTS;
  },

  async checkAuth() {
    try {
      const { data: { session } } = await supabaseClient.auth.getSession();
      return session;
    } catch (e) {
      return null;
    }
  },

  // ======================== HELPERS ========================

  esc(str) {
    if (!str) return '';
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  },

  price(v) {
    return v ? '\u20B1' + Number(v).toLocaleString() : '\u20B10';
  },

  img(url) {
    if (!url) return '/assets/placeholder.svg';
    return url;
  },

  messengerInquiryUrl(card, settings) {
    const rawUrl = settings?.fb_messenger_url || this.DEFAULT_SETTINGS.fb_messenger_url || '';
    
    // Extract Page ID / Page username
    let pageTarget = '61593883622380';
    const matchId = String(rawUrl).match(/id=(\d+)/);
    if (matchId && matchId[1]) {
      pageTarget = matchId[1];
    } else if (rawUrl.includes('m.me/')) {
      pageTarget = rawUrl.split('m.me/')[1].split(/[/?#]/)[0] || '61593883622380';
    } else if (rawUrl.includes('facebook.com/')) {
      const slug = rawUrl.split('facebook.com/')[1].split(/[/?#]/)[0];
      if (slug && slug !== 'profile.php') pageTarget = slug;
    }

    if (!card) {
      return `https://m.me/${pageTarget}`;
    }

    const cond = card.condition || 'RAW NM';
    const setName = card.set_name || 'Single';
    const priceFormatted = this.price(card.price);

    const msg = `Hi Nooblax Breaks! I would like to inquire about this Pokémon card:

Card: ${card.name}
Set: ${setName}
Condition: ${cond}
Price: ${priceFormatted}

Is this still available for delivery? Thank you!`;

    return `https://m.me/${pageTarget}?text=${encodeURIComponent(msg)}`;
  },

  getInquiryText(card) {
    if (!card) return 'Hi Nooblax Breaks! I would like to inquire about Pokémon cards in your showcase.';
    const cond = card.condition || 'RAW NM';
    const setName = card.set_name || 'Single';
    const priceFormatted = this.price(card.price);
    return `Hi Nooblax Breaks! I would like to inquire about this Pokémon card:\n\nCard: ${card.name}\nSet: ${setName}\nCondition: ${cond}\nPrice: ${priceFormatted}\n\nIs this still available for delivery? Thank you!`;
  },

  copyToClipboard(text) {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(text).catch(() => {});
  },

  getContactChannels(settings) {
    const s = settings || window._siteSettings || this.DEFAULT_SETTINGS;
    if (s && s.contact_channels) {
      try {
        const parsed = typeof s.contact_channels === 'string' ? JSON.parse(s.contact_channels) : s.contact_channels;
        if (Array.isArray(parsed) && parsed.length > 0) {
          const valid = parsed.filter(ch => ch && ch.url && String(ch.url).trim() !== '');
          if (valid.length > 0) return valid;
        }
      } catch (e) {
        console.warn('Failed parsing contact_channels:', e);
      }
    }

    // Fallback: build from individual social URLs
    const channels = [];
    if (s.tiktok_url) {
      channels.push({
        id: 'tt_main',
        platform: 'tiktok',
        name: 'TikTok (Main Showcase)',
        handle: '@nooblaxbreaks',
        url: s.tiktok_url,
        description: 'Watch daily singles showcase & rare card pulls'
      });
    }
    if (s.instagram_url) {
      channels.push({
        id: 'ig_main',
        platform: 'instagram',
        name: 'Instagram (Official DM)',
        handle: '@nooblaxbreaks',
        url: s.instagram_url,
        description: 'Direct message for VIP reservations & slabs'
      });
    }
    if (s.fb_messenger_url) {
      channels.push({
        id: 'fb_main',
        platform: 'facebook',
        name: 'Facebook Messenger',
        handle: 'Nooblax Breaks',
        url: s.fb_messenger_url,
        description: 'Fast chat support on our official Facebook Page'
      });
    }

    try {
      const def = JSON.parse(this.DEFAULT_SETTINGS.contact_channels);
      return channels.length > 0 ? channels : def;
    } catch (_) {
      return channels;
    }
  },

  renderChannelItem(ch, card, settings) {
    const p = (ch.platform || 'custom').toLowerCase();
    let iconSvg = this.icons.chat;
    let badgeText = 'CHAT';
    let badgeClass = 'text-[#1FB5D6] bg-[#1FB5D6]/10 border border-[#1FB5D6]/30';
    let cardClass = 'bg-[#060D1E] hover:bg-[#091530] border-white/10 hover:border-[#1FB5D6]/50 hover:shadow-[0_4px_20px_rgba(31,181,214,0.15)]';
    let iconBg = 'bg-[#1FB5D6]/10 text-[#1FB5D6] border border-[#1FB5D6]/20';
    let btnText = 'Message';
    let targetUrl = ch.url || '#';

    if (p.includes('tiktok')) {
      iconSvg = this.icons.tiktok;
      badgeText = 'TIKTOK';
      badgeClass = 'text-[#25F4EE] bg-[#25F4EE]/10 border border-[#25F4EE]/30';
      cardClass = 'bg-[#070913] hover:bg-[#0c1022] border-white/10 hover:border-[#25F4EE]/50 hover:shadow-[0_4px_24px_rgba(37,244,238,0.15)]';
      iconBg = 'bg-[#25F4EE]/10 text-[#25F4EE] border border-[#25F4EE]/30';
      btnText = 'Open TikTok';
    } else if (p.includes('instagram')) {
      iconSvg = this.icons.instagram;
      badgeText = 'INSTAGRAM';
      badgeClass = 'text-[#FD1D1D] bg-[#FD1D1D]/10 border border-[#FD1D1D]/30';
      cardClass = 'bg-[#0E0B19] hover:bg-[#19112C] border-white/10 hover:border-[#E1306C]/50 hover:shadow-[0_4px_24px_rgba(225,48,108,0.15)]';
      iconBg = 'bg-gradient-to-tr from-[#FD1D1D]/20 to-[#833AB4]/20 text-[#FD1D1D] border border-[#E1306C]/30';
      btnText = 'Send DM';
    } else if (p.includes('facebook') || p.includes('messenger')) {
      iconSvg = this.icons.messenger;
      badgeText = 'MESSENGER';
      badgeClass = 'text-[#0084FF] bg-[#0084FF]/10 border border-[#0084FF]/30';
      cardClass = 'bg-[#060D1F] hover:bg-[#0A1636] border-white/10 hover:border-[#0084FF]/50 hover:shadow-[0_4px_24px_rgba(0,132,255,0.15)]';
      iconBg = 'bg-[#0084FF]/15 text-[#0084FF] border border-[#0084FF]/30';
      btnText = 'Chat Now';
      if (card) {
        targetUrl = this.messengerInquiryUrl(card, settings);
      }
    } else if (p.includes('viber')) {
      badgeText = 'VIBER';
      badgeClass = 'text-[#7360F2] bg-[#7360F2]/10 border border-[#7360F2]/30';
      cardClass = 'bg-[#090818] hover:bg-[#12102E] border-white/10 hover:border-[#7360F2]/50';
      iconBg = 'bg-[#7360F2]/15 text-[#7360F2] border border-[#7360F2]/30';
    } else if (p.includes('telegram')) {
      badgeText = 'TELEGRAM';
      badgeClass = 'text-[#229ED9] bg-[#229ED9]/10 border border-[#229ED9]/30';
      cardClass = 'bg-[#050D18] hover:bg-[#0A182E] border-white/10 hover:border-[#229ED9]/50';
      iconBg = 'bg-[#229ED9]/15 text-[#229ED9] border border-[#229ED9]/30';
    } else if (p.includes('whatsapp')) {
      badgeText = 'WHATSAPP';
      badgeClass = 'text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/30';
      cardClass = 'bg-[#06140D] hover:bg-[#0B2418] border-white/10 hover:border-[#25D366]/50';
      iconBg = 'bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30';
    }

    return `
      <a href="${this.esc(targetUrl)}" target="_blank" rel="noopener noreferrer"
         class="group flex items-center justify-between p-3 sm:p-3.5 rounded-2xl ${cardClass} border transition-all duration-200 hover:-translate-y-0.5">
        <div class="flex items-center space-x-3 sm:space-x-3.5 min-w-0 flex-1">
          <div class="w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0 shadow-sm">
            ${iconSvg}
          </div>
          <div class="min-w-0 flex-1">
            <div class="flex items-center space-x-2">
              <span class="font-bold text-white text-xs sm:text-sm truncate group-hover:text-[#1FB5D6] transition-colors">${this.esc(ch.name || 'Official Account')}</span>
              <span class="px-1.5 py-0.5 rounded text-[7.5px] font-pixel ${badgeClass} uppercase tracking-wider">${badgeText}</span>
            </div>
            <p class="text-[11px] text-gray-400 truncate mt-0.5">${this.esc(ch.handle || ch.description || targetUrl)}</p>
          </div>
        </div>
        <div class="flex items-center space-x-1 text-xs font-bold text-[#1FB5D6] group-hover:text-white flex-shrink-0 ml-3 pl-2 border-l border-white/5">
          <span class="hidden xs:inline text-[11px]">${btnText}</span>
          <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </div>
      </a>
    `;
  },

  openInquiryModal(cardOrId) {
    let card = null;
    if (cardOrId) {
      if (typeof cardOrId === 'object') {
        card = cardOrId;
      } else if (window._cardsCache && Array.isArray(window._cardsCache)) {
        card = window._cardsCache.find(c => String(c.id) === String(cardOrId));
      }
    }

    const settings = window._siteSettings || this.DEFAULT_SETTINGS;
    const channels = this.getContactChannels(settings);
    const inquiryText = this.getInquiryText(card);

    // Remove old modal instance if any
    const existing = document.getElementById('nb-inquiry-modal-backdrop');
    if (existing) existing.remove();

    const modalHtml = `
      <div id="nb-inquiry-modal-backdrop" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#030712]/80 backdrop-blur-md opacity-0 transition-opacity duration-200">
        <div id="nb-inquiry-modal-panel" class="relative w-full max-w-lg bg-[#0A1020]/95 border border-white/10 rounded-3xl p-5 sm:p-7 shadow-2xl shadow-black/90 flex flex-col max-h-[92vh] overflow-hidden transform scale-95 transition-all duration-200">
          
          <!-- Modal Header -->
          <div class="flex items-center justify-between pb-4 border-b border-white/10 flex-shrink-0">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0E839E]/30 to-[#1FB5D6]/20 border border-[#1FB5D6]/40 flex items-center justify-center shadow-lg shadow-[#0E839E]/20 flex-shrink-0">
                <svg class="w-5 h-5 text-[#1FB5D6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-pixel text-[10px] sm:text-[11px] text-white tracking-wider">OFFICIAL INQUIRY CHANNELS</h3>
                <p class="text-[11px] text-gray-400 mt-0.5">Select where you would like to reach Nooblax Breaks:</p>
              </div>
            </div>
            <button type="button" onclick="NB.closeInquiryModal()" aria-label="Close modal"
                    class="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-all cursor-pointer">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          <!-- Modal Scroll Area -->
          <div class="py-4 space-y-4 overflow-y-auto pr-1 flex-1">
            
            ${card ? `
            <!-- Card Snapshot Box -->
            <div class="p-3.5 sm:p-4 rounded-2xl bg-[#060B18] border border-white/10 relative overflow-hidden">
              <div class="flex items-center space-x-3.5">
                <img src="${card.image_url || '/assets/placeholder.svg'}" alt="${this.esc(card.name)}" 
                     class="w-13 h-18 sm:w-16 sm:h-22 object-cover rounded-xl border border-white/10 bg-[#050914] flex-shrink-0 shadow-md">
                <div class="min-w-0 flex-1">
                  <div class="flex items-center space-x-1.5 mb-1">
                    <span class="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[9px] text-gray-300 font-semibold">${this.esc(card.condition || 'RAW NM')}</span>
                    <span class="px-2 py-0.5 rounded-md bg-[#1FB5D6]/10 border border-[#1FB5D6]/30 text-[9px] text-[#1FB5D6] font-semibold">${this.esc(card.rarity || 'Single')}</span>
                  </div>
                  <h4 class="font-bold text-white text-xs sm:text-sm truncate">${this.esc(card.name)}</h4>
                  <p class="text-[10px] text-gray-400 truncate mt-0.5">${this.esc(card.set_name || 'Pokémon TCG')}</p>
                  <p class="font-pixel text-[11px] sm:text-xs text-[#1FB5D6] mt-1.5 font-bold">${this.price(card.price)}</p>
                </div>
              </div>

              <!-- 1-Tap Copy Inquiry Info Button -->
              <div class="mt-3 pt-3 border-t border-white/[0.08] flex items-center justify-between gap-2">
                <span class="text-[11px] text-gray-400 truncate">Card info ready to paste:</span>
                <button type="button" id="nb-copy-card-info-btn" onclick="NB.copyInquiryText('${this.esc(inquiryText).replace(/'/g, "\\'")}')"
                        class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#0E839E]/20 to-[#1FB5D6]/20 hover:from-[#0E839E]/40 hover:to-[#1FB5D6]/40 border border-[#1FB5D6]/40 text-[#1FB5D6] hover:text-white text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer flex-shrink-0 shadow-sm">
                  <svg class="w-3.5 h-3.5 text-[#1FB5D6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
                  </svg>
                  <span id="nb-copy-btn-label">Copy Card Details</span>
                </button>
              </div>
            </div>
            ` : ''}

            <!-- Contact Channels List -->
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs font-bold text-gray-300 uppercase tracking-wider px-0.5">
                <span>Select Channel (${channels.length})</span>
                <span class="text-[10px] text-gray-500 font-normal normal-case">Direct inquiry</span>
              </div>
              <div class="space-y-2">
                ${channels.map(ch => this.renderChannelItem(ch, card, settings)).join('')}
              </div>
            </div>

          </div>

          <!-- Modal Footer Tip -->
          <div class="pt-3 border-t border-white/10 text-center flex-shrink-0">
            <p class="text-[11px] text-gray-400">
              💡 <span class="text-gray-300">Tip:</span> If messaging on TikTok or Instagram, click <strong class="text-white">Copy Card Details</strong> above to easily paste card info into your DM!
            </p>
          </div>

        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    document.body.style.overflow = 'hidden';

    const backdrop = document.getElementById('nb-inquiry-modal-backdrop');
    const panel = document.getElementById('nb-inquiry-modal-panel');
    requestAnimationFrame(() => {
      if (backdrop) backdrop.classList.remove('opacity-0');
      if (panel) {
        panel.classList.remove('scale-95');
        panel.classList.add('scale-100');
      }
    });

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) NB.closeInquiryModal();
    });

    const escHandler = (e) => {
      if (e.key === 'Escape') {
        NB.closeInquiryModal();
        window.removeEventListener('keydown', escHandler);
      }
    };
    window.addEventListener('keydown', escHandler);
  },

  closeInquiryModal() {
    const backdrop = document.getElementById('nb-inquiry-modal-backdrop');
    const panel = document.getElementById('nb-inquiry-modal-panel');
    if (panel) {
      panel.classList.remove('scale-100');
      panel.classList.add('scale-95');
    }
    if (backdrop) {
      backdrop.classList.add('opacity-0');
      setTimeout(() => {
        backdrop.remove();
        document.body.style.overflow = '';
      }, 200);
    } else {
      document.body.style.overflow = '';
    }
  },

  copyInquiryText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        const label = document.getElementById('nb-copy-btn-label');
        if (label) {
          label.textContent = '✓ Copied to Clipboard!';
          label.classList.add('text-emerald-400');
          setTimeout(() => {
            label.textContent = 'Copy Card Details';
            label.classList.remove('text-emerald-400');
          }, 3000);
        }
      }).catch(() => {});
    }
  },

  rarityBadge(r) {
    const themeMap = {
      'SAR':               'glass-badge-gold',
      'Secret Rare':       'glass-badge-gold',
      'Ultra Rare':        'glass-badge-violet',
      'Illustration Rare': 'glass-badge-pink',
      'Art Rare':          'glass-badge-pink',
      'Rare Holo':         'glass-badge-cyan',
      'PSA 10':            'glass-badge-cyan',
      'Uncommon':          'glass-badge-emerald',
      'Common':            'glass-badge-neutral'
    };
    const theme = themeMap[r] || 'glass-badge-neutral';
    const labelMap = {
      'Illustration Rare': 'IR',
      'Special Illustration Rare': 'SIR',
      'Secret Rare': 'SECRET',
      'Ultra Rare': 'ULTRA',
      'Art Rare': 'AR',
      'Rare Holo': 'HOLO'
    };
    const label = labelMap[r] || r || 'CARD';
    return `
    <span class="glass-badge ${theme}">
      <span class="badge-pip"></span>
      <span class="badge-text">${this.esc(label)}</span>
    </span>`;
  },

  conditionBadge(c) {
    const cond = (c && c.condition) ? c.condition : 'RAW NM';
    const isGraded = cond.includes('PSA') || cond.includes('BGS') || cond.includes('CGC');
    const theme = isGraded ? 'glass-badge-cyan' : 'glass-badge-emerald';
    return `
    <span class="glass-badge ${theme}">
      <span class="badge-pip"></span>
      <span class="badge-text">${this.esc(cond)}</span>
    </span>`;
  },

  rarityClass(r) {
    return ({
      'Common':           'text-gray-300',
      'Uncommon':         'text-emerald-300',
      'Rare Holo':        'text-cyan-300',
      'Ultra Rare':       'text-violet-300',
      'SAR':              'text-amber-300',
      'Art Rare':         'text-pink-300',
      'Secret Rare':      'text-amber-300',
      'PSA 10':           'text-[#1FB5D6]',
      'Illustration Rare':'text-fuchsia-300',
    })[r] || 'text-gray-300';
  },

  matchesType(card, targetType) {
    if (!targetType) return true;
    const target = targetType.trim().toLowerCase();

    // 1. Explicit pokemon_type field on card (supports array or comma/slash separated)
    if (card && card.pokemon_type) {
      const types = Array.isArray(card.pokemon_type)
        ? card.pokemon_type.map(t => String(t).trim().toLowerCase())
        : String(card.pokemon_type).toLowerCase().split(/[\s,\/]+/);
      return types.some(t => t === target || t.includes(target));
    }

    // 2. Intelligent fallback from Pokémon name & description
    const text = (((card?.name || '') + ' ' + (card?.description || ''))).toLowerCase();
    const typeKeywords = {
      fire: ['fire', 'flame', 'charizard', 'charmander', 'charmeleon', 'arcanine', 'moltres', 'cinderace', 'blaziken', 'flareon'],
      water: ['water', 'aqua', 'magikarp', 'gyarados', 'blastoise', 'squirtle', 'wartortle', 'vaporeon', 'suicune', 'greninja', 'kyogre'],
      grass: ['grass', 'leaf', 'venusaur', 'bulbasaur', 'ivysaur', 'celebi', 'leafeon', 'sceptile', 'meowscarada'],
      lightning: ['lightning', 'electric', 'pikachu', 'raichu', 'zapdos', 'jolteon', 'miraidon', 'iono', 'luxray', 'ampharos'],
      psychic: ['psychic', 'mewtwo', 'mew', 'gengar', 'gardevoir', 'alakazam', 'espeon', 'ralts', 'kirlia'],
      fighting: ['fighting', 'fight', 'lucario', 'machamp', 'urshifu', 'koraidon', 'tyranitar'],
      darkness: ['darkness', 'dark', 'umbreon', 'moonbreon', 'darkrai', 'roaring moon'],
      metal: ['metal', 'steel', 'dialga', 'scizor', 'corviknight'],
      dragon: ['dragon', 'giratina', 'rayquaza', 'dragonite', 'garchomp'],
      colorless: ['colorless', 'normal', 'snorlax', 'eevee', 'lugia', 'arceus', 'pidgeot']
    };

    if (typeKeywords[target] && typeKeywords[target].some(k => text.includes(k))) {
      return true;
    }

    return false;
  },

  RARITIES: ['Common','Uncommon','Rare Holo','Ultra Rare','SAR','Art Rare','Secret Rare','PSA 10','Illustration Rare'],
  CONDITIONS: ['Mint','NM','LP','MP','HP','PSA 10','PSA 9','PSA 8','BGS 10','BGS 9.5'],

  // ======================== CARD COMPONENT ========================

  card(c, settings) {
    if (!window._cardsCache) window._cardsCache = [];
    if (!window._cardsCache.some(x => String(x.id) === String(c.id))) {
      window._cardsCache.push(c);
    }
    const img = this.img(c.image_url);

    return `
    <div class="group relative bg-white/[0.04] backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/[0.08] hover:border-[#0E839E]/50 transition-all duration-500 overflow-hidden hover:shadow-[0_12px_44px_rgba(14,131,158,0.25)] hover:-translate-y-1.5 flex flex-col justify-between card-holo p-2.5 sm:p-3.5">
      <div>
        <!-- Curvy Card Artwork Frame (Curvy on ALL 4 corners!) -->
        <a href="/card.html?id=${c.id}" class="block aspect-[3/4] bg-[#060a14] skeleton card-curvy-frame overflow-hidden relative rounded-2xl border border-white/[0.08] shadow-inner mb-2.5 sm:mb-3">
          <img src="${img}" alt="${this.esc(c.name)}" 
               onload="this.parentElement.classList.remove('skeleton')"
               onerror="this.onerror=null;this.src='/assets/placeholder.svg';this.parentElement.classList.remove('skeleton');" 
               class="w-full h-full object-cover rounded-2xl group-hover:scale-106 transition-transform duration-1000 ease-out" loading="lazy">
          
          <!-- Dual Vignette (soft top and bottom shadow for maximum badge contrast) -->
          <div class="absolute inset-0 bg-gradient-to-b from-[#060a14]/75 via-transparent to-[#0B1120] opacity-85 pointer-events-none rounded-2xl"></div>
          
          <!-- Frosted Glass Badges Header -->
          <div class="absolute top-2 left-2 right-2 sm:top-2.5 sm:left-2.5 sm:right-2.5 flex items-center justify-between pointer-events-none z-10 gap-1">
            ${this.conditionBadge(c)}
            ${this.rarityBadge(c.rarity)}
          </div>

          <!-- Sold Overlay (Modern cyber-glass badge) -->
          ${c.is_sold ? `
          <div class="absolute inset-0 bg-[#060a14]/80 backdrop-blur-[2px] flex items-center justify-center z-20 rounded-2xl p-2 pointer-events-none">
            <div class="bg-[#0B1120]/90 border border-[#E63946]/50 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-[0_0_24px_rgba(230,57,70,0.35)] flex items-center space-x-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-[#E63946] shadow-[0_0_6px_#E63946] animate-pulse flex-shrink-0"></span>
              <span class="font-pixel text-[8px] sm:text-[8.5px] text-[#E63946] tracking-wider whitespace-nowrap">SOLD OUT</span>
            </div>
          </div>` : ''}
          
          <!-- Set Name Badge -->
          <div class="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
            <p class="font-pixel text-[6.5px] sm:text-[7px] text-[#1FB5D6] drop-shadow-md whitespace-nowrap overflow-hidden">${this.esc(c.set_name)}</p>
          </div>
        </a>

        <!-- Card Meta Info -->
        <div class="px-1 pb-1">
          <a href="/card.html?id=${c.id}" class="block">
            <h3 class="font-body font-bold text-white text-xs sm:text-sm hover:text-[#1FB5D6] transition-colors line-clamp-2 leading-snug min-h-[2rem] sm:min-h-[2.5rem] mb-1.5">${this.esc(c.name)}</h3>
          </a>
          <div class="flex items-center justify-between mt-2 gap-1.5 flex-wrap">
            <span class="font-pixel text-[10.5px] sm:text-xs text-[#1FB5D6] drop-shadow-[0_0_10px_rgba(31,181,214,0.5)] whitespace-nowrap">${this.price(c.price)}</span>
            ${c.is_sold 
              ? '<span class="inline-flex items-center gap-1 text-[8.5px] sm:text-[9.5px] font-body text-[#E63946] font-medium whitespace-nowrap"><span class="w-1.5 h-1.5 rounded-full bg-[#E63946] shadow-[0_0_6px_#E63946] flex-shrink-0"></span>Sold Out</span>'
              : '<span class="inline-flex items-center gap-1 text-[8.5px] sm:text-[9.5px] font-body text-emerald-400 font-medium whitespace-nowrap"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] flex-shrink-0"></span>Available</span>'
            }
          </div>
        </div>
      </div>

      <!-- Quick Action Buttons -->
      <div class="pt-2 grid grid-cols-2 gap-2 border-t border-white/[0.04] mt-2">
        <a href="/card.html?id=${c.id}" class="text-center bg-white/[0.05] hover:bg-white/[0.12] text-gray-300 font-pixel text-[7px] py-2.5 rounded-xl border border-white/10 transition-all">
          DETAILS
        </a>
        ${c.is_sold 
          ? `<span class="text-center bg-white/[0.02] text-gray-500 font-pixel text-[7px] py-2.5 rounded-xl cursor-not-allowed border border-white/[0.05] flex items-center justify-center">SOLD OUT</span>`
          : `<button type="button" onclick="NB.openInquiryModal('${c.id}')" class="text-center bg-gradient-to-r from-[#0E839E] to-[#1FB5D6] text-white font-pixel text-[7px] py-2.5 rounded-xl hover:shadow-[0_4px_18px_rgba(14,131,158,0.45)] hover:brightness-110 transition-all flex items-center justify-center space-x-1 cursor-pointer">
              <span>INQUIRE</span>
              <svg class="hidden sm:inline-block w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
            </button>`
        }
      </div>
    </div>`;
  },

  // ======================== CARD SKELETON (CURVY EDGES NA DAAN) ========================

  cardSkeleton() {
    return `
    <div class="relative bg-white/[0.04] backdrop-blur-xl rounded-3xl border border-white/[0.08] overflow-hidden flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.3)] animate-pulse p-3 sm:p-3.5">
      <div>
        <!-- Curvy Card Artwork Placeholder Container (Curvy on ALL 4 corners!) -->
        <div class="aspect-[3/4] bg-[#060a14] card-curvy-frame overflow-hidden relative rounded-2xl skeleton border border-white/[0.08] mb-3 flex items-center justify-center">
          <!-- Curvy Frosted Badges Placeholder -->
          <div class="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
            <div class="w-16 h-5 rounded-full bg-white/[0.08] border border-white/[0.1] backdrop-blur-md"></div>
            <div class="w-20 h-5 rounded-full bg-white/[0.08] border border-white/[0.1] backdrop-blur-md"></div>
          </div>
          
          <!-- Glowing Pokéball silhouette watermark -->
          <div class="opacity-15">
            <svg class="w-20 h-20 text-[#1FB5D6]" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8"/><line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="3.5" fill="#0B1120" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>
          </div>

          <!-- Curvy Set Tag Placeholder -->
          <div class="absolute bottom-2.5 left-3">
            <div class="w-28 h-3.5 rounded-full bg-white/[0.07]"></div>
          </div>
        </div>

        <!-- Curvy Meta Info Placeholder -->
        <div class="px-1 pb-1 space-y-2.5">
          <div class="h-4 rounded-xl bg-white/[0.08] w-4/5"></div>
          <div class="flex items-center justify-between pt-1">
            <div class="h-4 rounded-xl bg-white/[0.07] w-20"></div>
            <div class="h-4 rounded-full bg-white/[0.05] w-14"></div>
          </div>
        </div>
      </div>

      <!-- Curvy Action Buttons Placeholder -->
      <div class="pt-2 grid grid-cols-2 gap-2 border-t border-white/[0.04] mt-2">
        <div class="h-8 rounded-xl bg-white/[0.04] border border-white/[0.06]"></div>
        <div class="h-8 rounded-xl bg-gradient-to-r from-[#0E839E]/20 to-[#1FB5D6]/20"></div>
      </div>
    </div>`;
  },

  // ======================== VOUCHER COMPONENT ========================

  voucher(v, messengerUrl) {
    return `
    <div class="relative bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/[0.06] overflow-hidden hover:border-[#0E839E]/40 hover:shadow-[0_8px_40px_rgba(14,131,158,0.2)] transition-all duration-500 flex flex-col justify-between">
      <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#0E839E] via-[#1FB5D6] to-[#0E839E] rounded-l-2xl"></div>
      <div class="pl-6 pr-6 pt-6 pb-4">
        <div class="flex items-center justify-between mb-3">
          <div class="bg-gradient-to-r from-[#F6D06F]/20 to-[#FFDF85]/10 border border-[#F6D06F]/30 px-3.5 py-1.5 inline-block rounded-xl">
            <span class="font-pixel text-[9px] text-[#F6D06F]">${this.esc(v.code)}</span>
          </div>
          <span class="font-pixel text-[7px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">ACTIVE</span>
        </div>
        <div class="font-pixel text-2xl text-[#1FB5D6] mb-2 drop-shadow-[0_0_12px_rgba(31,181,214,0.4)]">
          ${v.discount_type==='percentage' ? v.discount_value+'% OFF' : '\u20B1'+v.discount_value+' OFF'}
        </div>
        <p class="font-body text-gray-300 text-sm mb-3 leading-relaxed">${this.esc(v.description)}</p>
        <p class="font-pixel text-[7px] text-gray-500">Valid: ${v.valid_from ? new Date(v.valid_from).toLocaleDateString() : 'Now'} \u2014 ${v.valid_until ? new Date(v.valid_until).toLocaleDateString() : 'Ongoing'}</p>
      </div>
      <div class="pl-6 pr-6 pb-6 pt-2 border-t border-white/[0.04]">
        <a href="${messengerUrl||'https://www.facebook.com/profile.php?id=61593883622380'}" target="_blank" class="w-full block text-center bg-gradient-to-r from-[#0E839E] to-[#1FB5D6] text-white font-pixel text-[7px] py-2.5 rounded-xl hover:shadow-[0_4px_20px_rgba(14,131,158,0.4)] transition-all duration-300">
          <span class="inline-flex items-center justify-center space-x-1.5"><span>CLAIM VOUCHER</span><span>${this.icons.arrowRight}</span></span>
        </a>
      </div>
    </div>`;
  },

  // ======================== TESTIMONIAL CARD COMPONENT ========================

  testimonialCard(t) {
    const stars = Array.from({length: 5}, (_, i) =>
      `<svg class="w-3.5 h-3.5 ${i < t.rating ? 'text-[#F6D06F]' : 'text-gray-600'}" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4h7.6l-6.1 4.5 2.3 7.3-6.2-4.6-6.2 4.6 2.3-7.3-6.1-4.5h7.6z"/></svg>`
    ).join('');
    const dateStr = t.date ? new Date(t.date).toLocaleDateString('en-PH', { year: 'numeric', month: 'short', day: 'numeric' }) : '';
    const initials = t.name.split(' ').map(w => w[0]).join('').toUpperCase();
    return `
    <div class="relative bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/[0.06] p-6 hover:border-[#0E839E]/40 hover:shadow-[0_8px_40px_rgba(14,131,158,0.15)] transition-all duration-500 flex flex-col">
      <!-- Quote icon -->
      <div class="absolute top-4 right-5 text-[#1FB5D6]/10">
        <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z"/></svg>
      </div>

      <!-- Stars -->
      <div class="flex items-center space-x-0.5 mb-3">${stars}</div>

      <!-- Review text -->
      <p class="font-body text-sm text-gray-300 leading-relaxed mb-5 flex-1">"${this.esc(t.text)}"</p>

      <!-- Author -->
      <div class="flex items-center space-x-3 pt-4 border-t border-white/[0.06]">
        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#0E839E] to-[#1FB5D6] flex items-center justify-center flex-shrink-0">
          <span class="font-pixel text-[8px] text-white">${initials}</span>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center space-x-2">
            <span class="font-body text-sm font-semibold text-white">${this.esc(t.name)}</span>
            ${t.verified ? '<svg class="w-3.5 h-3.5 text-[#1FB5D6] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>' : ''}
          </div>
          <div class="flex items-center space-x-2 mt-0.5">
            <span class="font-body text-xs text-gray-500">${this.esc(t.location)}</span>
            ${dateStr ? `<span class="text-gray-600">·</span><span class="font-body text-xs text-gray-500">${dateStr}</span>` : ''}
          </div>
        </div>
      </div>
    </div>`;
  },

  // ======================== EVENT CARD COMPONENT ========================

  eventCard(ev) {
    return `
    <div class="group relative bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/[0.06] overflow-hidden hover:border-[#0E839E]/40 hover:shadow-[0_8px_40px_rgba(14,131,158,0.15)] transition-all duration-500">
      <!-- Event Image -->
      <div class="aspect-[16/10] overflow-hidden relative bg-[#0B1120]">
        <img src="${ev.image}" ${ev.fallback ? `onerror="this.onerror=null;this.src='${ev.fallback}'"` : ''} alt="${this.esc(ev.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent"></div>
        <!-- Date badge -->
        <div class="absolute top-3 left-3">
          <span class="inline-flex items-center space-x-1 bg-[#0B1120]/80 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-lg">
            <span class="font-pixel text-[7px] text-[#1FB5D6]">${this.esc(ev.date)}</span>
          </span>
        </div>
      </div>
      <!-- Content -->
      <div class="p-4">
        <h3 class="font-pixel text-[9.5px] text-white mb-1.5 truncate">${this.esc(ev.title)}</h3>
        <div class="flex items-center space-x-1 text-gray-400">
          <svg class="w-3.5 h-3.5 text-[#F6D06F] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          <span class="font-body text-xs text-gray-300 truncate">${this.esc(ev.location)}</span>
        </div>
      </div>
    </div>`;
  },

  // ======================== LAYOUT – HEADER (NO ADMIN) ========================

  headerInner(activePage, settings) {
    const rawName = (settings?.site_name||'NOOBLAX BREAKS').toUpperCase();
    const messengerUrl = settings?.fb_messenger_url || this.DEFAULT_SETTINGS.fb_messenger_url;
    const nav = [
      {n:'Home',          h:'/',              k:'home'},
      {n:'Card Showcase', h:'/cards.html',    k:'cards'},
      {n:'Vouches',      h:'/vouchers.html', k:'vouchers'},
    ];
    let brandHtml;
    if (rawName.includes(' ')) {
      const parts = rawName.split(' ');
      brandHtml = `<span class="brand-text-gold">${this.esc(parts[0])}</span> <span class="brand-text-teal">${this.esc(parts.slice(1).join(' '))}</span>`;
    } else {
      brandHtml = `<span class="brand-text-gold">${this.esc(rawName)}</span>`;
    }

    const link = (i) => `
      <a href="${i.h}" class="relative group py-3 px-2 font-pixel text-[8.5px] lg:text-[9.5px] uppercase tracking-widest transition-all duration-300 ${activePage===i.k ? 'text-[#1FB5D6] drop-shadow-[0_0_12px_rgba(31,181,214,0.6)] font-bold' : 'text-gray-400 hover:text-[#1FB5D6]'}">
        <span>${i.n}</span>
        ${activePage===i.k 
          ? '<span class="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0E839E] via-[#1FB5D6] to-[#0E839E] rounded-full shadow-[0_0_10px_rgba(31,181,214,0.8)]"></span>' 
          : '<span class="absolute -bottom-1 left-1/2 right-1/2 h-0.5 bg-[#1FB5D6] rounded-full transition-all duration-300 group-hover:left-0 group-hover:right-0 opacity-0 group-hover:opacity-100 shadow-[0_0_6px_rgba(31,181,214,0.6)]"></span>'
        }
      </a>`;
    const mlink = (i) => `<a href="${i.h}" class="block px-6 py-4 font-pixel text-[8.5px] uppercase tracking-wider transition-colors ${activePage===i.k?'text-[#1FB5D6] bg-[#1FB5D6]/10 font-bold':'text-gray-400 hover:text-[#1FB5D6] hover:bg-white/[0.03]'}">${i.n}</a>`;
    
    return `
      <div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div class="flex justify-between items-center h-24 sm:h-28">
          
          <!-- Official Brand Logo (No hover animation) -->
          <a href="/" class="flex items-center space-x-3 py-1 brand-logo">
            <img src="/assets/LOGO_NB.png" alt="Nooblax Breaks" class="h-12 sm:h-16 md:h-18 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] drop-shadow-[0_0_10px_rgba(246,208,111,0.2)] flex-shrink-0">
            <span class="font-pixel brand-logo-text brand-text-gradient text-[10px] sm:text-xs md:text-sm lg:text-base tracking-wider">${rawName}</span>
          </a>

          <!-- Desktop Navigation with generous breathing room & spacious gaps -->
          <nav class="hidden md:flex items-center space-x-12 lg:space-x-16 xl:space-x-20">
            ${nav.map(link).join('')}
          </nav>

          <!-- Direct Messenger CTA Button (Gradient) -->
          <div class="flex items-center space-x-5">
            <button type="button" onclick="NB.openInquiryModal()" class="hidden sm:inline-flex items-center space-x-3 bg-gradient-to-r from-[#0E839E] to-[#1FB5D6] text-white font-pixel text-[8.5px] lg:text-[9px] px-6 py-3.5 sm:px-7 sm:py-4 rounded-2xl shadow-[0_4px_20px_rgba(14,131,158,0.4)] hover:shadow-[0_6px_28px_rgba(14,131,158,0.7)] hover:-translate-y-0.5 transition-all cursor-pointer">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
              <span>INQUIRE NOW</span>
            </button>

            <!-- Mobile Hamburger Button -->
            <button id="mobile-menu-btn" class="md:hidden text-gray-400 hover:text-[#1FB5D6] transition-colors p-2.5 rounded-xl hover:bg-white/[0.04]" aria-label="Menu">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Dropdown Nav (NO ADMIN LINK) -->
      <div class="md:hidden hidden bg-[#0B1120]/95 backdrop-blur-2xl border-t border-white/[0.06]" id="mobile-menu">
        <div class="py-2 px-2">
          ${nav.map(mlink).join('')}
          <div class="pt-2 pb-1 border-t border-white/[0.06] mt-2">
            <button type="button" onclick="NB.openInquiryModal()" class="block w-full text-center bg-gradient-to-r from-[#0E839E] to-[#1FB5D6] text-white font-pixel text-[8px] py-3 rounded-xl shadow-[0_4px_16px_rgba(14,131,158,0.3)] cursor-pointer">
              MESSAGE DIRECTLY
            </button>
          </div>
        </div>
      </div>`;
  },

  header(activePage, settings) {
    return `
    <!-- Main Navigation Bar (Clean public view, NO ADMIN LINK) -->
    <header id="app-header" class="site-header sticky top-0 z-50">
      ${this.headerInner(activePage, settings)}
    </header>`;
  },

  // ======================== LAYOUT – FOOTER (NO ADMIN) ========================

  footer(settings) {
    const rawName = (settings?.site_name||'NOOBLAX BREAKS').toUpperCase();
    return `
    <footer class="bg-[#060a14] mt-20 py-16 border-t border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <!-- Column 1: Brand Info -->
          <div class="md:col-span-2">
            <div class="flex items-center space-x-3 mb-4 brand-logo">
              <img src="/assets/LOGO_NB.png" alt="Nooblax Breaks" class="h-10 sm:h-12 w-auto object-contain flex-shrink-0 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
              <span class="font-pixel brand-logo-text brand-text-gradient text-[10px] sm:text-xs tracking-wider">${rawName}</span>
            </div>
            <p class="font-body text-sm text-gray-400 max-w-md leading-relaxed mb-4">
              Your premier Pokémon TCG showcase in the Philippines. Featuring authenticated raw chase singles, Special Art Rares (SAR), and PSA 10 slabs. Transactions and inquiries handled directly through direct messages.
            </p>
            <div class="flex items-center space-x-3 text-xs text-gray-500">
              <span class="flex items-center space-x-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Active Showcase</span>
              </span>
              <span>•</span>
              <span>Fast Courier Shipping PH</span>
            </div>
          </div>

          <!-- Column 2: Navigation -->
          <div>
            <h4 class="font-pixel text-[8px] text-gray-300 uppercase mb-4 tracking-wider">Navigation</h4>
            <div class="flex flex-col space-y-2.5">
              <a href="/" class="font-body text-sm text-gray-400 hover:text-[#1FB5D6] transition-colors whitespace-nowrap">Home</a>
              <a href="/cards.html" class="font-body text-sm text-gray-400 hover:text-[#1FB5D6] transition-colors whitespace-nowrap">Cards</a>
              <a href="/vouchers.html" class="font-body text-sm text-gray-400 hover:text-[#1FB5D6] transition-colors whitespace-nowrap">Vouches</a>
              <a href="javascript:void(0)" onclick="NB.openInquiryModal()" class="font-body text-sm text-gray-400 hover:text-[#1FB5D6] transition-colors whitespace-nowrap cursor-pointer">Contact</a>
            </div>
          </div>


          <!-- Column 3: Direct Inquiry CTA -->
          <div>
            <h4 class="font-pixel text-[8px] text-gray-300 uppercase mb-4 tracking-wider">Direct Inquiries</h4>
            <p class="font-body text-xs text-gray-400 mb-4 leading-relaxed">
              Interested in a card or looking for a specific chase single? Message us directly on TikTok, Instagram, or Facebook for quick responses and HD photos/videos.
            </p>
            <button type="button" onclick="NB.openInquiryModal()" class="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0E839E] to-[#1FB5D6] text-white font-pixel text-[7px] px-4 py-3 rounded-xl hover:shadow-[0_4px_20px_rgba(14,131,158,0.4)] transition-all duration-300 cursor-pointer">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
              <span>SEND INQUIRY</span>
            </button>
          </div>

        </div>

        <!-- Bottom Disclaimer -->
        <div class="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center text-xs text-gray-600 gap-4">
          <p>© ${new Date().getFullYear()} Nooblax Breaks. All rights reserved.</p>
          <p class="text-[11px] text-gray-600">Pokémon and Pokémon character names are trademarks of Nintendo, Creatures Inc., and Game Freak.</p>
        </div>
      </div>
    </footer>`;
  },

  // ======================== MESSENGER FAB ========================

  messengerFAB(settings) {
    return `
    <button type="button" id="messenger-fab-link" onclick="NB.openInquiryModal()" aria-label="Open Inquiry Channels" class="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#0E839E] to-[#1FB5D6] text-white px-5 py-3.5 rounded-full shadow-[0_4px_24px_rgba(14,131,158,0.45)] hover:shadow-[0_8px_36px_rgba(14,131,158,0.7)] hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2.5 group cursor-pointer border border-[#1FB5D6]/30">
      <svg class="h-5 w-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
      <span class="font-pixel text-[8px] tracking-wider">INQUIRE</span>
    </button>`;
  },

  // ======================== PAGE INITIALIZERS ========================

  async initPublic(activePage) {
    const bindMenu = () => {
      const btn = document.getElementById('mobile-menu-btn');
      const menu = document.getElementById('mobile-menu');
      if (btn && menu && !btn.dataset.bound) {
        btn.dataset.bound = 'true';
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          menu.classList.toggle('hidden');
        });
      }
    };

    // 1. Immediately bind menu if already pre-rendered
    bindMenu();

    const hdr = document.getElementById('app-header');
    // If hdr is present but empty, fill immediately so there is zero delay/blank flash
    if (hdr && hdr.children.length === 0) {
      if (hdr.tagName.toUpperCase() === 'HEADER') {
        hdr.innerHTML = this.headerInner(activePage, this.DEFAULT_SETTINGS);
      } else {
        hdr.outerHTML = this.header(activePage, this.DEFAULT_SETTINGS);
      }
      bindMenu();
    }

    const settings = await this.loadSettings();

    // Dynamically update site name or messenger url without re-rendering or flashing DOM
    const currentHdr = document.getElementById('app-header');
    if (currentHdr) {
      if (settings?.fb_messenger_url) {
        currentHdr.querySelectorAll('a[href*="m.me"]').forEach(a => {
          a.href = settings.fb_messenger_url;
        });
      }
      if (settings?.site_name) {
        const brandText = currentHdr.querySelector('.brand-logo-text');
        if (brandText) {
          brandText.classList.add('brand-text-gradient');
          brandText.textContent = settings.site_name.toUpperCase();
        }
      }
    }

    const ftr = document.getElementById('app-footer');
    if (ftr) ftr.innerHTML = this.footer(settings);

    if (!document.getElementById('nb-messenger-fab')) {
      const fab = document.createElement('div');
      fab.id = 'nb-messenger-fab';
      fab.innerHTML = this.messengerFAB(settings);
      document.body.appendChild(fab.firstElementChild);
    }

    bindMenu();
    return settings;
  },

  // ======================== TOAST ========================

  toast(message, type = 'success') {
    const colors = { success: 'from-[#0E839E] to-[#1FB5D6]', error: 'from-[#E63946] to-[#EE3F3F]', info: 'from-gray-700 to-gray-600' };
    const el = document.createElement('div');
    el.className = `fixed top-4 right-4 z-[9999] bg-gradient-to-r ${colors[type]||colors.info} text-white font-body text-sm px-6 py-3 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-opacity duration-500`;
    el.textContent = message;
    document.body.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; setTimeout(() => el.remove(), 500); }, 3000);
  },
};
