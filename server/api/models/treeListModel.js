"use strict";

const mongoose = require("mongoose"),
  mongoosePaginate = require("mongoose-paginate"),
  Schema = mongoose.Schema;

const TreeSchema = new Schema({
  name: {
    type: String,
    required: "The tree name is missing"
  }
});

TreeSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Trees", TreeSchema);
