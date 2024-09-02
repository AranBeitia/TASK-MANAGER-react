import TaskListSection from '../task-list-section/TaskListSection'
import './TaskListFrame.scss'
import {FaPlus} from 'react-icons/fa6'

import {useContext, useEffect} from 'react'
import {GlobalContext} from '../../../context/GlobalState'

const TaskListFrame = () => {
  const {tasks, getTasks} = useContext(GlobalContext)

  useEffect(() => {
    getTasks()
  }, [])

  return (
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
        <div className='task-card__inner'>
          <TaskListSection
            title='Tasks todo'
            tasks={tasks}
            filter={(task) => !task.completed}
          />
        </div>
      </section>
      <section>
        <TaskListSection
          title='Done'
          tasks={tasks}
          filter={(task) => task.completed}
        />
      </section>
    </article>
  )
}

export default TaskListFrame
