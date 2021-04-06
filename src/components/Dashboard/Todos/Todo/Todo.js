import React, { useState } from 'react'
import { Card, ListGroup, InputGroup, FormControl, Button, Form, Container, Row, Col } from 'react-bootstrap'
import style from './Todo.module.css'

function Todo({ data: { todoTitle, todoCategory, todoList, todosId },todosIndex, todosList,  setTodosList }) {

  const [editStatus, setEditStatus] = useState(false)
  const editStatusHandler = () => {
    setEditStatus(!editStatus)
  }

  const deleteTodoHandler = () => {
    let newTodosList = todosList.filter((item, index) => {
      return index !== todosIndex
    })
    setTodosList(newTodosList)
  }

  return (
    <> {editStatus ?

      <Card className={` ${style.cardPosition} `} style={{ width: '18rem' }}>
        <Card.Body>
          <Button
            className="float-right mb-3"
            size="sm"
            variant="danger"
            onClick={editStatusHandler} 
          >
            X
          </Button>
          <Card.Title>
            {/* Title */}
            <Form.Group size="sm" className="mb-3">
              <Form.Label> {todoTitle ? `${todoTitle} ` : "New Todo"} </Form.Label>
              <Form.Text className={`text-muted  ${style.inputText}  `}>
                TITLE
          </Form.Text>
              <FormControl
                aria-label="Title"
                placeholder="Title (ex: React.js) "
                size="sm"
                required
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

            />
            <Button
              variant="dark"
              size="sm">
              Add
            </Button>

          </Form.Group>
          <Card.Text>

          </Card.Text>
          <ListGroup variant="flush">
            {todoList.map((item) => <ListGroup.Item key={item.todoId}>{item.todoText}</ListGroup.Item>)}
          </ListGroup>

        </Card.Body>
        <Button
          variant="dark"
        >
          Create ToDo
        </Button>

      </Card>

      :


      <Card className={` ${style.cardPosition} `} style={{ width: '18rem' }}>
        <Card.Body id="todoCard">
          <Card.Title> {todoTitle} </Card.Title>
          <Card.Text>
            {todoCategory}
          </Card.Text>
          {todoList.map((item, index) =>
            <InputGroup key={index} size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              </InputGroup.Prepend>
              <FormControl
                aria-label="Text input with checkbox"
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
