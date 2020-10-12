import React, { Component } from 'react';
import propTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            backgroundColor: 'grey',
            padding: '10px',
            borderBottom: '3px solid white'
        }
    }
    
    render() {
        const{id,title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input 
                    type="checkbox" 
                    onChange={this.props.markComplete.bind(this,id)}
                     />{''}
                    {title}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: propTypes.object.isRequired
}

const btnStyle = {
    background:'red',
    color:'white',
    border:'none',
    padding:'5px 10px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}

export default TodoItem;