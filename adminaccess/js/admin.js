// ================================================================
// Nooblax Breaks – Dedicated Admin Portal Core Controller
// Completely Standalone & Independent
// ================================================================

const Admin = {
  // Constants
  RARITIES: [
    'Common', 'Uncommon', 'Rare Holo', 'Ultra Rare', 'SAR',
    'Art Rare', 'Secret Rare', 'PSA 10', 'Illustration Rare'
  ],
  CONDITIONS: [
    'Mint', 'NM', 'LP', 'MP', 'HP',
    'PSA 10', 'PSA 9', 'PSA 8', 'BGS 10', 'BGS 9.5'
  ],
  POKEMON_TYPES: [
    'Fire', 'Water', 'Grass', 'Lightning', 'Psychic', 
    'Fighting', 'Darkness', 'Metal', 'Dragon', 'Colorless'
  ],

  esc(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  },

  price(v) {
    return '₱' + Number(v || 0).toLocaleString();
  },

  toast(message, type = 'success') {
    const el = document.createElement('div');
    const colorClass = type === 'success' ? 'from-emerald-600 to-teal-500 border-emerald-400' :
                       type === 'error'   ? 'from-red-600 to-rose-500 border-red-400' :
                                            'from-sky-600 to-blue-500 border-sky-400';
    el.className = `fixed top-6 right-6 z-50 px-5 py-3.5 rounded-2xl text-white font-sans text-sm font-semibold shadow-2xl bg-gradient-to-r ${colorClass} border backdrop-blur-xl transition-all duration-300 transform translate-y-0 opacity-100 flex items-center space-x-2`;
    el.innerHTML = `
      <svg class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        ${type === 'success' ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>' :
          type === 'error'   ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>' :
                               '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>'}
      </svg>
      <span>${this.esc(message)}</span>
    `;
    document.body.appendChild(el);
    setTimeout(() => {
      el.classList.add('opacity-0', '-translate-y-2');
      setTimeout(() => el.remove(), 300);
    }, 3500);
  },

  async checkAuth() {
    if (!supabaseClient) return null;
    try {
      const { data: { session } } = await supabaseClient.auth.getSession();
      return session;
    } catch (e) {
      console.error('Auth error:', e);
      return null;
    }
  },

  async requireAuth() {
    const session = await this.checkAuth();
    if (!session) {
      window.location.href = 'index.html';
      return null;
    }
    return session;
  },

  async logout() {
    if (supabaseClient) {
      await supabaseClient.auth.signOut();
    }
    window.location.href = 'index.html';
  },

  renderSidebar(activePage) {
    const items = [
      { name: 'Dashboard', href: 'dashboard.html', key: 'dashboard', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>' },
      { name: 'Cards', href: 'cards.html', key: 'cards', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>' },
      { name: 'Vouches / Reviews', href: 'testimonials.html', key: 'testimonials', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>' },
      { name: 'Events Showcase', href: 'events.html', key: 'events', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>' },
      { name: 'Site Settings', href: 'settings.html', key: 'settings', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>' },
    ];

    return `
      <aside class="fixed left-0 top-0 w-64 h-screen bg-[#070D1B]/95 backdrop-blur-2xl border-r border-white/10 z-40 flex flex-col justify-between hidden md:flex">
        <div>
          <!-- Header -->
          <div class="p-5 border-b border-white/10 flex items-center space-x-3 bg-white/[0.01]">
            <img src="assets/LOGO_NB.png" alt="Nooblax Breaks" class="h-10 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] drop-shadow-[0_0_10px_rgba(246,208,111,0.25)] flex-shrink-0">
            <div class="min-w-0">
              <div class="font-pixel brand-logo-text brand-text-gradient text-[10px] tracking-wider leading-tight">NOOBLAX BREAKS</div>
              <div class="text-[9px] text-[#1FB5D6] font-semibold tracking-widest uppercase mt-1">Admin Portal</div>
            </div>
          </div>
          <!-- Navigation -->
          <nav class="p-4 space-y-1.5">
            ${items.map(item => `
              <a href="${item.href}" class="flex items-center space-x-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                activePage === item.key
                  ? 'bg-gradient-to-r from-[#0E839E]/30 to-[#1FB5D6]/10 text-white border border-[#1FB5D6]/40 shadow-lg shadow-[#0E839E]/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
              }">
                <svg class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">${item.icon}</svg>
                <span>${item.name}</span>
              </a>
            `).join('')}
          </nav>
        </div>
        <!-- Footer / Logout -->
        <div class="p-4 border-t border-white/10">
          <button id="admin-logout-btn" class="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-rose-400 hover:text-white hover:bg-rose-500/20 border border-rose-500/20 text-sm font-semibold transition-all duration-200">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    `;
  },

  renderTopbar(activePage) {
    const navItems = [
      { name: 'Dashboard', href: 'dashboard.html', key: 'dashboard' },
      { name: 'Cards', href: 'cards.html', key: 'cards' },
      { name: 'Vouches / Reviews', href: 'testimonials.html', key: 'testimonials' },
      { name: 'Events Showcase', href: 'events.html', key: 'events' },
      { name: 'Site Settings', href: 'settings.html', key: 'settings' },
    ];

    return `
      <header class="md:hidden sticky top-0 z-40 bg-[#070D1B]/95 backdrop-blur-2xl border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <div class="flex items-center space-x-2.5">
          <img src="assets/LOGO_NB.png" alt="Nooblax Breaks" class="h-8 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] drop-shadow-[0_0_8px_rgba(246,208,111,0.2)] flex-shrink-0">
          <div class="min-w-0">
            <span class="font-pixel brand-logo-text brand-text-gradient text-[9px] tracking-wider block leading-tight">NOOBLAX BREAKS</span>
            <span class="text-[8px] text-[#1FB5D6] font-bold uppercase tracking-widest block leading-none mt-0.5">Admin Portal</span>
          </div>
        </div>
        <button id="admin-mobile-toggle" class="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </header>
      <div id="admin-mobile-menu" class="hidden md:hidden bg-[#070D1B] border-b border-white/10 px-4 py-3 space-y-1 shadow-2xl">
        ${navItems.map(item => `
          <a href="${item.href}" class="block px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
            activePage === item.key 
              ? 'bg-[#0E839E]/20 text-[#1FB5D6] border border-[#1FB5D6]/30' 
              : 'text-gray-300 hover:text-white hover:bg-white/5'
          }">${item.name}</a>
        `).join('')}
        <div class="pt-2 border-t border-white/10 mt-2">
          <button id="admin-mobile-logout" class="w-full text-left px-3 py-2 rounded-xl text-sm font-semibold text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-colors">Sign Out</button>
        </div>
      </div>
    `;
  },

  async initPage(activePage) {
    const session = await this.requireAuth();
    if (!session) return null;

    const sidebarContainer = document.getElementById('admin-sidebar-container');
    const topbarContainer = document.getElementById('admin-topbar-container');

    if (sidebarContainer) sidebarContainer.innerHTML = this.renderSidebar(activePage);
    if (topbarContainer) topbarContainer.innerHTML = this.renderTopbar(activePage);

    // Bind logout
    const logoutBtn = document.getElementById('admin-logout-btn');
    if (logoutBtn) logoutBtn.addEventListener('click', () => this.logout());

    const mobileLogout = document.getElementById('admin-mobile-logout');
    if (mobileLogout) mobileLogout.addEventListener('click', () => this.logout());

    // Bind mobile menu toggle
    const toggleBtn = document.getElementById('admin-mobile-toggle');
    const menuEl = document.getElementById('admin-mobile-menu');
    if (toggleBtn && menuEl) {
      toggleBtn.addEventListener('click', () => menuEl.classList.toggle('hidden'));
    }

    return session;
  },

  async uploadImage(file, folder = 'cards') {
    if (!file || !supabaseClient) return null;
    try {
      const ext = file.name.split('.').pop() || 'jpg';
      const fileName = `${folder}/${Date.now()}_${Math.random().toString(36).substring(2, 9)}.${ext}`;
      const { data, error } = await supabaseClient.storage
        .from('card-images')
        .upload(fileName, file, { cacheControl: '3600', upsert: true });

      if (error) throw error;

      const { data: { publicUrl } } = supabaseClient.storage
        .from('card-images')
        .getPublicUrl(fileName);

      return publicUrl;
    } catch (e) {
      console.error('Image upload error:', e);
      this.toast('Upload failed: ' + e.message, 'error');
      return null;
    }
  }
};
