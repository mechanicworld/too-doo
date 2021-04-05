import React from 'react'
import Todo from './Todo/Todo'
import CreateTodo from './CreateTodos/CreateTodo'
import { Container, Row, Col } from 'react-bootstrap'
function Todos() {
  return (
    <>
      <Container>
        <Row >          
            <Todo/>
            <CreateTodo/>          
        </Row>
      </Container>
    </>
  )
}

export default Todos
