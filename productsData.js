// Centralized Product Database for Africana E-Commerce Platform

let PRODUCTS_DATA = {
    "f1": {
        id: "f1",
        name: "Lori mens tradional wear",
        category: "Africana / Men's Traditional",
        price: 150000,
        mainImg: "img/products/f1.png",
        smallImgs: ["img/products/f1.png", "img/products/f3.png", "img/products/f8.jpg"],
        description: "Handcrafted traditional men's tunic shirt featuring intricate blue and dark-toned embroidery along the neckline and front chest placket. Tailored from 100% premium breathable cotton, this garment provides regal comfort and authentic heritage styling for formal cultural events, weddings, and celebrations."
    },
    "f2": {
        id: "f2",
        name: "Lori women tradional wear",
        category: "Africana / Women's Traditional",
        price: 200000,
        mainImg: "img/products/f2.jpg",
        smallImgs: ["img/products/f2.jpg", "img/products/f4.jpg", "img/products/f5.jpg"],
        description: "Elegant African women's traditional gown featuring vibrant color accents, ornate embroidery patterns along the front placket, and a graceful flowing silhouette. Made with authentic high-grade African cotton fabric designed to showcase royal elegance at cultural gatherings."
    },
    "f3": {
        id: "f3",
        name: "Havani men tradional wear",
        category: "Africana / Men's Traditional",
        price: 170000,
        mainImg: "img/products/f3.png",
        smallImgs: ["img/products/f3.png", "img/products/f1.png", "img/products/f8.jpg"],
        description: "Distinguished Havani men's traditional attire with rich gold embroidery along the neck and cuff bands. Designed with modern tailored lines for maximum comfort and commanding presence."
    },
    "f4": {
        id: "f4",
        name: "Havani women tradional wear",
        category: "Africana / Women's Traditional",
        price: 200000,
        mainImg: "img/products/f4.jpg",
        smallImgs: ["img/products/f4.jpg", "img/products/f2.jpg", "img/products/f5.jpg"],
        description: "Vibrant women's traditional gown crafted with premium patterned textiles and contrasting embroidered trims. Perfect for festive ceremonies."
    },
    "f5": {
        id: "f5",
        name: "Jieng women traditional wear",
        category: "Africana / Women's Traditional",
        price: 200000,
        mainImg: "img/products/f5.jpg",
        smallImgs: ["img/products/f5.jpg", "img/products/f2.jpg", "img/products/f4.jpg"],
        description: "Royal Jieng traditional gown showcasing bold cultural motifs, regal neckline embellishments, and breathable linen cotton."
    },
    "f6": {
        id: "f6",
        name: "Flutani",
        category: "Africana / Cultural Luxe",
        price: 300000,
        mainImg: "img/products/f6.webp",
        smallImgs: ["img/products/f6.webp", "img/products/f1.png", "img/products/f3.png"],
        description: "High-end luxury ceremonial robe featuring rich metallic threads, premium woven jacquard fabric, and flawless hand finishing."
    },
    "f7": {
        id: "f7",
        name: "Lori men 2 piece set",
        category: "Africana / Men's Traditional",
        price: 250000,
        mainImg: "img/products/f7.jpg",
        smallImgs: ["img/products/f7.jpg", "img/products/f1.png", "img/products/f3.png"],
        description: "Complete 2-piece traditional tunic and matching trouser ensemble. Features clean geometric front embroidery and relaxed athletic cut."
    },
    "f8": {
        id: "f8",
        name: "Lori men tradional tunic",
        category: "Africana / Men's Traditional",
        price: 150000,
        mainImg: "img/products/f8.jpg",
        smallImgs: ["img/products/f8.jpg", "img/products/f1.png", "img/products/f3.png"],
        description: "Classic short-sleeved traditional tunic shirt adorned with understated chest embroidery. Lightweight and breathable for daily wear."
    },
    "f9": {
        id: "f9",
        name: "Casual inspired tradition wear",
        category: "Africana / Casual Culture",
        price: 175000,
        mainImg: "img/products/f9.avif",
        smallImgs: ["img/products/f9.avif", "img/products/f1.png", "img/products/f3.png"],
        description: "Versatile casual tunic blending modern streetwear cuts with traditional African motif prints. Soft, durable, and styled for effortless daily wear."
    },
    "a1": {
        id: "a1",
        name: "cowrie shell necklace",
        category: "Africana / Accessories",
        price: 45000,
        mainImg: "img/products/a1.webp",
        smallImgs: ["img/products/a1.webp", "img/products/a3.jpg", "img/products/a5.webp"],
        description: "Handcrafted authentic cowrie shell necklace strung on durable natural twine. Symbolizing prosperity and royal African heritage."
    },
    "a2": {
        id: "a2",
        name: "Tenal pair",
        category: "Africana / Accessories",
        price: 100000,
        mainImg: "img/products/a2.jpg",
        smallImgs: ["img/products/a2.jpg", "img/products/a4.jpg", "img/products/a6.jpg"],
        description: "Handcrafted traditional brass and beaded cuff set. Beautifully polished with authentic tribal engravings."
    },
    "a3": {
        id: "a3",
        name: "Rememberance beads",
        category: "Africana / Accessories",
        price: 45000,
        mainImg: "img/products/a3.jpg",
        smallImgs: ["img/products/a3.jpg", "img/products/a1.webp", "img/products/a5.webp"],
        description: "Artisanal glass bead necklace celebrating traditional African colorways and ceremonial significance."
    }
};

