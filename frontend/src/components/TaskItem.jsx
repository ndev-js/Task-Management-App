// import React from 'react'
import { Badge, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const TaskItem = ({task}) => {
  const{title,description,status,createdAt} = task
  console.log("inside task item",task)
  return (
    <>
    <Card>
      <Card.Header>
        {title}
        <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />        </Card.Header>
      <Card.Body className='overflow-auto'>
        <p>{description}</p>
        
      </Card.Body>
      <Card.Footer>
        <div className='d-flex justify-content-between px-2'>
        <p className='text-muted'>{new Date(createdAt).toDateString()}</p><span><Badge className='py-2' bg={status =="completed" ? "success" :"danger"}>{status}</Badge></span>

        </div>
      </Card.Footer>
    </Card>
    </>
  )
}

export default TaskItem