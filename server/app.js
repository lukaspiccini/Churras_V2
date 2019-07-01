const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')
const connection = require("./src/database/database");
const barbecue_router = require("./src/routes/barbecue");
const attendant_router = require("./src/routes/attendant");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
app.use("/api",barbecue_router);
app.use("/api",attendant_router);

app.listen(process.env.PORT || 4000, () => {
    console.log('Conectado')
})