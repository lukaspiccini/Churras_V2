let mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_CLUSTER_USERNAME}:${process.env.MONGO_CLUSTER_PASSWORD}@cluster0-t9cs9.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true }).then(
    () => { console.log("Conectado no Mongo"); },
    err => { console.log(err); }
);

module.exports;