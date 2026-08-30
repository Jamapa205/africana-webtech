// Centralized Product Database for INSTYLE Modern Boutique E-Commerce Platform

let PRODUCTS_DATA = {};

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
    if (lower.includes("dresses_gowns") || lower.includes("dress") || lower.includes("gown") || lower.includes("maxi") || lower.includes("wrap")) return 'dresses_gowns';
    if (lower.includes("denim_bottoms") || lower.includes("jean") || lower.includes("denim") || lower.includes("bottom") || lower.includes("pant") || lower.includes("trouser") || lower.includes("skirt")) return 'denim_bottoms';
    if (lower.includes("shirts_tops") || lower.includes("shirt") || lower.includes("top") || lower.includes("blouse") || lower.includes("tee")) return 'shirts_tops';
    if (lower.includes("suits_outerwear") || lower.includes("suit") || lower.includes("blazer") || lower.includes("trench") || lower.includes("coat") || lower.includes("jacket") || lower.includes("outerwear") || lower.includes("luxe")) return 'suits_outerwear';
    if (lower.includes("handbags_bags") || lower.includes("bag") || lower.includes("handbag") || lower.includes("tote") || lower.includes("purse") || lower.includes("clutch")) return 'handbags_bags';
    if (lower.includes("jewelry_belts") || lower.includes("jewel") || lower.includes("belt") || lower.includes("strap") || lower.includes("necklace") || lower.includes("earring") || lower.includes("bracelet") || lower.includes("bangle")) return 'jewelry_belts';
    
    // Legacy fallback aliases
    if (lower.includes("men")) return 'shirts_tops';
    if (lower.includes("women")) return 'dresses_gowns';
    return 'all';
}

// Filter and Sort Engine
function getFilteredAndSortedProducts() {
    let result = Object.values(PRODUCTS_DATA);

    // Merge custom admin products from localStorage
    try {
        const custom = JSON.parse(localStorage.getItem('africana_custom_products') || localStorage.getItem('instyle_custom_products') || '[]');
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
        const categoryOrderMap = { 
            'dresses_gowns': 1, 
            'denim_bottoms': 2, 
            'shirts_tops': 3, 
            'suits_outerwear': 4, 
            'handbags_bags': 5, 
            'jewelry_belts': 6,
            'men': 3, 'women': 1, 'bags': 5, 'belts': 6, 'jewelry': 6, 'luxe': 4
        };
        groupedItems = [...filteredItems].sort((a, b) => {
            const grpA = categoryOrderMap[a.categoryGroup || a.mainCategory || getCategoryGroup(a.category)] || 99;
            const grpB = categoryOrderMap[b.categoryGroup || b.mainCategory || getCategoryGroup(b.category)] || 99;
            return grpA - grpB;
        });
    }

    // Render active filter badges bar if container exists
    renderActiveFilterChips(filteredItems.length);

    const categoryHeaderLabels = {
        'dresses_gowns': '<i class="fas fa-female"></i> Dresses & Evening Gowns',
        'denim_bottoms': '<i class="fas fa-cut"></i> Denim & Bottoms',
        'shirts_tops': '<i class="fas fa-tshirt"></i> Shirts & Tops',
        'suits_outerwear': '<i class="fas fa-user-tie"></i> Suits & Outerwear',
        'handbags_bags': '<i class="fas fa-shopping-bag"></i> Handbags & Bags',
        'jewelry_belts': '<i class="fas fa-gem"></i> Jewelry & Accessories',
        'men': '<i class="fas fa-tshirt"></i> Shirts & Tops',
        'women': '<i class="fas fa-female"></i> Dresses & Evening Gowns',
        'bags': '<i class="fas fa-shopping-bag"></i> Handbags & Bags',
        'belts': '<i class="fas fa-gem"></i> Jewelry & Accessories',
        'jewelry': '<i class="fas fa-gem"></i> Jewelry & Accessories',
        'luxe': '<i class="fas fa-user-tie"></i> Suits & Outerwear'
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
            const resData = await res.json();
            const productsList = resData.products || [];
            
            // Clear PRODUCTS_DATA so deletions apply correctly
            PRODUCTS_DATA = {};
            
            if (Array.isArray(productsList)) {
                productsList.forEach(p => {
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

    // Check custom products just in case they haven't synced
    try {
        const custom = JSON.parse(localStorage.getItem('africana_custom_products') || localStorage.getItem('instyle_custom_products') || '[]');
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
