import {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000/tasks'
// const BASE_URL = 'https://task-manager-api-25rq.onrender.com/tasks'
const initialState = {
  tasks: [],
}

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const getTasks = async () => {
    const res = await axios.get(BASE_URL)
    dispatch({
      type: 'GET_TASKS',
      payload: res.data.tasks,
    })
  }

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/id/${id}`)
      dispatch({
        type: 'DELETE_TASK',
        payload: id,
      })
    } catch (error) {
      console.error(error)
    }
  }

  const completeTask = async (id) => {
    try {
      await axios.put(`${BASE_URL}/complete/id/${id}`)
      dispatch({
        type: 'COMPLETE_TASK',
        payload: id,
      })
    } catch (error) {
      console.error(error)
    }
  }

  const createTask = async (task) => {
    try {
      const res = await axios.post(BASE_URL, task)
      dispatch({
        type: 'ADD_TASK',
        payload: res.data.task,
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        getTasks,
        deleteTask,
        completeTask,
        createTask,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const GlobalContext = createContext(initialState)