// Dynamic Grid Renderer for Shop and Home Pages
function renderProductGrid() {
    const containers = document.querySelectorAll('.pro-container');
    if (!containers || containers.length === 0) return;

    // Load custom products stored locally by Admin
    const localCustom = JSON.parse(localStorage.getItem('africana_custom_products')) || [];
    localCustom.forEach(p => {
        if (p && p.id) {
            PRODUCTS_DATA[p.id] = p;
        }
    });

    const allProducts = Object.values(PRODUCTS_DATA);
    if (allProducts.length === 0) return;

    containers.forEach((container) => {
        let itemsToRender = allProducts;
        if (container.id === 'home-featured') {
            itemsToRender = allProducts.slice(0, 8);
        } else if (container.id === 'home-new') {
            itemsToRender = allProducts.slice(8);
        }

        if (!itemsToRender || itemsToRender.length === 0) itemsToRender = allProducts;

        container.innerHTML = itemsToRender.map(p => `
            <div class="pro" data-id="${p.id}">
                <img src="${p.mainImg}" alt="${p.name}">
                <div class="des">
                    <span>${p.category || 'Africana'}</span>
                    <h5>${p.name}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>SSP ${Number(p.price).toLocaleString()}</h4>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
        `).join('');
    });
}

// Asynchronously sync product catalog from online API
async function fetchOnlineProducts() {
    try {
        const response = await fetch('/api/products');
        if (response.ok) {
            const data = await response.json();
            if (data.success && Array.isArray(data.products)) {
                data.products.forEach(p => {
                    PRODUCTS_DATA[p.id] = {
                        id: p.id,
                        name: p.name,
                        category: p.category,
                        price: p.price,
                        mainImg: p.mainImg,
                        smallImgs: p.smallImgs || [p.mainImg],
                        description: p.description,
                        isPlaceholder: p.isPlaceholder || false
                    };
                });
                renderProductGrid();
            }
        }
    } catch (err) {
        console.log("Using offline product cache.");
    }
}

// Helper function to get product by ID or default to f1
function getProductById(id) {
    const localCustom = JSON.parse(localStorage.getItem('africana_custom_products')) || [];
    localCustom.forEach(p => {
        if (p && p.id) PRODUCTS_DATA[p.id] = p;
    });

    if (!id || !PRODUCTS_DATA[id]) {
        return PRODUCTS_DATA["f1"];
    }
    return PRODUCTS_DATA[id];
}

// Initialize dynamic grid on load
document.addEventListener('DOMContentLoaded', () => {
    renderProductGrid();
    fetchOnlineProducts();
});
