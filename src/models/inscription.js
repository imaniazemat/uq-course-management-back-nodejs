const mongoose = require("mongoose");

const inscriptionSchema = mongoose.Schema({
    idEtudiant: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    idCours: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    dateInscription: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Inscription', inscriptionSchema)