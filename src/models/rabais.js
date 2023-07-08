const mongoose = require("mongoose")

const rabaisSchema = mongoose.Schema({
    idCours: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    dateDebut: {
        type: Date,
        required: true
    },
    dateFin: {
        type: Date,
        required: true
    },
    porcentageRabais: {
        type: Number,
        default: 0
    },
    montantRabais: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Rabais', rabaisSchema)