import {useContext, useEffect, useState} from 'react'
import {GlobalContext} from '../context/GlobalState'
import TaskListSection from '../components/task-list/task-list-section/TaskListSection'
import TaskListForm from '../components/task-list/task-list-form/TaskListForm'
import Loader from '../components/loader/Loader'
import TaskCard from './TaskListView.styles.js'

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
    // <article className='task-card'>
    <TaskCard>
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
    </TaskCard>
  )
}

export default TaskListFrame
