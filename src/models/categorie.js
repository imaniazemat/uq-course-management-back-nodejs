const mongoose = require("mongoose");

const categorieSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    
    description: String
})

module.exports = mongoose.model('Categorie', categorieSchema);