import React from 'react'

import { Paper, TextField, Button } from '@mui/material'

export const Panel = () => {
	const [value, setValue] = React.useState('');

	const onClick = () => {
		console.log(value);
		setValue('');
	}

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;
		setValue(inputValue);
	}

	return (
		<Paper elevation={3} sx={{ padding: '25px 30px', display: 'flex', justifyContent: 'space-between', alignContent: 'center', gap: 5 }}>
			<TextField value={value} onChange={onChange} label='Todo Text' fullWidth />
			<Button variant='outlined' onClick={onClick}>ADD</Button>
		</Paper>
	)
}
