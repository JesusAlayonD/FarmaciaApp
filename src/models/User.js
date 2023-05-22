const { Schema, model } = require("mongoose");
const JSCrypto = require("../utils/jscrypto");

const userSchema = new Schema(
  {
    is_active: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    phone: { type: Number, require: true },
    address: { type: String, require: true },
    email: {
      type: String,
      required: "email is required",
      match: [/^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{2,3})+$/, "email not valid"],
    },
    password: {
      type: String,
      minlength: [8, "password is very small"],
      required: true,
    },
    sex: {
      type: String,
      enum: { values: ["F", "M"], message: "value not valid" },
    },
    admin: {
      type: String,
      default: false,
    },
    pharmacy: {
      type: Schema.Types.ObjectId,
      ref: "Pharmacy",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  try {
    const user = this;
    if (!user.isModified("password")) return next();
    user.password = await JSCrypto.encrypt(user.password);
    return next();
  } catch (error) {
    next(error);
  }
});

const User = model("User", userSchema, "Users");
module.exports = User;
