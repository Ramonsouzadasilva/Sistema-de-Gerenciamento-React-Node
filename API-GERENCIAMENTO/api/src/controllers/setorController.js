const { request, response } = require("express");
const setorService = require("../Repository/setorRepository");

class SetorController {
	constructor(setorService) {
		this.setorService = setorService;
	}

	obterSetores = async (_request, response) => {
		try {
			const setores = await this.setorService.obterSetores();
			return response.status(200).json(setores);
		} catch (error) {
			console.error("Erro ao obter setores:", error);
			return response.status(500).json({ error: "Erro interno do servidor." });
		}
	};

	adicionarSetor = async (request, response) => {
		try {
			const createdSetor = await this.setorService.createSetor(request.body);
			return response.status(201).json(createdSetor);
		} catch (error) {
			console.error("Erro ao adicionar setor:", error);
			return response.status(400).json({ error: "Erro ao adicionar setor." });
		}
	};

	atualizarSetor = async (request, response) => {
		try {
			const { id } = request.params;
			await this.setorService.atualizarSetor(id, request.body);
			return response.status(200).json();
		} catch (error) {
			console.error("Erro ao atualizar setor:", error);
			return response.status(400).json({ error: "Erro ao atualizar setor." });
		}
	};

	deletarSetor = async (request, response) => {
		try {
			const { id } = request.params;
			await this.setorService.deletarSetor(id);
			return response.status(200).json();
		} catch (error) {
			console.error("Erro ao deletar setor:", error);
			return response.status(400).json({ error: "Erro ao deletar setor." });
		}
	};

	buscarSetor = async (request, response) => {
		try {
			const { id } = request.params;
			const setor = await this.setorService.buscarSetorPorId(id);
			return response.status(200).json(setor);
		} catch (error) {
			console.error("Erro ao buscar setor por ID:", error);
			return response.status(500).json({ error: "Erro interno do servidor." });
		}
	};

	obterLikeSetor = async (request, response) => {
		try {
			const { nome } = request.query;
			const setores = await this.setorService.obterLike(nome);
			return response.status(200).json(setores);
		} catch (error) {
			console.error("Erro ao obter setores por nome:", error);
			return response
				.status(400)
				.json({ error: "Erro ao obter setores por nome." });
		}
	};

	equipamentosPorSetor = async (request, response) => {
		try {
			const { id } = request.params;
			console.log("ID do Setor:", id);

			const resultado = await this.setorService.equipamentosPorSetor(id);
			console.log("Resultado da quantidade:", resultado);

			if (resultado) {
				return response.status(200).json(resultado);
			} else {
				return response
					.status(404)
					.json({ erro: "Setor não encontrado ou sem equipamentos." });
			}
		} catch (error) {
			console.error("Erro ao obter equipamentos por setor:", error);
			return response.status(500).json({ error: "Erro interno do servidor." });
		}
	};

	valorTotalPorSetor = async (request, response) => {
		try {
			const { id } = request.params;
			console.log("ID do Setor:", id);

			const resultado = await this.setorService.valorTotalPorSetor(id);
			console.log("Resultado do valor total:", resultado);

			return response.status(200).json(resultado);
		} catch (error) {
			console.error("Erro ao obter valor total por setor:", error);
			return response.status(500).json({ error: "Erro interno do servidor." });
		}
	};
}

module.exports = SetorController;
