const { Schema } = require("mongoose");

const PositionsSchema = new Schema({
    product: {
        type: String,
        required: true,
        trim: true,  // Remove leading/trailing spaces
    },
    name: {
        type: String,
        required: true,
        trim: true,  // Remove leading/trailing spaces
    },
    qty: {
        type: Number,
        required: true,
        min: 1,  // Quantity can't be less than 1
    },
    avg: {
        type: Number,
        required: true,
        min: 0,  // Average price should not be negative
    },
    price: {
        type: Number,
        required: true,
        min: 0,  // Price should not be negative
    },
    net: {
        type: String,
        default: "0",  // Default net value is 0 if not provided
    },
    day: {
        type: String,
        default: new Date().toISOString().split("T")[0],  // Default to today's date in YYYY-MM-DD format
    },
    isLoss: {
        type: Boolean,
        required: true,
        default: false,  // Default value is false
    },
}, {
    timestamps: true,  // Automatically add createdAt and updatedAt fields
});

module.exports = { PositionsSchema };
