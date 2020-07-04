import React, { Component } from 'react'
import { Input, Form, Card, CardBody, InputGroup, Button } from 'reactstrap'

export default class TodoInput extends Component {
    render() {
        return (
            <Card>
                <CardBody>
                    <Form>
                        <InputGroup>
                            <div className="input-group-prepend">
                                <div className="input-group-text text-white bg-secondary"><i className="fa fa-book"/></div>
                            </div>
                            <Input type="text" id="todo-input" name="todo-input"
                                    className="form-control text-capitalize" placeholder="add a task" />
                            <Button type="submit" className="btn mt-3 btn-block text-capitalize">add task</Button>
                        </InputGroup>

                    </Form>
                </CardBody>
            </Card>
        )
    }
}
