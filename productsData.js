// Centralized Product Database for Africana Modern Boutique E-Commerce Platform

let PRODUCTS_DATA = {
    "f1": {
        id: "f1",
        name: "Lori mens tradional wear",
        category: "Men's Collection",
        categoryGroup: "men",
        price: 150000,
        tags: ["men", "shirt", "tunic", "traditional", "cotton", "embroidery", "male", "apparel"],
        mainImg: "img/products/f1.png",
        smallImgs: ["img/products/f1.png", "img/products/f3.png", "img/products/f8.jpg"],
        description: "Handcrafted traditional men's tunic shirt featuring intricate navy and sapphire embroidery along the split neckline and chest placket. Tailored from 100% premium breathable linen cotton."
    },
    "f2": {
        id: "f2",
        name: "Lori women tradional wear",
        category: "Women's Collection",
        categoryGroup: "women",
        price: 200000,
        tags: ["women", "dress", "gown", "traditional", "floral", "turquoise", "female", "apparel"],
        mainImg: "img/products/f2.jpg",
        smallImgs: ["img/products/f2.jpg", "img/products/f4.jpg", "img/products/f5.jpg"],
        description: "Elegant African women's traditional gown featuring vibrant turquoise and dark floral accents, ornate embroidery patterns along the front placket, and a graceful flowing silhouette."
    },
    "f3": {
        id: "f3",
        name: "Havani men tradional wear",
        category: "Men's Collection",
        categoryGroup: "men",
        price: 170000,
        tags: ["men", "shirt", "tunic", "gold", "embroidery", "mandarin", "male", "apparel"],
        mainImg: "img/products/f3.png",
        smallImgs: ["img/products/f3.png", "img/products/f1.png", "img/products/f8.jpg"],
        description: "Distinguished Havani men's traditional tunic featuring rich metallic gold embroidery along the mandarin neck collar and cuff bands."
    },
    "f4": {
        id: "f4",
        name: "Havani women tradional wear",
        category: "Women's Collection",
        categoryGroup: "women",
        price: 200000,
        tags: ["women", "dress", "gown", "ceremonial", "patterned", "female", "apparel"],
        mainImg: "img/products/f4.jpg",
        smallImgs: ["img/products/f4.jpg", "img/products/f2.jpg", "img/products/f5.jpg"],
        description: "Vibrant African women's traditional gown crafted with premium patterned textiles, contrasting embroidered trims, and structured waist tailoring."
    },
    "f5": {
        id: "f5",
        name: "Jieng women traditional wear",
        category: "Women's Collection",
        categoryGroup: "women",
        price: 200000,
        tags: ["women", "dress", "gown", "beaded", "cotton", "female", "apparel"],
        mainImg: "img/products/f5.jpg",
        smallImgs: ["img/products/f5.jpg", "img/products/f2.jpg", "img/products/f4.jpg"],
        description: "Royal Jieng traditional gown showcasing bold cultural motifs, regal neckline embellishments, and breathable linen cotton fabric."
    },
    "f6": {
        id: "f6",
        name: "Flutani",
        category: "Cultural Luxe",
        categoryGroup: "luxe",
        price: 300000,
        tags: ["luxe", "luxury", "suit", "ceremonial", "gold", "robe", "vip", "gala"],
        mainImg: "img/products/f6.webp",
        smallImgs: ["img/products/f6.webp", "img/products/f1.png", "img/products/f3.png"],
        description: "High-end luxury ceremonial robe featuring rich metallic threads, premium woven jacquard fabric, and flawless hand finishing."
    },
    "f7": {
        id: "f7",
        name: "Lori men 2 piece set",
        category: "Men's Collection",
        categoryGroup: "men",
        price: 250000,
        tags: ["men", "suit", "set", "trousers", "tunic", "male", "apparel", "2piece"],
        mainImg: "img/products/f7.jpg",
        smallImgs: ["img/products/f7.jpg", "img/products/f1.png", "img/products/f3.png"],
        description: "Complete 2-piece traditional tunic shirt and matching tailored trouser ensemble. Features clean geometric front embroidery and athletic cut."
    },
    "f8": {
        id: "f8",
        name: "Lori men tradional tunic",
        category: "Men's Collection",
        categoryGroup: "men",
        price: 150000,
        tags: ["men", "shirt", "tunic", "short-sleeve", "casual", "male", "apparel"],
        mainImg: "img/products/f8.jpg",
        smallImgs: ["img/products/f8.jpg", "img/products/f1.png", "img/products/f3.png"],
        description: "Classic short-sleeved traditional tunic shirt adorned with understated chest embroidery. Lightweight, breathable, and designed for stylish daily wear."
    },
    "f9": {
        id: "f9",
        name: "Casual inspired tradition wear",
        category: "Cultural Luxe",
        categoryGroup: "luxe",
        price: 175000,
        tags: ["luxe", "casual", "streetwear", "unisex", "tunic", "motif", "apparel"],
        mainImg: "img/products/f9.avif",
        smallImgs: ["img/products/f9.avif", "img/products/f1.png", "img/products/f3.png"],
        description: "Versatile casual tunic blending modern streetwear cuts with traditional African motif prints. Soft, durable, and styled for effortless daily wear."
    },
    "a1": {
        id: "a1",
        name: "cowrie shell necklace",
        category: "Jewelry",
        categoryGroup: "jewelry",
        price: 45000,
        tags: ["jewelry", "necklace", "cowrie", "shell", "beads", "heritage", "accessories"],
        mainImg: "img/products/a1.webp",
        smallImgs: ["img/products/a1.webp", "img/products/a3.jpg", "img/products/a5.webp"],
        description: "Handcrafted authentic cowrie shell necklace strung on durable natural twine. Symbolizing prosperity, spiritual strength, and royal African heritage."
    },
    "a2": {
        id: "a2",
        name: "Tenal pair",
        category: "Jewelry",
        categoryGroup: "jewelry",
        price: 100000,
        tags: ["jewelry", "cuff", "bracelet", "brass", "beaded", "accessories", "pair"],
        mainImg: "img/products/a2.jpg",
        smallImgs: ["img/products/a2.jpg", "img/products/a4.jpg", "img/products/a6.jpg"],
        description: "Handcrafted traditional brass and beaded cuff bracelet set. Beautifully polished with authentic tribal engravings for cultural elegance."
    },
    "a3": {
        id: "a3",
        name: "Rememberance beads",
        category: "Jewelry",
        categoryGroup: "jewelry",
        price: 45000,
        tags: ["jewelry", "necklace", "beads", "glass", "multi-colored", "accessories"],
        mainImg: "img/products/a3.jpg",
        smallImgs: ["img/products/a3.jpg", "img/products/a1.webp", "img/products/a5.webp"],
        description: "Artisanal multi-strand glass bead necklace celebrating traditional African colorways and ceremonial beauty."
    },
    "a4": {
        id: "a4",
        name: "lori earings",
        category: "Jewelry",
        categoryGroup: "jewelry",
        price: 15000,
        tags: ["jewelry", "earrings", "hoop", "wirework", "metallic", "accessories"],
        mainImg: "img/products/a4.jpg",
        smallImgs: ["img/products/a4.jpg", "img/products/a6.jpg", "img/products/a2.jpg"],
        description: "Lightweight handcrafted hoop earrings featuring subtle African wirework detail and polished metallic finish."
    },
    "a5": {
        id: "a5",
        name: "Africa bangles",
        category: "Jewelry",
        categoryGroup: "jewelry",
        price: 75000,
        tags: ["jewelry", "bangles", "bracelet", "wooden", "brass", "stacked", "accessories"],
        mainImg: "img/products/a5.webp",
        smallImgs: ["img/products/a5.webp", "img/products/a2.jpg", "img/products/a7.webp"],
        description: "Set of stacked wooden and brass bangles wrapped with vibrant traditional thread patterns."
    },
    "a6": {
        id: "a6",
        name: "Tani earings",
        category: "Jewelry",
        categoryGroup: "jewelry",
        price: 30000,
        tags: ["jewelry", "earrings", "drop", "carved", "bone", "beads", "accessories"],
        mainImg: "img/products/a6.jpg",
        smallImgs: ["img/products/a6.jpg", "img/products/a4.jpg", "img/products/a2.jpg"],
        description: "Statement drop earrings adorned with carved bone and polished beads, embodying authentic artisanal craftsmanship."
    },
    "a7": {
        id: "a7",
        name: "Madino Bracelet",
        category: "Jewelry",
        categoryGroup: "jewelry",
        price: 55000,
        tags: ["jewelry", "bracelet", "leather", "braided", "wristlet", "accessories"],
        mainImg: "img/products/a7.webp",
        smallImgs: ["img/products/a7.webp", "img/products/a2.jpg", "img/products/a5.webp"],
        description: "Elegantly braided leather and beaded wristlet featuring a secure brass clasp and comfortable fit."
    },
    "a8": {
        id: "a8",
        name: "Matako necklace",
        category: "Jewelry",
        categoryGroup: "jewelry",
        price: 100000,
        tags: ["jewelry", "necklace", "beads", "amber", "ceremonial", "accessories"],
        mainImg: "img/products/a8.jpg",
        smallImgs: ["img/products/a8.jpg", "img/products/a1.webp", "img/products/a3.jpg"],
        description: "Bold ceremonial statement necklace featuring cascading amber-hued beads and intricate wire-wrapped accents."
    }
};

