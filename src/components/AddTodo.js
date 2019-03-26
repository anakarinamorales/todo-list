import React, { Component } from 'react'

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
        <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange}
                ></input>

                <input
                    type="submit"
                    value="submit"
                    className="addItemBtn"
                ></input>
        </form>
        )
    }
}

export default AddTodo;
