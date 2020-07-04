import React, { Component } from 'react'
import TodoItem from './TodoItem';
import { Button, Card, CardBody } from 'reactstrap';

export default class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props;
        return (
            <Card className="my-5">
                
                    <ul className="list-group">
                    <CardBody>
                        <h3 className="text-capitalize text-center">your tasks</h3>
                        {
                            items.map(item => {
                                return <div>{item.title && <TodoItem 
                                            key={item.id} 
                                            title={item.title} 
                                            handleDelete={() => handleDelete(item.id)}
                                            handleEdit={() => handleEdit(item.id)} /> }
                                        </div>                                
                            })
                        }
                        
                        <Button className="btn btn-secondary btn-block text-capitalize mt-5" 
                                onClick={clearList}>clear tasks</Button>
                    </CardBody>
                    </ul>
            </Card>
        )
    }
}
