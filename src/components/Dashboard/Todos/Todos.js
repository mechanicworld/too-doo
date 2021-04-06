import React, { useState, useEffect } from 'react'

import Todo from './Todo/Todo'
import CreateTodo from './CreateTodos/CreateTodo'
import { Container, Row, Col } from 'react-bootstrap'
function Todos() {

  const [todoList, setTodoList] = useState([
  ])
  return (
    <>
      <Container className="d-flex  ">
        <CreateTodo todoList={todoList} setTodoList={setTodoList} />
        {todoList.map(item => <Todo key={item.todoID} data={item} />)}
      </Container>
    </>
  )
}

export default Todos
