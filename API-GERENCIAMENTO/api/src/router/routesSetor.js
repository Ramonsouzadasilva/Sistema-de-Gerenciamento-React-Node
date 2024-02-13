// // const express = require("express");

// // const router = express.Router();

// // const SetorController = require("../controllers/setorController");
// // const SetorRepository = require("../Repository/setorRepository");
// // const conexao = require("../database/conexao");
// // // Instanciar o repositório e o controlador
// // const setorRepository = new SetorRepository(conexao);
// // const setorController = new SetorController(setorRepository);

// // router.get("/setores", setorController.obterSetores);
// // router.get("/setores/:id", setorController.buscarSetor);
// // router.get("/dados/quantidade/:id", setorController.equipamentosPorSetor);
// // router.get("/dados/valor/:id", setorController.valorTotalPorSetor);
// // router.get("/buscarSetor", setorController.obterLikeSetor);
// // router.post("/setores", setorController.adicionarSetor);
// // router.put("/setores/:id", setorController.atualizarSetor);
// // router.delete("/setores/:id", setorController.deletarSetor);

// // //ROTAS PARA EQUIPAMENTOS

// // const EquipamentoController = require("../controllers/equipamentoController");
// // const EquipamentoRepository = require("../Repository/equipamentoRepository");

// // equipamentoRepository = new EquipamentoRepository(conexao);
// // equipamentoController = new EquipamentoController(equipamentoRepository);

// // router.get("/equipamentos", equipamentoController.obterTodos);
// // router.get("/equipamentos/:id", equipamentoController.buscarEquipamento);
// // router.get("/buscar", equipamentoController.obterLike);
// // router.post("/equipamentos", equipamentoController.adicionarEquipamento);
// // router.put("/equipamentos/:id", equipamentoController.atualizarEquipamento);
// // router.delete("/equipamentos/:id", equipamentoController.deletarEquipamento);

// // //EXPORTANDO AS ROTAS
// // module.exports = router;
// const express = require("express");
// const router = express.Router();

// const conexao = require("../database/conexao");
// const SetorController = require("../controllers/setorController");
// const SetorRepository = require("../Repository/setorRepository");

// setorRepository = new SetorRepository(conexao);
// setorController = new SetorController(setorRepository);

// router.get("/", setorController.obterTodos);
// router.get("/buscar", setorController.obterLike);
// router.get("/:id", setorController.buscarEquipamento);
// router.post("/", setorController.adicionarEquipamento);
// router.put("/:id", setorController.atualizarEquipamento);
// router.delete("/:id", setorController.deletarEquipamento);
// router.get("/dados/quantidade/:id", setorController.equipamentosPorSetor);
// router.get("/dados/valor/:id", setorController.valorTotalPorSetor);

const express = require("express");

const routerS = express.Router();

const SetorController = require("../controllers/setorController");
const SetorRepository = require("../Repository/setorRepository");
const conexao = require("../database/conexao");
// Instanciar o repositório e o controlador
const setorRepository = new SetorRepository(conexao);
const setorController = new SetorController(setorRepository);

routerS.get("/", setorController.obterSetores);
routerS.get("/buscarSetor", setorController.obterLikeSetor);
routerS.get("/:id", setorController.buscarSetor);
routerS.get("/dados/quantidade/:id", setorController.equipamentosPorSetor);
routerS.get("/dados/valor/:id", setorController.valorTotalPorSetor);
routerS.post("/", setorController.adicionarSetor);
routerS.put("/:id", setorController.atualizarSetor);
routerS.delete("/:id", setorController.deletarSetor);

module.exports = routerS;
