const express = require("express");
const gestionMaterielSchema = require("../models/gestionMateriel");

const router = express.Router();

//Ajouter Materiel (Video, Note de cours)
router.post('/ajouterMateriel', (req, res) => {
    const gestionMateriel = gestionMaterielSchema(req.body)
    gestionMateriel
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

//Visualiser Materiel
router.get('/materiel/:id', (req, res) => {
    const id = req.params.id;
    gestionMaterielSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})
//Delete Materiel
router.delete('/materiel/:id', (req, res) => {
    const id = req.params.id;
    gestionMaterielSchema.findByIdAndRemove(id)

         .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

module.exports = router;