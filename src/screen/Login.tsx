import { useState } from "react";
import { 
	Box, 
	Button, 
	Card, 
	InputAdornment, 
	TextField, 
	Typography 
} from '@mui/material';
import { Navbar } from "../components/Navbar";
import { AuthUser } from "../context/AuthContext";
import { BiLogIn } from 'react-icons/bi'
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const Login = (props: any) => {
	const { login, isAuthenticated } = useAuth()
	const [loginData, setLoginData] = useState<AuthUser>({ name: '' })
	const navigate = useNavigate()

	if (isAuthenticated) navigate('/home')

	return (
		<Box
			sx={{
				width: '100vw',
				minHeight: '100vh',
				backgroundColor: '#ba1141',
			}}
		>
			<Navbar />

			<Box
				sx={{
					width: '100vw',
					height: '100%',
					display: "flex",
					justifyContent: 'center',
					alignItems: "center",
					flexDirection: "column",
					backgroundColor: '#ba1141',
				}}
			>
				<Card
					sx={{
						padding: '15px',
						backgroundColor: '#white'
					}}
				>
					<Box>
						<TextField
							fullWidth
							sx={{ outlineColor: 'black' }}
							label='Nome'
							placeholder='Nome'
							value={loginData.name}
							onChange={(e) => setLoginData(prev => ({ ...prev, name: e.target.value }))}
						/>
						<Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
							<Button 
								sx={{ 
									backgroundColor: '#8a0030',
									'&:hover': {
										backgroundColor: '#ba1141',
									},
								}}
								variant='contained'
								onClick={() => login(loginData)}
							>
								Login
							</Button>
						</Box>
					</Box>
				</Card>
			</Box>
		</Box>
	);
};