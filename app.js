const express = require("express"),
    app = express(),
    bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req,res) {
    console.log("index page");
    res.render("index");
});

app.listen(process.env.PORT || 8000, function (req,res) {
    console.log("server started");
});