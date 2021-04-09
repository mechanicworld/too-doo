import React, { useState, useEffect } from 'react'

import Todo from './Todo/Todo'
import CreateTodo from './CreateTodos/CreateTodo'
import { Container, Row, Col } from 'react-bootstrap'

function Todos({ todosList, setTodosList, checkedList }) {


  return (
    <>
      <Container className="d-flex  ">
        <CreateTodo
          todosList={todosList}
          setTodosList={setTodosList}
        />
        {todosList.map((item, index) => {
          

          if (checkedList.length === 0 || checkedList.includes(item.todoCategory) ) {
            return (
            <Todo
              key={index}
              todosIndex={index}
              data={item}
              todosList={todosList}
              setTodosList={setTodosList}
            />)
          }
        }


        )}
      </Container>
    </>
  )
}

export default Todos