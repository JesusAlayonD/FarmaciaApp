require("dotenv").config();

const { Order } = require("../models/index");

class OrderController {
  async searchByQuery(fields) {
    try {
      return await Order.find(fields);
    } catch (error) {
      return error;
    }
  }

  async create(fields) {
    try {
      return await Order.create(fields);
    } catch (error) {
      return error;
    }
  }

  async update(id, fields) {
    try {
      return await Order.updateOne({ _id: id }, { $set: fields });
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      return await Order.deleteOne({ _id: id });
    } catch (error) {
      return error;
    }
  }
}

module.exports = new OrderController();
