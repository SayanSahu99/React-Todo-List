import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid';
import 'font-awesome/css/font-awesome.min.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TodoInput />
        <TodoList />
      </div>
    )
  }
}

export default App;
