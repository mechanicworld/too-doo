import React, { useState } from 'react'
import { InputGroup, ListGroup } from 'react-bootstrap'

function Category({ todosList, setTodosList, filterStatus, setFilterStatus }) {
  const [filter, setFilter] = useState(filterStatus)

  return (
    <>

      { todosList.length !== 0 ?
        todosList.map((item, index) =>
          <InputGroup>
            <ListGroup.Item key={index} >{item.todoCategory} </ListGroup.Item>
            <InputGroup.Checkbox></InputGroup.Checkbox>
          </InputGroup>
        )
        :
        ""}
    </>
  )
}

export default Category
