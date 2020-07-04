import React, { Component } from 'react'
import { Input, Form } from 'reactstrap'

export default class TodoInput extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Input type="text" id="todo-input" name="todo-input" className="form-control" />
                </Form>
            </div>
        )
    }
}
