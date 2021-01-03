const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const phoneSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  manufacturer: { type: String, required: true },
  ram: { type: Number, required: true },
  processor: { type: String, required: true },
  imageFileName: { type: String, required: true },
  color: { type: String, required: true },
  screen: { type: String, required: true },
});

module.exports = mongoose.model("Phone", phoneSchema);
