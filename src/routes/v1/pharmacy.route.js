const express = require("express");
const router = express.Router();
const Pharmacy = require("../../controllers/pharmacy.controller");
const http = require("../../utils/httpresponse");

router.get("/", async (req, res, next) => {
  try {
    const payload = await Pharmacy.searchByQuery(req.query);
    const status = await http.status(payload);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const payload = await Pharmacy.create(req.body);
    const status = await http.status(payload);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const payload = await Pharmacy.update(id, req.body);
    const status = await http.status(payload);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const payload = await Pharmacy.delete(id, req.body);
    const status = await http.status(payload);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
