var http = require("http");
var express = require("express");
var app = express();
// Set vash view engine.
app.set("view engine", "vash");

app.use(express.static(__dirname + "/public"));

var controllers = require("./controllers");
controllers.init(app);

var server = http.createServer(app);
server.listen(3000);