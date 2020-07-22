import React, { Component } from 'react'
import TodoItem from './TodoItem';
import { Button, Card, CardBody } from 'reactstrap';

export default class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit, handleDone, striked } = this.props;
        console.log(items);
        return (
            <Card className="my-4">
                
                    <ul className="list-group">
                    <CardBody>
                        <h3 className="text-capitalize text-center">your tasks</h3>
                        {
                            items.map(item => {
                                return <div key={item.id}>{item.title && <TodoItem 
                                            key={item.id} 
                                            actualId = {item.id}
                                            title={item.title} 
                                            handleDelete={() => handleDelete(item.id)}
                                            handleEdit={() => handleEdit(item.id)}
                                            handleDone={() => handleDone(item.id)}
                                            striked={striked}  /> }
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
