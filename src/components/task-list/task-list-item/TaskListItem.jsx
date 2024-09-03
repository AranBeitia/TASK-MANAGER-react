import {MdCheck} from 'react-icons/md'
import {MdDeleteOutline} from 'react-icons/md'
import './TaskListItem.scss'

import {useContext} from 'react'
import {GlobalContext} from '../../../context/GlobalState'

const TaskListItem = ({id, title, completed}) => {
  const {deleteTask, completeTask} = useContext(GlobalContext)

  return (
    <div className='list-item' key={id}>
      <p className={completed ? 'list-item--is-done' : ''}>{title}</p>
      <div>
        {!completed && (
          <button className='action-button' onClick={() => completeTask(id)}>
            <MdCheck />
          </button>
        )}
        <button className='action-button' onClick={() => deleteTask(id)}>
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  )
}

export default TaskListItem
