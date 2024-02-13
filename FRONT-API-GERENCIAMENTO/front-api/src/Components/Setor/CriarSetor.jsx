/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CriarSetor = () => {
	const [id, setId] = useState("");
	const [nome, setNome] = useState("");
	const [codigo, setCodigo] = useState("");
	const [validation, setValidation] = useState(false);
	const navigate = useNavigate();

	const handlesubmit = (event) => {
		event.preventDefault();
		const setorData = { nome, codigo };

		fetch("http://localhost:3000/setores", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(setorData),
		})
			.then((response) => {
				alert("Adicionado com Sucesso.");
				navigate("/setores/listar");
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<div>
			<div className="row">
				<div className="offset-lg-3 col-lg-6">
					<form className="container" onSubmit={handlesubmit}>
						<div className="card" style={{ textAlign: "left" }}>
							<div className="card-title">
								<h2>Criar Setor</h2>
							</div>
							<div className="card-body">
								<div className="row">
									<div className="col-lg-12">
										<div className="form-group">
											<label>ID</label>
											<input
												value={id}
												disabled="disabled"
												className="form-control"
											></input>
										</div>
									</div>

									<div className="col-lg-12">
										<div className="form-group">
											<label>Nome</label>
											<input
												required
												value={nome}
												onMouseDown={(event) => setValidation(true)}
												onChange={(event) => setNome(event.target.value)}
												className="form-control"
											></input>
											{nome.length == 0 && validation && (
												<span className="text-danger">Digite o Nome</span>
											)}
										</div>
									</div>

									<div className="col-lg-12">
										<div className="form-group">
											<label>Codigo</label>
											<input
												value={codigo}
												onChange={(event) => setCodigo(event.target.value)}
												className="form-control"
											></input>
										</div>
									</div>

									<div className="col-lg-12">
										<div className="form-group">
											<button className="btn btn-success" type="submit">
												Salvar
											</button>
											<Link to="/setores/listar" className="btn btn-danger">
												Voltar
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CriarSetor;