// Global Multi-Facet Filter State
let STATE = {
    activeCategory: 'all',
    searchQuery: '',
    priceFilter: 'all',
    sortBy: 'featured'
};

// Helper: Determine categoryGroup for dynamic/admin products
function getCategoryGroup(catName) {
    if (!catName) return 'all';
    const lower = String(catName).toLowerCase();
    if (lower.includes("men") && !lower.includes("women")) return 'men';
    if (lower.includes("women")) return 'women';
    if (lower.includes("bag") || lower.includes("handbag") || lower.includes("tote") || lower.includes("purse") || lower.includes("clutch")) return 'bags';
    if (lower.includes("belt") || lower.includes("strap") || lower.includes("waist")) return 'belts';
    if (lower.includes("jewel") || lower.includes("necklace") || lower.includes("earring") || lower.includes("bracelet") || lower.includes("bangle") || lower.includes("bead")) return 'jewelry';
    if (lower.includes("luxe") || lower.includes("suit") || lower.includes("gala")) return 'luxe';
    return 'all';
}

// Master Filter & Sort Engine
function getFilteredAndSortedProducts() {
    // 1. Sync custom local storage products
    const localCustom = JSON.parse(localStorage.getItem('africana_custom_products')) || [];
    localCustom.forEach(p => {
        if (p && p.id) {
            if (!p.categoryGroup) p.categoryGroup = getCategoryGroup(p.category);
            if (!p.tags || !Array.isArray(p.tags)) {
                p.tags = [p.name, p.category, p.description].join(' ').toLowerCase().split(/\s+/).filter(Boolean);
            }
            PRODUCTS_DATA[p.id] = p;
        }
    });

    let items = Object.values(PRODUCTS_DATA);

    // 2. Category Filter
    if (STATE.activeCategory && STATE.activeCategory !== 'all') {
        items = items.filter(p => {
            const group = p.categoryGroup || getCategoryGroup(p.category);
            return group === STATE.activeCategory;
        });
    }

    // 3. Price Filter
    if (STATE.priceFilter && STATE.priceFilter !== 'all') {
        items = items.filter(p => {
            const price = Number(p.price || 0);
            if (STATE.priceFilter === 'under-50k') return price < 50000;
            if (STATE.priceFilter === '50k-150k') return price >= 50000 && price <= 150000;
            if (STATE.priceFilter === 'over-150k') return price > 150000;
            return true;
        });
    }

    // 4. Search Query Filter
    if (STATE.searchQuery && STATE.searchQuery.trim() !== '') {
        const q = STATE.searchQuery.trim().toLowerCase();
        items = items.filter(p => {
            const nameMatch = (p.name || '').toLowerCase().includes(q);
            const catMatch = (p.category || '').toLowerCase().includes(q);
            const descMatch = (p.description || '').toLowerCase().includes(q);
            const tagMatch = Array.isArray(p.tags) && p.tags.some(t => String(t).toLowerCase().includes(q));
            return nameMatch || catMatch || descMatch || tagMatch;
        });
    }

    // 5. Sorting Controller
    items = [...items]; // clone
    if (STATE.sortBy === 'price-asc') {
        items.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
    } else if (STATE.sortBy === 'price-desc') {
        items.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));
    } else if (STATE.sortBy === 'name-asc') {
        items.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    } else if (STATE.sortBy === 'newest') {
        items.reverse();
    }

    return items;
}

