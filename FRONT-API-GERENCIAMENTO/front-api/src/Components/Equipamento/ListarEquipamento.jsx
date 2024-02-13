import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ListarEquipamento = () => {
	const [equipamentoData, setEquipamentoData] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const LoadDetail = (id) => {
		navigate("/equipamentos/detalhar/" + id);
	};
	const LoadEdit = (id) => {
		navigate("/equipamentos/editar/" + id);
	};

	const Removefunction = (id) => {
		if (window.confirm("Deseja realmente remover o Equipamento?")) {
			fetch("http://localhost:3000/equipamentos/" + id, {
				method: "DELETE",
			})
				.then((response) => {
					if (response.ok) {
						alert("Removido com Sucessso.");
						window.location.reload();
					} else {
						throw new Error("Falha ao tentar deletar.");
					}
				})
				.catch((err) => {
					console.log(err.message);
				});
		}
	};

	useEffect(() => {
		const searchUrl = searchTerm
			? `http://localhost:3000/equipamentos/buscar?nome=${searchTerm}`
			: "http://localhost:3000/equipamentos";

		fetch(searchUrl)
			.then((response) => response.json())
			.then((responseData) => {
				setEquipamentoData(responseData);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, [searchTerm]);

	return (
		<div className="container">
			<div className="card">
				<div className="card-title">
					<h2>Equipamentos</h2>
				</div>
				<div className="card-body">
					<div className="d-flex justify-content-between align-items-center mb-3">
						<div>
							<Link to="/equipamentos/criar" className="btn btn-success">
								Novo Equipamento (+)
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
								<td>Ações</td>
							</tr>
						</thead>
						<tbody>
							{equipamentoData &&
								equipamentoData.map((item) => (
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
												Detalhes
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

export default ListarEquipamento;
