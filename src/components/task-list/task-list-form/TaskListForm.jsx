import {useState, useContext} from 'react'
import {GlobalContext} from '../../../context/GlobalState'
import {FaPlus} from 'react-icons/fa6'
import Loader from '../../loader/Loader'
import './TaskListForm.scss'

const TaskListForm = () => {
  const {createTask} = useContext(GlobalContext)
  const [task, setTask] = useState({title: ''})
  const [loading, setLoading] = useState(false)

  const addTask = async (event) => {
    event.preventDefault()
    setLoading(true)
    await createTask(task)
    setTask({title: ''})
    setLoading(false)
  }

  return (
    <>
      {!loading ? (
        <form className='task-form' onSubmit={addTask}>
          <input
            type='text'
            placeholder='Add a new task'
            className='task-form__input'
            value={task.title}
            onChange={(e) => setTask({title: e.target.value})}
          />
          <button className='primary-button'>
            <FaPlus />
          </button>
        </form>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default TaskListForm
