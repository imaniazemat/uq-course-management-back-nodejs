const mongoose = require("mongoose")

const etudiantSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    courriel: {
        type: String,
        required: true
    },
    motDePasse: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Etudiant', etudiantSchema)