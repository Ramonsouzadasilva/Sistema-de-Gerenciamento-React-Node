const { request, response } = require("express");
const equipamentoService = require("../Repository/equipamentoRepository");

class EquipamentoController {
	constructor(equipamentoService) {
		this.equipamentoService = equipamentoService;
	}

	obterTodos = async (_request, response) => {
		try {
			const equipamentos = await this.equipamentoService.obterTodos();
			return response.status(200).json(equipamentos);
		} catch (error) {
			console.error("Erro ao obter todos os equipamentos:", error);
			return response.status(500).json({ error: "Erro interno do servidor." });
		}
	};

	adicionarEquipamento = async (request, response) => {
		try {
			const createdEquipamento =
				await this.equipamentoService.createEquipamento(request.body);
			return response.status(201).json(createdEquipamento);
		} catch (error) {
			console.error("Erro ao adicionar equipamento:", error);
			return response.status(500).json({ error: "Erro interno do servidor." });
		}
	};

	atualizarEquipamento = async (request, response) => {
		try {
			const { id } = request.params;
			await this.equipamentoService.atualizarEquipamento(id, request.body);
			return response.status(200).json();
		} catch (error) {
			console.error("Erro ao atualizar equipamento:", error);
			return response.status(500).json({ error: "Erro interno do servidor." });
		}
	};

	deletarEquipamento = async (request, response) => {
		try {
			const { id } = request.params;
			await this.equipamentoService.deletarEquipamento(id);
			return response.status(200).json();
		} catch (error) {
			console.error("Erro ao deletar equipamento:", error);
			return response.status(500).json({ error: "Erro interno do servidor." });
		}
	};

	buscarEquipamento = async (request, response) => {
		try {
			const { id } = request.params;
			const equipamento = await this.equipamentoService.buscarEquipamentoPorId(
				id
			);
			if (!equipamento) {
				return response
					.status(404)
					.json({ error: "Equipamento não encontrado." });
			}
			return response.status(200).json(equipamento);
		} catch (error) {
			console.error("Erro ao buscar equipamento por ID:", error);
			return response.status(500).json({ error: "Erro interno do servidor." });
		}
	};

	obterLike = async (request, response) => {
		try {
			const { nome } = request.query;
			const equipamentos = await this.equipamentoService.obterLike(nome);
			return response.status(200).json(equipamentos);
		} catch (error) {
			console.error("Erro ao obter equipamentos por nome:", error);
			return response.status(500).json({ error: "Erro interno do servidor." });
		}
	};
}

module.exports = EquipamentoController;
