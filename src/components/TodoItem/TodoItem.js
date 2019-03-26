import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';


export class TodoItem extends Component {
    // adds dynamic CSS for TodoItem
    getTodoItemStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            display: 'block',
            fontSize: '14px',
            padding: '1em',
            borderBottom: '1px #cccccc dotted',
        }
    }

    getCompletedStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;

        return (
        <article style={this.getTodoItemStyle()}>
            <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} /> {' '}
            <label htmlFor={"checkbox" + id} className="styledCheckbox"></label>
            <span className="todoText" style={this.getCompletedStyle()}> {title} </span>
            <button type="button" className="deleteBtn" onClick={this.props.deleteItem.bind(this, id)}> x </button>
        </article>
        )
    }
}

//PROPTYPES
// A validation for properties that a componet should have
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;