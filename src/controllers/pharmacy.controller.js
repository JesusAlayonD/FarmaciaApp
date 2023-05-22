require("dotenv").config();

const { Pharmacy } = require("../models/index");

class PharmacyController {
  async searchByQuery(fields) {
    try {
      return await Pharmacy.find(fields);
    } catch (error) {
      return error;
    }
  }

  async create(fields) {
    try {
      return await Pharmacy.create(fields);
    } catch (error) {
      return error;
    }
  }

  async update(id, fields) {
    try {
      return await Pharmacy.updateOne({ _id: id }, { $set: fields });
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      return await Pharmacy.deleteOne({ _id: id });
    } catch (error) {
      return error;
    }
  }
}

module.exports = new PharmacyController();
