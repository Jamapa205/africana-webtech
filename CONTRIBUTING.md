# CONTRIBUTING.md - Contribution & Code Guidelines

Thank you for contributing to **Africana**! This guide outlines coding standards, UI patterns, and state conventions to ensure consistency across the codebase.

---

## 🛠️ 1. Development Principles

1. **Keep it Vanilla**: Avoid introducing external frameworks (React, Vue, Tailwind) unless explicitly requested. Rely on plain HTML5, CSS3, and ES6 JavaScript.
2. **Design First**: Every component must adhere to the design system in [`ARCHITECTURE.md`](file:///c:/Antigravity%20projects/Webtech%20Project/ARCHITECTURE.md).
3. **Preserve Cart Contract**: Any new product card added to `index.html` or `shop.html` must follow the standard `.pro` markup so `cart.js` can automatically parse item details.

---

## 📜 2. Coding Standards

### HTML Standard
- Use semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- Always include `alt` attributes on `<img>` tags.
- Use explicit `id` attributes for any elements targeted by JavaScript.

### CSS Standard
- Follow BEM-inspired naming or existing design class tokens (`.section-p1`, `.pro-container`, `.fe-box`).
- Store global colors as variables or keep hex values consistent (`#0047AB`, `#088178`, `#222222`).
- Include media query rules under the responsive section at the bottom of `style.css`.

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

---

## 🧪 3. Quality Checklist Before Committing

- [ ] All pages link correctly in header navigation (`index.html`, `shop.html`, `about.html`, `contact.html`, `cart.html`).
- [ ] Product "Add to Cart" icon click updates `#cart-count` in navbar immediately.
- [ ] Cart page renders products stored in `localStorage` without console errors.
- [ ] Responsive layout looks clean on desktop (1200px+), tablet (768px), and mobile (375px).
