import React, { Component } from 'react'

export default class TodoItem extends Component {
    
    render() {
        const { title } = this.props;
        return (
            <div>
                <li className="list-group-item text-capitalize my-2 d-flex justify-content-between">
                    <h6>{title}</h6>
                    <div className="todo-icon">
                        <span className="mx-2 text-success"><i className="fa fa-pencil"></i></span>
                        <span className="mx-2 text-danger"><i className="fa fa-trash"></i></span>
                    </div>
                </li>
            </div>
        )
    }
}
