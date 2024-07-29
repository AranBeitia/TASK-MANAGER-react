import TaskListItem from '../task-list-item/TaskListItem'

const TaskListSection = ({title, tasks, filter}) => {
  const filteredTasks = tasks.filter(filter)

  return (
    <>
      <h2>
        {title} - {filteredTasks.length}
      </h2>
      {filteredTasks.map((task) => (
        <TaskListItem
          key={task._id}
          id={task._id}
          title={task.title}
          completed={task.completed}
        />
      ))}
    </>
  )
}

export default TaskListSection
