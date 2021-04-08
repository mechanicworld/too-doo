
import {InputGroup, FormControl, Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'


function Checkpoint({data:{completed, todoId, todoText}}) {

  const [completeStatus, setCompleteStatus] = useState(completed)
  

  return (
    <InputGroup className="mb-1" size="sm">
      <InputGroup.Prepend size="sm" >
        <InputGroup.Checkbox
          variant="danger"    
          onChange={(e) => {
            setCompleteStatus(!completeStatus)
          }}      
        />
      </InputGroup.Prepend>
      <FormControl
        defaultValue={todoText}
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Append>
        <Button
          size="sm"
          variant="danger"
        >
          -
      </Button>
      </InputGroup.Append>
    </InputGroup>
  )
}

export default Checkpoint
