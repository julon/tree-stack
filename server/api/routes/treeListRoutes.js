"use strict";

const treeList = require("../controllers/treeListController");

module.exports = router => {
  router.get("/tree/:page", treeList.listTreesByPage);
};
