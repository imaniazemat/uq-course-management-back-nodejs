const mongoose = require("mongoose")

const coursSchema = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    prixNormal: {
        type: Number,
        default: 0
    },

    dateAjoute: {
        type: Date,
        default: Date.now
    },
    estPaye: {
        type: Boolean,
        default: false
    },

    idProfesseur: {
        type: mongoose.SchemaTypes.ObjectId,
        default: "000000000000000000000000"
    },

    idCategorie: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }
})

module.exports = mongoose.model('Cour', coursSchema);