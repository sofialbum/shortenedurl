const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  userLongUrl: {
    type: String,
    required: [true, "a url is required"],
  },
  uuid: {
    type: String,
    unique: true
  }
});

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
