
const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('./models/Product');
const productsObj = require('./temp_products.js');

async function seed() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
        const productsArray = Object.values(productsObj);
        console.log('Found ' + productsArray.length + ' products to seed.');
        await Product.deleteMany({});
        for (const p of productsArray) {
            const prod = new Product({
                id: p.id,
                name: p.name,
                gender: p.gender || 'unisex',
                mainCategory: p.mainCategory,
                subCategory: p.subCategory,
                category: p.category,
                categoryGroup: p.categoryGroup,
                price: p.price,
                tags: p.tags || [],
                mainImg: p.mainImg,
                smallImgs: p.smallImgs || [],
                description: p.description
            });
            await prod.save();
        }
        console.log('Successfully seeded database!');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}
seed();
