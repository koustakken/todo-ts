import React from 'react'

import { Button, TableRow, TableCell } from '@mui/material'

interface TodoItemProps {
	todo: {
		id: number,
		desc: string,
		checked: boolean
	}
}

export const  TodoItem: React.FC<TodoItemProps> = ({todo}) => {
	const [checked, setChecked] = React.useState(todo.checked);

	const checkToggle = () => {
		setChecked(!checked);
	}


  return (
	<TableRow>
		<TableCell>{todo.id}</TableCell>
		<TableCell>{todo.desc}</TableCell>
		<TableCell><input type='checkbox' checked={checked} onClick={checkToggle} /></TableCell>
		<TableCell><Button variant='contained' color='secondary'>EDIT</Button></TableCell>
		<TableCell><Button variant='contained' color='error'>DELETE</Button></TableCell>
	</TableRow>
  )
}
