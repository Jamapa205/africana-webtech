const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 8000;
const JWT_SECRET = 'africana_super_secret_jwt_key_2026';
const DB_FILE = path.join(__dirname, 'database.json');
const UPLOADS_DIR = path.join(__dirname, 'uploads');

// Ensure uploads folder exists
if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use('/uploads', express.static(UPLOADS_DIR));

// Configure Multer for Image Uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_DIR);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname) || '.jpg';
        cb(null, 'product-' + uniqueSuffix + ext);
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'), false);
        }
    }
});

// Seed Initial Data
const SEED_PRODUCTS = [
    {
        id: "f1",
        name: "Lori mens tradional wear",
        category: "Africana / Men's Traditional",
        price: 150000,
        mainImg: "img/products/f1.png",
        smallImgs: ["img/products/f1.png", "img/products/f3.png", "img/products/f8.jpg"],
        description: "Handcrafted traditional men's tunic shirt featuring intricate blue and dark-toned embroidery along the neckline and front chest placket. Tailored from 100% premium breathable cotton, this garment provides regal comfort and authentic heritage styling for formal cultural events, weddings, and celebrations.",
        isPlaceholder: true,
        createdAt: new Date().toISOString()
    },
    {
        id: "f2",
        name: "Lori women tradional wear",
        category: "Africana / Women's Traditional",
        price: 200000,
        mainImg: "img/products/f2.jpg",
        smallImgs: ["img/products/f2.jpg", "img/products/f4.jpg", "img/products/f5.jpg"],
        description: "Elegant African women's traditional gown featuring vibrant color accents, ornate embroidery patterns along the front placket, and a graceful flowing silhouette. Made with authentic high-grade African cotton fabric designed to showcase royal elegance at cultural gatherings.",
        isPlaceholder: true,
        createdAt: new Date().toISOString()
    },
    {
        id: "f3",
        name: "Havani men tradional wear",
        category: "Africana / Men's Traditional",
        price: 170000,
        mainImg: "img/products/f3.png",
        smallImgs: ["img/products/f3.png", "img/products/f1.png", "img/products/f8.jpg"],
        description: "Refined men's tunic shirt styled with subtle contrast stitching, tailored mandarin collar, and classic button placket. Ideal for modern African men seeking comfort combined with authentic heritage design.",
        isPlaceholder: true,
        createdAt: new Date().toISOString()
    },
    {
        id: "f4",
        name: "Havani women tradional wear",
        category: "Africana / Women's Traditional",
        price: 200000,
        mainImg: "img/products/f4.jpg",
        smallImgs: ["img/products/f4.jpg", "img/products/f2.jpg", "img/products/f5.jpg"],
        description: "Stunning African women's ceremonial dress designed with vibrant heritage patterns, structured bodice, and comfortable flared skirt for festive occasions and family celebrations.",
        isPlaceholder: true,
        createdAt: new Date().toISOString()
    },
    {
        id: "f5",
        name: "Jieng women traditional wear",
        category: "Africana / Women's Traditional",
        price: 180000,
        mainImg: "img/products/f5.jpg",
        smallImgs: ["img/products/f5.jpg", "img/products/f2.jpg", "img/products/f4.jpg"],
        description: "Authentic Jieng women's traditional garment featuring handcrafted beadwork details and comfortable lightweight cotton weave suitable for celebrations, weddings, and cultural gatherings.",
        isPlaceholder: true,
        createdAt: new Date().toISOString()
    },
    {
        id: "f6",
        name: "Flutani",
        category: "Africana / Cultural Luxe",
        price: 300000,
        mainImg: "img/products/f6.webp",
        smallImgs: ["img/products/f6.webp", "img/products/f1.png", "img/products/f3.png"],
        description: "High-fashion luxury African ceremonial outfit featuring rich woven textures, metallic thread accents, and hand-tailored borders designed for distinguished gentlemen and formal galas.",
        isPlaceholder: true,
        createdAt: new Date().toISOString()
    },
    {
        id: "f7",
        name: "Damo",
        category: "Africana / Men's Traditional",
        price: 195000,
        mainImg: "img/products/f7.jpg",
        smallImgs: ["img/products/f7.jpg", "img/products/f8.jpg", "img/products/f1.png"],
        description: "Distinguished men's traditional suit tailored with crisp lines, mandarin collar, and subtle contrast embroidery along the cuffs and chest, representing modern African pride.",
        isPlaceholder: true,
        createdAt: new Date().toISOString()
    },
    {
        id: "f8",
        name: "Jieng men traditional wear",
        category: "Africana / Men's Traditional",
        price: 160000,
        mainImg: "img/products/f8.jpg",
        smallImgs: ["img/products/f8.jpg", "img/products/f7.jpg", "img/products/f1.png"],
        description: "Classic men's short-sleeve traditional tunic crafted with clean minimalist stitching and breathable fabric tailored for warm climates and everyday elegance.",
        isPlaceholder: true,
        createdAt: new Date().toISOString()
    },
    {
        id: "f9",
        name: "Casual inspired tradition wear",
        category: "Africana / Casual Culture",
        price: 175000,
        mainImg: "img/products/f9.avif",
        smallImgs: ["img/products/f9.avif", "img/products/f1.png", "img/products/f3.png"],
        description: "Versatile casual tunic blending modern streetwear cuts with traditional African motif prints. Soft, durable, and styled for effortless daily wear.",
        isPlaceholder: true,
        createdAt: new Date().toISOString()
    },
    {
        id: "a1",
        name: "cowrie shell necklace",
        category: "Africana / Accessories",
        price: 45000,
        mainImg: "img/products/a1.webp",
        smallImgs: ["img/products/a1.webp", "img/products/a3.jpg", "img/products/a5.webp"],
        description: "Handcrafted authentic cowrie shell necklace strung on durable natural twine. Symbolizing prosperity and royal African heritage, it serves as an iconic statement piece.",
        isPlaceholder: true,
        createdAt: new Date().toISOString()
    },
    {
        id: "a2",
        name: "Tenal pair",
        category: "Africana / Jewelry & Accessories",
        price: 100000,
        mainImg: "img/products/a2.jpg",
        smallImgs: ["img/products/a2.jpg", "img/products/a4.jpg", "img/products/a6.jpg"],
        description: "Handcrafted traditional brass and beaded cuff set. Beautifully polished with authentic tribal engravings, designed to complement any traditional apparel.",
        isPlaceholder: true,
        createdAt: new Date().toISOString()
    },
    {
        id: "a3",
        name: "Rememberance beads",
        category: "Africana / Cultural Jewelry",
        price: 45000,
        mainImg: "img/products/a3.jpg",
        smallImgs: ["img/products/a3.jpg", "img/products/a1.webp", "img/products/a5.webp"],
        description: "Vibrant multi-colored beaded necklace crafted using traditional glass beads. Worn during cultural dances, festivities, and ancestral remembrance ceremonies.",
        isPlaceholder: true,
        createdAt: new Date().toISOString()
    },
    {
        id: "a4",
        name: "lori earings",
        category: "Africana / Women's Jewelry",
        price: 15000,
        mainImg: "img/products/a4.jpg",
        smallImgs: ["img/products/a4.jpg", "img/products/a6.jpg", "img/products/a2.jpg"],
        description: "Lightweight handcrafted hoop earrings featuring subtle African wirework detail and polished metallic finish.",
        isPlaceholder: true,
        createdAt: new Date().toISOString()
    },
    {
        id: "a5",
        name: "Africa bangles",
        category: "Africana / Accessories",
        price: 75000,
        mainImg: "img/products/a5.webp",
        smallImgs: ["img/products/a5.webp", "img/products/a2.jpg", "img/products/a7.webp"],
        description: "Set of stacked wooden and brass bangles wrapped with vibrant traditional thread patterns, perfect for adding African flair to any outfit.",
        isPlaceholder: true,
        createdAt: new Date().toISOString()
    },
    {
        id: "a6",
        name: "Tani earings",
        category: "Africana / Jewelry",
        price: 30000,
        mainImg: "img/products/a6.jpg",
        smallImgs: ["img/products/a6.jpg", "img/products/a4.jpg", "img/products/a2.jpg"],
        description: "Statement drop earrings adorned with carved bone and polished beads, embodying authentic artisanal craftsmanship.",
        isPlaceholder: true,
        createdAt: new Date().toISOString()
    },
    {
        id: "a7",
        name: "Madino Bracelet",
        category: "Africana / Jewelry",
        price: 55000,
        mainImg: "img/products/a7.webp",
        smallImgs: ["img/products/a7.webp", "img/products/a2.jpg", "img/products/a5.webp"],
        description: "Elegantly braided leather and beaded wristlet featuring a secure brass clasp and comfortable fit.",
        isPlaceholder: true,
        createdAt: new Date().toISOString()
    },
    {
        id: "a8",
        name: "Matako necklace",
        category: "Africana / Jewelry",
        price: 100000,
        mainImg: "img/products/a8.jpg",
        smallImgs: ["img/products/a8.jpg", "img/products/a1.webp", "img/products/a3.jpg"],
        description: "Bold ceremonial statement necklace featuring cascading amber-hued beads and intricate wire-wrapped accents.",
        isPlaceholder: true,
        createdAt: new Date().toISOString()
    }
];

