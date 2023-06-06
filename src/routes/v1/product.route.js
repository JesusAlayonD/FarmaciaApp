const express = require("express");
const router = express.Router();
const Product = require("../../controllers/product.controller");
const http = require("../../utils/httpresponse");

router.get("/", async (req, res, next) => {
  try {
    const payload = await Product.searchByQuery(req.query);
    const status = await http.status(payload);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const payload = await Product.create(req.body);
    const status = await http.status(payload);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const payload = await Product.update(id, req.body);
    const status = await http.status(payload);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const payload = await Product.delete(id, req.body);
    const status = await http.status(payload);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
