import React from 'react'
import {Button, Container} from 'react-bootstrap'
import TaskForm from '../components/TaskForm'
import TasksList from '../components/TasksList'
const Layout = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <Container >
       <h3 className='text-center my-4'>Task Management App</h3>
       <div className='d-flex justify-content-end px-4'>
       <Button onClick={()=>setModalShow(true)}>Add Task</Button>
       </div>
        <TaskForm  show={modalShow}  onHide={() => setModalShow(false)}/>
        <TasksList/>
    </Container>
    </>
  )
}

export default Layout