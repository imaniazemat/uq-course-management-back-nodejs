const express = require("express");
const sectionSchema = require("../models/section");

const router = express.Router();

//Create Section
router.post('/createSection', (req, res) => {
    const section = sectionSchema(req.body);
    section
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

//Liste Section avec les materiels
router.get('/listeSections', (req, res) => {
    sectionSchema
        .aggregate(
            [
                {
                    $lookup:
                    {
                        from: "gestionmateriels",
                        localField: "_id",
                        foreignField: "idParentSection",
                        as: "Section-Materiels"
                    }
                }
            ]
        )
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router;