// Render Main Product Catalog Grid (Products of the same category grouped together under section headers)
function renderProductGrid() {
    const containers = document.querySelectorAll('.pro-container');
    if (!containers || containers.length === 0) return;

    const filteredItems = getFilteredAndSortedProducts();

    // Group items by category when default view/featured sort is active
    let groupedItems = filteredItems;
    if (STATE.sortBy === 'featured') {
        const categoryOrderMap = { 'men': 1, 'women': 2, 'bags': 3, 'belts': 4, 'jewelry': 5, 'luxe': 6 };
        groupedItems = [...filteredItems].sort((a, b) => {
            const grpA = categoryOrderMap[a.categoryGroup || getCategoryGroup(a.category)] || 99;
            const grpB = categoryOrderMap[b.categoryGroup || getCategoryGroup(b.category)] || 99;
            return grpA - grpB;
        });
    }

    // Render active filter badges bar if container exists
    renderActiveFilterChips(filteredItems.length);

    const categoryHeaderLabels = {
        'men': '<i class="fas fa-male"></i> Men\'s Collection',
        'women': '<i class="fas fa-female"></i> Women\'s Collection',
        'bags': '<i class="fas fa-shopping-bag"></i> Handbags & Bags',
        'belts': '<i class="fas fa-user-tag"></i> Belts & Straps',
        'jewelry': '<i class="fas fa-gem"></i> Jewelry Collection',
        'luxe': '<i class="fas fa-crown"></i> Cultural Luxe'
    };

    containers.forEach((container) => {
        let itemsToRender = groupedItems;

        if (container.id === 'home-featured') {
            itemsToRender = groupedItems.slice(0, 8);
        }

        if (itemsToRender.length === 0) {
            container.innerHTML = `
                <div class="no-results-box">
                    <i class="fas fa-search-minus"></i>
                    <h3>No items found matching your criteria</h3>
                    <p>Try searching for <strong>jeans, shirts, belts, handbags, or cowrie shell necklaces</strong>.</p>
                    <button onclick="clearAllFilters()" class="normal">Clear All Filters</button>
                </div>
            `;
            return;
        }

        let html = '';
        let lastCategoryGroup = null;

        itemsToRender.forEach((p) => {
            const grp = p.categoryGroup || getCategoryGroup(p.category);
            
            // Insert category header row when category changes in 'all' view mode
            if (STATE.activeCategory === 'all' && STATE.sortBy === 'featured' && grp !== lastCategoryGroup && categoryHeaderLabels[grp]) {
                lastCategoryGroup = grp;
                html += `
                    <div class="category-header-title">
                        <h3>${categoryHeaderLabels[grp]}</h3>
                    </div>
                `;
            }

            html += `
                <div class="pro" data-id="${p.id}">
                    <img src="${p.mainImg || 'img/products/f1.png'}" alt="${p.name}">
                    <div class="des">
                        <span>${p.category || 'Africana'}</span>
                        <h5>${p.name}</h5>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <h4>SSP ${Number(p.price || 0).toLocaleString()}</h4>
                    </div>
                    <a href="javascript:void(0);"><i class="fal fa-shopping-cart cart"></i></a>
                </div>
            `;
        });

        container.innerHTML = html;
    });
}

