import { Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";

import AppNavBar from "./components/AppNavBarComponent";
import TelaListaTarefas from "./screen/ScreenTarefas";
import TelaListaUsuarios from "./screen/ScreenUsuarios";

const App = (props: any) => {
	const [users, setUsers] = useState([
		{ id: 1, name: "Minora" },
		{ id: 2, name: "Ataide" },
	]);
	const [loading, setLoading] = useState(true);
	const [tela, setTela] = useState(1);
	const telas = [
		<TelaListaUsuarios data={users} loading={loading} />,
		<TelaListaTarefas user={ {id: 2, name: "Ervin Howell"} } />,
	];

  const handleMudancaTela = (index: number) => {
    setTela(index);
  }

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/")
			.then((response) => response.json())
			.then((json) => {
				setUsers(json);
				setLoading(false);
			});
	});
	return (
		<Container maxWidth="sm">
			<AppNavBar onChangeScreen={handleMudancaTela} />
			{telas[tela]}
		</Container>
	);
};

export default App;