// Helper Functions for JSON Database Persistence
function loadDatabase() {
    if (!fs.existsSync(DB_FILE)) {
        const adminPasswordHash = bcrypt.hashSync('Dueng@123', 10);
        const initialData = {
            users: [
                {
                    id: 'usr_admin_jamapa',
                    username: 'jamapa',
                    email: 'jamapa@africana.com',
                    passwordHash: adminPasswordHash,
                    role: 'admin',
                    createdAt: new Date().toISOString()
                }
            ],
            products: SEED_PRODUCTS,
            orders: []
        };
        fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2));
        return initialData;
    }
    try {
        const raw = fs.readFileSync(DB_FILE, 'utf8');
        return JSON.parse(raw);
    } catch (err) {
        console.error("Database parse error, resetting...", err);
        return { users: [], products: SEED_PRODUCTS, orders: [] };
    }
}

function saveDatabase(data) {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// Ensure database file & admin user exist
let db = loadDatabase();

// JWT Authentication Middleware
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) return res.status(401).json({ success: false, message: 'Access token missing' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ success: false, message: 'Invalid token' });
        req.user = user;
        next();
    });
}

function requireAdmin(req, res, next) {
    authenticateToken(req, res, () => {
        if (req.user && req.user.role === 'admin') {
            next();
        } else {
            res.status(403).json({ success: false, message: 'Admin privileges required' });
        }
    });
}

