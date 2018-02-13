"use strict";

var treeList = require("../controllers/treeListController");

module.exports = function(router) {
  router.get("/tree", treeList.listAllTrees);
};
