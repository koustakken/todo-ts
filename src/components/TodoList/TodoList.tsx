import React from 'react'

import { TodoItem } from './TodoItem/TodoItem'

import { Box, TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody, TableFooter, TablePagination } from '@mui/material'

const list = [
	{ id: 0, desc: 'sample 1', checked: false },
	{ id: 1, desc: 'sample 2', checked: false },
	{ id: 2, desc: 'sample 3', checked: true },
	{ id: 3, desc: 'sample 4', checked: false },
	{ id: 4, desc: 'sample 5', checked: false },
	{ id: 5, desc: 'sample 6', checked: true },
	{ id: 6, desc: 'sample 7', checked: true },
]

export const TodoList = () => {

	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	
	const handlePageChange = (event: any, newPage: any) => {
		setPage(newPage);
	}

	const handleRowsPerPageChange = (event: any) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

	return (
		<Box>
			<TableContainer component={Paper}>
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
						{list
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((item, index) => <TodoItem key={index} todo={item} />)}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				page={page}
				rowsPerPage={rowsPerPage}
				count={list.length}
				rowsPerPageOptions={[5, 10, 25]}
				component="div"
				onPageChange={handlePageChange}
				onRowsPerPageChange={handleRowsPerPageChange}
			/>
		</Box>
	)
}
