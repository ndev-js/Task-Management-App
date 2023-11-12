// // TaskList.js
// import  { useEffect ,useState} from 'react';
// import { taskApi } from '../api/api';
// import TaskFilter from './TaskFilter';
// import { Row , Col} from 'react-bootstrap';
// import TaskItem from './TaskItem';

// const TaskList = () => {
//   // const [filter, setFilter] = useState('all');
//   const [filteredTasks, setFilteredTasks] = useState([]);
//   const [tasks,setTasks] = useState([])
//   const handleFilterChange = async (newFilter) => {
//     setFilter(newFilter);

//     // Get all tasks from the API.
//     const allTasks = await taskApi.getAllTasks();
//     console.log("allTasks",allTasks)
  
//     // Filter the tasks based on the current filter value.
//     const filteredTasks = allTasks.filter((task) => {
//       switch (filter) {
//         case 'all':
//           return true;
//         case 'completed':
//           return task.completed;
//         case 'incomplete':
//           return !task.completed;
//         default:
//           return true;
//       }
//     });

//     // Update the `filteredTasks` state variable.
//     setFilteredTasks(filteredTasks);
//   };
  

//    const fetchTask=async()=>{
//       const data = await taskApi.fetchTasks();
//        setTasks(data)
//     console.log(data,"data [-------------]")
//     }

//    useEffect(()=>{
//    fetchTask()
//    },[])
//   return (
//     <div>
//       <TaskFilter tasks={filteredTasks} onChange={handleFilterChange} />
//       <Row className="justify-content-center">
//   {tasks.map((task,i) =>
//     (
//       <Col lg={3} md={4} sm={12} key={i}>
//         <TaskItem task={task} />
//       </Col>
//     )
//   )}
// </Row>
//     </div>
//   );
// };

// export default TaskList;
import React, { useEffect, useState } from 'react';
import { taskApi } from '../api/api';
import TaskFilter from './TaskFilter';
import { Row, Col } from 'react-bootstrap';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [tasks, setTasks] = useState([]);

  // Handle filter change
  const handleFilterChange = async (newFilter) => {
    console.log(newFilter,"filter")
     // Get all tasks from the API
     const allTasks = await taskApi.fetchTasks(newFilter);
     console.log('filter:', allTasks);
     setTasks(allTasks)
     // Filter the tasks based on the current filter value
   
 
   };
   const fetchTasks=async()=>{
     const alltasks = await taskApi.fetchTasks();
     setTasks(alltasks)
   }
  // Fetch tasks upon component mount
  useEffect(() => {
  fetchTasks()
  }, []);

  return (
    <div>
      <TaskFilter onChange={handleFilterChange} />
      <Row className="justify-content-center">
        {tasks.map((task, i) => (
          <Col lg={3} md={4} sm={12} key={i}>
            <TaskItem task={task} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TaskList;
