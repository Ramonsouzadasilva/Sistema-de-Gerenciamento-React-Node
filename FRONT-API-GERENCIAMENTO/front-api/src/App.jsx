import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import SetorRoutes from "./routes/SetorRoutes";
import EquipamentoRoutes from "./routes/EquipamentoRoutes";

function App() {
	return (
		<div className="App">
			<h1>Gerenciamento de Setores e Equipamentos</h1>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Menu />} />
					<Route path="/setores/*" element={<SetorRoutes />} />
					<Route path="/equipamentos/*" element={<EquipamentoRoutes />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
