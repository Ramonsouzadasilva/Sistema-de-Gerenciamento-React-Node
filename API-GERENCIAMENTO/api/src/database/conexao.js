const { Pool } = require("pg");
require("dotenv").config();

try {
	const pool = new Pool({
		user: process.env.PG_USER,
		host: process.env.PG_HOST,
		database: process.env.PG_DB,
		password: process.env.PG_PASSWORD,
		port: process.env.PG_PORT,
	});

	module.exports = pool;
} catch (error) {
	console.error("Erro ao conectar com o banco de dados:", error);
}
