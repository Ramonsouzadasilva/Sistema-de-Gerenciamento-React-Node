const express = require("express");
const router = express.Router();
const conexao = require("../database/conexao");
const EquipamentoController = require("../controllers/equipamentoController");
const EquipamentoRepository = require("../Repository/equipamentoRepository");

equipamentoRepository = new EquipamentoRepository(conexao);
equipamentoController = new EquipamentoController(equipamentoRepository);

router.get("/", equipamentoController.obterTodos);
router.get("/buscar", equipamentoController.obterLike);
router.get("/:id", equipamentoController.buscarEquipamento);
router.post("/", equipamentoController.adicionarEquipamento);
router.put("/:id", equipamentoController.atualizarEquipamento);
router.delete("/:id", equipamentoController.deletarEquipamento);

module.exports = router;
