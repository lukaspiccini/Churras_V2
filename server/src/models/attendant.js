let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let AttendantSchema = new Schema({
    name: String,
    value: Number,
    paid: Boolean,
    with_drinks: Boolean
});

module.exports = mongoose.model("Attendant", AttendantSchema);