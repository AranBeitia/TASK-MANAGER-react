import {MdCheck} from 'react-icons/md'
import {MdDeleteOutline} from 'react-icons/md'
import './TaskListItem.scss'

const TaskListItem = ({id, title, completed}) => {
  return (
    <div className='list-item' key={id}>
      <p className={completed && 'list-item--is-done'}>{title}</p>
      <div>
        <button className='action-button'>
          <MdCheck />
        </button>
        <button className='action-button'>
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  )
}

export default TaskListItem
