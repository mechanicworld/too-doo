import React from 'react'
import { Card } from 'react-bootstrap'
import style from './Todo.module.css'

function Todo() {
  return (
    <>
      <Card className={` ${style.cardPosition} `} style={{ width: '18rem'}}>
                
        
        <Card.Body>
          <Card.Title>Card Title</Card.Title>          
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>

        </Card.Body>
        <Card.Footer className={`${style.cardHeaderBg}`}></Card.Footer>
      </Card>
    </>
  )
}

export default Todo
