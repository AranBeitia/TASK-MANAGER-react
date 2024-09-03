import {useContext, useEffect, useState} from 'react'
import {GlobalContext} from '../../../context/GlobalState'
import TaskListSection from '../task-list-section/TaskListSection'
import TaskListForm from '../task-list-form/TaskListForm'
import Loader from '../../loader/Loader'
import './TaskListFrame.scss'

const TaskListFrame = () => {
  const {tasks, getTasks} = useContext(GlobalContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true)
      await getTasks()
      setLoading(false)
    }
    fetchTasks()
  }, [])

  return (
    <article className='task-card'>
      <TaskListForm />
      {!loading ? (
        <>
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
        </>
      ) : (
        <Loader />
      )}
    </article>
  )
}

export default TaskListFrame
