# CONTEXT.md - High-Density Token Optimization Index

This document is a compact lookup directory designed for LLMs and AI agents to locate code structures, line boundaries, DOM IDs, and CSS rules instantly without loading entire multi-hundred-line files into context.

---

## 🗂️ 1. File Line Range & Structural Index

| File Path | Approx Lines | Section / Component Line Map |
| :--- | :--- | :--- |
| [`index.html`](file:///c:/Antigravity%20projects/Webtech%20Project/index.html) | ~280 | L1-30: Header & Nav<br>L32-40: Hero Section<br>L42-76: Feature Badges<br>L77-130: Category-Grouped Product Sections (dynamically rendered by `productsData.js`)<br>L130-145: Accessories Banner<br>L145-240: Small Banners<br>L242-260: Newsletter<br>L260-280: Footer |
| [`shop.html`](file:///c:/Antigravity%20projects/Webtech%20Project/shop.html) | ~200 | L1-30: Header & Nav<br>L32-42: Shop Hero Banner<br>L43-88: `#shop-controls` (search bar, sort, category pills, price pills, active chips)<br>L89-160: Category-Grouped `.pro-container` sections (dynamically rendered)<br>L160-200: Pagination & Footer |
| [`style.css`](file:///c:/Antigravity%20projects/Webtech%20Project/style.css) | ~1490 | L1-42: Reset & Typography<br>L43-80: Section Padding & Buttons<br>L81-160: Header & Navbar<br>L162-220: Hero & Features<br>L222-310: Product Cards `.pro`<br>L312-400: Banner Styles<br>L402-460: Newsletter & Footer<br>L462-520: Shop & Cart Page Tables<br>L521-560: `.category-header-title` header dividers<br>L560-820: Multi-Facet Search, Sort & Filter Bar Styles<br>L820-1490: Media Queries |
| [`productsData.js`](file:///c:/Antigravity%20projects/Webtech%20Project/productsData.js) | ~566 | L1-210: `PRODUCTS_DATA` object (all 17 products: f1-f9, a1-a8)<br>L211-230: `STATE` object & `getCategoryGroup()`<br>L232-274: `getFilteredAndSortedProducts()` engine<br>L276-334: `renderProductGrid()` with category header grouping<br>L336-395: `renderActiveFilterChips()`<br>L396-480: State setters (`setCategoryFilter`, `setPriceFilter`, `setSearchQuery`, `setSortBy`, `clearAllFilters`)<br>L481-530: `handleLiveSearchAutoSuggest()` overlay<br>L531-566: `fetchOnlineProducts()`, `getProductById()`, `DOMContentLoaded` init |
| [`cart.html`](file:///c:/Antigravity%20projects/Webtech%20Project/cart.html) | ~147 | L1-26: Header & Nav<br>L28-60: Cart Table & Summary Box<br>L62-100: Footer<br>L101-144: Inline JS (`loadCart()`, `removeFromCart()`, `handlePayment()`) |
| [`cart.js`](file:///c:/Antigravity%20projects/Webtech%20Project/cart.js) | ~180 | L1-50: `addToCart()` with `data-id` resolution<br>L51-80: `updateCartIcon()`<br>L81-140: `.cart` Click Event Listeners with `PRODUCTS_DATA` title matching<br>L141-180: `DOMContentLoaded` initializer |
| [`sproduct.html`](file:///c:/Antigravity%20projects/Webtech%20Project/sproduct.html) | ~170 | L1-26: Header<br>L28-65: Single Product Details & Image Thumbnails<br>L66-130: Related Products<br>L131-165: Footer & Thumbnail Swap Script |
| [`admin.html`](file:///c:/Antigravity%20projects/Webtech%20Project/admin.html) | ~524 | L1-30: Auth check & Header<br>L90-160: Add Product Form (name, category, price, tags, image, description)<br>L161-220: Products Table Section<br>L221-290: Orders & Users Sections<br>L291-524: Form submit handler (tags parsing, Base64 image compression, localStorage & API sync) |
| [`server.js`](file:///c:/Antigravity%20projects/Webtech%20Project/server.js) | ~580 | L1-60: Express setup, middleware, JWT auth<br>L61-200: Auth routes (`/api/login`, `/api/register`)<br>L201-350: Products routes (`GET /api/products`, `POST /api/products` with tags, `DELETE /api/products/:id`)<br>L351-580: Orders, Users routes |

---

## 🏷️ 2. Key DOM IDs Quick Reference

- `#cart-count`: Counter badge in top nav showing total items in cart (all pages).
- `#header`: Fixed top navigation bar section.
- `#navbar`: Navigation link list (`ul`).
- `#cart-body`: Table body (`<tbody>`) in `cart.html` where cart items are rendered dynamically.
- `#total-price`: Subtotal element in `cart.html`.
- `#grand-total`: Final price element in `cart.html` including shipping fee.
- `#payment-btn`: Checkout trigger button on `cart.html`.
- `#MainImg`: Large display image on single product page (`sproduct.html`).
- `#shop-search-input`: Live search text input on `shop.html`.
- `#shop-sort-select`: Sort dropdown on `shop.html`.
- `#catalog-result-count`: Result count label on `shop.html`.
- `#active-filter-chips`: Active filter badge chip container on `shop.html`.
- `#search-suggestions-overlay`: Live auto-suggest dropdown overlay (appended dynamically).
- `#add-product-form`: Admin product upload form on `admin.html`.
- `#new-name`, `#new-category`, `#new-price`, `#new-tags`, `#new-image`, `#new-desc`: Admin form inputs.

---

## 🎨 3. CSS Selector Quick Index

- `.section-p1`: Standard section padding (`40px 80px`).
- `.pro-container`: Flex container wrapping product cards (`.pro`).
- `.pro`: Individual product card component with hover shadow & transition.
- `.fe-box`: Individual feature badge box.
- `.banner-box`: Promotional banner background containers.
- `.normal`, `.white`: Utility button styling classes.
- `.category-header-title`: Full-width category group header divider inside `.pro-container`.
- `.search-sort-bar`: Flex bar containing search input and sort dropdown.
- `.search-box-container`: Wrapper for live search input with icon overlay.
- `.suggestions-overlay`: Floating live auto-suggest dropdown.
- `.pills-wrapper`: Container for category or price filter pill buttons.
- `.category-pill`: Individual category filter pill button.
- `.price-pill`: Individual price range filter pill button.
- `.filter-chip`: Active filter badge chip (with remove icon).
- `.clear-all-chip-btn`: "Clear All" button in active chips bar.
- `.no-results-box`: Empty state display card when no products match filters.

---

## ⚡ 4. Token-Saving Instructions for Agents

1. **Before modifying HTML layout**: Read only the specific line range in `CONTEXT.md` above.
2. **Before editing styles**: Read only the relevant line slice of `style.css` indicated in the line map above.
3. **Before modifying cart functionality**: Read `cart.js` and `cart.html` L101-144.
4. **Before modifying product data or rendering**: Read `productsData.js` L276-334 for `renderProductGrid()`.
5. **Product HTML is dynamically rendered** — never edit hardcoded product cards in `index.html` or `shop.html`. Update `PRODUCTS_DATA` in `productsData.js` instead.