// Render Removable Active Filter Chips
function renderActiveFilterChips(totalCount) {
    const chipsBar = document.getElementById('active-filter-chips');
    const resultCountEl = document.getElementById('catalog-result-count');

    if (resultCountEl) {
        resultCountEl.textContent = `${totalCount} Product${totalCount === 1 ? '' : 's'} Found`;
    }

    if (!chipsBar) return;

    let chipsHTML = '';
    
    if (STATE.activeCategory !== 'all') {
        const catLabel = document.querySelector(`.category-pill[data-cat="${STATE.activeCategory}"]`)?.textContent || STATE.activeCategory;
        chipsHTML += `<span class="filter-chip">Category: ${catLabel} <i class="fas fa-times" onclick="setCategoryFilter('all')"></i></span>`;
    }

    if (STATE.priceFilter !== 'all') {
        const priceLabel = STATE.priceFilter === 'under-50k' ? '< SSP 50,000' : STATE.priceFilter === '50k-150k' ? 'SSP 50k - 150k' : '> SSP 150,000';
        chipsHTML += `<span class="filter-chip">Price: ${priceLabel} <i class="fas fa-times" onclick="setPriceFilter('all')"></i></span>`;
    }

    if (STATE.searchQuery && STATE.searchQuery.trim() !== '') {
        chipsHTML += `<span class="filter-chip">Search: "${STATE.searchQuery}" <i class="fas fa-times" onclick="setSearchQuery('')"></i></span>`;
    }

    if (chipsHTML !== '') {
        chipsHTML += `<button onclick="clearAllFilters()" class="clear-all-chip-btn">Clear All</button>`;
        chipsBar.innerHTML = chipsHTML;
        chipsBar.classList.remove('hide');
    } else {
        chipsBar.innerHTML = '';
        chipsBar.classList.add('hide');
    }
}

