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
      <div className="container">
      <div className="row">
        <div className="col-10 col-md-8 mx-auto mt-4">
            <Header />
            <h3 className="text-capitalize text-center">enter tasks</h3>
            <TodoInput />
            <TodoList />
        </div>
      </div>
      </div>
    )
  }
}

export default App;