// --- AUTH API ROUTES ---

// Login Endpoint (jamapa / Dueng@123)
app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required' });
    }

    db = loadDatabase();
    const user = db.users.find(u => u.username.toLowerCase() === username.toLowerCase().trim());
    if (!user) {
        return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    const validPassword = bcrypt.compareSync(password, user.passwordHash);
    if (!validPassword) {
        return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    const token = jwt.sign(
        { id: user.id, username: user.username, role: user.role },
        JWT_SECRET,
        { expiresIn: '24h' }
    );

    res.json({
        success: true,
        token: token,
        user: {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role
        }
    });
});

// Register Endpoint
app.post('/api/auth/register', (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    db = loadDatabase();

    const existingName = db.users.find(u => u.username.toLowerCase() === username.toLowerCase().trim());
    if (existingName) {
        return res.status(400).json({ success: false, message: 'Username already taken' });
    }

    const existingEmail = db.users.find(u => u.email.toLowerCase() === email.toLowerCase().trim());
    if (existingEmail) {
        return res.status(400).json({ success: false, message: 'Email address already registered' });
    }

    const passwordHash = bcrypt.hashSync(password, 10);
    const newUser = {
        id: 'usr_' + Date.now(),
        username: username.trim(),
        email: email.trim(),
        passwordHash: passwordHash,
        role: 'customer',
        createdAt: new Date().toISOString()
    };

    db.users.push(newUser);
    saveDatabase(db);

    const token = jwt.sign(
        { id: newUser.id, username: newUser.username, role: newUser.role },
        JWT_SECRET,
        { expiresIn: '24h' }
    );

    res.json({
        success: true,
        message: 'Account created successfully!',
        token: token,
        user: {
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            role: newUser.role
        }
    });
});

// --- PRODUCT API ROUTES ---

// Public: Get All Products
app.get('/api/products', (req, res) => {
    db = loadDatabase();
    res.json({ success: true, products: db.products });
});

