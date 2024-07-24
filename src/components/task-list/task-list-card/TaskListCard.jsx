import TaskListItem from '../task-list-item/TaskListItem'
import './TaskListCard.scss'
import {FaPlus} from 'react-icons/fa6'

const TaskListCard = () => {
  return (
    <>
      <article className='task-card'>
        <section className='task-card__input'>
          <input
            type='text'
            placeholder='Add a new task'
            className='input-task'
          />
          <button className='primary-button'>
            <FaPlus />
          </button>
        </section>
        <section className='task-card__list'>
          <h2>Tasks todo - 0</h2>
          <TaskListItem />
          <TaskListItem />
          <TaskListItem />
        </section>
        <section>
          <h2>Done - 0</h2>
          <TaskListItem />
        </section>
      </article>
    </>
  )
}

export default TaskListCard
