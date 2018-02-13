"use strict";

var express = require("express"),
  router = express.Router(),
  treeListRoutes = require("./treeListRoutes");

treeListRoutes(router);

module.exports = router;