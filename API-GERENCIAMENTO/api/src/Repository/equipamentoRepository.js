const Equipamento = require("../Model/Equipamento");

class EquipamentoRepository {
	constructor(conexao) {
		this.conexao = conexao;
	}

	async obterTodos() {
		try {
			const query =
				"SELECT e.id, e.nome, e.marca, e.descricao, e.codigo, e.valor, s.nome AS setor FROM equipamento e JOIN setor s ON s.id = e.setor_id ORDER BY id";
			const { rows } = await this.conexao.query(query);
			return rows.map((row) => new Equipamento(row));
		} catch (error) {
			console.error("Erro ao obter todos os equipamentos:", error);
			throw new Error("Erro ao obter todos os equipamentos.");
		}
	}

	async createEquipamento(equipamento) {
		try {
			const { nome, marca, descricao, codigo, valor, setor_id } = equipamento;

			const equipamentoQuery =
				"INSERT INTO equipamento(nome, marca, descricao, codigo, valor, setor_id) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id";

			const { rows } = await this.conexao.query(equipamentoQuery, [
				nome,
				marca,
				descricao,
				codigo,
				valor,
				setor_id,
			]);

			const newEquipamentoId = rows[0].id;

			return new Equipamento({
				id: newEquipamentoId,
				nome,
				marca,
				descricao,
				codigo,
				valor,
				setor_id,
			});
		} catch (error) {
			console.error("Erro ao criar equipamento:", error);
			throw new Error("Erro ao criar equipamento.");
		}
	}

	async atualizarEquipamento(id, equipamento) {
		try {
			const { nome, marca, descricao, codigo, valor, setor_id } = equipamento;
			const query =
				"UPDATE equipamento SET nome = $1, marca = $2, descricao = $3, codigo = $4, valor = $5, setor_id = $6 WHERE id = $7";
			const { rowCount } = await this.conexao.query(query, [
				nome,
				marca,
				descricao,
				codigo,
				valor,
				setor_id,
				id,
			]);
			return rowCount;
		} catch (error) {
			console.error("Erro ao atualizar equipamento:", error);
			throw new Error("Erro ao atualizar equipamento.");
		}
	}

	async deletarEquipamento(id) {
		try {
			const { rowCount } = await this.conexao.query(
				"DELETE FROM equipamento WHERE id = $1",
				[id]
			);
			return rowCount;
		} catch (error) {
			console.error("Erro ao deletar equipamento:", error);
			throw new Error("Erro ao deletar equipamento.");
		}
	}

	async buscarEquipamentoPorId(id) {
		try {
			const query =
				"SELECT e.id, e.nome, e.marca, e.descricao, e.codigo, e.valor, s.nome AS setor FROM equipamento e JOIN setor s ON s.id = e.setor_id WHERE e.id = $1";
			const { rows } = await this.conexao.query(query, [id]);
			return rows.length > 0 ? new Equipamento(rows[0]) : null;
		} catch (error) {
			console.error("Erro ao buscar equipamento por ID:", error);
			throw new Error("Erro ao buscar equipamento por ID.");
		}
	}

	async obterLike(nome) {
		try {
			nome = nome + "%";
			const query =
				"SELECT e.id, e.nome, e.marca, e.descricao, e.codigo, e.valor, s.nome AS setor FROM equipamento e JOIN setor s ON s.id = e.setor_id WHERE e.nome LIKE $1";
			const { rows } = await this.conexao.query(query, [nome]);
			return rows.map((row) => new Equipamento(row));
		} catch (error) {
			console.error("Erro ao obter equipamentos com filtro de nome:", error);
			throw new Error("Erro ao obter equipamentos com filtro de nome.");
		}
	}
}

module.exports = EquipamentoRepository;
