const { model } = require("mongoose");
const { HoldingsSchema } = require("../schemas/HoldingsSchema");

const HoldingsModel = model("holding", HoldingsSchema); // model को new से नहीं बनाते

module.exports = { HoldingsModel };
