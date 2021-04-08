import React, { useState } from 'react'
import { InputGroup, ListGroup } from 'react-bootstrap'

function Category({ categoryList, checkedList, setCheckedList  }) {

  const updateCheckedList = (e, selected) => {
    if(e.target.checked === true) {
      setCheckedList([...checkedList, selected])
    }else {
      setCheckedList(checkedList.filter(item => item !== selected ))
    }
  }

  return (
    <>
      { categoryList.length !== 0 ?
        categoryList.map((item, index) =>
          <InputGroup key={index}>
            <ListGroup.Item
            >
              {item}
            </ListGroup.Item>
            <InputGroup.Checkbox 
              onChange={ (e) => updateCheckedList(e, item) }
            />
          </InputGroup>
        )
        :
        ""}
    </>
  )
}

export default Category
