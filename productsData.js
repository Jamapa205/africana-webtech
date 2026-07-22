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
    }
};

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
            }
        }
    } catch (err) {
        console.log("Using offline product cache.");
    }
}

// Fetch online products when script loads
fetchOnlineProducts();

// Helper function to get product by ID or default to f1
function getProductById(id) {
    if (!id || !PRODUCTS_DATA[id]) {
        return PRODUCTS_DATA["f1"];
    }
    return PRODUCTS_DATA[id];
}
