# README.md - Africana Modern Boutique

**Africana** is a modern, full-featured e-commerce boutique web application offering authentic African traditional apparel, accessories, handbags, belts, jewelry, and cultural luxe fashion.

🌐 **Live Site**: [https://webtech-project-tawny.vercel.app](https://webtech-project-tawny.vercel.app)
🛠️ **Admin Panel**: [https://webtech-project-tawny.vercel.app/admin.html](https://webtech-project-tawny.vercel.app/admin.html)

---

## 🚀 Technology Stack

- **Frontend Core**: HTML5 (Semantic Markup), CSS3 (Custom Responsive Styling with Flexbox & CSS Grid)
- **Scripting**: Vanilla JavaScript (ES6+) for dynamic DOM updates, product rendering, and `localStorage` cart state
- **Iconography & Fonts**: FontAwesome 5, Google Fonts (`Spartan`)
- **Backend**: Node.js + Express.js REST API (`server.js`) with JWT authentication
- **Database**: JSON flat-file (`database.json`) for product persistence
- **Deployment**: Vercel (Serverless)

---

## 📁 Repository Structure

```
Webtech Project/
├── index.html           # Main landing page (hero, features, category-grouped products, banners, newsletter)
├── shop.html            # Full product catalog with search, sort, filter pills, and category-grouped grid
├── sproduct.html        # Single product details & image gallery page
├── cart.html            # Interactive shopping cart view and checkout calculations
├── about.html           # Brand story, company video, and feature highlights
├── contact.html         # Interactive contact form, map location, and business details
├── admin.html           # Admin control panel: upload products (with tags), manage orders & users
├── login.html           # Admin login page
├── register.html        # Admin registration page
├── style.css            # Central design system stylesheet (1490+ lines)
├── productsData.js      # Product data engine: PRODUCTS_DATA, STATE, filtering, sorting, rendering
├── cart.js              # Cart persistence engine & navbar counter script
├── server.js            # Express.js REST API backend with JWT auth
├── formValidation.js    # Contact & newsletter form validation logic
├── database.json        # Flat-file product & user database
├── img/                 # Visual assets (banners, buttons, products, payment badges)
├── AGENTS.md            # Instructions and token-saving rules for AI Coding Agents
├── ARCHITECTURE.md      # In-depth technical architecture & data schema documentation
├── CONTEXT.md           # High-density token optimization lookup reference for LLMs
└── CONTRIBUTING.md      # Code style standards and contribution guidelines
```

---

## 🛍️ Boutique Category System

Products are organized into **6 distinct categories**:

| Category | Contents |
| :--- | :--- |
| 👔 Men's Collection | Traditional shirts, tunics, jeans, 2-piece sets |
| 👗 Women's Collection | Traditional dresses, gowns, blouses, skirts |
| 💼 Handbags & Bags | Handbags, clutches, shoulder bags, leather totes |
| 🎗️ Belts & Straps | Genuine leather belts, waistbands, buckle straps |
| 💎 Jewelry | Cowrie shell necklaces, beads, bangles, earrings |
| 👑 Cultural Luxe | Ceremonial suits, luxury VIP statement outfits |

---

## 🔍 Search, Filter & Sort System

The shop page features a full multi-facet discovery engine:
- **Live Search Bar**: Searches product names, categories, descriptions, and searchable `tags` arrays in real-time with an auto-suggest overlay popup.
- **Category Filter Pills**: One-click filtering per boutique category.
- **Price Range Pills**: Filter by `< SSP 50,000`, `SSP 50k–150k`, or `> SSP 150,000`.
- **Sort Dropdown**: Featured, Price Low–High, Price High–Low, Newest Arrivals, Name A–Z.
- **Active Filter Chips**: Display active filters with one-click removal and a "Clear All" button.
- **Category-Grouped Grid**: In the default Featured view, products of the same category appear together under clean category section headers.

---

## 🌐 Pages Overview

1. **Home (`index.html`)**: Features daily promotions, value proposition boxes, category-grouped product showcase, seasonal discount banners, newsletter signup, and footer.
2. **Shop (`shop.html`)**: Full catalog grid with real-time search, multi-facet filtering, sorting, and category-grouped product sections.
3. **Single Product (`sproduct.html`)**: Detailed view with high-res photo switching, size selection, quantity adjusters, item details, and related product recommendations. Loaded dynamically from `PRODUCTS_DATA` using `?id=` URL parameter.
4. **Cart (`cart.html`)**: Dynamic shopping cart displaying line item photos, titles, prices, quantity subtotals, flat shipping calculation (20,000 SSP), and checkout modal prompt.
5. **About (`about.html`)**: Brand origin details, embedded video element, company commitments, app download prompts, and service guarantees.
6. **Contact (`contact.html`)**: Customer service touchpoints, operating hours, interactive Google Maps frame, and feedback form.
7. **Admin (`admin.html`)**: Authenticated admin panel for uploading new products (name, category, price, search tags, description, image), managing existing products, viewing orders, and managing users.

---

## 🛒 Cart & State System

The shopping cart relies on `localStorage` key `'cart'`, maintaining an array of JSON objects:

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

Custom admin-uploaded products are stored in `localStorage` key `'africana_custom_products'` as Base64 Data URLs for Vercel serverless compatibility.

Cart counts are automatically synchronized across all header navigation bars (`#cart-count`) upon page load and item additions.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start the backend server
node server.js

# Or run with nodemon for live reload
npx nodemon server.js
```

Then open `http://localhost:3000` in your web browser.

For static-only frontend testing:
```bash
npx serve .
```

---

## 🚀 Deployment

```bash
npx vercel --prod --yes
```

> **Note**: Vercel uses an ephemeral filesystem. Product images uploaded via the admin panel are stored as Base64 in `localStorage` rather than as server files, ensuring they persist across Lambda cold starts.
