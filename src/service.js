import axios from 'axios';

axios.defaults.baseURL =`${process.env.REACT_APP_API_URL}/items`;

const instance = axios.create();

export default {
  getTasks: async () => {
    const result = await instance.get();
    return result.data;
  },

  addTask: async (name) => {
    return await instance.post('',{ Name: name, IsComplete: false })
  },

  setCompleted: async (id, name, isComplete) => {
    console.log('setCompleted', { id, name, isComplete })
    return await instance.put(`/${id}`, { Name: name, IsComplete: isComplete })
  },

  deleteTask: async (id) => {
    console.log('deleteTask')
    return await instance.delete(`/${id}`)
  }
};

instance.interceptors.response.use(
  response => response,
  error => {
    console.log("error", error)
  });