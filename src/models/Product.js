const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  is_active: {
    type: Boolean,
    default: true,
  },
  name: {
    type: String,
    required: true,
  },
  activeIngredient: {
    type: String,
    required: true,
  },
  price: { type: Number, require: true },
  description: { type: String, require: true },
  pharmacy: {
    type: Schema.Types.ObjectId,
    ref: "Pharmacy",
  },
  picture: { type: String, default: "" },
});

const Product = model("Product", productSchema, "Products");
module.exports = Product;
