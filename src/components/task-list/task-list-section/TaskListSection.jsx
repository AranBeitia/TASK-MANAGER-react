import TaskListItem from '../task-list-item/TaskListItem'
import './TaskListSection.scss'

const TaskListSection = ({title, tasks, filter}) => {
  const filteredTasks = tasks.filter(filter)

  return (
    <>
      <h2>
        {title} - {filteredTasks.length}
      </h2>
      <div className='task-list-section'>
        {filteredTasks.map((task) => (
          <TaskListItem
            key={task._id}
            id={task._id}
            title={task.title}
            completed={task.completed}
          />
        ))}
      </div>
    </>
  )
}

export default TaskListSection
