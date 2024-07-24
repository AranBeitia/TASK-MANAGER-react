import {MdCheck} from 'react-icons/md'
import {MdDeleteOutline} from 'react-icons/md'
import './TaskListItem.scss'

const TaskListItem = () => {
  return (
    <div className='list-item'>
      <p>To study React fundamentals</p>
      <div>
        <button>
          <MdCheck />
        </button>
        <button>
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  )
}

export default TaskListItem
