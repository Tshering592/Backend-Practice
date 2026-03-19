// mongoose 
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    brandname: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model("Product", ProductSchema);