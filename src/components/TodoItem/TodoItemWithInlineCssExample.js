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
            display: 'inline-block',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            verticalAlign: 'middle'
        }
    }

    render() {
        const { id, title } = this.props.todo;

        return (
        <article style={this.getTodoItemStyle()}>
            <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} style={hideCheckbox} /> {' '}
            <label htmlFor={"checkbox" + id} style={styledCheckbox}></label>
            <span className="todoText" style={this.getCompletedStyle()}> {title} </span>
            <button type="button" style={btnStyle}> x </button>
        </article>
        )
    }
}

//PROPTYPES
// A validation for properties that a componet should have
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

//TODOITEM INLINE STYLES
const hideCheckbox = {
    display: 'none'
},

styledCheckbox = {
    backgroundColor: '#FFFFFF',
    border: '1px solid #C0C0C0',
    borderRadius: '2px',
    display: 'inline-block',
    height: '1.3em',
    margin: '0 0.7em 0 0',
    position: 'relative',
    verticalAlign: 'middle',
    width: '1.3em'
},

btnStyle = {
    backgroundColor: '#FF0000',
    border: 'none',
    borderRadius: '100%',
    color: '#FFFFFF',
    cursor: 'pointer',
    display: 'inline-block',
    float: 'right',
    fontSize: '12px',
    padding: '.2em .6em .35em',
    textAlign: 'center',
    verticalAlign: 'middle'
}

export default TodoItem