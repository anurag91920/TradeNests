const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,  // Remove extra spaces
    },
    qty: {
        type: Number,
        required: true,
        min: 1,  // Quantity can't be less than 1
    },
    price: {
        type: Number,
        required: true,
        min: 0,  // Price can't be negative
    },
    mode: {
        type: String,
        required: true,
        enum: ["BUY", "SELL"],  // Ensure only valid modes are allowed
    },
}, {
    timestamps: true,  // Automatically add createdAt and updatedAt fields
});

module.exports = { OrdersSchema };
