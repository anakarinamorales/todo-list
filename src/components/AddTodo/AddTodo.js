import React, { Component } from 'react';
import './AddTodo.css';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (evt) => this.setState({ title: evt.target.value });

    onSubmit = (evt) => {
        evt.preventDefault(); // prevent the form to be submitted
        this.props.addTodo(this.state.title); // send the actual title that was typed
        this.setState({ title: '' }) // clear the form field
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="addTodoForm">
                <input
                    type="text"
                    name="title"
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange}
                    className="addInput"
                />

                <input
                    type="submit"
                    value="+"
                    className="addItemBtn"
                    title="Add"
                />
            </form>
        )
    }
}

export default AddTodo;
