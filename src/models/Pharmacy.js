const { Schema, model } = require("mongoose");

const pharmacySchema = new Schema(
  {
    is_active: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: { type: Number, require: true },
    address: { type: String, require: true },
  },
  { timestamps: true }
);

const Pharmacy = model("Pharmacy", pharmacySchema, "Pharmacies");
module.exports = Pharmacy;
