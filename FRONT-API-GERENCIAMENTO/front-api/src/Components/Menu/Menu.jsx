// Menu.js
import { Link } from "react-router-dom";

const Menu = () => {
	return (
		<div className="container mt-5">
			<div className="card text-center">
				<div className="card-header">
					<h2>Menu de Opções do Sistema</h2>
				</div>
				<div className="card-body d-flex justify-content-around">
					<div className="me-4">
						<h3>Opções para Setor</h3>
						<ul className="list-unstyled">
							<li>Listar Todos</li>
							<li>Atualizar</li>
							<li>Deletar</li>
							<li>Valores por Setor</li>
							<li>Ver Equipamentos por Setor</li>
						</ul>
						<Link className="btn btn-danger mt-3" to="/setores/listar">
							Ir para Setores
						</Link>
					</div>
					<div>
						<h3>Opções para Equipamento</h3>
						<ul className="list-unstyled">
							<li>Listar Todos</li>
							<li>Atualizar</li>
							<li>Deletar</li>
							<li>Detalhar Equipamentos</li>
						</ul>
						<Link className="btn btn-danger mt-3" to="/equipamentos/listar">
							Ir para Equipamentos
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
