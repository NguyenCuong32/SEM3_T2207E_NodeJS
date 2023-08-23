const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("users", userSchema);