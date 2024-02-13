const Setor = require("../Model/Setor");

class SetorRepository {
	constructor(conexao) {
		this.conexao = conexao;
	}

	async obterSetores() {
		try {
			const query = "SELECT * FROM setor";
			const { rows } = await this.conexao.query(query);
			return rows.map((row) => new Setor(row));
		} catch (error) {
			console.error("Erro ao obter setores:", error);
			throw new Error("Erro ao obter setores.");
		}
	}

	async createSetor(setor) {
		try {
			const { nome, codigo } = setor;
			const query = "INSERT INTO setor(nome, codigo) VALUES ($1, $2)";
			const { rows } = await this.conexao.query(query, [nome, codigo]);
			return new Setor(rows[0]);
		} catch (error) {
			console.error("Erro ao criar setor:", error);
			throw new Error("Erro ao criar setor.");
		}
	}

	async atualizarSetor(id, setor) {
		try {
			const { nome, codigo } = setor;
			const query = "UPDATE setor SET nome = $1, codigo = $2 WHERE id = $3";
			const { rows } = await this.conexao.query(query, [nome, codigo, id]);
			return rows[0];
		} catch (error) {
			console.error("Erro ao atualizar setor:", error);
			throw new Error("Erro ao atualizar setor.");
		}
	}

	async deletarSetor(id) {
		try {
			const query = "DELETE FROM setor WHERE id = $1";
			await this.conexao.query(query, [id]);
			return { message: "Setor deletado com sucesso" };
		} catch (error) {
			console.error("Erro ao deletar setor:", error);
			throw new Error("Erro ao deletar setor.");
		}
	}

	async buscarSetorPorId(id) {
		try {
			const query = "SELECT * FROM setor WHERE id = $1";
			const { rows } = await this.conexao.query(query, [id]);
			return rows.length > 0 ? new Setor(rows[0]) : null;
		} catch (error) {
			console.error("Erro ao buscar setor por ID:", error);
			throw new Error("Erro ao buscar setor por ID.");
		}
	}

	async obterLike(nome) {
		try {
			nome = nome + "%";
			const query = "SELECT * FROM setor WHERE nome LIKE $1";
			const { rows } = await this.conexao.query(query, [nome]);
			return rows.map((row) => new Setor(row));
		} catch (error) {
			console.error("Erro ao obter setores com filtro de nome:", error);
			throw new Error("Erro ao obter setores com filtro de nome.");
		}
	}

	async equipamentosPorSetor(id) {
		try {
			const query = `
				SELECT s.nome AS setor, COUNT(e.id) AS quantidade_equipamentos
				FROM setor s
				LEFT JOIN equipamento e ON s.id = e.setor_id
				WHERE s.id = $1
				GROUP BY s.id, s.nome;
			`;
			const { rows } = await this.conexao.query(query, [id]);
			return rows.length > 0
				? {
						setor: rows[0].setor,
						quantidadeEquipamentos: rows[0].quantidade_equipamentos,
				  }
				: null;
		} catch (error) {
			console.error("Erro na consulta SQL de quantidade:", error);
			throw new Error("Erro na consulta SQL de quantidade.");
		}
	}

	async valorTotalPorSetor(id) {
		try {
			const query = `
				SELECT s.nome AS setor, SUM(e.valor) AS valor_total_equipamentos
				FROM setor s
				LEFT JOIN equipamento e ON s.id = e.setor_id
				WHERE s.id = $1
				GROUP BY s.id, s.nome;
			`;
			const { rows } = await this.conexao.query(query, [id]);
			return rows.length > 0
				? {
						setor: rows[0].setor,
						valorTotalEquipamentos: rows[0].valor_total_equipamentos,
				  }
				: null;
		} catch (error) {
			console.error("Erro na consulta SQL de valor total:", error);
			throw new Error("Erro na consulta SQL de valor total.");
		}
	}
}

module.exports = SetorRepository;
