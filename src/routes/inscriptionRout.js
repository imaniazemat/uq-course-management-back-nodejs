const express = require('express')
const router = express.Router()

const inscriptionController = require('../controllers/inscriptionController')

router.post('/insert', inscriptionController.insert)
router.get('/listDeCours', inscriptionController.listDeCours)
module.exports = router