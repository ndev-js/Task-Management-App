import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/tasks';

class TaskService {
  constructor() {
    this.axios = axios;
  }

  async fetchTasks(status) {
   try {
    const response = await this.axios.get(`${BASE_URL}?status=${status?status:""}`);
    return response.data.Tasks;
   } catch (error) {
    console.log(error)
    return error
   }
  }
//   async getFilteredTasks(filter){
//     console.log(filter)
//     try {
//           const response = await this.axios.get(`${BASE_URL}?status=${filter}`)
//           return response.data.Tasks
//     } catch (error) {
//         console.log(error);
//         return error
//     }
//   }
  async createTask(task) {
   try {
    const response = await this.axios.post(`${BASE_URL}`, task);
    return response.data;
   } catch (error) {
     console.log(error);
     return error
   }
  }

  async updateTask(task) {
    try {
        const response = await this.axios.put(`${BASE_URL}/${task.id}`, task);
    return response.data;
    } catch (error) {
        console.log(error);
        return error
    }
  }

  async deleteTask(taskId) {
  try {
    const response = await this.axios.delete(`${BASE_URL}/${taskId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error
  }
  }
}

export const taskApi= new TaskService();
