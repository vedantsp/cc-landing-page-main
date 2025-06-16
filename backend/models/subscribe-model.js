const mongoose = require("mongoose");

const subscribeSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,

}});

const Subscribe = new mongoose.model("Subscribe", subscribeSchema);
module.exports = Subscribe;