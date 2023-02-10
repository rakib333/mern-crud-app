const mongoose = require('mongoose');
const productsSchema = mongoose.Schema({
    productName: { type: String },
    productPrice: { type: String },
    quantity: { type: String },
    img: { type: String },
    unitPrice: { type: String },
    totalPrice: { type: String },
    createdDate: {type: Date, default: Date.now()}
}, { versionKey: false })

const productModel = mongoose.model("products", productsSchema);
module.exports = productModel;