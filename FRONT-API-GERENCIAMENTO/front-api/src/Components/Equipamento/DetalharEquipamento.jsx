/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetalharEquipamento = () => {
	const { equipamentoid } = useParams();

	const [equipamentoData, setEquipamentoData] = useState({});

	useEffect(() => {
		fetch("http://localhost:3000/equipamentos/" + equipamentoid)
			.then((response) => {
				return response.json();
			})
			.then((responseData) => {
				setEquipamentoData(responseData);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, [equipamentoid]);

	return (
		<div>
			{/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

			<div className="container">
				<div className="card row" style={{ textAlign: "left" }}>
					<div className="card-title">
						<h2>Detalhes do Equipamento {equipamentoData.nome}</h2>
					</div>
					<div className="card-body"></div>

					{equipamentoData && (
						<div>
							<h2>
								O Equipamento é : <b>{equipamentoData.nome}</b> com o ID: (
								{equipamentoData.id})
							</h2>
							<h5>Da Marca: {equipamentoData.marca}</h5>
							<h5>Descrição é : {equipamentoData.descricao}</h5>
							<h5>Codigo : {equipamentoData.codigo}</h5>
							<h5>Com o valor de : R$ {equipamentoData.valor}</h5>
							<h5>Pertence ao Setor de : {equipamentoData.setor}</h5>
							<Link className="btn btn-danger" to="/equipamentos/listar">
								Voltar a Listagem
							</Link>
						</div>
					)}
				</div>
			</div>
			{/* </div>
            </div> */}
		</div>
	);
};

export default DetalharEquipamento;
