import React, { useState } from 'react'
import { InputGroup, ListGroup } from 'react-bootstrap'

function Category({ categoryList, checkedList, setCheckedList }) {




  const updateCheckedList = (e, selected) => {
    if (e.target.checked === true) {
      setCheckedList([...checkedList, selected])
    } else {
      setCheckedList(checkedList.filter(item => item !== selected))
    }
  }

  return (
    <>
      { categoryList.length !== 0 ?
        categoryList.map((item, index) =>
          <InputGroup 
            size="lg"
            key={index} 
            style={{ width:'' }} 
            className="w-auto   m-2"
          >
            <div className="p-2 border">
              {item}
            </div>
            
            <InputGroup.Append size="sm">
              <InputGroup.Checkbox
                onChange={(e) => updateCheckedList(e, item)}
              /></InputGroup.Append>

          </InputGroup>
        )
        :
        ""}
    </>
  )
}

export default Category
