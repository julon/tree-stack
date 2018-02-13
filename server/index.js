const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require("body-parser"),
  cors = require('cors'),
  mongoose = require("mongoose"),
  Tree = require("./api/models/treeListModel"),
  Routes = require("./api/routes");
  

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/tree-stack");

// parsing json middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// add process.env.NODE_ENV === 'development'
// add CORS support for development
const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

// serve REST api
app.use("/api", Routes);

// serve frontend client
app.use(express.static("../client/dist"));

// start listening
app.listen(port);
console.log("Tree-stack RESTful API server started on: " + port);
