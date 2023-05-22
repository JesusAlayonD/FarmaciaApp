require("dotenv").config();

const { Product } = require("../models/index");

class ProductController {
  async searchByQuery(fields) {
    try {
      return await Product.find(fields);
    } catch (error) {
      return error;
    }
  }

  async create(fields) {
    try {
      return await Product.create(fields);
    } catch (error) {
      return error;
    }
  }

  async update(id, fields) {
    try {
      return await Product.updateOne({ _id: id }, { $set: fields });
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      return await Product.deleteOne({ _id: id });
    } catch (error) {
      return error;
    }
  }
}

module.exports = new ProductController();
