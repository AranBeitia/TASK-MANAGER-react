import {useState, useContext} from 'react'
import {GlobalContext} from '../../../context/GlobalState'
import {FaPlus} from 'react-icons/fa6'
import Loader from '../../loader/Loader'
import {TaskForm, TaskInput, TaskButton} from './TaskListForm.styles.js'

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
        <TaskForm onSubmit={addTask}>
          <TaskInput
            type='text'
            placeholder='Add a new task'
            value={task.title}
            onChange={(e) => setTask({title: e.target.value})}
          />
          <TaskButton>
            <FaPlus />
          </TaskButton>
        </TaskForm>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default TaskListForm
