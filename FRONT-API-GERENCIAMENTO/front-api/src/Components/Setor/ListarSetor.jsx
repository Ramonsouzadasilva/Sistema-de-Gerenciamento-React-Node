import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ListarSetor = () => {
	const [setorData, setSetorData] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");

	const navigate = useNavigate();

	const LoadDetail = (id) => {
		navigate("/setores/detalhar/" + id);
	};

	const LoadEdit = (id) => {
		navigate("/setores/editar/" + id);
	};

	const Removefunction = (id) => {
		if (window.confirm("Você realmente deseja remover este Setor?")) {
			fetch("http://localhost:3000/setores/" + id, {
				method: "DELETE",
			})
				// eslint-disable-next-line no-unused-vars
				.then((response) => {
					alert("Removido com Sucesso.");
					window.location.reload();
				})
				.catch((err) => {
					console.log(err.message);
				});
		}
	};

	useEffect(() => {
		const searchUrl = searchTerm
			? `http://localhost:3000/setores/buscarSetor?nome=${searchTerm}`
			: "http://localhost:3000/setores";

		fetch(searchUrl)
			.then((response) => response.json())
			.then((responseData) => {
				setSetorData(responseData);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, [searchTerm]);

	return (
		<div className="container">
			<div className="card">
				<div className="card-title">
					<h2>Setores</h2>
				</div>
				<div className="card-body">
					<div className="d-flex justify-content-between align-items-center mb-3">
						<div>
							<Link to="/setores/criar" className="btn btn-success">
								Novo Setor (+)
							</Link>

							<Link to="/" className="btn btn-warning ms-3">
								Menu Principal
							</Link>
						</div>
						<div className="d-flex align-items-center">
							<label className="me-2 fs-5 fw-bold text-dark">Pesquisar</label>
							<input
								type="text"
								className="form-control"
								id="searchTerm"
								placeholder="Pesquisar por nome"
								value={searchTerm}
								onChange={(event) => setSearchTerm(event.target.value)}
							/>
						</div>
					</div>
					<table className="table table-bordered">
						<thead className="bg-dark text-white">
							<tr>
								<td>ID</td>
								<td>Nome</td>
								<td>Codigo</td>
								<td>Opções</td>
							</tr>
						</thead>
						<tbody>
							{setorData &&
								setorData.map((item) => (
									<tr key={item.id}>
										<td>{item.id}</td>
										<td>{item.nome}</td>
										<td>{item.codigo}</td>
										<td>
											<a
												onClick={() => {
													LoadEdit(item.id);
												}}
												className="btn btn-success"
											>
												Editar
											</a>
											<a
												onClick={() => {
													Removefunction(item.id);
												}}
												className="btn btn-danger"
											>
												Remover
											</a>

											<a
												onClick={() => {
													LoadDetail(item.id);
												}}
												className="btn btn-primary"
											>
												Detalhar
											</a>
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ListarSetor;
