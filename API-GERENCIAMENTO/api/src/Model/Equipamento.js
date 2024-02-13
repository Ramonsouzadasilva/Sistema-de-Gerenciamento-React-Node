const Setor = require("./Setor");

class Equipamento {
	constructor({ id, nome, marca, descricao, codigo, valor, setor }) {
		this.id = id;
		this.nome = nome;
		this.marca = marca;
		this.descricao = descricao;
		this.codigo = codigo;
		this.valor = valor;
		this.setor = setor;
	}
}

// class Equipamento {
// 	constructor({ id, nome, marca, descricao, codigo, valor }) {
// 		this.id = id;
// 		this.nome = nome;
// 		this.marca = marca;
// 		this.descricao = descricao;
// 		this.codigo = codigo;
// 		this.valor = valor;
// 	}
// }

module.exports = Equipamento;
