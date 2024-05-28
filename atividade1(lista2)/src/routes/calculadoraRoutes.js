const express = require('express');
const router  = express.Router();
const calcController = require('../controllers/calculadoraController');

router.get('/', calcController.index);
router.post('/resultado', calcController.resultado);

module.exports = router;