import * as co from "./co"

const fs = require("fs");

const express = require("express");
const api = express.Router();

api.post("/view/:id", async (req, res) => {
    if (!fs.existsSync("views.txt")) fs.writeFileSync("views.txt", "");
    let file = fs.readFileSync("views.txt");
    file += new Date().toString() + "  " + req.params["id"] + "\n";
    fs.writeFileSync("views.txt", file);
});

module.exports = api;