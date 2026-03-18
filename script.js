/* ============================================================
     PRODUCTS DATABASE
  ============================================================ */
  const productos = [
    {
      id: 1,
      nombre: "Cuadernillo Matemática 1°",
      descripcion: "Ejercicios de sumas, restas, conteo y figuras geométricas para primer grado. Actividades lúdicas con ilustraciones coloridas para estimular el aprendizaje.",
      materia: "Matemática", grado: "1° grado", paginas: 48, precio: 1200,
      rating: 4.8, reviews: 124,
      badges: ["nuevo"],
      imagen: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=450&fit=crop",
      preview: ["https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=560&fit=crop"],
      pdf: "assets/pdf/matematica-1ro.pdf", mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=demo-mat-1"
    },
    {
      id: 2,
      nombre: "Lectura y Escritura 2°",
      descripcion: "Fichas de trabajo para comprensión lectora y escritura en segundo grado. Textos cortos, preguntas y ejercicios de caligrafía.",
      materia: "Lengua", grado: "2° grado", paginas: 60, precio: 1500,
      rating: 4.9, reviews: 218,
      badges: ["hot"],
      imagen: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=450&fit=crop",
      preview: ["https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=560&fit=crop"],
      pdf: "assets/pdf/lengua-2do.pdf", mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=demo-len-2"
    },
    {
      id: 3,
      nombre: "Ciencias Naturales 3°",
      descripcion: "Cuadernillo de ciencias con experimentos simples, ciclos naturales, animales y plantas.",
      materia: "Ciencias", grado: "3° grado", paginas: 52, precio: 1350,
      rating: 4.7, reviews: 89,
      badges: ["nuevo"],
      imagen: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=450&fit=crop",
      preview: ["https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=560&fit=crop"],
      pdf: "assets/pdf/ciencias-3ro.pdf", mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=demo-cien-3"
    },
    {
      id: 4,
      nombre: "Historia Argentina 4°",
      descripcion: "Líneas de tiempo, mapas y actividades de comprensión histórica sobre la independencia argentina.",
      materia: "Sociales", grado: "4° grado", paginas: 64, precio: 1600,
      rating: 4.6, reviews: 76,
      badges: [],
      imagen: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=450&fit=crop",
      preview: ["https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=400&h=560&fit=crop"],
      pdf: "assets/pdf/historia-4to.pdf", mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=demo-hist-4"
    },
    {
      id: 5,
      nombre: "Inglés Básico 5°",
      descripcion: "Vocabulario, gramática básica, diálogos y actividades para introducir el idioma de manera lúdica.",
      materia: "Lengua", grado: "5° grado", paginas: 56, precio: 1700,
      rating: 4.9, reviews: 195,
      badges: ["hot"],
      imagen: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=450&fit=crop",
      preview: ["https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1542435503-ec7b0f0afe97?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?w=400&h=560&fit=crop"],
      pdf: "assets/pdf/ingles-5to.pdf", mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=demo-eng-5"
    },
    {
      id: 6,
      nombre: "Geometría 6°",
      descripcion: "Áreas, perímetros, cuerpos geométricos y ángulos. Ejercicios progresivos con soluciones incluidas.",
      materia: "Matemática", grado: "6° grado", paginas: 72, precio: 1900,
      rating: 4.8, reviews: 143,
      badges: [],
      imagen: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=450&fit=crop",
      preview: ["https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=560&fit=crop"],
      pdf: "assets/pdf/geometria-6to.pdf", mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=demo-geo-6"
    },
    {
      id: 7,
      nombre: "Coloreo y Aprendo — Inicial",
      descripcion: "Fichas de coloreo educativo para nivel inicial. Letras, números, animales y formas. Estimula la creatividad.",
      materia: "Arte", grado: "Inicial", paginas: 30, precio: 0,
      rating: 4.7, reviews: 302,
      badges: ["gratis"],
      imagen: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=600&h=450&fit=crop",
      preview: ["https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=400&h=560&fit=crop"],
      pdf: "assets/pdf/coloreo-inicial.pdf", mercadopago: ""
    },
    {
      id: 8,
      nombre: "Abecedario Divertido — Inicial",
      descripcion: "Aprende el abecedario con ilustraciones coloridas, actividades de unión y trazado. Ideal 4–6 años.",
      materia: "Lengua", grado: "Inicial", paginas: 26, precio: 0,
      rating: 4.9, reviews: 418,
      badges: ["gratis", "hot"],
      imagen: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=450&fit=crop",
      preview: ["https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=560&fit=crop"],
      pdf: "assets/pdf/abecedario-inicial.pdf", mercadopago: ""
    },
    {
      id: 9,
      nombre: "Álgebra Introductoria 1° Sec.",
      descripcion: "Variables, ecuaciones simples, inecuaciones y funciones. Ejercicios graduados con ejemplos resueltos.",
      materia: "Matemática", grado: "1° secundaria", paginas: 88, precio: 2400,
      rating: 4.8, reviews: 67,
      badges: ["nuevo"],
      imagen: "https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=600&h=450&fit=crop",
      preview: ["https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=560&fit=crop"],
      pdf: "assets/pdf/algebra-1sec.pdf", mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=demo-alg-sec1"
    },
    {
      id: 10,
      nombre: "Física y Química 2° Sec.",
      descripcion: "Experimentos, fórmulas, tabla periódica y ejercicios de aplicación para segundo año de secundaria.",
      materia: "Ciencias", grado: "2° secundaria", paginas: 96, precio: 2700,
      rating: 4.7, reviews: 54,
      badges: [],
      imagen: "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?w=600&h=450&fit=crop",
      preview: ["https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=560&fit=crop"],
      pdf: "assets/pdf/fisicaquimica-2sec.pdf", mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=demo-fq-sec2"
    },
    {
      id: 11,
      nombre: "Geografía Mundial 3° Sec.",
      descripcion: "Atlas didáctico con mapas físicos y políticos, climas, relieves y actividades de comprensión.",
      materia: "Sociales", grado: "3° secundaria", paginas: 76, precio: 2200,
      rating: 4.6, reviews: 38,
      badges: ["nuevo"],
      imagen: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=600&h=450&fit=crop",
      preview: ["https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=400&h=560&fit=crop"],
      pdf: "assets/pdf/geografia-3sec.pdf", mercadopago: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=demo-geo-sec3"
    },
    {
      id: 12,
      nombre: "Arte y Expresión — Taller",
      descripcion: "Técnicas artísticas: dibujo, collage, pintura y manualidades. Proyectos step-by-step para todos los niveles.",
      materia: "Arte", grado: "Todos los grados", paginas: 40, precio: 0,
      rating: 4.8, reviews: 261,
      badges: ["gratis"],
      imagen: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=450&fit=crop",
      preview: ["https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=560&fit=crop","https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=400&h=560&fit=crop"],
      pdf: "assets/pdf/arte-taller.pdf", mercadopago: ""
    }
  ];

  /* ============================================================
     HELPERS
  ============================================================ */
  function stars(rating) {
    const full = Math.floor(rating);
    const half = rating - full >= .5 ? 1 : 0;
    const empty = 5 - full - half;
    return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
  }

  function formatPrice(precio) {
    if (precio === 0) return '<span class="card-price free">GRATIS</span>';
    const [int, dec] = precio.toLocaleString('es-AR', {minimumFractionDigits: 2}).split(',');
    return `<span class="card-price">$ ${int}<sup class="card-price-cents">${dec || '00'}</sup></span>`;
  }

  function badgeHtml(badges) {
    const map = {
      nuevo: '<span class="badge badge-nuevo">Nuevo</span>',
      gratis: '<span class="badge badge-gratis">Gratis</span>',
      hot: '<span class="badge badge-hot">Más vendido</span>',
      sale: '<span class="badge badge-sale">Oferta</span>'
    };
    return (badges||[]).map(b => map[b]||'').join('');
  }

  /* ============================================================
     CARD RENDER
  ============================================================ */
  function createCard(p) {
    const isFree = p.precio === 0;
    return `
      <article class="product-card">
        <div class="card-badge-row">${badgeHtml(p.badges)}</div>
        <a href="producto.html?id=${p.id}">
          <div class="card-img-wrap">
            <img src="${p.imagen}" alt="${p.nombre}" loading="lazy"
              onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:2.5rem;color:#ccc'>📄</div>'">
          </div>
        </a>
        <div class="card-body">
          <a href="producto.html?id=${p.id}"><h3 class="card-title">${p.nombre}</h3></a>
          <div class="card-rating">
            <span class="stars">${stars(p.rating)}</span>
            <span class="rating-count">(${p.reviews})</span>
          </div>
          <div class="card-tags">
            <span class="card-tag">${p.materia}</span>
            <span class="card-tag">${p.grado}</span>
            <span class="card-tag">${p.paginas} págs.</span>
          </div>
          <div class="card-price-block">
            ${formatPrice(p.precio)}
            ${!isFree ? `<div class="card-installment">en 3 cuotas sin interés</div>` : ''}
            <div class="card-free-shipping">
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
              Descarga inmediata
            </div>
          </div>
        </div>
        <div class="card-footer">
          <a href="producto.html?id=${p.id}" class="btn-card ${isFree ? 'btn-card-free' : ''}">
            ${isFree ? '📥 Descargar gratis' : 'Ver material'}
          </a>
        </div>
      </article>`;
  }

  /* ============================================================
     GRID RENDER
  ============================================================ */
  let activeFilter = 'all';
  let activeSearch = '';

  function renderGrid() {
    let list = productos;
    if (activeFilter === 'gratis') {
      list = list.filter(p => p.precio === 0);
    } else if (activeFilter !== 'all') {
      list = list.filter(p => p.materia === activeFilter);
    }
    if (activeSearch) {
      const q = activeSearch.toLowerCase();
      list = list.filter(p =>
        p.nombre.toLowerCase().includes(q) ||
        p.materia.toLowerCase().includes(q) ||
        p.grado.toLowerCase().includes(q)
      );
    }

    const grid = document.getElementById('productGrid');
    const info = document.getElementById('resultsInfo');

    grid.innerHTML = list.length
      ? list.map(createCard).join('')
      : `<div class="empty-state"><span style="font-size:3rem">🔍</span><p>Sin resultados para esa búsqueda</p></div>`;

    info.textContent = `${list.length} resultado${list.length !== 1 ? 's' : ''}`;
  }

  /* ============================================================
     EVENTS
  ============================================================ */
  function handleSearch(e) {
    e.preventDefault();
    activeSearch = document.getElementById('searchInput').value.trim();
    renderGrid();
    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Filter pills
  document.getElementById('filterStrip').addEventListener('click', function(e) {
    const btn = e.target.closest('.filter-pill');
    if (!btn) return;
    document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderGrid();
  });

  // Cat nav
  document.getElementById('catNav').addEventListener('click', function(e) {
    const link = e.target.closest('.cat-link');
    if (!link) return;
    e.preventDefault();
    document.querySelectorAll('.cat-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    activeFilter = link.dataset.filter;
    // Sync pills
    document.querySelectorAll('.filter-pill').forEach(b => {
      b.classList.toggle('active', b.dataset.filter === activeFilter);
    });
    renderGrid();
    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Search with debounce
  let searchTimer;
  document.getElementById('searchInput').addEventListener('input', function() {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      activeSearch = this.value.trim();
      renderGrid();
    }, 200);
  });

  // Init
  document.addEventListener('DOMContentLoaded', function() {
    // Check URL param
    const params = new URLSearchParams(window.location.search);
    if (params.get('filter') === 'gratis') {
      activeFilter = 'gratis';
      document.querySelectorAll('.filter-pill').forEach(b => {
        b.classList.toggle('active', b.dataset.filter === 'gratis');
      });
    }
    renderGrid();
  });
