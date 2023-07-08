const mongoose = require("mongoose")

const section = mongoose.Schema({
    titreSection: {
        type: String,
        required: true
    },
    idParent: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    typeParent: {
        type: String,
        required: true
    },
    idCours: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }
})

module.exports = mongoose.model('Section', section);