import React from 'react'
import { Card, ListGroup} from 'react-bootstrap'
import style from './Todo.module.css'

function Todo({ data: { todoTitle, todoCategory, todoList } }) {
  return (
    <>
      <Card className={` ${style.cardPosition} `} style={{ width: '18rem' }}>


        <Card.Body>
          <Card.Title> {todoTitle} </Card.Title>
          <Card.Text>
            {todoCategory}
            
            <ListGroup variant="flush">
              {todoList.map(item => <ListGroup.Item>{item.todoText}</ListGroup.Item>)}
            </ListGroup>
            
          </Card.Text>

        </Card.Body>
        <Card.Footer className={`${style.cardHeaderBg}`}></Card.Footer>
      </Card>
    </>
  )
}

export default Todo
