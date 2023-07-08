const mongoose = require("mongoose")

const gestionMaterielSchema = mongoose.Schema({
    typeMateriel: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateAjoute: {
        type: Date,
        default: Date.now
    },
    idCours: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    lien: {
        type: String,
        required: true
    },
    idParentSection: {
        type: mongoose.SchemaTypes.ObjectId
    },
    typeParent: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('GestionMateriel', gestionMaterielSchema);