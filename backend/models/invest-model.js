const mongoose = require("mongoose");

const investSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  website: {
    type: String,
    required: false,
  },
  linkedin: {
    type: String,
    required: false,
  },

  message: {
    type: String,
    required: false,
  },
});

const Invest = new mongoose.model("Invest", investSchema);
module.exports = Invest;