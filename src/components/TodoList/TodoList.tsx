import React from 'react'

import { TodoItem } from './TodoItem/TodoItem'

import { TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody } from '@mui/material'

const list = [
	{ id: 0, desc: 'sample 1', checked: false },
	{ id: 1, desc: 'sample 2', checked: false },
	{ id: 2, desc: 'sample 3', checked: true },
	{ id: 3, desc: 'sample 4', checked: false },
]

export const TodoList = () => <TableContainer component={Paper}>
	<Table sx={{ marginTop: 2 }}>
	<TableHead>
          <TableRow>
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Checked</TableCell>
            <TableCell align="left" colSpan={2}>Actions</TableCell>
          </TableRow>
        </TableHead>
		<TableBody>
			{list.map((item, index) => <TodoItem key={index} todo={item} />)}
		</TableBody>
	</Table>
</TableContainer>
