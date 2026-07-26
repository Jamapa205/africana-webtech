# AGENTS.md - AI Agent Operational Guidelines

Welcome, AI Coding Agent! This document outlines mandatory guidelines, codebase architecture, brand specifications, and token-optimization strategies for working on the **INSTYLE Modern Boutique** web repository.

---

## 1. Core Directives & Token Optimization

To preserve context quality, minimize token usage, and ensure high-precision changes, follow these strict rules:

### A. Context & Token Preservation
- **Check `CONTEXT.md` First**: Before reading entire source files, check [`CONTEXT.md`](file:///c:/Antigravity%20projects/Webtech%20Project/CONTEXT.md) for line number ranges, DOM selector indexes, and component line bounds.
- **Targeted Line Reading**: Never call `view_file` without `StartLine` and `EndLine` parameters on files over 100 lines (e.g. `style.css` or `index.html`).
- **Surgical Edits**: Use `replace_file_content` or `multi_replace_file_content` for precise updates. Never overwrite an entire file to change a few lines.
- **No Unneeded Re-scanning**: Once a file structure is inspected, rely on key symbols and line bounds instead of re-reading unchanged files.

### B. Project & Brand Rules (INSTYLE Modern Boutique)
- **Store Name & Brand**: Store rebranded from Africana to **INSTYLE** (`INSTYLE — Modern Fashion, Timeless You`). Focuses exclusively on modern boutique apparel, evening gowns, denim, suits, handbags, belts, and jewelry.
- **Logo Specifications**:
  - Logo file: `img/instyle_logo.svg`
  - Wordmark: **INSTYLE** with "IN" in Crimson Red (`#C0152A`), "STYLE" in Navy (`#0a1628`), transparent background, surrounded by a 2.5px white character stroke outline.
- **Color Palette & Aesthetics**:
  - Primary Accent & Hover Glow: **Crimson Red (`#C0152A`)**
  - Dark Navy Backgrounds: **Deep Navy (`#0a1628`)**
  - Font: Google Font `"Outfit", sans-serif`
- **Currency**: All prices MUST be formatted with the South Sudanese Pound prefix: `SSP <amount>` (e.g., `SSP 185000` -> `SSP 185,000`).
- **Icons**: Maintain FontAwesome 5 (`fa`, `fas`, `fal`, `fab`) icons.
- **Top Announcement Bar**: Permanently removed per user request.
- **State Management**: Product cart data MUST sync via `localStorage.getItem('cart')` / `localStorage.setItem('cart', ...)`.
- **Product Data Engine**: All product data lives centrally in [`productsData.js`](file:///c:/Antigravity%20projects/Webtech%20Project/productsData.js). Do NOT duplicate product cards in HTML — grids are rendered dynamically via `renderProductGrid()`.
- **Image Gallery & Secondary Views**: Products feature a `mainImg` (studio front view) and a `smallImgs` array (front, back, flared-open views). `sproduct.html` renders all secondary images as interactive thumbnails below `#main-img`.
- **Ghost Mannequin & AI Studio Routing**: All studio product images MUST be generated via Google AI Studio API using `python scripts/ai_studio_generator.py` (which connects using `GEMINI_API_KEY` from `.env`) following the rules in [`antigravity_ghost_mannequin_prompt.md`](file:///c:/Antigravity%20projects/Webtech%20Project/antigravity_ghost_mannequin_prompt.md).

---

## 2. Codebase Quick Map

| File | Purpose | Key Responsibilities |
| :--- | :--- | :--- |
| [`index.html`](file:///c:/Antigravity%20projects/Webtech%20Project/index.html) | Home Page | Hero section, centered feature badges, Shop by Collection cards, dynamically rendered product grids, footer |
| [`shop.html`](file:///c:/Antigravity%20projects/Webtech%20Project/shop.html) | Shop Catalog | Search bar, sort dropdown, 6 category pills, price range pills, active chips, category-grouped product grid |
| [`sproduct.html`](file:///c:/Antigravity%20projects/Webtech%20Project/sproduct.html) | Product Detail Page | Main product image, secondary front/back thumbnail gallery, size selector, quantity, add to cart |
| [`cart.html`](file:///c:/Antigravity%20projects/Webtech%20Project/cart.html) | Shopping Cart | Dynamic cart table, line item subtotal calculation, shipping fee (20,000 SSP), checkout handler |
| [`about.html`](file:///c:/Antigravity%20projects/Webtech%20Project/about.html) | Brand Story | INSTYLE brand background, promo video, value props, mobile app links |
| [`contact.html`](file:///c:/Antigravity%20projects/Webtech%20Project/contact.html) | Customer Support | Contact form, location info (Jebel Road, Juba), embedded map |
| [`admin.html`](file:///c:/Antigravity%20projects/Webtech%20Project/admin.html) | Admin Control Panel | Add/manage boutique products, view orders and registered users |
| [`style.css`](file:///c:/Antigravity%20projects/Webtech%20Project/style.css) | Global Design System | Outfit typography, navy `#0a1628`, red `#C0152A`, centered `#feature` boxes, `.small-img-col` gallery styles |
| [`productsData.js`](file:///c:/Antigravity%20projects/Webtech%20Project/productsData.js) | Central Product Engine | `PRODUCTS_DATA` database, `STATE` filter controller, `getCategoryGroup()`, `renderProductGrid()`, auto-suggest overlay |
| [`cart.js`](file:///c:/Antigravity%20projects/Webtech%20Project/cart.js) | Cart & Navigation | `addToCart()`, `updateCartIcon()`, global `.pro` card click handler navigating to `sproduct.html?id=...` |
| [`server.js`](file:///c:/Antigravity%20projects/Webtech%20Project/server.js) | Express REST API | Product endpoints (`GET/POST/DELETE /api/products`), auth, JWT |

---

## 3. Reorganized Product Category Architecture

The database is organized into **6 primary categories**:

| Display Category | Category Key (`mainCategory` / `categoryGroup`) | Included Products & Examples |
| :--- | :--- | :--- |
| **Dresses & Evening Gowns** | `dresses_gowns` | Mint Chiffon Maxi (`d1`), Champagne Gold Plunge Gown (`d2`), Floral Midi (`f2`), Satin Evening Gown (`f5`) |
| **Denim & Bottoms** | `denim_bottoms` | Dark Indigo Distressed Jeans (`j1`), Light Sky Blue Slash Jeans (`j2`), Washed Charcoal Black Jeans (`j3`) |
| **Shirts & Tops** | `shirts_tops` | Men's Slim Fit Oxford Shirt (`f1`), Pure Linen Casual Shirt (`f8`) |
| **Suits & Outerwear** | `suits_outerwear` | Denim Jacket (`f3`), Blazer Set (`f4`), Executive 3-Piece Suit (`f6`), Streetwear Set (`f7`), Trench Coat (`f9`) |
| **Handbags & Bags** | `handbags_bags` | Designer Leather Crossbody Handbag (`a2`) |
| **Jewelry & Accessories** | `jewelry_belts` | Gold Choker (`a1`), Layered Pearl Necklace (`a3`), Drop Earrings (`a4`), Leather Dress Belt (`a5`), Crystal Studs (`a6`), Wristlet (`a7`), Gold Chain (`a8`) |

---

## 4. Multi-Facet Search & Filter System

The catalog filter engine in `productsData.js` evaluates against a central `STATE` object:

```javascript
STATE = {
    activeCategory: 'all',   // 'all' | 'dresses_gowns' | 'denim_bottoms' | 'shirts_tops' | 'suits_outerwear' | 'handbags_bags' | 'jewelry_belts'
    searchQuery: '',          // text search matching name, category, tags, description
    priceFilter: 'all',       // 'all' | 'under-50k' | '50k-150k' | 'over-150k'
    sortBy: 'featured'        // 'featured' | 'price-asc' | 'price-desc' | 'newest' | 'name-asc'
}
```

When `sortBy === 'featured'` and `activeCategory === 'all'`, `renderProductGrid()` automatically groups products of the same category under `<div class="category-header-title">` section headers.

---

## 5. Live Production & Vercel Aliases

- **Primary Live Alias**: `https://instyle-boutique.vercel.app`
- **Secondary Live Alias**: `https://instyle-fashion.vercel.app`
- **Vercel Production Endpoint**: `https://webtech-project-tawny.vercel.app`
- **GitHub Repository**: `https://github.com/Jamapa205/africana-webtech.git`

---

## 6. Workflow Checklist for Agents

1. **Before Editing**:
   - Consult [`CONTEXT.md`](file:///c:/Antigravity%20projects/Webtech%20Project/CONTEXT.md) for line boundaries and selector indexes.
   - Inspect existing utility classes in [`style.css`](file:///c:/Antigravity%20projects/Webtech%20Project/style.css).
   - Product grids are rendered dynamically via `renderProductGrid()` in `productsData.js`.
2. **During Editing**:
   - Ensure all interactive elements have explicit `id` attributes.
   - Maintain front/back secondary image arrays in `smallImgs` for products.
   - Keep JavaScript error-free by checking for element existence (`document.getElementById(...)`).
3. **Verification**:
   - Test category filtering on `shop.html` and thumbnail image switching on `sproduct.html`.
   - Ensure cart state syncs smoothly in `localStorage`.
   - Verify responsive mobile layouts (`max-width: 799px` and `477px`).
