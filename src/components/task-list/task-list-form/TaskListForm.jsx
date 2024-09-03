import {FaPlus} from 'react-icons/fa6'
import './TaskListForm.scss'

import {useState, useContext} from 'react'
import {GlobalContext} from '../../../context/GlobalState'

const TaskListForm = () => {
  const {createTask} = useContext(GlobalContext)
  const [task, setTask] = useState({title: ''})

  const addTask = (event) => {
    event.preventDefault()
    console.log('addTask', task)
    setTask({title: ''})
  }

  return (
    <form className='task-form' onSubmit={addTask}>
      <input
        type='text'
        placeholder='Add a new task'
        className='task-form__input'
        value={task.title}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className='primary-button'>
        <FaPlus />
      </button>
    </form>
  )
}

export default TaskListForm
