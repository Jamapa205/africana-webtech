# AGENTS.md - AI Agent Operational Guidelines

Welcome, AI Coding Agent! This document outlines mandatory guidelines, codebase architecture, and token-optimization strategies for working on the **Africana Modern Boutique** web repository.

---

## 1. Core Directives & Token Optimization

To preserve context quality, minimize token usage, and ensure high-precision changes, follow these strict rules:

### A. Context & Token Preservation
- **Check `CONTEXT.md` First**: Before reading entire source files, check [`CONTEXT.md`](file:///c:/Antigravity%20projects/Webtech%20Project/CONTEXT.md) for line number ranges, DOM selector indexes, and component line bounds.
- **Targeted Line Reading**: Never call `view_file` without `StartLine` and `EndLine` parameters on files over 100 lines (e.g. `style.css` or `index.html`).
- **Surgical Edits**: Use `replace_file_content` or `multi_replace_file_content` for precise updates. Never overwrite an entire 400+ line file to change a few lines.
- **No Unneeded Re-scanning**: Once a file structure is inspected, rely on key symbols and line bounds instead of re-reading unchanged files.

### B. Project Preservation Rules
- **Currency**: All prices must be formatted with the South Sudanese Pound prefix: `SSP <amount>` (e.g., `SSP 150000`).
- **Typography & Styling**: Preserve Google Font `"Spartan", sans-serif` and primary brand blue `#0047AB` / teal `#088178`.
- **Icons**: Maintain FontAwesome 5 (`fa`, `fas`, `fal`, `fab`) icons.
- **State Management**: Product cart data MUST sync via `localStorage.getItem('cart')` / `localStorage.setItem('cart', ...)` using the JSON array schema:
  ```json
  [
    { "name": "Lori mens tradional wear", "price": 150000, "imageUrl": "img/products/f1.png", "quantity": 1 }
  ]
  ```
- **Custom Products**: Admin-uploaded products are stored in `localStorage.getItem('africana_custom_products')` as Base64 Data URLs for Vercel serverless compatibility.
- **Product Data**: All product logic, tagging, filtering, and sorting lives in [`productsData.js`](file:///c:/Antigravity%20projects/Webtech%20Project/productsData.js). Do NOT duplicate product data in HTML — the grid is rendered dynamically.

---

## 2. Codebase Quick Map

| File | Purpose | Key Responsibilities |
| :--- | :--- | :--- |
| [`index.html`](file:///c:/Antigravity%20projects/Webtech%20Project/index.html) | Home Page | Hero, Feature Badges, Category-Grouped Product Grids, Banners, Newsletter, Footer |
| [`shop.html`](file:///c:/Antigravity%20projects/Webtech%20Project/shop.html) | Shop Catalog | Search Bar, Sort Dropdown, Category Pills, Price Range Pills, Active Filter Chips, Category-Grouped Grid |
| [`sproduct.html`](file:///c:/Antigravity%20projects/Webtech%20Project/sproduct.html) | Product Detail | Main product view, image gallery switching, size selector, add to cart |
| [`cart.html`](file:///c:/Antigravity%20projects/Webtech%20Project/cart.html) | Shopping Cart | Dynamic cart table, line items calculation, shipping fee (20,000 SSP), checkout |
| [`about.html`](file:///c:/Antigravity%20projects/Webtech%20Project/about.html) | Brand Info | Company story, promotional video, value props, mobile app downloads |
| [`contact.html`](file:///c:/Antigravity%20projects/Webtech%20Project/contact.html) | Support / Reach Us | Contact form, embedded Google Map iframe, location info |
| [`admin.html`](file:///c:/Antigravity%20projects/Webtech%20Project/admin.html) | Admin Control Panel | Upload new products (name, category, tags, price, description, image), manage existing products, view orders & users |
| [`style.css`](file:///c:/Antigravity%20projects/Webtech%20Project/style.css) | Global Stylesheet | Core design system, layout grids, components, navigation, responsive queries, search/filter UI, category header dividers |
| [`productsData.js`](file:///c:/Antigravity%20projects/Webtech%20Project/productsData.js) | Product Data Engine | `PRODUCTS_DATA` object, `STATE` controller, `getFilteredAndSortedProducts()`, `renderProductGrid()`, category grouping with section headers, live auto-suggest overlay |
| [`cart.js`](file:///c:/Antigravity%20projects/Webtech%20Project/cart.js) | Cart Logic | `addToCart()`, `updateCartIcon()`, global event listeners for `.cart` buttons, `data-id` attribute resolution |
| [`server.js`](file:///c:/Antigravity%20projects/Webtech%20Project/server.js) | Express Backend | REST API (`GET /api/products`, `POST /api/products`, `DELETE /api/products/:id`), `tags` field handling, JWT auth |
| [`formValidation.js`](file:///c:/Antigravity%20projects/Webtech%20Project/formValidation.js) | Validation Logic | Client-side validation for contact & newsletter forms |

---

## 3. Product Category Architecture

The boutique uses **6 separated product categories**:

| Category | `categoryGroup` Key | Products |
| :--- | :--- | :--- |
| Men's Collection | `men` | Shirts, Tunics, Jeans, 2-Piece Sets (`f1`, `f3`, `f7`, `f8`) |
| Women's Collection | `women` | Dresses, Gowns, Blouses, Skirts (`f2`, `f4`, `f5`) |
| Handbags & Bags | `bags` | Handbags, Clutches, Totes, Purses |
| Belts & Straps | `belts` | Leather Belts, Waistbands, Buckle Straps |
| Jewelry | `jewelry` | Cowrie Necklaces, Beads, Bangles, Earrings (`a1`–`a8`) |
| Cultural Luxe | `luxe` | Ceremonial Suits & Statement Sets (`f6`, `f9`) |

---

## 4. Search & Filter System

The multi-facet catalog filter system in `productsData.js` uses a central `STATE` object:

```javascript
STATE = {
    activeCategory: 'all',   // categoryGroup key or 'all'
    searchQuery: '',          // text search against name, category, tags, description
    priceFilter: 'all',       // 'all' | 'under-50k' | '50k-150k' | 'over-150k'
    sortBy: 'featured'        // 'featured' | 'price-asc' | 'price-desc' | 'newest' | 'name-asc'
}
```

When `sortBy === 'featured'` and `activeCategory === 'all'`, the grid automatically groups products of the same category together under `<div class="category-header-title">` section headers.

---

## 5. Workflow Checklist for Agents

1. **Before Editing**:
   - Locate the target section in [`CONTEXT.md`](file:///c:/Antigravity%20projects/Webtech%20Project/CONTEXT.md) to identify line numbers.
   - Inspect existing class names in [`style.css`](file:///c:/Antigravity%20projects/Webtech%20Project/style.css) before introducing new CSS utility classes.
   - Product rendering is done by `renderProductGrid()` in `productsData.js` — do NOT hardcode product cards in HTML.
2. **During Editing**:
   - Ensure all interactive elements have explicit `id` attributes.
   - Follow semantic HTML5 standards (`<section>`, `<article>`, `<header>`, `<footer>`, `<nav>`).
   - Keep JavaScript error-free by checking for element existence (`document.getElementById(...)`) before attaching listeners.
   - When adding new products via admin panel, tags are comma-separated strings that are split and stored as arrays.
3. **Verification**:
   - Verify cart storage integrity after modifying cart scripts or html pages.
   - Check mobile layout responsiveness under `@media (max-width: 799px)` & `@media (max-width: 477px)`.
   - After search/filter changes, verify the `renderProductGrid()` output reflects all facet states correctly.
