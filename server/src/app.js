const express = require("express");
var cors = require('cors')
const bodyParser = require("body-parser");
const connection = require("./database/database");
const barbecue_router = require("./routes/barbecue");
const attendant_router = require("./routes/attendant");

let app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api",barbecue_router);
app.use("/api",attendant_router);

app.listen(3000, () => {
    console.log('Conectado na porta 3000')
})