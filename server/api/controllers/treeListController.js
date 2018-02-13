"use strict";

var mongoose = require("mongoose"),
  Tree = mongoose.model("Trees");

function listTreesByPage(req, res) {
  Tree.paginate({}, { page: req.params.page, limit: 3 }, (err, tree) => {
    if (err) res.send(err);
    res.json(tree);
  });
}

module.exports = {
  listTreesByPage
};
