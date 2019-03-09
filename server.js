const express = require("express");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

