import React, { Component } from 'react';
import uuid from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';
import AddTodo from './components/AddTodo/AddTodo';

class App extends Component {
	state = {
		todos: [
			{
				id: uuid.v4(),
				title: 'Take out the trash',
				completed: false
			},
			{
				id: uuid.v4(),
				title: 'Dinner with husband',
				completed: false
			},
			{
				id: uuid.v4(),
				title: 'Meeting with husband',
				completed: false
			}
		]
	}

	/**
	 * Changes the 'completed' attribute of TodoItem object to the opposite value.
	 * True becomes false. False becomes true.
	 */
	toggleComplete = (id) => {
		this.setState({ todos: this.state.todos.map(todo => {
			if(todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		}) });
	}

	/** Delete TodoItem 
	 * Copies everything thas is already there and returns any todoItem that where
	 * the id is not equal to the id thas is passed
	*/
	deleteItem = (id) => {
		this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
	}

	/**
	 * Add a new TodoItem
	 */
	addTodo = (title) => {
		const newTodo = {
			id: uuid.v4(),
			title,
			completed: false
		}
		this.setState({ todos: [...this.state.todos, newTodo] });
	}

	render() {
		return (
			<div className="App">
				<Header />
				<AddTodo addTodo={this.addTodo} />
				<Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteItem={this.deleteItem}/>
			</div>
		);
	}
}

export default App;
