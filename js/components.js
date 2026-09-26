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
    check: `<svg class="w-3.5 h-3.5 inline-block text-emerald-400 stroke-current fill-none" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>`
  },

  // ======================== DEFAULT / FALLBACK DATA ========================

  DEFAULT_SETTINGS: {
    site_name: 'Nooblax Breaks',
    fb_messenger_url: 'https://m.me/nooblaxbreaks',
    hero_tagline: 'RARE GRAILS. GRADED SLABS. NEXT-LEVEL PULLS.',
    hero_subtitle: 'The premier collector\'s showcase for authenticated Pokémon TCG singles, Special Art Rares (SAR), and PSA 10 slabs. Message us directly for live availability & fast nationwide delivery.',
  },

  DEFAULT_CARDS: [
    {
      id: 1,
      name: 'Charizard ex (Special Art Rare)',
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
      set_name: 'Crown Zenith / Vivid Voltage',
      rarity: 'Secret Rare',
      price: 11500,
      condition: 'PSA 10',
      is_featured: false,
      is_sold: false,
      image_url: 'https://images.pokemontcg.io/swsh4/188_hires.png',
      description: 'Beloved Chunky Pikachu ("Chonkachu") in sparkling Rainbow Hyper Rare holographic foil. Encased in a crystal-clear PSA 10 slab.'
    }
  ],

  // ======================== DEFAULT VOUCHERS ========================

  DEFAULT_VOUCHERS: [
    {
      id: 1,
      code: 'NOOBLAX10',
      description: 'Enjoy 10% OFF on any single Pokémon card purchase during live showcase drops!',
      discount_type: 'percentage',
      discount_value: 10,
      valid_from: '2026-01-01',
      valid_until: '2026-12-31',
      is_active: true
    },
    {
      id: 2,
      code: 'FIRSTBREAK',
      description: 'Flat ₱100 discount voucher on your first card inquiry or box break order.',
      discount_type: 'fixed',
      discount_value: 100,
      valid_from: '2026-01-01',
      valid_until: '2026-12-31',
      is_active: true
    },
    {
      id: 3,
      code: 'FREESHIP',
      description: 'Free protected courier shipping on card orders of ₱3,500 and above nationwide.',
      discount_type: 'fixed',
      discount_value: 200,
      valid_from: '2026-01-01',
      valid_until: '2026-12-31',
      is_active: true
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
          return s;
        }
      }
    } catch (e) {
      console.warn('Using default settings fallback:', e);
    }
    return { ...this.DEFAULT_SETTINGS };
  },

  async getCards() {
    try {
      if (typeof supabaseClient !== 'undefined' && supabaseClient.from) {
        const { data, error } = await supabaseClient.from('cards').select('*').order('created_at', { ascending: false });
        if (!error && data && data.length > 0) {
          return data;
        }
      }
    } catch (e) {
      console.warn('Using default cards fallback:', e);
    }
    return this.DEFAULT_CARDS;
  },

  async getCardById(id) {
    try {
      if (typeof supabaseClient !== 'undefined' && supabaseClient.from) {
        const { data, error } = await supabaseClient.from('cards').select('*').eq('id', id).single();
        if (!error && data) return data;
      }
    } catch (e) {
      console.warn('Card lookup fallback:', e);
    }
    return this.DEFAULT_CARDS.find(c => String(c.id) === String(id)) || this.DEFAULT_CARDS[0];
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
    const base = settings?.fb_messenger_url || this.DEFAULT_SETTINGS.fb_messenger_url;
    const msg = `Hi Nooblax! I am interested in inquiring about this Pokémon card: ${card.name} (${card.set_name || 'Single'}) - Price: ${this.price(card.price)}`;
    return `${base}?text=${encodeURIComponent(msg)}`;
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
    return `
    <span class="glass-badge ${theme}">
      <span class="badge-pip"></span>
      <span class="badge-text">${this.esc(r || 'CARD')}</span>
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

  RARITIES: ['Common','Uncommon','Rare Holo','Ultra Rare','SAR','Art Rare','Secret Rare','PSA 10','Illustration Rare'],
  CONDITIONS: ['Mint','NM','LP','MP','HP','PSA 10','PSA 9','PSA 8','BGS 10','BGS 9.5'],

  // ======================== CARD COMPONENT ========================

  card(c, settings) {
    const img = this.img(c.image_url);
    const inquireUrl = this.messengerInquiryUrl(c, settings);

    return `
    <div class="group relative bg-white/[0.04] backdrop-blur-xl rounded-3xl border border-white/[0.08] hover:border-[#0E839E]/50 transition-all duration-500 overflow-hidden hover:shadow-[0_12px_44px_rgba(14,131,158,0.25)] hover:-translate-y-1.5 flex flex-col justify-between card-holo p-3 sm:p-3.5">
      <div>
        <!-- Curvy Card Artwork Frame (Curvy on ALL 4 corners!) -->
        <a href="/card.html?id=${c.id}" class="block aspect-[3/4] bg-[#060a14] skeleton card-curvy-frame overflow-hidden relative rounded-2xl border border-white/[0.08] shadow-inner mb-3">
          <img src="${img}" alt="${this.esc(c.name)}" 
               onload="this.parentElement.classList.remove('skeleton')"
               onerror="this.onerror=null;this.src='/assets/placeholder.svg';this.parentElement.classList.remove('skeleton');" 
               class="w-full h-full object-cover rounded-2xl group-hover:scale-106 transition-transform duration-1000 ease-out" loading="lazy">
          
          <!-- Dual Vignette (soft top and bottom shadow for maximum badge contrast) -->
          <div class="absolute inset-0 bg-gradient-to-b from-[#060a14]/75 via-transparent to-[#0B1120] opacity-85 pointer-events-none rounded-2xl"></div>
          
          <!-- Frosted Glass Badges Header -->
          <div class="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-10 gap-1.5">
            ${this.conditionBadge(c)}
            ${this.rarityBadge(c.rarity)}
          </div>

          <!-- Sold Overlay -->
          ${c.is_sold ? '<div class="absolute inset-0 bg-[#0B1120]/80 backdrop-blur-sm flex items-center justify-center z-20 rounded-2xl"><span class="font-pixel text-[#E63946] text-xs border-2 border-[#E63946]/60 bg-[#E63946]/10 px-4 py-2 rounded-2xl rotate-[-12deg] shadow-[0_0_24px_rgba(230,57,70,0.4)]">SOLD OUT</span></div>' : ''}
          
          <!-- Set Name Badge -->
          <div class="absolute bottom-2.5 left-3 right-3 flex items-center justify-between z-10">
            <p class="font-pixel text-[7px] text-[#1FB5D6] drop-shadow-md truncate">${this.esc(c.set_name)}</p>
          </div>
        </a>

        <!-- Card Meta Info -->
        <div class="px-1 pb-1">
          <a href="/card.html?id=${c.id}" class="block">
            <h3 class="font-body font-bold text-white text-sm hover:text-[#1FB5D6] transition-colors line-clamp-1 mb-1.5">${this.esc(c.name)}</h3>
          </a>
          <div class="flex items-baseline justify-between mt-2">
            <span class="font-pixel text-xs text-[#1FB5D6] drop-shadow-[0_0_10px_rgba(31,181,214,0.5)]">${this.price(c.price)}</span>
            <span class="font-body text-[10px] text-gray-400 bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/[0.06]">Available</span>
          </div>
        </div>
      </div>

      <!-- Quick Action Buttons -->
      <div class="pt-2 grid grid-cols-2 gap-2 border-t border-white/[0.04] mt-2">
        <a href="/card.html?id=${c.id}" class="text-center bg-white/[0.05] hover:bg-white/[0.12] text-gray-300 font-pixel text-[7px] py-2.5 rounded-xl border border-white/10 transition-all">
          DETAILS
        </a>
        ${c.is_sold 
          ? `<span class="text-center bg-white/[0.03] text-gray-500 font-pixel text-[7px] py-2.5 rounded-xl cursor-not-allowed">SOLD</span>`
          : `<a href="${inquireUrl}" target="_blank" class="text-center bg-gradient-to-r from-[#0E839E] to-[#1FB5D6] text-white font-pixel text-[7px] py-2.5 rounded-xl hover:shadow-[0_4px_18px_rgba(14,131,158,0.45)] hover:brightness-110 transition-all flex items-center justify-center space-x-1">
              <span>INQUIRE</span>
              <svg class="w-3 h-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
            </a>`
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
        <a href="${messengerUrl||'https://m.me/nooblaxbreaks'}?text=${encodeURIComponent('Hi! I want to claim voucher code: ' + v.code)}" target="_blank" class="w-full block text-center bg-gradient-to-r from-[#0E839E] to-[#1FB5D6] text-white font-pixel text-[7px] py-2.5 rounded-xl hover:shadow-[0_4px_20px_rgba(14,131,158,0.4)] transition-all duration-300">
          <span class="inline-flex items-center justify-center space-x-1.5"><span>CLAIM VOUCHER</span><span>${this.icons.arrowRight}</span></span>
        </a>
      </div>
    </div>`;
  },

  // ======================== LAYOUT – HEADER (NO ADMIN) ========================

  headerInner(activePage, settings) {
    const name = this.esc((settings?.site_name||'NOOBLAX BREAKS')).toUpperCase();
    const messengerUrl = settings?.fb_messenger_url || this.DEFAULT_SETTINGS.fb_messenger_url;
    const nav = [
      {n:'Home',          h:'/',              k:'home'},
      {n:'Card Showcase', h:'/cards.html',    k:'cards'},
      {n:'Vouchers',      h:'/vouchers.html', k:'vouchers'},
    ];
    const link = (i) => `
      <a href="${i.h}" class="relative group py-3 px-2 font-pixel text-[8.5px] lg:text-[9.5px] uppercase tracking-widest transition-all duration-300 ${activePage===i.k ? 'text-[#1FB5D6] drop-shadow-[0_0_12px_rgba(31,181,214,0.6)] font-bold' : 'text-gray-400 hover:text-[#1FB5D6]'}">
        <span>${i.n}</span>
        ${activePage===i.k 
          ? '<span class="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0E839E] via-[#1FB5D6] to-[#0E839E] rounded-full shadow-[0_0_10px_rgba(31,181,214,0.8)]"></span>' 
          : '<span class="absolute -bottom-1 left-1/2 right-1/2 h-0.5 bg-[#1FB5D6] rounded-full transition-all duration-300 group-hover:left-0 group-hover:right-0 opacity-0 group-hover:opacity-100 shadow-[0_0_6px_rgba(31,181,214,0.6)]"></span>'
        }
      </a>`;
    const mlink = (i) => `<a href="${i.h}" class="block px-6 py-4 font-pixel text-[8.5px] uppercase tracking-wider transition-colors ${activePage===i.k?'text-[#1FB5D6] bg-[#1FB5D6]/10':'text-gray-400 hover:text-[#1FB5D6] hover:bg-white/[0.03]'}">${i.n}</a>`;
    
    return `
      <div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div class="flex justify-between items-center h-24 sm:h-28">
          
          <!-- Logo with Glowing Pokeball element -->
          <a href="/" class="flex items-center space-x-3.5 group py-2 brand-logo">
            <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0E839E] to-[#1FB5D6] p-0.5 shadow-[0_0_14px_rgba(31,181,214,0.5)] group-hover:scale-105 transition-transform flex items-center justify-center flex-shrink-0">
              <div class="w-full h-full rounded-full bg-[#0B1120] flex items-center justify-center">
                <div class="w-3 h-3 rounded-full bg-[#1FB5D6] animate-pulse"></div>
              </div>
            </div>
            <span class="font-pixel brand-logo-text text-[#1FB5D6] text-xs sm:text-sm md:text-base tracking-wider" style="color: #1FB5D6 !important; -webkit-text-fill-color: #1FB5D6 !important; text-shadow: 0 0 14px rgba(31,181,214,0.6);">${name}</span>
          </a>

          <!-- Desktop Navigation with generous breathing room & spacious gaps -->
          <nav class="hidden md:flex items-center space-x-12 lg:space-x-16 xl:space-x-20">
            ${nav.map(link).join('')}
          </nav>

          <!-- Direct Messenger CTA Button -->
          <div class="flex items-center space-x-5">
            <a href="${messengerUrl}" target="_blank" class="hidden sm:inline-flex items-center space-x-3 bg-gradient-to-r from-[#0E839E] to-[#1FB5D6] text-white font-pixel text-[8.5px] lg:text-[9px] px-6 py-3.5 sm:px-7 sm:py-4 rounded-2xl shadow-[0_4px_20px_rgba(14,131,158,0.4)] hover:shadow-[0_6px_28px_rgba(14,131,158,0.7)] hover:-translate-y-0.5 transition-all">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
              <span>INQUIRE NOW</span>
            </a>

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
            <a href="${messengerUrl}" target="_blank" class="block w-full text-center bg-gradient-to-r from-[#0E839E] to-[#1FB5D6] text-white font-pixel text-[8px] py-3 rounded-xl">
              MESSAGE US DIRECTLY
            </a>
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
    const url = settings?.fb_messenger_url || this.DEFAULT_SETTINGS.fb_messenger_url;
    const name = this.esc((settings?.site_name||'NOOBLAX BREAKS')).toUpperCase();
    return `
    <footer class="bg-[#060a14] mt-20 py-16 border-t border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <!-- Column 1: Brand Info -->
          <div class="md:col-span-2">
            <div class="flex items-center space-x-2.5 mb-3 brand-logo">
              <div class="w-6 h-6 rounded-full bg-gradient-to-tr from-[#0E839E] to-[#1FB5D6] p-0.5 flex-shrink-0">
                <div class="w-full h-full rounded-full bg-[#0B1120] flex items-center justify-center">
                  <div class="w-2 h-2 rounded-full bg-[#1FB5D6]"></div>
                </div>
              </div>
              <span class="font-pixel brand-logo-text text-[#1FB5D6] text-[9px]" style="color: #1FB5D6 !important; -webkit-text-fill-color: #1FB5D6 !important; text-shadow: 0 0 10px rgba(31,181,214,0.5);">${name}</span>
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
              <a href="/" class="font-body text-sm text-gray-400 hover:text-[#1FB5D6] transition-colors">Home Showcase</a>
              <a href="/cards.html" class="font-body text-sm text-gray-400 hover:text-[#1FB5D6] transition-colors">Browse All Cards</a>
              <a href="/vouchers.html" class="font-body text-sm text-gray-400 hover:text-[#1FB5D6] transition-colors">Active Vouchers</a>
              <a href="${url}" target="_blank" class="font-body text-sm text-gray-400 hover:text-[#1FB5D6] transition-colors">Contact Owner</a>
            </div>
          </div>

          <!-- Column 3: Direct Inquiry CTA -->
          <div>
            <h4 class="font-pixel text-[8px] text-gray-300 uppercase mb-4 tracking-wider">Direct Inquiries</h4>
            <p class="font-body text-xs text-gray-400 mb-4 leading-relaxed">
              Interested in a card or looking for a specific chase single? Message us directly for quick responses and HD photos/videos.
            </p>
            <a href="${url}" target="_blank" class="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0E839E] to-[#1FB5D6] text-white font-pixel text-[7px] px-4 py-3 rounded-xl hover:shadow-[0_4px_20px_rgba(14,131,158,0.4)] transition-all duration-300">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
              <span>SEND INQUIRY</span>
            </a>
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
    const url = settings?.fb_messenger_url || this.DEFAULT_SETTINGS.fb_messenger_url;
    return `
    <a href="${url}" target="_blank" class="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#0E839E] to-[#1FB5D6] text-white px-5 py-3.5 rounded-full shadow-[0_4px_24px_rgba(14,131,158,0.45)] hover:shadow-[0_8px_36px_rgba(14,131,158,0.7)] hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2.5 group">
      <svg class="h-5 w-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
      <span class="font-pixel text-[8px] tracking-wider">INQUIRE</span>
    </a>`;
  },

  // ======================== ADMIN COMPONENTS (RETAINED FOR LATER WORK) ========================

  adminSidebar(activePage) {
    const items = [
      {n:'Dashboard', h:'/admin/dashboard.html', k:'dashboard',
       icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>'},
      {n:'Cards', h:'/admin/cards.html', k:'cards',
       icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>'},
      {n:'Vouchers', h:'/admin/vouchers.html', k:'vouchers',
       icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/>'},
      {n:'Settings', h:'/admin/settings.html', k:'settings',
       icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>'},
    ];
    const li = (i) => {
      const active = activePage===i.k;
      return `<a href="${i.h}" class="flex items-center space-x-3 px-4 py-3 text-sm font-body rounded-xl mx-2 transition-all duration-300 ${active?'bg-[#0E839E]/15 text-[#1FB5D6] shadow-[0_0_12px_rgba(14,131,158,0.15)]':'text-gray-500 hover:bg-white/[0.03] hover:text-gray-300'}">
        <svg class="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">${i.icon}</svg>
        <span>${i.n}</span>
      </a>`;
    };
    return `
    <aside class="fixed left-0 top-0 w-64 h-screen bg-[#060a14]/95 backdrop-blur-2xl border-r border-white/[0.06] z-40 flex-col hidden md:flex">
      <div class="p-6 border-b border-white/[0.06]">
        <span class="font-pixel text-[#1FB5D6] text-[9px] block drop-shadow-[0_0_10px_rgba(31,181,214,0.5)]">NOOBLAX</span>
        <span class="font-pixel text-[7px] text-gray-600 mt-1 block">ADMIN PANEL</span>
      </div>
      <nav class="flex-1 py-4 space-y-1">${items.map(li).join('')}</nav>
      <div class="p-4 border-t border-white/[0.06] space-y-2">
        <a href="/" class="flex items-center space-x-2 text-gray-500 hover:text-[#1FB5D6] font-body text-sm transition-colors px-2">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          <span>View Site</span>
        </a>
        <button id="admin-logout" class="flex items-center space-x-2 text-[#E63946] hover:text-[#EE3F3F] font-pixel text-[7px] transition-colors w-full px-2">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
          <span>LOGOUT</span>
        </button>
      </div>
    </aside>`;
  },

  adminTopbar(activePage) {
    return `
    <div class="md:hidden bg-[#060a14]/95 backdrop-blur-2xl border-b border-white/[0.06] text-white px-4 py-3 flex items-center justify-between sticky top-0 z-40">
      <span class="font-pixel text-[#1FB5D6] text-[8px] drop-shadow-[0_0_8px_rgba(31,181,214,0.5)]">NOOBLAX ADMIN</span>
      <div class="flex items-center space-x-3">
        <a href="/" class="text-gray-500 hover:text-[#1FB5D6] transition-colors"><svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg></a>
        <button id="admin-mobile-menu-btn" class="text-gray-400 hover:text-white transition-colors">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>
    <div id="admin-mobile-nav" class="md:hidden hidden bg-[#060a14]/95 backdrop-blur-2xl border-b border-white/[0.06]">
      <a href="/admin/dashboard.html" class="block px-4 py-3 font-body text-sm transition-colors ${activePage==='dashboard'?'text-[#1FB5D6] bg-[#0E839E]/10':'text-gray-400 hover:text-white hover:bg-white/[0.03]'}">Dashboard</a>
      <a href="/admin/cards.html" class="block px-4 py-3 font-body text-sm transition-colors ${activePage==='cards'?'text-[#1FB5D6] bg-[#0E839E]/10':'text-gray-400 hover:text-white hover:bg-white/[0.03]'}">Cards</a>
      <a href="/admin/vouchers.html" class="block px-4 py-3 font-body text-sm transition-colors ${activePage==='vouchers'?'text-[#1FB5D6] bg-[#0E839E]/10':'text-gray-400 hover:text-white hover:bg-white/[0.03]'}">Vouchers</a>
      <a href="/admin/settings.html" class="block px-4 py-3 font-body text-sm transition-colors ${activePage==='settings'?'text-[#1FB5D6] bg-[#0E839E]/10':'text-gray-400 hover:text-white hover:bg-white/[0.03]'}">Settings</a>
      <button id="admin-mobile-logout" class="block w-full text-left px-4 py-3 font-pixel text-[7px] text-[#E63946] hover:bg-white/[0.03] transition-colors">LOGOUT</button>
    </div>`;
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
        if (brandText) brandText.textContent = settings.site_name.toUpperCase();
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

  async initAdmin(activePage) {
    const session = await this.checkAuth();
    if (!session) { window.location.href = '/admin/'; return null; }
    const settings = await this.loadSettings();
    const sb = document.getElementById('admin-sidebar');
    if (sb) sb.innerHTML = this.adminSidebar(activePage);
    const tb = document.getElementById('admin-topbar');
    if (tb) tb.innerHTML = this.adminTopbar(activePage);
    setTimeout(() => {
      const doLogout = async (e) => { e.preventDefault(); await supabaseClient.auth.signOut(); window.location.href = '/admin/'; };
      document.getElementById('admin-logout')?.addEventListener('click', doLogout);
      document.getElementById('admin-mobile-logout')?.addEventListener('click', doLogout);
      document.getElementById('admin-mobile-menu-btn')?.addEventListener('click', () => {
        document.getElementById('admin-mobile-nav')?.classList.toggle('hidden');
      });
    }, 0);
    return { session, settings };
  },

  // ======================== STORAGE HELPERS ========================

  async uploadCardImage(file) {
    const fileName = Date.now() + '-' + file.name.replace(/[^a-zA-Z0-9._-]/g, '');
    const { data, error } = await supabaseClient.storage
      .from('card-images')
      .upload(fileName, file, { cacheControl: '3600', upsert: false });
    if (error) throw error;
    const { data: { publicUrl } } = supabaseClient.storage
      .from('card-images')
      .getPublicUrl(fileName);
    return publicUrl;
  },

  async deleteCardImage(url) {
    if (!url) return;
    try {
      const parts = url.split('/card-images/');
      if (parts.length < 2) return;
      await supabaseClient.storage.from('card-images').remove([parts[1]]);
    } catch (e) { console.warn('Image delete failed:', e); }
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
