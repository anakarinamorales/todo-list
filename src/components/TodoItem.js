import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    // adds dynamic CSS
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #cccccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;

        return (
        <div style={this.getStyle()}>
            <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                { title }
            </p>
        </div>
        )
    }
}

//PropTypes
// A validation for properties that a componet should have
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  }

export default TodoItem