// State Setter Actions
function setCategoryFilter(cat) {
    STATE.activeCategory = cat;

    // Update active pill UI
    document.querySelectorAll('.category-pill').forEach(pill => {
        if (pill.getAttribute('data-cat') === cat) {
            pill.classList.add('active');
        } else {
            pill.classList.remove('active');
        }
    });

    renderProductGrid();
}

function setPriceFilter(priceRange) {
    STATE.priceFilter = priceRange;

    document.querySelectorAll('.price-pill').forEach(pill => {
        if (pill.getAttribute('data-price') === priceRange) {
            pill.classList.add('active');
        } else {
            pill.classList.remove('active');
        }
    });

    renderProductGrid();
}

function setSearchQuery(query) {
    STATE.searchQuery = query;
    const inputs = document.querySelectorAll('#shop-search-input, #hero-search-input');
    inputs.forEach(input => input.value = query);
    renderProductGrid();
}

function setSortBy(sortVal) {
    STATE.sortBy = sortVal;
    renderProductGrid();
}

function clearAllFilters() {
    STATE.activeCategory = 'all';
    STATE.priceFilter = 'all';
    STATE.searchQuery = '';
    STATE.sortBy = 'featured';

    const searchInput = document.getElementById('shop-search-input');
    if (searchInput) searchInput.value = '';

    const sortSelect = document.getElementById('shop-sort-select');
    if (sortSelect) sortSelect.value = 'featured';

    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.classList.toggle('active', pill.getAttribute('data-cat') === 'all');
    });

    document.querySelectorAll('.price-pill').forEach(pill => {
        pill.classList.toggle('active', pill.getAttribute('data-price') === 'all');
    });

    renderProductGrid();
}

