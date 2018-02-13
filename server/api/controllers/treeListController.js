"use strict";

var mongoose = require("mongoose"),
  Tree = mongoose.model("Trees");

function listAllTrees(req, res) {
  Tree.find({}, function(err, tree) {
    if (err) res.send(err);
    res.json(tree);
  });
}

module.exports = {
  listAllTrees
};
