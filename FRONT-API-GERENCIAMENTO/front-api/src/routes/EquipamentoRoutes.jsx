import { Routes, Route } from "react-router-dom";
import ListarEquipamento from "../Components/Equipamento/ListarEquipamento";
import EditarEquipamento from "../Components/Equipamento/EditarEquipamento";
import CriarEquipamento from "./../Components/Equipamento/CriarEquipamento";
import DetalharEquipamento from "./../Components/Equipamento/DetalharEquipamento";

const EquipamentoRoutes = () => {
	return (
		<Routes>
			<Route path="listar" element={<ListarEquipamento />} />
			<Route path="criar" element={<CriarEquipamento />} />
			<Route path="editar/:equipamentoid" element={<EditarEquipamento />} />
			<Route path="detalhar/:equipamentoid" element={<DetalharEquipamento />} />
		</Routes>
	);
};

export default EquipamentoRoutes;
