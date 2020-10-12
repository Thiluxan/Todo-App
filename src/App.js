import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/header.js';
import AddTodo from './components/AddTodo.js';
import uuid from 'react-uuid';

class App extends Component {

  state = {
    todos: [
      {
        id:uuid(),
        title: 'Learn Node', 
        completed: false
      },
      {
        id:uuid(),
        title: 'Learn javascript', 
        completed: false
      },
      {
        id:uuid(),
        title: 'Learn Angular', 
        completed: false
      },
      {
        id:uuid(),
        title: 'Learn React', 
        completed: false
      }
    ]
  }

  //Toggle complete 
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  delTodo = (id) =>{
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  addTodo = (title) =>{
    const newTodo = {
      id:uuid(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos = {this.state.todos} 
        markComplete={this.markComplete}
        delTodo = {this.delTodo}
        />
      </div>
      
    </div>
  );
  }
  
}

export default App;
