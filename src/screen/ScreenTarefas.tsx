import {useState, useEffect} from 'react';

import {
	Checkbox,
	Container,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";

const TelaListaTarefas = (props: any) => {
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${props.user.id}/todos`)
            .then(response => response.json())
            .then(json => setTarefas(json))
    });

	return (
		<Container>
			<Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
				{props.user.name}
			</Typography>
			<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
				Lista de tarefas
			</Typography>
			<List>
				{tarefas.map((value) => {
					const labelId = `checkbox-list-label-${value.id}`;

					return (
						<ListItem key={value.id} disablePadding>
							<ListItemButton role={undefined} dense>
								<ListItemIcon>
									<Checkbox
										edge="start"
										checked={value.completed}
										tabIndex={-1}
										disableRipple
										inputProps={{
											"aria-labelledby": labelId,
										}}
									/>
								</ListItemIcon>
								<ListItemText
									id={labelId}
									primary={value.title}
								/>
							</ListItemButton>
						</ListItem>
					);
				})}
			</List>
		</Container>
	);
};

export default TelaListaTarefas;
