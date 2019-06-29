let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ParticipanteSchema = new Schema({
    nome: String,
    valor: Number,
    pago: Boolean,
    combebida: Boolean
});

module.exports = mongoose.model('Participante', ParticipanteSchema);