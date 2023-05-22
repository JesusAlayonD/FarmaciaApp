const { Schema, model } = require("mongoose");

const purchaseSchema = new Schema(
  {
    paymentMethod: {
      type: String,
      required: true,
    },
    purchase: {
      type: Schema.Types.ObjectId,
      ref: "Purchase",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    order: {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
    pharmacy: {
      type: Schema.Types.ObjectId,
      ref: "Pharmacy",
    },
  },
  { timestamps: true }
);

const Purchase = model("Purchase", purchaseSchema, "Purchases");
module.exports = Purchase;
