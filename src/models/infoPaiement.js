const mongoose = require("mongoose")

const infoPaiementSchema = mongoose.Schema({
    montant: {
        type: Number
    },
    datePaiement: {
        type: Date,
        default: Date.now
    },
    numTransction: {
        type: String,
        required: true
    },
    etatTransction: {
        type: Boolean,
        default: false
    },
    idInscription: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: inscription
    }
})

module.exports = mongoose.model('InfoPaiement', infoPaiementSchema)