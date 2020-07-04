import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavbarText, Jumbotron, Container } from 'reactstrap'

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/"><img src="todo.svg" alt="Todo List" height="50" width="50"></img></NavbarBrand>
                    <NavbarText className="text-capitalize text-center"><h3>todo list</h3></NavbarText>
                </Navbar>
                <Jumbotron>
                    <Container>
                        <div className="row justify-content-center">
                            <img src="logo.svg" alt="todo" width="30%" height="auto" />
                        </div>
                    </Container>
                </Jumbotron>
                
            </div>
        )
    }
}
