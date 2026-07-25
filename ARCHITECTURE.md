# ARCHITECTURE.md - Technical Architecture & Specs

This document provides a comprehensive technical overview of the **Africana Modern Boutique** e-commerce codebase, serving as a single source of truth for design tokens, component architecture, data models, and CSS design system guidelines.

---

## 🎨 1. Design System Tokens

### Palette
| Token Name | Hex / Value | Usage |
| :--- | :--- | :--- |
| `--primary-blue` | `#0047AB` | Header navigation bar background, primary branding, category headers |
| `--accent-teal` | `#088178` | Hover accents, secondary buttons, active link color, ratings, search highlights |
| `--text-dark` | `#222222` | Headings (`h1`, `h2`, `h4`, `h6`) and key text |
| `--text-muted` | `#465b52` | Body text (`p`), descriptions |
| `--bg-light-blue` | `#e3e6f3` | Page body background, card backgrounds |
| `--bg-banner-red` | `#ef3636` | Sale highlights, promotional callouts |
| `--bg-card` | `#fddde4` (f1), `#cdebbc` (f2), etc. | Feature box background tints |
| `--slate-border` | `#e2e8f0` | Category header dividers, search input borders |
| `--blue-active` | `linear-gradient(135deg, #0047AB 0%, #002d72 100%)` | Active filter pills & category pills |

### Typography & Layout Spacing
- **Primary Font**: `"Spartan", sans-serif` (Loaded via Google Fonts, weights 100-900).
- **Global Headings**:
  - `h1`: `50px` / line-height `64px`
  - `h2`: `46px` / line-height `54px`
  - `h4`: `20px`
  - `p`: `16px`, color `#465b52`
- **Standard Spacing Utilities**:
  - `.section-p1`: `padding: 40px 80px`
  - `.section-m1`: `margin: 40px 0`

---

## 📦 2. Component System Specifications

### A. Navigation Header (`#header`)
- **Container**: `<section id="header">`
- **Logo**: `<img src="img/logo.png" class="logo">`
- **Navbar Links**: `<ul id="navbar">` containing `<li><a href="...">...</a></li>`
- **Cart Badge**: `<span id="cart-count">0</span>` inside the cart link `<a>`.

### B. Product Cards (`.pro`)
- **Structure**:
  ```html
  <div class="pro" data-id="f1">
      <img src="img/products/f1.png" alt="Product Name">
      <div class="des">
          <span>Men's Collection</span>
          <h5>Lori mens tradional wear</h5>
          <div class="star">
              <i class="fas fa-star"></i>...
          </div>
          <h4>SSP 150000</h4>
      </div>
      <a href="javascript:void(0);"><i class="fal fa-shopping-cart cart"></i></a>
  </div>
  ```
- **`data-id` attribute**: Required on every `.pro` card. `cart.js` reads this to look up full product data in `PRODUCTS_DATA`.
- **Behavior**: Clicking `.cart` triggers event listener in `cart.js` which resolves product via `data-id` → `PRODUCTS_DATA` lookup, then stores in `localStorage`.
- **Rendering**: All product cards are **dynamically rendered** by `renderProductGrid()` in `productsData.js`. Do NOT hardcode cards in HTML.

### C. Category Header Dividers (`.category-header-title`)
- **Purpose**: Full-width section break within `.pro-container` grid, inserted between different product category groups when showing all products.
- **Structure**:
  ```html
  <div class="category-header-title">
      <h3><i class="fas fa-gem"></i> Jewelry Collection</h3>
  </div>
  ```
- **Behavior**: Only rendered when `STATE.activeCategory === 'all'` and `STATE.sortBy === 'featured'`.

