import express from "express";
import {
  createTask,
  deletedTask,

  getTaskById,
  updateTaskByStatus,
  gettasks
} from "../controllers/Tasks/task.controller.js";

const taskRouter = express.Router();
//get all tasks with filtered
taskRouter.get("/tasks", gettasks);

//create Task

taskRouter.post("/tasks", createTask);
//getAll
//getById
taskRouter.get("/tasks/:id", getTaskById);
//updateTaskStatus
taskRouter.patch("/tasks/:id/status", updateTaskByStatus);
//deleteTask
taskRouter.delete("/tasks/:id", deletedTask);


export default taskRouter;