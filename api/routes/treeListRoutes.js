"use strict";

var express = require("express"),
  router = express.Router(),
  treeList = require("../controllers/treeListController");

router.get("/tree", treeList.listAllTrees);

module.exports = router;
