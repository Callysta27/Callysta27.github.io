/**
 * ==========================================================================
 * PORTOFOLIO IT CALLYSTA DETHAN — SCRIPT (JAVASCRIPT MURNI)
 * Menangani interaksi, canvas latar titik data, mockup dinamis, modal dialog,
 * filter proyek, kursor 3D tilt, dan toggle tema monokrom.
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. DATA PROYEK LENGKAP
// --------------------------------------------------------------------------
const PROYEK = [
  {
    id: 'antriless',
    jenis: 'web',
    judul: 'Antriless',
    tahun: '2026',
    url: 'antriless.freehosting.dev',
    ringkas: 'Pemesanan kantin kampus tanpa antre, dengan dashboard untuk tiap kantin.',
    peran: 'Web developer · proyek kelompok',
    masalah: 'Mahasiswa dan dosen kehilangan banyak waktu istirahat untuk mengantre di kantin, sementara pemilik kantin mencatat pesanan secara manual.',
    solusi: 'Website pemesanan dengan menu dari banyak kantin, keranjang, struk ber-QR code, dan pelacakan status pesanan. Setiap pemilik kantin punya dashboard sendiri yang hanya menampilkan pesanan dan pendapatan kantinnya.',
    stats: [
      ['3', 'peran pengguna'],
      ['4', 'tahap status pesanan'],
      ['Docker', 'siap deploy']
    ],
    stack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'Docker'],
    github: 'https://github.com/Callysta27/Antriless',
    live: 'https://antriless.freehosting.dev',
    mock: 'antriless'
  },
  {
    id: 'nyc',
    jenis: 'data',
    judul: 'NYC Yellow Taxi Analysis',
    tahun: '2026',
    url: 'github.com/Callysta27/nyc-yellow-taxi-analysis',
    ringkas: 'Analisis 11 juta+ perjalanan taksi New York untuk menjawab 5 pertanyaan bisnis.',
    peran: 'Data analyst',
    masalah: 'Data perjalanan taksi NYC TLC (Januari–Maret 2026) berukuran besar dan berisi banyak record yang tidak valid.',
    solusi: 'Cleaning dua tahap, membuat 7 fitur baru, lalu EDA dengan 13 visualisasi untuk melihat pola permintaan berdasarkan jam dan lokasi.',
    stats: [
      ['11 jt+', 'baris data'],
      ['94,36%', 'record lolos cleaning'],
      ['7,8×', 'permintaan 18:00 vs 04:00'],
      ['85,84%', 'penjemputan di Manhattan']
    ],
    stack: ['Python', 'Pandas', 'Google Colab'],
    github: 'https://github.com/Callysta27/nyc-yellow-taxi-analysis',
    mock: 'chart'
  },
  {
    id: 'dw',
    jenis: 'data',
    judul: 'Retail Data Warehouse & ETL',
    tahun: '2025',
    url: 'sql-server/retail_dw',
    ringkas: 'Data warehouse yang menyatukan 6 sistem sumber untuk ritel 120+ cabang.',
    peran: 'Data engineer · proyek kuliah',
    masalah: 'Data penjualan ritel tersebar di 6 sistem sumber yang berbeda, sehingga laporan antarcabang sulit dibuat dan sering tidak konsisten.',
    solusi: 'Merancang galaxy schema dengan pendekatan Kimball, lalu membangun pipeline ETL dengan initial dan incremental load (MERGE), SCD Type 0/1/2, dan rekonsiliasi tanpa kehilangan data.',
    stats: [
      ['120+', 'cabang'],
      ['8', 'tabel fakta'],
      ['15', 'tabel dimensi'],
      ['0', 'data hilang']
    ],
    stack: ['SQL Server', 'SSIS', 'Kimball'],
    mock: 'schema'
  },
  {
    id: 'gorent',
    jenis: 'web',
    judul: 'GoRent',
    tahun: '2025',
    url: 'github.com/Callysta27/rental-kendaraan',
    ringkas: 'Aplikasi rental kendaraan dengan penyewaan, invoice, dan panel admin.',
    peran: 'Team lead & developer',
    masalah: 'Proses sewa kendaraan masih dicatat manual sehingga ketersediaan unit dan tagihan sulit dipantau.',
    solusi: 'Memimpin tim membangun aplikasi dengan modul penyewaan, pembuatan invoice otomatis, dan panel admin untuk mengelola armada.',
    stats: [
      ['Team lead', 'peranku'],
      ['3', 'modul utama']
    ],
    stack: ['Java', 'Spring Boot', 'MySQL', 'HTML/JS'],
    github: 'https://github.com/Callysta27/rental-kendaraan',
    mock: 'table'
  },
  {
    id: 'kos',
    jenis: 'data',
    judul: 'Sistem Basis Data Kos',
    tahun: '2025',
    url: 'oracle/kos_db',
    ringkas: 'Basis data relasional untuk penyewa, kamar, dan transaksi sewa.',
    peran: 'Team lead',
    masalah: 'Pemilik kos butuh cara terstruktur untuk mencatat penyewa, kamar, dan pembayaran.',
    solusi: 'Merancang basis data relasional lengkap dengan function PL/SQL, view, sequence, dan query JOIN/subquery untuk laporan dan analisis harga kamar.',
    stats: [
      ['Team lead', 'peranku'],
      ['PL/SQL', 'function & view']
    ],
    stack: ['Oracle', 'PL/SQL'],
    mock: 'sql'
  },
  {
    id: 'kampus',
    jenis: 'web',
    judul: 'Sistem Manajemen Data Kampus',
    tahun: '2025',
    url: 'kampus.local/jadwal',
    ringkas: 'Data mahasiswa, bimbingan, dan jadwal ujian dalam satu aplikasi.',
    peran: 'Fullstack developer',
    masalah: 'Data akademik seperti bimbingan dan jadwal ujian tersebar di banyak dokumen.',
    solusi: 'Aplikasi fullstack yang menyatukan data mahasiswa, bimbingan, dan jadwal ujian, dilengkapi tabel reporting.',
    stats: [
      ['3', 'modul data']
    ],
    stack: ['Fullstack', 'RDBMS'],
    mock: 'calendar'
  },
  {
    id: 'money',
    jenis: 'web',
    judul: 'Money Changer',
    tahun: '2024',
    url: 'terminal — money-changer',
    ringkas: 'Aplikasi penukaran mata uang berbasis terminal dengan akses per role.',
    peran: 'Team lead',
    masalah: 'Simulasi layanan penukaran uang yang membedakan hak akses admin dan kasir.',
    solusi: 'Aplikasi Java berbasis terminal dengan role-based access, konversi kurs, dan pencatatan transaksi.',
    stats: [
      ['Team lead', 'peranku']
    ],
    stack: ['Java'],
    mock: 'terminal'
  },
  {
    id: 'toko',
    jenis: 'web',
    judul: 'Toko Elektronik',
    tahun: '2024',
    url: 'github.com/Callysta27/Toko-Elektronik',
    ringkas: 'Manajemen data barang elektronik dengan OOP dan File I/O.',
    peran: 'Developer',
    masalah: 'Latihan membangun sistem inventaris yang rapi dengan prinsip OOP.',
    solusi: 'Aplikasi Java untuk mengelola data barang elektronik dengan class yang terstruktur dan penyimpanan berbasis file.',
    stats: [
      ['OOP', 'konsep utama']
    ],
    stack: ['Java', 'OOP', 'File I/O'],
    github: 'https://github.com/Callysta27/Toko-Elektronik',
    mock: 'list'
  }
];

const TEKNOLOGI = [
  'Python', 'Pandas', 'SQL', 'SQL Server', 'SSIS', 'Oracle PL/SQL',
  'MySQL', 'Java', 'Spring Boot', 'PHP', 'JavaScript', 'Bootstrap',
  'Docker', 'Git', 'Figma', 'Excel'
];

// --------------------------------------------------------------------------
// 2. MOCKUP LAYAR VEKTOR (HTML & SVG MURNI)
// --------------------------------------------------------------------------
function mockup(jenis) {
  const bar = (w, ink, h) => `<div class="m-bar${ink ? ' ink' : ''}" style="width:${w}%${h ? `;height:${h}px` : ''}"></div>`;
  switch (jenis) {
    case 'antriless':
      return `<div class="m-pad">
        <div class="m-row">${bar(18, true, 10)}<div style="flex:1"></div>${bar(30)}${bar(8, true, 14)}</div>
        <div class="m-block ink" style="height:30%;padding:5%;display:flex;flex-direction:column;justify-content:center;gap:12%">
          <div class="m-bar" style="width:22%;background:color-mix(in srgb,var(--bg) 45%,transparent)"></div>
          <div class="m-bar" style="width:46%;height:12px;background:var(--bg)"></div>
        </div>
        <div class="m-row" style="flex:1;align-items:stretch">
          ${[1, 2, 3, 4].map(() => `<div class="m-card"><div class="ph"></div>${bar(70, true)}${bar(40)}</div>`).join('')}
        </div>
      </div>`;
    case 'chart': {
      const y = [62, 70, 76, 80, 78, 64, 48, 40, 38, 36, 34, 32, 30, 28, 24, 18, 12, 6, 4, 10, 20, 30, 42, 52];
      const pts = y.map((v, i) => `${10 + i * 13},${v + 14}`).join(' ');
      return `<div class="m-pad" style="gap:6%">
        <div class="m-row">${bar(38, true, 10)}<div style="flex:1"></div>${bar(16)}</div>
        <svg viewBox="0 0 320 110" style="flex:1;width:100%" preserveAspectRatio="none" aria-hidden="true">
          ${[30, 60, 90].map(g => `<line x1="0" x2="320" y1="${g}" y2="${g}" stroke="var(--line)" stroke-width="1"/>`).join('')}
          <polyline points="${pts}" fill="none" stroke="var(--ink)" stroke-width="2.5" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
          <circle cx="${10 + 18 * 13}" cy="${4 + 14}" r="4" fill="var(--ink)"/>
          <text x="${10 + 18 * 13 - 6}" y="12" font-size="10" text-anchor="end" fill="var(--ink-2)" font-family="system-ui">18:00</text>
        </svg>
        <div class="m-row">${bar(10)}${bar(10)}${bar(10)}${bar(10)}${bar(10)}</div>
      </div>`;
    }
    case 'schema':
      return `<svg viewBox="0 0 320 200" style="position:absolute;inset:0;width:100%;height:100%" aria-hidden="true">
        ${[[60, 40], [260, 40], [40, 160], [280, 160], [160, 22], [160, 180]].map(([x, yy]) => `<line x1="160" y1="100" x2="${x}" y2="${yy}" stroke="var(--ink-3)" stroke-width="1.2"/>`).join('')}
        <rect x="120" y="78" width="80" height="44" rx="8" fill="var(--ink)"/>
        <text x="160" y="104" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bg)" font-family="system-ui">fact_sales</text>
        ${[['dim_store', 60, 40], ['dim_product', 260, 40], ['dim_date', 40, 160], ['dim_customer', 280, 160], ['dim_promo', 160, 22], ['dim_channel', 160, 180]].map(([t, x, yy]) =>
          `<rect x="${x - 40}" y="${yy - 13}" width="80" height="26" rx="6" fill="var(--bg)" stroke="var(--ink)" stroke-width="1.2"/>
           <text x="${x}" y="${yy + 4}" text-anchor="middle" font-size="10" fill="var(--ink)" font-family="system-ui">${t}</text>`).join('')}
      </svg>`;
    case 'table':
      return `<div class="m-pad">
        <div class="m-row">${bar(24, true, 10)}<div style="flex:1"></div>${bar(14, true, 14)}</div>
        <div class="m-block" style="flex:1;padding:4% 5%;display:flex;flex-direction:column;justify-content:space-around">
          ${[1, 2, 3, 4, 5].map((_, i) => `<div class="m-row">${bar(12, i === 0)}${bar(28, i === 0)}${bar(16, i === 0)}<div style="flex:1"></div>${bar(14, i === 0)}</div>`).join('')}
        </div>
      </div>`;
    case 'sql':
      return `<div class="m-pad m-term" style="justify-content:center"><div class="m-mono"><b>CREATE VIEW</b> v_kamar_kosong <b>AS</b>
  <b>SELECT</b> k.no_kamar, k.harga
  <b>FROM</b> kamar k
  <b>WHERE NOT EXISTS</b> (
    <b>SELECT</b> 1 <b>FROM</b> sewa s
    <b>WHERE</b> s.no_kamar = k.no_kamar
      <b>AND</b> s.status = 'aktif'
  );</div></div>`;
    case 'calendar':
      return `<div class="m-pad">
        <div class="m-row">${bar(30, true, 10)}<div style="flex:1"></div>${bar(10)}${bar(10)}</div>
        <div style="flex:1;display:grid;grid-template-columns:repeat(7,1fr);gap:4px">
          ${Array.from({ length: 28 }, (_, i) => `<div style="border-radius:5px;background:${[3, 9, 10, 17, 24].includes(i) ? 'var(--ink)' : 'var(--surface)'}"></div>`).join('')}
        </div>
      </div>`;
    case 'terminal':
      return `<div class="m-pad m-term" style="justify-content:center"><div class="m-mono">$ java MoneyChanger
<b>Login sebagai:</b> kasir
[1] Tukar mata uang
[2] Riwayat transaksi
> 1
USD → IDR : 100
<b>Hasil      : Rp 1.612.000</b></div></div>`;
    case 'flow':
      return `<svg viewBox="0 0 320 200" style="position:absolute;inset:0;width:100%;height:100%" aria-hidden="true">
        <defs><marker id="panah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 10 5 0 10z" fill="var(--ink)"/></marker></defs>
        <line x1="0" y1="100" x2="320" y2="100" stroke="var(--line)" stroke-width="1.5"/>
        <text x="10" y="22" font-size="10" fill="var(--ink-3)" font-family="system-ui">Pembeli</text>
        <text x="10" y="118" font-size="10" fill="var(--ink-3)" font-family="system-ui">Kantin</text>
        <circle cx="40" cy="60" r="9" fill="var(--ink)"/>
        ${[['Pilih menu', 105, 60], ['Checkout', 195, 60], ['Ambil', 275, 60], ['Diproses', 195, 145], ['Siap', 275, 145]].map(([t, x, yy]) =>
          `<rect x="${x - 34}" y="${yy - 14}" width="68" height="28" rx="8" fill="var(--bg)" stroke="var(--ink)" stroke-width="1.3"/>
           <text x="${x}" y="${yy + 4}" text-anchor="middle" font-size="10" fill="var(--ink)" font-family="system-ui">${t}</text>`).join('')}
        <line x1="49" y1="60" x2="69" y2="60" stroke="var(--ink)" stroke-width="1.3" marker-end="url(#panah)"/>
        <line x1="139" y1="60" x2="159" y2="60" stroke="var(--ink)" stroke-width="1.3" marker-end="url(#panah)"/>
        <line x1="195" y1="74" x2="195" y2="129" stroke="var(--ink)" stroke-width="1.3" marker-end="url(#panah)"/>
        <line x1="229" y1="145" x2="239" y2="145" stroke="var(--ink)" stroke-width="1.3" marker-end="url(#panah)"/>
        <line x1="275" y1="131" x2="275" y2="76" stroke="var(--ink)" stroke-width="1.3" marker-end="url(#panah)"/>
      </svg>`;
    case 'list':
      return `<div class="m-pad">
        <div class="m-row">${bar(26, true, 10)}<div style="flex:1"></div>${bar(18)}</div>
        ${[1, 2, 3, 4].map(() => `<div class="m-row" style="flex:1"><div class="m-block" style="width:16%;height:100%"></div><div style="flex:1;display:flex;flex-direction:column;gap:18%">${bar(50, true)}${bar(30)}</div>${bar(12)}</div>`).join('')}
      </div>`;
    default:
      return '';
  }
}

function browser(p) {
  return `<div class="browser">
    <div class="browser-bar"><div class="dots" aria-hidden="true"><i></i><i></i><i></i></div><div class="url">${p.url}</div></div>
    <div class="screen" aria-hidden="true">${mockup(p.mock)}</div>
  </div>`;
}

// --------------------------------------------------------------------------
// 3. INISIALISASI HALAMAN SAAT DOM SIAP
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const kurangiGerak = matchMedia('(prefers-reduced-motion: reduce)');
  const kursorHalus = matchMedia('(hover: hover) and (pointer: fine)');

  // -----------------------------------------------------------
  // A. RENDER GRID KARYA & FILTER
  // -----------------------------------------------------------
  const grid = document.getElementById('workGrid');
  const workCount = document.getElementById('workCount');

  if (grid) {
    grid.innerHTML = PROYEK.map((p, i) => `
      <li>
        <button class="work-item" type="button" data-id="${p.id}" data-jenis="${p.jenis}" aria-haspopup="dialog">
          <span class="w-no">${String(i + 1).padStart(2, '0')}</span>
          <span class="w-thumb">${browser(p)}</span>
          <span class="w-main">
            <span class="w-title">${p.judul}</span>
            <span class="w-desc">${p.ringkas}</span>
          </span>
          <span class="w-side"><b>${p.stack.slice(0, 2).join(', ')}</b>${p.jenis === 'data' ? 'Data' : 'Web'}, ${p.tahun}</span>
          <span class="w-arrow" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"/></svg>
          </span>
        </button>
      </li>`).join('');

    function hitungProyek() {
      if (!workCount) return;
      const n = grid.querySelectorAll('li:not([hidden])').length;
      workCount.textContent = `${n} proyek ditampilkan. Klik salah satu buat lihat ceritanya.`;
    }
    hitungProyek();

    // Event listener filter kategori
    document.querySelectorAll('[data-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        const f = btn.dataset.filter;
        document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
        grid.querySelectorAll('.work-item').forEach(item => {
          item.closest('li').hidden = f !== 'all' && item.dataset.jenis !== f;
        });
        hitungProyek();
      });
    });
  }

  // -----------------------------------------------------------
  // B. DIALOG MODAL STUDI KASUS PROYEK
  // -----------------------------------------------------------
  const dlg = document.getElementById('projectDialog');
  const dlgClose = document.getElementById('dlgClose');
  let terakhirDibuka = null;

  if (grid && dlg) {
    grid.addEventListener('click', e => {
      const item = e.target.closest('.work-item');
      if (!item) return;
      const p = PROYEK.find(x => x.id === item.dataset.id);
      if (!p) return;
      terakhirDibuka = item;

      document.getElementById('dlgTitle').textContent = p.judul;
      document.getElementById('dlgSub').textContent = `${p.peran} · ${p.tahun}`;
      document.getElementById('dlgBody').innerHTML = `
        ${browser(p)}
        <div><h3>Masalahnya</h3><p>${p.masalah}</p></div>
        <div><h3>Yang aku kerjain</h3><p>${p.solusi}</p></div>
        <div><h3>Hasilnya</h3><div class="stats">${p.stats.map(([b, s]) => `<div class="stat"><b>${b}</b><span>${s}</span></div>`).join('')}</div></div>
        <div><h3>Teknologi</h3><div class="stack">${p.stack.map(s => `<span>${s}</span>`).join('')}</div></div>
        ${(p.github || p.live) ? `<div class="dlg-actions">
          ${p.live ? `<a class="btn" href="${p.live}" target="_blank" rel="noopener">Buka website ↗</a>` : ''}
          ${p.github ? `<a class="btn ghost" href="${p.github}" target="_blank" rel="noopener">Lihat kode di GitHub ↗</a>` : ''}
        </div>` : ''}`;
      dlg.showModal();
    });

    if (dlgClose) dlgClose.addEventListener('click', () => dlg.close());
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('close', () => terakhirDibuka?.focus());
  }

  // -----------------------------------------------------------
  // C. MARQUEE TEKNOLOGI
  // -----------------------------------------------------------
  const marquee = document.getElementById('marquee');
  if (marquee) {
    const daftar = TEKNOLOGI.map(t => `<span>${t}</span>`).join('');
    marquee.innerHTML = daftar + daftar.replace(/<span>/g, '<span aria-hidden="true">');
  }

  // -----------------------------------------------------------
  // D. NAVBAR SCROLL EFFECT & LINK AKTIF
  // -----------------------------------------------------------
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const links = [...document.querySelectorAll('.nav-links a')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['work', 'skills', 'about', 'experience', 'contact'].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }

  // -----------------------------------------------------------
  // E. MENU HP (MOBILE MENU)
  // -----------------------------------------------------------
  const menu = document.getElementById('mobileMenu');
  const menuOpen = document.getElementById('menuOpen');
  const menuClose = document.getElementById('menuClose');

  if (menu && menuOpen) {
    const tutupMenu = () => {
      menu.classList.remove('open');
      menuOpen.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    menuOpen.addEventListener('click', () => {
      menu.classList.add('open');
      menuOpen.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      if (menuClose) menuClose.focus();
    });

    if (menuClose) menuClose.addEventListener('click', tutupMenu);
    menu.querySelectorAll('[data-close]').forEach(a => a.addEventListener('click', tutupMenu));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        tutupMenu();
        menuOpen.focus();
      }
    });
  }

  // -----------------------------------------------------------
  // F. TEMA TERANG / GELAP
  // -----------------------------------------------------------
  const KUNCI_TEMA = 'callysta_tema';
  try {
    const t = localStorage.getItem(KUNCI_TEMA);
    if (t) document.documentElement.dataset.theme = t;
  } catch (e) {}

  document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const sekarangGelap = document.documentElement.dataset.theme !== 'light';
      const baru = sekarangGelap ? 'light' : 'dark';
      document.documentElement.dataset.theme = baru;
      try { localStorage.setItem(KUNCI_TEMA, baru); } catch (e) {}
      if (window.latarTitik) {
        window.latarTitik.ambilWarna();
        if (kurangiGerak.matches) window.latarTitik.gambar();
      }
    });
  });

  // -----------------------------------------------------------
  // G. SALIN EMAIL & TOAST NOTIFIKASI
  // -----------------------------------------------------------
  const toast = document.getElementById('toast');
  const copyMailBtn = document.getElementById('copyMail');

  function tampilToast(teks) {
    if (!toast) return;
    toast.textContent = teks;
    toast.classList.add('show');
    clearTimeout(tampilToast.t);
    tampilToast.t = setTimeout(() => toast.classList.remove('show'), 2000);
  }

  if (copyMailBtn) {
    copyMailBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('callystadethhan123@gmail.com');
        tampilToast('Email tersalin ✓');
      } catch (e) {
        tampilToast('Gagal menyalin. Silakan salin manual.');
      }
    });
  }

  // -----------------------------------------------------------
  // H. HARDWARE-ACCELERATED PROGRESS BAR SCROLL (RAF)
  // -----------------------------------------------------------
  const progress = document.getElementById('progress');
  let pageProgressRafId = null;
  let targetPageProgress = 0;
  let currentPageProgress = 0;

  function renderPageProgress() {
    pageProgressRafId = null;
    if (progress) {
      currentPageProgress += (targetPageProgress - currentPageProgress) * 0.28;
      if (Math.abs(targetPageProgress - currentPageProgress) < 0.0005) {
        currentPageProgress = targetPageProgress;
      }
      progress.style.transform = `scaleX(${currentPageProgress.toFixed(4)})`;

      if (currentPageProgress !== targetPageProgress) {
        pageProgressRafId = requestAnimationFrame(renderPageProgress);
      }
    }
  }

  function aturProgress() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    targetPageProgress = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
    if (!pageProgressRafId) {
      pageProgressRafId = requestAnimationFrame(renderPageProgress);
    }
  }

  window.addEventListener('scroll', aturProgress, { passive: true });
  window.addEventListener('resize', aturProgress);
  aturProgress();

  // -----------------------------------------------------------
  // I. SCROLL REVEAL ANIMASI
  // -----------------------------------------------------------
  if (!kurangiGerak.matches) {
    const target = document.querySelectorAll('.h2, .skill-card, .work-item, .quote blockquote, .id-stack, .contact h2');
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });

    target.forEach(el => {
      el.classList.add('reveal');
      if (el.matches('.skill-card')) {
        el.style.transitionDelay = ([...el.parentNode.children].indexOf(el) % 3) * 90 + 'ms';
      }
      if (el.matches('.work-item')) {
        el.style.transitionDelay = ([...el.parentNode.children].indexOf(el) % 2) * 110 + 'ms';
      }
      io.observe(el);
    });
  }

  // -----------------------------------------------------------
  // J. ANIMASI TIMELINE (EXPERIENCE & EDUCATION) VIA RAF & INTERSECTION OBSERVER
  // -----------------------------------------------------------
  const timelineSection = document.getElementById('experience');
  const timelineContainer = document.getElementById('timelineContainer');
  const timelineLineFill = document.getElementById('timelineLineFill');
  const timelineItems = document.querySelectorAll('.timeline-item');

  if (timelineSection && timelineLineFill && timelineItems.length > 0) {
    if (kurangiGerak.matches) {
      // Respect prefers-reduced-motion: tampil langsung tanpa delay/animasi
      timelineLineFill.classList.add('drawn');
      timelineItems.forEach(item => item.classList.add('in-view'));
    } else {
      let timelineRafId = null;
      let targetTimelineProgress = 0;
      let currentTimelineProgress = 0;
      let isTimelineVisible = false;

      function renderTimeline() {
        timelineRafId = null;
        if (!timelineContainer || !timelineLineFill) return;

        const rect = timelineContainer.getBoundingClientRect();
        const windowH = window.innerHeight;

        // Perhitungan kompleks posisi scroll timeline
        const startOffset = windowH * 0.75;
        const endOffset = windowH * 0.35;
        const totalDistance = rect.height + (startOffset - endOffset);
        const scrolled = startOffset - rect.top;

        targetTimelineProgress = Math.min(1, Math.max(0, scrolled / totalDistance));

        // Hardware-accelerated interpolation (lerp) via requestAnimationFrame
        currentTimelineProgress += (targetTimelineProgress - currentTimelineProgress) * 0.22;
        if (Math.abs(targetTimelineProgress - currentTimelineProgress) < 0.001) {
          currentTimelineProgress = targetTimelineProgress;
        }

        timelineLineFill.style.transform = `scaleY(${currentTimelineProgress.toFixed(4)})`;

        // Aktifkan titik milestone saat garis timeline mencapai posisinya
        timelineItems.forEach(item => {
          const itemRect = item.getBoundingClientRect();
          if (itemRect.top <= windowH * 0.72) {
            item.classList.add('in-view');
          }
        });

        if (isTimelineVisible && Math.abs(targetTimelineProgress - currentTimelineProgress) > 0.0005) {
          timelineRafId = requestAnimationFrame(renderTimeline);
        }
      }

      function queueTimelineUpdate() {
        if (!timelineRafId && isTimelineVisible) {
          timelineRafId = requestAnimationFrame(renderTimeline);
        }
      }

      // Observer untuk mengaktifkan RAF hanya saat section berada dalam viewport
      const timelineObserver = new IntersectionObserver(([entry]) => {
        isTimelineVisible = entry.isIntersecting;
        if (isTimelineVisible) {
          queueTimelineUpdate();
        } else if (timelineRafId) {
          cancelAnimationFrame(timelineRafId);
          timelineRafId = null;
        }
      }, {
        threshold: 0,
        rootMargin: '120px 0px 120px 0px'
      });

      timelineObserver.observe(timelineSection);
      window.addEventListener('scroll', queueTimelineUpdate, { passive: true });
      window.addEventListener('resize', queueTimelineUpdate);

      // IntersectionObserver sekunder untuk menjamin aktivasi titik milestone saat discroll
      const milestoneObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      });

      timelineItems.forEach((item, idx) => {
        item.style.transitionDelay = `${idx * 90}ms`;
        milestoneObserver.observe(item);
      });
    }
  }

  // -----------------------------------------------------------
  // K. ANGKA IPK MENGHITUNG NAIK (COUNT UP)
  // -----------------------------------------------------------
  const ipk = document.querySelector('.gpa');
  if (ipk && !kurangiGerak.matches) {
    new IntersectionObserver(([en], obs) => {
      if (!en.isIntersecting) return;
      obs.disconnect();
      const mulaiT = performance.now();
      (function hitung(now) {
        const p = Math.min((now - mulaiT) / 1400, 1);
        const nilai = 3.82 * (1 - Math.pow(1 - p, 3));
        ipk.textContent = nilai.toFixed(2).replace('.', ',');
        if (p < 1) requestAnimationFrame(hitung);
      })(mulaiT);
    }, { threshold: 0.5 }).observe(ipk);
  }

  // -----------------------------------------------------------
  // L. INTERAKSI KURSOR HALUS: 3D PEEK PREVIEW & MAGNETIC BUTTONS
  // -----------------------------------------------------------
  if (kursorHalus.matches && !kurangiGerak.matches && grid) {
    const peek = document.getElementById('peek');
    if (peek) {
      let px = 0, py = 0, tx = 0, ty = 0, aktif = false, rafPeek = 0, idAktif = '';

      function animPeek() {
        const nx = px + (tx - px) * 0.15;
        const vx = nx - px;
        px = nx;
        py += (ty - py) * 0.15;
        const miring = Math.max(-10, Math.min(10, vx * 0.5));
        peek.style.transform = `translate3d(${px}px, ${py}px, 0) translate(-50%, -50%) rotate(${miring.toFixed(2)}deg) scale(${aktif ? 1 : 0.85})`;
        rafPeek = requestAnimationFrame(animPeek);
      }

      function targetPeek(e) {
        const lebar = peek.offsetWidth || 340;
        tx = Math.min(e.clientX + lebar * 0.65, window.innerWidth - lebar / 2 - 16);
        ty = Math.max(140, Math.min(e.clientY, window.innerHeight - 140));
      }

      grid.addEventListener('pointerenter', e => {
        targetPeek(e);
        px = tx;
        py = ty;
        aktif = true;
        peek.classList.add('visible');
        cancelAnimationFrame(rafPeek);
        animPeek();
      });

      grid.addEventListener('pointermove', e => {
        targetPeek(e);
        const it = e.target.closest('.work-item');
        if (it && it.dataset.id !== idAktif) {
          idAktif = it.dataset.id;
          const p = PROYEK.find(x => x.id === idAktif);
          if (p) {
            peek.innerHTML = browser(p);
            const isi = peek.querySelector('.screen > *');
            if (isi) isi.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 220 });
          }
        }
      });

      grid.addEventListener('pointerleave', () => {
        aktif = false;
        peek.classList.remove('visible');
        setTimeout(() => { if (!aktif) cancelAnimationFrame(rafPeek); }, 300);
      });

      grid.addEventListener('click', () => {
        aktif = false;
        peek.classList.remove('visible');
      });
    }

    // Tombol magnetis (mengejar kursor sedikit pada hover)
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('pointermove', e => {
        const r = btn.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        btn.style.transform = `translate(${dx * 0.18}px, ${dy * 0.3}px)`;
      });
      btn.addEventListener('pointerleave', () => {
        btn.style.transform = '';
      });
    });
  }

  // -----------------------------------------------------------
  // M. LATAR CANVAS BERGERAK (ORGANIC WAVE DOT GRID DENGAN RIAK KLIK)
  // -----------------------------------------------------------
  const canvas = document.getElementById('bg');
  if (canvas) {
    window.latarTitik = (() => {
      const ctx = canvas.getContext('2d');
      let w = 0, h = 0, jarak = 32, t = 0, raf = 0, warna = '255,255,255';
      const kursor = { x: -9999, y: -9999, tx: -9999, ty: -9999 };
      const riak = [];

      function ambilWarna() {
        const v = getComputedStyle(document.documentElement).getPropertyValue('--ink').trim().toLowerCase();
        warna = (v === '#ffffff' || v === '#fff') ? '255,255,255' : '0,0,0';
      }

      function ukur() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        jarak = w < 700 ? 26 : 32;
      }

      function gambar() {
        ctx.clearRect(0, 0, w, h);
        kursor.x += (kursor.tx - kursor.x) * 0.14;
        kursor.y += (kursor.ty - kursor.y) * 0.14;

        // Semakin jauh di-scroll, latar semakin halus agar keterbacaan teks maksimal
        ctx.globalAlpha = Math.max(0.4, 1 - window.scrollY / (h * 1.2));
        const geser = (window.scrollY * 0.18) % jarak; // Parallax

        for (let y = -jarak; y < h + jarak; y += jarak) {
          for (let x = jarak / 2; x < w + jarak; x += jarak) {
            let px = x, py = y - geser;
            const gel = Math.sin(px * 0.011 + t) * Math.cos(py * 0.013 - t * 0.7);
            let r = 0.9 + (gel + 1) * 0.55;
            let a = 0.09 + (gel + 1) * 0.06;

            const dx = px - kursor.x, dy = py - kursor.y;
            const d = Math.hypot(dx, dy);
            if (d < 170 && d > 0) {
              const f = 1 - d / 170;
              px += (dx / d) * f * 20;
              py += (dy / d) * f * 20;
              r += f * 2.4;
              a += f * 0.45;
            }
            for (const rp of riak) {
              const jd = Math.abs(Math.hypot(px - rp.x, py - rp.y) - rp.r);
              if (jd < 46) {
                const f = (1 - jd / 46) * rp.hidup;
                r += f * 2.6;
                a += f * 0.55;
              }
            }
            ctx.fillStyle = `rgba(${warna},${Math.min(a, 0.85)})`;
            ctx.beginPath();
            ctx.arc(px, py, r, 0, 6.2832);
            ctx.fill();
          }
        }

        for (let i = riak.length - 1; i >= 0; i--) {
          riak[i].r += 7;
          riak[i].hidup -= 0.014;
          if (riak[i].hidup <= 0) riak.splice(i, 1);
        }
        t += 0.012;
      }

      function loop() {
        gambar();
        raf = requestAnimationFrame(loop);
      }

      function mulai() {
        cancelAnimationFrame(raf);
        if (kurangiGerak.matches || document.hidden) {
          gambar();
          return;
        }
        loop();
      }

      ambilWarna();
      ukur();
      mulai();

      window.addEventListener('resize', () => {
        ukur();
        if (kurangiGerak.matches) gambar();
      });

      window.addEventListener('pointermove', e => {
        if (e.pointerType !== 'mouse' || kurangiGerak.matches) return;
        kursor.tx = e.clientX;
        kursor.ty = e.clientY;
        if (kursor.x < -1000) {
          kursor.x = e.clientX;
          kursor.y = e.clientY;
        }
      }, { passive: true });

      document.addEventListener('pointerleave', () => {
        kursor.tx = kursor.ty = -9999;
      });

      window.addEventListener('pointerdown', e => {
        if (kurangiGerak.matches || e.target.closest('a, button, dialog, input')) return;
        riak.push({ x: e.clientX, y: e.clientY, r: 0, hidup: 1 });
      });

      document.addEventListener('visibilitychange', mulai);
      kurangiGerak.addEventListener('change', mulai);
      matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        ambilWarna();
        if (kurangiGerak.matches) gambar();
      });

      return { ambilWarna, gambar };
    })();
  }
});
