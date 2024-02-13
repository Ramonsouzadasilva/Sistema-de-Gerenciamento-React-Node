/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SetorDetalhes = () => {
	const { setorid } = useParams();

	const [setorData, setSetorData] = useState({});
	const [valorTotal, setValorTotal] = useState("");
	const [quantidadeTotal, setQuantidadeTotal] = useState("");

	useEffect(() => {
		fetch("http://localhost:3000/setores/" + setorid)
			.then((response) => {
				return response.json();
			})
			.then((responseData) => {
				setSetorData(responseData);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	useEffect(() => {
		fetch("http://localhost:3000/setores/dados/quantidade/" + setorid)
			.then((response) => response.json())
			.then((responseDataQuantidade) => {
				setQuantidadeTotal(responseDataQuantidade.quantidadeEquipamentos);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, [setorid]);

	useEffect(() => {
		fetch("http://localhost:3000/setores/dados/valor/" + setorid)
			.then((response) => response.json())
			.then((responseDataValor) => {
				setValorTotal(responseDataValor.valorTotalEquipamentos);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, [setorid]);

	return (
		<div>
			<div className="container">
				<div className="card row" style={{ textAlign: "left" }}>
					<div className="card-title">
						<h2>Detalhes do Setor de {setorData.nome}</h2>
					</div>
					<div className="card-body"></div>

					{setorData && (
						<div>
							<h2>
								O Setor é : <b>{setorData.nome}</b> com o ID: ({setorData.id})
							</h2>
							<h2>Mais informações</h2>
							<h5>Codigo do SETOR : {setorData.codigo}</h5>
							<h5>Valor Total em Equipamentos : R$ {valorTotal}</h5>
							<h5>Equipamentos existentes no Setor : {quantidadeTotal}</h5>
							<Link className="btn btn-danger" to="/setores/listar">
								Voltar ao Listar
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default SetorDetalhes;