// Live Search Auto-Suggest Overlay Handler
function handleLiveSearchAutoSuggest(e) {
    const input = e.target;
    const query = input.value.trim().toLowerCase();
    let overlay = document.getElementById('search-suggestions-overlay');

    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'search-suggestions-overlay';
        overlay.className = 'suggestions-overlay';
        if (input.parentNode) input.parentNode.appendChild(overlay);
    }

    if (!query) {
        overlay.innerHTML = '';
        overlay.classList.add('hide');
        setSearchQuery('');
        return;
    }

    const all = Object.values(PRODUCTS_DATA);
    const matches = all.filter(p => {
        const nameMatch = (p.name || '').toLowerCase().includes(query);
        const catMatch = (p.category || '').toLowerCase().includes(query);
        const tagMatch = Array.isArray(p.tags) && p.tags.some(t => String(t).toLowerCase().includes(query));
        return nameMatch || catMatch || tagMatch;
    }).slice(0, 5);

    if (matches.length === 0) {
        overlay.innerHTML = `<div class="suggestion-item empty">No matching items for "${query}"</div>`;
    } else {
        overlay.innerHTML = matches.map(m => `
            <div class="suggestion-item" onclick="window.location.href='sproduct.html?id=${encodeURIComponent(m.id)}';">
                <img src="${m.mainImg || 'img/products/f1.png'}" alt="${m.name}">
                <div class="sugg-info">
                    <h6>${m.name}</h6>
                    <span>${m.category || 'Africana'} • SSP ${Number(m.price || 0).toLocaleString()}</span>
                </div>
            </div>
        `).join('');
    }

    overlay.classList.remove('hide');
    setSearchQuery(query);
}

// Asynchronously sync product catalog from online API
async function fetchOnlineProducts() {
    try {
        const response = await fetch('/api/products');
        if (response.ok) {
            const data = await response.json();
            if (data.success && Array.isArray(data.products)) {
                data.products.forEach(p => {
                    const existing = PRODUCTS_DATA[p.id];
                    let bestImg = p.mainImg;

                    if (existing && existing.mainImg && existing.mainImg.startsWith('data:image')) {
                        bestImg = existing.mainImg;
                    } else if (p.mainImg && p.mainImg.startsWith('uploads/')) {
                        const localCustom = JSON.parse(localStorage.getItem('africana_custom_products')) || [];
                        const matchLocal = localCustom.find(lc => lc.id === p.id || lc.name === p.name);
                        if (matchLocal && matchLocal.mainImg && matchLocal.mainImg.startsWith('data:image')) {
                            bestImg = matchLocal.mainImg;
                        }
                    }

                    PRODUCTS_DATA[p.id] = {
                        id: p.id,
                        name: p.name,
                        category: p.category,
                        categoryGroup: p.categoryGroup || getCategoryGroup(p.category),
                        price: p.price,
                        tags: p.tags || [p.name, p.category].join(' ').toLowerCase().split(/\s+/),
                        mainImg: bestImg || 'img/products/f1.png',
                        smallImgs: [bestImg || 'img/products/f1.png'],
                        description: p.description,
                        isPlaceholder: p.isPlaceholder || false
                    };
                });
                renderProductGrid();
            }
        }
    } catch (err) {
        console.log("Using offline product cache.");
    }
}

// Helper function to get product by ID or default to f1
function getProductById(id) {
    const localCustom = JSON.parse(localStorage.getItem('africana_custom_products')) || [];
    localCustom.forEach(p => {
        if (p && p.id) PRODUCTS_DATA[p.id] = p;
    });

    if (id && PRODUCTS_DATA[id]) {
        return PRODUCTS_DATA[id];
    }

    const found = Object.values(PRODUCTS_DATA).find(p => p.id === id || String(p.id) === String(id));
    if (found) return found;

    return PRODUCTS_DATA["f1"];
}

// Initialize dynamic grid and controls on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Read category from URL params e.g. shop.html?category=bags
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('category');
    if (catParam) {
        STATE.activeCategory = catParam;
    }

    renderProductGrid();
    fetchOnlineProducts();

    // Attach search input event listeners
    const searchInput = document.getElementById('shop-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleLiveSearchAutoSuggest);
    }

    const sortSelect = document.getElementById('shop-sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => setSortBy(e.target.value));
    }
});
