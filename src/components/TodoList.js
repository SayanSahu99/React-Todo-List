import React, { Component } from 'react'
import TodoItem from './TodoItem';
import { Button } from 'reactstrap';

export default class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props;
        return (
            <div>
                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center">your tasks</h3>
                    {
                        items.map(item => {
                            return <TodoItem 
                                        key={item.id} 
                                        title={item.title} 
                                        handleDelete={() => handleDelete(item.id)}
                                        handleEdit={() => handleEdit(item.id)} />                                    
                        })
                    }
                    
                    <Button className="btn btn-danger btn-block text-capitalize mt-5" onClick={clearList}>clear tasks</Button>
                </ul>
            </div>
        )
    }
}
