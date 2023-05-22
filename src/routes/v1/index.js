const express = require("express");

const router = express.Router();

const user = require("./user.route");
const pharmacy = require("./pharmacy.route");
const product = require("./product.route");
const purchase = require("./purchase.route");
const order = require("./order.route");

const mapNavigationUrls = [
  {
    path: "/user",
    route: user,
  },
  {
    path: "/pharmacy",
    route: pharmacy,
  },
  {
    path: "/product",
    route: product,
  },
  {
    path: "/purchase",
    route: purchase,
  },
  {
    path: "/order",
    route: order,
  },
];

mapNavigationUrls.forEach((item) => {
  router.use(item.path, item.route);
});

module.exports = router;
