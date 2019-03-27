import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import uuid from 'uuid';
import axios from 'axios';

import './App.css';

// Components
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';
import AddTodo from './components/AddTodo/AddTodo';
import About from './components/pages/About/About';
import Footer from './components/Footer/Footer';

class App extends Component {
	state = {
		todos: []
	}

	/**
	 * Fetch the todos from json placeholder API
	 */
	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then(response => this.setState({ todos: response.data }));
	}

	/**
	 * Changes the 'completed' attribute of 
	 * TodoItem object to the opposite value.
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

	/**
	 * Delete TodoItem 
	 * Copies everything thas is already there and returns any 
	 * todoItem that not matches the passed id
	*/
	deleteItem = (id) => {
		axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then(response => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
	}

	/**
	 * Add a new TodoItem
	 */
	addTodo = (title) => {
		axios.post('https://jsonplaceholder.typicode.com/todos', {
			title,
			completed: false
		}).then(response => this.setState({ todos: [...this.state.todos, response.data]}));
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Header />

					{/* Route to main page */}
					<Route exact path="/" render={props => (
						<main>
							<AddTodo addTodo={this.addTodo} />
							<Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteItem={this.deleteItem}/>
						</main>
					)} />

					<Route path="/about" component={About} />

					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
