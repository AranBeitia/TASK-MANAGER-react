import TaskListItem from './TaskListItem'
import './TaskListCard.scss'

const TaskListCard = () => {
  return (
    <>
      <article className='task-list'>
        <div className='task-item'>
          <input type='text' placeholder='Add a new task' />
          <button>+</button>
        </div>
        <h2>Tasks todo - 0</h2>
        <TaskListItem />
        <h2>Tasks done - 0</h2>
        <TaskListItem />
      </article>
    </>
  )
}

export default TaskListCard
