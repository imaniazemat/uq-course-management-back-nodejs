const express = require("express");
const { default: mongoose } = require("mongoose");
const coursSchema = require("../models/cours");
const gestionMateriel = require("../models/gestionMateriel");
const section = require("../models/section");

const router = express.Router();

//Create cours
router.post('/createCours', (req, res) => {
    const cours = coursSchema(req.body);
    cours
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

//Liste de cours
router.get('/listeDuCours', (req, res) => {
    coursSchema
        .aggregate(
            [
                {
                    $lookup:
                    {
                        from: "categories",
                        localField: "idCategorie",
                        foreignField: "_id",
                        as: "nomCategorie"
                    }
                }
            ]
        )
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))

})

//Materiel et Sections de un (1) cours
router.get('/materielDeCours/:id', (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id)
    coursSchema
        .aggregate([
            {
                $match : { _id: id }
            },
            {
                $lookup:
                {
                    from: "categories",
                    localField: "idCategorie",
                    foreignField: "_id",
                    as: "nomCategorie"
                }
            },
            {
                $lookup:
                {
                    from: "gestionmateriels",
                    localField: "_id",
                    foreignField: "idParentSection",
                    as: "Materiels"
                }
            },
            {
                $lookup: {
                    from: "sections",
                    as: "Sections",
                    let: { idCours: "$_id" }, // _id is from Cours
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $and: [
                                        {
                                            $eq: [ "$idParent","$$idCours" ] //idParent is from sections
                                        }
                                    ]
                                }
                            }
                        },
                        {//Pour avoir le materiel d'une section sans SousSection
                            $lookup: {
                                from: "gestionmateriels",
                                as: "MaterielsSansSousSection",
                                let: { idSection: "$_id" }, //_id is from Sections
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: {
                                                $and: [
                                                    {
                                                        $eq: [ "$idParentSection", "$$idSection" ] //idParentSections is from gestionmateriels table
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            $lookup: {
                                from: "sections",
                                as: "SousSections",
                                let: { idSection: "$_id" }, //Type de Section
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: {
                                                $and: [
                                                    {
                                                        $eq: [ "$idParent", "$$idSection" ] //idParentSections is from gestionmateriels table
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        $lookup: {
                                            from: "gestionmateriels",
                                            as: "Materiels",
                                            let: { idSection: "$_id" }, //_id is from Sections
                                            pipeline: [
                                                {
                                                    $match: {
                                                        $expr: {
                                                            $and: [
                                                                {
                                                                    $eq: [ "$idParentSection", "$$idSection" ] //idParentSections is from gestionmateriels table
                                                                }
                                                            ]
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ])
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router;