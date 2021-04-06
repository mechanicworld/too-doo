
import React, { useState, useEffect } from 'react'
import { Card, InputGroup, FormControl, Button, FormLabel, Form, ListGroup } from 'react-bootstrap'
import style from './CreateTodo.module.css'

function CreateTodo({ todoList, setTodoList }) {

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [todo, setTodo] = useState({})
  const [todos, setTodos] = useState([

  ])

  const [createTodo, setCreateTodo] = useState(false)

  const createHandler = () => {
    console.log(createTodo)
    setCreateTodo(!createTodo)

  }
  const postTodo = () => {
    setTodoList([...todoList,
    {
      todosId: todoList.length + 1,
      todoTitle: title,
      todoCategory: category,
      todoList: todos
    }])
  }

  const addTodo = () => {
    setTodos([...todos, todo])
    setTodo({})

    document.getElementById("todoText").value = ""

  }

  return (
    <>
      {createTodo ?
        <Card className={` ${style.cardPosition} `} style={{ width: '18rem' }}>
          <Card.Body>
            <Button
              className="float-right mb-3"
              size="sm"
              variant="danger"
              onClick={createHandler}
            >
              X
            </Button>
            <Card.Title>
              {/* Title */}
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <FormControl
                  aria-label="Title"
                  placeholder="Title (ex: React.js) "
                  size="sm"
                  required
                  onChange={(e) => { setTitle(e.target.value) }}
                />
              </Form.Group>
              {/* Category */}
              <Form.Group className="mb-3">
                <FormControl
                  aria-label="Title"
                  placeholder="Category (ex: Reading, Coding)"
                  size="sm"
                  onChange={(e) => { setCategory(e.target.value) }}                  
                />
              </Form.Group>
            </Card.Title>

            <Card.Text>
              {/* Todo Input */}
              <Form.Group className="mb-3 d-flex">
                <FormControl
                  id="todoText"
                  aria-label="Text input "
                  placeholder="Checkpoints (ex: React-Hooks) "
                  size="sm"   
                  onChange={(e) => {
                    setTodo(
                      {
                        todoId: todos.length + 1,
                        completed: false,
                        todoText: e.target.value
                      }
                    )
                  }}
                />
                <Button disabled={(!todo.todoText|| !category ||!title)} onClick={addTodo} variant="dark" size="sm">Add</Button>
              </Form.Group>
            </Card.Text>
            <ListGroup variant="flush">
              {todos.map(item => <ListGroup.Item>{item.todoText}</ListGroup.Item>)}
            </ListGroup>

          </Card.Body>
          <Button onClick={postTodo} variant="dark" >Create ToDo</Button>

        </Card>
        :
        <Card className={` ${style.cardPosition} `} style={{ width: '18rem' }}>
          <Card.Body className='d-flex justify-content-center align-items-center'>
            <Card.Text >
              <span className="text-center h1 ">
                New Todo
              </span>
            </Card.Text>
          </Card.Body>
          <Button onClick={createHandler}>Create</Button>
        </Card>
      }
    </>
  )
}

export default CreateTodo
