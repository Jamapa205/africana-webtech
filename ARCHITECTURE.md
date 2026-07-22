# ARCHITECTURE.md - Technical Architecture & Specs

This document provides a comprehensive technical overview of the **Africana** e-commerce codebase, serving as a single source of truth for design tokens, component architecture, data models, and CSS design system guidelines.

---

## 🎨 1. Design System Tokens

### Palette
| Token Name | Hex / Value | Usage |
| :--- | :--- | :--- |
| `--primary-blue` | `#0047AB` | Header navigation bar background, primary branding |
| `--accent-teal` | `#088178` | Hover accents, secondary buttons, active link color, ratings |
| `--text-dark` | `#222222` | Headings (`h1`, `h2`, `h4`, `h6`) and key text |
| `--text-muted` | `#465b52` | Body text (`p`), descriptions |
| `--bg-light-blue` | `#e3e6f3` | Page body background, card backgrounds |
| `--bg-banner-red` | `#ef3636` | Sale highlights, promotional callouts |
| `--bg-card` | `#fddde4` (f1), `#cdebbc` (f2), etc. | Feature box background tints |

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
  <div class="pro">
      <img src="img/products/f1.png" alt="">
      <div class="des">
          <span>Africana</span>
          <h5>Product Name</h5>
          <div class="star">
              <i class="fas fa-star"></i>...
          </div>
          <h4>SSP 150000</h4>
      </div>
      <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
  </div>
  ```
- **Behavior**: Clicking `.cart` triggers event listener in `cart.js` which extracts title, price, and image URL from the DOM card parent `.pro`.

### C. Shopping Cart Table (`#cart`)
- **Table Body**: `<tbody id="cart-body">` dynamically populated by `loadCart()` in `cart.html`.
- **Calculations**:
  - Item subtotal = `price * quantity`
  - Total sum = `sum(item subtotals)`
  - Shipping flat rate = `20,000 SSP`
  - Grand total = `Total sum + 20,000`

---

## 💾 3. Data Schema & State Management

### Cart Storage Model (`localStorage.getItem('cart')`)
```typescript
interface CartItem {
    name: string;        // Product title extracted from .des h5
    price: number;       // Numeric price in SSP
    imageUrl: string;    // Image relative or absolute URL
    quantity: number;    // Quantity count (default 1)
}

type CartState = CartItem[];
```

---

## 📱 4. Responsive Breakpoints

Defined in [`style.css`](file:///c:/Antigravity%20projects/Webtech%20Project/style.css):
1. **Tablet / Small Desktop (`@media (max-width: 799px)`)**:
   - Navigation transitions or responsive stack
   - Section padding reduced to `40px`
2. **Mobile (`@media (max-width: 477px)`)**:
   - Product container stacks full width
   - Header & hero text scale down (`h1`: `38px`, `h2`: `32px`)
