import { Task } from "../../models/task.js";
import { createError } from "../../Utils/Error.js";
class Tasks {
  //create Task
  async createTask(payload) {
    const Tasks = await Task.create(payload);
    return { message: "Task created successfully", Tasks };
  }

  //Get All Tasks

  async getAllTasks() {
    const Tasks = await Task.find();

    return { message: "All Tasks", Tasks };
  }
  //filtered tasks 
  async filteredTasks(status) {
     console.log("hello")
    const Tasks = await Task.find({status:status});

    return { message: "Filtered Tasks", Tasks };
  }
  //Get Specific Task
  async getTaskById(id) {
    const Tasks = await Task.findById(id);
    if (!Tasks) {
      return createError(404, `Task not found with  id ${id}`);
    }
    return { message: `Task with id ${id}`, Tasks };
  }

  //Update Task Status
  async updateTaskByStatus(id, status) {
    const updateTask = await Task.findByIdAndUpdate(id, {
      $set: { status },
      new: true
    });
    if (!updateTask) {
      return createError(404, `Task not found with  id ${id}`);
    }
    return { message: "Updated Task ", updateTask };
  }

  //Delete Task
  async deletedTask(id) {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return createError(404, `Task not found with  id ${id}`);
    }
    return { message: "Task deleted successfully", deletedTask };
  }
}

export const TaskService = new Tasks();
