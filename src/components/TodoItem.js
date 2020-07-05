import React, { Component } from 'react'

export default class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
    }

    toggleHover = () => {
        this.setState({hover: !this.state.hover})
    }

    render() {
        const { title, handleDelete, handleEdit, handleDone, actualId, striked} = this.props;

        let linkStyle;
        if (this.state.hover) {
            linkStyle = {color: '#34eb4c',cursor: 'pointer'}
        } else {
            linkStyle = {color: '#000'}
        }

        return (
            <div>
                <li className="list-group-item text-capitalize my-2 d-flex justify-content-between">
                    <h6><i className="fa fa-check mr-3"
                           onClick={handleDone}
                           style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} />{striked.includes(actualId) ? <del>{title}</del> : title }</h6>
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
