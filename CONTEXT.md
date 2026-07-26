# CONTEXT.md - High-Density Token Optimization Index

This document is a compact lookup directory designed for LLMs and AI agents to locate code structures, line boundaries, DOM IDs, and CSS rules instantly without loading entire multi-hundred-line files into context.

---

## 🗂️ 1. File Line Range & Structural Index

| File Path | Approx Lines | Section / Component Line Map |
| :--- | :--- | :--- |
| [`index.html`](file:///c:/Antigravity%20projects/Webtech%20Project/index.html) | ~358 | L1-35: Header & INSTYLE SVG Logo<br>L36-80: Hero Section<br>L82-114: `#feature` Centered Badges<br>L116-180: Shop by Collection Cards (6 reorganized categories)<br>L182-240: Dynamically rendered Category Product Grids (`productsData.js`)<br>L242-300: Banners & Newsletter<br>L301-358: Footer |
| [`shop.html`](file:///c:/Antigravity%20projects/Webtech%20Project/shop.html) | ~404 | L1-37: Header & INSTYLE SVG Logo<br>L39-43: Shop Hero Banner<br>L44-88: `#shop-controls` (search bar, sort dropdown, 6 category pills, price pills, active chips)<br>L89-350: Category-Grouped `.pro-container` grids<br>L351-404: Pagination & Footer |
| [`style.css`](file:///c:/Antigravity%20projects/Webtech%20Project/style.css) | ~2240 | L1-42: Reset & Outfit Typography<br>L43-80: Section Padding & Utility Buttons<br>L81-160: Header, Navbar & INSTYLE Logo Fit<br>L162-432: Hero Section & Eyebrow Badges<br>L434-510: `#feature` Centered Badges & Cards<br>L512-613: Shop by Collection Grid Cards<br>L614-720: Product Cards `.pro`<br>L721-880: Banner Styles<br>L881-940: Newsletter & Footer<br>L941-1110: Footer Links & Socials<br>L1111-1348: Multi-Facet Search, Sort & Category Filter Bar Styles<br>L1350-1470: Auto-Suggest Overlay & Empty State<br>L1472-1560: `sproduct.html` Product Detail Layout, `#main-img` & `.small-img-col` Thumbnail Gallery<br>L1562-2240: Responsive Media Queries (`799px`, `477px`) |
| [`productsData.js`](file:///c:/Antigravity%20projects/Webtech%20Project/productsData.js) | ~628 | L1-246: `PRODUCTS_DATA` database (`d1-d2`, `j1-j3`, `f1-f9`, `a1-a8` with front/back `smallImgs` arrays)<br>L248-267: `STATE` controller & `getCategoryGroup()` mapping<br>L269-327: `getFilteredAndSortedProducts()` engine<br>L329-410: `renderProductGrid()` with section headers grouping<br>L412-470: `renderActiveFilterChips()`<br>L471-550: Filter state setters & clear methods<br>L551-600: Live auto-suggest search overlay<br>L601-628: `fetchOnlineProducts()`, `getProductById()`, DOM init |
| [`sproduct.html`](file:///c:/Antigravity%20projects/Webtech%20Project/sproduct.html) | ~200 | L1-37: Header<br>L38-67: Product Detail Layout (`#main-img`, `#small-img-box`, `#pro-title`, `#pro-price`, `#pro-size`, `#pro-qty`, `#add-to-cart-btn`)<br>L68-107: Footer<br>L108-148: `populateProductUI()` script (main image swap, interactive thumbnail click logic with active class)<br>L149-200: Related products & cart handler |
| [`cart.html`](file:///c:/Antigravity%20projects/Webtech%20Project/cart.html) | ~147 | L1-26: Header & Nav<br>L28-60: Dynamic Cart Table & Order Summary Box<br>L62-100: Footer<br>L101-147: `loadCart()`, `removeFromCart()`, `handlePayment()` |
| [`cart.js`](file:///c:/Antigravity%20projects/Webtech%20Project/cart.js) | ~206 | L1-55: `addToCart()` debounced handler & local storage sync<br>L56-87: `updateCartIcon()` & `showToast()`<br>L88-130: `updateAuthNav()` & `logoutUser()`<br>L131-206: Single Document Event Delegation for `.cart` buttons and `.pro` card navigation to `sproduct.html?id=...` |
| [`admin.html`](file:///c:/Antigravity%20projects/Webtech%20Project/admin.html) | ~524 | L1-30: Auth check & Header<br>L90-160: Add Product Form (name, category, price, tags, image, description)<br>L161-220: Products Table Section<br>L221-524: Admin submit handler, Base64 image compression, localStorage & REST API sync |
| [`server.js`](file:///c:/Antigravity%20projects/Webtech%20Project/server.js) | ~580 | L1-60: Express setup, middleware, JWT auth<br>L61-200: Auth routes (`/api/login`, `/api/register`)<br>L201-350: Products REST API (`GET /api/products`, `POST /api/products`, `DELETE /api/products/:id`) |

---

## 🏷️ 2. Key DOM IDs Quick Reference

- `#cart-count`: Counter badge in top nav showing total items in cart (all pages).
- `#header`: Fixed top navigation bar section with INSTYLE logo.
- `#navbar`: Navigation link list (`ul`).
- `#main-img`: Primary image on single product page (`sproduct.html`).
- `#small-img-box`: Secondary thumbnail gallery container under `#main-img` on `sproduct.html`.
- `#pro-title`, `#pro-price`, `#pro-cat`, `#pro-desc`, `#pro-size`, `#pro-qty`, `#add-to-cart-btn`: Detail fields in `sproduct.html`.
- `#cart-body`: Table body (`<tbody>`) in `cart.html` where cart items render dynamically.
- `#total-price`: Subtotal price in `cart.html`.
- `#grand-total`: Final order total in `cart.html` including 20,000 SSP shipping fee.
- `#shop-search-input`: Live search text input on `shop.html`.
- `#shop-sort-select`: Sort dropdown on `shop.html`.
- `#catalog-result-count`: Product result counter label on `shop.html`.
- `#active-filter-chips`: Active filter badge container on `shop.html`.

---

## 🎨 3. CSS Selector Quick Index

- `.section-p1`: Standard section padding (`40px 80px`).
- `.pro-container`: Flex container wrapping product cards (`.pro`).
- `.pro`: Individual product card component with hover shadow & red glow transition.
- `#feature .fe-box`: Centered feature badge cards with red hover borders.
- `.small-img-col`: Secondary image thumbnail container on `sproduct.html`.
- `.small-img-col img.small-img`: Individual thumbnail image with active border highlight (`.active`).
- `.category-header-title`: Full-width category group header divider inside `.pro-container`.
- `.pills-wrapper`: Container for category or price filter pill buttons.
- `.category-pill`: Individual category filter pill button (`active` class highlight).
- `.price-pill`: Individual price range filter pill button.

---

## ⚡ 4. Token-Saving Instructions for Agents

1. **Before modifying HTML layout**: Read only the specific line range in `CONTEXT.md` above.
2. **Before editing styles**: Read only the relevant line slice of `style.css` indicated in the line map above.
3. **Before modifying product rendering**: Read `productsData.js` `renderProductGrid()`.
4. **Product HTML is dynamically rendered** — never edit hardcoded product cards in `index.html` or `shop.html`. Update `PRODUCTS_DATA` in `productsData.js` instead.
