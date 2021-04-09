import React from 'react'

import Todo from './Todo/Todo'
import CreateTodo from './CreateTodos/CreateTodo'
import { Container, Row } from 'react-bootstrap'

function Todos({ todosList, setTodosList, checkedList }) {


  return (
    <>
      <Container fluid >
        <Row className="d-flex">
          {todosList.map((item, index) => {
            if (checkedList.length === 0 || checkedList.includes(item.todoCategory)) {
              return (
                <Todo
                  xs={12}
                  sm={6}
                  md={6}
                  lg={4}
                  xl={4}
                  key={index}
                  todosIndex={index}
                  data={item}
                  todosList={todosList}
                  setTodosList={setTodosList}
                  
                />)
            }
            return null
          }
          )}
          <CreateTodo
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            todosList={todosList}
            setTodosList={setTodosList}/>
        </Row>

      </Container>
    </>
  )
}

export default Todos
