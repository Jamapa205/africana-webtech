# Africana E-Commerce Web Platform

**Africana** is a modern, responsive e-commerce web application specializing in authentic African traditional apparel and apparel accessories.

---

## 🚀 Technology Stack

- **Frontend Core**: HTML5 (Semantic Markup), CSS3 (Custom Responsive Styling with Flexbox & CSS Grid)
- **Scripting**: Vanilla JavaScript (ES6+) for dynamic DOM updates and `localStorage` cart state
- **Iconography & Fonts**: FontAwesome 5, Google Fonts (`Spartan`)
- **Backend/State**: Client-side `localStorage` persistence

---

## 📁 Repository Structure

```
Webtech Project/
├── index.html          # Main landing page (hero, features, products, banners, newsletter)
├── shop.html           # Full product catalog page with pagination
├── sproduct.html       # Single product details & image gallery page
├── cart.html           # Interactive shopping cart view and checkout calculations
├── about.html          # Brand story, company video, and feature highlights
├── contact.html        # Interactive contact form, map location, and business details
├── style.css           # Central design system stylesheet (590+ lines)
├── cart.js             # Cart persistence engine & navbar counter script
├── formValidation.js    # Contact & newsletter form validation logic
├── img/                # Visual assets (banners, buttons, products, payment badges)
├── AGENTS.md           # Instructions and token-saving rules for AI Coding Agents
├── ARCHITECTURE.md     # In-depth technical architecture & data schema documentation
├── CONTEXT.md          # High-density token optimization lookup reference for LLMs
└── CONTRIBUTING.md     # Code style standards and contribution guidelines
```

---

## 🌐 Pages Overview

1. **Home (`index.html`)**: Features daily promotions, value proposition boxes, top-selling product showcase, seasonal discount banners, new arrival gallery, newsletter signup, and page footer.
2. **Shop (`shop.html`)**: Product showcase grid displaying available traditional wear catalog items with page pagination controls.
3. **Single Product (`sproduct.html`)**: Detailed view featuring high-res product photo switching, size selection dropdowns, quantity adjusters, item details, and related product recommendations.
4. **Cart (`cart.html`)**: Dynamic shopping cart displaying line item photos, titles, prices, quantity subtotals, flat shipping calculation (20,000 SSP), and checkout modal prompt.
5. **About (`about.html`)**: Brand origin details, embedded video element, company commitments, app download prompts, and service guarantees.
6. **Contact (`contact.html`)**: Customer service touchpoints, operating hours, interactive Google Maps location frame, and feedback form.

---

## 🛒 Cart & State System

The shopping cart relies on `localStorage` key `'cart'`, maintaining an array of JSON objects structured as follows:

```json
[
  {
    "name": "Lori mens tradional wear",
    "price": 150000,
    "imageUrl": "img/products/f1.png",
    "quantity": 1
  }
]
```

Cart counts are automatically synchronized across header navigation bars (`#cart-count`) upon page load and item additions.

---

## 💻 Local Preview & Development

Because this project uses static HTML, CSS, and JS, you can run it locally with any static web server:

Using Node / npx:
```bash
npx serve .
```

Or Python:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your web browser.
