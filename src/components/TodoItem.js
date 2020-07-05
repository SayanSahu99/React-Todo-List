import React, { Component } from 'react'

export default class TodoItem extends Component {
    
    render() {
        const { title, handleDelete, handleEdit, handleDone, actualId, striked} = this.props;
        return (
            <div>
                <li className="list-group-item text-capitalize my-2 d-flex justify-content-between">
                    <h6><i className="fa fa-check mr-3" 
                           onClick={handleDone} />{striked.includes(actualId) ? <del>{title}</del> : title }</h6>
                    <div className="todo-icon">
                        <span className="mx-2 text-success" 
                              onClick={handleEdit}><i className="fa fa-pencil"></i></span>
                        <span className="mx-2 text-danger" 
                              onClick={handleDelete}><i className="fa fa-trash"></i></span>
                    </div>
                </li>
            </div>
        )
    }
}
