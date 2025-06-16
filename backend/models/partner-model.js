const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  website: {
    type: String,
    required: false,
  },
  socials: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: false,
  },
});

const Partner = new mongoose.model("Partner", partnerSchema);
module.exports = Partner;