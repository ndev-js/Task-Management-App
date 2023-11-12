import { TaskService } from "../../services/Tasks/tasks.service.js";

export const createTask = async (req, res, next) => {
  try {
    const { title, description, status } = req.body;
    const payload = {
      title,
      description,
      status,
    };

    const createtask = await TaskService.createTask(payload);
    res.json(createtask);
  } catch (error) {
    next(error);
  }
};



//task by id

export const getTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await TaskService.getTaskById(id);
    res.json(task);
  } catch (error) {
    next(error);
  }
};

//update task status using patch

export const updateTaskByStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedtask = await TaskService.updateTaskByStatus(id, status);
    res.json(updatedtask);
  } catch (error) {
    next(error);
  }
};


//get all tasks and filtered tasks
export const gettasks = async (req,res,next) =>{
  try { 
        const {status} = req.query 
        if (!status |status == undefined){
          const tasks  = await TaskService.getAllTasks();
         return res.json(tasks)
        }
        const results  = await TaskService.filteredTasks(status);
        res.json(results)
  } catch (error) {
    next(error)
  }
}

//delete task

export const deletedTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedTask = await TaskService.deletedTask(id);
    res.json(deletedTask);
  } catch (error) {
    next(error);
  }
};
