import React, { useState, useEffect } from 'react'
import { Card, ListGroup, InputGroup, FormControl, Button, Form, Container, Row, Col, FormText } from 'react-bootstrap'

import style from './Todo.module.css'

function Todo({ data: { todoTitle, todoCategory, todoList, todosId }, data, todosIndex, todosList, setTodosList }) {

  const [editStatus, setEditStatus] = useState(false)
  const [todo, setTodo] = useState({})
  const [todos, setTodos] = useState(todoList)
  const [addTodoText, setAddTodoText] = useState("")

  const [editedTodoTitle, setEditedTodoTitle] = useState(todoTitle)
  const [editedTodoCategory, setEditedTodoCategory] = useState(todoCategory)


  const editStatusHandler = () => {
    setEditStatus(!editStatus)
  }

  const deleteTodoHandler = () => {
    if (window.confirm("Are you sure ?")) {
      let updatedTodosList = todosList.filter((item, index) => {
        return index !== todosIndex
      })
      setTodosList(updatedTodosList)
      console.log({ ...data })
    }
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
  const updateTodoList = () => {
    setTodos([...todos, todo])
    setTodo({})
    setAddTodoText("")
  }

  const updateTodosList = () => {
    console.log("yes")

    setTodosList(todosList.map((item,index) => {
      if(index === todosId){
        return {...item, todoTitle:editedTodoTitle, todoCategory:editedTodoCategory, todoList:todos }
      } else {
        return item
      }
    }))
    editStatusHandler()
  }

  useEffect(() => {
    
  }, [todos])
  return (
    <> {editStatus ?
      <Card className={` ${style.cardPosition} `} style={{ width: '20rem' }}>
        <Card.Body>
          <Button
            className="float-right mb-3"
            size="sm"
            variant="danger"
            onClick={deleteTodoHandler}
          >
            Delete
          </Button>
          <Card.Title>
            {/* Title */}
            <Form.Group size="sm" className="mb-3">
              <Form.Label> Editing </Form.Label>
              <Form.Text className={`text-muted  ${style.inputText}  `}>
                TITLE
              </Form.Text>
              <FormControl
                aria-label="Title"
                placeholder="Title (ex: React.js) "
                size="sm"
                required
                value={editedTodoTitle}
                onChange={(e) => setEditedTodoTitle(e.target.value)}
              />
            </Form.Group>
            {/* Category */}
            <Form.Group className="mb-3">
              <Form.Text className={`text-muted  ${style.inputText}  `}>
                CATEGORY
              </Form.Text>
              <FormControl
                aria-label="Category"
                placeholder="Category (ex: Reading, Coding)"
                size="sm"
                value={editedTodoCategory}
                onChange={(e) => setEditedTodoCategory(e.target.value)}
              />
            </Form.Group>
          </Card.Title>

          {/* Todo Input */}
          <InputGroup size="sm" className="mb-2">
            <InputGroup.Prepend size="sm" >
              <InputGroup.Checkbox disabled variant="danger" />
            </InputGroup.Prepend>
            <FormControl
              id="todoText"
              aria-label="Text input "
              placeholder="Checkpoints (ex: React-Hooks) "
              size="sm"
              value={addTodoText}
              onChange={(e) => {
                setTodo(
                  {
                    todoId: todoList.length + 1,
                    completed: false,
                    todoText: e.target.value
                  }
                )
                setAddTodoText(e.target.value)
              }}
            />
            <InputGroup.Append>
              <Button
                variant="dark"
                size="sm"
                onClick={updateTodoList}
              >
                Add
              </Button>
            </InputGroup.Append>
          </InputGroup>

          {/* Todo List  */}

          {todos.map((item, index) =>
            <InputGroup className="mb-1" key={index} size="sm">
              <InputGroup.Prepend size="sm" >
                <InputGroup.Checkbox
                  checked={item.completed}
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

        </Card.Body>
        
        <Button  variant="warning" onClick={updateTodosList}>
          Update
        </Button>
      </Card>
      :
      <Card className={` ${style.cardPosition} `} style={{ width: '18rem' }}>
        <Card.Body id="todoCard">
          <Card.Title> {editedTodoTitle} </Card.Title>
          <Card.Text>
            {editedTodoCategory}
          </Card.Text>
          {todos.map((item, index) =>
            <InputGroup key={index} size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Checkbox disabled checked={item.completed} aria-label="Checkbox for following text input" />
              </InputGroup.Prepend>
              <FormControl
                aria-label="Text input with checkbox"
                value={item.todoText}
              />
            </InputGroup>
          )}
        </Card.Body>
        <Card.Body className={`${style.todoOverlay} d-flex justify-content-center `}>
          <Container className="d-flex justify-content-center align-content-center">
            <Row className={`${style.btnRow} d-flex justify-content-center align-content-center`}>
              <Col>
                <Button
                  variant="primary"
                  onClick={editStatusHandler}
                >
                  Edit
                </Button>
              </Col>
              <Col>
                <Button
                  variant="danger"
                  onClick={deleteTodoHandler}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
        <Card.Footer className={`${style.cardHeaderBg}`}></Card.Footer>
      </Card>
    }
    </>
  )
}

export default Todo
