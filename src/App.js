import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import { v4 as uuidv4 } from 'uuid';
import 'font-awesome/css/font-awesome.min.css'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      id: uuidv4(),
      item: '',
      editItem: false
    };
  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    console.log(newItem);

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: '',
      id: uuidv4(),
      editItem: false
    });
  }

  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-10 col-md-8 mx-auto mt-4">
            <Header />
            <h3 className="text-capitalize text-center">enter tasks</h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            <TodoList items={this.state.items} />
        </div>
      </div>
      </div>
    )
  }
}

export default App;
