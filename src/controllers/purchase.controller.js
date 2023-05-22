require("dotenv").config();

const { Purchase } = require("../models/index");

class PurchaseController {
  async searchByQuery(fields) {
    try {
      return await Purchase.find(fields);
    } catch (error) {
      return error;
    }
  }

  async create(fields) {
    try {
      return await Purchase.create(fields);
    } catch (error) {
      return error;
    }
  }

  async update(id, fields) {
    try {
      return await Purchase.updateOne({ _id: id }, { $set: fields });
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      return await Purchase.deleteOne({ _id: id });
    } catch (error) {
      return error;
    }
  }
}

module.exports = new PurchaseController();
