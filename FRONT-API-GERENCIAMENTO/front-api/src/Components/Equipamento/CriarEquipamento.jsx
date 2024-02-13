/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const CriarEquipamento = () => {
	const [id, setId] = useState("");
	const [nome, setNome] = useState("");
	const [marca, setMarca] = useState("");
	const [descricao, setDescricao] = useState("");
	const [codigo, setCodigo] = useState("");
	const [valor, setValor] = useState("");
	const [setor_id, setSetorId] = useState("");
	const [validation, setValidation] = useState(false);

	const [setores, setSetores] = useState([]); // Estado para armazenar os setores

	const navigate = useNavigate();

	const handleSetorChange = (value) => {
		const setorId = parseInt(value, 10);
		setSetorId(setorId); // Use setSetor para atualizar o estado
	};

	const handleValorChange = (value) => {
		// Use parseFloat para converter o valor para ponto flutuante
		const valorFloat = parseFloat(value);
		setValor(isNaN(valorFloat) ? "" : valorFloat); // Certifica-se de que é um número ou uma string vazia
	};

	useEffect(() => {
		// Função para buscar os setores da URL
		const fetchSetores = async () => {
			try {
				const response = await fetch("http://localhost:3000/setores");
				const data = await response.json();
				// Atualiza o estado com os setores obtidos da URL
				setSetores(data);
			} catch (error) {
				console.error("Erro ao obter setores:", error);
			}
		};

		// Chama a função para buscar os setores ao montar o componente
		fetchSetores();
	}, []); // O segundo parâmetro vazio faz com que o useEffect seja executado apenas uma vez, ao montar o componente

	const handleSubmit = (event) => {
		event.preventDefault();
		const equipamentoData = { nome, marca, descricao, codigo, valor, setor_id };

		fetch("http://localhost:3000/equipamentos", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(equipamentoData),
		})
			.then((res) => {
				alert("Salvo com Sucesso.");
				navigate("/equipamentos/listar");
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<div>
			<div className="row">
				<div className="offset-lg-3 col-lg-6">
					<form className="container" onSubmit={handleSubmit}>
						<div className="card" style={{ textAlign: "left" }}>
							<div className="card-title">
								<h2>Cadastrar Equipamento</h2>
							</div>
							<div className="card-body">
								{/* Restante do código... */}
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

								{/* NOME */}
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
											<span className="text-danger">Nome</span>
										)}
									</div>
								</div>
								{/* NOME */}

								{/* MARCA */}
								<div className="col-lg-12">
									<div className="form-group">
										<label>Marca</label>
										<input
											required
											value={marca}
											onMouseDown={(event) => setValidation(true)}
											onChange={(event) => setMarca(event.target.value)}
											className="form-control"
										></input>
									</div>
								</div>
								{/* MARCA */}

								{/* DESCRIÇÃO */}
								<div className="col-lg-12">
									<div className="form-group">
										<label>Descrição</label>
										<input
											value={descricao}
											onChange={(event) => setDescricao(event.target.value)}
											className="form-control"
										></input>
									</div>
								</div>
								{/* DESCRIÇÃO */}

								{/* CODIGO */}
								<div className="col-lg-12">
									<div className="form-group">
										<label>Codigo</label>
										<input
											required
											onMouseDown={(event) => setValidation(true)}
											value={codigo}
											onChange={(event) => setCodigo(event.target.value)}
											className="form-control"
										></input>
									</div>
								</div>
								{/* CODIGO */}

								{/* VALOR */}
								<div className="col-lg-12">
									<div className="form-group">
										<label>Valor</label>
										<input
											value={valor}
											onChange={(event) => setValor(event.target.value)}
											className="form-control"
										></input>
									</div>
								</div>
								{/* VALOR */}

								{/* SETOR */}
								<div className="col-lg-12">
									<div className="form-group">
										<label>Setor</label>
										<select
											required
											value={setor_id}
											onMouseDown={(event) => validationChange(true)}
											onChange={(event) => setSetorId(event.target.value)}
											className="form-control"
										>
											<option value="" disabled>
												Selecione um setor
											</option>
											{setores.map((setor) => (
												<option key={setor.id} value={setor.id}>
													{setor.nome}
												</option>
											))}
										</select>
										{validation && (
											<span className="text-danger">Informe o setor</span>
										)}
									</div>
								</div>
								{/* SETOR */}

								<div className="col-lg-12">
									<div className="form-group">
										<button className="btn btn-success" type="submit">
											Salvar
										</button>
										<Link to="/equipamentos/listar" className="btn btn-danger">
											Voltar
										</Link>
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

export default CriarEquipamento;
