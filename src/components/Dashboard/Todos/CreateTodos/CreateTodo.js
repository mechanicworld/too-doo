
import React, { useState, useEffect } from 'react'
import { Card, InputGroup, FormControl, Button, FormLabel, Form } from 'react-bootstrap'
import style from './CreateTodo.module.css'

function CreateTodo() {

  const [createdTodo, setCreatedTodo] = useState([])
  const [createTodo, setCreateTodo] = useState(false)

  const createHandler = () => {
    setCreateTodo(!createTodo)
  }


  return (
    <>
      <Card className={` ${style.cardPosition} `} style={{ width: '18rem' }}>

        <Card.Body>
          <Button
            className="float-right mb-3"
            size="sm"
            variant="danger"
            onClick={setCreateTodo}
          >
            X
          </Button>
          <Card.Title>
            <Form.Group className="mb-3">
              <FormControl
                aria-label="Title"
                placeholder="Enter the title"
              />
            </Form.Group>
          </Card.Title>
          <Card.Text>
            <hr />
            <Form.Group className="mb-3">
              <FormControl
                aria-label="Text input with checkbox"
                placeholder="Enter Checkpoints "
              />
            </Form.Group>
          </Card.Text>
          <Button variant="dark">Add Checkpoint</Button>
        </Card.Body>
        <Card.Footer className={`${style.cardHeaderBg}`}></Card.Footer>
      </Card>

      <Card className={` ${style.cardPosition} `} style={{ width: '18rem' }}>
        <Card.Body className='d-flex justify-content-center align-items-center'>
          <Card.Text >
            <h1 className="text-center ">
              New Todo
            </h1>
          </Card.Text>
        </Card.Body>
        <Button onClick={setCreateTodo}>Create</Button>
      </Card>
    </>
  )
}

export default CreateTodo
