let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let Attendant = require("./attendant").schema;

let BarbecueSchema = new Schema({
    date: Date,
    description: String,
    attendants: [{type: Schema.Types.ObjectId, ref: 'Attendant'}],
    observations: String,
});

module.exports = mongoose.model('Barbecue', BarbecueSchema);