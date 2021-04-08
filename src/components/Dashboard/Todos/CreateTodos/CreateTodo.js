
import React, { useState, useEffect } from 'react'
import { Card, InputGroup, FormControl, Button, FormLabel, Form, ListGroup } from 'react-bootstrap'
import style from './CreateTodo.module.css'

function CreateTodo({ todosList, setTodosList }) {

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [todo, setTodo] = useState({})
  const [todos, setTodos] = useState([

  ])

  const [createTodo, setCreateTodo] = useState(false)

  const createHandler = () => {    
    setCreateTodo(!createTodo)
    setTitle("")
    setCategory("")
    setTodo({})
    setTodos([])
    

  }
  const postTodo = () => {
    setTodosList([...todosList,
    {
      todosId: todosList.length + 1,
      todoTitle: title,
      todoCategory: category,
      todoList: todos
    }])
    createHandler()
  }

  const addTodo = () => {
    setTodos([...todos, todo])
    setTodo({})

    

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
              <Form.Group size="sm" className="mb-3">
                <Form.Label> {title ? `${title} ` : "New Todo"} </Form.Label>
                <Form.Text className={`text-muted  ${style.inputText}  `}>
                  TITLE
                </Form.Text>
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
                <Form.Text className={`text-muted  ${style.inputText}  `}>
                  CATEGORY
                </Form.Text>
                <FormControl
                  aria-label="Title"
                  placeholder="Category (ex: Reading, Coding)"
                  size="sm"
                  onChange={(e) => { setCategory(e.target.value) }}
                />
              </Form.Group>
            </Card.Title>
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
              <Button disabled={(!todo.todoText || !category || !title)} onClick={addTodo} variant="dark" size="sm">Add</Button>
            </Form.Group>
            <Card.Text>
              

            </Card.Text>
            <ListGroup  variant="flush">
              {todos.map((item, index) => <ListGroup.Item size="sm" key={index}>{item.todoText}</ListGroup.Item>)}
            </ListGroup>

          </Card.Body>
          <Button disabled={(!todos || !category || !title)} onClick={postTodo} variant="dark" >Create ToDo</Button>

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
