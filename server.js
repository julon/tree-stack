var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  Tree = require("./api/models/treeListModel"),
  bodyParser = require("body-parser"),
  api = require("./api/routes/treeListRoutes");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/tree-stack");

// parsing json middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve REST api
app.use("/api", api);

// serve frontend client
app.use(express.static("public"));

// start listening
app.listen(port);
console.log("tree list RESTful API server started on: " + port);
