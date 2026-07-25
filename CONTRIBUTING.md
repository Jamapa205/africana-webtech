# CONTRIBUTING.md - Contribution & Code Guidelines

Thank you for contributing to **Africana Modern Boutique**! This guide outlines coding standards, UI patterns, and state conventions to ensure consistency across the codebase.

---

## 🛠️ 1. Development Principles

1. **Keep it Vanilla**: Avoid introducing external frameworks (React, Vue, Tailwind) unless explicitly requested. Rely on plain HTML5, CSS3, and ES6 JavaScript.
2. **Design First**: Every component must adhere to the design system in [`ARCHITECTURE.md`](file:///c:/Antigravity%20projects/Webtech%20Project/ARCHITECTURE.md).
3. **Never Hardcode Product Cards**: All product cards are rendered dynamically by `renderProductGrid()` in `productsData.js`. Update `PRODUCTS_DATA` — do NOT add static `.pro` cards in `index.html` or `shop.html`.
4. **Preserve Cart Contract**: Every product must have a `data-id` attribute on the `.pro` card and a matching entry in `PRODUCTS_DATA` so `cart.js` can resolve product details.
5. **Tag New Products**: When adding products to `PRODUCTS_DATA`, always include a `tags` array with relevant searchable keywords (e.g. `["jeans", "denim", "blue", "men"]`).

---

## 📜 2. Coding Standards

### HTML Standard
- Use semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- Always include `alt` attributes on `<img>` tags.
- Use explicit `id` attributes for any elements targeted by JavaScript.
- Never duplicate product HTML — products are dynamically rendered.

### CSS Standard
- Follow BEM-inspired naming or existing design class tokens (`.section-p1`, `.pro-container`, `.fe-box`, `.category-header-title`).
- Store global colors as variables or keep hex values consistent (`#0047AB`, `#088178`, `#222222`, `#e2e8f0`).
- Include media query rules under the responsive section at the bottom of `style.css`.
- Use `cubic-bezier(0.16, 1, 0.3, 1)` for smooth physics-based transitions on interactive elements.

### JavaScript Standard
- Write clean ES6+ code.
- Always handle missing elements gracefully with defensive checks:
  ```javascript
  const countEl = document.getElementById('cart-count');
  if (countEl) {
      countEl.textContent = cartCount;
  }
  ```
- Use `localStorage` key `'cart'` exclusively for cart state synchronization.
- Use `localStorage` key `'africana_custom_products'` for admin-uploaded product persistence.
- When modifying `STATE` values, always call `renderProductGrid()` afterwards to update the UI.

### Adding a New Product
1. Add to `PRODUCTS_DATA` in `productsData.js`:
   ```javascript
   "new_id": {
       id: "new_id",
       name: "Product Name",
       category: "Men's Collection",       // Display name
       categoryGroup: "men",               // Filter key
       price: 120000,                      // Numeric SSP
       tags: ["men", "shirt", "cotton"],   // Searchable tags
       mainImg: "img/products/newimg.jpg",
       smallImgs: ["img/products/newimg.jpg"],
       description: "Full product description here."
   }
   ```
2. Add the product image to `img/products/`.
3. Ensure `categoryGroup` matches one of: `men`, `women`, `bags`, `belts`, `jewelry`, `luxe`.

---

## 🧪 3. Quality Checklist Before Committing

- [ ] All pages link correctly in header navigation (`index.html`, `shop.html`, `about.html`, `contact.html`, `cart.html`).
- [ ] Product "Add to Cart" icon click updates `#cart-count` in navbar immediately.
- [ ] Cart page renders products stored in `localStorage` without console errors.
- [ ] Responsive layout looks clean on desktop (1200px+), tablet (768px), and mobile (375px).
- [ ] Search bar filters products correctly by name, category, and tags.
- [ ] Category pills correctly show/hide products by `categoryGroup`.
- [ ] `sproduct.html?id=<product_id>` correctly loads the right product detail from `PRODUCTS_DATA`.
- [ ] Admin panel form correctly saves name, category, tags, price, description, and Base64 image to `africana_custom_products` in `localStorage`.
