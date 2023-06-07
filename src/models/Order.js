const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    is_active: {
      type: Boolean,
      default: true,
    },
    quantity: {
      type: [Number],
      default: [],
    },
    total: {
      type: Number,
      required: true,
    },
    address: { type: String, require: true },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    products: {
      type: [Schema.Types.ObjectId],
      default: [],
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
