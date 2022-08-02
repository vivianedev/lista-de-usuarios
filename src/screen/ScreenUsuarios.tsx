import { Container } from "@mui/material";

const TelaListaUsuarios = (props: any) => {
	return (
		<Container>
			<h1>Lista de usuários</h1>
			<div className="card">
				{props.loading ? <h2>Carregando...</h2> : null}
				<ul>
					{props.data.map((user: any) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			</div>
		</Container>
	);
};

export default TelaListaUsuarios;