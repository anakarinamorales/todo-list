import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    // adds dynamic CSS for TodoItem
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            display: 'block',
            fontSize: '14px',
            padding: '1em',
            borderBottom: '1px #cccccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;

        return (
        <article style={this.getStyle()}>
            <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} style={hideCheckbox} /> {' '}
            <label for={"checkbox" + id} style={styledCheckbox}></label>
            <span style={todoTextStyle}> {title} </span>
            <button style={btnStyle} type="button"> x </button>
        </article>
        )
    }
}

//PropTypes
// A validation for properties that a componet should have
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

//TodoItem Inline Styles
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

todoTextStyle = {
    display: 'inline-block',
    verticalAlign: 'middle'
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