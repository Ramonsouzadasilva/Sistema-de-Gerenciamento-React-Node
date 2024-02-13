import { Routes, Route } from "react-router-dom";
import ListarSetor from "../Components/Setor/ListarSetor";
import EditarSetor from "../Components/Setor/EditarSetor";
import SetorDetalhes from "../Components/Setor/DetalhesSetor";
import CriarSetor from "../Components/Setor/CriarSetor";

const SetorRoutes = () => {
	return (
		<Routes>
			<Route path="listar" element={<ListarSetor />} />
			<Route path="criar" element={<CriarSetor />} />
			<Route path="editar/:setorid" element={<EditarSetor />} />
			<Route path="detalhar/:setorid" element={<SetorDetalhes />} />
		</Routes>
	);
};

export default SetorRoutes;
