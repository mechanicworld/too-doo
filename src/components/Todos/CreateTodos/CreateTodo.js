
import React, { useState, useEffect } from 'react'
import { Card, InputGroup, FormControl, Button, Container, Form } from 'react-bootstrap'
import style from './CreateTodo.module.css'
import { v4 as uuidv4 } from 'uuid';

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

  const deleteCheckpointHandler = (e, deleteIndex) => {    
    setTodos(todos.filter((item, index) => {
      return index !== deleteIndex
    }))
  }

  const updateCkeckPointHandler = (e, updatedIndex) => {
    setTodos(todos.map((item, index) => {
      if(index === updatedIndex){
        return { ...item, todoText: e.target.value}
      }
      return item
    }))
  }

  const completeHandeler = (e, updatedIndex) => {
    setTodos(todos.map((item, index) => {
      if (index === updatedIndex) {
        return { ...item, completed: e.target.checked }
      }
      return item
    }))
  }


  return (
    <>
      {createTodo ?
        <Card className={` ${style.cardPosition} `} style={{ width: '18rem', height:'25rem' }}>
          <Card.Body style={{padding:'0.8rem'}}>
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
                      todoId: uuidv4(),
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
            <Container  className={style.scroll}>
            {todos.map((item, index) => 
            <InputGroup className="mb-1" key={index} size="sm">
              <InputGroup.Prepend size="sm" >
                <InputGroup.Checkbox
                  defaultChecked={item.completed}
                  onClick={(e) => completeHandeler(e, index)}
                />
              </InputGroup.Prepend>
              <FormControl
                defaultValue={item.todoText}
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e) => updateCkeckPointHandler(e, index)}
              />
              <InputGroup.Append>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={ (e) => deleteCheckpointHandler(e, index)}
                >
                  -
                </Button>
              </InputGroup.Append>
            </InputGroup>
            )}
            </Container>
            

          </Card.Body>
          <Button disabled={(!todos || !category || !title)} onClick={postTodo} variant="dark" >Create ToDo</Button>

        </Card>
        :
        <Card className={` ${style.cardPosition} `} style={{ width: '18rem',height:'25rem' }}>
          <Card.Body className='d-flex justify-content-center align-items-center' style={{padding:'0.8rem'}}>
            <Card.Text >
              <span className="text-center h1 text-black-50 ">
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
