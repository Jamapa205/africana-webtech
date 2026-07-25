// Centralized Product Database for INSTYLE Modern Boutique E-Commerce Platform

let PRODUCTS_DATA = {
    "j1": {
        id: "j1",
        name: "Dark Indigo Distressed Ripped Skinny Jeans",
        category: "Men's Collection",
        categoryGroup: "men",
        price: 185000,
        tags: ["jeans", "denim", "distressed", "ripped", "dark blue", "indigo", "skinny", "men", "pants"],
        mainImg: "img/products/j1.jpg",
        smallImgs: ["img/products/j1.jpg"],
        description: "Modern dark indigo blue skinny jeans featuring edgy horizontal ripped slash cuts along the thighs and knees. Crafted from premium stretch cotton denim with contrast gold stitching, 5-pocket layout, and comfortable tapered fit."
    },
    "j2": {
        id: "j2",
        name: "Light Sky Blue Distressed Slash Jeans",
        category: "Women's Collection",
        categoryGroup: "women",
        price: 175000,
        tags: ["jeans", "denim", "distressed", "ripped", "light blue", "sky blue", "high waist", "women", "pants"],
        mainImg: "img/products/j2.jpg",
        smallImgs: ["img/products/j2.jpg"],
        description: "Light sky blue wash denim jeans with stylish knee slash distress detailing and subtle thigh fading. Features a flattering high-waist cut, durable stretch cotton fabric, and classic 5-pocket styling."
    },
    "j3": {
        id: "j3",
        name: "Vintage Washed Charcoal Black Jeans",
        category: "Men's Collection",
        categoryGroup: "men",
        price: 160000,
        tags: ["jeans", "denim", "black", "charcoal", "washed", "slim fit", "streetwear", "men", "pants"],
        mainImg: "img/products/j3.jpg",
        smallImgs: ["img/products/j3.jpg"],
        description: "Vintage washed charcoal black denim jeans with a subtle faded thigh finish. Designed with a slim tapered leg, reinforced belt loops, and premium stretch comfort for modern daily styling."
    },
    "f1": {
        id: "f1",
        name: "Men's Slim Fit Oxford Shirt",
        category: "Men's Collection",
        categoryGroup: "men",
        price: 150000,
        tags: ["men", "shirt", "oxford", "cotton", "formal", "casual", "apparel", "navy"],
        mainImg: "img/products/f1.png",
        smallImgs: ["img/products/f1.png", "img/products/f3.png", "img/products/f8.jpg"],
        description: "Tailored slim fit Oxford shirt crafted from 100% breathable premium cotton. Features a refined button-down collar, buttoned cuffs, and a chest pocket."
    },
    "f2": {
        id: "f2",
        name: "Women's Floral Wrap Midi Dress",
        category: "Women's Collection",
        categoryGroup: "women",
        price: 200000,
        tags: ["women", "dress", "floral", "midi", "wrap", "casual", "summer", "apparel"],
        mainImg: "img/products/f2.jpg",
        smallImgs: ["img/products/f2.jpg", "img/products/f4.jpg", "img/products/f5.jpg"],
        description: "Chic floral print wrap midi dress featuring a graceful V-neckline, tie waist, and flutter sleeves. Designed for effortless daytime and evening elegance."
    },
    "f3": {
        id: "f3",
        name: "Men's Classic Denim Jacket",
        category: "Men's Collection",
        categoryGroup: "men",
        price: 170000,
        tags: ["men", "jacket", "denim", "blue", "streetwear", "casual", "outerwear"],
        mainImg: "img/products/f3.png",
        smallImgs: ["img/products/f3.png", "img/products/f1.png", "img/products/f8.jpg"],
        description: "Timeless trucker denim jacket with buttoned flap chest pockets, point collar, and adjustable waist tabs. A modern wardrobe essential."
    },
    "f4": {
        id: "f4",
        name: "Women's Tailored Blazer & Pants Set",
        category: "Women's Collection",
        categoryGroup: "women",
        price: 200000,
        tags: ["women", "suit", "blazer", "set", "formal", "office", "apparel"],
        mainImg: "img/products/f4.jpg",
        smallImgs: ["img/products/f4.jpg", "img/products/f2.jpg", "img/products/f5.jpg"],
        description: "Sophisticated double-breasted blazer and matching high-waisted tailored trousers. Perfect for modern executive and power dressing."
    },
    "f5": {
        id: "f5",
        name: "Women's Satin Evening Gown",
        category: "Women's Collection",
        categoryGroup: "women",
        price: 200000,
        tags: ["women", "gown", "satin", "evening", "party", "gala", "apparel"],
        mainImg: "img/products/f5.jpg",
        smallImgs: ["img/products/f5.jpg", "img/products/f2.jpg", "img/products/f4.jpg"],
        description: "Luxurious floor-length satin gown with a delicate cowl neckline and graceful side slit. Styled for formal events and evening celebrations."
    },
    "f6": {
        id: "f6",
        name: "Men's Executive 3-Piece Suit",
        category: "Cultural Luxe",
        categoryGroup: "luxe",
        price: 300000,
        tags: ["luxe", "suit", "tuxedo", "formal", "vip", "gala", "men", "executive"],
        mainImg: "img/products/f6.webp",
        smallImgs: ["img/products/f6.webp", "img/products/f1.png", "img/products/f3.png"],
        description: "Bespoke executive 3-piece suit tailored from premium wool-blend fabric. Includes a notch-lapel jacket, buttoned vest, and flat-front trousers."
    },
    "f7": {
        id: "f7",
        name: "Men's Urban Streetwear 2-Piece Set",
        category: "Men's Collection",
        categoryGroup: "men",
        price: 250000,
        tags: ["men", "streetwear", "set", "casual", "tracksuit", "apparel", "2piece"],
        mainImg: "img/products/f7.jpg",
        smallImgs: ["img/products/f7.jpg", "img/products/f1.png", "img/products/f3.png"],
        description: "Modern urban streetwear set featuring a minimalist zip-up bomber jacket and relaxed fit drawstring jogger trousers."
    },
    "f8": {
        id: "f8",
        name: "Men's Pure Linen Casual Shirt",
        category: "Men's Collection",
        categoryGroup: "men",
        price: 150000,
        tags: ["men", "shirt", "linen", "casual", "summer", "short-sleeve", "apparel"],
        mainImg: "img/products/f8.jpg",
        smallImgs: ["img/products/f8.jpg", "img/products/f1.png", "img/products/f3.png"],
        description: "Lightweight 100% pure linen casual shirt. Soft, breathable, and designed for relaxed, stylish warm-weather wear."
    },
    "f9": {
        id: "f9",
        name: "Unisex Minimalist Trench Coat",
        category: "Cultural Luxe",
        categoryGroup: "luxe",
        price: 175000,
        tags: ["luxe", "trench", "coat", "unisex", "outerwear", "minimalist", "modern"],
        mainImg: "img/products/f9.avif",
        smallImgs: ["img/products/f9.avif", "img/products/f1.png", "img/products/f3.png"],
        description: "Sleek double-breasted trench coat with storm flap, waist belt, and water-repellent finish. Modern luxury statement outerwear."
    },
    "a1": {
        id: "a1",
        name: "Minimalist Gold Choker Necklace",
        category: "Jewelry",
        categoryGroup: "jewelry",
        price: 45000,
        tags: ["jewelry", "necklace", "gold", "choker", "minimalist", "accessories"],
        mainImg: "img/products/a1.webp",
        smallImgs: ["img/products/a1.webp", "img/products/a3.jpg", "img/products/a5.webp"],
        description: "Elegant 18k gold-plated minimalist choker necklace. Sleek, polished, and lightweight for daily subtle glam."
    },
    "a2": {
        id: "a2",
        name: "Designer Leather Crossbody Handbag",
        category: "Handbags & Bags",
        categoryGroup: "bags",
        price: 100000,
        tags: ["bags", "handbag", "crossbody", "leather", "designer", "accessories"],
        mainImg: "img/products/a2.jpg",
        smallImgs: ["img/products/a2.jpg", "img/products/a4.jpg", "img/products/a6.jpg"],
        description: "Genuine leather crossbody flap bag with gold hardware, adjustable shoulder strap, and multi-compartment interior storage."
    },
    "a3": {
        id: "a3",
        name: "Layered Pearl & Gold Necklace",
        category: "Jewelry",
        categoryGroup: "jewelry",
        price: 45000,
        tags: ["jewelry", "necklace", "pearl", "gold", "layered", "accessories"],
        mainImg: "img/products/a3.jpg",
        smallImgs: ["img/products/a3.jpg", "img/products/a1.webp", "img/products/a5.webp"],
        description: "Chic double-layer necklace combining freshwater pearls and delicate gold chain accents for a sophisticated touch."
    },
    "a4": {
        id: "a4",
        name: "Geometric Drop Gold Earrings",
        category: "Jewelry",
        categoryGroup: "jewelry",
        price: 15000,
        tags: ["jewelry", "earrings", "gold", "geometric", "drop", "accessories"],
        mainImg: "img/products/a4.jpg",
        smallImgs: ["img/products/a4.jpg", "img/products/a6.jpg", "img/products/a2.jpg"],
        description: "Contemporary geometric statement drop earrings in polished brushed gold. Ultra-lightweight with hypo-allergenic posts."
    },
    "a5": {
        id: "a5",
        name: "Genuine Leather Dress Belt",
        category: "Belts & Straps",
        categoryGroup: "belts",
        price: 75000,
        tags: ["belts", "belt", "leather", "black", "brass", "accessories"],
        mainImg: "img/products/a5.webp",
        smallImgs: ["img/products/a5.webp", "img/products/a2.jpg", "img/products/a7.webp"],
        description: "Full-grain genuine black leather dress belt with a polished metallic pin buckle. Essential accessory for suits and chinos."
    },
    "a6": {
        id: "a6",
        name: "Crystal Stud Statement Earrings",
        category: "Jewelry",
        categoryGroup: "jewelry",
        price: 30000,
        tags: ["jewelry", "earrings", "crystal", "stud", "sparkle", "accessories"],
        mainImg: "img/products/a6.jpg",
        smallImgs: ["img/products/a6.jpg", "img/products/a4.jpg", "img/products/a2.jpg"],
        description: "Dazzling cubic zirconia crystal stud earrings set in sterling silver. Adds brilliant sparkle to any evening outfit."
    },
    "a7": {
        id: "a7",
        name: "Braided Leather Wrist Strap",
        category: "Belts & Straps",
        categoryGroup: "belts",
        price: 55000,
        tags: ["belts", "strap", "leather", "braided", "wristlet", "accessories"],
        mainImg: "img/products/a7.webp",
        smallImgs: ["img/products/a7.webp", "img/products/a2.jpg", "img/products/a5.webp"],
        description: "Hand-braided genuine leather wrist strap featuring a magnetic stainless steel clasp. Sleek unisex accessory."
    },
    "a8": {
        id: "a8",
        name: "Chunky Chain Link Gold Necklace",
        category: "Jewelry",
        categoryGroup: "jewelry",
        price: 100000,
        tags: ["jewelry", "necklace", "chain", "gold", "chunky", "accessories"],
        mainImg: "img/products/a8.jpg",
        smallImgs: ["img/products/a8.jpg", "img/products/a1.webp", "img/products/a3.jpg"],
        description: "Bold curb chain link statement necklace in heavy gold-tone plating. Modern fashion runway essential."
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

// Filter and Sort Engine
function getFilteredAndSortedProducts() {
    let result = Object.values(PRODUCTS_DATA);

    // Merge custom admin products from localStorage
    try {
        const custom = JSON.parse(localStorage.getItem('africana_custom_products') || '[]');
        if (Array.isArray(custom) && custom.length > 0) {
            result = [...result, ...custom];
        }
    } catch (e) {
        console.error('Error loading custom products:', e);
    }

    // 1. Category Filter
    if (STATE.activeCategory !== 'all') {
        result = result.filter(p => {
            const grp = p.categoryGroup || getCategoryGroup(p.category);
            return grp === STATE.activeCategory;
        });
    }

    // 2. Search Query Filter (Matches Name, Category, Tags, Description)
    if (STATE.searchQuery && STATE.searchQuery.trim() !== '') {
        const q = STATE.searchQuery.toLowerCase().trim();
        result = result.filter(p => {
            const nameMatch = (p.name || '').toLowerCase().includes(q);
            const catMatch = (p.category || '').toLowerCase().includes(q);
            const descMatch = (p.description || '').toLowerCase().includes(q);
            const tagMatch = Array.isArray(p.tags) && p.tags.some(t => String(t).toLowerCase().includes(q));
            return nameMatch || catMatch || descMatch || tagMatch;
        });
    }

    // 3. Price Filter
    if (STATE.priceFilter !== 'all') {
        result = result.filter(p => {
            const price = Number(p.price || 0);
            if (STATE.priceFilter === 'under-50k') return price < 50000;
            if (STATE.priceFilter === '50k-150k') return price >= 50000 && price <= 150000;
            if (STATE.priceFilter === 'over-150k') return price > 150000;
            return true;
        });
    }

    // 4. Sort Controller
    if (STATE.sortBy === 'price-asc') {
        result.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
    } else if (STATE.sortBy === 'price-desc') {
        result.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));
    } else if (STATE.sortBy === 'newest') {
        result.sort((a, b) => (b.id || '').localeCompare(a.id || ''));
    } else if (STATE.sortBy === 'name-asc') {
        result.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    }

    return result;
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
                    <p>Try searching for <strong>jeans, shirts, belts, handbags, or dresses</strong>.</p>
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
                        <span>${p.category || 'INSTYLE'}</span>
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
                    <a href="javascript:void(0);"><i class="fal fa-shopping-bag cart"></i></a>
                </div>
            `;
        });

        container.innerHTML = html;
    });
}

// Render Active Filter Badges Bar & Result Count
function renderActiveFilterChips(count) {
    const countEl = document.getElementById('catalog-result-count');
    if (countEl) {
        countEl.textContent = `Showing ${count} product${count === 1 ? '' : 's'}`;
    }

    const chipsContainer = document.getElementById('active-filter-chips');
    if (!chipsContainer) return;

    let chipsHtml = '';
    let hasFilter = false;

    if (STATE.activeCategory !== 'all') {
        hasFilter = true;
        const catLabels = { 'men': 'Men', 'women': 'Women', 'bags': 'Bags', 'belts': 'Belts', 'jewelry': 'Jewelry', 'luxe': 'Luxe' };
        chipsHtml += `<span class="filter-chip">Category: ${catLabels[STATE.activeCategory] || STATE.activeCategory} <i class="fas fa-times" onclick="setCategoryFilter('all')"></i></span>`;
    }

    if (STATE.priceFilter !== 'all') {
        hasFilter = true;
        const priceLabels = { 'under-50k': '< 50k', '50k-150k': '50k-150k', 'over-150k': '> 150k' };
        chipsHtml += `<span class="filter-chip">Price: ${priceLabels[STATE.priceFilter] || STATE.priceFilter} <i class="fas fa-times" onclick="setPriceFilter('all')"></i></span>`;
    }

    if (STATE.searchQuery && STATE.searchQuery.trim() !== '') {
        hasFilter = true;
        chipsHtml += `<span class="filter-chip">Search: "${STATE.searchQuery}" <i class="fas fa-times" onclick="setSearchQuery('')"></i></span>`;
    }

    if (hasFilter) {
        chipsHtml += `<button class="clear-all-chip-btn" onclick="clearAllFilters()">Clear All</button>`;
        chipsContainer.classList.remove('hide');
        chipsContainer.innerHTML = chipsHtml;
    } else {
        chipsContainer.classList.add('hide');
        chipsContainer.innerHTML = '';
    }
}

// State Setter Actions
function setCategoryFilter(cat) {
    STATE.activeCategory = cat;
    document.querySelectorAll('.category-pill').forEach(btn => {
        if (btn.getAttribute('data-cat') === cat) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    renderProductGrid();
}

function setPriceFilter(range) {
    STATE.priceFilter = range;
    document.querySelectorAll('.price-pill').forEach(btn => {
        if (btn.getAttribute('data-price') === range) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    renderProductGrid();
}

function setSearchQuery(query) {
    STATE.searchQuery = query;
    const input = document.getElementById('shop-search-input');
    if (input) input.value = query;
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

    const input = document.getElementById('shop-search-input');
    if (input) input.value = '';

    const sortSelect = document.getElementById('shop-sort-select');
    if (sortSelect) sortSelect.value = 'featured';

    document.querySelectorAll('.category-pill').forEach(b => b.classList.remove('active'));
    const allCatBtn = document.querySelector('.category-pill[data-cat="all"]');
    if (allCatBtn) allCatBtn.classList.add('active');

    document.querySelectorAll('.price-pill').forEach(b => b.classList.remove('active'));
    const allPriceBtn = document.querySelector('.price-pill[data-price="all"]');
    if (allPriceBtn) allPriceBtn.classList.add('active');

    renderProductGrid();
}

// Real-Time Search Auto-Suggest Popup Overlay
function handleLiveSearchAutoSuggest() {
    const searchInput = document.getElementById('shop-search-input');
    if (!searchInput) return;

    let overlay = document.getElementById('search-suggestions-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'search-suggestions-overlay';
        overlay.className = 'suggestions-overlay hide';
        searchInput.parentElement.appendChild(overlay);
    }

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        setSearchQuery(e.target.value);

        if (!query) {
            overlay.classList.add('hide');
            return;
        }

        const matches = Object.values(PRODUCTS_DATA).filter(p => {
            const nameMatch = (p.name || '').toLowerCase().includes(query);
            const catMatch = (p.category || '').toLowerCase().includes(query);
            const tagMatch = Array.isArray(p.tags) && p.tags.some(t => String(t).toLowerCase().includes(query));
            return nameMatch || catMatch || tagMatch;
        }).slice(0, 5);

        if (matches.length === 0) {
            overlay.innerHTML = `<div class="suggestion-item empty">No matching products found</div>`;
        } else {
            overlay.innerHTML = matches.map(m => `
                <div class="suggestion-item" onclick="window.location.href='sproduct.html?id=${m.id}'">
                    <img src="${m.mainImg || 'img/products/f1.png'}" alt="${m.name}">
                    <div class="sugg-info">
                        <h6>${m.name}</h6>
                        <span>${m.category} • SSP ${Number(m.price || 0).toLocaleString()}</span>
                    </div>
                </div>
            `).join('');
        }

        overlay.classList.remove('hide');
    });

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !overlay.contains(e.target)) {
            overlay.classList.add('hide');
        }
    });
}

// Fetch products from server if API is reachable
async function fetchOnlineProducts() {
    try {
        const res = await fetch('/api/products');
        if (res.ok) {
            const apiProducts = await res.json();
            if (Array.isArray(apiProducts) && apiProducts.length > 0) {
                apiProducts.forEach(p => {
                    if (p.id) PRODUCTS_DATA[p.id] = p;
                });
                renderProductGrid();
            }
        }
    } catch (err) {
        console.log('Running offline/standalone static mode with PRODUCTS_DATA');
    }
}

// Product Lookup Helper
function getProductById(id) {
    if (!id) return null;
    if (PRODUCTS_DATA[id]) return PRODUCTS_DATA[id];

    // Check custom products
    try {
        const custom = JSON.parse(localStorage.getItem('africana_custom_products') || '[]');
        return custom.find(p => String(p.id) === String(id)) || null;
    } catch (e) {
        return null;
    }
}

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Read search query parameter from URL (e.g. shop.html?search=jeans)
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    const catParam = urlParams.get('cat');

    if (searchParam) {
        STATE.searchQuery = searchParam;
        const input = document.getElementById('shop-search-input');
        if (input) input.value = searchParam;
    }

    if (catParam) {
        STATE.activeCategory = catParam;
        document.querySelectorAll('.category-pill').forEach(btn => {
            if (btn.getAttribute('data-cat') === catParam) btn.classList.add('active');
            else btn.classList.remove('active');
        });
    }

    renderProductGrid();
    handleLiveSearchAutoSuggest();

    // Attach listener to sort dropdown
    const sortSelect = document.getElementById('shop-sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => setSortBy(e.target.value));
    }

    fetchOnlineProducts();
});
