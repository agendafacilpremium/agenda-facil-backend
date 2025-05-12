const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');

router.post('/agendar', agendamentoController.agendarHorario);

module.exports = router;
