let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let Participante = require("./Participante");

let ChurrasSchema = new Schema({
    data: Date,
    descricao: String,
    participantes: [Participante],
    observacoes: String,
});

module.exports = mongoose.model('Churras', ChurrasSchema);