### D. Search & Filter Controls (`#shop-controls`)
- **Search Bar** (`#shop-search-input`): Real-time text search against product name, category, description, and tags array.
- **Sort Dropdown** (`#shop-sort-select`): Controls `STATE.sortBy`. Values: `featured`, `price-asc`, `price-desc`, `newest`, `name-asc`.
- **Category Pills** (`.category-pill[data-cat]`): Triggers `setCategoryFilter(cat)`. Values: `all`, `men`, `women`, `bags`, `belts`, `jewelry`, `luxe`.
- **Price Range Pills** (`.price-pill[data-price]`): Triggers `setPriceFilter(range)`. Values: `all`, `under-50k`, `50k-150k`, `over-150k`.
- **Active Filter Chips** (`#active-filter-chips`): Dynamically rendered by `renderActiveFilterChips()`.
- **Live Auto-Suggest Overlay** (`#search-suggestions-overlay`): Appended dynamically to search input parent. Shows top 5 matches with thumbnail, name, category, price.

### E. Shopping Cart Table (`#cart`)
- **Table Body**: `<tbody id="cart-body">` dynamically populated by `loadCart()` in `cart.html`.
- **Calculations**:
  - Item subtotal = `price * quantity`
  - Total sum = `sum(item subtotals)`
  - Shipping flat rate = `20,000 SSP`
  - Grand total = `Total sum + 20,000`

---

## 💾 3. Data Schema & State Management

### Product Data Model (`PRODUCTS_DATA` in `productsData.js`)
```typescript
interface Product {
    id: string;              // Unique ID e.g. "f1", "a3", "p_1690000000000"
    name: string;            // Display name
    category: string;        // Display category e.g. "Men's Collection", "Jewelry"
    categoryGroup: string;   // Filter key: 'men' | 'women' | 'bags' | 'belts' | 'jewelry' | 'luxe'
    price: number;           // Numeric price in SSP
    tags: string[];          // Searchable tag array e.g. ["jeans", "cotton", "blue"]
    mainImg: string;         // Primary image URL or Base64 Data URL
    smallImgs: string[];     // Gallery thumbnail URLs
    description: string;     // Full product description paragraph
    isPlaceholder?: boolean; // true if product is a demo/placeholder item
    createdAt?: string;      // ISO timestamp (for admin uploads)
}
```

### Filter State Model (`STATE` in `productsData.js`)
```typescript
interface FilterState {
    activeCategory: string;  // 'all' | 'men' | 'women' | 'bags' | 'belts' | 'jewelry' | 'luxe'
    searchQuery: string;     // Text search string
    priceFilter: string;     // 'all' | 'under-50k' | '50k-150k' | 'over-150k'
    sortBy: string;          // 'featured' | 'price-asc' | 'price-desc' | 'newest' | 'name-asc'
}
```

### Cart Storage Model (`localStorage.getItem('cart')`)
```typescript
interface CartItem {
    name: string;        // Product title
    price: number;       // Numeric price in SSP
    imageUrl: string;    // Image relative or absolute URL
    quantity: number;    // Quantity count (default 1)
}
type CartState = CartItem[];
```

### Custom Admin Products (`localStorage.getItem('africana_custom_products')`)
```typescript
interface CustomProduct extends Product {
    mainImg: string;     // Always Base64 Data URL (data:image/jpeg;base64,...)
}
type CustomProducts = CustomProduct[];
```

---

## 📱 4. Responsive Breakpoints

Defined in [`style.css`](file:///c:/Antigravity%20projects/Webtech%20Project/style.css):
1. **Tablet / Small Desktop (`@media (max-width: 799px)`)**:
   - Navigation transitions or responsive stack
   - Section padding reduced to `40px`
   - Search bar and sort dropdown stack vertically
2. **Mobile (`@media (max-width: 477px)`)**:
   - Product container stacks full width
   - Header & hero text scale down (`h1`: `38px`, `h2`: `32px`)
   - Filter pills wrap to multiple rows

---

## 🚀 5. Deployment

- **Platform**: Vercel (Serverless / Static hosting)
- **Live URL**: [https://webtech-project-tawny.vercel.app](https://webtech-project-tawny.vercel.app)
- **Admin Panel**: [https://webtech-project-tawny.vercel.app/admin.html](https://webtech-project-tawny.vercel.app/admin.html)
- **Deploy Command**: `npx vercel --prod --yes`
- **Note**: Vercel uses ephemeral filesystem — product images uploaded via admin are stored as Base64 in `localStorage`, not as server files.
