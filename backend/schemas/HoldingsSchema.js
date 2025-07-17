const { Schema } = require("mongoose");

const HoldingsSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    qty: {
        type: Number,
        required: true,
        min: 0
    },
    avg: {
        type: Number,
        required: true,
        min: 0
    },
    price: {
        type: Number,
        default: 0
    },
    net: {
        type: String,
        default: "0"
    },
    day: {
        type: String,
        default: new Date().toISOString().split("T")[0] // e.g., "2025-07-17"
    }
});

module.exports = { HoldingsSchema };
