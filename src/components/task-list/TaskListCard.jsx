import TaskListItem from './task-list-item/TaskListItem'
import './TaskListCard.scss'
import {FaPlus} from 'react-icons/fa6'

const TaskListCard = () => {
  return (
    <>
      <article className='task-list'>
        <div className='task-item'>
          <input type='text' placeholder='Add a new task' />
          <button className='primary-button'>
            <FaPlus />
          </button>
        </div>
        <h2>Tasks todo - 0</h2>
        <TaskListItem />
        <TaskListItem />
        <TaskListItem />
        <h2>Tasks done - 0</h2>
        <TaskListItem />
      </article>
    </>
  )
}

export default TaskListCard
