var express = require("express");
var jsonDb = require("node-json-db");
var bodyParser = require("body-parser");

var app = express();
var db = new jsonDb("db.json", true, true);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var api = express.Router();

api.get("/confirmation", function (req, res) {
    res.json(db.getData("/confirmations"));
});


app.use("/api", api);
app.use("/", express.static("dist"));

app.listen("3000");