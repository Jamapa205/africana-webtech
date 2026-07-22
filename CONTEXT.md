# CONTEXT.md - High-Density Token Optimization Index

This document is a compact lookup directory designed for LLMs and AI agents to locate code structures, line boundaries, DOM IDs, and CSS rules instantly without loading entire multi-hundred-line files into context.

---

## 🗂️ 1. File Line Range & Structural Index

| File Path | Total Lines | Section / Component Line Map |
| :--- | :--- | :--- |
| [`index.html`](file:///c:/Antigravity%20projects/Webtech%20Project/index.html) | ~459 | L1-30: Header & Nav<br>L32-38: Hero Section<br>L40-65: Feature Badges<br>L67-150: Featured Products<br>L152-170: Action Banner<br>L172-260: New Arrivals<br>L262-350: Small Banners<br>L352-380: Newsletter<br>L382-459: Footer |
| [`style.css`](file:///c:/Antigravity%20projects/Webtech%20Project/style.css) | ~597 | L1-42: Reset & Typography<br>L43-75: Section Padding & Buttons<br>L81-160: Header & Navbar<br>L162-220: Hero & Features<br>L222-310: Product Cards `.pro`<br>L312-400: Banner Styles<br>L402-460: Newsletter & Footer<br>L462-520: Shop & Cart Page Tables<br>L522-597: Media Queries |
| [`cart.html`](file:///c:/Antigravity%20projects/Webtech%20Project/cart.html) | ~147 | L1-26: Header & Nav<br>L28-60: Cart Table & Summary Box<br>L62-100: Footer<br>L101-144: Inline JS (`loadCart()`, `removeFromCart()`, `handlePayment()`) |
| [`cart.js`](file:///c:/Antigravity%20projects/Webtech%20Project/cart.js) | ~44 | L1-22: `addToCart(productName, price, imageUrl)`<br>L24-29: `updateCartIcon()`<br>L31-41: `.cart` Click Event Listeners<br>L43-44: `DOMContentLoaded` initializer |
| [`sproduct.html`](file:///c:/Antigravity%20projects/Webtech%20Project/sproduct.html) | ~170 | L1-26: Header<br>L28-65: Single Product Details & Image Thumbnails<br>L66-130: Related Products<br>L131-165: Footer & Thumbnail Swap Script |

---

## 🏷️ 2. Key DOM IDs Quick Reference

- `#cart-count`: Counter badge in top nav showing total items in cart (`index.html`, `shop.html`, `cart.html`, etc.).
- `#header`: Fixed top navigation bar section.
- `#navbar`: Navigation link list (`ul`).
- `#cart-body`: Table body (`<tbody>`) in `cart.html` where cart items are rendered dynamically.
- `#total-price`: Subtotal element in `cart.html`.
- `#grand-total`: Final price element in `cart.html` including shipping fee.
- `#payment-btn`: Checkout trigger button on `cart.html`.
- `#MainImg`: Large display image on single product page (`sproduct.html`).

---

## 🎨 3. CSS Selector Quick Index

- `.section-p1`: Standard section padding (`40px 80px`).
- `.pro-container`: Flex container wrapping product cards (`.pro`).
- `.pro`: Individual product card component with hover shadow & transition.
- `.fe-box`: Individual feature badge box.
- `.banner-box`: Promotional banner background containers.
- `.normal`, `.white`: Utility button styling classes.

---

## ⚡ 4. Token-Saving Instructions for Agents

1. **Before modifying HTML layout**: Read only lines 1-60 of `ARCHITECTURE.md` or the specific line range above in `CONTEXT.md`.
2. **Before editing styles**: Read only the relevant line slice of `style.css` indicated in the line map above.
3. **Before modifying cart functionality**: Read `cart.js` (44 lines) and `cart.html` L101-144.
