const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routerEquipamento = require("./src/router/routesEquipamentos");
const routerSetor = require("./src/router/routesSetor");

const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => console.log(`Server running or port ${PORT}`));

class App {
	constructor(port) {
		this.app = express();
		this.port = port || process.env.PORT || 4000;
		this.settings();
		this.middlewares();
		this.routes();
	}

	settings() {
		this.app.set("port", this.port);
	}

	middlewares() {
		this.app.use(morgan("dev"));
		this.app.use(cors());
		this.app.use(express.json());
	}

	routes() {
		this.app.use("/setores", routerSetor);
		this.app.use("/equipamentos", routerEquipamento);
	}

	async listen() {
		await this.app.listen(this.port);
		console.log(`Servidor rodando em: http://localhost:${this.port}`);
	}
}

module.exports = App;
