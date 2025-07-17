const { model } = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrdersModel = model("Order", OrdersSchema); // ✅ No "new"

module.exports = { OrdersModel };
