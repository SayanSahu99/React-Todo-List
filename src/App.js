import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import { v4 as uuidv4 } from 'uuid';
import 'font-awesome/css/font-awesome.min.css'
import TaskCompleted from './components/TaskCompleted';
import './App.css'

require('dotenv').config()

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      id: uuidv4(),
      item: '',
      editItem: false,
      striked: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    if(this.state.item.replace(/^\s+|\s+$/g, '') === ''){
      this.setState({
        item: '',
        editItem: false
      });
      return;
    }

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: '',
      id: uuidv4(),
      editItem: false,
    });
  }

  clearList = () =>{
    this.setState({
      items: [],
      striked: []
    });
  }

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const striked = [...this.state.striked];
    if(striked.includes(id)) {
      const index = striked.indexOf(id);      
      if(index > -1){
        striked.splice(index, 1);
      }

      this.setState({
        items: filteredItems,
        striked: striked
      });
    }
    else{
      this.setState({
        items: filteredItems,
        striked: striked
      });
    }
  }

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    });
  }

  handleDone = (id) => {
    const striked = [...this.state.striked];
    
    if(striked.includes(id)) {
      let newStriked = [...striked]
      const index = newStriked.indexOf(id);
      if (index > -1) {
        newStriked.splice(index, 1);
      }
      this.setState({
        striked: newStriked
      });  
    }
    else if (!striked.includes(id)){
      let newStriked = [...striked, id]
      this.setState({
        striked: newStriked
      }); 
    }
     
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 mx-auto mt-4">
              <Header />
              <TodoInput item={this.state.item} 
                        handleChange={this.handleChange} 
                        handleSubmit={this.handleSubmit}
                        editItem={this.state.editItem} />
              
              <TaskCompleted items={this.state.items}
                             striked={this.state.striked}/>

              <TodoList items={this.state.items} 
                        clearList={this.clearList} 
                        handleDelete={this.handleDelete} 
                        handleEdit={this.handleEdit}
                        handleDone={this.handleDone}
                        striked={this.state.striked} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
