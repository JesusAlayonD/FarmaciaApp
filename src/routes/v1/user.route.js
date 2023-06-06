const express = require("express");
const router = express.Router();
const User = require("../../controllers/user.controller");
const http = require("../../utils/httpresponse");

router.get("/", async (req, res, next) => {
  try {
    const payload = await User.searchByQuery(req.query);
    const status = await http.status(payload);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    let fields = req.body;
    const payload = await User.signin(fields);
    const status = await http.status(payload);
    res.status(status).json(payload);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const payload = await User.create(req.body);
    const status = await http.status(payload);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const payload = await User.update(id, req.body);
    const status = await http.status(payload);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const payload = await User.delete(id, req.body);
    const status = await http.status(payload);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
