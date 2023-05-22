require("dotenv").config();

const { User } = require("../models/index");

class UserController {
  async searchByQuery(fields) {
    try {
      console.log(fields);
      return await User.find(fields);
    } catch (error) {
      return error;
    }
  }
  async signin(fields) {
    let response = {};
    try {
      let user = await User.findOne({
        email: fields.email,
        is_active: true,
      });
      if (user.id) {
        if (fields.password === user.password) {
          delete user._doc.password;
          return user;
        }
      }
      return response;
    } catch (err) {
      return err;
    }
  }

  async create(fields) {
    try {
      let user = await this.searchByQuery({ email: fields.email });
      if (user.length == 0) {
        user = await User.create(fields);
      } else {
        user = user[0];
      }
      return user;
    } catch (error) {
      return error;
    }
  }

  async update(id, fields) {
    try {
      return await User.updateOne({ _id: id }, { $set: fields });
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      return await User.deleteOne({ _id: id });
    } catch (error) {
      return error;
    }
  }
}

module.exports = new UserController();
