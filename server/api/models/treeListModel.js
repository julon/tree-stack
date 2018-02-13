"use strict";

var mongoose = require("mongoose"),
  mongoosePaginate = require("mongoose-paginate"),
  Schema = mongoose.Schema;

var TreeSchema = new Schema({
  name: {
    type: String,
    required: "The tree name is missing"
  },
  created_date: {
    type: Date,
    default: Date.now()
  }
});

TreeSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Trees", TreeSchema);
