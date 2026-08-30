const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    gender: { type: String, default: 'unisex' },
    mainCategory: { type: String },
    subCategory: { type: String },
    category: { type: String },
    categoryGroup: { type: String },
    price: { type: Number, required: true },
    tags: { type: [String], default: [] },
    mainImg: { type: String },
    smallImgs: { type: [String], default: [] },
    description: { type: String },
    isPlaceholder: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
