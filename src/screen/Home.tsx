import { useState, useEffect } from "react";
import { User } from "../@types/types";
import { 
	Box, 
	Card, 
	Link, 
	Typography 
} from '@mui/material';
import { Navbar } from "../components/Navbar";


export const Home = (props: any) => {
	const [users, setUsers] = useState<User[]>([]);

	const queryData = () => {
		fetch("https://jsonplaceholder.typicode.com/users/")
			.then((response) => response.json())
			.then((json) => {
				setUsers(json);
			})
	}

	useEffect(() => {
		queryData()
	}, []);

	return (
		<Box
			sx={{
				width: '100vw',
				minHeight: '100vh',
				backgroundColor: '#ba1141'
			}}
		>
			<Navbar />
		
			<Box
				sx={{
					maxWidth: '100%',
					height: '100%',
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Box sx={{ width: '100%' }}>
					<Typography variant="h3" sx={{ marginBottom: '20px', textAlign: 'center', color: 'white' }}>Usuários</Typography>
					<Box sx={{ display: 'flex', flexWrap: 'wrap',  padding: '10px', gap: '10px', justifyContent: 'center' }}>
						{users.map(user => (
							<Card
								sx={{
									border: '1px solid black',
									padding: '20px',
									width: '300px',
								}}
							>
								<Box>
									<Typography>{user.email}</Typography>
									<Typography>{user.name}</Typography>
									<Typography>({user.username})</Typography>
								</Box>
								<Box sx={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
									<Link href={`tasks/${user.id}?name=${user.name}`}>Tarefas</Link>
									<Link href={`posts/${user.id}?name=${user.name}`}>Posts</Link>
								</Box>
							</Card>
						))}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};