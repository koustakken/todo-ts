import React from 'react';
import styles from './App.module.css';

// components
import { Header, Panel, TodoList } from './components'


export const App = () => (
	<div className={styles.app_container}>
		<div className={styles.container}>
			<Header />
			<Panel />
			<TodoList />
		</div>
	</div>
)
