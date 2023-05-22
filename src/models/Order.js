const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    is_active: {
      type: Boolean,
      default: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    total: {
      type: String,
      required: true,
    },
    address: { type: String, require: true },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    pharmacy: {
      type: Schema.Types.ObjectId,
      ref: "Pharmacy",
    },
  },
  { timestamps: true }
);

const Order = model("Order", orderSchema, "Orders");
module.exports = Order;
