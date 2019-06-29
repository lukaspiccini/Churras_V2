const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./database/Database");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log('Conectado na porta 3000')
})