// Public: Get Product by ID
app.get('/api/products/:id', (req, res) => {
    db = loadDatabase();
    const item = db.products.find(p => p.id === req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, product: item });
});

// Admin: Add Product with File Upload
app.post('/api/products', requireAdmin, upload.single('image'), (req, res) => {
    const { name, category, price, description } = req.body;
    
    if (!name || !price) {
        return res.status(400).json({ success: false, message: 'Name and price are required' });
    }

    db = loadDatabase();
    let mainImgUrl = 'img/products/f1.png';

    if (req.file) {
        mainImgUrl = 'uploads/' + req.file.filename;
    } else if (req.body.imageUrl) {
        mainImgUrl = req.body.imageUrl;
    }

    const newProduct = {
        id: 'p_' + Date.now(),
        name: name.trim(),
        category: category ? category.trim() : "Africana / Apparel",
        price: parseFloat(price) || 0,
        mainImg: mainImgUrl,
        smallImgs: [mainImgUrl],
        description: description ? description.trim() : "Authentic African traditional apparel handcrafted with care.",
        isPlaceholder: false,
        createdAt: new Date().toISOString()
    };

    db.products.unshift(newProduct);
    saveDatabase(db);

    res.json({ success: true, message: 'Product added successfully!', product: newProduct });
});

// Admin: Update Product
app.put('/api/products/:id', requireAdmin, upload.single('image'), (req, res) => {
    const productId = req.params.id;
    db = loadDatabase();

    const productIndex = db.products.findIndex(p => p.id === productId);
    if (productIndex === -1) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const { name, category, price, description } = req.body;
    let targetProduct = db.products[productIndex];

    if (name) targetProduct.name = name.trim();
    if (category) targetProduct.category = category.trim();
    if (price) targetProduct.price = parseFloat(price) || targetProduct.price;
    if (description) targetProduct.description = description.trim();

    if (req.file) {
        targetProduct.mainImg = 'uploads/' + req.file.filename;
        targetProduct.smallImgs = ['uploads/' + req.file.filename];
        targetProduct.isPlaceholder = false;
    }

    db.products[productIndex] = targetProduct;
    saveDatabase(db);

    res.json({ success: true, message: 'Product updated successfully!', product: targetProduct });
});

// Admin: Delete Product
app.delete('/api/products/:id', requireAdmin, (req, res) => {
    db = loadDatabase();
    const initialLen = db.products.length;
    db.products = db.products.filter(p => p.id !== req.params.id);

    if (db.products.length === initialLen) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }

    saveDatabase(db);
    res.json({ success: true, message: 'Product deleted successfully!' });
});

// --- ORDERS API ROUTES ---

// Customer: Submit Order
app.post('/api/orders', (req, res) => {
    const { items, totalAmount, shippingAddress, customerName, customerPhone } = req.body;

    if (!items || items.length === 0) {
        return res.status(400).json({ success: false, message: 'Order cart is empty' });
    }

    db = loadDatabase();
    const newOrder = {
        id: 'ORD-' + Date.now(),
        customerName: customerName || 'Guest Customer',
        customerPhone: customerPhone || 'Not provided',
        shippingAddress: shippingAddress || 'Juba, South Sudan',
        items: items,
        totalAmount: totalAmount || 0,
        status: 'Pending',
        createdAt: new Date().toISOString()
    };

    db.orders.unshift(newOrder);
    saveDatabase(db);

    res.json({ success: true, message: 'Order submitted successfully!', order: newOrder });
});

// Admin: Get All Orders
app.get('/api/orders', requireAdmin, (req, res) => {
    db = loadDatabase();
    res.json({ success: true, orders: db.orders });
});

// Admin: Get All Registered Users
app.get('/api/users', requireAdmin, (req, res) => {
    db = loadDatabase();
    const safeUsers = db.users.map(u => ({
        id: u.id,
        username: u.username,
        email: u.email,
        role: u.role,
        createdAt: u.createdAt
    }));
    res.json({ success: true, users: safeUsers });
});

// Fallback Route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server locally
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`====================================================`);
        console.log(` Africana Server Live on http://localhost:${PORT}`);
        console.log(` Admin Pre-seeded: jamapa / Dueng@123`);
        console.log(`====================================================`);
    });
}

module.exports = app;
